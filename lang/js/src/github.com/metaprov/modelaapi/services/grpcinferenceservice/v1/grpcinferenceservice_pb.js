// source: github.com/metaprov/modelaapi/services/grpcinferenceservice/v1/grpcinferenceservice.proto
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

var protoc$gen$swagger_options_annotations_pb = require('../../../../../../protoc-gen-swagger/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$swagger_options_annotations_pb);
var google_api_annotations_pb = require('../../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.ParameterChoiceCase', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.displayName = 'proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue';
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    live: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool live = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.prototype.getLive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse.prototype.setLive = function(value) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ready: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReady(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReady();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ready = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.prototype.getReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse.prototype.setReady = function(value) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest.prototype.setVersion = function(value) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ready: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReady(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReady();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ready = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.prototype.getReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse.prototype.setReady = function(value) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    extensionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExtensionsList();
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string extensions = 3;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.repeatedFields_ = [2,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    platform: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addVersions(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datatype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shapeList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatatype(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addShape(values[i]);
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatatype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datatype = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.getDatatype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.setDatatype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 shape = 3;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string versions = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.getVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.setVersionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.addVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * optional string platform = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated TensorMetadata inputs = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated TensorMetadata outputs = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.repeatedFields_ = [5,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.toObject) : [],
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.toObject, includeInstance),
    rawInputContentsList: msg.getRawInputContentsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinaryFromReader, "", new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter());
         });
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addRawInputContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.serializeBinaryToWriter);
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.serializeBinaryToWriter
    );
  }
  f = message.getRawInputContentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datatype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shapeList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.toObject) : [],
    contents: (f = msg.getContents()) && proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatatype(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addShape(values[i]);
      }
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinaryFromReader, "", new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter());
         });
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.deserializeBinaryFromReader);
      msg.setContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatatype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.serializeBinaryToWriter);
  }
  f = message.getContents();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datatype = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.getDatatype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.setDatatype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 shape = 3;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * optional InferTensorContents contents = 5;
 * @return {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.getContents = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.setContents = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.clearContents = function() {
  return this.setContents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.prototype.hasContents = function() {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinaryFromReader, "", new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter());
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, InferParameter> parameters = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_version = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getModelVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.setModelVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * repeated InferInputTensor inputs = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated InferRequestedOutputTensor outputs = 6;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * repeated bytes raw_input_contents = 7;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getRawInputContentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * repeated bytes raw_input_contents = 7;
 * This is a type-conversion wrapper around `getRawInputContentsList()`
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getRawInputContentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getRawInputContentsList()));
};


/**
 * repeated bytes raw_input_contents = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawInputContentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.getRawInputContentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getRawInputContentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.setRawInputContentsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.addRawInputContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.prototype.clearRawInputContentsList = function() {
  return this.setRawInputContentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.toObject) : [],
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.toObject, includeInstance),
    rawOutputContentsList: msg.getRawOutputContentsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinaryFromReader, "", new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter());
         });
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addRawOutputContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.serializeBinaryToWriter);
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.serializeBinaryToWriter
    );
  }
  f = message.getRawOutputContentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      6,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datatype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shapeList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.toObject) : [],
    contents: (f = msg.getContents()) && proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatatype(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addShape(values[i]);
      }
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinaryFromReader, "", new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter());
         });
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.deserializeBinaryFromReader);
      msg.setContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatatype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.serializeBinaryToWriter);
  }
  f = message.getContents();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datatype = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.getDatatype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.setDatatype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 shape = 3;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * optional InferTensorContents contents = 5;
 * @return {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.getContents = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.setContents = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.clearContents = function() {
  return this.setContents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.prototype.hasContents = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string model_name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_version = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getModelVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.setModelVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, InferParameter> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;};


/**
 * repeated InferOutputTensor outputs = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * repeated bytes raw_output_contents = 6;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getRawOutputContentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * repeated bytes raw_output_contents = 6;
 * This is a type-conversion wrapper around `getRawOutputContentsList()`
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getRawOutputContentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getRawOutputContentsList()));
};


/**
 * repeated bytes raw_output_contents = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawOutputContentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.getRawOutputContentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getRawOutputContentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.setRawOutputContentsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.addRawOutputContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.prototype.clearRawOutputContentsList = function() {
  return this.setRawOutputContentsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.ParameterChoiceCase = {
  PARAMETER_CHOICE_NOT_SET: 0,
  BOOL_PARAM: 1,
  INT64_PARAM: 2,
  STRING_PARAM: 3
};

/**
 * @return {proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.ParameterChoiceCase}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.getParameterChoiceCase = function() {
  return /** @type {proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.ParameterChoiceCase} */(jspb.Message.computeOneofCase(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolParam: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    int64Param: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringParam: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolParam(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInt64Param(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringParam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt64(
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
};


/**
 * optional bool bool_param = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.getBoolParam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.setBoolParam = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.clearBoolParam = function() {
  return jspb.Message.setOneofField(this, 1, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.hasBoolParam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 int64_param = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.getInt64Param = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.setInt64Param = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.clearInt64Param = function() {
  return jspb.Message.setOneofField(this, 2, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.hasInt64Param = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_param = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.getStringParam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.setStringParam = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.clearStringParam = function() {
  return jspb.Message.setOneofField(this, 3, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter.prototype.hasStringParam = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.repeatedFields_ = [1,2,3,4,5,6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolContentsList: (f = jspb.Message.getRepeatedBooleanField(msg, 1)) == null ? undefined : f,
    intContentsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    int64ContentsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    uintContentsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    uint64ContentsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    fp32ContentsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f,
    fp64ContentsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? undefined : f,
    bytesContentsList: msg.getBytesContentsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBoolContents(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIntContents(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInt64Contents(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUintContents(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUint64Contents(values[i]);
      }
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFp32Contents(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFp64Contents(values[i]);
      }
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addBytesContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoolContentsList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
  f = message.getIntContentsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getInt64ContentsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getUintContentsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
    );
  }
  f = message.getUint64ContentsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      5,
      f
    );
  }
  f = message.getFp32ContentsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      6,
      f
    );
  }
  f = message.getFp64ContentsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      7,
      f
    );
  }
  f = message.getBytesContentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      8,
      f
    );
  }
};


/**
 * repeated bool bool_contents = 1;
 * @return {!Array<boolean>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getBoolContentsList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 1));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setBoolContentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addBoolContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearBoolContentsList = function() {
  return this.setBoolContentsList([]);
};


/**
 * repeated int32 int_contents = 2;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getIntContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setIntContentsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addIntContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearIntContentsList = function() {
  return this.setIntContentsList([]);
};


/**
 * repeated int64 int64_contents = 3;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getInt64ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setInt64ContentsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addInt64Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearInt64ContentsList = function() {
  return this.setInt64ContentsList([]);
};


/**
 * repeated uint32 uint_contents = 4;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getUintContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setUintContentsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addUintContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearUintContentsList = function() {
  return this.setUintContentsList([]);
};


/**
 * repeated uint64 uint64_contents = 5;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getUint64ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setUint64ContentsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addUint64Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearUint64ContentsList = function() {
  return this.setUint64ContentsList([]);
};


/**
 * repeated float fp32_contents = 6;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getFp32ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setFp32ContentsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addFp32Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearFp32ContentsList = function() {
  return this.setFp32ContentsList([]);
};


/**
 * repeated double fp64_contents = 7;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getFp64ContentsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setFp64ContentsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addFp64Contents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearFp64ContentsList = function() {
  return this.setFp64ContentsList([]);
};


/**
 * repeated bytes bytes_contents = 8;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getBytesContentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * repeated bytes bytes_contents = 8;
 * This is a type-conversion wrapper around `getBytesContentsList()`
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getBytesContentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getBytesContentsList()));
};


/**
 * repeated bytes bytes_contents = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesContentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.getBytesContentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getBytesContentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.setBytesContentsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.addBytesContents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents.prototype.clearBytesContentsList = function() {
  return this.setBytesContentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    task: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.toObject, includeInstance),
    schema: (f = msg.getSchema()) && proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTask(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTask();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.serializeBinaryToWriter
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string task = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.setTask = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ModelInfo models = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional SchemaInfo schema = 5;
 * @return {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.getSchema = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.prototype.hasSchema = function() {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    product: jspb.Message.getFieldWithDefault(msg, 4, ""),
    trainingmetric: jspb.Message.getFieldWithDefault(msg, 5, ""),
    trainingscore: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 7, ""),
    canary: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    shadow: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    traffic: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    filter: jspb.Message.getFieldWithDefault(msg, 11, ""),
    rank: jspb.Message.getFieldWithDefault(msg, 12, 0),
    logpath: jspb.Message.getFieldWithDefault(msg, 13, ""),
    p95: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    p99: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    lastprediction: jspb.Message.getFieldWithDefault(msg, 16, 0),
    dailypredictionavg: jspb.Message.getFieldWithDefault(msg, 17, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProduct(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainingmetric(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTrainingscore(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanary(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShadow(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTraffic(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRank(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogpath(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setP95(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setP99(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastprediction(value);
      break;
    case 17:
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProduct();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTrainingmetric();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTrainingscore();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCanary();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getShadow();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getTraffic();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getLogpath();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getP95();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getP99();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getLastprediction();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getDailypredictionavg();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string product = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getProduct = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setProduct = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string trainingMetric = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getTrainingmetric = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setTrainingmetric = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float trainingScore = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getTrainingscore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setTrainingscore = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string status = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool canary = 8;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getCanary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setCanary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool shadow = 9;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getShadow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setShadow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional float traffic = 10;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getTraffic = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setTraffic = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional string filter = 11;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 rank = 12;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string logPath = 13;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getLogpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setLogpath = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional float p95 = 14;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getP95 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setP95 = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional float p99 = 15;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getP99 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setP99 = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional int64 lastPrediction = 16;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getLastprediction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setLastprediction = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 dailyPredictionAvg = 17;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.getDailypredictionavg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.prototype.setDailypredictionavg = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.toObjectList(msg.getColumnsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.deserializeBinaryFromReader);
      msg.addColumns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ColumnInfo columns = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.prototype.getColumnsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.prototype.setColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.prototype.addColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    datasetmin: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    datasetmean: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    datasetstddev: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    datasetmax: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDatasetmin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDatasetmean(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDatasetstddev(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDatasetmax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatasetmin();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getDatasetmean();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getDatasetstddev();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getDatasetmax();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float datasetMin = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.getDatasetmin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.setDatasetmin = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float datasetMean = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.getDatasetmean = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.setDatasetmean = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float datasetStdDev = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.getDatasetstddev = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.setDatasetstddev = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float datasetMax = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.getDatasetmax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo.prototype.setDatasetmax = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PredictorInfo item = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse.prototype.hasItem = function() {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    predictornamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    predictorname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredictornamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredictorname(value);
      break;
    case 3:
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPredictornamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPredictorname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string predictorNamespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.getPredictornamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.setPredictornamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string predictorName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.getPredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.setPredictorname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelInfo item = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    validate: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    explain: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    format: jspb.Message.getFieldWithDefault(msg, 5, ""),
    payload: jspb.Message.getFieldWithDefault(msg, 6, ""),
    labeled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    metricsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidate(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExplain(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLabeled(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addMetrics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getValidate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getExplain();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLabeled();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool validate = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getValidate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setValidate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool explain = 4;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getExplain = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setExplain = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string format = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payload = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool labeled = 7;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getLabeled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setLabeled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string metrics = 8;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.getMetricsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.setMetricsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.addMetrics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.toObject, includeInstance),
    scoresMap: (f = msg.getScoresMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 2:
      var value = msg.getScoresMap();
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
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.serializeBinaryToWriter
    );
  }
  f = message.getScoresMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeFloat);
  }
};


/**
 * repeated PredictResultLineItem items = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * map<string, float> scores = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.getScoresMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.prototype.clearScoresMap = function() {
  this.getScoresMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.repeatedFields_ = [4,5,6,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    label: jspb.Message.getFieldWithDefault(msg, 3, ""),
    probabilitiesList: jspb.Message.toObjectList(msg.getProbabilitiesList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.toObject, includeInstance),
    missingcolumnsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    outofboundList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    baseshapvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    shapvaluesList: jspb.Message.toObjectList(msg.getShapvaluesList(),
    proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.deserializeBinaryFromReader);
      msg.addProbabilities(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addMissingcolumns(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutofbound(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBaseshapvalue(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.deserializeBinaryFromReader);
      msg.addShapvalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProbabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.serializeBinaryToWriter
    );
  }
  f = message.getMissingcolumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getOutofboundList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getBaseshapvalue();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getShapvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional float score = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string label = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ProbabilityValue probabilities = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getProbabilitiesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setProbabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.addProbabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.clearProbabilitiesList = function() {
  return this.setProbabilitiesList([]);
};


/**
 * repeated string missingColumns = 5;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getMissingcolumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setMissingcolumnsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.addMissingcolumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.clearMissingcolumnsList = function() {
  return this.setMissingcolumnsList([]);
};


/**
 * repeated string outOfBound = 6;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getOutofboundList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setOutofboundList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.addOutofbound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.clearOutofboundList = function() {
  return this.setOutofboundList([]);
};


/**
 * optional float baseShapValue = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getBaseshapvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setBaseshapvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * repeated ShapValue shapValues = 8;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue>}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.getShapvaluesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
*/
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.setShapvaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.addShapvalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem.prototype.clearShapvaluesList = function() {
  return this.setShapvaluesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
    probability: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProbability(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProbability();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float probability = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.prototype.getProbability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue.prototype.setProbability = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    feature: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue;
  return proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeature(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeature();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional string feature = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.prototype.getFeature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.prototype.setFeature = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue} returns this
 */
proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1);
