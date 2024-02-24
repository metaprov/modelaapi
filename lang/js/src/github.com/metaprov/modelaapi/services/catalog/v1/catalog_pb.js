// source: github.com/metaprov/modelaapi/services/catalog/v1/catalog.proto
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
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_api_annotations_pb = require('../../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse';
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getLabelsMap();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    algorithms: (f = msg.getAlgorithms()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList.deserializeBinaryFromReader);
      msg.setAlgorithms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlgorithms();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AlgorithmList algorithms = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AlgorithmList}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.prototype.getAlgorithms = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AlgorithmList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AlgorithmList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.prototype.setAlgorithms = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.prototype.clearAlgorithms = function() {
  return this.setAlgorithms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse.prototype.hasAlgorithms = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    algorithm: (f = msg.getAlgorithm()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlgorithm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm algorithm = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.prototype.getAlgorithm = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.prototype.setAlgorithm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.prototype.clearAlgorithm = function() {
  return this.setAlgorithm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse.prototype.hasAlgorithm = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getLabelsMap();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    managedimages: (f = msg.getManagedimages()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList.deserializeBinaryFromReader);
      msg.setManagedimages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getManagedimages();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImageList managedImages = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImageList}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.prototype.getManagedimages = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImageList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImageList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.prototype.setManagedimages = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.prototype.clearManagedimages = function() {
  return this.setManagedimages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse.prototype.hasManagedimages = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    manageditem: (f = msg.getManageditem()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage.deserializeBinaryFromReader);
      msg.setManageditem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getManageditem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImage managedItem = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImage}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.prototype.getManageditem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImage} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImage|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.prototype.setManageditem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.prototype.clearManageditem = function() {
  return this.setManageditem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse.prototype.hasManageditem = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getLabelsMap();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mlframeworks: (f = msg.getMlframeworks()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList.deserializeBinaryFromReader);
      msg.setMlframeworks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMlframeworks();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFrameworkList mlframeworks = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFrameworkList}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.prototype.getMlframeworks = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFrameworkList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.prototype.setMlframeworks = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.prototype.clearMlframeworks = function() {
  return this.setMlframeworks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse.prototype.hasMlframeworks = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mlframework: (f = msg.getMlframework()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework.deserializeBinaryFromReader);
      msg.setMlframework(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMlframework();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFramework mlframework = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFramework}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.prototype.getMlframework = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFramework} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFramework|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.prototype.setMlframework = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.prototype.clearMlframework = function() {
  return this.setMlframework(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse.prototype.hasMlframework = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getLabelsMap();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clouds: (f = msg.getClouds()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList.deserializeBinaryFromReader);
      msg.setClouds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClouds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CloudList clouds = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CloudList}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.prototype.getClouds = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CloudList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CloudList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.prototype.setClouds = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.prototype.clearClouds = function() {
  return this.setClouds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse.prototype.hasClouds = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cloud: (f = msg.getCloud()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud.deserializeBinaryFromReader);
      msg.setCloud(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCloud();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Cloud cloud = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Cloud}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.prototype.getCloud = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Cloud} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Cloud|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.prototype.setCloud = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.prototype.clearCloud = function() {
  return this.setCloud(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse.prototype.hasCloud = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getLabelsMap();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicdatasets: (f = msg.getPublicdatasets()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList.deserializeBinaryFromReader);
      msg.setPublicdatasets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicdatasets();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDatasetList publicDatasets = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDatasetList}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.prototype.getPublicdatasets = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDatasetList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.prototype.setPublicdatasets = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.prototype.clearPublicdatasets = function() {
  return this.setPublicdatasets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse.prototype.hasPublicdatasets = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicdataset: (f = msg.getPublicdataset()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset.deserializeBinaryFromReader);
      msg.setPublicdataset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicdataset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDataset publicDataset = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDataset}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.prototype.getPublicdataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.prototype.setPublicdataset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.prototype.clearPublicdataset = function() {
  return this.setPublicdataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse.prototype.hasPublicdataset = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: msg.getRaw_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes raw = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes raw = 1;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.prototype.getRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRaw()));
};


/**
 * optional bytes raw = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRaw()`
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse.prototype.setRaw = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: msg.getRaw_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes raw = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes raw = 1;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.prototype.getRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRaw()));
};


/**
 * optional bytes raw = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRaw()`
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse.prototype.setRaw = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    crname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCrname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string crname = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.getCrname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest.prototype.setCrname = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: msg.getRaw_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes raw = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes raw = 1;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.prototype.getRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRaw()));
};


/**
 * optional bytes raw = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRaw()`
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse.prototype.setRaw = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getLabelsMap();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pretrainedmodels: (f = msg.getPretrainedmodels()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList.deserializeBinaryFromReader);
      msg.setPretrainedmodels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPretrainedmodels();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModelList pretrainedModels = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModelList}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.prototype.getPretrainedmodels = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModelList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.prototype.setPretrainedmodels = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.prototype.clearPretrainedmodels = function() {
  return this.setPretrainedmodels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsResponse.prototype.hasPretrainedmodels = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pretrainedmodel: (f = msg.getPretrainedmodel()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel.deserializeBinaryFromReader);
      msg.setPretrainedmodel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPretrainedmodel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModel pretrainedModel = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModel}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.prototype.getPretrainedmodel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModel} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModel|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.prototype.setPretrainedmodel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.prototype.clearPretrainedmodel = function() {
  return this.setPretrainedmodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetPretrainedModelResponse.prototype.hasPretrainedmodel = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = msg.getLabelsMap();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    workloads: (f = msg.getWorkloads()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList.deserializeBinaryFromReader);
      msg.setWorkloads(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkloads();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClassList workloads = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClassList}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.prototype.getWorkloads = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClassList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.prototype.setWorkloads = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.prototype.clearWorkloads = function() {
  return this.setWorkloads(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse.prototype.hasWorkloads = function() {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNamespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamespace();
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest.prototype.setNamespace = function(value) {
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
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    workload: (f = msg.getWorkload()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse;
  return proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass.deserializeBinaryFromReader);
      msg.setWorkload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClass workload = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClass}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.prototype.getWorkload = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.prototype.setWorkload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.prototype.clearWorkload = function() {
  return this.setWorkload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse.prototype.hasWorkload = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.services.catalog.v1);
