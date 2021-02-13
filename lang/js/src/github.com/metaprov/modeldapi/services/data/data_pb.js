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

var github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb = require('../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb = require('../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_services_common_common_pb = require('../../../../../github.com/metaprov/modeldapi/services/common/common_pb.js');
var k8s_io_api_core_v1_generated_pb = require('../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.AskModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.AskModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.CreateReportResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DataSourceResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsReadFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsShutdownRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsShutdownResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.PartitionValues', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.TellModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.TellModelResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsReadFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsReadFileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsReadFileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest;
  return proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFeatureRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    content: (f = msg.getContent()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset content = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.getContent = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.setContent = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.clearContent = function() {
  this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsWriteFileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest;
  return proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 4;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 4));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadAudioRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest;
  return proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadTextCorpusRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse;
  return proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset result = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsReadFromStoreResponse.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pipeline: (f = msg.getPipeline()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest;
  return proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipeline();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline pipeline = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.prototype.getPipeline = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.prototype.setPipeline = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.prototype.clearPipeline = function() {
  this.setPipeline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineRequest.prototype.hasPipeline = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse;
  return proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset result = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunDataPipelineResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    recipe: (f = msg.getRecipe()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f),
    reciperun: (f = msg.getReciperun()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest;
  return proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setRecipe(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRecipe();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
  f = message.getReciperun();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe recipe = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getRecipe = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setRecipe = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearRecipe = function() {
  this.setRecipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasRecipe = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun reciperun = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.getReciperun = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.setReciperun = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.clearReciperun = function() {
  this.setReciperun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeRequest.prototype.hasReciperun = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse;
  return proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe result = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsRunRecipeResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    recipe: (f = msg.getRecipe()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setRecipe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRecipe();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe recipe = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.getRecipe = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.setRecipe = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.clearRecipe = function() {
  this.setRecipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileRequest.prototype.hasRecipe = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_services_common_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_common_pb.TableView.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeld.services.common.TableView result = 1;
 * @return {?proto.github.com.metaprov.modeld.services.common.TableView}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeld.services.common.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_common_pb.TableView, 1));
};


/** @param {?proto.github.com.metaprov.modeld.services.common.TableView|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateRecipeProfileResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DataSourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DataSourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DataSourceResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DataSourceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DataSourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DataSourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DataSourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DataSourceResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DataSourceResponse}
 */
proto.github.com.metaprov.modeld.services.data.DataSourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DataSourceResponse;
  return proto.github.com.metaprov.modeld.services.data.DataSourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DataSourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DataSourceResponse}
 */
proto.github.com.metaprov.modeld.services.data.DataSourceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DataSourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DataSourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DataSourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DataSourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DatasetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.DatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profile: (f = msg.getProfile()) && github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
      github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modeld.services.common.DatasetProfile profile = 2;
 * @return {?proto.github.com.metaprov.modeld.services.common.DatasetProfile}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modeld.services.common.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile, 2));
};


/** @param {?proto.github.com.metaprov.modeld.services.common.DatasetProfile|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateDatasetProfileResponse.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 10;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 10));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsCreateModelProfileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    forecastsList: jspb.Message.toObjectList(msg.getForecastsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest;
  return proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 11:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.deserializeBinaryFromReader);
      msg.addForecasts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getForecastsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 10;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 10));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj forecasts = 11;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj>}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.getForecastsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj, 11));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj>} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.setForecastsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.addForecasts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj, opt_index);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesRequest.prototype.clearForecastsList = function() {
  this.setForecastsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partitionsList: jspb.Message.toObjectList(msg.getPartitionsList(),
    proto.github.com.metaprov.modeld.services.data.PartitionValues.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse;
  return proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeld.services.data.PartitionValues;
      reader.readMessage(value,proto.github.com.metaprov.modeld.services.data.PartitionValues.deserializeBinaryFromReader);
      msg.addPartitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeld.services.data.PartitionValues.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PartitionValues partitions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeld.services.data.PartitionValues>}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.prototype.getPartitionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeld.services.data.PartitionValues>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeld.services.data.PartitionValues, 1));
};


/** @param {!Array<!proto.github.com.metaprov.modeld.services.data.PartitionValues>} value */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.prototype.setPartitionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeld.services.data.PartitionValues=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeld.services.data.PartitionValues}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.prototype.addPartitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeld.services.data.PartitionValues, opt_index);
};


proto.github.com.metaprov.modeld.services.data.DsCreateForecastPartitionFilesResponse.prototype.clearPartitionsList = function() {
  this.setPartitionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.PartitionValues.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.PartitionValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.PartitionValues.displayName = 'proto.github.com.metaprov.modeld.services.data.PartitionValues';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.PartitionValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.PartitionValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valuesList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.PartitionValues}
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.PartitionValues;
  return proto.github.com.metaprov.modeld.services.data.PartitionValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.PartitionValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.PartitionValues}
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.PartitionValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.PartitionValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string values = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.setValuesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.addValues = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.github.com.metaprov.modeld.services.data.PartitionValues.prototype.clearValuesList = function() {
  this.setValuesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 10;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 10));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse;
  return proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsMergeForecastFileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject, includeInstance),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 9:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model models = 8;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 8));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setModelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearModelsList = function() {
  this.setModelsList([]);
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 9;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 9));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsCreateStudyProfileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest;
  return proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string errors = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.prototype.setErrorsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.prototype.addErrors = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeld.services.data.DsValidateDatasetResponse.prototype.clearErrorsList = function() {
  this.setErrorsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    rows: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest;
  return proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 7:
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
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRows();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 rows = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetRequest.prototype.setRows = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsGenerateDatasetResponse.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest;
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 8;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 8));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    rungs: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest;
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
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
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRungs();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 rungs = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.getRungs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsRequest.prototype.setRungs = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse;
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetToRungsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsSplitDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    columntype: jspb.Message.getFieldWithDefault(msg, 8, ""),
    columnname: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumntype(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getColumntype();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getColumnname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string columnType = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getColumntype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setColumntype = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string columnName = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.getColumnname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileRequest.prototype.setColumnname = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    plot: (f = msg.getPlot()) && github_com_metaprov_modeldapi_services_common_common_pb.Plot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modeldapi_services_common_common_pb.Plot;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_common_pb.Plot.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
      github_com_metaprov_modeldapi_services_common_common_pb.Plot.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modeld.services.common.Plot plot = 2;
 * @return {?proto.github.com.metaprov.modeld.services.common.Plot}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.getPlot = function() {
  return /** @type{?proto.github.com.metaprov.modeld.services.common.Plot} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_common_pb.Plot, 2));
};


/** @param {?proto.github.com.metaprov.modeld.services.common.Plot|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.setPlot = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.clearPlot = function() {
  this.setPlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsCreateColumnProfileResponse.prototype.hasPlot = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    quick: jspb.Message.getFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuick(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getQuick();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool quick = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.getQuick = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileRequest.prototype.setQuick = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: (f = msg.getProfile()) && github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeld.services.common.DatasetProfile profile = 1;
 * @return {?proto.github.com.metaprov.modeld.services.common.DatasetProfile}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modeld.services.common.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile, 1));
};


/** @param {?proto.github.com.metaprov.modeld.services.common.DatasetProfile|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsDatasetProfileResponse.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest;
  return proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 4;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 4));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string key = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: (f = msg.getProfile()) && github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse;
  return proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeld.services.common.DatasetProfile profile = 1;
 * @return {?proto.github.com.metaprov.modeld.services.common.DatasetProfile}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modeld.services.common.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile, 1));
};


/** @param {?proto.github.com.metaprov.modeld.services.common.DatasetProfile|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsInferSchemaResponse.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest;
  return proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 4;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 4));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string key = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableview: (f = msg.getTableview()) && github_com_metaprov_modeldapi_services_common_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse;
  return proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_common_pb.TableView.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeld.services.common.TableView tableview = 1;
 * @return {?proto.github.com.metaprov.modeld.services.common.TableView}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modeld.services.common.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_common_pb.TableView, 1));
};


/** @param {?proto.github.com.metaprov.modeld.services.common.TableView|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.prototype.setTableview = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.prototype.clearTableview = function() {
  this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetTableViewResponse.prototype.hasTableview = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest;
  return proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 3;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 3));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableview: (f = msg.getTableview()) && github_com_metaprov_modeldapi_services_common_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse;
  return proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_common_pb.TableView.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeld.services.common.TableView tableview = 1;
 * @return {?proto.github.com.metaprov.modeld.services.common.TableView}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modeld.services.common.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_common_pb.TableView, 1));
};


/** @param {?proto.github.com.metaprov.modeld.services.common.TableView|undefined} value */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.prototype.setTableview = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.prototype.clearTableview = function() {
  this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.DsGetMisclassTableViewResponse.prototype.hasTableview = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest;
  return proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 8;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 8));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateModelReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    forecast: (f = msg.getForecast()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest;
  return proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setForecast(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getForecast();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model forecast = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getForecast = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setForecast = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearForecast = function() {
  this.setForecast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 8;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 8));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateForecastReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.CreateReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.CreateReportResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.CreateReportResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.CreateReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateReportResponse}
 */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.CreateReportResponse;
  return proto.github.com.metaprov.modeld.services.data.CreateReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateReportResponse}
 */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.CreateReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.prototype.getPdf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes pdf = 1;
 * This is a type-conversion wrapper around `getPdf()`
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.prototype.getPdf_asB64 = function() {
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
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.prototype.getPdf_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPdf()));
};


/** @param {!(string|Uint8Array)} value */
proto.github.com.metaprov.modeld.services.data.CreateReportResponse.prototype.setPdf = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest;
  return proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateDatasetReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    models: (f = msg.getModels()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest;
  return proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.deserializeBinaryFromReader);
      msg.setModels(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 10:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getModels();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList models = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getModels = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setModels = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearModels = function() {
  this.setModels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasModels = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 9;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 9));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.CreateStudyReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.AskModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.AskModelRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.AskModelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.AskModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.AskModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    studyname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    studynamespace: jspb.Message.getFieldWithDefault(msg, 4, ""),
    studyspec: (f = msg.getStudyspec()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.toObject(includeInstance, f),
    datasourcename: jspb.Message.getFieldWithDefault(msg, 6, ""),
    datasourcenamespace: jspb.Message.getFieldWithDefault(msg, 7, ""),
    datasourcespec: (f = msg.getDatasourcespec()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.toObject(includeInstance, f),
    datasetname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    datasetnamespace: jspb.Message.getFieldWithDefault(msg, 10, ""),
    datasetspec: (f = msg.getDatasetspec()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.toObject(includeInstance, f),
    budget: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.AskModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.AskModelRequest;
  return proto.github.com.metaprov.modeld.services.data.AskModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.AskModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.AskModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudyname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudynamespace(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.deserializeBinaryFromReader);
      msg.setStudyspec(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourcename(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourcenamespace(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.deserializeBinaryFromReader);
      msg.setDatasourcespec(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetnamespace(value);
      break;
    case 11:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.deserializeBinaryFromReader);
      msg.setDatasetspec(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBudget(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.AskModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.AskModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudyname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStudynamespace();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStudyspec();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.serializeBinaryToWriter
    );
  }
  f = message.getDatasourcename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDatasourcenamespace();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDatasourcespec();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getDatasetname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDatasetnamespace();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDatasetspec();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.serializeBinaryToWriter
    );
  }
  f = message.getBudget();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string studyName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getStudyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setStudyname = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string studyNamespace = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getStudynamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setStudynamespace = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec studySpec = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getStudyspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setStudyspec = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.clearStudyspec = function() {
  this.setStudyspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.hasStudyspec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string datasourceName = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getDatasourcename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setDatasourcename = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string datasourceNamespace = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getDatasourcenamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setDatasourcenamespace = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec datasourceSpec = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getDatasourcespec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setDatasourcespec = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.clearDatasourcespec = function() {
  this.setDatasourcespec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.hasDatasourcespec = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string datasetName = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setDatasetname = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string datasetNamespace = 10;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getDatasetnamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setDatasetnamespace = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec datasetSpec = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getDatasetspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec, 11));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setDatasetspec = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.clearDatasetspec = function() {
  this.setDatasetspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.hasDatasetspec = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 budget = 12;
 * @return {number}
 */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.getBudget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeld.services.data.AskModelRequest.prototype.setBudget = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.AskModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.AskModelResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.AskModelResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.AskModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.AskModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.AskModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.AskModelResponse;
  return proto.github.com.metaprov.modeld.services.data.AskModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.AskModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.AskModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.AskModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.AskModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.AskModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec spec = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.AskModelResponse.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.AskModelResponse.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.TellModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.TellModelRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.TellModelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.TellModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.TellModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.TellModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.TellModelRequest;
  return proto.github.com.metaprov.modeld.services.data.TellModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.TellModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.TellModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeld.services.data.TellModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.TellModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.TellModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.TellModelRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.TellModelRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.TellModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.TellModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.TellModelResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.TellModelResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.TellModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.TellModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.TellModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.TellModelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.TellModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.TellModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.TellModelResponse;
  return proto.github.com.metaprov.modeld.services.data.TellModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.TellModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.TellModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.TellModelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.TellModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.TellModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.TellModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.TellModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsShutdownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.DsShutdownRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsShutdownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DsShutdownRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsShutdownRequest;
  return proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsShutdownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsShutdownRequest}
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsShutdownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.DsShutdownResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.DsShutdownResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.DsShutdownResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.data.DsShutdownResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.DsShutdownResponse;
  return proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsShutdownResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.DsShutdownResponse}
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.DsShutdownResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.DsShutdownResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.github.com.metaprov.modeld.services.data);
