// source: github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated.proto
/**
 * @fileoverview
 * @enhanceable
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
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec', null, global);
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.repeatedFields_, null);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus';
}
/**
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec';
}
/**
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



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    wizardsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    question: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

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
 * repeated string wizards = 5;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getWizardsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setWizardsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.addWizards = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearWizardsList = function() {
  return this.setWizardsList([]);
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
 * optional string owner = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CurtainCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition, opt_index);
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



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    replicas: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    autoscale: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    weight: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canary: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    shadow: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    filter: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canarymetricsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplicas(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoscale(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeight(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanary(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShadow(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 8:
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCanarymetricsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string modelName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setModelname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearModelname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.hasModelname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 replicas = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getReplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setReplicas = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearReplicas = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.hasReplicas = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool autoscale = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getAutoscale = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setAutoscale = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearAutoscale = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.hasAutoscale = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 weight = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setWeight = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearWeight = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.hasWeight = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool canary = 5;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getCanary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setCanary = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearCanary = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.hasCanary = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool shadow = 6;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getShadow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setShadow = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearShadow = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.hasShadow = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string filter = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setFilter = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearFilter = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string canaryMetrics = 8;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.getCanarymetricsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.setCanarymetricsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.addCanarymetrics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.prototype.clearCanarymetricsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    imagename: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    deploymentname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    servicename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    hpaname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    current95: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    current99: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    lastprediction: (f = msg.getLastprediction()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    dailypredictionavg: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDeploymentname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHpaname(value);
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
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastprediction(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDailypredictionavg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLastprediction();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional string imageName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getImagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setImagename = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearImagename = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasImagename = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string deploymentName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDeploymentname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDeploymentname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearDeploymentname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasDeploymentname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string serviceName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getServicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setServicename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearServicename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasServicename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string hpaName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getHpaname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setHpaname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearHpaname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasHpaname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double current95 = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getCurrent95 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setCurrent95 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearCurrent95 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasCurrent95 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double current99 = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getCurrent99 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setCurrent99 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearCurrent99 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasCurrent99 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastPrediction = 7;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getLastprediction = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 7));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setLastprediction = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearLastprediction = function() {
  return this.setLastprediction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasLastprediction = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 dailyPredictionAvg = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDailypredictionavg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDailypredictionavg = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearDailypredictionavg = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasDailypredictionavg = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.deserializeBinaryFromReader);
      msg.setTable(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.deserializeBinaryFromReader);
      msg.setBot(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTable();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.serializeBinaryToWriter
    );
  }
  f = message.getBot();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.serializeBinaryToWriter
    );
  }
  f = message.getStreaming();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional TableChannelSpec table = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.getTable = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.setTable = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.clearTable = function() {
  return this.setTable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.hasTable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BotChannelSpec bot = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.getBot = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.setBot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.clearBot = function() {
  return this.setBot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.hasBot = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BucketChannelSpec bucket = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StreamingChannelSpec streaming = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.getStreaming = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.setStreaming = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.clearStreaming = function() {
  return this.setStreaming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.prototype.hasStreaming = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictionPipelineSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictionPipelineStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PredictionPipeline items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictionPipelineRunSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictionPipelineRunStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PredictionPipelineRun items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    predictorname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    labeled: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    objective: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    datasetname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    input: (f = msg.getInput()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    owner: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredictorname(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLabeled(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjective(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string predictorName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.getPredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.setPredictorname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.clearPredictorname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.hasPredictorname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool labeled = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.getLabeled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.setLabeled = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.clearLabeled = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.hasLabeled = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string objective = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.getObjective = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.setObjective = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.clearObjective = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.hasObjective = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.setDatasetname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.clearDatasetname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation input = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.getInput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 5));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation output = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.getOutput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 6));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string owner = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    phase: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional double score = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.setScore = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.clearScore = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.hasScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phase = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.setPhase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.clearPhase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.setCompletiontime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.clearCompletiontime = function() {
  return this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated PredictionPipelineRunCondition conditions = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRunStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    predictorname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    labeled: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    objective: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    datasetname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    input: (f = msg.getInput()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    owner: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredictorname(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLabeled(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjective(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string predictorName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.getPredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.setPredictorname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.clearPredictorname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.hasPredictorname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool labeled = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.getLabeled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.setLabeled = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.clearLabeled = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.hasLabeled = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string objective = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.getObjective = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.setObjective = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.clearObjective = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.hasObjective = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.setDatasetname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.clearDatasetname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation input = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.getInput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 5));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation output = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.getOutput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 6));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string owner = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    phase: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional double score = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.setScore = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.clearScore = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.hasScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phase = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.setPhase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.clearPhase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.setCompletiontime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.clearCompletiontime = function() {
  return this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated PredictionPipelineCondition conditions = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.repeatedFields_ = [9,15,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    ownername: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    productref: (f = msg.getProductref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    port: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    path: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    accesstype: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    template: (f = msg.getTemplate()) && k8s_io_api_core_v1_generated_pb.PodTemplate.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.toObject, includeInstance),
    driftcheck: (f = msg.getDriftcheck()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.toObject(includeInstance, f),
    progressive: (f = msg.getProgressive()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject(includeInstance, f),
    artifactsfolder: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    inputchannelsList: jspb.Message.toObjectList(msg.getInputchannelsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.toObject, includeInstance),
    outputchannelsList: jspb.Message.toObjectList(msg.getOutputchannelsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.toObject, includeInstance),
    owner: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f
  };

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
      msg.setOwnername(value);
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
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.PodTemplate;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.PodTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.deserializeBinaryFromReader);
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.deserializeBinaryFromReader);
      msg.addInputchannels(value);
      break;
    case 16:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.deserializeBinaryFromReader);
      msg.addOutputchannels(value);
      break;
    case 17:
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.PodTemplate.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec.serializeBinaryToWriter
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
  f = message.getInputchannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.serializeBinaryToWriter
    );
  }
  f = message.getOutputchannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string ownerName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOwnername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOwnername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOwnername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasOwnername = function() {
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
 * optional int32 port = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string path = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearPath = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasPath = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string accessType = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAccesstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAccesstype = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearAccesstype = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasAccesstype = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.PodTemplate template = 8;
 * @return {?proto.k8s.io.api.core.v1.PodTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getTemplate = function() {
  return /** @type{?proto.k8s.io.api.core.v1.PodTemplate} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.PodTemplate, 8));
};


/**
 * @param {?proto.k8s.io.api.core.v1.PodTemplate|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
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
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated ModelDeploymentSpec models = 9;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec, 9));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentSpec, opt_index);
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
 * repeated PredictionChannel inputChannels = 15;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getInputchannelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel, 15));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setInputchannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.addInputchannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearInputchannelsList = function() {
  return this.setInputchannelsList([]);
};


/**
 * repeated PredictionChannel outputChannels = 16;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOutputchannelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel, 16));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOutputchannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.addOutputchannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOutputchannelsList = function() {
  return this.setOutputchannelsList([]);
};


/**
 * optional string owner = 17;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.repeatedFields_ = [1,2,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.toObject, includeInstance),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject, includeInstance),
    monitorlastattemptat: (f = msg.getMonitorlastattemptat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.toObject(includeInstance, f),
    monitorlastscore: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    monitorlastlatency: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    health: (f = msg.getHealth()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.toObject(includeInstance, f),
    statusesList: jspb.Message.toObjectList(msg.getStatusesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.toObject, includeInstance)
  };

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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinaryFromReader);
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.deserializeBinaryFromReader);
      msg.addStatuses(value);
      break;
    default:
      reader.skipField();
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.serializeBinaryToWriter
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
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModelDeploymentStatus modelStatus = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getModelstatusList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setModelstatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addModelstatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, opt_index);
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
 * repeated ChannelStatus statuses = 7;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getStatusesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictorTemplateSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PredictorTemplate items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictorSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorTemplateSpec.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
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
