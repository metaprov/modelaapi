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

var github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb.js');
goog.exportSymbol('proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.displayName = 'proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse';
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
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    livekey: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse;
  return proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLivekey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLivekey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string liveKey = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.prototype.getLivekey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.IngestResponse.prototype.setLivekey = function(value) {
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
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.displayName = 'proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse';
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
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    archivepath: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse;
  return proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setArchivepath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArchivepath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string archivePath = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.prototype.getArchivepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectResponse.prototype.setArchivepath = function(value) {
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
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.displayName = 'proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest';
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
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bucketspec: (f = msg.getBucketspec()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec.toObject(includeInstance, f),
    crednamespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    credname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    connectionspec: (f = msg.getConnectionspec()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    key: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest;
  return proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketname(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec.deserializeBinaryFromReader);
      msg.setBucketspec(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrednamespace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredname(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.deserializeBinaryFromReader);
      msg.setConnectionspec(value);
      break;
    case 6:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "");
         });
      break;
    case 7:
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
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBucketspec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec.serializeBinaryToWriter
    );
  }
  f = message.getCrednamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCredname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getConnectionspec();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string bucketName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.getBucketname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.setBucketname = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec bucketSpec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.getBucketspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec|undefined} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.setBucketspec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.clearBucketspec = function() {
  this.setBucketspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.hasBucketspec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string credNamespace = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.getCrednamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.setCrednamespace = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string credName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.getCredname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.setCredname = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec connectionSpec = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.getConnectionspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec|undefined} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.setConnectionspec = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.clearConnectionspec = function() {
  this.setConnectionspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.hasConnectionspec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, bytes> secret = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
};


/**
 * optional string key = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ObjectRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
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
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.displayName = 'proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse';
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
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exist: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse;
  return proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExist();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool exist = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.prototype.getExist = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeld.services.objectstored.v1.ExistInVirtualBucketResponse.prototype.setExist = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.github.com.metaprov.modeld.services.objectstored.v1);
