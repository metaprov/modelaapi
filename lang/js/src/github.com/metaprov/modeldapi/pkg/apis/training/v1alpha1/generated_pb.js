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

var github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb.js');
var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    servingsitename: jspb.Message.getField(msg, 1),
    testdatasetname: jspb.Message.getField(msg, 2),
    auto: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServingsitename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTestdatasetname(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuto(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string servingSiteName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.getServingsitename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.setServingsitename = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.clearServingsitename = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.hasServingsitename = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string testDatasetName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.getTestdatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.setTestdatasetname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.clearTestdatasetname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.hasTestdatasetname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool auto = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.getAuto = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.setAuto = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.clearAuto = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.prototype.hasAuto = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    featurizer: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeaturizer(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * optional string featurizer = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.getFeaturizer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.setFeaturizer = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.clearFeaturizer = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.prototype.hasFeaturizer = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    initial: jspb.Message.getField(msg, 1),
    windows: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInitial(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindows(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional int32 initial = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.getInitial = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.setInitial = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.clearInitial = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.hasInitial = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 windows = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.getWindows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.setWindows = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.clearWindows = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.prototype.hasWindows = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    servingsitename: jspb.Message.getField(msg, 1),
    testdatasetname: jspb.Message.getField(msg, 2),
    auto: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServingsitename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTestdatasetname(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuto(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string servingSiteName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.getServingsitename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.setServingsitename = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.clearServingsitename = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.hasServingsitename = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string testDatasetName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.getTestdatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.setTestdatasetname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.clearTestdatasetname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.hasTestdatasetname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool auto = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.getAuto = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.setAuto = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.clearAuto = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.prototype.hasAuto = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    imputer: jspb.Message.getField(msg, 2),
    encoder: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImputer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoder(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * optional string imputer = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.getImputer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.setImputer = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.clearImputer = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.hasImputer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string encoder = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.getEncoder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.setEncoder = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.clearEncoder = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.prototype.hasEncoder = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    algorithmname: jspb.Message.getField(msg, 1),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlgorithmname(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.deserializeBinaryFromReader);
      msg.addParameters(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string algorithmName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.getAlgorithmname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.setAlgorithmname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.clearAlgorithmname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.hasAlgorithmname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated HyperParameterValue parameters = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.setParametersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.prototype.clearParametersList = function() {
  this.setParametersList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.toObject = function(includeInstance, msg) {
  var f, obj = {
    auto: jspb.Message.getField(msg, 1),
    train: jspb.Message.getField(msg, 2),
    validation: jspb.Message.getField(msg, 3),
    test: jspb.Message.getField(msg, 4),
    splitpolicy: jspb.Message.getField(msg, 5),
    splitcolumn: jspb.Message.getField(msg, 6),
    seed: jspb.Message.getOptionalFloatingPointField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuto(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrain(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValidation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTest(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSplitpolicy(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSplitcolumn(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSeed(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional bool auto = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.getAuto = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.setAuto = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.clearAuto = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.hasAuto = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 train = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.getTrain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.setTrain = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.clearTrain = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.hasTrain = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 validation = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.getValidation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.setValidation = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.clearValidation = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.hasValidation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 test = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.getTest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.setTest = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.clearTest = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.hasTest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string splitPolicy = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.getSplitpolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.setSplitpolicy = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.clearSplitpolicy = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.hasSplitpolicy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string splitColumn = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.getSplitcolumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.setSplitcolumn = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.clearSplitcolumn = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.hasSplitcolumn = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double seed = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.getSeed = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.setSeed = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.clearSeed = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.prototype.hasSeed = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    wranglername: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWranglername(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string wranglerName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.prototype.getWranglername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.prototype.setWranglername = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.prototype.clearWranglername = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.prototype.hasWranglername = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    imputer: jspb.Message.getField(msg, 2),
    expand: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImputer(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpand(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * optional string imputer = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.getImputer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.setImputer = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.clearImputer = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.hasImputer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool expand = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.getExpand = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.setExpand = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.clearExpand = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.prototype.hasExpand = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.repeatedFields_ = [3,4];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.toObject, includeInstance),
    inputlayersList: jspb.Message.getRepeatedField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addInputlayers(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.serializeBinaryToWriter
    );
  }
  f = message.getInputlayersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NNLayerParameter parameters = 3;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter, 3));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.setParametersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.clearParametersList = function() {
  this.setParametersList([]);
};


/**
 * repeated string inputLayers = 4;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.getInputlayersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.setInputlayersList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.addInputlayers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.prototype.clearInputlayersList = function() {
  this.setInputlayersList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    architectureList: jspb.Message.toObjectList(msg.getArchitectureList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.toObject, includeInstance),
    type: jspb.Message.getField(msg, 2),
    batchsize: jspb.Message.getField(msg, 3),
    epochs: jspb.Message.getField(msg, 4),
    validationsplit: jspb.Message.getField(msg, 5),
    isseq: jspb.Message.getField(msg, 6),
    gpus: jspb.Message.getField(msg, 7),
    loss: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.deserializeBinaryFromReader);
      msg.addArchitecture(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchsize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEpochs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValidationsplit(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsseq(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoss(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArchitectureList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer.serializeBinaryToWriter
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
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
 * repeated DeepEstimatorLayer architecture = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getArchitectureList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer, 1));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setArchitectureList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.addArchitecture = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorLayer, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearArchitectureList = function() {
  this.setArchitectureList([]);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 batchSize = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getBatchsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setBatchsize = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearBatchsize = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.hasBatchsize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 epochs = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getEpochs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setEpochs = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearEpochs = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.hasEpochs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 validationSplit = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getValidationsplit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setValidationsplit = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearValidationsplit = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.hasValidationsplit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool isSeq = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getIsseq = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setIsseq = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearIsseq = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.hasIsseq = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 gpus = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getGpus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setGpus = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearGpus = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.hasGpus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string loss = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.getLoss = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.setLoss = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.clearLoss = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.prototype.hasLoss = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.serializeBinaryToWriter = function(message, writer) {
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
 * optional string key = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.prototype.hasValue = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleRules.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBase(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string base = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.prototype.getBaseList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.prototype.setBaseList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.prototype.addBase = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.prototype.clearBaseList = function() {
  this.setBaseList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    levelindex: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelindex(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 levelIndex = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.getLevelindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.setLevelindex = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.clearLevelindex = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj.prototype.hasLevelindex = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.repeatedFields_ = [4,5,10];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    timecolumn: jspb.Message.getField(msg, 1),
    targetcolumn: jspb.Message.getField(msg, 2),
    datetimeformat: jspb.Message.getField(msg, 3),
    dimensionsList: jspb.Message.getRepeatedField(msg, 4),
    repressorsList: jspb.Message.getRepeatedField(msg, 5),
    freqspec: (f = msg.getFreqspec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.toObject(includeInstance, f),
    horizon: jspb.Message.getField(msg, 7),
    confidenceinterval: jspb.Message.getField(msg, 8),
    countryforholiday: jspb.Message.getField(msg, 9),
    dimensionvaluesList: jspb.Message.toObjectList(msg.getDimensionvaluesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.toObject, includeInstance),
    backtest: (f = msg.getBacktest()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.toObject(includeInstance, f),
    forecastconnectionname: jspb.Message.getField(msg, 12),
    forecast: jspb.Message.getField(msg, 13)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimecolumn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetcolumn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatetimeformat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDimensions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addRepressors(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.deserializeBinaryFromReader);
      msg.setFreqspec(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHorizon(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConfidenceinterval(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryforholiday(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.deserializeBinaryFromReader);
      msg.addDimensionvalues(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.deserializeBinaryFromReader);
      msg.setBacktest(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setForecastconnectionname(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForecast(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDimensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getRepressorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getFreqspec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
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
  f = message.getDimensionvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue.serializeBinaryToWriter
    );
  }
  f = message.getBacktest();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * optional string timeColumn = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getTimecolumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setTimecolumn = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearTimecolumn = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasTimecolumn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string targetColumn = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getTargetcolumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setTargetcolumn = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearTargetcolumn = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasTargetcolumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string datetimeFormat = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getDatetimeformat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setDatetimeformat = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearDatetimeformat = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasDatetimeformat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string dimensions = 4;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getDimensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setDimensionsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.addDimensions = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearDimensionsList = function() {
  this.setDimensionsList([]);
};


/**
 * repeated string repressors = 5;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getRepressorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setRepressorsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.addRepressors = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearRepressorsList = function() {
  this.setRepressorsList([]);
};


/**
 * optional FreqSpec freqSpec = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getFreqspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setFreqspec = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearFreqspec = function() {
  this.setFreqspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasFreqspec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 horizon = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getHorizon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setHorizon = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearHorizon = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasHorizon = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 confidenceInterval = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getConfidenceinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setConfidenceinterval = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearConfidenceinterval = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasConfidenceinterval = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string countryForHoliday = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getCountryforholiday = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setCountryforholiday = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearCountryforholiday = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasCountryforholiday = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated DimensionValue dimensionValues = 10;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getDimensionvaluesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue, 10));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setDimensionvaluesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.addDimensionvalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DimensionValue, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearDimensionvaluesList = function() {
  this.setDimensionvaluesList([]);
};


/**
 * optional BacktestSpec backtest = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getBacktest = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec, 11));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.BacktestSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setBacktest = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearBacktest = function() {
  this.setBacktest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasBacktest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string forecastConnectionName = 12;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getForecastconnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setForecastconnectionname = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearForecastconnectionname = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasForecastconnectionname = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool forecast = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.getForecast = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.setForecast = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.clearForecast = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    interval: jspb.Message.getField(msg, 1),
    unit: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInterval(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
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
 * optional int32 interval = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.setInterval = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.clearInterval = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string unit = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.setUnit = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.clearUnit = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.FreqSpec.prototype.hasUnit = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.repeatedFields_ = [5];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.toObject = function(includeInstance, msg) {
  var f, obj = {
    gitconnectionname: jspb.Message.getField(msg, 1),
    repository: jspb.Message.getField(msg, 2),
    branch: jspb.Message.getField(msg, 3),
    blobnameregex: jspb.Message.getField(msg, 4),
    eventsList: jspb.Message.getRepeatedField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitconnectionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlobnameregex(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addEvents(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string gitConnectionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.getGitconnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.setGitconnectionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.clearGitconnectionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.hasGitconnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string repository = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.setRepository = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.clearRepository = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.hasRepository = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string branch = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.setBranch = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.clearBranch = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string blobNameRegex = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.getBlobnameregex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.setBlobnameregex = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.clearBlobnameregex = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.hasBlobnameregex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string events = 5;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.getEventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.setEventsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.addEvents = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.prototype.clearEventsList = function() {
  this.setEventsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.repeatedFields_ = [1,2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    grouplevelsList: jspb.Message.toObjectList(msg.getGrouplevelsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.toObject, includeInstance),
    itemlevel: (f = msg.getItemlevel()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.toObject(includeInstance, f),
    notifiername: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.deserializeBinaryFromReader);
      msg.addGrouplevels(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.deserializeBinaryFromReader);
      msg.setItemlevel(value);
      break;
    case 4:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getGrouplevelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.serializeBinaryToWriter
    );
  }
  f = message.getItemlevel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.serializeBinaryToWriter
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
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * repeated Level groupLevels = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.getGrouplevelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.setGrouplevelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.addGrouplevels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.clearGrouplevelsList = function() {
  this.setGrouplevelsList([]);
};


/**
 * optional Level itemLevel = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.getItemlevel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.setItemlevel = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.clearItemlevel = function() {
  this.setItemlevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.hasItemlevel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string notifierName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.setNotifiername = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.clearNotifiername = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.prototype.hasNotifiername = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.HyperParameterValue.prototype.hasValue = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    featurizer: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeaturizer(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * optional string featurizer = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.getFeaturizer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.setFeaturizer = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.clearFeaturizer = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.prototype.hasFeaturizer = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.repeatedFields_ = [5];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.toObject = function(includeInstance, msg) {
  var f, obj = {
    string: jspb.Message.getField(msg, 1),
    horizon: jspb.Message.getField(msg, 2),
    freq: jspb.Message.getField(msg, 3),
    aggregate: jspb.Message.getField(msg, 4),
    distincList: jspb.Message.getRepeatedField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setString(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHorizon(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFreq(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addDistinc(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDistincList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string string = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.getString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.setString = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.clearString = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.hasString = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 horizon = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.getHorizon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.setHorizon = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.clearHorizon = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.hasHorizon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string freq = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.getFreq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.setFreq = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.clearFreq = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.hasFreq = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string aggregate = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.getAggregate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.setAggregate = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.clearAggregate = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.hasAggregate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string distinc = 5;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.getDistincList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.setDistincList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.addDistinc = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Level.prototype.clearDistincList = function() {
  this.setDistincList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.toObject = function(includeInstance, msg) {
  var f, obj = {
    metric: jspb.Message.getField(msg, 1),
    value: jspb.Message.getOptionalFloatingPointField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetric(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string metric = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.getMetric = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.setMetric = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.clearMetric = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.hasMetric = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.prototype.hasValue = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ModelStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelAutobuilderSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ModelAutobuilderStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 5),
    message: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ModelAutobuilder items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataproductname: jspb.Message.getField(msg, 1),
    dataproductversionname: jspb.Message.getField(msg, 2),
    datasourcename: jspb.Message.getField(msg, 3),
    datasetname: jspb.Message.getField(msg, 4),
    path: jspb.Message.getField(msg, 5),
    task: jspb.Message.getField(msg, 6),
    objective: jspb.Message.getField(msg, 7),
    targetcolumn: jspb.Message.getField(msg, 8),
    maxtime: jspb.Message.getField(msg, 9),
    maxmodels: jspb.Message.getField(msg, 10),
    accessmethod: jspb.Message.getField(msg, 11),
    autoscale: jspb.Message.getField(msg, 12),
    datasourcespec: (f = msg.getDatasourcespec()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.toObject(includeInstance, f),
    trainers: jspb.Message.getField(msg, 14),
    searchmethod: jspb.Message.getField(msg, 15),
    aborted: jspb.Message.getField(msg, 16),
    owner: jspb.Message.getField(msg, 17)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataproductname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataproductversionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourcename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjective(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetcolumn(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxtime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmodels(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessmethod(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoscale(value);
      break;
    case 13:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.deserializeBinaryFromReader);
      msg.setDatasourcespec(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainers(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchmethod(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAborted(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getDatasourcespec();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
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
 * optional string dataProductName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getDataproductname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setDataproductname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearDataproductname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasDataproductname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string dataProductVersionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getDataproductversionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setDataproductversionname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearDataproductversionname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasDataproductversionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string datasourceName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getDatasourcename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setDatasourcename = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearDatasourcename = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasDatasourcename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setDatasetname = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearDatasetname = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string path = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setPath = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearPath = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasPath = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string task = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setTask = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearTask = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string objective = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getObjective = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setObjective = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearObjective = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasObjective = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string targetColumn = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getTargetcolumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setTargetcolumn = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearTargetcolumn = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasTargetcolumn = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 maxTime = 9;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getMaxtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setMaxtime = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearMaxtime = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasMaxtime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 maxModels = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getMaxmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setMaxmodels = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearMaxmodels = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasMaxmodels = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string accessMethod = 11;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getAccessmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setAccessmethod = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearAccessmethod = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasAccessmethod = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool autoScale = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getAutoscale = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setAutoscale = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearAutoscale = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasAutoscale = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec dataSourceSpec = 13;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getDatasourcespec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec, 13));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setDatasourcespec = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearDatasourcespec = function() {
  this.setDatasourcespec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasDatasourcespec = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 trainers = 14;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getTrainers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setTrainers = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearTrainers = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasTrainers = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string searchMethod = 15;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getSearchmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setSearchmethod = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearSearchmethod = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasSearchmethod = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool aborted = 16;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getAborted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 16, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setAborted = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearAborted = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasAborted = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string owner = 17;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 17) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.repeatedFields_ = [19];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    flatfilename: jspb.Message.getField(msg, 1),
    datasourcename: jspb.Message.getField(msg, 2),
    datasetname: jspb.Message.getField(msg, 3),
    studyname: jspb.Message.getField(msg, 4),
    bestmodelname: jspb.Message.getField(msg, 6),
    predictorname: jspb.Message.getField(msg, 7),
    imagereponame: jspb.Message.getField(msg, 8),
    phase: jspb.Message.getField(msg, 9),
    rows: jspb.Message.getField(msg, 10),
    cols: jspb.Message.getField(msg, 11),
    filesize: jspb.Message.getField(msg, 12),
    models: jspb.Message.getField(msg, 13),
    trainedmodels: jspb.Message.getField(msg, 14),
    bestmodelscore: jspb.Message.getOptionalFloatingPointField(msg, 15),
    estimator: (f = msg.getEstimator()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.toObject(includeInstance, f),
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlatfilename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourcename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudyname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBestmodelname(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredictorname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImagereponame(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRows(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCols(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFilesize(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModels(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainedmodels(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBestmodelscore(value);
      break;
    case 16:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.deserializeBinaryFromReader);
      msg.setEstimator(value);
      break;
    case 17:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 18:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 19:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getEstimator();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.serializeBinaryToWriter
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string flatFileName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getFlatfilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setFlatfilename = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearFlatfilename = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasFlatfilename = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string dataSourceName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getDatasourcename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setDatasourcename = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearDatasourcename = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasDatasourcename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string datasetName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setDatasetname = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearDatasetname = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string studyName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getStudyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setStudyname = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearStudyname = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasStudyname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string bestModelName = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getBestmodelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setBestmodelname = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearBestmodelname = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasBestmodelname = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string predictorName = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getPredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setPredictorname = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearPredictorname = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasPredictorname = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string imageRepoName = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getImagereponame = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setImagereponame = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearImagereponame = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasImagereponame = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string phase = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearPhase = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 rows = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setRows = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearRows = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasRows = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 cols = 11;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getCols = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setCols = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearCols = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasCols = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 fileSize = 12;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setFilesize = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearFilesize = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasFilesize = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 models = 13;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getModels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setModels = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearModels = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasModels = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 trainedModels = 14;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getTrainedmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setTrainedmodels = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearTrainedmodels = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasTrainedmodels = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double bestModelScore = 15;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getBestmodelscore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setBestmodelscore = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearBestmodelscore = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasBestmodelscore = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ClassicalEstimatorSpec estimator = 16;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getEstimator = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec, 16));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setEstimator = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearEstimator = function() {
  this.setEstimator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasEstimator = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 17;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 17));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 18;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 18));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setCompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearCompletiontime = function() {
  this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * repeated ModelAutobuilderCondition conditions = 19;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition, 19));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilderStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 5),
    message: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Model items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelPipelineSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ModelPipelineStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 4),
    message: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ModelPipeline items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelPipelineRunSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ModelPipelineRunStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 5),
    message: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ModelPipelineRun items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: jspb.Message.getField(msg, 1),
    description: jspb.Message.getField(msg, 2),
    triggername: jspb.Message.getField(msg, 3),
    pipelinename: jspb.Message.getField(msg, 4),
    owner: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipelinename(value);
      break;
    case 5:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.setVersionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.clearVersionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.clearDescription = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string triggerName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.getTriggername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.setTriggername = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.clearTriggername = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.hasTriggername = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string pipelineName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.getPipelinename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.setPipelinename = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.clearPipelinename = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.hasPipelinename = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string owner = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    approved: jspb.Message.getField(msg, 1),
    approvedby: jspb.Message.getField(msg, 2),
    score: jspb.Message.getOptionalFloatingPointField(msg, 3),
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setApproved(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApprovedby(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setEndtime(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
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
  f = message.getEndtime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool approved = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.getApproved = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.setApproved = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.clearApproved = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.hasApproved = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string approvedBy = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.getApprovedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.setApprovedby = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.clearApprovedby = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.hasApprovedby = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double score = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.getScore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.setScore = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.clearScore = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time endTime = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.getEndtime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.setEndtime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.clearEndtime = function() {
  this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.prototype.hasEndtime = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.repeatedFields_ = [11];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    studyname: jspb.Message.getField(msg, 1),
    data: (f = msg.getData()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.toObject(includeInstance, f),
    training: (f = msg.getTraining()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.toObject(includeInstance, f),
    acceptance: (f = msg.getAcceptance()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.toObject(includeInstance, f),
    capacity: (f = msg.getCapacity()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.toObject(includeInstance, f),
    prod: (f = msg.getProd()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.toObject(includeInstance, f),
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    phase: jspb.Message.getField(msg, 10),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.toObject, includeInstance),
    evalmetrics: jspb.Message.getField(msg, 13)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudyname(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinaryFromReader);
      msg.setTraining(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinaryFromReader);
      msg.setAcceptance(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinaryFromReader);
      msg.setCapacity(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.deserializeBinaryFromReader);
      msg.setProd(value);
      break;
    case 8:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 9:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvalmetrics(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.serializeBinaryToWriter
    );
  }
  f = message.getTraining();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.serializeBinaryToWriter
    );
  }
  f = message.getAcceptance();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.serializeBinaryToWriter
    );
  }
  f = message.getCapacity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.serializeBinaryToWriter
    );
  }
  f = message.getProd();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus.serializeBinaryToWriter
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string studyName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getStudyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setStudyname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearStudyname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasStudyname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelPipelineRunStageStatus data = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getData = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ModelPipelineRunStageStatus training = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getTraining = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setTraining = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearTraining = function() {
  this.setTraining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasTraining = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ModelPipelineRunStageStatus acceptance = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getAcceptance = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setAcceptance = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearAcceptance = function() {
  this.setAcceptance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasAcceptance = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ModelPipelineRunStageStatus capacity = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getCapacity = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setCapacity = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearCapacity = function() {
  this.setCapacity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasCapacity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ModelPipelineRunStageStatus prod = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getProd = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStageStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setProd = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearProd = function() {
  this.setProd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasProd = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 8;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 8));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 9;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 9));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setCompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearCompletiontime = function() {
  this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string phase = 10;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearPhase = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated ModelPipelineRunCondition conditions = 11;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition, 11));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
};


/**
 * optional string evalMetrics = 13;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.getEvalmetrics = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.setEvalmetrics = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.clearEvalmetrics = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRunStatus.prototype.hasEvalmetrics = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: jspb.Message.getField(msg, 1),
    defaultservingsitename: jspb.Message.getField(msg, 2),
    description: jspb.Message.getField(msg, 3),
    minscore: jspb.Message.getOptionalFloatingPointField(msg, 4),
    datastage: (f = msg.getDatastage()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.toObject(includeInstance, f),
    trainingstage: (f = msg.getTrainingstage()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.toObject(includeInstance, f),
    acceptancestage: (f = msg.getAcceptancestage()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.toObject(includeInstance, f),
    capacitystage: (f = msg.getCapacitystage()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.toObject(includeInstance, f),
    releasestage: (f = msg.getReleasestage()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.toObject(includeInstance, f),
    folder: jspb.Message.getField(msg, 10),
    trigger: (f = msg.getTrigger()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.toObject(includeInstance, f),
    owner: jspb.Message.getField(msg, 12)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDefaultservingsitename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinscore(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.deserializeBinaryFromReader);
      msg.setDatastage(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.deserializeBinaryFromReader);
      msg.setTrainingstage(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.deserializeBinaryFromReader);
      msg.setAcceptancestage(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.deserializeBinaryFromReader);
      msg.setCapacitystage(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.deserializeBinaryFromReader);
      msg.setReleasestage(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolder(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 12:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getDatastage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec.serializeBinaryToWriter
    );
  }
  f = message.getTrainingstage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.serializeBinaryToWriter
    );
  }
  f = message.getAcceptancestage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec.serializeBinaryToWriter
    );
  }
  f = message.getCapacitystage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec.serializeBinaryToWriter
    );
  }
  f = message.getReleasestage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setVersionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearVersionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultServingSiteName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getDefaultservingsitename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setDefaultservingsitename = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearDefaultservingsitename = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasDefaultservingsitename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearDescription = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double minScore = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getMinscore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setMinscore = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearMinscore = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasMinscore = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DataStageSpec dataStage = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getDatastage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataStageSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setDatastage = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearDatastage = function() {
  this.setDatastage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasDatastage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TrainingStageSpec trainingStage = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getTrainingstage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setTrainingstage = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearTrainingstage = function() {
  this.setTrainingstage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasTrainingstage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AcceptanceStageSpec acceptanceStage = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getAcceptancestage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AcceptanceStageSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setAcceptancestage = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearAcceptancestage = function() {
  this.setAcceptancestage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasAcceptancestage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CapacityStageSpec capacityStage = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getCapacitystage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CapacityStageSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setCapacitystage = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearCapacitystage = function() {
  this.setCapacitystage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasCapacitystage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ReleaseStageSpec releaseStage = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getReleasestage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setReleasestage = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearReleasestage = function() {
  this.setReleasestage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasReleasestage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string folder = 10;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getFolder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setFolder = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearFolder = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasFolder = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PipelineTrigger trigger = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getTrigger = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger, 11));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setTrigger = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearTrigger = function() {
  this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string owner = 12;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModelPipelineCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition, 1));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    alg: jspb.Message.getField(msg, 2),
    score: jspb.Message.getOptionalFloatingPointField(msg, 3),
    error: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAlg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string alg = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.getAlg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.setAlg = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.clearAlg = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.hasAlg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double score = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.getScore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.setScore = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.clearScore = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool error = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.setError = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.clearError = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelResult.prototype.hasError = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.repeatedFields_ = [12];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    maxcost: jspb.Message.getField(msg, 2),
    maxtime: jspb.Message.getField(msg, 3),
    maxmodels: jspb.Message.getField(msg, 4),
    minscore: jspb.Message.getOptionalFloatingPointField(msg, 5),
    trainers: jspb.Message.getField(msg, 6),
    shoptions: (f = msg.getShoptions()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.toObject(includeInstance, f),
    test: jspb.Message.getField(msg, 8),
    retaintop: jspb.Message.getField(msg, 9),
    retainedfor: jspb.Message.getField(msg, 10),
    resources: (f = msg.getResources()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.toObject(includeInstance, f),
    allowlistList: jspb.Message.getRepeatedField(msg, 12),
    votingensemble: jspb.Message.getField(msg, 13),
    stackingensemble: jspb.Message.getField(msg, 14)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxcost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmodels(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinscore(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainers(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.deserializeBinaryFromReader);
      msg.setShoptions(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTest(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetaintop(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetainedfor(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowlist(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVotingensemble(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStackingensemble(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
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
  f = message.getShoptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.serializeBinaryToWriter
    );
  }
  f = message.getAllowlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 maxCost = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getMaxcost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setMaxcost = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearMaxcost = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasMaxcost = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 maxTime = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getMaxtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setMaxtime = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearMaxtime = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasMaxtime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 maxModels = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getMaxmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setMaxmodels = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearMaxmodels = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasMaxmodels = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double minScore = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getMinscore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setMinscore = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearMinscore = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasMinscore = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 trainers = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getTrainers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setTrainers = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearTrainers = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasTrainers = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SuccessiveHalvingOptions shOptions = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getShoptions = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setShoptions = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearShoptions = function() {
  this.setShoptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasShoptions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 test = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getTest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setTest = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearTest = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasTest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 retainTop = 9;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getRetaintop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setRetaintop = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearRetaintop = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasRetaintop = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 retainedFor = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getRetainedfor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setRetainedfor = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearRetainedfor = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasRetainedfor = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TrainingResourceRequest resources = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest, 11));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setResources = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearResources = function() {
  this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasResources = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated string allowlist = 12;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getAllowlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setAllowlistList = function(value) {
  jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.addAllowlist = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearAllowlistList = function() {
  this.setAllowlistList([]);
};


/**
 * optional bool votingEnsemble = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getVotingensemble = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setVotingensemble = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearVotingensemble = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasVotingensemble = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool stackingEnsemble = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.getStackingensemble = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.setStackingensemble = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.clearStackingensemble = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.prototype.hasStackingensemble = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownername: jspb.Message.getField(msg, 1),
    versionname: jspb.Message.getField(msg, 2),
    studyname: jspb.Message.getField(msg, 3),
    datasetname: jspb.Message.getField(msg, 4),
    task: jspb.Message.getField(msg, 5),
    objective: jspb.Message.getField(msg, 6),
    preprocessing: (f = msg.getPreprocessing()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.toObject(includeInstance, f),
    estimator: (f = msg.getEstimator()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.toObject(includeInstance, f),
    dnn: (f = msg.getDnn()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.toObject(includeInstance, f),
    ensemble: (f = msg.getEnsemble()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.toObject(includeInstance, f),
    training: (f = msg.getTraining()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.toObject(includeInstance, f),
    tested: jspb.Message.getField(msg, 12),
    aborted: jspb.Message.getField(msg, 13),
    published: jspb.Message.getField(msg, 14),
    pushed: jspb.Message.getField(msg, 15),
    reported: jspb.Message.getField(msg, 16),
    paused: jspb.Message.getField(msg, 17),
    profiled: jspb.Message.getField(msg, 18),
    archived: jspb.Message.getField(msg, 19),
    forecasted: jspb.Message.getField(msg, 20),
    location: (f = msg.getLocation()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    forecastingspec: (f = msg.getForecastingspec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.toObject(includeInstance, f),
    owner: jspb.Message.getField(msg, 23)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudyname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjective(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.deserializeBinaryFromReader);
      msg.setPreprocessing(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.deserializeBinaryFromReader);
      msg.setEstimator(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.deserializeBinaryFromReader);
      msg.setDnn(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.deserializeBinaryFromReader);
      msg.setEnsemble(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.deserializeBinaryFromReader);
      msg.setTraining(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTested(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAborted(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublished(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPushed(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReported(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPaused(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProfiled(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArchived(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForecasted(value);
      break;
    case 21:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 22:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.deserializeBinaryFromReader);
      msg.setForecastingspec(value);
      break;
    case 23:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPreprocessing();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.serializeBinaryToWriter
    );
  }
  f = message.getEstimator();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec.serializeBinaryToWriter
    );
  }
  f = message.getDnn();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec.serializeBinaryToWriter
    );
  }
  f = message.getEnsemble();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec.serializeBinaryToWriter
    );
  }
  f = message.getTraining();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getForecastingspec();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeString(
      23,
      f
    );
  }
};


/**
 * optional string ownerName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getOwnername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setOwnername = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearOwnername = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasOwnername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string versionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setVersionname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearVersionname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string studyName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getStudyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setStudyname = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearStudyname = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasStudyname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setDatasetname = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearDatasetname = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string task = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setTask = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearTask = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string objective = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getObjective = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setObjective = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearObjective = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasObjective = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PreprocessingSpec preprocessing = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getPreprocessing = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setPreprocessing = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearPreprocessing = function() {
  this.setPreprocessing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasPreprocessing = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ClassicalEstimatorSpec estimator = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getEstimator = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ClassicalEstimatorSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setEstimator = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearEstimator = function() {
  this.setEstimator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasEstimator = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DeepEstimatorSpec dnn = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getDnn = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DeepEstimatorSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setDnn = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearDnn = function() {
  this.setDnn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasDnn = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional EnsembleSpec ensemble = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getEnsemble = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.EnsembleSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setEnsemble = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearEnsemble = function() {
  this.setEnsemble(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasEnsemble = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TrainingSpec training = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getTraining = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec, 11));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setTraining = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearTraining = function() {
  this.setTraining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasTraining = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool tested = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getTested = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setTested = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearTested = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasTested = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool aborted = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getAborted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setAborted = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearAborted = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasAborted = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool published = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setPublished = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearPublished = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasPublished = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool pushed = 15;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getPushed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 15, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setPushed = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearPushed = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasPushed = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool reported = 16;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getReported = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 16, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setReported = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearReported = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasReported = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool paused = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 17, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setPaused = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearPaused = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasPaused = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool profiled = 18;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getProfiled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 18, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setProfiled = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearProfiled = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasProfiled = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool archived = 19;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 19, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setArchived = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearArchived = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasArchived = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool forecasted = 20;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getForecasted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 20, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setForecasted = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearForecasted = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasForecasted = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation location = 21;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 21));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ForecastingSpec forecastingSpec = 22;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getForecastingspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec, 22));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setForecastingspec = function(value) {
  jspb.Message.setWrapperField(this, 22, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearForecastingspec = function() {
  this.setForecastingspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasForecastingspec = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional string owner = 23;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 23) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.repeatedFields_ = [12,13,24];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    trainstarttime: (f = msg.getTrainstarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    traincompletiontime: (f = msg.getTraincompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    teststarttime: (f = msg.getTeststarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    testcompletiontime: (f = msg.getTestcompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    cvscore: jspb.Message.getOptionalFloatingPointField(msg, 7),
    trainscore: jspb.Message.getOptionalFloatingPointField(msg, 8),
    testscore: jspb.Message.getOptionalFloatingPointField(msg, 9),
    cost: jspb.Message.getOptionalFloatingPointField(msg, 10),
    best: jspb.Message.getField(msg, 11),
    trainresultList: jspb.Message.toObjectList(msg.getTrainresultList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.toObject, includeInstance),
    testresultList: jspb.Message.toObjectList(msg.getTestresultList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.toObject, includeInstance),
    phase: jspb.Message.getField(msg, 14),
    reportname: jspb.Message.getField(msg, 15),
    manifesturi: jspb.Message.getField(msg, 16),
    weightsuri: jspb.Message.getField(msg, 17),
    labelsencoderuri: jspb.Message.getField(msg, 18),
    logsuri: jspb.Message.getField(msg, 19),
    profileuri: jspb.Message.getField(msg, 20),
    misclassuri: jspb.Message.getField(msg, 21),
    imagename: jspb.Message.getField(msg, 22),
    forecasturi: jspb.Message.getField(msg, 23),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTrainstarttime(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTraincompletiontime(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTeststarttime(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTestcompletiontime(value);
      break;
    case 6:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCvscore(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTrainscore(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTestscore(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCost(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBest(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.deserializeBinaryFromReader);
      msg.addTrainresult(value);
      break;
    case 13:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.deserializeBinaryFromReader);
      msg.addTestresult(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportname(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setManifesturi(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeightsuri(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelsencoderuri(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogsuri(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileuri(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setMisclassuri(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setImagename(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setForecasturi(value);
      break;
    case 24:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTrainstarttime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTraincompletiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTeststarttime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTestcompletiontime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getTrainresultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.serializeBinaryToWriter
    );
  }
  f = message.getTestresultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trainStartTime = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTrainstarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTrainstarttime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTrainstarttime = function() {
  this.setTrainstarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasTrainstarttime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trainCompletionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTraincompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTraincompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTraincompletiontime = function() {
  this.setTraincompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasTraincompletiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time testStartTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTeststarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTeststarttime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTeststarttime = function() {
  this.setTeststarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasTeststarttime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time testCompletionTime = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTestcompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTestcompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTestcompletiontime = function() {
  this.setTestcompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasTestcompletiontime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 6;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 6));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setCompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearCompletiontime = function() {
  this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double cvScore = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getCvscore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setCvscore = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearCvscore = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasCvscore = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double trainScore = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTrainscore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTrainscore = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTrainscore = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasTrainscore = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double testScore = 9;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTestscore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTestscore = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTestscore = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasTestscore = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double cost = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getCost = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setCost = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearCost = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasCost = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool best = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getBest = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setBest = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearBest = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasBest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Measurement trainResult = 12;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTrainresultList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement, 12));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTrainresultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.addTrainresult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTrainresultList = function() {
  this.setTrainresultList([]);
};


/**
 * repeated Measurement testResult = 13;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getTestresultList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement, 13));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setTestresultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.addTestresult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Measurement, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearTestresultList = function() {
  this.setTestresultList([]);
};


/**
 * optional string phase = 14;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearPhase = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string reportName = 15;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getReportname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setReportname = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearReportname = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasReportname = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string manifestUri = 16;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getManifesturi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setManifesturi = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearManifesturi = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasManifesturi = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string weightsUri = 17;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getWeightsuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setWeightsuri = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearWeightsuri = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasWeightsuri = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string labelsEncoderUri = 18;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getLabelsencoderuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setLabelsencoderuri = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearLabelsencoderuri = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasLabelsencoderuri = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string logsUri = 19;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getLogsuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setLogsuri = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearLogsuri = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasLogsuri = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string profileUri = 20;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getProfileuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setProfileuri = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearProfileuri = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasProfileuri = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string misclassUri = 21;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getMisclassuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setMisclassuri = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearMisclassuri = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasMisclassuri = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string imageName = 22;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getImagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setImagename = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearImagename = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasImagename = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional string forecastUri = 23;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getForecasturi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setForecasturi = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearForecasturi = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.hasForecasturi = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * repeated ModelCondition conditions = 24;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition, 24));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NNLayerParameter.prototype.hasValue = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NotebookSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NotebookStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 5),
    message: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Notebook items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NotebookRunSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NotebookRunStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 5),
    message: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated NotebookRun items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.repeatedFields_ = [3];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: jspb.Message.getField(msg, 1),
    notebookname: jspb.Message.getField(msg, 2),
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.toObject, includeInstance),
    owner: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNotebookname(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    case 4:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.serializeBinaryToWriter
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
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.setVersionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.clearVersionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string notebookName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.getNotebookname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.setNotebookname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.clearNotebookname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.hasNotebookname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NotebookVarValue values = 3;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue, 3));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.setValuesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.clearValuesList = function() {
  this.setValuesList([]);
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunSpec.prototype.hasOwner = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.repeatedFields_ = [4];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    phase: jspb.Message.getField(msg, 1),
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string phase = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.clearPhase = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.setCompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.clearCompletiontime = function() {
  this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated NotebookRunCondition conditions = 4;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition, 4));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRunStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.repeatedFields_ = [7];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: jspb.Message.getField(msg, 1),
    description: jspb.Message.getField(msg, 2),
    schemaref: (f = msg.getSchemaref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    imagereporef: (f = msg.getImagereporef()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    requirements: jspb.Message.getField(msg, 5),
    debpackages: jspb.Message.getField(msg, 6),
    varsList: jspb.Message.getRepeatedField(msg, 7),
    location: (f = msg.getLocation()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    owner: jspb.Message.getField(msg, 9)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setSchemaref(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setImagereporef(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequirements(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDebpackages(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addVars(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 9:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSchemaref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getImagereporef();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
  f = message.getVarsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setVersionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearVersionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearDescription = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference schemaRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getSchemaref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/** @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setSchemaref = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearSchemaref = function() {
  this.setSchemaref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasSchemaref = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference imageRepoRef = 4;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getImagereporef = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 4));
};


/** @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setImagereporef = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearImagereporef = function() {
  this.setImagereporef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasImagereporef = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string requirements = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getRequirements = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setRequirements = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearRequirements = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasRequirements = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string debPackages = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getDebpackages = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setDebpackages = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearDebpackages = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasDebpackages = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string vars = 7;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getVarsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setVarsList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.addVars = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearVarsList = function() {
  this.setVarsList([]);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation location = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string owner = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookSpec.prototype.hasOwner = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.repeatedFields_ = [3];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getField(msg, 1),
    uri: jspb.Message.getField(msg, 2),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUri(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.setImage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.clearImage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.setUri = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.clearUri = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.hasUri = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NotebookCondition conditions = 3;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition, 3));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookVarValue.prototype.hasValue = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    imputer: jspb.Message.getField(msg, 2),
    scaler: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImputer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setScaler(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * optional string imputer = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.getImputer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.setImputer = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.clearImputer = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.hasImputer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string scaler = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.getScaler = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.setScaler = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.clearScaler = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.prototype.hasScaler = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedule: (f = msg.getSchedule()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.toObject(includeInstance, f),
    githubevents: (f = msg.getGithubevents()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.deserializeBinaryFromReader);
      msg.setGithubevents(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.serializeBinaryToWriter
    );
  }
  f = message.getGithubevents();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents.serializeBinaryToWriter
    );
  }
};


/**
 * optional TriggerSchedule schedule = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.setSchedule = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.clearSchedule = function() {
  this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GithubEvents githubEvents = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.getGithubevents = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.GithubEvents|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.setGithubevents = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.clearGithubevents = function() {
  this.setGithubevents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PipelineTrigger.prototype.hasGithubevents = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    categorical: (f = msg.getCategorical()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.toObject(includeInstance, f),
    numeric: (f = msg.getNumeric()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.toObject(includeInstance, f),
    text: (f = msg.getText()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.toObject(includeInstance, f),
    image: (f = msg.getImage()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.toObject(includeInstance, f),
    audio: (f = msg.getAudio()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.toObject(includeInstance, f),
    video: (f = msg.getVideo()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.toObject(includeInstance, f),
    datetime: (f = msg.getDatetime()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.toObject(includeInstance, f),
    featureselector: jspb.Message.getField(msg, 8),
    reducer: jspb.Message.getField(msg, 9),
    imbalanced: jspb.Message.getField(msg, 10)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.deserializeBinaryFromReader);
      msg.setCategorical(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.deserializeBinaryFromReader);
      msg.setNumeric(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.deserializeBinaryFromReader);
      msg.setDatetime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeatureselector(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setReducer(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImbalanced(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategorical();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getNumeric();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.serializeBinaryToWriter
    );
  }
  f = message.getDatetime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec.serializeBinaryToWriter
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional CategoricalPipelineSpec categorical = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getCategorical = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CategoricalPipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setCategorical = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearCategorical = function() {
  this.setCategorical(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasCategorical = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NumericPipelineSpec numeric = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getNumeric = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NumericPipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setNumeric = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearNumeric = function() {
  this.setNumeric(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasNumeric = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TextPipelineSpec text = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getText = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setText = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearText = function() {
  this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasText = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ImagePipelineSpec image = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getImage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ImagePipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setImage = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearImage = function() {
  this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AudioPipelineSpec audio = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getAudio = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.AudioPipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setAudio = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearAudio = function() {
  this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VideoPipelineSpec video = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getVideo = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setVideo = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearVideo = function() {
  this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DateTimePipelineSpec datetime = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getDatetime = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DateTimePipelineSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setDatetime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearDatetime = function() {
  this.setDatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string featureSelector = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getFeatureselector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setFeatureselector = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearFeatureselector = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasFeatureselector = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string reducer = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getReducer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setReducer = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearReducer = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasReducer = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool imbalanced = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.getImbalanced = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.setImbalanced = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.clearImbalanced = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.prototype.hasImbalanced = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    predictorname: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string predictorName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.prototype.getPredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.prototype.setPredictorname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.prototype.clearPredictorname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReleaseStageSpec.prototype.hasPredictorname = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReportSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReportStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 5),
    message: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Report items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: jspb.Message.getField(msg, 1),
    entityref: (f = msg.getEntityref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    reporttype: jspb.Message.getField(msg, 5),
    format: jspb.Message.getField(msg, 6),
    description: jspb.Message.getField(msg, 7),
    owner: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setEntityref(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporttype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.setVersionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.clearVersionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference entityRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.getEntityref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/** @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.setEntityref = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.clearEntityref = function() {
  this.setEntityref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.hasEntityref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation location = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reportType = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.getReporttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.setReporttype = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.clearReporttype = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.hasReporttype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string format = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.setFormat = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.clearFormat = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.clearDescription = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string owner = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportSpec.prototype.hasOwner = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.repeatedFields_ = [6];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    phase: jspb.Message.getField(msg, 4),
    uri: jspb.Message.getField(msg, 5),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.setCompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.clearCompletiontime = function() {
  this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string phase = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.clearPhase = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string uri = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.setUri = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.clearUri = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.hasUri = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated ReportCondition conditions = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition, 6));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StudySpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StudyStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2),
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: jspb.Message.getField(msg, 5),
    message: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.serializeBinaryToWriter = function(message, writer) {
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
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.setLasttransitiontime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.clearLasttransitiontime = function() {
  this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.setReason = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.clearReason = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.clearMessage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Study items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: jspb.Message.getField(msg, 1),
    description: jspb.Message.getField(msg, 2),
    labref: (f = msg.getLabref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    datasetname: jspb.Message.getField(msg, 4),
    task: jspb.Message.getField(msg, 5),
    objective: jspb.Message.getField(msg, 6),
    search: (f = msg.getSearch()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.toObject(includeInstance, f),
    preprocessing: (f = msg.getPreprocessing()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.toObject(includeInstance, f),
    training: (f = msg.getTraining()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.toObject(includeInstance, f),
    trainerclassref: (f = msg.getTrainerclassref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    split: (f = msg.getSplit()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.toObject(includeInstance, f),
    aborted: jspb.Message.getField(msg, 13),
    reported: jspb.Message.getField(msg, 14),
    paused: jspb.Message.getField(msg, 15),
    profiled: jspb.Message.getField(msg, 16),
    modelpublished: jspb.Message.getField(msg, 17),
    modelimagepushed: jspb.Message.getField(msg, 18),
    location: (f = msg.getLocation()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    hierarchy: (f = msg.getHierarchy()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.toObject(includeInstance, f),
    owner: jspb.Message.getField(msg, 22)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setLabref(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjective(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.deserializeBinaryFromReader);
      msg.setSearch(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.deserializeBinaryFromReader);
      msg.setPreprocessing(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.deserializeBinaryFromReader);
      msg.setTraining(value);
      break;
    case 11:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTrainerclassref(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.deserializeBinaryFromReader);
      msg.setSplit(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAborted(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReported(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPaused(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProfiled(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setModelpublished(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setModelimagepushed(value);
      break;
    case 19:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 21:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.deserializeBinaryFromReader);
      msg.setHierarchy(value);
      break;
    case 22:
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLabref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
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
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSearch();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec.serializeBinaryToWriter
    );
  }
  f = message.getPreprocessing();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec.serializeBinaryToWriter
    );
  }
  f = message.getTraining();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.serializeBinaryToWriter
    );
  }
  f = message.getTrainerclassref();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getSplit();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
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
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getHierarchy();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setVersionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearVersionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearDescription = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference labRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getLabref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/** @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setLabref = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearLabref = function() {
  this.setLabref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasLabref = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setDatasetname = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearDatasetname = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string task = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setTask = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearTask = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string objective = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getObjective = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setObjective = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearObjective = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasObjective = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ModelSearchSpec search = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getSearch = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSearchSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setSearch = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearSearch = function() {
  this.setSearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasSearch = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PreprocessingSpec preprocessing = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getPreprocessing = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.PreprocessingSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setPreprocessing = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearPreprocessing = function() {
  this.setPreprocessing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasPreprocessing = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional TrainingSpec training = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getTraining = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setTraining = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearTraining = function() {
  this.setTraining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasTraining = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference trainerClassRef = 11;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getTrainerclassref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 11));
};


/** @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setTrainerclassref = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearTrainerclassref = function() {
  this.setTrainerclassref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasTrainerclassref = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DataSplit split = 12;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getSplit = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit, 12));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.DataSplit|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setSplit = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearSplit = function() {
  this.setSplit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasSplit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool aborted = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getAborted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setAborted = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearAborted = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasAborted = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool reported = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getReported = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setReported = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearReported = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasReported = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool paused = 15;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 15, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setPaused = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearPaused = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasPaused = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool profiled = 16;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getProfiled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 16, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setProfiled = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearProfiled = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasProfiled = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool modelPublished = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getModelpublished = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 17, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setModelpublished = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearModelpublished = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasModelpublished = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool modelImagePushed = 18;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getModelimagepushed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 18, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setModelimagepushed = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearModelimagepushed = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasModelimagepushed = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation location = 19;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 19));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Hierarchy hierarchy = 21;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getHierarchy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy, 21));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Hierarchy|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setHierarchy = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearHierarchy = function() {
  this.setHierarchy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasHierarchy = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string owner = 22;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.clearOwner = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 22) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.repeatedFields_ = [25];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    models: jspb.Message.getField(msg, 1),
    waitingtotrain: jspb.Message.getField(msg, 2),
    trainingmodels: jspb.Message.getField(msg, 3),
    failedtrainingmodels: jspb.Message.getField(msg, 4),
    trainedmodels: jspb.Message.getField(msg, 5),
    waitingtotestmodels: jspb.Message.getField(msg, 6),
    testingmodels: jspb.Message.getField(msg, 7),
    failedtestingmodels: jspb.Message.getField(msg, 8),
    testedmodels: jspb.Message.getField(msg, 9),
    trainers: jspb.Message.getField(msg, 10),
    freetrainers: jspb.Message.getField(msg, 11),
    budytrainers: jspb.Message.getField(msg, 12),
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    trainingstarttime: (f = msg.getTrainingstarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    trainingcompletiontime: (f = msg.getTrainingcompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    testingstarted: (f = msg.getTestingstarted()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    testingcompletiontime: (f = msg.getTestingcompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    bestmodel: jspb.Message.getField(msg, 20),
    bestmodelscore: jspb.Message.getOptionalFloatingPointField(msg, 21),
    profileuri: jspb.Message.getField(msg, 22),
    reportname: jspb.Message.getField(msg, 23),
    phase: jspb.Message.getField(msg, 24),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModels(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWaitingtotrain(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainingmodels(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFailedtrainingmodels(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainedmodels(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWaitingtotestmodels(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTestingmodels(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFailedtestingmodels(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTestedmodels(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrainers(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFreetrainers(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBudytrainers(value);
      break;
    case 13:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 14:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTrainingstarttime(value);
      break;
    case 15:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTrainingcompletiontime(value);
      break;
    case 16:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTestingstarted(value);
      break;
    case 17:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTestingcompletiontime(value);
      break;
    case 18:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletiontime(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setBestmodel(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBestmodelscore(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileuri(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportname(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 25:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTrainingstarttime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTrainingcompletiontime();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTestingstarted();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTestingcompletiontime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletiontime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeString(
      23,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 models = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getModels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setModels = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearModels = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasModels = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 waitingToTrain = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getWaitingtotrain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setWaitingtotrain = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearWaitingtotrain = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasWaitingtotrain = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 trainingModels = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTrainingmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTrainingmodels = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTrainingmodels = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTrainingmodels = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 failedTrainingModels = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getFailedtrainingmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setFailedtrainingmodels = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearFailedtrainingmodels = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasFailedtrainingmodels = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 trainedModels = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTrainedmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTrainedmodels = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTrainedmodels = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTrainedmodels = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 waitingToTestModels = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getWaitingtotestmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setWaitingtotestmodels = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearWaitingtotestmodels = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasWaitingtotestmodels = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 testingModels = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTestingmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTestingmodels = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTestingmodels = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTestingmodels = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 failedTestingModels = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getFailedtestingmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setFailedtestingmodels = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearFailedtestingmodels = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasFailedtestingmodels = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 testedModels = 9;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTestedmodels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTestedmodels = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTestedmodels = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTestedmodels = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 trainers = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTrainers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTrainers = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTrainers = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTrainers = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 freeTrainers = 11;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getFreetrainers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setFreetrainers = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearFreetrainers = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasFreetrainers = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 budyTrainers = 12;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getBudytrainers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setBudytrainers = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearBudytrainers = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasBudytrainers = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 13;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 13));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trainingStartTime = 14;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTrainingstarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 14));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTrainingstarttime = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTrainingstarttime = function() {
  this.setTrainingstarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTrainingstarttime = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trainingCompletionTime = 15;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTrainingcompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 15));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTrainingcompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTrainingcompletiontime = function() {
  this.setTrainingcompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTrainingcompletiontime = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time testingStarted = 16;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTestingstarted = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 16));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTestingstarted = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTestingstarted = function() {
  this.setTestingstarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTestingstarted = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time testingCompletionTime = 17;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getTestingcompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 17));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setTestingcompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearTestingcompletiontime = function() {
  this.setTestingcompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasTestingcompletiontime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 18;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 18));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setCompletiontime = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearCompletiontime = function() {
  this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasCompletiontime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string bestModel = 20;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getBestmodel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setBestmodel = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearBestmodel = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasBestmodel = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional double bestModelScore = 21;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getBestmodelscore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 21, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setBestmodelscore = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearBestmodelscore = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasBestmodelscore = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string profileUri = 22;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getProfileuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setProfileuri = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearProfileuri = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasProfileuri = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional string reportName = 23;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getReportname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setReportname = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearReportname = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasReportname = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional string phase = 24;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 24, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearPhase = function() {
  jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * repeated StudyCondition conditions = 25;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition, 25));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.setConditionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyCondition, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudyStatus.prototype.clearConditionsList = function() {
  this.setConditionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxbudget: jspb.Message.getField(msg, 6),
    eliminationrate: jspb.Message.getField(msg, 7),
    modality: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxbudget(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEliminationrate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setModality(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
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
 * optional int32 maxBudget = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.getMaxbudget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.setMaxbudget = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.clearMaxbudget = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.hasMaxbudget = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 eliminationRate = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.getEliminationrate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.setEliminationrate = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.clearEliminationrate = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.hasEliminationrate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string modality = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.getModality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.setModality = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.clearModality = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingOptions.prototype.hasModality = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    budget: jspb.Message.getField(msg, 1),
    bracket: jspb.Message.getField(msg, 2),
    rung: jspb.Message.getField(msg, 3),
    confid: jspb.Message.getField(msg, 4),
    modality: jspb.Message.getField(msg, 26)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBudget(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBracket(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRung(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConfid(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setModality(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeString(
      26,
      f
    );
  }
};


/**
 * optional int32 budget = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.getBudget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.setBudget = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.clearBudget = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.hasBudget = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 bracket = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.getBracket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.setBracket = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.clearBracket = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.hasBracket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 rung = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.getRung = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.setRung = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.clearRung = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.hasRung = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 confID = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.getConfid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.setConfid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.clearConfid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.hasConfid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string modality = 26;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.getModality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.setModality = function(value) {
  jspb.Message.setField(this, 26, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.clearModality = function() {
  jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.prototype.hasModality = function() {
  return jspb.Message.getField(this, 26) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    encoder: jspb.Message.getField(msg, 2),
    tokenizer: jspb.Message.getField(msg, 3),
    stopwords: jspb.Message.getField(msg, 4),
    pos: jspb.Message.getField(msg, 5),
    lemma: jspb.Message.getField(msg, 6),
    stem: jspb.Message.getField(msg, 7),
    embedding: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoder(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenizer(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStopwords(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPos(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLemma(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStem(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmbedding(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
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
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * optional string encoder = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getEncoder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setEncoder = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearEncoder = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.hasEncoder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string tokenizer = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getTokenizer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setTokenizer = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearTokenizer = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.hasTokenizer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool stopwords = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getStopwords = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setStopwords = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearStopwords = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.hasStopwords = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pos = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getPos = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setPos = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearPos = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.hasPos = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool lemma = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getLemma = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setLemma = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearLemma = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.hasLemma = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool stem = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getStem = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setStem = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearStem = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.hasStem = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string embedding = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.getEmbedding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.setEmbedding = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.clearEmbedding = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TextPipelineSpec.prototype.hasEmbedding = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gpu: jspb.Message.getField(msg, 1),
    cpu: jspb.Message.getField(msg, 2),
    mem: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGpu(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpu(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMem(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string gpu = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.getGpu = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.setGpu = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.clearGpu = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.hasGpu = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string cpu = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.getCpu = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.setCpu = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.clearCpu = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string mem = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.getMem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.setMem = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.clearMem = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingResourceRequest.prototype.hasMem = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.repeatedFields_ = [8];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    priority: jspb.Message.getField(msg, 2),
    cvtype: jspb.Message.getField(msg, 3),
    cv: jspb.Message.getField(msg, 4),
    folds: jspb.Message.getField(msg, 6),
    retry: jspb.Message.getField(msg, 7),
    evalmetricsList: jspb.Message.getRepeatedField(msg, 8),
    earlystop: jspb.Message.getField(msg, 9),
    checkpointinterval: jspb.Message.getField(msg, 10),
    forecast: (f = msg.getForecast()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.toObject(includeInstance, f),
    sh: (f = msg.getSh()) && proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.toObject(includeInstance, f),
    seed: jspb.Message.getOptionalFloatingPointField(msg, 13)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCvtype(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCv(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFolds(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetry(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addEvalmetrics(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEarlystop(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCheckpointinterval(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.deserializeBinaryFromReader);
      msg.setForecast(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.deserializeBinaryFromReader);
      msg.setSh(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSeed(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getEvalmetricsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getForecast();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec.serializeBinaryToWriter
    );
  }
  f = message.getSh();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
};


/**
 * optional int32 priority = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setPriority = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearPriority = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string cvtype = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getCvtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setCvtype = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearCvtype = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasCvtype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool cv = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getCv = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setCv = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearCv = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasCv = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 folds = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getFolds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setFolds = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearFolds = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasFolds = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 retry = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getRetry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setRetry = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearRetry = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasRetry = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string evalMetrics = 8;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getEvalmetricsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setEvalmetricsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.addEvalmetrics = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearEvalmetricsList = function() {
  this.setEvalmetricsList([]);
};


/**
 * optional bool earlyStop = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getEarlystop = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setEarlystop = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearEarlystop = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasEarlystop = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 checkpointInterval = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getCheckpointinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setCheckpointinterval = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearCheckpointinterval = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasCheckpointinterval = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ForecastingSpec forecast = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getForecast = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec, 11));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastingSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setForecast = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearForecast = function() {
  this.setForecast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SuccessiveHalvingSpec sh = 12;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getSh = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec, 12));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.SuccessiveHalvingSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setSh = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearSh = function() {
  this.setSh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasSh = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double seed = 13;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.getSeed = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.setSeed = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.clearSeed = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingSpec.prototype.hasSeed = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    notebookname: jspb.Message.getField(msg, 1),
    labname: jspb.Message.getField(msg, 2),
    studyname: jspb.Message.getField(msg, 3),
    auto: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotebookname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudyname(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuto(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string notebookName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.getNotebookname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.setNotebookname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.clearNotebookname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.hasNotebookname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string labName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.getLabname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.setLabname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.clearLabname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.hasLabname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string studyName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.getStudyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.setStudyname = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.clearStudyname = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.hasStudyname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool auto = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.getAuto = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.setAuto = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.clearAuto = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TrainingStageSpec.prototype.hasAuto = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule';
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.toObject = function(includeInstance, msg) {
  var f, obj = {
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    startday: (f = msg.getStartday()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.toObject(includeInstance, f),
    endday: (f = msg.getEndday()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    cron: jspb.Message.getField(msg, 5),
    type: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStartday(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndtime(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setEndday(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCron(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getStartday();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getEndtime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndday();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.setStarttime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.clearStarttime = function() {
  this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startDay = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.getStartday = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.setStartday = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.clearStartday = function() {
  this.setStartday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.hasStartday = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp endTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.getEndtime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.setEndtime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.clearEndtime = function() {
  this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.hasEndtime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time endDay = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.getEndday = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.setEndday = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.clearEndday = function() {
  this.setEndday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.hasEndday = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string cron = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.getCron = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.setCron = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.clearCron = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.hasCron = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string type = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.setType = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.clearType = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.TriggerSchedule.prototype.hasType = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.getRepeatedField(msg, 1),
    featurizer: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeaturizer(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * optional string featurizer = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.getFeaturizer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.setFeaturizer = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.clearFeaturizer = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.VideoPipelineSpec.prototype.hasFeaturizer = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1);
