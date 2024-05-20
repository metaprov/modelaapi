// source: github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated.proto
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

var github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb);
var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb);
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.repeatedFields_ = [4];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    maxtopk: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    metadatainfoList: jspb.Message.toObjectList(msg.getMetadatainfoList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxtopk(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.deserializeBinaryFromReader);
      msg.addMetadatainfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMetadatainfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec model = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 maxTopK = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.getMaxtopk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.setMaxtopk = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.clearMaxtopk = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.hasMaxtopk = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MetadataKeyInfo metadataInfo = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.getMetadatainfoList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.setMetadatainfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.addMetadatainfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.prototype.clearMetadatainfoList = function() {
  return this.setMetadatainfoList([]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    language: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    chunklines: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    chunklinesoverlap: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    maxchars: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunklines(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunklinesoverlap(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxchars(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string language = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.setLanguage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.clearLanguage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 chunkLines = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.getChunklines = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.setChunklines = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.clearChunklines = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.hasChunklines = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 chunkLinesOverlap = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.getChunklinesoverlap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.setChunklinesoverlap = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.clearChunklinesoverlap = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.hasChunklinesoverlap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 maxChars = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.getMaxchars = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.setMaxchars = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.clearMaxchars = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.prototype.hasMaxchars = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    topn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string connectionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 topN = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.getTopn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.setTopn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.clearTopn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.prototype.hasTopn = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    connectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    query: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setConnectionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 4:
      var value = msg.getOptionsMap();
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string query = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.setQuery = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.clearQuery = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> options = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.repeatedFields_ = [5];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    refreshperiod: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    indexesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    nodeparser: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    embeddingmodel: (f = msg.getEmbeddingmodel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    file: (f = msg.getFile()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.toObject(includeInstance, f),
    database: (f = msg.getDatabase()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.toObject(includeInstance, f),
    web: (f = msg.getWeb()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.toObject(includeInstance, f),
    repository: (f = msg.getRepository()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefreshperiod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addIndexes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeparser(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setEmbeddingmodel(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.deserializeBinaryFromReader);
      msg.setDatabase(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.deserializeBinaryFromReader);
      msg.setWeb(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.deserializeBinaryFromReader);
      msg.setRepository(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getIndexesList();
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
  f = message.getEmbeddingmodel();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.serializeBinaryToWriter
    );
  }
  f = message.getDatabase();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec.serializeBinaryToWriter
    );
  }
  f = message.getWeb();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.serializeBinaryToWriter
    );
  }
  f = message.getRepository();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> metadata = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * optional int32 refreshPeriod = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getRefreshperiod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setRefreshperiod = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearRefreshperiod = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasRefreshperiod = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string indexes = 5;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getIndexesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setIndexesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.addIndexes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearIndexesList = function() {
  return this.setIndexesList([]);
};


/**
 * optional string nodeParser = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getNodeparser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setNodeparser = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearNodeparser = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasNodeparser = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ModelSpec embeddingModel = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getEmbeddingmodel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setEmbeddingmodel = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearEmbeddingmodel = function() {
  return this.setEmbeddingmodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasEmbeddingmodel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional FileLocationReaderSpec file = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getFile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasFile = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DatabaseReaderSpec database = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getDatabase = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DatabaseReaderSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearDatabase = function() {
  return this.setDatabase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional WebReaderSpec web = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getWeb = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setWeb = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearWeb = function() {
  return this.setWeb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasWeb = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RepositoryReaderSpec repository = 11;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.getRepository = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec, 11));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.setRepository = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.clearRepository = function() {
  return this.setRepository(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.prototype.hasRepository = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nodes: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasterror: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    flagged: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    lastrefreshat: (f = msg.getLastrefreshat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLasterror(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlagged(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastrefreshat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getLastrefreshat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 nodes = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.getNodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.setNodes = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.clearNodes = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.hasNodes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string lastError = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.getLasterror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.setLasterror = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.clearLasterror = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.hasLasterror = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool flagged = 4;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.getFlagged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.setFlagged = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.clearFlagged = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.hasFlagged = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastRefreshAt = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.getLastrefreshat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.setLastrefreshat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.clearLastrefreshat = function() {
  return this.setLastrefreshat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.prototype.hasLastrefreshat = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsesynthesizer: (f = msg.getResponsesynthesizer()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.toObject(includeInstance, f),
    embedding: (f = msg.getEmbedding()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.deserializeBinaryFromReader);
      msg.setResponsesynthesizer(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsesynthesizer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.serializeBinaryToWriter
    );
  }
  f = message.getEmbedding();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseSynthesizerSpec responseSynthesizer = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.getResponsesynthesizer = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.setResponsesynthesizer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.clearResponsesynthesizer = function() {
  return this.setResponsesynthesizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.hasResponsesynthesizer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VectorIndexSpec embedding = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.getEmbedding = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.setEmbedding = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.clearEmbedding = function() {
  return this.setEmbedding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.prototype.hasEmbedding = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = msg.getIndex()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.toObject(includeInstance, f),
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    topk: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    mode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.deserializeBinaryFromReader);
      msg.setIndex(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopk(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
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
 * optional IndexReference index = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.getIndex = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.setIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.clearIndex = function() {
  return this.setIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec model = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 topK = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.getTopk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.setTopk = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.clearTopk = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.hasTopk = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string mode = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.setMode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.clearMode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.prototype.hasMode = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    embeddingmodel: (f = msg.getEmbeddingmodel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    similaritycutoff: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setEmbeddingmodel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSimilaritycutoff(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmbeddingmodel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional ModelSpec embeddingModel = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.getEmbeddingmodel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.setEmbeddingmodel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.clearEmbeddingmodel = function() {
  return this.setEmbeddingmodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.hasEmbeddingmodel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float similarityCutoff = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.getSimilaritycutoff = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.setSimilaritycutoff = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.clearSimilaritycutoff = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.prototype.hasSimilaritycutoff = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.repeatedFields_ = [1,2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    excludeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addInclude(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addExclude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getExcludeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string include = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.getIncludeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.setIncludeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.addInclude = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.clearIncludeList = function() {
  return this.setIncludeList([]);
};


/**
 * repeated string exclude = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.getExcludeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.setExcludeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.addExclude = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.prototype.clearExcludeList = function() {
  return this.setExcludeList([]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    filereaderspec: (f = msg.getFilereaderspec()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f),
    url: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.deserializeBinaryFromReader);
      msg.setFilereaderspec(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilereaderspec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
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
 * optional FileReaderSpec fileReaderSpec = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.getFilereaderspec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.setFilereaderspec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.clearFilereaderspec = function() {
  return this.setFilereaderspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.hasFilereaderspec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation location = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileLocationReaderSpec.prototype.hasUrl = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = msg.getOptionsMap();
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, string> options = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.toObject = function(includeInstance, msg) {
  var f, obj = {
    extension: (f = msg.getExtension$()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.toObject(includeInstance, f),
    length: (f = msg.getLength()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.toObject(includeInstance, f),
    name: (f = msg.getName()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    nodeparser: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.deserializeBinaryFromReader);
      msg.setExtension$(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.deserializeBinaryFromReader);
      msg.setLength(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 4:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeparser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExtension$();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter.serializeBinaryToWriter
    );
  }
  f = message.getLength();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
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
 * optional ExtensionFilter extension = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.getExtension$ = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ExtensionFilter|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.setExtension$ = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.clearExtension$ = function() {
  return this.setExtension$(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.hasExtension$ = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LengthFilter length = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.getLength = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.setLength = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.clearLength = function() {
  return this.setLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.hasLength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NameFilter name = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.getName = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * optional string nodeParser = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.getNodeparser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.setNodeparser = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.clearNodeparser = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.prototype.hasNodeparser = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    topk: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 topK = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.prototype.getTopk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.prototype.setTopk = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.prototype.clearTopk = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.prototype.hasTopk = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    retrieversList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    queries: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    topk: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    mode: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRetrievers(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQueries(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopk(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRetrieversList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
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
 * repeated string retrievers = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.getRetrieversList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.setRetrieversList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.addRetrievers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.clearRetrieversList = function() {
  return this.setRetrieversList([]);
};


/**
 * optional ModelSpec model = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 queries = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.getQueries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.setQueries = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.clearQueries = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.hasQueries = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 topK = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.getTopk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.setTopk = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.clearTopk = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.hasTopk = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string mode = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.setMode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.clearMode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.prototype.hasMode = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.repeatedFields_ = [4];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    chunksizesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addChunksizes(values[i]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getChunksizesList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      4,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 chunkSizes = 4;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.getChunksizesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.setChunksizesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.addChunksizes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.prototype.clearChunksizesList = function() {
  return this.setChunksizesList([]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    knowledgebasename: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    index: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKnowledgebasename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.serializeBinaryToWriter = function(message, writer) {
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
 * optional string knowledgeBaseName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.getKnowledgebasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.setKnowledgebasename = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.clearKnowledgebasename = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.hasKnowledgebasename = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string index = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.prototype.hasIndex = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    vector: (f = msg.getVector()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.toObject(includeInstance, f),
    documentsummary: (f = msg.getDocumentsummary()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.toObject(includeInstance, f),
    treeindex: (f = msg.getTreeindex()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.deserializeBinaryFromReader);
      msg.setVector(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.deserializeBinaryFromReader);
      msg.setDocumentsummary(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.deserializeBinaryFromReader);
      msg.setTreeindex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.serializeBinaryToWriter
    );
  }
  f = message.getDocumentsummary();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec.serializeBinaryToWriter
    );
  }
  f = message.getTreeindex();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VectorIndexSpec vector = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.getVector = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.setVector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.clearVector = function() {
  return this.setVector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.hasVector = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DocumentSummaryIndexSpec documentSummary = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.getDocumentsummary = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryIndexSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.setDocumentsummary = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.clearDocumentsummary = function() {
  return this.setDocumentsummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.hasDocumentsummary = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TreeIndexSpec treeIndex = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.getTreeindex = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.setTreeindex = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.clearTreeindex = function() {
  return this.setTreeindex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.prototype.hasTreeindex = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    documents: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDocuments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.serializeBinaryToWriter = function(message, writer) {
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
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 documents = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.getDocuments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.setDocuments = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.clearDocuments = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.prototype.hasDocuments = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.repeatedFields_ = [1,2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    excludeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addInclude(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addExclude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getExcludeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string include = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.getIncludeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.setIncludeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.addInclude = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.clearIncludeList = function() {
  return this.setIncludeList([]);
};


/**
 * repeated string exclude = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.getExcludeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.setExcludeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.addExclude = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.prototype.clearExcludeList = function() {
  return this.setExcludeList([]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KnowledgeBaseSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional KnowledgeBaseStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated KnowledgeBase items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.repeatedFields_ = [10,11,12];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    refreshschedule: (f = msg.getRefreshschedule()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.toObject(includeInstance, f),
    artifactbucketname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    labname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    metadatadatabaseconnectionname: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    documentstoreconnectionname: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    indexesList: jspb.Message.toObjectList(msg.getIndexesList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.toObject, includeInstance),
    documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.toObject, includeInstance),
    nodeparsersList: jspb.Message.toObjectList(msg.getNodeparsersList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.toObject, includeInstance),
    defaultnodeparser: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.deserializeBinaryFromReader);
      msg.setRefreshschedule(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtifactbucketname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabname(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadatadatabaseconnectionname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentstoreconnectionname(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.deserializeBinaryFromReader);
      msg.addIndexes(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.deserializeBinaryFromReader);
      msg.addDocuments(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.deserializeBinaryFromReader);
      msg.addNodeparsers(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultnodeparser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRefreshschedule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.serializeBinaryToWriter
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
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
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
  f = message.getIndexesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec.serializeBinaryToWriter
    );
  }
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec.serializeBinaryToWriter
    );
  }
  f = message.getNodeparsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.serializeBinaryToWriter
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
 * optional string owner = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule refreshSchedule = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getRefreshschedule = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setRefreshschedule = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearRefreshschedule = function() {
  return this.setRefreshschedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasRefreshschedule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string artifactBucketName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getArtifactbucketname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setArtifactbucketname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearArtifactbucketname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasArtifactbucketname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string labName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getLabname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setLabname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearLabname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasLabname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec resources = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasResources = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string metadataDatabaseConnectionName = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getMetadatadatabaseconnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setMetadatadatabaseconnectionname = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearMetadatadatabaseconnectionname = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasMetadatadatabaseconnectionname = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string documentStoreConnectionName = 9;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getDocumentstoreconnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setDocumentstoreconnectionname = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearDocumentstoreconnectionname = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasDocumentstoreconnectionname = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated IndexSpec indexes = 10;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getIndexesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec, 10));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setIndexesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.addIndexes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearIndexesList = function() {
  return this.setIndexesList([]);
};


/**
 * repeated DocumentSpec documents = 11;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec, 11));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};


/**
 * repeated NodeParserSpec nodeParsers = 12;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getNodeparsersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec, 12));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setNodeparsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.addNodeparsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearNodeparsersList = function() {
  return this.setNodeparsersList([]);
};


/**
 * optional string defaultNodeParser = 13;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.getDefaultnodeparser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.setDefaultnodeparser = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.clearDefaultnodeparser = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseSpec.prototype.hasDefaultnodeparser = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.repeatedFields_ = [4,5,6,8];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    lastrefreshat: (f = msg.getLastrefreshat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    lastcompletionat: (f = msg.getLastcompletionat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog.toObject, includeInstance),
    documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.toObject, includeInstance),
    indexesList: jspb.Message.toObjectList(msg.getIndexesList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.toObject, includeInstance),
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastrefreshat(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastcompletionat(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.deserializeBinaryFromReader);
      msg.addDocuments(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.deserializeBinaryFromReader);
      msg.addIndexes(value);
      break;
    case 7:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 8:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLastrefreshat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getLastcompletionat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog.serializeBinaryToWriter
    );
  }
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus.serializeBinaryToWriter
    );
  }
  f = message.getIndexesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastRefreshAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getLastrefreshat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setLastrefreshat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearLastrefreshat = function() {
  return this.setLastrefreshat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.hasLastrefreshat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastCompletionAt = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getLastcompletionat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setLastcompletionat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearLastcompletionat = function() {
  return this.setLastcompletionat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.hasLastcompletionat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog logs = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};


/**
 * repeated DocumentStatus documents = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};


/**
 * repeated IndexStatus indexes = 6;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getIndexesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setIndexesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.addIndexes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearIndexesList = function() {
  return this.setIndexesList([]);
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 7;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 7));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 8;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 8));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeBaseStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KnowledgeGraphQueryEngine.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LLMSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LLMStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nodeport: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    accesstype: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodeport(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 port = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 nodePort = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.getNodeport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.setNodeport = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.clearNodeport = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.hasNodeport = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string accessType = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.getAccesstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.setAccesstype = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.clearAccesstype = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMAccessSpec.prototype.hasAccesstype = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated LLM items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLM, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    topn: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    rankgpt: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopn(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRankgpt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
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
 * optional int64 topN = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.getTopn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.setTopn = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.clearTopn = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.hasTopn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec model = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool rankGPT = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.getRankgpt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.setRankgpt = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.clearRankgpt = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.prototype.hasRankgpt = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.repeatedFields_ = [5,6,7];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    servingsitename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.toObject, includeInstance),
    queryenginesList: jspb.Message.toObjectList(msg.getQueryenginesList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.toObject, includeInstance),
    retrieversList: jspb.Message.toObjectList(msg.getRetrieversList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.toObject, includeInstance),
    notification: (f = msg.getNotification()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServingsitename(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.deserializeBinaryFromReader);
      msg.addQueryengines(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.deserializeBinaryFromReader);
      msg.addRetrievers(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.deserializeBinaryFromReader);
      msg.setNotification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.serializeBinaryToWriter
    );
  }
  f = message.getQueryenginesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.serializeBinaryToWriter
    );
  }
  f = message.getRetrieversList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.serializeBinaryToWriter
    );
  }
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string servingSiteName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getServingsitename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setServingsitename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearServingsitename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.hasServingsitename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec resources = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.hasResources = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated ModelServingSpec models = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * repeated QueryEngineSpec queryEngines = 6;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getQueryenginesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setQueryenginesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.addQueryengines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearQueryenginesList = function() {
  return this.setQueryenginesList([]);
};


/**
 * repeated RetrieverSpec retrievers = 7;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getRetrieversList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setRetrieversList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.addRetrievers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearRetrieversList = function() {
  return this.setRetrieversList([]);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec notification = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.getNotification = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMSpec.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.repeatedFields_ = [2,9];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.toObject, includeInstance),
    endpoint: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    deployedat: (f = msg.getDeployedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    deploymentref: (f = msg.getDeploymentref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    serviceref: (f = msg.getServiceref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.deserializeBinaryFromReader);
      msg.addDocuments(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setDeployedat(value);
      break;
    case 5:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDeploymentref(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServiceref(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 8:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 9:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeployedat();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getDeploymentref();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServiceref();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ModelStatus documents = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};


/**
 * optional string endpoint = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setEndpoint = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearEndpoint = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time deployedAt = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getDeployedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setDeployedat = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearDeployedat = function() {
  return this.setDeployedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.hasDeployedat = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference deploymentRef = 5;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getDeploymentref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 5));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setDeploymentref = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearDeploymentref = function() {
  return this.setDeploymentref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.hasDeploymentref = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference serviceRef = 6;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getServiceref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 6));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setServiceref = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearServiceref = function() {
  return this.setServiceref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.hasServiceref = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string failureMessage = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 8;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 8));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 9;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 9));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    greaterthan: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    lessthan: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGreaterthan(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLessthan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 greaterThan = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.getGreaterthan = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.setGreaterthan = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.clearGreaterthan = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.hasGreaterthan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 lessThan = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.getLessthan = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.setLessthan = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.clearLessthan = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LengthFilter.prototype.hasLessthan = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.serializeBinaryToWriter = function(message, writer) {
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
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MetadataKeyInfo.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    parsersList: jspb.Message.toObjectList(msg.getParsersList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.toObject, includeInstance),
    fallbacknodeparser: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.deserializeBinaryFromReader);
      msg.addParsers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFallbacknodeparser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser.serializeBinaryToWriter
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
 * repeated FilteredNodeParser parsers = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.getParsersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.setParsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.addParsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FilteredNodeParser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.clearParsersList = function() {
  return this.setParsersList([]);
};


/**
 * optional string fallbackNodeParser = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.getFallbacknodeparser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.setFallbacknodeparser = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.clearFallbacknodeparser = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.prototype.hasFallbacknodeparser = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    p50: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    p95: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    p99: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    totalpredictions: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP50(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP95(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP99(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
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
};


/**
 * optional double p50 = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.getP50 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.setP50 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.clearP50 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.hasP50 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double p95 = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.getP95 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.setP95 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.clearP95 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.hasP95 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double p99 = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.getP99 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.setP99 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.clearP99 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.hasP99 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 totalPredictions = 8;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.getTotalpredictions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.setTotalpredictions = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.clearTotalpredictions = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.prototype.hasTotalpredictions = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.repeatedFields_ = [4];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    queryengine: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    path: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    pathsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    format: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setQueryengine(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPaths(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string queryEngine = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.getQueryengine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.setQueryengine = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.clearQueryengine = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.hasQueryengine = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.clearPath = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.hasPath = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string paths = 4;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.getPathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.setPathsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.addPaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.clearPathsList = function() {
  return this.setPathsList([]);
};


/**
 * optional string format = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.setFormat = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.clearFormat = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ModelSpec model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelServingSpec.prototype.hasModel = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    model: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.setModel = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.clearModel = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.prototype.hasModel = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    modelmetrics: (f = msg.getModelmetrics()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.deserializeBinaryFromReader);
      msg.setModelmetrics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
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
  f = message.getModelmetrics();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string failureMessage = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ModelMetrics modelMetrics = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.getModelmetrics = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelMetrics|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.setModelmetrics = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.clearModelmetrics = function() {
  return this.setModelmetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelStatus.prototype.hasModelmetrics = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    contains: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    equals: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContains(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEquals(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.serializeBinaryToWriter = function(message, writer) {
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
 * optional string contains = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.getContains = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.setContains = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.clearContains = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.hasContains = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string equals = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.getEquals = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.setEquals = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.clearEquals = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NameFilter.prototype.hasEquals = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    includeorderrelationship: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    includemetadata: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    text: (f = msg.getText()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.toObject(includeInstance, f),
    sentence: (f = msg.getSentence()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.toObject(includeInstance, f),
    mixed: (f = msg.getMixed()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeorderrelationship(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludemetadata(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.deserializeBinaryFromReader);
      msg.setSentence(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.deserializeBinaryFromReader);
      msg.setMixed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
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
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.serializeBinaryToWriter
    );
  }
  f = message.getSentence();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.serializeBinaryToWriter
    );
  }
  f = message.getMixed();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool includeOrderRelationship = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.getIncludeorderrelationship = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.setIncludeorderrelationship = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.clearIncludeorderrelationship = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.hasIncludeorderrelationship = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool includeMetadata = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.getIncludemetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.setIncludemetadata = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.clearIncludemetadata = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.hasIncludemetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TextSplitterSpec text = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.getText = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.hasText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SentenceWindowNodeParserSpec sentence = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.getSentence = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.setSentence = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.clearSentence = function() {
  return this.setSentence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.hasSentence = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MixedNodeParserSpec mixed = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.getMixed = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.MixedNodeParserSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.setMixed = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.clearMixed = function() {
  return this.setMixed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodeParserSpec.prototype.hasMixed = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.toObject = function(includeInstance, msg) {
  var f, obj = {
    similarity: (f = msg.getSimilarity()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.toObject(includeInstance, f),
    keyword: (f = msg.getKeyword()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.toObject(includeInstance, f),
    reorder: (f = msg.getReorder()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.toObject(includeInstance, f),
    embeddingoptimizer: (f = msg.getEmbeddingoptimizer()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.toObject(includeInstance, f),
    llmrerank: (f = msg.getLlmrerank()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.toObject(includeInstance, f),
    coherererank: (f = msg.getCoherererank()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.toObject(includeInstance, f),
    fixedrecency: (f = msg.getFixedrecency()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.toObject(includeInstance, f),
    embeddingrecency: (f = msg.getEmbeddingrecency()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.toObject(includeInstance, f),
    timeweightedrecency: (f = msg.getTimeweightedrecency()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.deserializeBinaryFromReader);
      msg.setSimilarity(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.deserializeBinaryFromReader);
      msg.setKeyword(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.deserializeBinaryFromReader);
      msg.setReorder(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.deserializeBinaryFromReader);
      msg.setEmbeddingoptimizer(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.deserializeBinaryFromReader);
      msg.setLlmrerank(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.deserializeBinaryFromReader);
      msg.setCoherererank(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.deserializeBinaryFromReader);
      msg.setFixedrecency(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.deserializeBinaryFromReader);
      msg.setEmbeddingrecency(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.deserializeBinaryFromReader);
      msg.setTimeweightedrecency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSimilarity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.serializeBinaryToWriter
    );
  }
  f = message.getKeyword();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec.serializeBinaryToWriter
    );
  }
  f = message.getReorder();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddingoptimizer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.serializeBinaryToWriter
    );
  }
  f = message.getLlmrerank();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec.serializeBinaryToWriter
    );
  }
  f = message.getCoherererank();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec.serializeBinaryToWriter
    );
  }
  f = message.getFixedrecency();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddingrecency();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec.serializeBinaryToWriter
    );
  }
  f = message.getTimeweightedrecency();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional SimilarityPostProcessorSpec similarity = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getSimilarity = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setSimilarity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearSimilarity = function() {
  return this.setSimilarity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasSimilarity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeywordPostProcessorSpec keyword = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getKeyword = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.KeywordPostProcessorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setKeyword = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearKeyword = function() {
  return this.setKeyword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasKeyword = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LongContextReorderSpec reorder = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getReorder = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LongContextReorderSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setReorder = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearReorder = function() {
  return this.setReorder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasReorder = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SentenceEmbeddingOptimizerSpec embeddingOptimizer = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getEmbeddingoptimizer = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setEmbeddingoptimizer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearEmbeddingoptimizer = function() {
  return this.setEmbeddingoptimizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasEmbeddingoptimizer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LLMRerankSpec llmRerank = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getLlmrerank = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.LLMRerankSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setLlmrerank = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearLlmrerank = function() {
  return this.setLlmrerank(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasLlmrerank = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CohereRerankSpec cohereRerank = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getCoherererank = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CohereRerankSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setCoherererank = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearCoherererank = function() {
  return this.setCoherererank(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasCoherererank = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FixedRecencyPostProcessorSpec fixedRecency = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getFixedrecency = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FixedRecencyPostProcessorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setFixedrecency = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearFixedrecency = function() {
  return this.setFixedrecency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasFixedrecency = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional EmbeddingRecencyPostProcessorSpec embeddingRecency = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getEmbeddingrecency = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.EmbeddingRecencyPostProcessorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setEmbeddingrecency = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearEmbeddingrecency = function() {
  return this.setEmbeddingrecency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasEmbeddingrecency = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TimeWeightedRecencyPostProcessorSpec timeWeightedRecency = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.getTimeweightedrecency = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.setTimeweightedrecency = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.clearTimeweightedrecency = function() {
  return this.setTimeweightedrecency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.prototype.hasTimeweightedrecency = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    retriever: (f = msg.getRetriever()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.toObject(includeInstance, f),
    router: (f = msg.getRouter()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.toObject(includeInstance, f),
    subquestion: (f = msg.getSubquestion()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.deserializeBinaryFromReader);
      msg.setRetriever(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.deserializeBinaryFromReader);
      msg.setRouter(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.deserializeBinaryFromReader);
      msg.setSubquestion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRetriever();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.serializeBinaryToWriter
    );
  }
  f = message.getRouter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.serializeBinaryToWriter
    );
  }
  f = message.getSubquestion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RetrieverQueryEngineSpec retriever = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.getRetriever = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.setRetriever = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.clearRetriever = function() {
  return this.setRetriever(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.hasRetriever = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RouterQueryEngineSpec router = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.getRouter = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.setRouter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.clearRouter = function() {
  return this.setRouter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.hasRouter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SubQuestionQueryEngineSpec subQuestion = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.getSubquestion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.setSubquestion = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.clearSubquestion = function() {
  return this.setSubquestion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineSpec.prototype.hasSubquestion = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    queryengine: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryengine(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string queryEngine = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.getQueryengine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.setQueryengine = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.clearQueryengine = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.hasQueryengine = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.toObject = function(includeInstance, msg) {
  var f, obj = {
    extension: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    extensionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    reader: (f = msg.getReader()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtension$(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtensions(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.deserializeBinaryFromReader);
      msg.setReader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getReader();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string extension = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.setExtension$ = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.clearExtension$ = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.hasExtension$ = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string extensions = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * optional FileReaderSpec reader = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.getReader = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FileReaderSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.setReader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.clearReader = function() {
  return this.setReader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.prototype.hasReader = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.repeatedFields_ = [3,4];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    connectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    extensionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    readersList: jspb.Message.toObjectList(msg.getReadersList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.toObject, includeInstance),
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setConnectionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtensions(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.deserializeBinaryFromReader);
      msg.addReaders(value);
      break;
    case 5:
      var value = msg.getOptionsMap();
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getReadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader.serializeBinaryToWriter
    );
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string extensions = 3;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};


/**
 * repeated RepositoryFileReader readers = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.getReadersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.setReadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.addReaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryFileReader, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.clearReadersList = function() {
  return this.setReadersList([]);
};


/**
 * map<string, string> options = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RepositoryReaderSpec.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    answerfiltering: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAnswerfiltering(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
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
 * optional string mode = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.setMode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.clearMode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.hasMode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec model = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool answerFiltering = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.getAnswerfiltering = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.setAnswerfiltering = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.clearAnswerfiltering = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.prototype.hasAnswerfiltering = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.repeatedFields_ = [3];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsesynthesizer: (f = msg.getResponsesynthesizer()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.toObject(includeInstance, f),
    retriever: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    nodepostprocessorsList: jspb.Message.toObjectList(msg.getNodepostprocessorsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.deserializeBinaryFromReader);
      msg.setResponsesynthesizer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetriever(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.deserializeBinaryFromReader);
      msg.addNodepostprocessors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsesynthesizer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNodepostprocessorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseSynthesizerSpec responseSynthesizer = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.getResponsesynthesizer = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.setResponsesynthesizer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.clearResponsesynthesizer = function() {
  return this.setResponsesynthesizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.hasResponsesynthesizer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string retriever = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.getRetriever = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.setRetriever = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.clearRetriever = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.hasRetriever = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NodePostProcessor nodePostProcessors = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.getNodepostprocessorsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.setNodepostprocessorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.addNodepostprocessors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.NodePostProcessor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverQueryEngineSpec.prototype.clearNodepostprocessorsList = function() {
  return this.setNodepostprocessorsList([]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    vector: (f = msg.getVector()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.toObject(includeInstance, f),
    documentsummary: (f = msg.getDocumentsummary()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.toObject(includeInstance, f),
    router: (f = msg.getRouter()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.toObject(includeInstance, f),
    fusion: (f = msg.getFusion()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.deserializeBinaryFromReader);
      msg.setVector(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.deserializeBinaryFromReader);
      msg.setDocumentsummary(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.deserializeBinaryFromReader);
      msg.setRouter(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.deserializeBinaryFromReader);
      msg.setFusion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.serializeBinaryToWriter
    );
  }
  f = message.getDocumentsummary();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec.serializeBinaryToWriter
    );
  }
  f = message.getRouter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.serializeBinaryToWriter
    );
  }
  f = message.getFusion();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VectorRetrieverSpec vector = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.getVector = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.setVector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.clearVector = function() {
  return this.setVector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.hasVector = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DocumentSummaryRetrieverSpec documentSummary = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.getDocumentsummary = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.DocumentSummaryRetrieverSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.setDocumentsummary = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.clearDocumentsummary = function() {
  return this.setDocumentsummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.hasDocumentsummary = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RouterRetrieverSpec router = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.getRouter = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.setRouter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.clearRouter = function() {
  return this.setRouter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.hasRouter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FusionRetrieverSpec fusion = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.getFusion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.FusionRetrieverSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.setFusion = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.clearFusion = function() {
  return this.setFusion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverSpec.prototype.hasFusion = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    retriever: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetriever(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string retriever = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.getRetriever = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.setRetriever = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.clearRetriever = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.hasRetriever = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    toolsList: jspb.Message.toObjectList(msg.getToolsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.toObject, includeInstance),
    selector: (f = msg.getSelector()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.deserializeBinaryFromReader);
      msg.addTools(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.serializeBinaryToWriter
    );
  }
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.serializeBinaryToWriter
    );
  }
};


/**
 * repeated QueryEngineToolSpec tools = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.getToolsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.setToolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.addTools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.clearToolsList = function() {
  return this.setToolsList([]);
};


/**
 * optional SelectorSpec selector = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.getSelector = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterQueryEngineSpec.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    toolsList: jspb.Message.toObjectList(msg.getToolsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.toObject, includeInstance),
    selector: (f = msg.getSelector()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.deserializeBinaryFromReader);
      msg.addTools(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec.serializeBinaryToWriter
    );
  }
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RetrieverToolSpec tools = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.getToolsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.setToolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.addTools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RetrieverToolSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.clearToolsList = function() {
  return this.setToolsList([]);
};


/**
 * optional SelectorSpec selector = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.getSelector = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.RouterRetrieverSpec.prototype.hasSelector = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    multi: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMulti(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
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
 * optional string mode = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.setMode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.clearMode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.hasMode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec model = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool multi = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.getMulti = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.setMulti = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.clearMulti = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SelectorSpec.prototype.hasMulti = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    embeddingmodel: (f = msg.getEmbeddingmodel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    similaritycutoff: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    thresholdcutoff: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setEmbeddingmodel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSimilaritycutoff(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setThresholdcutoff(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmbeddingmodel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional ModelSpec embeddingModel = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.getEmbeddingmodel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.setEmbeddingmodel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.clearEmbeddingmodel = function() {
  return this.setEmbeddingmodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.hasEmbeddingmodel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float similarityCutoff = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.getSimilaritycutoff = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.setSimilaritycutoff = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.clearSimilaritycutoff = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.hasSimilaritycutoff = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float thresholdCutoff = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.getThresholdcutoff = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.setThresholdcutoff = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.clearThresholdcutoff = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceEmbeddingOptimizerSpec.prototype.hasThresholdcutoff = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunksize: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    chunkoverlap: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    wordseparator: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    paragraphseparator: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    splitter: (f = msg.getSplitter()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.toObject(includeInstance, f),
    hierarchical: (f = msg.getHierarchical()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunksize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunkoverlap(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWordseparator(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParagraphseparator(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.deserializeBinaryFromReader);
      msg.setSplitter(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.deserializeBinaryFromReader);
      msg.setHierarchical(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSplitter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.serializeBinaryToWriter
    );
  }
  f = message.getHierarchical();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 chunkSize = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.getChunksize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.setChunksize = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.clearChunksize = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.hasChunksize = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 chunkOverlap = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.getChunkoverlap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.setChunkoverlap = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.clearChunkoverlap = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.hasChunkoverlap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string wordSeparator = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.getWordseparator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.setWordseparator = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.clearWordseparator = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.hasWordseparator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string paragraphSeparator = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.getParagraphseparator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.setParagraphseparator = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.clearParagraphseparator = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.hasParagraphseparator = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SentenceTokenizerSpec splitter = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.getSplitter = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.setSplitter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.clearSplitter = function() {
  return this.setSplitter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.hasSplitter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HierarchicalSplitterSpec hierarchical = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.getHierarchical = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.setHierarchical = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.clearHierarchical = function() {
  return this.setHierarchical(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.prototype.hasHierarchical = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    separator: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSeparator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string separator = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.getSeparator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.setSeparator = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.clearSeparator = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.prototype.hasSeparator = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    splitter: (f = msg.getSplitter()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.toObject(includeInstance, f),
    windowsize: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.deserializeBinaryFromReader);
      msg.setSplitter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSplitter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec.serializeBinaryToWriter
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
 * optional SentenceTokenizerSpec splitter = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.getSplitter = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceTokenizerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.setSplitter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.clearSplitter = function() {
  return this.setSplitter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.hasSplitter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 windowSize = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.getWindowsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.setWindowsize = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.clearWindowsize = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceWindowNodeParserSpec.prototype.hasWindowsize = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    cutoff: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCutoff(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float cutoff = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.prototype.getCutoff = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.prototype.setCutoff = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.prototype.clearCutoff = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SimilarityPostProcessorSpec.prototype.hasCutoff = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    toolsList: jspb.Message.toObjectList(msg.getToolsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.toObject, includeInstance),
    responsesynthesizer: (f = msg.getResponsesynthesizer()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.toObject(includeInstance, f),
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.deserializeBinaryFromReader);
      msg.addTools(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.deserializeBinaryFromReader);
      msg.setResponsesynthesizer(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec.serializeBinaryToWriter
    );
  }
  f = message.getResponsesynthesizer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * repeated QueryEngineToolSpec tools = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.getToolsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.setToolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.addTools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.QueryEngineToolSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.clearToolsList = function() {
  return this.setToolsList([]);
};


/**
 * optional ResponseSynthesizerSpec responseSynthesizer = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.getResponsesynthesizer = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ResponseSynthesizerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.setResponsesynthesizer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.clearResponsesynthesizer = function() {
  return this.setResponsesynthesizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.hasResponsesynthesizer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ModelSpec model = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SubQuestionQueryEngineSpec.prototype.hasModel = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sentence: (f = msg.getSentence()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.toObject(includeInstance, f),
    token: (f = msg.getToken()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.toObject(includeInstance, f),
    code: (f = msg.getCode()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.deserializeBinaryFromReader);
      msg.setSentence(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSentence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SentenceSplitterSpec sentence = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.getSentence = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.SentenceSplitterSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.setSentence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.clearSentence = function() {
  return this.setSentence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.hasSentence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TokenSplitterSpec token = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.getToken = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CodeSplitterSpec code = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.getCode = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.CodeSplitterSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TextSplitterSpec.prototype.hasCode = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    topn: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    timedecay: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    lastaccess: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTimedecay(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLastaccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
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
 * optional int64 topN = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.getTopn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.setTopn = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.clearTopn = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.hasTopn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float timeDecay = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.getTimedecay = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.setTimedecay = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.clearTimedecay = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.hasTimedecay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool lastAccess = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.getLastaccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.setLastaccess = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.clearLastaccess = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TimeWeightedRecencyPostProcessorSpec.prototype.hasLastaccess = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunksize: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    chunkoverlap: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    wordseparator: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    hierarchical: (f = msg.getHierarchical()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunksize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunkoverlap(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWordseparator(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.deserializeBinaryFromReader);
      msg.setHierarchical(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHierarchical();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 chunkSize = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.getChunksize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.setChunksize = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.clearChunksize = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.hasChunksize = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 chunkOverlap = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.getChunkoverlap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.setChunkoverlap = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.clearChunkoverlap = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.hasChunkoverlap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string wordSeparator = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.getWordseparator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.setWordseparator = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.clearWordseparator = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.hasWordseparator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional HierarchicalSplitterSpec hierarchical = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.getHierarchical = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.HierarchicalSplitterSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.setHierarchical = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.clearHierarchical = function() {
  return this.setHierarchical(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TokenSplitterSpec.prototype.hasHierarchical = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    children: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ModelSpec model = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 children = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.getChildren = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.setChildren = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.clearChildren = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.TreeIndexSpec.prototype.hasChildren = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    databaseconnectionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    embeddingmodel: (f = msg.getEmbeddingmodel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabaseconnectionname(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setEmbeddingmodel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmbeddingmodel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string databaseConnectionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.getDatabaseconnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.setDatabaseconnectionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.clearDatabaseconnectionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.hasDatabaseconnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec embeddingModel = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.getEmbeddingmodel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.setEmbeddingmodel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.clearEmbeddingmodel = function() {
  return this.setEmbeddingmodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorIndexSpec.prototype.hasEmbeddingmodel = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: (f = msg.getIndex()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.toObject(includeInstance, f),
    embeddingmodel: (f = msg.getEmbeddingmodel()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.toObject(includeInstance, f),
    topk: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    matchmetadataMap: (f = msg.getMatchmetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    automerging: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    auto: (f = msg.getAuto()) && proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.deserializeBinaryFromReader);
      msg.setIndex(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.deserializeBinaryFromReader);
      msg.setEmbeddingmodel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTopk(value);
      break;
    case 4:
      var value = msg.getMatchmetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutomerging(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddingmodel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMatchmetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAuto();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional IndexReference index = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.getIndex = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.IndexReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.setIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.clearIndex = function() {
  return this.setIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ModelSpec embeddingModel = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.getEmbeddingmodel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.ModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.setEmbeddingmodel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.clearEmbeddingmodel = function() {
  return this.setEmbeddingmodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.hasEmbeddingmodel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 topK = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.getTopk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.setTopk = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.clearTopk = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.hasTopk = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> matchMetadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.getMatchmetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.clearMatchmetadataMap = function() {
  this.getMatchmetadataMap().clear();
  return this;};


/**
 * optional bool autoMerging = 5;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.getAutomerging = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.setAutomerging = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.clearAutomerging = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.hasAutomerging = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AutoVectorRetrieverSpec auto = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.getAuto = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.AutoVectorRetrieverSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.setAuto = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.clearAuto = function() {
  return this.setAuto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.VectorRetrieverSpec.prototype.hasAuto = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    connectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setConnectionname(value);
      break;
    case 3:
      var value = msg.getOptionsMap();
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
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> options = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1.WebReaderSpec.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
  return this;};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.pkg.apis.genai.v1alpha1);
