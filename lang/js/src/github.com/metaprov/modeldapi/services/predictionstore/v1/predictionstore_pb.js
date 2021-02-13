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

var github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb.js');
var k8s_io_api_core_v1_generated_pb = require('../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.exportSymbol('proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.displayName = 'proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest';
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
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest;
  return proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
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
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 4;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 4));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionsIngestRequest.prototype.hasSecret = function() {
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
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.displayName = 'proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse';
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
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse;
  return proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse}
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.predictionstore.v1.PredictionIngestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.github.com.metaprov.modeld.services.predictionstore.v1);
