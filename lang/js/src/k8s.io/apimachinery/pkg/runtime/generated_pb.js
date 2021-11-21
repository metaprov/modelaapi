// source: k8s.io/apimachinery/pkg/runtime/generated.proto
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

goog.exportSymbol('proto.k8s.io.apimachinery.pkg.runtime.RawExtension', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.runtime.TypeMeta', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.runtime.Unknown', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.runtime.RawExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.runtime.RawExtension.displayName = 'proto.k8s.io.apimachinery.pkg.runtime.RawExtension';
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
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.runtime.TypeMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.displayName = 'proto.k8s.io.apimachinery.pkg.runtime.TypeMeta';
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
proto.k8s.io.apimachinery.pkg.runtime.Unknown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.runtime.Unknown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.runtime.Unknown.displayName = 'proto.k8s.io.apimachinery.pkg.runtime.Unknown';
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
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.runtime.RawExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.toObject = function(includeInstance, msg) {
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
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension}
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.runtime.RawExtension;
  return proto.k8s.io.apimachinery.pkg.runtime.RawExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension}
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.deserializeBinaryFromReader = function(msg, reader) {
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
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.runtime.RawExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes raw = 1;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.getRaw_asB64 = function() {
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
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.setRaw = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.clearRaw = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.runtime.RawExtension.prototype.hasRaw = function() {
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
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiversion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    kind: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta}
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.runtime.TypeMeta;
  return proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta}
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.serializeBinaryToWriter = function(message, writer) {
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
 * optional string apiVersion = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.getApiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.setApiversion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.clearApiversion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.hasApiversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.clearKind = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.prototype.hasKind = function() {
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
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.runtime.Unknown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.toObject = function(includeInstance, msg) {
  var f, obj = {
    typemeta: (f = msg.getTypemeta()) && proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.toObject(includeInstance, f),
    raw: msg.getRaw_asB64(),
    contentencoding: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    contenttype: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.runtime.Unknown;
  return proto.k8s.io.apimachinery.pkg.runtime.Unknown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.k8s.io.apimachinery.pkg.runtime.TypeMeta;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.deserializeBinaryFromReader);
      msg.setTypemeta(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRaw(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentencoding(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContenttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.runtime.Unknown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypemeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.k8s.io.apimachinery.pkg.runtime.TypeMeta.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
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
 * optional TypeMeta typeMeta = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.runtime.TypeMeta}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.getTypemeta = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.runtime.TypeMeta} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.runtime.TypeMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.runtime.TypeMeta|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
*/
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.setTypemeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.clearTypemeta = function() {
  return this.setTypemeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.hasTypemeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes raw = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes raw = 2;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.getRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRaw()));
};


/**
 * optional bytes raw = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRaw()`
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.setRaw = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.clearRaw = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string contentEncoding = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.getContentencoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.setContentencoding = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.clearContentencoding = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.hasContentencoding = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string contentType = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.getContenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.setContenttype = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.Unknown} returns this
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.clearContenttype = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.runtime.Unknown.prototype.hasContenttype = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.k8s.io.apimachinery.pkg.runtime);
