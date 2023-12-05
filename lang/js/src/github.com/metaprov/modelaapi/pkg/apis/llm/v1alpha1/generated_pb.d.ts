import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


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

  getNodeparser(): NodeParserSpec | undefined;
  setNodeparser(value?: NodeParserSpec): DocumentSpec;
  hasNodeparser(): boolean;
  clearNodeparser(): DocumentSpec;

  getEmbeddingmodel(): ModelSpec | undefined;
  setEmbeddingmodel(value?: ModelSpec): DocumentSpec;
  hasEmbeddingmodel(): boolean;
  clearEmbeddingmodel(): DocumentSpec;

  getFile(): FileReaderSpec | undefined;
  setFile(value?: FileReaderSpec): DocumentSpec;
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
    nodeparser?: NodeParserSpec.AsObject,
    embeddingmodel?: ModelSpec.AsObject,
    file?: FileReaderSpec.AsObject,
    database?: DatabaseReaderSpec.AsObject,
    web?: WebReaderSpec.AsObject,
  }
}

export class DocumentStatus extends jspb.Message {
  getName(): string;
  setName(value: string): DocumentStatus;
  hasName(): boolean;
  clearName(): DocumentStatus;

  getUid(): string;
  setUid(value: string): DocumentStatus;
  hasUid(): boolean;
  clearUid(): DocumentStatus;

  getNodes(): number;
  setNodes(value: number): DocumentStatus;
  hasNodes(): boolean;
  clearNodes(): DocumentStatus;

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
    uid?: string,
    nodes?: number,
    lastrefreshat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class FileReaderSpec extends jspb.Message {
  getType(): string;
  setType(value: string): FileReaderSpec;
  hasType(): boolean;
  clearType(): FileReaderSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): FileReaderSpec;
  hasLocation(): boolean;
  clearLocation(): FileReaderSpec;

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
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    optionsMap: Array<[string, string]>,
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

  getVectorstoreconnectionname(): string;
  setVectorstoreconnectionname(value: string): KnowledgeBaseSpec;
  hasVectorstoreconnectionname(): boolean;
  clearVectorstoreconnectionname(): KnowledgeBaseSpec;

  getDocumentstoreconnectionname(): string;
  setDocumentstoreconnectionname(value: string): KnowledgeBaseSpec;
  hasDocumentstoreconnectionname(): boolean;
  clearDocumentstoreconnectionname(): KnowledgeBaseSpec;

  getEmbeddingmodel(): ModelSpec | undefined;
  setEmbeddingmodel(value?: ModelSpec): KnowledgeBaseSpec;
  hasEmbeddingmodel(): boolean;
  clearEmbeddingmodel(): KnowledgeBaseSpec;

  getDocumentsList(): Array<DocumentSpec>;
  setDocumentsList(value: Array<DocumentSpec>): KnowledgeBaseSpec;
  clearDocumentsList(): KnowledgeBaseSpec;
  addDocuments(value?: DocumentSpec, index?: number): DocumentSpec;

  getNodeparser(): NodeParserSpec | undefined;
  setNodeparser(value?: NodeParserSpec): KnowledgeBaseSpec;
  hasNodeparser(): boolean;
  clearNodeparser(): KnowledgeBaseSpec;

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
    vectorstoreconnectionname?: string,
    documentstoreconnectionname?: string,
    embeddingmodel?: ModelSpec.AsObject,
    documentsList: Array<DocumentSpec.AsObject>,
    nodeparser?: NodeParserSpec.AsObject,
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
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
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

export class NodeParserSpec extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeParserSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NodeParserSpec): NodeParserSpec.AsObject;
  static serializeBinaryToWriter(message: NodeParserSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeParserSpec;
  static deserializeBinaryFromReader(message: NodeParserSpec, reader: jspb.BinaryReader): NodeParserSpec;
}

export namespace NodeParserSpec {
  export type AsObject = {
    includeorderrelationship?: boolean,
    includemetadata?: boolean,
    type?: string,
    text?: TextSplitterSpec.AsObject,
    sentence?: SentenceWindowNodeParserSpec.AsObject,
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

