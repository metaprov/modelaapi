// source: github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated.proto
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

var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
var k8s_io_api_rbac_v1_generated_pb = require('../../../../../../../k8s.io/api/rbac/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_rbac_v1_generated_pb);
var k8s_io_apimachinery_pkg_api_resource_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_api_resource_generated_pb);
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb);
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AlgorithmSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Algorithm items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.repeatedFields_ = [6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameworkname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    task: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    sparse: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    integerparametersList: jspb.Message.toObjectList(msg.getIntegerparametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.toObject, includeInstance),
    floatparametersList: jspb.Message.toObjectList(msg.getFloatparametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.toObject, includeInstance),
    categoricalparametersList: jspb.Message.toObjectList(msg.getCategoricalparametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameworkname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSparse(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinaryFromReader);
      msg.addIntegerparameters(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinaryFromReader);
      msg.addFloatparameters(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinaryFromReader);
      msg.addCategoricalparameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIntegerparametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.serializeBinaryToWriter
    );
  }
  f = message.getFloatparametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.serializeBinaryToWriter
    );
  }
  f = message.getCategoricalparametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string frameworkName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getFrameworkname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setFrameworkname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearFrameworkname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasFrameworkname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string task = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setTask = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearTask = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool sparse = 5;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getSparse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setSparse = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearSparse = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasSparse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated IntParameter integerParameters = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getIntegerparametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setIntegerparametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.addIntegerparameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearIntegerparametersList = function() {
  return this.setIntegerparametersList([]);
};


/**
 * repeated FloatParameter floatParameters = 7;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getFloatparametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setFloatparametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.addFloatparameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearFloatparametersList = function() {
  return this.setFloatparametersList([]);
};


/**
 * repeated CategoricalParameter categoricalParameters = 8;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getCategoricalparametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setCategoricalparametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.addCategoricalparameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearCategoricalparametersList = function() {
  return this.setCategoricalparametersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    defaultvalue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    enumsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDefaultvalue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnums(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEnumsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultValue = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.getDefaultvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.clearDefaultvalue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.hasDefaultvalue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string enums = 3;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.getEnumsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.setEnumsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.addEnums = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.clearEnumsList = function() {
  return this.setEnumsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CloudSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CloudStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Cloud items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.repeatedFields_ = [4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultregionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    defaultmachineclassname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    defaultgpuclassname: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    machineclassesList: jspb.Message.toObjectList(msg.getMachineclassesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.toObject, includeInstance),
    gpuclassesList: jspb.Message.toObjectList(msg.getGpuclassesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.toObject, includeInstance),
    regionsList: jspb.Message.toObjectList(msg.getRegionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultregionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultmachineclassname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultgpuclassname(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinaryFromReader);
      msg.addMachineclasses(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinaryFromReader);
      msg.addGpuclasses(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinaryFromReader);
      msg.addRegions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMachineclassesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.serializeBinaryToWriter
    );
  }
  f = message.getGpuclassesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.serializeBinaryToWriter
    );
  }
  f = message.getRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.serializeBinaryToWriter
    );
  }
};


/**
 * optional string defaultRegionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getDefaultregionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setDefaultregionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearDefaultregionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.hasDefaultregionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultMachineClassName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getDefaultmachineclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setDefaultmachineclassname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearDefaultmachineclassname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.hasDefaultmachineclassname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string defaultGpuClassName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getDefaultgpuclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setDefaultgpuclassname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearDefaultgpuclassname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.hasDefaultgpuclassname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MachineClass machineClasses = 4;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getMachineclassesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setMachineclassesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.addMachineclasses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearMachineclassesList = function() {
  return this.setMachineclassesList([]);
};


/**
 * repeated GpuClass gpuClasses = 5;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getGpuclassesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setGpuclassesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.addGpuclasses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearGpuclassesList = function() {
  return this.setGpuclassesList([]);
};


/**
 * repeated Region regions = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getRegionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setRegionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.addRegions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearRegionsList = function() {
  return this.setRegionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    machinecostsList: jspb.Message.toObjectList(msg.getMachinecostsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.toObject, includeInstance),
    gpucostsList: jspb.Message.toObjectList(msg.getGpucostsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinaryFromReader);
      msg.addMachinecosts(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinaryFromReader);
      msg.addGpucosts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMachinecostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.serializeBinaryToWriter
    );
  }
  f = message.getGpucostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MachineClassCost machineCosts = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.getMachinecostsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.setMachinecostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.addMachinecosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.clearMachinecostsList = function() {
  return this.setMachinecostsList([]);
};


/**
 * repeated GpuClassCost gpuCosts = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.getGpucostsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.setGpucostsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.addGpucosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.clearGpucostsList = function() {
  return this.setGpucostsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    code: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.clearCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.hasCode = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    min: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    max: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    defaultvalue: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    log: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDefaultvalue(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLog(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double min = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearMin = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasMin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double max = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearMax = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasMax = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double defaultValue = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearDefaultvalue = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasDefaultvalue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool log = 6;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getLog = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setLog = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearLog = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasLog = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    regionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    vcpu: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    gpumem: (f = msg.getGpumem()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVcpu(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setGpumem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getGpumem();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string regionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getRegionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setRegionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearRegionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasRegionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 vcpu = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getVcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setVcpu = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearVcpu = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasVcpu = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity gpumem = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getGpumem = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setGpumem = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearGpumem = function() {
  return this.setGpumem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasGpumem = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    region: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    costperminute: (f = msg.getCostperminute()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    costspot: (f = msg.getCostspot()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostperminute(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostspot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCostperminute();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getCostspot();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string region = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costPerMinute = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.getCostperminute = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.setCostperminute = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.clearCostperminute = function() {
  return this.setCostperminute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.hasCostperminute = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costSpot = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.getCostspot = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.setCostspot = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.clearCostspot = function() {
  return this.setCostspot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.hasCostspot = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    min: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    max: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    defaultvalue: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMax(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 min = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearMin = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasMin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 max = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearMax = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasMax = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 defaultValue = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearDefaultvalue = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasDefaultvalue = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MLFrameworkSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MLFramework items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    lang: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLang(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string lang = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.setLang = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.clearLang = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.hasLang = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    regionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    mem: (f = msg.getMem()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    vcpu: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    storage: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionname(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setMem(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVcpu(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
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
 * optional string code = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string regionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getRegionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setRegionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearRegionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasRegionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity mem = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getMem = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setMem = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearMem = function() {
  return this.setMem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasMem = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 vcpu = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getVcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setVcpu = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearVcpu = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasVcpu = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string storage = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getStorage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setStorage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearStorage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasStorage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    region: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    costperminute: (f = msg.getCostperminute()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    costspot: (f = msg.getCostspot()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostperminute(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostspot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCostperminute();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getCostspot();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string region = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costPerMinute = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.getCostperminute = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.setCostperminute = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.clearCostperminute = function() {
  return this.setCostperminute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.hasCostperminute = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costSpot = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.getCostspot = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.setCostspot = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.clearCostspot = function() {
  return this.setCostspot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.hasCostspot = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PretrainedModelSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PretrainedModel items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.setImage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.clearImage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.hasImage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PublicDatasetSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PublicDataset items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    task: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    id: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    externalname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    dataurl: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setImage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearImage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string task = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setTask = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearTask = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string externalName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getExternalname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setExternalname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearExternalname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasExternalname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string dataUrl = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getDataurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setDataurl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearDataurl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasDataurl = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    defaultdatacentername: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    location: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    billingcode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    datacentersList: jspb.Message.toObjectList(msg.getDatacentersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultdatacentername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingcode(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinaryFromReader);
      msg.addDatacenters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatacentersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultDatacenterName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getDefaultdatacentername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setDefaultdatacentername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearDefaultdatacentername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasDefaultdatacentername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string location = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string billingCode = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getBillingcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setBillingcode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearBillingcode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasBillingcode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated DataCenter datacenters = 5;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getDatacentersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setDatacentersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.addDatacenters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearDatacentersList = function() {
  return this.setDatacentersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserRoleClassSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated UserRoleClass items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    k8s_io_api_rbac_v1_generated_pb.PolicyRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_rbac_v1_generated_pb.PolicyRule;
      reader.readMessage(value,k8s_io_api_rbac_v1_generated_pb.PolicyRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      k8s_io_api_rbac_v1_generated_pb.PolicyRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated k8s.io.api.rbac.v1.PolicyRule rules = 1;
 * @return {!Array<!proto.k8s.io.api.rbac.v1.PolicyRule>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.k8s.io.api.rbac.v1.PolicyRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_api_rbac_v1_generated_pb.PolicyRule, 1));
};


/**
 * @param {!Array<!proto.k8s.io.api.rbac.v1.PolicyRule>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.k8s.io.api.rbac.v1.PolicyRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.api.rbac.v1.PolicyRule}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.k8s.io.api.rbac.v1.PolicyRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    uri: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.setUri = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.clearUri = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.hasUri = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WorkloadClassSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated WorkloadClass items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    tasksList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    frameworks: (f = msg.getFrameworks()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.toObject(includeInstance, f),
    podtemplate: (f = msg.getPodtemplate()) && k8s_io_api_core_v1_generated_pb.PodTemplateSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTasks(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinaryFromReader);
      msg.setFrameworks(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.PodTemplateSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.PodTemplateSpec.deserializeBinaryFromReader);
      msg.setPodtemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFrameworks();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.serializeBinaryToWriter
    );
  }
  f = message.getPodtemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.PodTemplateSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setImage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearImage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string tasks = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getTasksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setTasksList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.addTasks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};


/**
 * optional MLFrameworkList frameworks = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getFrameworks = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setFrameworks = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearFrameworks = function() {
  return this.setFrameworks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.hasFrameworks = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.PodTemplateSpec podTemplate = 4;
 * @return {?proto.k8s.io.api.core.v1.PodTemplateSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getPodtemplate = function() {
  return /** @type{?proto.k8s.io.api.core.v1.PodTemplateSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.PodTemplateSpec, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.PodTemplateSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setPodtemplate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearPodtemplate = function() {
  return this.setPodtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.hasPodtemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1);
