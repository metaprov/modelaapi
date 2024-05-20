import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AutoVectorRetrieverSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): AutoVectorRetrieverSpec;
  hasEnabled(): boolean;
  clearEnabled(): AutoVectorRetrieverSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): AutoVectorRetrieverSpec;
  hasModel(): boolean;
  clearModel(): AutoVectorRetrieverSpec;

  getMaxtopk(): number;
  setMaxtopk(value: number): AutoVectorRetrieverSpec;
  hasMaxtopk(): boolean;
  clearMaxtopk(): AutoVectorRetrieverSpec;

  getMetadatainfoList(): Array<MetadataKeyInfo>;
  setMetadatainfoList(value: Array<MetadataKeyInfo>): AutoVectorRetrieverSpec;
  clearMetadatainfoList(): AutoVectorRetrieverSpec;
  addMetadatainfo(value?: MetadataKeyInfo, index?: number): MetadataKeyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoVectorRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AutoVectorRetrieverSpec): AutoVectorRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: AutoVectorRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoVectorRetrieverSpec;
  static deserializeBinaryFromReader(message: AutoVectorRetrieverSpec, reader: jspb.BinaryReader): AutoVectorRetrieverSpec;
}

export namespace AutoVectorRetrieverSpec {
  export type AsObject = {
    enabled?: boolean,
    model?: ModelSpec.AsObject,
    maxtopk?: number,
    metadatainfoList: Array<MetadataKeyInfo.AsObject>,
  }
}

export class CodeSplitterSpec extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): CodeSplitterSpec;
  hasLanguage(): boolean;
  clearLanguage(): CodeSplitterSpec;

  getChunklines(): number;
  setChunklines(value: number): CodeSplitterSpec;
  hasChunklines(): boolean;
  clearChunklines(): CodeSplitterSpec;

  getChunklinesoverlap(): number;
  setChunklinesoverlap(value: number): CodeSplitterSpec;
  hasChunklinesoverlap(): boolean;
  clearChunklinesoverlap(): CodeSplitterSpec;

  getMaxchars(): number;
  setMaxchars(value: number): CodeSplitterSpec;
  hasMaxchars(): boolean;
  clearMaxchars(): CodeSplitterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSplitterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSplitterSpec): CodeSplitterSpec.AsObject;
  static serializeBinaryToWriter(message: CodeSplitterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSplitterSpec;
  static deserializeBinaryFromReader(message: CodeSplitterSpec, reader: jspb.BinaryReader): CodeSplitterSpec;
}

export namespace CodeSplitterSpec {
  export type AsObject = {
    language?: string,
    chunklines?: number,
    chunklinesoverlap?: number,
    maxchars?: number,
  }
}

export class CohereRerankSpec extends jspb.Message {
  getConnectionname(): string;
  setConnectionname(value: string): CohereRerankSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): CohereRerankSpec;

  getTopn(): number;
  setTopn(value: number): CohereRerankSpec;
  hasTopn(): boolean;
  clearTopn(): CohereRerankSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CohereRerankSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CohereRerankSpec): CohereRerankSpec.AsObject;
  static serializeBinaryToWriter(message: CohereRerankSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CohereRerankSpec;
  static deserializeBinaryFromReader(message: CohereRerankSpec, reader: jspb.BinaryReader): CohereRerankSpec;
}

export namespace CohereRerankSpec {
  export type AsObject = {
    connectionname?: string,
    topn?: number,
  }
}

export class DatabaseReaderSpec extends jspb.Message {
  getType(): string;
  setType(value: string): DatabaseReaderSpec;
  hasType(): boolean;
  clearType(): DatabaseReaderSpec;

  getConnectionname(): string;
  setConnectionname(value: string): DatabaseReaderSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): DatabaseReaderSpec;

  getQuery(): string;
  setQuery(value: string): DatabaseReaderSpec;
  hasQuery(): boolean;
  clearQuery(): DatabaseReaderSpec;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): DatabaseReaderSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseReaderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseReaderSpec): DatabaseReaderSpec.AsObject;
  static serializeBinaryToWriter(message: DatabaseReaderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseReaderSpec;
  static deserializeBinaryFromReader(message: DatabaseReaderSpec, reader: jspb.BinaryReader): DatabaseReaderSpec;
}

export namespace DatabaseReaderSpec {
  export type AsObject = {
    type?: string,
    connectionname?: string,
    query?: string,
    optionsMap: Array<[string, string]>,
  }
}

export class DocumentSpec extends jspb.Message {
  getName(): string;
  setName(value: string): DocumentSpec;
  hasName(): boolean;
  clearName(): DocumentSpec;

  getDescription(): string;
  setDescription(value: string): DocumentSpec;
  hasDescription(): boolean;
  clearDescription(): DocumentSpec;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): DocumentSpec;

  getRefreshperiod(): number;
  setRefreshperiod(value: number): DocumentSpec;
  hasRefreshperiod(): boolean;
  clearRefreshperiod(): DocumentSpec;

  getIndexesList(): Array<string>;
  setIndexesList(value: Array<string>): DocumentSpec;
  clearIndexesList(): DocumentSpec;
  addIndexes(value: string, index?: number): DocumentSpec;

  getNodeparser(): string;
  setNodeparser(value: string): DocumentSpec;
  hasNodeparser(): boolean;
  clearNodeparser(): DocumentSpec;

  getEmbeddingmodel(): ModelSpec | undefined;
  setEmbeddingmodel(value?: ModelSpec): DocumentSpec;
  hasEmbeddingmodel(): boolean;
  clearEmbeddingmodel(): DocumentSpec;

  getFile(): FileLocationReaderSpec | undefined;
  setFile(value?: FileLocationReaderSpec): DocumentSpec;
  hasFile(): boolean;
  clearFile(): DocumentSpec;

  getDatabase(): DatabaseReaderSpec | undefined;
  setDatabase(value?: DatabaseReaderSpec): DocumentSpec;
  hasDatabase(): boolean;
  clearDatabase(): DocumentSpec;

  getWeb(): WebReaderSpec | undefined;
  setWeb(value?: WebReaderSpec): DocumentSpec;
  hasWeb(): boolean;
  clearWeb(): DocumentSpec;

  getRepository(): RepositoryReaderSpec | undefined;
  setRepository(value?: RepositoryReaderSpec): DocumentSpec;
  hasRepository(): boolean;
  clearRepository(): DocumentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSpec): DocumentSpec.AsObject;
  static serializeBinaryToWriter(message: DocumentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSpec;
  static deserializeBinaryFromReader(message: DocumentSpec, reader: jspb.BinaryReader): DocumentSpec;
}

export namespace DocumentSpec {
  export type AsObject = {
    name?: string,
    description?: string,
    metadataMap: Array<[string, string]>,
    refreshperiod?: number,
    indexesList: Array<string>,
    nodeparser?: string,
    embeddingmodel?: ModelSpec.AsObject,
    file?: FileLocationReaderSpec.AsObject,
    database?: DatabaseReaderSpec.AsObject,
    web?: WebReaderSpec.AsObject,
    repository?: RepositoryReaderSpec.AsObject,
  }
}

export class DocumentStatus extends jspb.Message {
  getName(): string;
  setName(value: string): DocumentStatus;
  hasName(): boolean;
  clearName(): DocumentStatus;

  getNodes(): number;
  setNodes(value: number): DocumentStatus;
  hasNodes(): boolean;
  clearNodes(): DocumentStatus;

  getLasterror(): string;
  setLasterror(value: string): DocumentStatus;
  hasLasterror(): boolean;
  clearLasterror(): DocumentStatus;

  getFlagged(): boolean;
  setFlagged(value: boolean): DocumentStatus;
  hasFlagged(): boolean;
  clearFlagged(): DocumentStatus;

  getLastrefreshat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrefreshat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DocumentStatus;
  hasLastrefreshat(): boolean;
  clearLastrefreshat(): DocumentStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentStatus): DocumentStatus.AsObject;
  static serializeBinaryToWriter(message: DocumentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentStatus;
  static deserializeBinaryFromReader(message: DocumentStatus, reader: jspb.BinaryReader): DocumentStatus;
}

export namespace DocumentStatus {
  export type AsObject = {
    name?: string,
    nodes?: number,
    lasterror?: string,
    flagged?: boolean,
    lastrefreshat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class DocumentSummaryIndexSpec extends jspb.Message {
  getResponsesynthesizer(): ResponseSynthesizerSpec | undefined;
  setResponsesynthesizer(value?: ResponseSynthesizerSpec): DocumentSummaryIndexSpec;
  hasResponsesynthesizer(): boolean;
  clearResponsesynthesizer(): DocumentSummaryIndexSpec;

  getEmbedding(): VectorIndexSpec | undefined;
  setEmbedding(value?: VectorIndexSpec): DocumentSummaryIndexSpec;
  hasEmbedding(): boolean;
  clearEmbedding(): DocumentSummaryIndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSummaryIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSummaryIndexSpec): DocumentSummaryIndexSpec.AsObject;
  static serializeBinaryToWriter(message: DocumentSummaryIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSummaryIndexSpec;
  static deserializeBinaryFromReader(message: DocumentSummaryIndexSpec, reader: jspb.BinaryReader): DocumentSummaryIndexSpec;
}

export namespace DocumentSummaryIndexSpec {
  export type AsObject = {
    responsesynthesizer?: ResponseSynthesizerSpec.AsObject,
    embedding?: VectorIndexSpec.AsObject,
  }
}

export class DocumentSummaryRetrieverSpec extends jspb.Message {
  getIndex(): IndexReference | undefined;
  setIndex(value?: IndexReference): DocumentSummaryRetrieverSpec;
  hasIndex(): boolean;
  clearIndex(): DocumentSummaryRetrieverSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): DocumentSummaryRetrieverSpec;
  hasModel(): boolean;
  clearModel(): DocumentSummaryRetrieverSpec;

  getTopk(): number;
  setTopk(value: number): DocumentSummaryRetrieverSpec;
  hasTopk(): boolean;
  clearTopk(): DocumentSummaryRetrieverSpec;

  getMode(): string;
  setMode(value: string): DocumentSummaryRetrieverSpec;
  hasMode(): boolean;
  clearMode(): DocumentSummaryRetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSummaryRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSummaryRetrieverSpec): DocumentSummaryRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: DocumentSummaryRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSummaryRetrieverSpec;
  static deserializeBinaryFromReader(message: DocumentSummaryRetrieverSpec, reader: jspb.BinaryReader): DocumentSummaryRetrieverSpec;
}

export namespace DocumentSummaryRetrieverSpec {
  export type AsObject = {
    index?: IndexReference.AsObject,
    model?: ModelSpec.AsObject,
    topk?: number,
    mode?: string,
  }
}

export class EmbeddingRecencyPostProcessorSpec extends jspb.Message {
  getEmbeddingmodel(): ModelSpec | undefined;
  setEmbeddingmodel(value?: ModelSpec): EmbeddingRecencyPostProcessorSpec;
  hasEmbeddingmodel(): boolean;
  clearEmbeddingmodel(): EmbeddingRecencyPostProcessorSpec;

  getSimilaritycutoff(): number;
  setSimilaritycutoff(value: number): EmbeddingRecencyPostProcessorSpec;
  hasSimilaritycutoff(): boolean;
  clearSimilaritycutoff(): EmbeddingRecencyPostProcessorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbeddingRecencyPostProcessorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EmbeddingRecencyPostProcessorSpec): EmbeddingRecencyPostProcessorSpec.AsObject;
  static serializeBinaryToWriter(message: EmbeddingRecencyPostProcessorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbeddingRecencyPostProcessorSpec;
  static deserializeBinaryFromReader(message: EmbeddingRecencyPostProcessorSpec, reader: jspb.BinaryReader): EmbeddingRecencyPostProcessorSpec;
}

export namespace EmbeddingRecencyPostProcessorSpec {
  export type AsObject = {
    embeddingmodel?: ModelSpec.AsObject,
    similaritycutoff?: number,
  }
}

export class ExtensionFilter extends jspb.Message {
  getIncludeList(): Array<string>;
  setIncludeList(value: Array<string>): ExtensionFilter;
  clearIncludeList(): ExtensionFilter;
  addInclude(value: string, index?: number): ExtensionFilter;

  getExcludeList(): Array<string>;
  setExcludeList(value: Array<string>): ExtensionFilter;
  clearExcludeList(): ExtensionFilter;
  addExclude(value: string, index?: number): ExtensionFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionFilter): ExtensionFilter.AsObject;
  static serializeBinaryToWriter(message: ExtensionFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionFilter;
  static deserializeBinaryFromReader(message: ExtensionFilter, reader: jspb.BinaryReader): ExtensionFilter;
}

export namespace ExtensionFilter {
  export type AsObject = {
    includeList: Array<string>,
    excludeList: Array<string>,
  }
}

export class FileLocationReaderSpec extends jspb.Message {
  getFilereaderspec(): FileReaderSpec | undefined;
  setFilereaderspec(value?: FileReaderSpec): FileLocationReaderSpec;
  hasFilereaderspec(): boolean;
  clearFilereaderspec(): FileLocationReaderSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): FileLocationReaderSpec;
  hasLocation(): boolean;
  clearLocation(): FileLocationReaderSpec;

  getUrl(): string;
  setUrl(value: string): FileLocationReaderSpec;
  hasUrl(): boolean;
  clearUrl(): FileLocationReaderSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileLocationReaderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FileLocationReaderSpec): FileLocationReaderSpec.AsObject;
  static serializeBinaryToWriter(message: FileLocationReaderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileLocationReaderSpec;
  static deserializeBinaryFromReader(message: FileLocationReaderSpec, reader: jspb.BinaryReader): FileLocationReaderSpec;
}

export namespace FileLocationReaderSpec {
  export type AsObject = {
    filereaderspec?: FileReaderSpec.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    url?: string,
  }
}

export class FileReaderSpec extends jspb.Message {
  getType(): string;
  setType(value: string): FileReaderSpec;
  hasType(): boolean;
  clearType(): FileReaderSpec;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): FileReaderSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileReaderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FileReaderSpec): FileReaderSpec.AsObject;
  static serializeBinaryToWriter(message: FileReaderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileReaderSpec;
  static deserializeBinaryFromReader(message: FileReaderSpec, reader: jspb.BinaryReader): FileReaderSpec;
}

export namespace FileReaderSpec {
  export type AsObject = {
    type?: string,
    optionsMap: Array<[string, string]>,
  }
}

export class FilteredNodeParser extends jspb.Message {
  getExtension(): ExtensionFilter | undefined;
  setExtension(value?: ExtensionFilter): FilteredNodeParser;
  hasExtension(): boolean;
  clearExtension(): FilteredNodeParser;

  getLength(): LengthFilter | undefined;
  setLength(value?: LengthFilter): FilteredNodeParser;
  hasLength(): boolean;
  clearLength(): FilteredNodeParser;

  getName(): NameFilter | undefined;
  setName(value?: NameFilter): FilteredNodeParser;
  hasName(): boolean;
  clearName(): FilteredNodeParser;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): FilteredNodeParser;

  getNodeparser(): string;
  setNodeparser(value: string): FilteredNodeParser;
  hasNodeparser(): boolean;
  clearNodeparser(): FilteredNodeParser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilteredNodeParser.AsObject;
  static toObject(includeInstance: boolean, msg: FilteredNodeParser): FilteredNodeParser.AsObject;
  static serializeBinaryToWriter(message: FilteredNodeParser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilteredNodeParser;
  static deserializeBinaryFromReader(message: FilteredNodeParser, reader: jspb.BinaryReader): FilteredNodeParser;
}

export namespace FilteredNodeParser {
  export type AsObject = {
    extension?: ExtensionFilter.AsObject,
    length?: LengthFilter.AsObject,
    name?: NameFilter.AsObject,
    metadataMap: Array<[string, string]>,
    nodeparser?: string,
  }
}

export class FixedRecencyPostProcessorSpec extends jspb.Message {
  getTopk(): number;
  setTopk(value: number): FixedRecencyPostProcessorSpec;
  hasTopk(): boolean;
  clearTopk(): FixedRecencyPostProcessorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FixedRecencyPostProcessorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FixedRecencyPostProcessorSpec): FixedRecencyPostProcessorSpec.AsObject;
  static serializeBinaryToWriter(message: FixedRecencyPostProcessorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FixedRecencyPostProcessorSpec;
  static deserializeBinaryFromReader(message: FixedRecencyPostProcessorSpec, reader: jspb.BinaryReader): FixedRecencyPostProcessorSpec;
}

export namespace FixedRecencyPostProcessorSpec {
  export type AsObject = {
    topk?: number,
  }
}

export class FusionRetrieverSpec extends jspb.Message {
  getRetrieversList(): Array<string>;
  setRetrieversList(value: Array<string>): FusionRetrieverSpec;
  clearRetrieversList(): FusionRetrieverSpec;
  addRetrievers(value: string, index?: number): FusionRetrieverSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): FusionRetrieverSpec;
  hasModel(): boolean;
  clearModel(): FusionRetrieverSpec;

  getQueries(): number;
  setQueries(value: number): FusionRetrieverSpec;
  hasQueries(): boolean;
  clearQueries(): FusionRetrieverSpec;

  getTopk(): number;
  setTopk(value: number): FusionRetrieverSpec;
  hasTopk(): boolean;
  clearTopk(): FusionRetrieverSpec;

  getMode(): string;
  setMode(value: string): FusionRetrieverSpec;
  hasMode(): boolean;
  clearMode(): FusionRetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FusionRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FusionRetrieverSpec): FusionRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: FusionRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FusionRetrieverSpec;
  static deserializeBinaryFromReader(message: FusionRetrieverSpec, reader: jspb.BinaryReader): FusionRetrieverSpec;
}

export namespace FusionRetrieverSpec {
  export type AsObject = {
    retrieversList: Array<string>,
    model?: ModelSpec.AsObject,
    queries?: number,
    topk?: number,
    mode?: string,
  }
}

export class HierarchicalSplitterSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): HierarchicalSplitterSpec;
  hasEnabled(): boolean;
  clearEnabled(): HierarchicalSplitterSpec;

  getChunksizesList(): Array<number>;
  setChunksizesList(value: Array<number>): HierarchicalSplitterSpec;
  clearChunksizesList(): HierarchicalSplitterSpec;
  addChunksizes(value: number, index?: number): HierarchicalSplitterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HierarchicalSplitterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HierarchicalSplitterSpec): HierarchicalSplitterSpec.AsObject;
  static serializeBinaryToWriter(message: HierarchicalSplitterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HierarchicalSplitterSpec;
  static deserializeBinaryFromReader(message: HierarchicalSplitterSpec, reader: jspb.BinaryReader): HierarchicalSplitterSpec;
}

export namespace HierarchicalSplitterSpec {
  export type AsObject = {
    enabled?: boolean,
    chunksizesList: Array<number>,
  }
}

export class IndexReference extends jspb.Message {
  getKnowledgebasename(): string;
  setKnowledgebasename(value: string): IndexReference;
  hasKnowledgebasename(): boolean;
  clearKnowledgebasename(): IndexReference;

  getIndex(): string;
  setIndex(value: string): IndexReference;
  hasIndex(): boolean;
  clearIndex(): IndexReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexReference.AsObject;
  static toObject(includeInstance: boolean, msg: IndexReference): IndexReference.AsObject;
  static serializeBinaryToWriter(message: IndexReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexReference;
  static deserializeBinaryFromReader(message: IndexReference, reader: jspb.BinaryReader): IndexReference;
}

export namespace IndexReference {
  export type AsObject = {
    knowledgebasename?: string,
    index?: string,
  }
}

export class IndexSpec extends jspb.Message {
  getName(): string;
  setName(value: string): IndexSpec;
  hasName(): boolean;
  clearName(): IndexSpec;

  getVector(): VectorIndexSpec | undefined;
  setVector(value?: VectorIndexSpec): IndexSpec;
  hasVector(): boolean;
  clearVector(): IndexSpec;

  getDocumentsummary(): DocumentSummaryIndexSpec | undefined;
  setDocumentsummary(value?: DocumentSummaryIndexSpec): IndexSpec;
  hasDocumentsummary(): boolean;
  clearDocumentsummary(): IndexSpec;

  getTreeindex(): TreeIndexSpec | undefined;
  setTreeindex(value?: TreeIndexSpec): IndexSpec;
  hasTreeindex(): boolean;
  clearTreeindex(): IndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: IndexSpec): IndexSpec.AsObject;
  static serializeBinaryToWriter(message: IndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexSpec;
  static deserializeBinaryFromReader(message: IndexSpec, reader: jspb.BinaryReader): IndexSpec;
}

export namespace IndexSpec {
  export type AsObject = {
    name?: string,
    vector?: VectorIndexSpec.AsObject,
    documentsummary?: DocumentSummaryIndexSpec.AsObject,
    treeindex?: TreeIndexSpec.AsObject,
  }
}

export class IndexStatus extends jspb.Message {
  getName(): string;
  setName(value: string): IndexStatus;
  hasName(): boolean;
  clearName(): IndexStatus;

  getDocuments(): number;
  setDocuments(value: number): IndexStatus;
  hasDocuments(): boolean;
  clearDocuments(): IndexStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexStatus.AsObject;
  static toObject(includeInstance: boolean, msg: IndexStatus): IndexStatus.AsObject;
  static serializeBinaryToWriter(message: IndexStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexStatus;
  static deserializeBinaryFromReader(message: IndexStatus, reader: jspb.BinaryReader): IndexStatus;
}

export namespace IndexStatus {
  export type AsObject = {
    name?: string,
    documents?: number,
  }
}

export class KeywordPostProcessorSpec extends jspb.Message {
  getIncludeList(): Array<string>;
  setIncludeList(value: Array<string>): KeywordPostProcessorSpec;
  clearIncludeList(): KeywordPostProcessorSpec;
  addInclude(value: string, index?: number): KeywordPostProcessorSpec;

  getExcludeList(): Array<string>;
  setExcludeList(value: Array<string>): KeywordPostProcessorSpec;
  clearExcludeList(): KeywordPostProcessorSpec;
  addExclude(value: string, index?: number): KeywordPostProcessorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPostProcessorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPostProcessorSpec): KeywordPostProcessorSpec.AsObject;
  static serializeBinaryToWriter(message: KeywordPostProcessorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPostProcessorSpec;
  static deserializeBinaryFromReader(message: KeywordPostProcessorSpec, reader: jspb.BinaryReader): KeywordPostProcessorSpec;
}

export namespace KeywordPostProcessorSpec {
  export type AsObject = {
    includeList: Array<string>,
    excludeList: Array<string>,
  }
}

export class KnowledgeBase extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): KnowledgeBase;
  hasMetadata(): boolean;
  clearMetadata(): KnowledgeBase;

  getSpec(): KnowledgeBaseSpec | undefined;
  setSpec(value?: KnowledgeBaseSpec): KnowledgeBase;
  hasSpec(): boolean;
  clearSpec(): KnowledgeBase;

  getStatus(): KnowledgeBaseStatus | undefined;
  setStatus(value?: KnowledgeBaseStatus): KnowledgeBase;
  hasStatus(): boolean;
  clearStatus(): KnowledgeBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeBase.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeBase): KnowledgeBase.AsObject;
  static serializeBinaryToWriter(message: KnowledgeBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeBase;
  static deserializeBinaryFromReader(message: KnowledgeBase, reader: jspb.BinaryReader): KnowledgeBase;
}

export namespace KnowledgeBase {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: KnowledgeBaseSpec.AsObject,
    status?: KnowledgeBaseStatus.AsObject,
  }
}

export class KnowledgeBaseList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): KnowledgeBaseList;
  hasMetadata(): boolean;
  clearMetadata(): KnowledgeBaseList;

  getItemsList(): Array<KnowledgeBase>;
  setItemsList(value: Array<KnowledgeBase>): KnowledgeBaseList;
  clearItemsList(): KnowledgeBaseList;
  addItems(value?: KnowledgeBase, index?: number): KnowledgeBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeBaseList.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeBaseList): KnowledgeBaseList.AsObject;
  static serializeBinaryToWriter(message: KnowledgeBaseList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeBaseList;
  static deserializeBinaryFromReader(message: KnowledgeBaseList, reader: jspb.BinaryReader): KnowledgeBaseList;
}

export namespace KnowledgeBaseList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<KnowledgeBase.AsObject>,
  }
}

export class KnowledgeBaseSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): KnowledgeBaseSpec;
  hasOwner(): boolean;
  clearOwner(): KnowledgeBaseSpec;

  getDescription(): string;
  setDescription(value: string): KnowledgeBaseSpec;
  hasDescription(): boolean;
  clearDescription(): KnowledgeBaseSpec;

  getRefreshschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setRefreshschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): KnowledgeBaseSpec;
  hasRefreshschedule(): boolean;
  clearRefreshschedule(): KnowledgeBaseSpec;

  getArtifactbucketname(): string;
  setArtifactbucketname(value: string): KnowledgeBaseSpec;
  hasArtifactbucketname(): boolean;
  clearArtifactbucketname(): KnowledgeBaseSpec;

  getLabname(): string;
  setLabname(value: string): KnowledgeBaseSpec;
  hasLabname(): boolean;
  clearLabname(): KnowledgeBaseSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): KnowledgeBaseSpec;
  hasResources(): boolean;
  clearResources(): KnowledgeBaseSpec;

  getMetadatadatabaseconnectionname(): string;
  setMetadatadatabaseconnectionname(value: string): KnowledgeBaseSpec;
  hasMetadatadatabaseconnectionname(): boolean;
  clearMetadatadatabaseconnectionname(): KnowledgeBaseSpec;

  getDocumentstoreconnectionname(): string;
  setDocumentstoreconnectionname(value: string): KnowledgeBaseSpec;
  hasDocumentstoreconnectionname(): boolean;
  clearDocumentstoreconnectionname(): KnowledgeBaseSpec;

  getIndexesList(): Array<IndexSpec>;
  setIndexesList(value: Array<IndexSpec>): KnowledgeBaseSpec;
  clearIndexesList(): KnowledgeBaseSpec;
  addIndexes(value?: IndexSpec, index?: number): IndexSpec;

  getDocumentsList(): Array<DocumentSpec>;
  setDocumentsList(value: Array<DocumentSpec>): KnowledgeBaseSpec;
  clearDocumentsList(): KnowledgeBaseSpec;
  addDocuments(value?: DocumentSpec, index?: number): DocumentSpec;

  getNodeparsersList(): Array<NodeParserSpec>;
  setNodeparsersList(value: Array<NodeParserSpec>): KnowledgeBaseSpec;
  clearNodeparsersList(): KnowledgeBaseSpec;
  addNodeparsers(value?: NodeParserSpec, index?: number): NodeParserSpec;

  getDefaultnodeparser(): string;
  setDefaultnodeparser(value: string): KnowledgeBaseSpec;
  hasDefaultnodeparser(): boolean;
  clearDefaultnodeparser(): KnowledgeBaseSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeBaseSpec.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeBaseSpec): KnowledgeBaseSpec.AsObject;
  static serializeBinaryToWriter(message: KnowledgeBaseSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeBaseSpec;
  static deserializeBinaryFromReader(message: KnowledgeBaseSpec, reader: jspb.BinaryReader): KnowledgeBaseSpec;
}

export namespace KnowledgeBaseSpec {
  export type AsObject = {
    owner?: string,
    description?: string,
    refreshschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    artifactbucketname?: string,
    labname?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    metadatadatabaseconnectionname?: string,
    documentstoreconnectionname?: string,
    indexesList: Array<IndexSpec.AsObject>,
    documentsList: Array<DocumentSpec.AsObject>,
    nodeparsersList: Array<NodeParserSpec.AsObject>,
    defaultnodeparser?: string,
  }
}

export class KnowledgeBaseStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): KnowledgeBaseStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): KnowledgeBaseStatus;

  getLastrefreshat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrefreshat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): KnowledgeBaseStatus;
  hasLastrefreshat(): boolean;
  clearLastrefreshat(): KnowledgeBaseStatus;

  getLastcompletionat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastcompletionat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): KnowledgeBaseStatus;
  hasLastcompletionat(): boolean;
  clearLastcompletionat(): KnowledgeBaseStatus;

  getLogsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog>;
  setLogsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog>): KnowledgeBaseStatus;
  clearLogsList(): KnowledgeBaseStatus;
  addLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog;

  getDocumentsList(): Array<DocumentStatus>;
  setDocumentsList(value: Array<DocumentStatus>): KnowledgeBaseStatus;
  clearDocumentsList(): KnowledgeBaseStatus;
  addDocuments(value?: DocumentStatus, index?: number): DocumentStatus;

  getIndexesList(): Array<IndexStatus>;
  setIndexesList(value: Array<IndexStatus>): KnowledgeBaseStatus;
  clearIndexesList(): KnowledgeBaseStatus;
  addIndexes(value?: IndexStatus, index?: number): IndexStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): KnowledgeBaseStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): KnowledgeBaseStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): KnowledgeBaseStatus;
  clearConditionsList(): KnowledgeBaseStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeBaseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeBaseStatus): KnowledgeBaseStatus.AsObject;
  static serializeBinaryToWriter(message: KnowledgeBaseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeBaseStatus;
  static deserializeBinaryFromReader(message: KnowledgeBaseStatus, reader: jspb.BinaryReader): KnowledgeBaseStatus;
}

export namespace KnowledgeBaseStatus {
  export type AsObject = {
    observedgeneration?: number,
    lastrefreshat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastcompletionat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    logsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ContainerLog.AsObject>,
    documentsList: Array<DocumentStatus.AsObject>,
    indexesList: Array<IndexStatus.AsObject>,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class KnowledgeGraphQueryEngine extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeGraphQueryEngine.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeGraphQueryEngine): KnowledgeGraphQueryEngine.AsObject;
  static serializeBinaryToWriter(message: KnowledgeGraphQueryEngine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeGraphQueryEngine;
  static deserializeBinaryFromReader(message: KnowledgeGraphQueryEngine, reader: jspb.BinaryReader): KnowledgeGraphQueryEngine;
}

export namespace KnowledgeGraphQueryEngine {
  export type AsObject = {
  }
}

export class LLM extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): LLM;
  hasMetadata(): boolean;
  clearMetadata(): LLM;

  getSpec(): LLMSpec | undefined;
  setSpec(value?: LLMSpec): LLM;
  hasSpec(): boolean;
  clearSpec(): LLM;

  getStatus(): LLMStatus | undefined;
  setStatus(value?: LLMStatus): LLM;
  hasStatus(): boolean;
  clearStatus(): LLM;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLM.AsObject;
  static toObject(includeInstance: boolean, msg: LLM): LLM.AsObject;
  static serializeBinaryToWriter(message: LLM, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLM;
  static deserializeBinaryFromReader(message: LLM, reader: jspb.BinaryReader): LLM;
}

export namespace LLM {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: LLMSpec.AsObject,
    status?: LLMStatus.AsObject,
  }
}

export class LLMAccessSpec extends jspb.Message {
  getPort(): number;
  setPort(value: number): LLMAccessSpec;
  hasPort(): boolean;
  clearPort(): LLMAccessSpec;

  getNodeport(): number;
  setNodeport(value: number): LLMAccessSpec;
  hasNodeport(): boolean;
  clearNodeport(): LLMAccessSpec;

  getAccesstype(): string;
  setAccesstype(value: string): LLMAccessSpec;
  hasAccesstype(): boolean;
  clearAccesstype(): LLMAccessSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMAccessSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LLMAccessSpec): LLMAccessSpec.AsObject;
  static serializeBinaryToWriter(message: LLMAccessSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMAccessSpec;
  static deserializeBinaryFromReader(message: LLMAccessSpec, reader: jspb.BinaryReader): LLMAccessSpec;
}

export namespace LLMAccessSpec {
  export type AsObject = {
    port?: number,
    nodeport?: number,
    accesstype?: string,
  }
}

export class LLMList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): LLMList;
  hasMetadata(): boolean;
  clearMetadata(): LLMList;

  getItemsList(): Array<LLM>;
  setItemsList(value: Array<LLM>): LLMList;
  clearItemsList(): LLMList;
  addItems(value?: LLM, index?: number): LLM;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMList.AsObject;
  static toObject(includeInstance: boolean, msg: LLMList): LLMList.AsObject;
  static serializeBinaryToWriter(message: LLMList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMList;
  static deserializeBinaryFromReader(message: LLMList, reader: jspb.BinaryReader): LLMList;
}

export namespace LLMList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<LLM.AsObject>,
  }
}

export class LLMRerankSpec extends jspb.Message {
  getTopn(): number;
  setTopn(value: number): LLMRerankSpec;
  hasTopn(): boolean;
  clearTopn(): LLMRerankSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): LLMRerankSpec;
  hasModel(): boolean;
  clearModel(): LLMRerankSpec;

  getRankgpt(): boolean;
  setRankgpt(value: boolean): LLMRerankSpec;
  hasRankgpt(): boolean;
  clearRankgpt(): LLMRerankSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMRerankSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LLMRerankSpec): LLMRerankSpec.AsObject;
  static serializeBinaryToWriter(message: LLMRerankSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMRerankSpec;
  static deserializeBinaryFromReader(message: LLMRerankSpec, reader: jspb.BinaryReader): LLMRerankSpec;
}

export namespace LLMRerankSpec {
  export type AsObject = {
    topn?: number,
    model?: ModelSpec.AsObject,
    rankgpt?: boolean,
  }
}

export class LLMSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): LLMSpec;
  hasOwner(): boolean;
  clearOwner(): LLMSpec;

  getDescription(): string;
  setDescription(value: string): LLMSpec;
  hasDescription(): boolean;
  clearDescription(): LLMSpec;

  getServingsitename(): string;
  setServingsitename(value: string): LLMSpec;
  hasServingsitename(): boolean;
  clearServingsitename(): LLMSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): LLMSpec;
  hasResources(): boolean;
  clearResources(): LLMSpec;

  getModelsList(): Array<ModelServingSpec>;
  setModelsList(value: Array<ModelServingSpec>): LLMSpec;
  clearModelsList(): LLMSpec;
  addModels(value?: ModelServingSpec, index?: number): ModelServingSpec;

  getQueryenginesList(): Array<QueryEngineSpec>;
  setQueryenginesList(value: Array<QueryEngineSpec>): LLMSpec;
  clearQueryenginesList(): LLMSpec;
  addQueryengines(value?: QueryEngineSpec, index?: number): QueryEngineSpec;

  getRetrieversList(): Array<RetrieverSpec>;
  setRetrieversList(value: Array<RetrieverSpec>): LLMSpec;
  clearRetrieversList(): LLMSpec;
  addRetrievers(value?: RetrieverSpec, index?: number): RetrieverSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): LLMSpec;
  hasNotification(): boolean;
  clearNotification(): LLMSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LLMSpec): LLMSpec.AsObject;
  static serializeBinaryToWriter(message: LLMSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMSpec;
  static deserializeBinaryFromReader(message: LLMSpec, reader: jspb.BinaryReader): LLMSpec;
}

export namespace LLMSpec {
  export type AsObject = {
    owner?: string,
    description?: string,
    servingsitename?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    modelsList: Array<ModelServingSpec.AsObject>,
    queryenginesList: Array<QueryEngineSpec.AsObject>,
    retrieversList: Array<RetrieverSpec.AsObject>,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
  }
}

export class LLMStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): LLMStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): LLMStatus;

  getDocumentsList(): Array<ModelStatus>;
  setDocumentsList(value: Array<ModelStatus>): LLMStatus;
  clearDocumentsList(): LLMStatus;
  addDocuments(value?: ModelStatus, index?: number): ModelStatus;

  getEndpoint(): string;
  setEndpoint(value: string): LLMStatus;
  hasEndpoint(): boolean;
  clearEndpoint(): LLMStatus;

  getDeployedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDeployedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LLMStatus;
  hasDeployedat(): boolean;
  clearDeployedat(): LLMStatus;

  getDeploymentref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDeploymentref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): LLMStatus;
  hasDeploymentref(): boolean;
  clearDeploymentref(): LLMStatus;

  getServiceref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServiceref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): LLMStatus;
  hasServiceref(): boolean;
  clearServiceref(): LLMStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): LLMStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): LLMStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LLMStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): LLMStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): LLMStatus;
  clearConditionsList(): LLMStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LLMStatus): LLMStatus.AsObject;
  static serializeBinaryToWriter(message: LLMStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMStatus;
  static deserializeBinaryFromReader(message: LLMStatus, reader: jspb.BinaryReader): LLMStatus;
}

export namespace LLMStatus {
  export type AsObject = {
    observedgeneration?: number,
    documentsList: Array<ModelStatus.AsObject>,
    endpoint?: string,
    deployedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    deploymentref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    serviceref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    failuremessage?: string,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class LengthFilter extends jspb.Message {
  getGreaterthan(): number;
  setGreaterthan(value: number): LengthFilter;
  hasGreaterthan(): boolean;
  clearGreaterthan(): LengthFilter;

  getLessthan(): number;
  setLessthan(value: number): LengthFilter;
  hasLessthan(): boolean;
  clearLessthan(): LengthFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LengthFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LengthFilter): LengthFilter.AsObject;
  static serializeBinaryToWriter(message: LengthFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LengthFilter;
  static deserializeBinaryFromReader(message: LengthFilter, reader: jspb.BinaryReader): LengthFilter;
}

export namespace LengthFilter {
  export type AsObject = {
    greaterthan?: number,
    lessthan?: number,
  }
}

export class LongContextReorderSpec extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongContextReorderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LongContextReorderSpec): LongContextReorderSpec.AsObject;
  static serializeBinaryToWriter(message: LongContextReorderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongContextReorderSpec;
  static deserializeBinaryFromReader(message: LongContextReorderSpec, reader: jspb.BinaryReader): LongContextReorderSpec;
}

export namespace LongContextReorderSpec {
  export type AsObject = {
  }
}

export class MetadataKeyInfo extends jspb.Message {
  getName(): string;
  setName(value: string): MetadataKeyInfo;
  hasName(): boolean;
  clearName(): MetadataKeyInfo;

  getType(): string;
  setType(value: string): MetadataKeyInfo;
  hasType(): boolean;
  clearType(): MetadataKeyInfo;

  getDescription(): string;
  setDescription(value: string): MetadataKeyInfo;
  hasDescription(): boolean;
  clearDescription(): MetadataKeyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataKeyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataKeyInfo): MetadataKeyInfo.AsObject;
  static serializeBinaryToWriter(message: MetadataKeyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataKeyInfo;
  static deserializeBinaryFromReader(message: MetadataKeyInfo, reader: jspb.BinaryReader): MetadataKeyInfo;
}

export namespace MetadataKeyInfo {
  export type AsObject = {
    name?: string,
    type?: string,
    description?: string,
  }
}

export class MixedNodeParserSpec extends jspb.Message {
  getParsersList(): Array<FilteredNodeParser>;
  setParsersList(value: Array<FilteredNodeParser>): MixedNodeParserSpec;
  clearParsersList(): MixedNodeParserSpec;
  addParsers(value?: FilteredNodeParser, index?: number): FilteredNodeParser;

  getFallbacknodeparser(): string;
  setFallbacknodeparser(value: string): MixedNodeParserSpec;
  hasFallbacknodeparser(): boolean;
  clearFallbacknodeparser(): MixedNodeParserSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MixedNodeParserSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MixedNodeParserSpec): MixedNodeParserSpec.AsObject;
  static serializeBinaryToWriter(message: MixedNodeParserSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MixedNodeParserSpec;
  static deserializeBinaryFromReader(message: MixedNodeParserSpec, reader: jspb.BinaryReader): MixedNodeParserSpec;
}

export namespace MixedNodeParserSpec {
  export type AsObject = {
    parsersList: Array<FilteredNodeParser.AsObject>,
    fallbacknodeparser?: string,
  }
}

export class ModelMetrics extends jspb.Message {
  getP50(): number;
  setP50(value: number): ModelMetrics;
  hasP50(): boolean;
  clearP50(): ModelMetrics;

  getP95(): number;
  setP95(value: number): ModelMetrics;
  hasP95(): boolean;
  clearP95(): ModelMetrics;

  getP99(): number;
  setP99(value: number): ModelMetrics;
  hasP99(): boolean;
  clearP99(): ModelMetrics;

  getTotalpredictions(): number;
  setTotalpredictions(value: number): ModelMetrics;
  hasTotalpredictions(): boolean;
  clearTotalpredictions(): ModelMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ModelMetrics): ModelMetrics.AsObject;
  static serializeBinaryToWriter(message: ModelMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelMetrics;
  static deserializeBinaryFromReader(message: ModelMetrics, reader: jspb.BinaryReader): ModelMetrics;
}

export namespace ModelMetrics {
  export type AsObject = {
    p50?: number,
    p95?: number,
    p99?: number,
    totalpredictions?: number,
  }
}

export class ModelServingSpec extends jspb.Message {
  getName(): string;
  setName(value: string): ModelServingSpec;
  hasName(): boolean;
  clearName(): ModelServingSpec;

  getQueryengine(): string;
  setQueryengine(value: string): ModelServingSpec;
  hasQueryengine(): boolean;
  clearQueryengine(): ModelServingSpec;

  getPath(): string;
  setPath(value: string): ModelServingSpec;
  hasPath(): boolean;
  clearPath(): ModelServingSpec;

  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): ModelServingSpec;
  clearPathsList(): ModelServingSpec;
  addPaths(value: string, index?: number): ModelServingSpec;

  getFormat(): string;
  setFormat(value: string): ModelServingSpec;
  hasFormat(): boolean;
  clearFormat(): ModelServingSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): ModelServingSpec;
  hasModel(): boolean;
  clearModel(): ModelServingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelServingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelServingSpec): ModelServingSpec.AsObject;
  static serializeBinaryToWriter(message: ModelServingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelServingSpec;
  static deserializeBinaryFromReader(message: ModelServingSpec, reader: jspb.BinaryReader): ModelServingSpec;
}

export namespace ModelServingSpec {
  export type AsObject = {
    name?: string,
    queryengine?: string,
    path?: string,
    pathsList: Array<string>,
    format?: string,
    model?: ModelSpec.AsObject,
  }
}

export class ModelSpec extends jspb.Message {
  getConnectionname(): string;
  setConnectionname(value: string): ModelSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): ModelSpec;

  getModel(): string;
  setModel(value: string): ModelSpec;
  hasModel(): boolean;
  clearModel(): ModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelSpec): ModelSpec.AsObject;
  static serializeBinaryToWriter(message: ModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelSpec;
  static deserializeBinaryFromReader(message: ModelSpec, reader: jspb.BinaryReader): ModelSpec;
}

export namespace ModelSpec {
  export type AsObject = {
    connectionname?: string,
    model?: string,
  }
}

export class ModelStatus extends jspb.Message {
  getName(): string;
  setName(value: string): ModelStatus;
  hasName(): boolean;
  clearName(): ModelStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ModelStatus;

  getModelmetrics(): ModelMetrics | undefined;
  setModelmetrics(value?: ModelMetrics): ModelStatus;
  hasModelmetrics(): boolean;
  clearModelmetrics(): ModelStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatus): ModelStatus.AsObject;
  static serializeBinaryToWriter(message: ModelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatus;
  static deserializeBinaryFromReader(message: ModelStatus, reader: jspb.BinaryReader): ModelStatus;
}

export namespace ModelStatus {
  export type AsObject = {
    name?: string,
    failuremessage?: string,
    modelmetrics?: ModelMetrics.AsObject,
  }
}

export class NameFilter extends jspb.Message {
  getContains(): string;
  setContains(value: string): NameFilter;
  hasContains(): boolean;
  clearContains(): NameFilter;

  getEquals(): string;
  setEquals(value: string): NameFilter;
  hasEquals(): boolean;
  clearEquals(): NameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: NameFilter): NameFilter.AsObject;
  static serializeBinaryToWriter(message: NameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameFilter;
  static deserializeBinaryFromReader(message: NameFilter, reader: jspb.BinaryReader): NameFilter;
}

export namespace NameFilter {
  export type AsObject = {
    contains?: string,
    equals?: string,
  }
}

export class NodeParserSpec extends jspb.Message {
  getName(): string;
  setName(value: string): NodeParserSpec;
  hasName(): boolean;
  clearName(): NodeParserSpec;

  getIncludeorderrelationship(): boolean;
  setIncludeorderrelationship(value: boolean): NodeParserSpec;
  hasIncludeorderrelationship(): boolean;
  clearIncludeorderrelationship(): NodeParserSpec;

  getIncludemetadata(): boolean;
  setIncludemetadata(value: boolean): NodeParserSpec;
  hasIncludemetadata(): boolean;
  clearIncludemetadata(): NodeParserSpec;

  getType(): string;
  setType(value: string): NodeParserSpec;
  hasType(): boolean;
  clearType(): NodeParserSpec;

  getText(): TextSplitterSpec | undefined;
  setText(value?: TextSplitterSpec): NodeParserSpec;
  hasText(): boolean;
  clearText(): NodeParserSpec;

  getSentence(): SentenceWindowNodeParserSpec | undefined;
  setSentence(value?: SentenceWindowNodeParserSpec): NodeParserSpec;
  hasSentence(): boolean;
  clearSentence(): NodeParserSpec;

  getMixed(): MixedNodeParserSpec | undefined;
  setMixed(value?: MixedNodeParserSpec): NodeParserSpec;
  hasMixed(): boolean;
  clearMixed(): NodeParserSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeParserSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NodeParserSpec): NodeParserSpec.AsObject;
  static serializeBinaryToWriter(message: NodeParserSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeParserSpec;
  static deserializeBinaryFromReader(message: NodeParserSpec, reader: jspb.BinaryReader): NodeParserSpec;
}

export namespace NodeParserSpec {
  export type AsObject = {
    name?: string,
    includeorderrelationship?: boolean,
    includemetadata?: boolean,
    type?: string,
    text?: TextSplitterSpec.AsObject,
    sentence?: SentenceWindowNodeParserSpec.AsObject,
    mixed?: MixedNodeParserSpec.AsObject,
  }
}

export class NodePostProcessor extends jspb.Message {
  getSimilarity(): SimilarityPostProcessorSpec | undefined;
  setSimilarity(value?: SimilarityPostProcessorSpec): NodePostProcessor;
  hasSimilarity(): boolean;
  clearSimilarity(): NodePostProcessor;

  getKeyword(): KeywordPostProcessorSpec | undefined;
  setKeyword(value?: KeywordPostProcessorSpec): NodePostProcessor;
  hasKeyword(): boolean;
  clearKeyword(): NodePostProcessor;

  getReorder(): LongContextReorderSpec | undefined;
  setReorder(value?: LongContextReorderSpec): NodePostProcessor;
  hasReorder(): boolean;
  clearReorder(): NodePostProcessor;

  getEmbeddingoptimizer(): SentenceEmbeddingOptimizerSpec | undefined;
  setEmbeddingoptimizer(value?: SentenceEmbeddingOptimizerSpec): NodePostProcessor;
  hasEmbeddingoptimizer(): boolean;
  clearEmbeddingoptimizer(): NodePostProcessor;

  getLlmrerank(): LLMRerankSpec | undefined;
  setLlmrerank(value?: LLMRerankSpec): NodePostProcessor;
  hasLlmrerank(): boolean;
  clearLlmrerank(): NodePostProcessor;

  getCoherererank(): CohereRerankSpec | undefined;
  setCoherererank(value?: CohereRerankSpec): NodePostProcessor;
  hasCoherererank(): boolean;
  clearCoherererank(): NodePostProcessor;

  getFixedrecency(): FixedRecencyPostProcessorSpec | undefined;
  setFixedrecency(value?: FixedRecencyPostProcessorSpec): NodePostProcessor;
  hasFixedrecency(): boolean;
  clearFixedrecency(): NodePostProcessor;

  getEmbeddingrecency(): EmbeddingRecencyPostProcessorSpec | undefined;
  setEmbeddingrecency(value?: EmbeddingRecencyPostProcessorSpec): NodePostProcessor;
  hasEmbeddingrecency(): boolean;
  clearEmbeddingrecency(): NodePostProcessor;

  getTimeweightedrecency(): TimeWeightedRecencyPostProcessorSpec | undefined;
  setTimeweightedrecency(value?: TimeWeightedRecencyPostProcessorSpec): NodePostProcessor;
  hasTimeweightedrecency(): boolean;
  clearTimeweightedrecency(): NodePostProcessor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePostProcessor.AsObject;
  static toObject(includeInstance: boolean, msg: NodePostProcessor): NodePostProcessor.AsObject;
  static serializeBinaryToWriter(message: NodePostProcessor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePostProcessor;
  static deserializeBinaryFromReader(message: NodePostProcessor, reader: jspb.BinaryReader): NodePostProcessor;
}

export namespace NodePostProcessor {
  export type AsObject = {
    similarity?: SimilarityPostProcessorSpec.AsObject,
    keyword?: KeywordPostProcessorSpec.AsObject,
    reorder?: LongContextReorderSpec.AsObject,
    embeddingoptimizer?: SentenceEmbeddingOptimizerSpec.AsObject,
    llmrerank?: LLMRerankSpec.AsObject,
    coherererank?: CohereRerankSpec.AsObject,
    fixedrecency?: FixedRecencyPostProcessorSpec.AsObject,
    embeddingrecency?: EmbeddingRecencyPostProcessorSpec.AsObject,
    timeweightedrecency?: TimeWeightedRecencyPostProcessorSpec.AsObject,
  }
}

export class QueryEngineSpec extends jspb.Message {
  getName(): string;
  setName(value: string): QueryEngineSpec;
  hasName(): boolean;
  clearName(): QueryEngineSpec;

  getRetriever(): RetrieverQueryEngineSpec | undefined;
  setRetriever(value?: RetrieverQueryEngineSpec): QueryEngineSpec;
  hasRetriever(): boolean;
  clearRetriever(): QueryEngineSpec;

  getRouter(): RouterQueryEngineSpec | undefined;
  setRouter(value?: RouterQueryEngineSpec): QueryEngineSpec;
  hasRouter(): boolean;
  clearRouter(): QueryEngineSpec;

  getSubquestion(): SubQuestionQueryEngineSpec | undefined;
  setSubquestion(value?: SubQuestionQueryEngineSpec): QueryEngineSpec;
  hasSubquestion(): boolean;
  clearSubquestion(): QueryEngineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEngineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEngineSpec): QueryEngineSpec.AsObject;
  static serializeBinaryToWriter(message: QueryEngineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEngineSpec;
  static deserializeBinaryFromReader(message: QueryEngineSpec, reader: jspb.BinaryReader): QueryEngineSpec;
}

export namespace QueryEngineSpec {
  export type AsObject = {
    name?: string,
    retriever?: RetrieverQueryEngineSpec.AsObject,
    router?: RouterQueryEngineSpec.AsObject,
    subquestion?: SubQuestionQueryEngineSpec.AsObject,
  }
}

export class QueryEngineToolSpec extends jspb.Message {
  getQueryengine(): string;
  setQueryengine(value: string): QueryEngineToolSpec;
  hasQueryengine(): boolean;
  clearQueryengine(): QueryEngineToolSpec;

  getName(): string;
  setName(value: string): QueryEngineToolSpec;
  hasName(): boolean;
  clearName(): QueryEngineToolSpec;

  getDescription(): string;
  setDescription(value: string): QueryEngineToolSpec;
  hasDescription(): boolean;
  clearDescription(): QueryEngineToolSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEngineToolSpec.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEngineToolSpec): QueryEngineToolSpec.AsObject;
  static serializeBinaryToWriter(message: QueryEngineToolSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEngineToolSpec;
  static deserializeBinaryFromReader(message: QueryEngineToolSpec, reader: jspb.BinaryReader): QueryEngineToolSpec;
}

export namespace QueryEngineToolSpec {
  export type AsObject = {
    queryengine?: string,
    name?: string,
    description?: string,
  }
}

export class RepositoryFileReader extends jspb.Message {
  getExtension(): string;
  setExtension(value: string): RepositoryFileReader;
  hasExtension(): boolean;
  clearExtension(): RepositoryFileReader;

  getExtensionsList(): Array<string>;
  setExtensionsList(value: Array<string>): RepositoryFileReader;
  clearExtensionsList(): RepositoryFileReader;
  addExtensions(value: string, index?: number): RepositoryFileReader;

  getReader(): FileReaderSpec | undefined;
  setReader(value?: FileReaderSpec): RepositoryFileReader;
  hasReader(): boolean;
  clearReader(): RepositoryFileReader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryFileReader.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryFileReader): RepositoryFileReader.AsObject;
  static serializeBinaryToWriter(message: RepositoryFileReader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryFileReader;
  static deserializeBinaryFromReader(message: RepositoryFileReader, reader: jspb.BinaryReader): RepositoryFileReader;
}

export namespace RepositoryFileReader {
  export type AsObject = {
    extension?: string,
    extensionsList: Array<string>,
    reader?: FileReaderSpec.AsObject,
  }
}

export class RepositoryReaderSpec extends jspb.Message {
  getType(): string;
  setType(value: string): RepositoryReaderSpec;
  hasType(): boolean;
  clearType(): RepositoryReaderSpec;

  getConnectionname(): string;
  setConnectionname(value: string): RepositoryReaderSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): RepositoryReaderSpec;

  getExtensionsList(): Array<string>;
  setExtensionsList(value: Array<string>): RepositoryReaderSpec;
  clearExtensionsList(): RepositoryReaderSpec;
  addExtensions(value: string, index?: number): RepositoryReaderSpec;

  getReadersList(): Array<RepositoryFileReader>;
  setReadersList(value: Array<RepositoryFileReader>): RepositoryReaderSpec;
  clearReadersList(): RepositoryReaderSpec;
  addReaders(value?: RepositoryFileReader, index?: number): RepositoryFileReader;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): RepositoryReaderSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryReaderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryReaderSpec): RepositoryReaderSpec.AsObject;
  static serializeBinaryToWriter(message: RepositoryReaderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryReaderSpec;
  static deserializeBinaryFromReader(message: RepositoryReaderSpec, reader: jspb.BinaryReader): RepositoryReaderSpec;
}

export namespace RepositoryReaderSpec {
  export type AsObject = {
    type?: string,
    connectionname?: string,
    extensionsList: Array<string>,
    readersList: Array<RepositoryFileReader.AsObject>,
    optionsMap: Array<[string, string]>,
  }
}

export class ResponseSynthesizerSpec extends jspb.Message {
  getMode(): string;
  setMode(value: string): ResponseSynthesizerSpec;
  hasMode(): boolean;
  clearMode(): ResponseSynthesizerSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): ResponseSynthesizerSpec;
  hasModel(): boolean;
  clearModel(): ResponseSynthesizerSpec;

  getAnswerfiltering(): boolean;
  setAnswerfiltering(value: boolean): ResponseSynthesizerSpec;
  hasAnswerfiltering(): boolean;
  clearAnswerfiltering(): ResponseSynthesizerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseSynthesizerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseSynthesizerSpec): ResponseSynthesizerSpec.AsObject;
  static serializeBinaryToWriter(message: ResponseSynthesizerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseSynthesizerSpec;
  static deserializeBinaryFromReader(message: ResponseSynthesizerSpec, reader: jspb.BinaryReader): ResponseSynthesizerSpec;
}

export namespace ResponseSynthesizerSpec {
  export type AsObject = {
    mode?: string,
    model?: ModelSpec.AsObject,
    answerfiltering?: boolean,
  }
}

export class RetrieverQueryEngineSpec extends jspb.Message {
  getResponsesynthesizer(): ResponseSynthesizerSpec | undefined;
  setResponsesynthesizer(value?: ResponseSynthesizerSpec): RetrieverQueryEngineSpec;
  hasResponsesynthesizer(): boolean;
  clearResponsesynthesizer(): RetrieverQueryEngineSpec;

  getRetriever(): string;
  setRetriever(value: string): RetrieverQueryEngineSpec;
  hasRetriever(): boolean;
  clearRetriever(): RetrieverQueryEngineSpec;

  getNodepostprocessorsList(): Array<NodePostProcessor>;
  setNodepostprocessorsList(value: Array<NodePostProcessor>): RetrieverQueryEngineSpec;
  clearNodepostprocessorsList(): RetrieverQueryEngineSpec;
  addNodepostprocessors(value?: NodePostProcessor, index?: number): NodePostProcessor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieverQueryEngineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieverQueryEngineSpec): RetrieverQueryEngineSpec.AsObject;
  static serializeBinaryToWriter(message: RetrieverQueryEngineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieverQueryEngineSpec;
  static deserializeBinaryFromReader(message: RetrieverQueryEngineSpec, reader: jspb.BinaryReader): RetrieverQueryEngineSpec;
}

export namespace RetrieverQueryEngineSpec {
  export type AsObject = {
    responsesynthesizer?: ResponseSynthesizerSpec.AsObject,
    retriever?: string,
    nodepostprocessorsList: Array<NodePostProcessor.AsObject>,
  }
}

export class RetrieverSpec extends jspb.Message {
  getName(): string;
  setName(value: string): RetrieverSpec;
  hasName(): boolean;
  clearName(): RetrieverSpec;

  getVector(): VectorRetrieverSpec | undefined;
  setVector(value?: VectorRetrieverSpec): RetrieverSpec;
  hasVector(): boolean;
  clearVector(): RetrieverSpec;

  getDocumentsummary(): DocumentSummaryRetrieverSpec | undefined;
  setDocumentsummary(value?: DocumentSummaryRetrieverSpec): RetrieverSpec;
  hasDocumentsummary(): boolean;
  clearDocumentsummary(): RetrieverSpec;

  getRouter(): RouterRetrieverSpec | undefined;
  setRouter(value?: RouterRetrieverSpec): RetrieverSpec;
  hasRouter(): boolean;
  clearRouter(): RetrieverSpec;

  getFusion(): FusionRetrieverSpec | undefined;
  setFusion(value?: FusionRetrieverSpec): RetrieverSpec;
  hasFusion(): boolean;
  clearFusion(): RetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieverSpec): RetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: RetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieverSpec;
  static deserializeBinaryFromReader(message: RetrieverSpec, reader: jspb.BinaryReader): RetrieverSpec;
}

export namespace RetrieverSpec {
  export type AsObject = {
    name?: string,
    vector?: VectorRetrieverSpec.AsObject,
    documentsummary?: DocumentSummaryRetrieverSpec.AsObject,
    router?: RouterRetrieverSpec.AsObject,
    fusion?: FusionRetrieverSpec.AsObject,
  }
}

export class RetrieverToolSpec extends jspb.Message {
  getRetriever(): string;
  setRetriever(value: string): RetrieverToolSpec;
  hasRetriever(): boolean;
  clearRetriever(): RetrieverToolSpec;

  getName(): string;
  setName(value: string): RetrieverToolSpec;
  hasName(): boolean;
  clearName(): RetrieverToolSpec;

  getDescription(): string;
  setDescription(value: string): RetrieverToolSpec;
  hasDescription(): boolean;
  clearDescription(): RetrieverToolSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieverToolSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieverToolSpec): RetrieverToolSpec.AsObject;
  static serializeBinaryToWriter(message: RetrieverToolSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieverToolSpec;
  static deserializeBinaryFromReader(message: RetrieverToolSpec, reader: jspb.BinaryReader): RetrieverToolSpec;
}

export namespace RetrieverToolSpec {
  export type AsObject = {
    retriever?: string,
    name?: string,
    description?: string,
  }
}

export class RouterQueryEngineSpec extends jspb.Message {
  getToolsList(): Array<QueryEngineToolSpec>;
  setToolsList(value: Array<QueryEngineToolSpec>): RouterQueryEngineSpec;
  clearToolsList(): RouterQueryEngineSpec;
  addTools(value?: QueryEngineToolSpec, index?: number): QueryEngineToolSpec;

  getSelector(): SelectorSpec | undefined;
  setSelector(value?: SelectorSpec): RouterQueryEngineSpec;
  hasSelector(): boolean;
  clearSelector(): RouterQueryEngineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterQueryEngineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RouterQueryEngineSpec): RouterQueryEngineSpec.AsObject;
  static serializeBinaryToWriter(message: RouterQueryEngineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterQueryEngineSpec;
  static deserializeBinaryFromReader(message: RouterQueryEngineSpec, reader: jspb.BinaryReader): RouterQueryEngineSpec;
}

export namespace RouterQueryEngineSpec {
  export type AsObject = {
    toolsList: Array<QueryEngineToolSpec.AsObject>,
    selector?: SelectorSpec.AsObject,
  }
}

export class RouterRetrieverSpec extends jspb.Message {
  getToolsList(): Array<RetrieverToolSpec>;
  setToolsList(value: Array<RetrieverToolSpec>): RouterRetrieverSpec;
  clearToolsList(): RouterRetrieverSpec;
  addTools(value?: RetrieverToolSpec, index?: number): RetrieverToolSpec;

  getSelector(): SelectorSpec | undefined;
  setSelector(value?: SelectorSpec): RouterRetrieverSpec;
  hasSelector(): boolean;
  clearSelector(): RouterRetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouterRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RouterRetrieverSpec): RouterRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: RouterRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouterRetrieverSpec;
  static deserializeBinaryFromReader(message: RouterRetrieverSpec, reader: jspb.BinaryReader): RouterRetrieverSpec;
}

export namespace RouterRetrieverSpec {
  export type AsObject = {
    toolsList: Array<RetrieverToolSpec.AsObject>,
    selector?: SelectorSpec.AsObject,
  }
}

export class SelectorSpec extends jspb.Message {
  getMode(): string;
  setMode(value: string): SelectorSpec;
  hasMode(): boolean;
  clearMode(): SelectorSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): SelectorSpec;
  hasModel(): boolean;
  clearModel(): SelectorSpec;

  getMulti(): boolean;
  setMulti(value: boolean): SelectorSpec;
  hasMulti(): boolean;
  clearMulti(): SelectorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SelectorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SelectorSpec): SelectorSpec.AsObject;
  static serializeBinaryToWriter(message: SelectorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SelectorSpec;
  static deserializeBinaryFromReader(message: SelectorSpec, reader: jspb.BinaryReader): SelectorSpec;
}

export namespace SelectorSpec {
  export type AsObject = {
    mode?: string,
    model?: ModelSpec.AsObject,
    multi?: boolean,
  }
}

export class SentenceEmbeddingOptimizerSpec extends jspb.Message {
  getEmbeddingmodel(): ModelSpec | undefined;
  setEmbeddingmodel(value?: ModelSpec): SentenceEmbeddingOptimizerSpec;
  hasEmbeddingmodel(): boolean;
  clearEmbeddingmodel(): SentenceEmbeddingOptimizerSpec;

  getSimilaritycutoff(): number;
  setSimilaritycutoff(value: number): SentenceEmbeddingOptimizerSpec;
  hasSimilaritycutoff(): boolean;
  clearSimilaritycutoff(): SentenceEmbeddingOptimizerSpec;

  getThresholdcutoff(): number;
  setThresholdcutoff(value: number): SentenceEmbeddingOptimizerSpec;
  hasThresholdcutoff(): boolean;
  clearThresholdcutoff(): SentenceEmbeddingOptimizerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentenceEmbeddingOptimizerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SentenceEmbeddingOptimizerSpec): SentenceEmbeddingOptimizerSpec.AsObject;
  static serializeBinaryToWriter(message: SentenceEmbeddingOptimizerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentenceEmbeddingOptimizerSpec;
  static deserializeBinaryFromReader(message: SentenceEmbeddingOptimizerSpec, reader: jspb.BinaryReader): SentenceEmbeddingOptimizerSpec;
}

export namespace SentenceEmbeddingOptimizerSpec {
  export type AsObject = {
    embeddingmodel?: ModelSpec.AsObject,
    similaritycutoff?: number,
    thresholdcutoff?: number,
  }
}

export class SentenceSplitterSpec extends jspb.Message {
  getChunksize(): number;
  setChunksize(value: number): SentenceSplitterSpec;
  hasChunksize(): boolean;
  clearChunksize(): SentenceSplitterSpec;

  getChunkoverlap(): number;
  setChunkoverlap(value: number): SentenceSplitterSpec;
  hasChunkoverlap(): boolean;
  clearChunkoverlap(): SentenceSplitterSpec;

  getWordseparator(): string;
  setWordseparator(value: string): SentenceSplitterSpec;
  hasWordseparator(): boolean;
  clearWordseparator(): SentenceSplitterSpec;

  getParagraphseparator(): string;
  setParagraphseparator(value: string): SentenceSplitterSpec;
  hasParagraphseparator(): boolean;
  clearParagraphseparator(): SentenceSplitterSpec;

  getSplitter(): SentenceTokenizerSpec | undefined;
  setSplitter(value?: SentenceTokenizerSpec): SentenceSplitterSpec;
  hasSplitter(): boolean;
  clearSplitter(): SentenceSplitterSpec;

  getHierarchical(): HierarchicalSplitterSpec | undefined;
  setHierarchical(value?: HierarchicalSplitterSpec): SentenceSplitterSpec;
  hasHierarchical(): boolean;
  clearHierarchical(): SentenceSplitterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentenceSplitterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SentenceSplitterSpec): SentenceSplitterSpec.AsObject;
  static serializeBinaryToWriter(message: SentenceSplitterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentenceSplitterSpec;
  static deserializeBinaryFromReader(message: SentenceSplitterSpec, reader: jspb.BinaryReader): SentenceSplitterSpec;
}

export namespace SentenceSplitterSpec {
  export type AsObject = {
    chunksize?: number,
    chunkoverlap?: number,
    wordseparator?: string,
    paragraphseparator?: string,
    splitter?: SentenceTokenizerSpec.AsObject,
    hierarchical?: HierarchicalSplitterSpec.AsObject,
  }
}

export class SentenceTokenizerSpec extends jspb.Message {
  getType(): string;
  setType(value: string): SentenceTokenizerSpec;
  hasType(): boolean;
  clearType(): SentenceTokenizerSpec;

  getSeparator(): string;
  setSeparator(value: string): SentenceTokenizerSpec;
  hasSeparator(): boolean;
  clearSeparator(): SentenceTokenizerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentenceTokenizerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SentenceTokenizerSpec): SentenceTokenizerSpec.AsObject;
  static serializeBinaryToWriter(message: SentenceTokenizerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentenceTokenizerSpec;
  static deserializeBinaryFromReader(message: SentenceTokenizerSpec, reader: jspb.BinaryReader): SentenceTokenizerSpec;
}

export namespace SentenceTokenizerSpec {
  export type AsObject = {
    type?: string,
    separator?: string,
  }
}

export class SentenceWindowNodeParserSpec extends jspb.Message {
  getSplitter(): SentenceTokenizerSpec | undefined;
  setSplitter(value?: SentenceTokenizerSpec): SentenceWindowNodeParserSpec;
  hasSplitter(): boolean;
  clearSplitter(): SentenceWindowNodeParserSpec;

  getWindowsize(): number;
  setWindowsize(value: number): SentenceWindowNodeParserSpec;
  hasWindowsize(): boolean;
  clearWindowsize(): SentenceWindowNodeParserSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentenceWindowNodeParserSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SentenceWindowNodeParserSpec): SentenceWindowNodeParserSpec.AsObject;
  static serializeBinaryToWriter(message: SentenceWindowNodeParserSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentenceWindowNodeParserSpec;
  static deserializeBinaryFromReader(message: SentenceWindowNodeParserSpec, reader: jspb.BinaryReader): SentenceWindowNodeParserSpec;
}

export namespace SentenceWindowNodeParserSpec {
  export type AsObject = {
    splitter?: SentenceTokenizerSpec.AsObject,
    windowsize?: number,
  }
}

export class SimilarityPostProcessorSpec extends jspb.Message {
  getCutoff(): number;
  setCutoff(value: number): SimilarityPostProcessorSpec;
  hasCutoff(): boolean;
  clearCutoff(): SimilarityPostProcessorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimilarityPostProcessorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SimilarityPostProcessorSpec): SimilarityPostProcessorSpec.AsObject;
  static serializeBinaryToWriter(message: SimilarityPostProcessorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimilarityPostProcessorSpec;
  static deserializeBinaryFromReader(message: SimilarityPostProcessorSpec, reader: jspb.BinaryReader): SimilarityPostProcessorSpec;
}

export namespace SimilarityPostProcessorSpec {
  export type AsObject = {
    cutoff?: number,
  }
}

export class SubQuestionQueryEngineSpec extends jspb.Message {
  getToolsList(): Array<QueryEngineToolSpec>;
  setToolsList(value: Array<QueryEngineToolSpec>): SubQuestionQueryEngineSpec;
  clearToolsList(): SubQuestionQueryEngineSpec;
  addTools(value?: QueryEngineToolSpec, index?: number): QueryEngineToolSpec;

  getResponsesynthesizer(): ResponseSynthesizerSpec | undefined;
  setResponsesynthesizer(value?: ResponseSynthesizerSpec): SubQuestionQueryEngineSpec;
  hasResponsesynthesizer(): boolean;
  clearResponsesynthesizer(): SubQuestionQueryEngineSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): SubQuestionQueryEngineSpec;
  hasModel(): boolean;
  clearModel(): SubQuestionQueryEngineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubQuestionQueryEngineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SubQuestionQueryEngineSpec): SubQuestionQueryEngineSpec.AsObject;
  static serializeBinaryToWriter(message: SubQuestionQueryEngineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubQuestionQueryEngineSpec;
  static deserializeBinaryFromReader(message: SubQuestionQueryEngineSpec, reader: jspb.BinaryReader): SubQuestionQueryEngineSpec;
}

export namespace SubQuestionQueryEngineSpec {
  export type AsObject = {
    toolsList: Array<QueryEngineToolSpec.AsObject>,
    responsesynthesizer?: ResponseSynthesizerSpec.AsObject,
    model?: ModelSpec.AsObject,
  }
}

export class TextSplitterSpec extends jspb.Message {
  getType(): string;
  setType(value: string): TextSplitterSpec;
  hasType(): boolean;
  clearType(): TextSplitterSpec;

  getSentence(): SentenceSplitterSpec | undefined;
  setSentence(value?: SentenceSplitterSpec): TextSplitterSpec;
  hasSentence(): boolean;
  clearSentence(): TextSplitterSpec;

  getToken(): TokenSplitterSpec | undefined;
  setToken(value?: TokenSplitterSpec): TextSplitterSpec;
  hasToken(): boolean;
  clearToken(): TextSplitterSpec;

  getCode(): CodeSplitterSpec | undefined;
  setCode(value?: CodeSplitterSpec): TextSplitterSpec;
  hasCode(): boolean;
  clearCode(): TextSplitterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSplitterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TextSplitterSpec): TextSplitterSpec.AsObject;
  static serializeBinaryToWriter(message: TextSplitterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSplitterSpec;
  static deserializeBinaryFromReader(message: TextSplitterSpec, reader: jspb.BinaryReader): TextSplitterSpec;
}

export namespace TextSplitterSpec {
  export type AsObject = {
    type?: string,
    sentence?: SentenceSplitterSpec.AsObject,
    token?: TokenSplitterSpec.AsObject,
    code?: CodeSplitterSpec.AsObject,
  }
}

export class TimeWeightedRecencyPostProcessorSpec extends jspb.Message {
  getTopn(): number;
  setTopn(value: number): TimeWeightedRecencyPostProcessorSpec;
  hasTopn(): boolean;
  clearTopn(): TimeWeightedRecencyPostProcessorSpec;

  getTimedecay(): number;
  setTimedecay(value: number): TimeWeightedRecencyPostProcessorSpec;
  hasTimedecay(): boolean;
  clearTimedecay(): TimeWeightedRecencyPostProcessorSpec;

  getLastaccess(): boolean;
  setLastaccess(value: boolean): TimeWeightedRecencyPostProcessorSpec;
  hasLastaccess(): boolean;
  clearLastaccess(): TimeWeightedRecencyPostProcessorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeWeightedRecencyPostProcessorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TimeWeightedRecencyPostProcessorSpec): TimeWeightedRecencyPostProcessorSpec.AsObject;
  static serializeBinaryToWriter(message: TimeWeightedRecencyPostProcessorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeWeightedRecencyPostProcessorSpec;
  static deserializeBinaryFromReader(message: TimeWeightedRecencyPostProcessorSpec, reader: jspb.BinaryReader): TimeWeightedRecencyPostProcessorSpec;
}

export namespace TimeWeightedRecencyPostProcessorSpec {
  export type AsObject = {
    topn?: number,
    timedecay?: number,
    lastaccess?: boolean,
  }
}

export class TokenSplitterSpec extends jspb.Message {
  getChunksize(): number;
  setChunksize(value: number): TokenSplitterSpec;
  hasChunksize(): boolean;
  clearChunksize(): TokenSplitterSpec;

  getChunkoverlap(): number;
  setChunkoverlap(value: number): TokenSplitterSpec;
  hasChunkoverlap(): boolean;
  clearChunkoverlap(): TokenSplitterSpec;

  getWordseparator(): string;
  setWordseparator(value: string): TokenSplitterSpec;
  hasWordseparator(): boolean;
  clearWordseparator(): TokenSplitterSpec;

  getHierarchical(): HierarchicalSplitterSpec | undefined;
  setHierarchical(value?: HierarchicalSplitterSpec): TokenSplitterSpec;
  hasHierarchical(): boolean;
  clearHierarchical(): TokenSplitterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenSplitterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TokenSplitterSpec): TokenSplitterSpec.AsObject;
  static serializeBinaryToWriter(message: TokenSplitterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenSplitterSpec;
  static deserializeBinaryFromReader(message: TokenSplitterSpec, reader: jspb.BinaryReader): TokenSplitterSpec;
}

export namespace TokenSplitterSpec {
  export type AsObject = {
    chunksize?: number,
    chunkoverlap?: number,
    wordseparator?: string,
    hierarchical?: HierarchicalSplitterSpec.AsObject,
  }
}

export class TreeIndexSpec extends jspb.Message {
  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): TreeIndexSpec;
  hasModel(): boolean;
  clearModel(): TreeIndexSpec;

  getChildren(): number;
  setChildren(value: number): TreeIndexSpec;
  hasChildren(): boolean;
  clearChildren(): TreeIndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TreeIndexSpec): TreeIndexSpec.AsObject;
  static serializeBinaryToWriter(message: TreeIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeIndexSpec;
  static deserializeBinaryFromReader(message: TreeIndexSpec, reader: jspb.BinaryReader): TreeIndexSpec;
}

export namespace TreeIndexSpec {
  export type AsObject = {
    model?: ModelSpec.AsObject,
    children?: number,
  }
}

export class VectorIndexSpec extends jspb.Message {
  getDatabaseconnectionname(): string;
  setDatabaseconnectionname(value: string): VectorIndexSpec;
  hasDatabaseconnectionname(): boolean;
  clearDatabaseconnectionname(): VectorIndexSpec;

  getEmbeddingmodel(): ModelSpec | undefined;
  setEmbeddingmodel(value?: ModelSpec): VectorIndexSpec;
  hasEmbeddingmodel(): boolean;
  clearEmbeddingmodel(): VectorIndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VectorIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VectorIndexSpec): VectorIndexSpec.AsObject;
  static serializeBinaryToWriter(message: VectorIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VectorIndexSpec;
  static deserializeBinaryFromReader(message: VectorIndexSpec, reader: jspb.BinaryReader): VectorIndexSpec;
}

export namespace VectorIndexSpec {
  export type AsObject = {
    databaseconnectionname?: string,
    embeddingmodel?: ModelSpec.AsObject,
  }
}

export class VectorRetrieverSpec extends jspb.Message {
  getIndex(): IndexReference | undefined;
  setIndex(value?: IndexReference): VectorRetrieverSpec;
  hasIndex(): boolean;
  clearIndex(): VectorRetrieverSpec;

  getEmbeddingmodel(): ModelSpec | undefined;
  setEmbeddingmodel(value?: ModelSpec): VectorRetrieverSpec;
  hasEmbeddingmodel(): boolean;
  clearEmbeddingmodel(): VectorRetrieverSpec;

  getTopk(): number;
  setTopk(value: number): VectorRetrieverSpec;
  hasTopk(): boolean;
  clearTopk(): VectorRetrieverSpec;

  getMatchmetadataMap(): jspb.Map<string, string>;
  clearMatchmetadataMap(): VectorRetrieverSpec;

  getAutomerging(): boolean;
  setAutomerging(value: boolean): VectorRetrieverSpec;
  hasAutomerging(): boolean;
  clearAutomerging(): VectorRetrieverSpec;

  getAuto(): AutoVectorRetrieverSpec | undefined;
  setAuto(value?: AutoVectorRetrieverSpec): VectorRetrieverSpec;
  hasAuto(): boolean;
  clearAuto(): VectorRetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VectorRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VectorRetrieverSpec): VectorRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: VectorRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VectorRetrieverSpec;
  static deserializeBinaryFromReader(message: VectorRetrieverSpec, reader: jspb.BinaryReader): VectorRetrieverSpec;
}

export namespace VectorRetrieverSpec {
  export type AsObject = {
    index?: IndexReference.AsObject,
    embeddingmodel?: ModelSpec.AsObject,
    topk?: number,
    matchmetadataMap: Array<[string, string]>,
    automerging?: boolean,
    auto?: AutoVectorRetrieverSpec.AsObject,
  }
}

export class WebReaderSpec extends jspb.Message {
  getType(): string;
  setType(value: string): WebReaderSpec;
  hasType(): boolean;
  clearType(): WebReaderSpec;

  getConnectionname(): string;
  setConnectionname(value: string): WebReaderSpec;
  hasConnectionname(): boolean;
  clearConnectionname(): WebReaderSpec;

  getOptionsMap(): jspb.Map<string, string>;
  clearOptionsMap(): WebReaderSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebReaderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WebReaderSpec): WebReaderSpec.AsObject;
  static serializeBinaryToWriter(message: WebReaderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebReaderSpec;
  static deserializeBinaryFromReader(message: WebReaderSpec, reader: jspb.BinaryReader): WebReaderSpec;
}

export namespace WebReaderSpec {
  export type AsObject = {
    type?: string,
    connectionname?: string,
    optionsMap: Array<[string, string]>,
  }
}

