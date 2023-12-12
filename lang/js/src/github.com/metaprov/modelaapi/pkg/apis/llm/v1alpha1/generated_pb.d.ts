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

export class ConcreteNodeParserSpec extends jspb.Message {
  getIncludeorderrelationship(): boolean;
  setIncludeorderrelationship(value: boolean): ConcreteNodeParserSpec;
  hasIncludeorderrelationship(): boolean;
  clearIncludeorderrelationship(): ConcreteNodeParserSpec;

  getIncludemetadata(): boolean;
  setIncludemetadata(value: boolean): ConcreteNodeParserSpec;
  hasIncludemetadata(): boolean;
  clearIncludemetadata(): ConcreteNodeParserSpec;

  getType(): string;
  setType(value: string): ConcreteNodeParserSpec;
  hasType(): boolean;
  clearType(): ConcreteNodeParserSpec;

  getText(): TextSplitterSpec | undefined;
  setText(value?: TextSplitterSpec): ConcreteNodeParserSpec;
  hasText(): boolean;
  clearText(): ConcreteNodeParserSpec;

  getSentence(): SentenceWindowNodeParserSpec | undefined;
  setSentence(value?: SentenceWindowNodeParserSpec): ConcreteNodeParserSpec;
  hasSentence(): boolean;
  clearSentence(): ConcreteNodeParserSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConcreteNodeParserSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ConcreteNodeParserSpec): ConcreteNodeParserSpec.AsObject;
  static serializeBinaryToWriter(message: ConcreteNodeParserSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConcreteNodeParserSpec;
  static deserializeBinaryFromReader(message: ConcreteNodeParserSpec, reader: jspb.BinaryReader): ConcreteNodeParserSpec;
}

export namespace ConcreteNodeParserSpec {
  export type AsObject = {
    includeorderrelationship?: boolean,
    includemetadata?: boolean,
    type?: string,
    text?: TextSplitterSpec.AsObject,
    sentence?: SentenceWindowNodeParserSpec.AsObject,
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
    nodeparser?: NodeParserSpec.AsObject,
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

  getParser(): ConcreteNodeParserSpec | undefined;
  setParser(value?: ConcreteNodeParserSpec): FilteredNodeParser;
  hasParser(): boolean;
  clearParser(): FilteredNodeParser;

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
    parser?: ConcreteNodeParserSpec.AsObject,
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

export class MixedNodeParserSpec extends jspb.Message {
  getParsersList(): Array<FilteredNodeParser>;
  setParsersList(value: Array<FilteredNodeParser>): MixedNodeParserSpec;
  clearParsersList(): MixedNodeParserSpec;
  addParsers(value?: FilteredNodeParser, index?: number): FilteredNodeParser;

  getFallback(): ConcreteNodeParserSpec | undefined;
  setFallback(value?: ConcreteNodeParserSpec): MixedNodeParserSpec;
  hasFallback(): boolean;
  clearFallback(): MixedNodeParserSpec;

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
    fallback?: ConcreteNodeParserSpec.AsObject,
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
  getConcretenodeparserspec(): ConcreteNodeParserSpec | undefined;
  setConcretenodeparserspec(value?: ConcreteNodeParserSpec): NodeParserSpec;
  hasConcretenodeparserspec(): boolean;
  clearConcretenodeparserspec(): NodeParserSpec;

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
    concretenodeparserspec?: ConcreteNodeParserSpec.AsObject,
    mixed?: MixedNodeParserSpec.AsObject,
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

