import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class APIKeyGroup extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): APIKeyGroup;
  hasMetadata(): boolean;
  clearMetadata(): APIKeyGroup;

  getSpec(): APIKeyGroupSpec | undefined;
  setSpec(value?: APIKeyGroupSpec): APIKeyGroup;
  hasSpec(): boolean;
  clearSpec(): APIKeyGroup;

  getStatus(): APIKeyGroupStatus | undefined;
  setStatus(value?: APIKeyGroupStatus): APIKeyGroup;
  hasStatus(): boolean;
  clearStatus(): APIKeyGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeyGroup.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeyGroup): APIKeyGroup.AsObject;
  static serializeBinaryToWriter(message: APIKeyGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeyGroup;
  static deserializeBinaryFromReader(message: APIKeyGroup, reader: jspb.BinaryReader): APIKeyGroup;
}

export namespace APIKeyGroup {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: APIKeyGroupSpec.AsObject,
    status?: APIKeyGroupStatus.AsObject,
  }
}

export class APIKeyGroupList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): APIKeyGroupList;
  hasMetadata(): boolean;
  clearMetadata(): APIKeyGroupList;

  getItemsList(): Array<APIKeyGroup>;
  setItemsList(value: Array<APIKeyGroup>): APIKeyGroupList;
  clearItemsList(): APIKeyGroupList;
  addItems(value?: APIKeyGroup, index?: number): APIKeyGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeyGroupList.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeyGroupList): APIKeyGroupList.AsObject;
  static serializeBinaryToWriter(message: APIKeyGroupList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeyGroupList;
  static deserializeBinaryFromReader(message: APIKeyGroupList, reader: jspb.BinaryReader): APIKeyGroupList;
}

export namespace APIKeyGroupList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<APIKeyGroup.AsObject>,
  }
}

export class APIKeyGroupSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): APIKeyGroupSpec;
  hasOwner(): boolean;
  clearOwner(): APIKeyGroupSpec;

  getDescription(): string;
  setDescription(value: string): APIKeyGroupSpec;
  hasDescription(): boolean;
  clearDescription(): APIKeyGroupSpec;

  getAllowedservernamesList(): Array<string>;
  setAllowedservernamesList(value: Array<string>): APIKeyGroupSpec;
  clearAllowedservernamesList(): APIKeyGroupSpec;
  addAllowedservernames(value: string, index?: number): APIKeyGroupSpec;

  getAllowedendpointnamesList(): Array<string>;
  setAllowedendpointnamesList(value: Array<string>): APIKeyGroupSpec;
  clearAllowedendpointnamesList(): APIKeyGroupSpec;
  addAllowedendpointnames(value: string, index?: number): APIKeyGroupSpec;

  getApikeysList(): Array<APIKeySpec>;
  setApikeysList(value: Array<APIKeySpec>): APIKeyGroupSpec;
  clearApikeysList(): APIKeyGroupSpec;
  addApikeys(value?: APIKeySpec, index?: number): APIKeySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeyGroupSpec.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeyGroupSpec): APIKeyGroupSpec.AsObject;
  static serializeBinaryToWriter(message: APIKeyGroupSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeyGroupSpec;
  static deserializeBinaryFromReader(message: APIKeyGroupSpec, reader: jspb.BinaryReader): APIKeyGroupSpec;
}

export namespace APIKeyGroupSpec {
  export type AsObject = {
    owner?: string,
    description?: string,
    allowedservernamesList: Array<string>,
    allowedendpointnamesList: Array<string>,
    apikeysList: Array<APIKeySpec.AsObject>,
  }
}

export class APIKeyGroupStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): APIKeyGroupStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): APIKeyGroupStatus;

  getApikeysList(): Array<APIKeyStatus>;
  setApikeysList(value: Array<APIKeyStatus>): APIKeyGroupStatus;
  clearApikeysList(): APIKeyGroupStatus;
  addApikeys(value?: APIKeyStatus, index?: number): APIKeyStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): APIKeyGroupStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): APIKeyGroupStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): APIKeyGroupStatus;
  clearConditionsList(): APIKeyGroupStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeyGroupStatus.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeyGroupStatus): APIKeyGroupStatus.AsObject;
  static serializeBinaryToWriter(message: APIKeyGroupStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeyGroupStatus;
  static deserializeBinaryFromReader(message: APIKeyGroupStatus, reader: jspb.BinaryReader): APIKeyGroupStatus;
}

export namespace APIKeyGroupStatus {
  export type AsObject = {
    observedgeneration?: number,
    apikeysList: Array<APIKeyStatus.AsObject>,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class APIKeyMetrics extends jspb.Message {
  getTotaltokens(): number;
  setTotaltokens(value: number): APIKeyMetrics;
  hasTotaltokens(): boolean;
  clearTotaltokens(): APIKeyMetrics;

  getTotalrequests(): number;
  setTotalrequests(value: number): APIKeyMetrics;
  hasTotalrequests(): boolean;
  clearTotalrequests(): APIKeyMetrics;

  getTotalcost(): number;
  setTotalcost(value: number): APIKeyMetrics;
  hasTotalcost(): boolean;
  clearTotalcost(): APIKeyMetrics;

  getAveragedailytokens(): number;
  setAveragedailytokens(value: number): APIKeyMetrics;
  hasAveragedailytokens(): boolean;
  clearAveragedailytokens(): APIKeyMetrics;

  getAveragedailyrequests(): number;
  setAveragedailyrequests(value: number): APIKeyMetrics;
  hasAveragedailyrequests(): boolean;
  clearAveragedailyrequests(): APIKeyMetrics;

  getAveragedailycost(): number;
  setAveragedailycost(value: number): APIKeyMetrics;
  hasAveragedailycost(): boolean;
  clearAveragedailycost(): APIKeyMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeyMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeyMetrics): APIKeyMetrics.AsObject;
  static serializeBinaryToWriter(message: APIKeyMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeyMetrics;
  static deserializeBinaryFromReader(message: APIKeyMetrics, reader: jspb.BinaryReader): APIKeyMetrics;
}

export namespace APIKeyMetrics {
  export type AsObject = {
    totaltokens?: number,
    totalrequests?: number,
    totalcost?: number,
    averagedailytokens?: number,
    averagedailyrequests?: number,
    averagedailycost?: number,
  }
}

export class APIKeyQuota extends jspb.Message {
  getTokens(): number;
  setTokens(value: number): APIKeyQuota;
  hasTokens(): boolean;
  clearTokens(): APIKeyQuota;

  getRequests(): number;
  setRequests(value: number): APIKeyQuota;
  hasRequests(): boolean;
  clearRequests(): APIKeyQuota;

  getCost(): number;
  setCost(value: number): APIKeyQuota;
  hasCost(): boolean;
  clearCost(): APIKeyQuota;

  getResetschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setResetschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): APIKeyQuota;
  hasResetschedule(): boolean;
  clearResetschedule(): APIKeyQuota;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeyQuota.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeyQuota): APIKeyQuota.AsObject;
  static serializeBinaryToWriter(message: APIKeyQuota, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeyQuota;
  static deserializeBinaryFromReader(message: APIKeyQuota, reader: jspb.BinaryReader): APIKeyQuota;
}

export namespace APIKeyQuota {
  export type AsObject = {
    tokens?: number,
    requests?: number,
    cost?: number,
    resetschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
  }
}

export class APIKeySpec extends jspb.Message {
  getName(): string;
  setName(value: string): APIKeySpec;
  hasName(): boolean;
  clearName(): APIKeySpec;

  getAllowedservernamesList(): Array<string>;
  setAllowedservernamesList(value: Array<string>): APIKeySpec;
  clearAllowedservernamesList(): APIKeySpec;
  addAllowedservernames(value: string, index?: number): APIKeySpec;

  getAllowedendpointnamesList(): Array<string>;
  setAllowedendpointnamesList(value: Array<string>): APIKeySpec;
  clearAllowedendpointnamesList(): APIKeySpec;
  addAllowedendpointnames(value: string, index?: number): APIKeySpec;

  getQuota(): APIKeyQuota | undefined;
  setQuota(value?: APIKeyQuota): APIKeySpec;
  hasQuota(): boolean;
  clearQuota(): APIKeySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeySpec.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeySpec): APIKeySpec.AsObject;
  static serializeBinaryToWriter(message: APIKeySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeySpec;
  static deserializeBinaryFromReader(message: APIKeySpec, reader: jspb.BinaryReader): APIKeySpec;
}

export namespace APIKeySpec {
  export type AsObject = {
    name?: string,
    allowedservernamesList: Array<string>,
    allowedendpointnamesList: Array<string>,
    quota?: APIKeyQuota.AsObject,
  }
}

export class APIKeyStatus extends jspb.Message {
  getName(): string;
  setName(value: string): APIKeyStatus;
  hasName(): boolean;
  clearName(): APIKeyStatus;

  getCreationdate(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCreationdate(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): APIKeyStatus;
  hasCreationdate(): boolean;
  clearCreationdate(): APIKeyStatus;

  getLastuseddate(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastuseddate(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): APIKeyStatus;
  hasLastuseddate(): boolean;
  clearLastuseddate(): APIKeyStatus;

  getQuotaexceededdate(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setQuotaexceededdate(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): APIKeyStatus;
  hasQuotaexceededdate(): boolean;
  clearQuotaexceededdate(): APIKeyStatus;

  getQuotarefresheddate(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setQuotarefresheddate(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): APIKeyStatus;
  hasQuotarefresheddate(): boolean;
  clearQuotarefresheddate(): APIKeyStatus;

  getKeygenerated(): boolean;
  setKeygenerated(value: boolean): APIKeyStatus;
  hasKeygenerated(): boolean;
  clearKeygenerated(): APIKeyStatus;

  getMetrics(): APIKeyMetrics | undefined;
  setMetrics(value?: APIKeyMetrics): APIKeyStatus;
  hasMetrics(): boolean;
  clearMetrics(): APIKeyStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKeyStatus.AsObject;
  static toObject(includeInstance: boolean, msg: APIKeyStatus): APIKeyStatus.AsObject;
  static serializeBinaryToWriter(message: APIKeyStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKeyStatus;
  static deserializeBinaryFromReader(message: APIKeyStatus, reader: jspb.BinaryReader): APIKeyStatus;
}

export namespace APIKeyStatus {
  export type AsObject = {
    name?: string,
    creationdate?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastuseddate?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    quotaexceededdate?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    quotarefresheddate?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    keygenerated?: boolean,
    metrics?: APIKeyMetrics.AsObject,
  }
}

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

export class BooleanSpec extends jspb.Message {
  getExtractionmode(): string;
  setExtractionmode(value: string): BooleanSpec;
  hasExtractionmode(): boolean;
  clearExtractionmode(): BooleanSpec;

  getDefault(): boolean;
  setDefault(value: boolean): BooleanSpec;
  hasDefault(): boolean;
  clearDefault(): BooleanSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BooleanSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BooleanSpec): BooleanSpec.AsObject;
  static serializeBinaryToWriter(message: BooleanSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BooleanSpec;
  static deserializeBinaryFromReader(message: BooleanSpec, reader: jspb.BinaryReader): BooleanSpec;
}

export namespace BooleanSpec {
  export type AsObject = {
    extractionmode?: string,
    pb_default?: boolean,
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

export class Column extends jspb.Message {
  getName(): string;
  setName(value: string): Column;
  hasName(): boolean;
  clearName(): Column;

  getType(): string;
  setType(value: string): Column;
  hasType(): boolean;
  clearType(): Column;

  getInteger(): IntegerSpec | undefined;
  setInteger(value?: IntegerSpec): Column;
  hasInteger(): boolean;
  clearInteger(): Column;

  getFloat(): FloatSpec | undefined;
  setFloat(value?: FloatSpec): Column;
  hasFloat(): boolean;
  clearFloat(): Column;

  getText(): TextSpec | undefined;
  setText(value?: TextSpec): Column;
  hasText(): boolean;
  clearText(): Column;

  getBoolean(): BooleanSpec | undefined;
  setBoolean(value?: BooleanSpec): Column;
  hasBoolean(): boolean;
  clearBoolean(): Column;

  getDescription(): string;
  setDescription(value: string): Column;
  hasDescription(): boolean;
  clearDescription(): Column;

  getMetadatakey(): string;
  setMetadatakey(value: string): Column;
  hasMetadatakey(): boolean;
  clearMetadatakey(): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    name?: string,
    type?: string,
    integer?: IntegerSpec.AsObject,
    pb_float?: FloatSpec.AsObject,
    text?: TextSpec.AsObject,
    pb_boolean?: BooleanSpec.AsObject,
    description?: string,
    metadatakey?: string,
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

export class EmbeddingSpec extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): EmbeddingSpec;
  clearColumnsList(): EmbeddingSpec;
  addColumns(value: string, index?: number): EmbeddingSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): EmbeddingSpec;
  hasModel(): boolean;
  clearModel(): EmbeddingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbeddingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EmbeddingSpec): EmbeddingSpec.AsObject;
  static serializeBinaryToWriter(message: EmbeddingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbeddingSpec;
  static deserializeBinaryFromReader(message: EmbeddingSpec, reader: jspb.BinaryReader): EmbeddingSpec;
}

export namespace EmbeddingSpec {
  export type AsObject = {
    columnsList: Array<string>,
    model?: ModelSpec.AsObject,
  }
}

export class EndpointMetrics extends jspb.Message {
  getP50(): number;
  setP50(value: number): EndpointMetrics;
  hasP50(): boolean;
  clearP50(): EndpointMetrics;

  getP95(): number;
  setP95(value: number): EndpointMetrics;
  hasP95(): boolean;
  clearP95(): EndpointMetrics;

  getP99(): number;
  setP99(value: number): EndpointMetrics;
  hasP99(): boolean;
  clearP99(): EndpointMetrics;

  getTotalrequests(): number;
  setTotalrequests(value: number): EndpointMetrics;
  hasTotalrequests(): boolean;
  clearTotalrequests(): EndpointMetrics;

  getTotaltokens(): number;
  setTotaltokens(value: number): EndpointMetrics;
  hasTotaltokens(): boolean;
  clearTotaltokens(): EndpointMetrics;

  getTotalcost(): number;
  setTotalcost(value: number): EndpointMetrics;
  hasTotalcost(): boolean;
  clearTotalcost(): EndpointMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointMetrics): EndpointMetrics.AsObject;
  static serializeBinaryToWriter(message: EndpointMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointMetrics;
  static deserializeBinaryFromReader(message: EndpointMetrics, reader: jspb.BinaryReader): EndpointMetrics;
}

export namespace EndpointMetrics {
  export type AsObject = {
    p50?: number,
    p95?: number,
    p99?: number,
    totalrequests?: number,
    totaltokens?: number,
    totalcost?: number,
  }
}

export class EndpointSpec extends jspb.Message {
  getName(): string;
  setName(value: string): EndpointSpec;
  hasName(): boolean;
  clearName(): EndpointSpec;

  getQueryengine(): string;
  setQueryengine(value: string): EndpointSpec;
  hasQueryengine(): boolean;
  clearQueryengine(): EndpointSpec;

  getPath(): string;
  setPath(value: string): EndpointSpec;
  hasPath(): boolean;
  clearPath(): EndpointSpec;

  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): EndpointSpec;
  clearPathsList(): EndpointSpec;
  addPaths(value: string, index?: number): EndpointSpec;

  getFormat(): string;
  setFormat(value: string): EndpointSpec;
  hasFormat(): boolean;
  clearFormat(): EndpointSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): EndpointSpec;
  hasModel(): boolean;
  clearModel(): EndpointSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointSpec): EndpointSpec.AsObject;
  static serializeBinaryToWriter(message: EndpointSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointSpec;
  static deserializeBinaryFromReader(message: EndpointSpec, reader: jspb.BinaryReader): EndpointSpec;
}

export namespace EndpointSpec {
  export type AsObject = {
    name?: string,
    queryengine?: string,
    path?: string,
    pathsList: Array<string>,
    format?: string,
    model?: ModelSpec.AsObject,
  }
}

export class EndpointStatus extends jspb.Message {
  getName(): string;
  setName(value: string): EndpointStatus;
  hasName(): boolean;
  clearName(): EndpointStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): EndpointStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): EndpointStatus;

  getMetrics(): EndpointMetrics | undefined;
  setMetrics(value?: EndpointMetrics): EndpointStatus;
  hasMetrics(): boolean;
  clearMetrics(): EndpointStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointStatus.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointStatus): EndpointStatus.AsObject;
  static serializeBinaryToWriter(message: EndpointStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointStatus;
  static deserializeBinaryFromReader(message: EndpointStatus, reader: jspb.BinaryReader): EndpointStatus;
}

export namespace EndpointStatus {
  export type AsObject = {
    name?: string,
    failuremessage?: string,
    metrics?: EndpointMetrics.AsObject,
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

export class FloatSpec extends jspb.Message {
  getExtractionmode(): string;
  setExtractionmode(value: string): FloatSpec;
  hasExtractionmode(): boolean;
  clearExtractionmode(): FloatSpec;

  getRoundingmode(): string;
  setRoundingmode(value: string): FloatSpec;
  hasRoundingmode(): boolean;
  clearRoundingmode(): FloatSpec;

  getPrecision(): number;
  setPrecision(value: number): FloatSpec;
  hasPrecision(): boolean;
  clearPrecision(): FloatSpec;

  getDefault(): number;
  setDefault(value: number): FloatSpec;
  hasDefault(): boolean;
  clearDefault(): FloatSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FloatSpec): FloatSpec.AsObject;
  static serializeBinaryToWriter(message: FloatSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatSpec;
  static deserializeBinaryFromReader(message: FloatSpec, reader: jspb.BinaryReader): FloatSpec;
}

export namespace FloatSpec {
  export type AsObject = {
    extractionmode?: string,
    roundingmode?: string,
    precision?: number,
    pb_default?: number,
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

  getDefaultscore(): number;
  setDefaultscore(value: number): FusionRetrieverSpec;
  hasDefaultscore(): boolean;
  clearDefaultscore(): FusionRetrieverSpec;

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
    defaultscore?: number,
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

  getTree(): TreeIndexSpec | undefined;
  setTree(value?: TreeIndexSpec): IndexSpec;
  hasTree(): boolean;
  clearTree(): IndexSpec;

  getKeywordtable(): KeywordTableIndexSpec | undefined;
  setKeywordtable(value?: KeywordTableIndexSpec): IndexSpec;
  hasKeywordtable(): boolean;
  clearKeywordtable(): IndexSpec;

  getSql(): SQLIndexSpec | undefined;
  setSql(value?: SQLIndexSpec): IndexSpec;
  hasSql(): boolean;
  clearSql(): IndexSpec;

  getList(): ListIndexSpec | undefined;
  setList(value?: ListIndexSpec): IndexSpec;
  hasList(): boolean;
  clearList(): IndexSpec;

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
    tree?: TreeIndexSpec.AsObject,
    keywordtable?: KeywordTableIndexSpec.AsObject,
    sql?: SQLIndexSpec.AsObject,
    list?: ListIndexSpec.AsObject,
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

export class IntegerSpec extends jspb.Message {
  getExtractionmode(): string;
  setExtractionmode(value: string): IntegerSpec;
  hasExtractionmode(): boolean;
  clearExtractionmode(): IntegerSpec;

  getRoundingmode(): string;
  setRoundingmode(value: string): IntegerSpec;
  hasRoundingmode(): boolean;
  clearRoundingmode(): IntegerSpec;

  getDefault(): number;
  setDefault(value: number): IntegerSpec;
  hasDefault(): boolean;
  clearDefault(): IntegerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: IntegerSpec): IntegerSpec.AsObject;
  static serializeBinaryToWriter(message: IntegerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegerSpec;
  static deserializeBinaryFromReader(message: IntegerSpec, reader: jspb.BinaryReader): IntegerSpec;
}

export namespace IntegerSpec {
  export type AsObject = {
    extractionmode?: string,
    roundingmode?: string,
    pb_default?: number,
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

export class KeywordTableIndexSpec extends jspb.Message {
  getMode(): string;
  setMode(value: string): KeywordTableIndexSpec;
  hasMode(): boolean;
  clearMode(): KeywordTableIndexSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): KeywordTableIndexSpec;
  hasModel(): boolean;
  clearModel(): KeywordTableIndexSpec;

  getMaxkeywordspernode(): number;
  setMaxkeywordspernode(value: number): KeywordTableIndexSpec;
  hasMaxkeywordspernode(): boolean;
  clearMaxkeywordspernode(): KeywordTableIndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordTableIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordTableIndexSpec): KeywordTableIndexSpec.AsObject;
  static serializeBinaryToWriter(message: KeywordTableIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordTableIndexSpec;
  static deserializeBinaryFromReader(message: KeywordTableIndexSpec, reader: jspb.BinaryReader): KeywordTableIndexSpec;
}

export namespace KeywordTableIndexSpec {
  export type AsObject = {
    mode?: string,
    model?: ModelSpec.AsObject,
    maxkeywordspernode?: number,
  }
}

export class KeywordTableRetrieverSpec extends jspb.Message {
  getIndex(): IndexReference | undefined;
  setIndex(value?: IndexReference): KeywordTableRetrieverSpec;
  hasIndex(): boolean;
  clearIndex(): KeywordTableRetrieverSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): KeywordTableRetrieverSpec;
  hasModel(): boolean;
  clearModel(): KeywordTableRetrieverSpec;

  getMode(): string;
  setMode(value: string): KeywordTableRetrieverSpec;
  hasMode(): boolean;
  clearMode(): KeywordTableRetrieverSpec;

  getKeywordsperquery(): number;
  setKeywordsperquery(value: number): KeywordTableRetrieverSpec;
  hasKeywordsperquery(): boolean;
  clearKeywordsperquery(): KeywordTableRetrieverSpec;

  getChunksperquery(): number;
  setChunksperquery(value: number): KeywordTableRetrieverSpec;
  hasChunksperquery(): boolean;
  clearChunksperquery(): KeywordTableRetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordTableRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordTableRetrieverSpec): KeywordTableRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: KeywordTableRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordTableRetrieverSpec;
  static deserializeBinaryFromReader(message: KeywordTableRetrieverSpec, reader: jspb.BinaryReader): KeywordTableRetrieverSpec;
}

export namespace KeywordTableRetrieverSpec {
  export type AsObject = {
    index?: IndexReference.AsObject,
    model?: ModelSpec.AsObject,
    mode?: string,
    keywordsperquery?: number,
    chunksperquery?: number,
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

export class LLMServer extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): LLMServer;
  hasMetadata(): boolean;
  clearMetadata(): LLMServer;

  getSpec(): LLMServerSpec | undefined;
  setSpec(value?: LLMServerSpec): LLMServer;
  hasSpec(): boolean;
  clearSpec(): LLMServer;

  getStatus(): LLMStatus | undefined;
  setStatus(value?: LLMStatus): LLMServer;
  hasStatus(): boolean;
  clearStatus(): LLMServer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMServer.AsObject;
  static toObject(includeInstance: boolean, msg: LLMServer): LLMServer.AsObject;
  static serializeBinaryToWriter(message: LLMServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMServer;
  static deserializeBinaryFromReader(message: LLMServer, reader: jspb.BinaryReader): LLMServer;
}

export namespace LLMServer {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: LLMServerSpec.AsObject,
    status?: LLMStatus.AsObject,
  }
}

export class LLMServerAccessSpec extends jspb.Message {
  getPort(): number;
  setPort(value: number): LLMServerAccessSpec;
  hasPort(): boolean;
  clearPort(): LLMServerAccessSpec;

  getNodeport(): number;
  setNodeport(value: number): LLMServerAccessSpec;
  hasNodeport(): boolean;
  clearNodeport(): LLMServerAccessSpec;

  getAccesstype(): string;
  setAccesstype(value: string): LLMServerAccessSpec;
  hasAccesstype(): boolean;
  clearAccesstype(): LLMServerAccessSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMServerAccessSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LLMServerAccessSpec): LLMServerAccessSpec.AsObject;
  static serializeBinaryToWriter(message: LLMServerAccessSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMServerAccessSpec;
  static deserializeBinaryFromReader(message: LLMServerAccessSpec, reader: jspb.BinaryReader): LLMServerAccessSpec;
}

export namespace LLMServerAccessSpec {
  export type AsObject = {
    port?: number,
    nodeport?: number,
    accesstype?: string,
  }
}

export class LLMServerAuthorizationSpec extends jspb.Message {
  getInsecure(): boolean;
  setInsecure(value: boolean): LLMServerAuthorizationSpec;
  hasInsecure(): boolean;
  clearInsecure(): LLMServerAuthorizationSpec;

  getAllowedkeygroupsList(): Array<string>;
  setAllowedkeygroupsList(value: Array<string>): LLMServerAuthorizationSpec;
  clearAllowedkeygroupsList(): LLMServerAuthorizationSpec;
  addAllowedkeygroups(value: string, index?: number): LLMServerAuthorizationSpec;

  getAllowedkeynamesList(): Array<string>;
  setAllowedkeynamesList(value: Array<string>): LLMServerAuthorizationSpec;
  clearAllowedkeynamesList(): LLMServerAuthorizationSpec;
  addAllowedkeynames(value: string, index?: number): LLMServerAuthorizationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMServerAuthorizationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LLMServerAuthorizationSpec): LLMServerAuthorizationSpec.AsObject;
  static serializeBinaryToWriter(message: LLMServerAuthorizationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMServerAuthorizationSpec;
  static deserializeBinaryFromReader(message: LLMServerAuthorizationSpec, reader: jspb.BinaryReader): LLMServerAuthorizationSpec;
}

export namespace LLMServerAuthorizationSpec {
  export type AsObject = {
    insecure?: boolean,
    allowedkeygroupsList: Array<string>,
    allowedkeynamesList: Array<string>,
  }
}

export class LLMServerList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): LLMServerList;
  hasMetadata(): boolean;
  clearMetadata(): LLMServerList;

  getItemsList(): Array<LLMServer>;
  setItemsList(value: Array<LLMServer>): LLMServerList;
  clearItemsList(): LLMServerList;
  addItems(value?: LLMServer, index?: number): LLMServer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMServerList.AsObject;
  static toObject(includeInstance: boolean, msg: LLMServerList): LLMServerList.AsObject;
  static serializeBinaryToWriter(message: LLMServerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMServerList;
  static deserializeBinaryFromReader(message: LLMServerList, reader: jspb.BinaryReader): LLMServerList;
}

export namespace LLMServerList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<LLMServer.AsObject>,
  }
}

export class LLMServerSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): LLMServerSpec;
  hasOwner(): boolean;
  clearOwner(): LLMServerSpec;

  getDescription(): string;
  setDescription(value: string): LLMServerSpec;
  hasDescription(): boolean;
  clearDescription(): LLMServerSpec;

  getServingsitename(): string;
  setServingsitename(value: string): LLMServerSpec;
  hasServingsitename(): boolean;
  clearServingsitename(): LLMServerSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): LLMServerSpec;
  hasResources(): boolean;
  clearResources(): LLMServerSpec;

  getEndpointsList(): Array<EndpointSpec>;
  setEndpointsList(value: Array<EndpointSpec>): LLMServerSpec;
  clearEndpointsList(): LLMServerSpec;
  addEndpoints(value?: EndpointSpec, index?: number): EndpointSpec;

  getQueryenginesList(): Array<QueryEngineSpec>;
  setQueryenginesList(value: Array<QueryEngineSpec>): LLMServerSpec;
  clearQueryenginesList(): LLMServerSpec;
  addQueryengines(value?: QueryEngineSpec, index?: number): QueryEngineSpec;

  getRetrieversList(): Array<RetrieverSpec>;
  setRetrieversList(value: Array<RetrieverSpec>): LLMServerSpec;
  clearRetrieversList(): LLMServerSpec;
  addRetrievers(value?: RetrieverSpec, index?: number): RetrieverSpec;

  getAuthorization(): LLMServerAuthorizationSpec | undefined;
  setAuthorization(value?: LLMServerAuthorizationSpec): LLMServerSpec;
  hasAuthorization(): boolean;
  clearAuthorization(): LLMServerSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): LLMServerSpec;
  hasNotification(): boolean;
  clearNotification(): LLMServerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LLMServerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LLMServerSpec): LLMServerSpec.AsObject;
  static serializeBinaryToWriter(message: LLMServerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LLMServerSpec;
  static deserializeBinaryFromReader(message: LLMServerSpec, reader: jspb.BinaryReader): LLMServerSpec;
}

export namespace LLMServerSpec {
  export type AsObject = {
    owner?: string,
    description?: string,
    servingsitename?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    endpointsList: Array<EndpointSpec.AsObject>,
    queryenginesList: Array<QueryEngineSpec.AsObject>,
    retrieversList: Array<RetrieverSpec.AsObject>,
    authorization?: LLMServerAuthorizationSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
  }
}

export class LLMStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): LLMStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): LLMStatus;

  getEndpointsList(): Array<EndpointStatus>;
  setEndpointsList(value: Array<EndpointStatus>): LLMStatus;
  clearEndpointsList(): LLMStatus;
  addEndpoints(value?: EndpointStatus, index?: number): EndpointStatus;

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
    endpointsList: Array<EndpointStatus.AsObject>,
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

export class ListIndexSpec extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexSpec): ListIndexSpec.AsObject;
  static serializeBinaryToWriter(message: ListIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexSpec;
  static deserializeBinaryFromReader(message: ListIndexSpec, reader: jspb.BinaryReader): ListIndexSpec;
}

export namespace ListIndexSpec {
  export type AsObject = {
  }
}

export class ListRetrieverSpec extends jspb.Message {
  getIndex(): IndexReference | undefined;
  setIndex(value?: IndexReference): ListRetrieverSpec;
  hasIndex(): boolean;
  clearIndex(): ListRetrieverSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): ListRetrieverSpec;
  hasModel(): boolean;
  clearModel(): ListRetrieverSpec;

  getTopk(): number;
  setTopk(value: number): ListRetrieverSpec;
  hasTopk(): boolean;
  clearTopk(): ListRetrieverSpec;

  getMode(): string;
  setMode(value: string): ListRetrieverSpec;
  hasMode(): boolean;
  clearMode(): ListRetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ListRetrieverSpec): ListRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: ListRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRetrieverSpec;
  static deserializeBinaryFromReader(message: ListRetrieverSpec, reader: jspb.BinaryReader): ListRetrieverSpec;
}

export namespace ListRetrieverSpec {
  export type AsObject = {
    index?: IndexReference.AsObject,
    model?: ModelSpec.AsObject,
    topk?: number,
    mode?: string,
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

  getTree(): TreeRetrieverSpec | undefined;
  setTree(value?: TreeRetrieverSpec): RetrieverSpec;
  hasTree(): boolean;
  clearTree(): RetrieverSpec;

  getKeywordtable(): KeywordTableRetrieverSpec | undefined;
  setKeywordtable(value?: KeywordTableRetrieverSpec): RetrieverSpec;
  hasKeywordtable(): boolean;
  clearKeywordtable(): RetrieverSpec;

  getList(): ListRetrieverSpec | undefined;
  setList(value?: ListRetrieverSpec): RetrieverSpec;
  hasList(): boolean;
  clearList(): RetrieverSpec;

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
    tree?: TreeRetrieverSpec.AsObject,
    keywordtable?: KeywordTableRetrieverSpec.AsObject,
    list?: ListRetrieverSpec.AsObject,
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

export class SQLIndexSpec extends jspb.Message {
  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): SQLIndexSpec;
  hasModel(): boolean;
  clearModel(): SQLIndexSpec;

  getDatabaseconnectionname(): string;
  setDatabaseconnectionname(value: string): SQLIndexSpec;
  hasDatabaseconnectionname(): boolean;
  clearDatabaseconnectionname(): SQLIndexSpec;

  getTablename(): string;
  setTablename(value: string): SQLIndexSpec;
  hasTablename(): boolean;
  clearTablename(): SQLIndexSpec;

  getRefdoccolumn(): string;
  setRefdoccolumn(value: string): SQLIndexSpec;
  hasRefdoccolumn(): boolean;
  clearRefdoccolumn(): SQLIndexSpec;

  getSchema(): Schema | undefined;
  setSchema(value?: Schema): SQLIndexSpec;
  hasSchema(): boolean;
  clearSchema(): SQLIndexSpec;

  getGranularity(): string;
  setGranularity(value: string): SQLIndexSpec;
  hasGranularity(): boolean;
  clearGranularity(): SQLIndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SQLIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SQLIndexSpec): SQLIndexSpec.AsObject;
  static serializeBinaryToWriter(message: SQLIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SQLIndexSpec;
  static deserializeBinaryFromReader(message: SQLIndexSpec, reader: jspb.BinaryReader): SQLIndexSpec;
}

export namespace SQLIndexSpec {
  export type AsObject = {
    model?: ModelSpec.AsObject,
    databaseconnectionname?: string,
    tablename?: string,
    refdoccolumn?: string,
    schema?: Schema.AsObject,
    granularity?: string,
  }
}

export class Schema extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): Schema;
  hasDescription(): boolean;
  clearDescription(): Schema;

  getColumnsList(): Array<Column>;
  setColumnsList(value: Array<Column>): Schema;
  clearColumnsList(): Schema;
  addColumns(value?: Column, index?: number): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    description?: string,
    columnsList: Array<Column.AsObject>,
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

export class TextSpec extends jspb.Message {
  getExtractionmode(): string;
  setExtractionmode(value: string): TextSpec;
  hasExtractionmode(): boolean;
  clearExtractionmode(): TextSpec;

  getSummarizationprompt(): string;
  setSummarizationprompt(value: string): TextSpec;
  hasSummarizationprompt(): boolean;
  clearSummarizationprompt(): TextSpec;

  getConcatenationstring(): string;
  setConcatenationstring(value: string): TextSpec;
  hasConcatenationstring(): boolean;
  clearConcatenationstring(): TextSpec;

  getDefault(): number;
  setDefault(value: number): TextSpec;
  hasDefault(): boolean;
  clearDefault(): TextSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TextSpec): TextSpec.AsObject;
  static serializeBinaryToWriter(message: TextSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSpec;
  static deserializeBinaryFromReader(message: TextSpec, reader: jspb.BinaryReader): TextSpec;
}

export namespace TextSpec {
  export type AsObject = {
    extractionmode?: string,
    summarizationprompt?: string,
    concatenationstring?: string,
    pb_default?: number,
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

export class TreeRetrieverSpec extends jspb.Message {
  getIndex(): IndexReference | undefined;
  setIndex(value?: IndexReference): TreeRetrieverSpec;
  hasIndex(): boolean;
  clearIndex(): TreeRetrieverSpec;

  getModel(): ModelSpec | undefined;
  setModel(value?: ModelSpec): TreeRetrieverSpec;
  hasModel(): boolean;
  clearModel(): TreeRetrieverSpec;

  getMode(): string;
  setMode(value: string): TreeRetrieverSpec;
  hasMode(): boolean;
  clearMode(): TreeRetrieverSpec;

  getChildbranchfactor(): number;
  setChildbranchfactor(value: number): TreeRetrieverSpec;
  hasChildbranchfactor(): boolean;
  clearChildbranchfactor(): TreeRetrieverSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeRetrieverSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TreeRetrieverSpec): TreeRetrieverSpec.AsObject;
  static serializeBinaryToWriter(message: TreeRetrieverSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeRetrieverSpec;
  static deserializeBinaryFromReader(message: TreeRetrieverSpec, reader: jspb.BinaryReader): TreeRetrieverSpec;
}

export namespace TreeRetrieverSpec {
  export type AsObject = {
    index?: IndexReference.AsObject,
    model?: ModelSpec.AsObject,
    mode?: string,
    childbranchfactor?: number,
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

