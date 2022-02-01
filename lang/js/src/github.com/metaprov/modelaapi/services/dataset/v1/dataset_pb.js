// source: github.com/metaprov/modelaapi/services/dataset/v1/dataset.proto
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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_api_annotations_pb = require('../../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_services_common_v1_common_pb = require('../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_services_common_v1_common_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse';
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderBy: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string order_by = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.getOrderBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsRequest.prototype.setOrderBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasets: (f = msg.getDatasets()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList.deserializeBinaryFromReader);
      msg.setDatasets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasets();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetList datasets = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetList}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.prototype.getDatasets = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.prototype.setDatasets = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.prototype.clearDatasets = function() {
  return this.setDatasets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ListDatasetsResponse.prototype.hasDatasets = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetRequest.prototype.clearLabelsMap = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    yaml: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setYaml(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getYaml();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset item = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string yaml = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.getYaml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetResponse.prototype.setYaml = function(value) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset item = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetRequest.prototype.hasItem = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset item = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetRequest.prototype.hasFieldMask = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UpdateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DeleteDatasetResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: msg.getContent_asB64(),
    index: jspb.Message.getFieldWithDefault(msg, 3, 0),
    last: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFname(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLast(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLast();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string fname = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.getFname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.setFname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes content = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes content = 2;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int32 index = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool last = 4;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.getLast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkRequest.prototype.setLast = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ok: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFname(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOk();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string fname = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.prototype.getFname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.prototype.setFname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool ok = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.UploadChunkResponse.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    item: (f = msg.getItem()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset item = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileRequest.prototype.hasItem = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profile = 2;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateDatasetProfileResponse.prototype.hasProfile = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    col: jspb.Message.getFieldWithDefault(msg, 3, ""),
    item: (f = msg.getItem()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCol(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string col = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.getCol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.setCol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset item = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileRequest.prototype.hasItem = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.Plot plot = 2;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.Plot}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.getPlot = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.Plot} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.Plot|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.setPlot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.clearPlot = function() {
  return this.setPlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CreateColumnProfileResponse.prototype.hasPlot = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUri();
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uri = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileRequest.prototype.setUri = function(value) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profile = 3;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatasetProfileResponse.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.addProfiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profiles = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.setProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.CompareDatasetsResponse.prototype.clearProfilesList = function() {
  return this.setProfilesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.addProfiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profiles = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.setProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GenerateDatasetResponse.prototype.clearProfilesList = function() {
  return this.setProfilesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.addProfiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profiles = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.setProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ValidateDatasetResponse.prototype.clearProfilesList = function() {
  return this.setProfilesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetRequest.prototype.setName = function(value) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes raw = 1;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.prototype.getRaw_asB64 = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.DownloadDatasetResponse.prototype.setRaw = function(value) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionnamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connectionname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionnamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionnamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectionname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string connectionNamespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.prototype.getConnectionnamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.prototype.setConnectionnamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesRequest.prototype.setConnectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.prototype.getDatabasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.prototype.setDatabasesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.prototype.addDatabases = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetDatabasesResponse.prototype.clearDatabasesList = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionnamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connectionname: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionnamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionnamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectionname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
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
 * optional string connectionNamespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.getConnectionnamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.setConnectionnamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.setConnectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string databaseName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.getDatabasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesRequest.prototype.setDatabasename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.prototype.getTablesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.prototype.setTablesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.prototype.addTables = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.GetTablesResponse.prototype.clearTablesList = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionnamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connectionname: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionnamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionnamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectionname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
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
 * optional string connectionNamespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.getConnectionnamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.setConnectionnamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.setConnectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string databaseName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.getDatabasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.setDatabasename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sql = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.getSql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlRequest.prototype.setSql = function(value) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.prototype.setTableview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.prototype.clearTableview = function() {
  return this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.ExecuteSqlResponse.prototype.hasTableview = function() {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionnamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connectionname: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionnamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionnamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectionname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
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
 * optional string connectionNamespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.getConnectionnamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.setConnectionnamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.setConnectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string databaseName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.getDatabasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.setDatabasename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sql = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.getSql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotRequest.prototype.setSql = function(value) {
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
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse;
  return proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string bucket = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.dataset.v1.SnapshotResponse.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.services.dataset.v1);
