import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AggregationSpec extends jspb.Message {
  getSlideperiod(): string;
  setSlideperiod(value: string): AggregationSpec;

  getAggregationsList(): Array<FeatureAggrSpec>;
  setAggregationsList(value: Array<FeatureAggrSpec>): AggregationSpec;
  clearAggregationsList(): AggregationSpec;
  addAggregations(value?: FeatureAggrSpec, index?: number): FeatureAggrSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AggregationSpec): AggregationSpec.AsObject;
  static serializeBinaryToWriter(message: AggregationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregationSpec;
  static deserializeBinaryFromReader(message: AggregationSpec, reader: jspb.BinaryReader): AggregationSpec;
}

export namespace AggregationSpec {
  export type AsObject = {
    slideperiod: string,
    aggregationsList: Array<FeatureAggrSpec.AsObject>,
  }
}

export class Column extends jspb.Message {
  getName(): string;
  setName(value: string): Column;

  getDisplayname(): string;
  setDisplayname(value: string): Column;

  getDatatype(): string;
  setDatatype(value: string): Column;

  getFormat(): string;
  setFormat(value: string): Column;

  getDescription(): string;
  setDescription(value: string): Column;

  getIgnore(): boolean;
  setIgnore(value: boolean): Column;

  getLabel(): boolean;
  setLabel(value: boolean): Column;

  getNullable(): boolean;
  setNullable(value: boolean): Column;

  getPk(): boolean;
  setPk(value: boolean): Column;

  getMultipleof(): number;
  setMultipleof(value: number): Column;

  getMaximum(): number;
  setMaximum(value: number): Column;

  getExclusivemaximum(): boolean;
  setExclusivemaximum(value: boolean): Column;

  getMinimum(): number;
  setMinimum(value: number): Column;

  getExclusiveminimum(): boolean;
  setExclusiveminimum(value: boolean): Column;

  getMaxlength(): number;
  setMaxlength(value: number): Column;

  getMinlength(): number;
  setMinlength(value: number): Column;

  getPattern(): string;
  setPattern(value: string): Column;

  getRequired(): boolean;
  setRequired(value: boolean): Column;

  getExample(): string;
  setExample(value: string): Column;

  getExternaldocs(): string;
  setExternaldocs(value: string): Column;

  getEnumList(): Array<string>;
  setEnumList(value: Array<string>): Column;
  clearEnumList(): Column;
  addEnum(value: string, index?: number): Column;

  getOrdinal(): boolean;
  setOrdinal(value: boolean): Column;

  getMaxitems(): number;
  setMaxitems(value: number): Column;

  getMinitems(): number;
  setMinitems(value: number): Column;

  getUniqueitems(): boolean;
  setUniqueitems(value: boolean): Column;

  getTimecolumn(): boolean;
  setTimecolumn(value: boolean): Column;

  getPii(): boolean;
  setPii(value: boolean): Column;

  getPhi(): boolean;
  setPhi(value: boolean): Column;

  getPersonaldata(): boolean;
  setPersonaldata(value: boolean): Column;

  getProtected(): boolean;
  setProtected(value: boolean): Column;

  getDefaultvaluenum(): number;
  setDefaultvaluenum(value: number): Column;

  getLog(): boolean;
  setLog(value: boolean): Column;

  getMu(): number;
  setMu(value: number): Column;

  getSigma(): number;
  setSigma(value: number): Column;

  getSkewthreshold(): number;
  setSkewthreshold(value: number): Column;

  getDriftthreshold(): number;
  setDriftthreshold(value: number): Column;

  getIndex(): boolean;
  setIndex(value: boolean): Column;

  getFold(): boolean;
  setFold(value: boolean): Column;

  getWeight(): boolean;
  setWeight(value: boolean): Column;

  getReserved(): boolean;
  setReserved(value: boolean): Column;

  getImputer(): string;
  setImputer(value: string): Column;

  getScaler(): string;
  setScaler(value: string): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    name: string,
    displayname: string,
    datatype: string,
    format: string,
    description: string,
    ignore: boolean,
    label: boolean,
    nullable: boolean,
    pk: boolean,
    multipleof: number,
    maximum: number,
    exclusivemaximum: boolean,
    minimum: number,
    exclusiveminimum: boolean,
    maxlength: number,
    minlength: number,
    pattern: string,
    required: boolean,
    example: string,
    externaldocs: string,
    enumList: Array<string>,
    ordinal: boolean,
    maxitems: number,
    minitems: number,
    uniqueitems: boolean,
    timecolumn: boolean,
    pii: boolean,
    phi: boolean,
    personaldata: boolean,
    pb_protected: boolean,
    defaultvaluenum: number,
    log: boolean,
    mu: number,
    sigma: number,
    skewthreshold: number,
    driftthreshold: number,
    index: boolean,
    fold: boolean,
    weight: boolean,
    reserved: boolean,
    imputer: string,
    scaler: string,
  }
}

export class ColumnStatistics extends jspb.Message {
  getName(): string;
  setName(value: string): ColumnStatistics;

  getType(): string;
  setType(value: string): ColumnStatistics;

  getMin(): number;
  setMin(value: number): ColumnStatistics;

  getMax(): number;
  setMax(value: number): ColumnStatistics;

  getMode(): string;
  setMode(value: string): ColumnStatistics;

  getMean(): number;
  setMean(value: number): ColumnStatistics;

  getStddev(): number;
  setStddev(value: number): ColumnStatistics;

  getSkewness(): number;
  setSkewness(value: number): ColumnStatistics;

  getKurtosis(): number;
  setKurtosis(value: number): ColumnStatistics;

  getZeros(): number;
  setZeros(value: number): ColumnStatistics;

  getP25(): number;
  setP25(value: number): ColumnStatistics;

  getP50(): number;
  setP50(value: number): ColumnStatistics;

  getP75(): number;
  setP75(value: number): ColumnStatistics;

  getMissing(): number;
  setMissing(value: number): ColumnStatistics;

  getInvalid(): number;
  setInvalid(value: number): ColumnStatistics;

  getTarget(): boolean;
  setTarget(value: boolean): ColumnStatistics;

  getImportance(): number;
  setImportance(value: number): ColumnStatistics;

  getUnique(): number;
  setUnique(value: number): ColumnStatistics;

  getIgnored(): boolean;
  setIgnored(value: boolean): ColumnStatistics;

  getNullable(): boolean;
  setNullable(value: boolean): ColumnStatistics;

  getHighcardinality(): boolean;
  setHighcardinality(value: boolean): ColumnStatistics;

  getCorrelatedwithotherfeature(): boolean;
  setCorrelatedwithotherfeature(value: boolean): ColumnStatistics;

  getLowcorrelatedwithtarget(): boolean;
  setLowcorrelatedwithtarget(value: boolean): ColumnStatistics;

  getConstant(): boolean;
  setConstant(value: boolean): ColumnStatistics;

  getHighmissingpct(): boolean;
  setHighmissingpct(value: boolean): ColumnStatistics;

  getSkew(): boolean;
  setSkew(value: boolean): ColumnStatistics;

  getCompleteness(): number;
  setCompleteness(value: number): ColumnStatistics;

  getDistinctvaluecount(): number;
  setDistinctvaluecount(value: number): ColumnStatistics;

  getMostfreqvaluesratio(): number;
  setMostfreqvaluesratio(value: number): ColumnStatistics;

  getIndexofpeculiarity(): number;
  setIndexofpeculiarity(value: number): ColumnStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnStatistics): ColumnStatistics.AsObject;
  static serializeBinaryToWriter(message: ColumnStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnStatistics;
  static deserializeBinaryFromReader(message: ColumnStatistics, reader: jspb.BinaryReader): ColumnStatistics;
}

export namespace ColumnStatistics {
  export type AsObject = {
    name: string,
    type: string,
    min: number,
    max: number,
    mode: string,
    mean: number,
    stddev: number,
    skewness: number,
    kurtosis: number,
    zeros: number,
    p25: number,
    p50: number,
    p75: number,
    missing: number,
    invalid: number,
    target: boolean,
    importance: number,
    unique: number,
    ignored: boolean,
    nullable: boolean,
    highcardinality: boolean,
    correlatedwithotherfeature: boolean,
    lowcorrelatedwithtarget: boolean,
    constant: boolean,
    highmissingpct: boolean,
    skew: boolean,
    completeness: number,
    distinctvaluecount: number,
    mostfreqvaluesratio: number,
    indexofpeculiarity: number,
  }
}

export class ColumnValidation extends jspb.Message {
  getType(): string;
  setType(value: string): ColumnValidation;

  getColumn(): string;
  setColumn(value: string): ColumnValidation;

  getValue(): number;
  setValue(value: number): ColumnValidation;

  getMin(): number;
  setMin(value: number): ColumnValidation;

  getMax(): number;
  setMax(value: number): ColumnValidation;

  getValuesetList(): Array<string>;
  setValuesetList(value: Array<string>): ColumnValidation;
  clearValuesetList(): ColumnValidation;
  addValueset(value: string, index?: number): ColumnValidation;

  getStrictmin(): boolean;
  setStrictmin(value: boolean): ColumnValidation;

  getStrictmax(): boolean;
  setStrictmax(value: boolean): ColumnValidation;

  getGenerated(): boolean;
  setGenerated(value: boolean): ColumnValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnValidation.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnValidation): ColumnValidation.AsObject;
  static serializeBinaryToWriter(message: ColumnValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnValidation;
  static deserializeBinaryFromReader(message: ColumnValidation, reader: jspb.BinaryReader): ColumnValidation;
}

export namespace ColumnValidation {
  export type AsObject = {
    type: string,
    column: string,
    value: number,
    min: number,
    max: number,
    valuesetList: Array<string>,
    strictmin: boolean,
    strictmax: boolean,
    generated: boolean,
  }
}

export class CorrelationSpec extends jspb.Message {
  getFloat64(): number;
  setFloat64(value: number): CorrelationSpec;

  getMethod(): string;
  setMethod(value: string): CorrelationSpec;

  getTop(): number;
  setTop(value: number): CorrelationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CorrelationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CorrelationSpec): CorrelationSpec.AsObject;
  static serializeBinaryToWriter(message: CorrelationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CorrelationSpec;
  static deserializeBinaryFromReader(message: CorrelationSpec, reader: jspb.BinaryReader): CorrelationSpec;
}

export namespace CorrelationSpec {
  export type AsObject = {
    float64: number,
    method: string,
    top: number,
  }
}

export class CsvFileSpec extends jspb.Message {
  getColumndelimiter(): string;
  setColumndelimiter(value: string): CsvFileSpec;

  getRowdelimiter(): string;
  setRowdelimiter(value: string): CsvFileSpec;

  getQuote(): string;
  setQuote(value: string): CsvFileSpec;

  getEscapechar(): string;
  setEscapechar(value: string): CsvFileSpec;

  getCommentchars(): string;
  setCommentchars(value: string): CsvFileSpec;

  getHeader(): boolean;
  setHeader(value: boolean): CsvFileSpec;

  getSkiprows(): number;
  setSkiprows(value: number): CsvFileSpec;

  getNullvalues(): string;
  setNullvalues(value: string): CsvFileSpec;

  getEncoding(): string;
  setEncoding(value: string): CsvFileSpec;

  getMaxrows(): number;
  setMaxrows(value: number): CsvFileSpec;

  getStrict(): boolean;
  setStrict(value: boolean): CsvFileSpec;

  getCompression(): string;
  setCompression(value: string): CsvFileSpec;

  getHasindexcolumn(): boolean;
  setHasindexcolumn(value: boolean): CsvFileSpec;

  getIndexcolumn(): number;
  setIndexcolumn(value: number): CsvFileSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsvFileSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CsvFileSpec): CsvFileSpec.AsObject;
  static serializeBinaryToWriter(message: CsvFileSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsvFileSpec;
  static deserializeBinaryFromReader(message: CsvFileSpec, reader: jspb.BinaryReader): CsvFileSpec;
}

export namespace CsvFileSpec {
  export type AsObject = {
    columndelimiter: string,
    rowdelimiter: string,
    quote: string,
    escapechar: string,
    commentchars: string,
    header: boolean,
    skiprows: number,
    nullvalues: string,
    encoding: string,
    maxrows: number,
    strict: boolean,
    compression: string,
    hasindexcolumn: boolean,
    indexcolumn: number,
  }
}

export class DataLocation extends jspb.Message {
  getType(): string;
  setType(value: string): DataLocation;

  getConnectionname(): string;
  setConnectionname(value: string): DataLocation;

  getBucketname(): string;
  setBucketname(value: string): DataLocation;

  getPath(): string;
  setPath(value: string): DataLocation;

  getTable(): string;
  setTable(value: string): DataLocation;

  getDatabase(): string;
  setDatabase(value: string): DataLocation;

  getSql(): string;
  setSql(value: string): DataLocation;

  getTopic(): string;
  setTopic(value: string): DataLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataLocation.AsObject;
  static toObject(includeInstance: boolean, msg: DataLocation): DataLocation.AsObject;
  static serializeBinaryToWriter(message: DataLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataLocation;
  static deserializeBinaryFromReader(message: DataLocation, reader: jspb.BinaryReader): DataLocation;
}

export namespace DataLocation {
  export type AsObject = {
    type: string,
    connectionname: string,
    bucketname: string,
    path: string,
    table: string,
    database: string,
    sql: string,
    topic: string,
  }
}

export class DataOutputSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): DataOutputSpec;

  getLocation(): DataLocation | undefined;
  setLocation(value?: DataLocation): DataOutputSpec;
  hasLocation(): boolean;
  clearLocation(): DataOutputSpec;

  getFormat(): string;
  setFormat(value: string): DataOutputSpec;

  getAction(): string;
  setAction(value: string): DataOutputSpec;

  getCreatetableifnotexist(): boolean;
  setCreatetableifnotexist(value: boolean): DataOutputSpec;

  getIncludefeatures(): boolean;
  setIncludefeatures(value: boolean): DataOutputSpec;

  getXai(): boolean;
  setXai(value: boolean): DataOutputSpec;

  getDetectoutliers(): boolean;
  setDetectoutliers(value: boolean): DataOutputSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataOutputSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataOutputSpec): DataOutputSpec.AsObject;
  static serializeBinaryToWriter(message: DataOutputSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataOutputSpec;
  static deserializeBinaryFromReader(message: DataOutputSpec, reader: jspb.BinaryReader): DataOutputSpec;
}

export namespace DataOutputSpec {
  export type AsObject = {
    datasetname: string,
    location?: DataLocation.AsObject,
    format: string,
    action: string,
    createtableifnotexist: boolean,
    includefeatures: boolean,
    xai: boolean,
    detectoutliers: boolean,
  }
}

export class DataPipeline extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataPipeline;
  hasMetadata(): boolean;
  clearMetadata(): DataPipeline;

  getSpec(): DataPipelineSpec | undefined;
  setSpec(value?: DataPipelineSpec): DataPipeline;
  hasSpec(): boolean;
  clearSpec(): DataPipeline;

  getStatus(): DataPipelineStatus | undefined;
  setStatus(value?: DataPipelineStatus): DataPipeline;
  hasStatus(): boolean;
  clearStatus(): DataPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipeline): DataPipeline.AsObject;
  static serializeBinaryToWriter(message: DataPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipeline;
  static deserializeBinaryFromReader(message: DataPipeline, reader: jspb.BinaryReader): DataPipeline;
}

export namespace DataPipeline {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataPipelineSpec.AsObject,
    status?: DataPipelineStatus.AsObject,
  }
}

export class DataPipelineCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DataPipelineCondition;

  getStatus(): string;
  setStatus(value: string): DataPipelineCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DataPipelineCondition;

  getReason(): string;
  setReason(value: string): DataPipelineCondition;

  getMessage(): string;
  setMessage(value: string): DataPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineCondition): DataPipelineCondition.AsObject;
  static serializeBinaryToWriter(message: DataPipelineCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineCondition;
  static deserializeBinaryFromReader(message: DataPipelineCondition, reader: jspb.BinaryReader): DataPipelineCondition;
}

export namespace DataPipelineCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class DataPipelineList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataPipelineList;
  hasMetadata(): boolean;
  clearMetadata(): DataPipelineList;

  getItemsList(): Array<DataPipeline>;
  setItemsList(value: Array<DataPipeline>): DataPipelineList;
  clearItemsList(): DataPipelineList;
  addItems(value?: DataPipeline, index?: number): DataPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineList.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineList): DataPipelineList.AsObject;
  static serializeBinaryToWriter(message: DataPipelineList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineList;
  static deserializeBinaryFromReader(message: DataPipelineList, reader: jspb.BinaryReader): DataPipelineList;
}

export namespace DataPipelineList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataPipeline.AsObject>,
  }
}

export class DataPipelineRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataPipelineRun;
  hasMetadata(): boolean;
  clearMetadata(): DataPipelineRun;

  getSpec(): DataPipelineRunSpec | undefined;
  setSpec(value?: DataPipelineRunSpec): DataPipelineRun;
  hasSpec(): boolean;
  clearSpec(): DataPipelineRun;

  getStatus(): DataPipelineRunStatus | undefined;
  setStatus(value?: DataPipelineRunStatus): DataPipelineRun;
  hasStatus(): boolean;
  clearStatus(): DataPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRun.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRun): DataPipelineRun.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRun;
  static deserializeBinaryFromReader(message: DataPipelineRun, reader: jspb.BinaryReader): DataPipelineRun;
}

export namespace DataPipelineRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataPipelineRunSpec.AsObject,
    status?: DataPipelineRunStatus.AsObject,
  }
}

export class DataPipelineRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DataPipelineRunCondition;

  getStatus(): string;
  setStatus(value: string): DataPipelineRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DataPipelineRunCondition;

  getReason(): string;
  setReason(value: string): DataPipelineRunCondition;

  getMessage(): string;
  setMessage(value: string): DataPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunCondition): DataPipelineRunCondition.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunCondition;
  static deserializeBinaryFromReader(message: DataPipelineRunCondition, reader: jspb.BinaryReader): DataPipelineRunCondition;
}

export namespace DataPipelineRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class DataPipelineRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataPipelineRunList;
  hasMetadata(): boolean;
  clearMetadata(): DataPipelineRunList;

  getItemsList(): Array<DataPipelineRun>;
  setItemsList(value: Array<DataPipelineRun>): DataPipelineRunList;
  clearItemsList(): DataPipelineRunList;
  addItems(value?: DataPipelineRun, index?: number): DataPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunList.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunList): DataPipelineRunList.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunList;
  static deserializeBinaryFromReader(message: DataPipelineRunList, reader: jspb.BinaryReader): DataPipelineRunList;
}

export namespace DataPipelineRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataPipelineRun.AsObject>,
  }
}

export class DataPipelineRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): DataPipelineRunSpec;

  getDatapipelinename(): string;
  setDatapipelinename(value: string): DataPipelineRunSpec;

  getOwner(): string;
  setOwner(value: string): DataPipelineRunSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): DataPipelineRunSpec;

  getPriority(): string;
  setPriority(value: string): DataPipelineRunSpec;

  getPaused(): boolean;
  setPaused(value: boolean): DataPipelineRunSpec;

  getAborted(): boolean;
  setAborted(value: boolean): DataPipelineRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunSpec): DataPipelineRunSpec.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunSpec;
  static deserializeBinaryFromReader(message: DataPipelineRunSpec, reader: jspb.BinaryReader): DataPipelineRunSpec;
}

export namespace DataPipelineRunSpec {
  export type AsObject = {
    versionname: string,
    datapipelinename: string,
    owner: string,
    workloadclassname: string,
    priority: string,
    paused: boolean,
    aborted: boolean,
  }
}

export class DataPipelineRunStatus extends jspb.Message {
  getReciperunsList(): Array<string>;
  setReciperunsList(value: Array<string>): DataPipelineRunStatus;
  clearReciperunsList(): DataPipelineRunStatus;
  addReciperuns(value: string, index?: number): DataPipelineRunStatus;

  getOutput(): DataLocation | undefined;
  setOutput(value?: DataLocation): DataPipelineRunStatus;
  hasOutput(): boolean;
  clearOutput(): DataPipelineRunStatus;

  getPhase(): string;
  setPhase(value: string): DataPipelineRunStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): DataPipelineRunStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineRunStatus;
  hasEndtime(): boolean;
  clearEndtime(): DataPipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataPipelineRunStatus;

  getLasterror(): string;
  setLasterror(value: string): DataPipelineRunStatus;

  getProgress(): number;
  setProgress(value: number): DataPipelineRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): DataPipelineRunStatus;
  hasLogs(): boolean;
  clearLogs(): DataPipelineRunStatus;

  getConditionsList(): Array<DataPipelineRunCondition>;
  setConditionsList(value: Array<DataPipelineRunCondition>): DataPipelineRunStatus;
  clearConditionsList(): DataPipelineRunStatus;
  addConditions(value?: DataPipelineRunCondition, index?: number): DataPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunStatus): DataPipelineRunStatus.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunStatus;
  static deserializeBinaryFromReader(message: DataPipelineRunStatus, reader: jspb.BinaryReader): DataPipelineRunStatus;
}

export namespace DataPipelineRunStatus {
  export type AsObject = {
    reciperunsList: Array<string>,
    output?: DataLocation.AsObject,
    phase: string,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    lasterror: string,
    progress: number,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    conditionsList: Array<DataPipelineRunCondition.AsObject>,
  }
}

export class DataPipelineSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): DataPipelineSpec;

  getDescription(): string;
  setDescription(value: string): DataPipelineSpec;

  getDatasetselectorMap(): jspb.Map<string, string>;
  clearDatasetselectorMap(): DataPipelineSpec;

  getRecipesList(): Array<RecipePartSpec>;
  setRecipesList(value: Array<RecipePartSpec>): DataPipelineSpec;
  clearRecipesList(): DataPipelineSpec;
  addRecipes(value?: RecipePartSpec, index?: number): RecipePartSpec;

  getOutput(): DataOutputSpec | undefined;
  setOutput(value?: DataOutputSpec): DataPipelineSpec;
  hasOutput(): boolean;
  clearOutput(): DataPipelineSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): DataPipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): DataPipelineSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): DataPipelineSpec;
  hasNotification(): boolean;
  clearNotification(): DataPipelineSpec;

  getOwner(): string;
  setOwner(value: string): DataPipelineSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): DataPipelineSpec;

  getPriority(): string;
  setPriority(value: string): DataPipelineSpec;

  getPaused(): boolean;
  setPaused(value: boolean): DataPipelineSpec;

  getTtl(): number;
  setTtl(value: number): DataPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineSpec): DataPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: DataPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineSpec;
  static deserializeBinaryFromReader(message: DataPipelineSpec, reader: jspb.BinaryReader): DataPipelineSpec;
}

export namespace DataPipelineSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    datasetselectorMap: Array<[string, string]>,
    recipesList: Array<RecipePartSpec.AsObject>,
    output?: DataOutputSpec.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    owner: string,
    workloadclassname: string,
    priority: string,
    paused: boolean,
    ttl: number,
  }
}

export class DataPipelineStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataPipelineStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): DataPipelineStatus;

  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineStatus;
  hasLastrun(): boolean;
  clearLastrun(): DataPipelineStatus;

  getConditionsList(): Array<DataPipelineCondition>;
  setConditionsList(value: Array<DataPipelineCondition>): DataPipelineStatus;
  clearConditionsList(): DataPipelineStatus;
  addConditions(value?: DataPipelineCondition, index?: number): DataPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineStatus): DataPipelineStatus.AsObject;
  static serializeBinaryToWriter(message: DataPipelineStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineStatus;
  static deserializeBinaryFromReader(message: DataPipelineStatus, reader: jspb.BinaryReader): DataPipelineStatus;
}

export namespace DataPipelineStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<DataPipelineCondition.AsObject>,
  }
}

export class DataProduct extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataProduct;
  hasMetadata(): boolean;
  clearMetadata(): DataProduct;

  getSpec(): DataProductSpec | undefined;
  setSpec(value?: DataProductSpec): DataProduct;
  hasSpec(): boolean;
  clearSpec(): DataProduct;

  getStatus(): DataProductStatus | undefined;
  setStatus(value?: DataProductStatus): DataProduct;
  hasStatus(): boolean;
  clearStatus(): DataProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProduct.AsObject;
  static toObject(includeInstance: boolean, msg: DataProduct): DataProduct.AsObject;
  static serializeBinaryToWriter(message: DataProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProduct;
  static deserializeBinaryFromReader(message: DataProduct, reader: jspb.BinaryReader): DataProduct;
}

export namespace DataProduct {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataProductSpec.AsObject,
    status?: DataProductStatus.AsObject,
  }
}

export class DataProductCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DataProductCondition;

  getStatus(): string;
  setStatus(value: string): DataProductCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DataProductCondition;

  getReason(): string;
  setReason(value: string): DataProductCondition;

  getMessage(): string;
  setMessage(value: string): DataProductCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductCondition): DataProductCondition.AsObject;
  static serializeBinaryToWriter(message: DataProductCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductCondition;
  static deserializeBinaryFromReader(message: DataProductCondition, reader: jspb.BinaryReader): DataProductCondition;
}

export namespace DataProductCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class DataProductList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataProductList;
  hasMetadata(): boolean;
  clearMetadata(): DataProductList;

  getItemsList(): Array<DataProduct>;
  setItemsList(value: Array<DataProduct>): DataProductList;
  clearItemsList(): DataProductList;
  addItems(value?: DataProduct, index?: number): DataProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductList.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductList): DataProductList.AsObject;
  static serializeBinaryToWriter(message: DataProductList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductList;
  static deserializeBinaryFromReader(message: DataProductList, reader: jspb.BinaryReader): DataProductList;
}

export namespace DataProductList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataProduct.AsObject>,
  }
}

export class DataProductSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DataProductSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataProductSpec;
  hasTenantref(): boolean;
  clearTenantref(): DataProductSpec;

  getStakeholdersList(): Array<StakeHolder>;
  setStakeholdersList(value: Array<StakeHolder>): DataProductSpec;
  clearStakeholdersList(): DataProductSpec;
  addStakeholders(value?: StakeHolder, index?: number): StakeHolder;

  getGitlocation(): GitLocation | undefined;
  setGitlocation(value?: GitLocation): DataProductSpec;
  hasGitlocation(): boolean;
  clearGitlocation(): DataProductSpec;

  getImagelocation(): ImageLocation | undefined;
  setImagelocation(value?: ImageLocation): DataProductSpec;
  hasImagelocation(): boolean;
  clearImagelocation(): DataProductSpec;

  getLabname(): string;
  setLabname(value: string): DataProductSpec;

  getServingsitename(): string;
  setServingsitename(value: string): DataProductSpec;

  getTask(): string;
  setTask(value: string): DataProductSpec;

  getDescription(): string;
  setDescription(value: string): DataProductSpec;

  getDatalocation(): DataLocation | undefined;
  setDatalocation(value?: DataLocation): DataProductSpec;
  hasDatalocation(): boolean;
  clearDatalocation(): DataProductSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): DataProductSpec;
  hasNotification(): boolean;
  clearNotification(): DataProductSpec;

  getDefaultworkloadclassname(): string;
  setDefaultworkloadclassname(value: string): DataProductSpec;

  getRetriesonfailure(): number;
  setRetriesonfailure(value: number): DataProductSpec;

  getKpisList(): Array<KPI>;
  setKpisList(value: Array<KPI>): DataProductSpec;
  clearKpisList(): DataProductSpec;
  addKpis(value?: KPI, index?: number): KPI;

  getOncallaccountname(): string;
  setOncallaccountname(value: string): DataProductSpec;

  getCompilation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): DataProductSpec;
  hasCompilation(): boolean;
  clearCompilation(): DataProductSpec;

  getClearencelevel(): string;
  setClearencelevel(value: string): DataProductSpec;

  getPriority(): string;
  setPriority(value: string): DataProductSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductSpec): DataProductSpec.AsObject;
  static serializeBinaryToWriter(message: DataProductSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductSpec;
  static deserializeBinaryFromReader(message: DataProductSpec, reader: jspb.BinaryReader): DataProductSpec;
}

export namespace DataProductSpec {
  export type AsObject = {
    owner: string,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    stakeholdersList: Array<StakeHolder.AsObject>,
    gitlocation?: GitLocation.AsObject,
    imagelocation?: ImageLocation.AsObject,
    labname: string,
    servingsitename: string,
    task: string,
    description: string,
    datalocation?: DataLocation.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    defaultworkloadclassname: string,
    retriesonfailure: number,
    kpisList: Array<KPI.AsObject>,
    oncallaccountname: string,
    compilation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
    clearencelevel: string,
    priority: string,
  }
}

export class DataProductStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataProductStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): DataProductStatus;

  getLaststudy(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLaststudy(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductStatus;
  hasLaststudy(): boolean;
  clearLaststudy(): DataProductStatus;

  getLastdataset(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastdataset(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductStatus;
  hasLastdataset(): boolean;
  clearLastdataset(): DataProductStatus;

  getLastprediction(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastprediction(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductStatus;
  hasLastprediction(): boolean;
  clearLastprediction(): DataProductStatus;

  getConditionsList(): Array<DataProductCondition>;
  setConditionsList(value: Array<DataProductCondition>): DataProductStatus;
  clearConditionsList(): DataProductStatus;
  addConditions(value?: DataProductCondition, index?: number): DataProductCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductStatus): DataProductStatus.AsObject;
  static serializeBinaryToWriter(message: DataProductStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductStatus;
  static deserializeBinaryFromReader(message: DataProductStatus, reader: jspb.BinaryReader): DataProductStatus;
}

export namespace DataProductStatus {
  export type AsObject = {
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    laststudy?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastdataset?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastprediction?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<DataProductCondition.AsObject>,
  }
}

export class DataProductVersion extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataProductVersion;
  hasMetadata(): boolean;
  clearMetadata(): DataProductVersion;

  getSpec(): DataProductVersionSpec | undefined;
  setSpec(value?: DataProductVersionSpec): DataProductVersion;
  hasSpec(): boolean;
  clearSpec(): DataProductVersion;

  getStatus(): DataProductVersionStatus | undefined;
  setStatus(value?: DataProductVersionStatus): DataProductVersion;
  hasStatus(): boolean;
  clearStatus(): DataProductVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersion.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersion): DataProductVersion.AsObject;
  static serializeBinaryToWriter(message: DataProductVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersion;
  static deserializeBinaryFromReader(message: DataProductVersion, reader: jspb.BinaryReader): DataProductVersion;
}

export namespace DataProductVersion {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataProductVersionSpec.AsObject,
    status?: DataProductVersionStatus.AsObject,
  }
}

export class DataProductVersionCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DataProductVersionCondition;

  getStatus(): string;
  setStatus(value: string): DataProductVersionCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductVersionCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DataProductVersionCondition;

  getReason(): string;
  setReason(value: string): DataProductVersionCondition;

  getMessage(): string;
  setMessage(value: string): DataProductVersionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersionCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersionCondition): DataProductVersionCondition.AsObject;
  static serializeBinaryToWriter(message: DataProductVersionCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersionCondition;
  static deserializeBinaryFromReader(message: DataProductVersionCondition, reader: jspb.BinaryReader): DataProductVersionCondition;
}

export namespace DataProductVersionCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class DataProductVersionList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataProductVersionList;
  hasMetadata(): boolean;
  clearMetadata(): DataProductVersionList;

  getItemsList(): Array<DataProductVersion>;
  setItemsList(value: Array<DataProductVersion>): DataProductVersionList;
  clearItemsList(): DataProductVersionList;
  addItems(value?: DataProductVersion, index?: number): DataProductVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersionList.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersionList): DataProductVersionList.AsObject;
  static serializeBinaryToWriter(message: DataProductVersionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersionList;
  static deserializeBinaryFromReader(message: DataProductVersionList, reader: jspb.BinaryReader): DataProductVersionList;
}

export namespace DataProductVersionList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataProductVersion.AsObject>,
  }
}

export class DataProductVersionSpec extends jspb.Message {
  getProductref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setProductref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataProductVersionSpec;
  hasProductref(): boolean;
  clearProductref(): DataProductVersionSpec;

  getDescription(): string;
  setDescription(value: string): DataProductVersionSpec;

  getPrevversionname(): string;
  setPrevversionname(value: string): DataProductVersionSpec;

  getBaseline(): boolean;
  setBaseline(value: boolean): DataProductVersionSpec;

  getOwner(): string;
  setOwner(value: string): DataProductVersionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersionSpec): DataProductVersionSpec.AsObject;
  static serializeBinaryToWriter(message: DataProductVersionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersionSpec;
  static deserializeBinaryFromReader(message: DataProductVersionSpec, reader: jspb.BinaryReader): DataProductVersionSpec;
}

export namespace DataProductVersionSpec {
  export type AsObject = {
    productref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description: string,
    prevversionname: string,
    baseline: boolean,
    owner: string,
  }
}

export class DataProductVersionStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataProductVersionStatus;

  getConditionsList(): Array<DataProductVersionCondition>;
  setConditionsList(value: Array<DataProductVersionCondition>): DataProductVersionStatus;
  clearConditionsList(): DataProductVersionStatus;
  addConditions(value?: DataProductVersionCondition, index?: number): DataProductVersionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersionStatus): DataProductVersionStatus.AsObject;
  static serializeBinaryToWriter(message: DataProductVersionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersionStatus;
  static deserializeBinaryFromReader(message: DataProductVersionStatus, reader: jspb.BinaryReader): DataProductVersionStatus;
}

export namespace DataProductVersionStatus {
  export type AsObject = {
    observedgeneration: number,
    conditionsList: Array<DataProductVersionCondition.AsObject>,
  }
}

export class DataSource extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataSource;
  hasMetadata(): boolean;
  clearMetadata(): DataSource;

  getSpec(): DataSourceSpec | undefined;
  setSpec(value?: DataSourceSpec): DataSource;
  hasSpec(): boolean;
  clearSpec(): DataSource;

  getStatus(): DataSourceStatus | undefined;
  setStatus(value?: DataSourceStatus): DataSource;
  hasStatus(): boolean;
  clearStatus(): DataSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSource.AsObject;
  static toObject(includeInstance: boolean, msg: DataSource): DataSource.AsObject;
  static serializeBinaryToWriter(message: DataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSource;
  static deserializeBinaryFromReader(message: DataSource, reader: jspb.BinaryReader): DataSource;
}

export namespace DataSource {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataSourceSpec.AsObject,
    status?: DataSourceStatus.AsObject,
  }
}

export class DataSourceCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DataSourceCondition;

  getStatus(): string;
  setStatus(value: string): DataSourceCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataSourceCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DataSourceCondition;

  getReason(): string;
  setReason(value: string): DataSourceCondition;

  getMessage(): string;
  setMessage(value: string): DataSourceCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceCondition): DataSourceCondition.AsObject;
  static serializeBinaryToWriter(message: DataSourceCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceCondition;
  static deserializeBinaryFromReader(message: DataSourceCondition, reader: jspb.BinaryReader): DataSourceCondition;
}

export namespace DataSourceCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class DataSourceList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataSourceList;
  hasMetadata(): boolean;
  clearMetadata(): DataSourceList;

  getItemsList(): Array<DataSource>;
  setItemsList(value: Array<DataSource>): DataSourceList;
  clearItemsList(): DataSourceList;
  addItems(value?: DataSource, index?: number): DataSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceList.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceList): DataSourceList.AsObject;
  static serializeBinaryToWriter(message: DataSourceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceList;
  static deserializeBinaryFromReader(message: DataSourceList, reader: jspb.BinaryReader): DataSourceList;
}

export namespace DataSourceList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataSource.AsObject>,
  }
}

export class DataSourceSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DataSourceSpec;

  getVersionname(): string;
  setVersionname(value: string): DataSourceSpec;

  getDescription(): string;
  setDescription(value: string): DataSourceSpec;

  getSchema(): Schema | undefined;
  setSchema(value?: Schema): DataSourceSpec;
  hasSchema(): boolean;
  clearSchema(): DataSourceSpec;

  getFiletype(): string;
  setFiletype(value: string): DataSourceSpec;

  getCsvfile(): CsvFileSpec | undefined;
  setCsvfile(value?: CsvFileSpec): DataSourceSpec;
  hasCsvfile(): boolean;
  clearCsvfile(): DataSourceSpec;

  getExcelnotebook(): ExcelNotebookSpec | undefined;
  setExcelnotebook(value?: ExcelNotebookSpec): DataSourceSpec;
  hasExcelnotebook(): boolean;
  clearExcelnotebook(): DataSourceSpec;

  getDatasettype(): string;
  setDatasettype(value: string): DataSourceSpec;

  getSample(): SampleSpec | undefined;
  setSample(value?: SampleSpec): DataSourceSpec;
  hasSample(): boolean;
  clearSample(): DataSourceSpec;

  getTask(): string;
  setTask(value: string): DataSourceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceSpec): DataSourceSpec.AsObject;
  static serializeBinaryToWriter(message: DataSourceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceSpec;
  static deserializeBinaryFromReader(message: DataSourceSpec, reader: jspb.BinaryReader): DataSourceSpec;
}

export namespace DataSourceSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    schema?: Schema.AsObject,
    filetype: string,
    csvfile?: CsvFileSpec.AsObject,
    excelnotebook?: ExcelNotebookSpec.AsObject,
    datasettype: string,
    sample?: SampleSpec.AsObject,
    task: string,
  }
}

export class DataSourceStatus extends jspb.Message {
  getCols(): number;
  setCols(value: number): DataSourceStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataSourceStatus;

  getLastdatasetcreated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastdatasetcreated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataSourceStatus;
  hasLastdatasetcreated(): boolean;
  clearLastdatasetcreated(): DataSourceStatus;

  getLastdatasetname(): string;
  setLastdatasetname(value: string): DataSourceStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataSourceStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): DataSourceStatus;

  getConditionsList(): Array<DataSourceCondition>;
  setConditionsList(value: Array<DataSourceCondition>): DataSourceStatus;
  clearConditionsList(): DataSourceStatus;
  addConditions(value?: DataSourceCondition, index?: number): DataSourceCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceStatus): DataSourceStatus.AsObject;
  static serializeBinaryToWriter(message: DataSourceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceStatus;
  static deserializeBinaryFromReader(message: DataSourceStatus, reader: jspb.BinaryReader): DataSourceStatus;
}

export namespace DataSourceStatus {
  export type AsObject = {
    cols: number,
    observedgeneration: number,
    lastdatasetcreated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastdatasetname: string,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<DataSourceCondition.AsObject>,
  }
}

export class DataValidationResult extends jspb.Message {
  getType(): string;
  setType(value: string): DataValidationResult;

  getColumn(): string;
  setColumn(value: string): DataValidationResult;

  getError(): string;
  setError(value: string): DataValidationResult;

  getPassed(): boolean;
  setPassed(value: boolean): DataValidationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataValidationResult.AsObject;
  static toObject(includeInstance: boolean, msg: DataValidationResult): DataValidationResult.AsObject;
  static serializeBinaryToWriter(message: DataValidationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataValidationResult;
  static deserializeBinaryFromReader(message: DataValidationResult, reader: jspb.BinaryReader): DataValidationResult;
}

export namespace DataValidationResult {
  export type AsObject = {
    type: string,
    column: string,
    error: string,
    passed: boolean,
  }
}

export class Dataset extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Dataset;
  hasMetadata(): boolean;
  clearMetadata(): Dataset;

  getSpec(): DatasetSpec | undefined;
  setSpec(value?: DatasetSpec): Dataset;
  hasSpec(): boolean;
  clearSpec(): Dataset;

  getStatus(): DatasetStatus | undefined;
  setStatus(value?: DatasetStatus): Dataset;
  hasStatus(): boolean;
  clearStatus(): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DatasetSpec.AsObject,
    status?: DatasetStatus.AsObject,
  }
}

export class DatasetCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DatasetCondition;

  getStatus(): string;
  setStatus(value: string): DatasetCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DatasetCondition;

  getReason(): string;
  setReason(value: string): DatasetCondition;

  getMessage(): string;
  setMessage(value: string): DatasetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetCondition): DatasetCondition.AsObject;
  static serializeBinaryToWriter(message: DatasetCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetCondition;
  static deserializeBinaryFromReader(message: DatasetCondition, reader: jspb.BinaryReader): DatasetCondition;
}

export namespace DatasetCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class DatasetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DatasetList;
  hasMetadata(): boolean;
  clearMetadata(): DatasetList;

  getItemsList(): Array<Dataset>;
  setItemsList(value: Array<Dataset>): DatasetList;
  clearItemsList(): DatasetList;
  addItems(value?: Dataset, index?: number): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetList.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetList): DatasetList.AsObject;
  static serializeBinaryToWriter(message: DatasetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetList;
  static deserializeBinaryFromReader(message: DatasetList, reader: jspb.BinaryReader): DatasetList;
}

export namespace DatasetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Dataset.AsObject>,
  }
}

export class DatasetSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DatasetSpec;

  getVersionname(): string;
  setVersionname(value: string): DatasetSpec;

  getDatasourcename(): string;
  setDatasourcename(value: string): DatasetSpec;

  getDescription(): string;
  setDescription(value: string): DatasetSpec;

  getDisplayname(): string;
  setDisplayname(value: string): DatasetSpec;

  getReported(): boolean;
  setReported(value: boolean): DatasetSpec;

  getSnapshotted(): boolean;
  setSnapshotted(value: boolean): DatasetSpec;

  getValidate(): boolean;
  setValidate(value: boolean): DatasetSpec;

  getLabeled(): boolean;
  setLabeled(value: boolean): DatasetSpec;

  getSyntactic(): boolean;
  setSyntactic(value: boolean): DatasetSpec;

  getSyntacticrows(): number;
  setSyntacticrows(value: number): DatasetSpec;

  getOrigin(): DataLocation | undefined;
  setOrigin(value?: DataLocation): DatasetSpec;
  hasOrigin(): boolean;
  clearOrigin(): DatasetSpec;

  getLocation(): DataLocation | undefined;
  setLocation(value?: DataLocation): DatasetSpec;
  hasLocation(): boolean;
  clearLocation(): DatasetSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): DatasetSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): DatasetSpec;

  getType(): string;
  setType(value: string): DatasetSpec;

  getSample(): SampleSpec | undefined;
  setSample(value?: SampleSpec): DatasetSpec;
  hasSample(): boolean;
  clearSample(): DatasetSpec;

  getTask(): string;
  setTask(value: string): DatasetSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): DatasetSpec;
  hasNotification(): boolean;
  clearNotification(): DatasetSpec;

  getCorrelation(): CorrelationSpec | undefined;
  setCorrelation(value?: CorrelationSpec): DatasetSpec;
  hasCorrelation(): boolean;
  clearCorrelation(): DatasetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetSpec): DatasetSpec.AsObject;
  static serializeBinaryToWriter(message: DatasetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetSpec;
  static deserializeBinaryFromReader(message: DatasetSpec, reader: jspb.BinaryReader): DatasetSpec;
}

export namespace DatasetSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    datasourcename: string,
    description: string,
    displayname: string,
    reported: boolean,
    snapshotted: boolean,
    validate: boolean,
    labeled: boolean,
    syntactic: boolean,
    syntacticrows: number,
    origin?: DataLocation.AsObject,
    location?: DataLocation.AsObject,
    workloadclassname: string,
    activedeadlineseconds: number,
    type: string,
    sample?: SampleSpec.AsObject,
    task: string,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    correlation?: CorrelationSpec.AsObject,
  }
}

export class DatasetStatistics extends jspb.Message {
  getColumnsList(): Array<ColumnStatistics>;
  setColumnsList(value: Array<ColumnStatistics>): DatasetStatistics;
  clearColumnsList(): DatasetStatistics;
  addColumns(value?: ColumnStatistics, index?: number): ColumnStatistics;

  getRows(): number;
  setRows(value: number): DatasetStatistics;

  getCols(): number;
  setCols(value: number): DatasetStatistics;

  getFilesize(): number;
  setFilesize(value: number): DatasetStatistics;

  getCorrelationsList(): Array<FeatureCorr>;
  setCorrelationsList(value: Array<FeatureCorr>): DatasetStatistics;
  clearCorrelationsList(): DatasetStatistics;
  addCorrelations(value?: FeatureCorr, index?: number): FeatureCorr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetStatistics): DatasetStatistics.AsObject;
  static serializeBinaryToWriter(message: DatasetStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetStatistics;
  static deserializeBinaryFromReader(message: DatasetStatistics, reader: jspb.BinaryReader): DatasetStatistics;
}

export namespace DatasetStatistics {
  export type AsObject = {
    columnsList: Array<ColumnStatistics.AsObject>,
    rows: number,
    cols: number,
    filesize: number,
    correlationsList: Array<FeatureCorr.AsObject>,
  }
}

export class DatasetStatus extends jspb.Message {
  getStatistics(): DatasetStatistics | undefined;
  setStatistics(value?: DatasetStatistics): DatasetStatus;
  hasStatistics(): boolean;
  clearStatistics(): DatasetStatus;

  getPhase(): string;
  setPhase(value: string): DatasetStatus;

  getReportname(): string;
  setReportname(value: string): DatasetStatus;

  getReporturi(): string;
  setReporturi(value: string): DatasetStatus;

  getProfileuri(): string;
  setProfileuri(value: string): DatasetStatus;

  getImbalanced(): boolean;
  setImbalanced(value: boolean): DatasetStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DatasetStatus;

  getValidationresultsList(): Array<DataValidationResult>;
  setValidationresultsList(value: Array<DataValidationResult>): DatasetStatus;
  clearValidationresultsList(): DatasetStatus;
  addValidationresults(value?: DataValidationResult, index?: number): DataValidationResult;

  getLaststudytime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLaststudytime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetStatus;
  hasLaststudytime(): boolean;
  clearLaststudytime(): DatasetStatus;

  getLastnotificationtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastnotificationtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetStatus;
  hasLastnotificationtime(): boolean;
  clearLastnotificationtime(): DatasetStatus;

  getLasterror(): string;
  setLasterror(value: string): DatasetStatus;

  getProgress(): number;
  setProgress(value: number): DatasetStatus;

  getHash(): string;
  setHash(value: string): DatasetStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): DatasetStatus;
  hasLogs(): boolean;
  clearLogs(): DatasetStatus;

  getConditionsList(): Array<DatasetCondition>;
  setConditionsList(value: Array<DatasetCondition>): DatasetStatus;
  clearConditionsList(): DatasetStatus;
  addConditions(value?: DatasetCondition, index?: number): DatasetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetStatus): DatasetStatus.AsObject;
  static serializeBinaryToWriter(message: DatasetStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetStatus;
  static deserializeBinaryFromReader(message: DatasetStatus, reader: jspb.BinaryReader): DatasetStatus;
}

export namespace DatasetStatus {
  export type AsObject = {
    statistics?: DatasetStatistics.AsObject,
    phase: string,
    reportname: string,
    reporturi: string,
    profileuri: string,
    imbalanced: boolean,
    observedgeneration: number,
    validationresultsList: Array<DataValidationResult.AsObject>,
    laststudytime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastnotificationtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lasterror: string,
    progress: number,
    hash: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    conditionsList: Array<DatasetCondition.AsObject>,
  }
}

export class DatasetTemplate extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DatasetTemplate;
  hasMetadata(): boolean;
  clearMetadata(): DatasetTemplate;

  getSpec(): DatasetSpec | undefined;
  setSpec(value?: DatasetSpec): DatasetTemplate;
  hasSpec(): boolean;
  clearSpec(): DatasetTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetTemplate): DatasetTemplate.AsObject;
  static serializeBinaryToWriter(message: DatasetTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetTemplate;
  static deserializeBinaryFromReader(message: DatasetTemplate, reader: jspb.BinaryReader): DatasetTemplate;
}

export namespace DatasetTemplate {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DatasetSpec.AsObject,
  }
}

export class DatasetValidation extends jspb.Message {
  getType(): string;
  setType(value: string): DatasetValidation;

  getValue(): number;
  setValue(value: number): DatasetValidation;

  getMin(): number;
  setMin(value: number): DatasetValidation;

  getMax(): number;
  setMax(value: number): DatasetValidation;

  getValuesetList(): Array<string>;
  setValuesetList(value: Array<string>): DatasetValidation;
  clearValuesetList(): DatasetValidation;
  addValueset(value: string, index?: number): DatasetValidation;

  getStrictmin(): boolean;
  setStrictmin(value: boolean): DatasetValidation;

  getStrictmax(): boolean;
  setStrictmax(value: boolean): DatasetValidation;

  getGenerated(): boolean;
  setGenerated(value: boolean): DatasetValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetValidation.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetValidation): DatasetValidation.AsObject;
  static serializeBinaryToWriter(message: DatasetValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetValidation;
  static deserializeBinaryFromReader(message: DatasetValidation, reader: jspb.BinaryReader): DatasetValidation;
}

export namespace DatasetValidation {
  export type AsObject = {
    type: string,
    value: number,
    min: number,
    max: number,
    valuesetList: Array<string>,
    strictmin: boolean,
    strictmax: boolean,
    generated: boolean,
  }
}

export class Entity extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Entity;
  hasMetadata(): boolean;
  clearMetadata(): Entity;

  getSpec(): EntitySpec | undefined;
  setSpec(value?: EntitySpec): Entity;
  hasSpec(): boolean;
  clearSpec(): Entity;

  getStatus(): EntityStatus | undefined;
  setStatus(value?: EntityStatus): Entity;
  hasStatus(): boolean;
  clearStatus(): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: EntitySpec.AsObject,
    status?: EntityStatus.AsObject,
  }
}

export class EntityCondition extends jspb.Message {
  getType(): string;
  setType(value: string): EntityCondition;

  getStatus(): string;
  setStatus(value: string): EntityCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): EntityCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): EntityCondition;

  getReason(): string;
  setReason(value: string): EntityCondition;

  getMessage(): string;
  setMessage(value: string): EntityCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityCondition.AsObject;
  static toObject(includeInstance: boolean, msg: EntityCondition): EntityCondition.AsObject;
  static serializeBinaryToWriter(message: EntityCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityCondition;
  static deserializeBinaryFromReader(message: EntityCondition, reader: jspb.BinaryReader): EntityCondition;
}

export namespace EntityCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class EntityList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): EntityList;
  hasMetadata(): boolean;
  clearMetadata(): EntityList;

  getItemsList(): Array<Entity>;
  setItemsList(value: Array<Entity>): EntityList;
  clearItemsList(): EntityList;
  addItems(value?: Entity, index?: number): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityList.AsObject;
  static toObject(includeInstance: boolean, msg: EntityList): EntityList.AsObject;
  static serializeBinaryToWriter(message: EntityList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityList;
  static deserializeBinaryFromReader(message: EntityList, reader: jspb.BinaryReader): EntityList;
}

export namespace EntityList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Entity.AsObject>,
  }
}

export class EntitySpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): EntitySpec;

  getDescription(): string;
  setDescription(value: string): EntitySpec;

  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): EntitySpec;
  clearKeysList(): EntitySpec;
  addKeys(value: string, index?: number): EntitySpec;

  getOwner(): string;
  setOwner(value: string): EntitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: EntitySpec): EntitySpec.AsObject;
  static serializeBinaryToWriter(message: EntitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntitySpec;
  static deserializeBinaryFromReader(message: EntitySpec, reader: jspb.BinaryReader): EntitySpec;
}

export namespace EntitySpec {
  export type AsObject = {
    versionname: string,
    description: string,
    keysList: Array<string>,
    owner: string,
  }
}

export class EntityStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): EntityStatus;

  getConditionsList(): Array<EntityCondition>;
  setConditionsList(value: Array<EntityCondition>): EntityStatus;
  clearConditionsList(): EntityStatus;
  addConditions(value?: EntityCondition, index?: number): EntityCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityStatus.AsObject;
  static toObject(includeInstance: boolean, msg: EntityStatus): EntityStatus.AsObject;
  static serializeBinaryToWriter(message: EntityStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityStatus;
  static deserializeBinaryFromReader(message: EntityStatus, reader: jspb.BinaryReader): EntityStatus;
}

export namespace EntityStatus {
  export type AsObject = {
    observedgeneration: number,
    conditionsList: Array<EntityCondition.AsObject>,
  }
}

export class ExcelNotebookSpec extends jspb.Message {
  getFirstsheetwithdata(): boolean;
  setFirstsheetwithdata(value: boolean): ExcelNotebookSpec;

  getSheetname(): string;
  setSheetname(value: string): ExcelNotebookSpec;

  getSheetindex(): number;
  setSheetindex(value: number): ExcelNotebookSpec;

  getColumnnamerow(): number;
  setColumnnamerow(value: number): ExcelNotebookSpec;

  getData(): ExcelSheetArea | undefined;
  setData(value?: ExcelSheetArea): ExcelNotebookSpec;
  hasData(): boolean;
  clearData(): ExcelNotebookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelNotebookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelNotebookSpec): ExcelNotebookSpec.AsObject;
  static serializeBinaryToWriter(message: ExcelNotebookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelNotebookSpec;
  static deserializeBinaryFromReader(message: ExcelNotebookSpec, reader: jspb.BinaryReader): ExcelNotebookSpec;
}

export namespace ExcelNotebookSpec {
  export type AsObject = {
    firstsheetwithdata: boolean,
    sheetname: string,
    sheetindex: number,
    columnnamerow: number,
    data?: ExcelSheetArea.AsObject,
  }
}

export class ExcelSheetArea extends jspb.Message {
  getEntiresheet(): boolean;
  setEntiresheet(value: boolean): ExcelSheetArea;

  getFromcolumn(): number;
  setFromcolumn(value: number): ExcelSheetArea;

  getTocolumn(): number;
  setTocolumn(value: number): ExcelSheetArea;

  getFromrow(): number;
  setFromrow(value: number): ExcelSheetArea;

  getTorow(): number;
  setTorow(value: number): ExcelSheetArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelSheetArea.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelSheetArea): ExcelSheetArea.AsObject;
  static serializeBinaryToWriter(message: ExcelSheetArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelSheetArea;
  static deserializeBinaryFromReader(message: ExcelSheetArea, reader: jspb.BinaryReader): ExcelSheetArea;
}

export namespace ExcelSheetArea {
  export type AsObject = {
    entiresheet: boolean,
    fromcolumn: number,
    tocolumn: number,
    fromrow: number,
    torow: number,
  }
}

export class Feature extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Feature;
  hasMetadata(): boolean;
  clearMetadata(): Feature;

  getSpec(): FeatureSpec | undefined;
  setSpec(value?: FeatureSpec): Feature;
  hasSpec(): boolean;
  clearSpec(): Feature;

  getStatus(): FeatureStatus | undefined;
  setStatus(value?: FeatureStatus): Feature;
  hasStatus(): boolean;
  clearStatus(): Feature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: FeatureSpec.AsObject,
    status?: FeatureStatus.AsObject,
  }
}

export class FeatureAggrSpec extends jspb.Message {
  getColumn(): string;
  setColumn(value: string): FeatureAggrSpec;

  getFunctionsList(): Array<string>;
  setFunctionsList(value: Array<string>): FeatureAggrSpec;
  clearFunctionsList(): FeatureAggrSpec;
  addFunctions(value: string, index?: number): FeatureAggrSpec;

  getWindowsList(): Array<string>;
  setWindowsList(value: Array<string>): FeatureAggrSpec;
  clearWindowsList(): FeatureAggrSpec;
  addWindows(value: string, index?: number): FeatureAggrSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureAggrSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureAggrSpec): FeatureAggrSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureAggrSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureAggrSpec;
  static deserializeBinaryFromReader(message: FeatureAggrSpec, reader: jspb.BinaryReader): FeatureAggrSpec;
}

export namespace FeatureAggrSpec {
  export type AsObject = {
    column: string,
    functionsList: Array<string>,
    windowsList: Array<string>,
  }
}

export class FeatureCondition extends jspb.Message {
  getType(): string;
  setType(value: string): FeatureCondition;

  getStatus(): string;
  setStatus(value: string): FeatureCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): FeatureCondition;

  getReason(): string;
  setReason(value: string): FeatureCondition;

  getMessage(): string;
  setMessage(value: string): FeatureCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureCondition.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureCondition): FeatureCondition.AsObject;
  static serializeBinaryToWriter(message: FeatureCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureCondition;
  static deserializeBinaryFromReader(message: FeatureCondition, reader: jspb.BinaryReader): FeatureCondition;
}

export namespace FeatureCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class FeatureCorr extends jspb.Message {
  getFeature1(): string;
  setFeature1(value: string): FeatureCorr;

  getFeature2(): string;
  setFeature2(value: string): FeatureCorr;

  getValue(): number;
  setValue(value: number): FeatureCorr;

  getMethod(): string;
  setMethod(value: string): FeatureCorr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureCorr.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureCorr): FeatureCorr.AsObject;
  static serializeBinaryToWriter(message: FeatureCorr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureCorr;
  static deserializeBinaryFromReader(message: FeatureCorr, reader: jspb.BinaryReader): FeatureCorr;
}

export namespace FeatureCorr {
  export type AsObject = {
    feature1: string,
    feature2: string,
    value: number,
    method: string,
  }
}

export class FeatureHistogram extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): FeatureHistogram;
  hasMetadata(): boolean;
  clearMetadata(): FeatureHistogram;

  getSpec(): FeatureHistogramSpec | undefined;
  setSpec(value?: FeatureHistogramSpec): FeatureHistogram;
  hasSpec(): boolean;
  clearSpec(): FeatureHistogram;

  getStatus(): FeatureHistogramStatus | undefined;
  setStatus(value?: FeatureHistogramStatus): FeatureHistogram;
  hasStatus(): boolean;
  clearStatus(): FeatureHistogram;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogram.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogram): FeatureHistogram.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogram, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogram;
  static deserializeBinaryFromReader(message: FeatureHistogram, reader: jspb.BinaryReader): FeatureHistogram;
}

export namespace FeatureHistogram {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: FeatureHistogramSpec.AsObject,
    status?: FeatureHistogramStatus.AsObject,
  }
}

export class FeatureHistogramCondition extends jspb.Message {
  getType(): string;
  setType(value: string): FeatureHistogramCondition;

  getStatus(): string;
  setStatus(value: string): FeatureHistogramCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureHistogramCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): FeatureHistogramCondition;

  getReason(): string;
  setReason(value: string): FeatureHistogramCondition;

  getMessage(): string;
  setMessage(value: string): FeatureHistogramCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogramCondition.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogramCondition): FeatureHistogramCondition.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogramCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogramCondition;
  static deserializeBinaryFromReader(message: FeatureHistogramCondition, reader: jspb.BinaryReader): FeatureHistogramCondition;
}

export namespace FeatureHistogramCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class FeatureHistogramList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): FeatureHistogramList;
  hasMetadata(): boolean;
  clearMetadata(): FeatureHistogramList;

  getItemsList(): Array<FeatureHistogram>;
  setItemsList(value: Array<FeatureHistogram>): FeatureHistogramList;
  clearItemsList(): FeatureHistogramList;
  addItems(value?: FeatureHistogram, index?: number): FeatureHistogram;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogramList.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogramList): FeatureHistogramList.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogramList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogramList;
  static deserializeBinaryFromReader(message: FeatureHistogramList, reader: jspb.BinaryReader): FeatureHistogramList;
}

export namespace FeatureHistogramList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<FeatureHistogram.AsObject>,
  }
}

export class FeatureHistogramSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): FeatureHistogramSpec;

  getVersionname(): string;
  setVersionname(value: string): FeatureHistogramSpec;

  getDescription(): string;
  setDescription(value: string): FeatureHistogramSpec;

  getColumn(): string;
  setColumn(value: string): FeatureHistogramSpec;

  getDatasetname(): string;
  setDatasetname(value: string): FeatureHistogramSpec;

  getBins(): number;
  setBins(value: number): FeatureHistogramSpec;

  getTtl(): number;
  setTtl(value: number): FeatureHistogramSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogramSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogramSpec): FeatureHistogramSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogramSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogramSpec;
  static deserializeBinaryFromReader(message: FeatureHistogramSpec, reader: jspb.BinaryReader): FeatureHistogramSpec;
}

export namespace FeatureHistogramSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    column: string,
    datasetname: string,
    bins: number,
    ttl: number,
  }
}

export class FeatureHistogramStatus extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): FeatureHistogramStatus;
  clearValuesList(): FeatureHistogramStatus;
  addValues(value: number, index?: number): FeatureHistogramStatus;

  getMissing(): number;
  setMissing(value: number): FeatureHistogramStatus;

  getInvalid(): number;
  setInvalid(value: number): FeatureHistogramStatus;

  getConditionsList(): Array<FeatureHistogramCondition>;
  setConditionsList(value: Array<FeatureHistogramCondition>): FeatureHistogramStatus;
  clearConditionsList(): FeatureHistogramStatus;
  addConditions(value?: FeatureHistogramCondition, index?: number): FeatureHistogramCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogramStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogramStatus): FeatureHistogramStatus.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogramStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogramStatus;
  static deserializeBinaryFromReader(message: FeatureHistogramStatus, reader: jspb.BinaryReader): FeatureHistogramStatus;
}

export namespace FeatureHistogramStatus {
  export type AsObject = {
    valuesList: Array<number>,
    missing: number,
    invalid: number,
    conditionsList: Array<FeatureHistogramCondition.AsObject>,
  }
}

export class FeatureList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): FeatureList;
  hasMetadata(): boolean;
  clearMetadata(): FeatureList;

  getItemsList(): Array<Feature>;
  setItemsList(value: Array<Feature>): FeatureList;
  clearItemsList(): FeatureList;
  addItems(value?: Feature, index?: number): Feature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureList.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureList): FeatureList.AsObject;
  static serializeBinaryToWriter(message: FeatureList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureList;
  static deserializeBinaryFromReader(message: FeatureList, reader: jspb.BinaryReader): FeatureList;
}

export namespace FeatureList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Feature.AsObject>,
  }
}

export class FeaturePipeline extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): FeaturePipeline;
  hasMetadata(): boolean;
  clearMetadata(): FeaturePipeline;

  getSpec(): FeaturePipelineSpec | undefined;
  setSpec(value?: FeaturePipelineSpec): FeaturePipeline;
  hasSpec(): boolean;
  clearSpec(): FeaturePipeline;

  getStatus(): FeaturePipelineStatus | undefined;
  setStatus(value?: FeaturePipelineStatus): FeaturePipeline;
  hasStatus(): boolean;
  clearStatus(): FeaturePipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipeline.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipeline): FeaturePipeline.AsObject;
  static serializeBinaryToWriter(message: FeaturePipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipeline;
  static deserializeBinaryFromReader(message: FeaturePipeline, reader: jspb.BinaryReader): FeaturePipeline;
}

export namespace FeaturePipeline {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: FeaturePipelineSpec.AsObject,
    status?: FeaturePipelineStatus.AsObject,
  }
}

export class FeaturePipelineCondition extends jspb.Message {
  getType(): string;
  setType(value: string): FeaturePipelineCondition;

  getStatus(): string;
  setStatus(value: string): FeaturePipelineCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturePipelineCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): FeaturePipelineCondition;

  getReason(): string;
  setReason(value: string): FeaturePipelineCondition;

  getMessage(): string;
  setMessage(value: string): FeaturePipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineCondition.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineCondition): FeaturePipelineCondition.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineCondition;
  static deserializeBinaryFromReader(message: FeaturePipelineCondition, reader: jspb.BinaryReader): FeaturePipelineCondition;
}

export namespace FeaturePipelineCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class FeaturePipelineList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): FeaturePipelineList;
  hasMetadata(): boolean;
  clearMetadata(): FeaturePipelineList;

  getItemsList(): Array<FeaturePipeline>;
  setItemsList(value: Array<FeaturePipeline>): FeaturePipelineList;
  clearItemsList(): FeaturePipelineList;
  addItems(value?: FeaturePipeline, index?: number): FeaturePipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineList.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineList): FeaturePipelineList.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineList;
  static deserializeBinaryFromReader(message: FeaturePipelineList, reader: jspb.BinaryReader): FeaturePipelineList;
}

export namespace FeaturePipelineList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<FeaturePipeline.AsObject>,
  }
}

export class FeaturePipelineRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): FeaturePipelineRun;
  hasMetadata(): boolean;
  clearMetadata(): FeaturePipelineRun;

  getSpec(): FeaturePipelineRunSpec | undefined;
  setSpec(value?: FeaturePipelineRunSpec): FeaturePipelineRun;
  hasSpec(): boolean;
  clearSpec(): FeaturePipelineRun;

  getStatus(): FeaturePipelineRunStatus | undefined;
  setStatus(value?: FeaturePipelineRunStatus): FeaturePipelineRun;
  hasStatus(): boolean;
  clearStatus(): FeaturePipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineRun.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineRun): FeaturePipelineRun.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineRun;
  static deserializeBinaryFromReader(message: FeaturePipelineRun, reader: jspb.BinaryReader): FeaturePipelineRun;
}

export namespace FeaturePipelineRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: FeaturePipelineRunSpec.AsObject,
    status?: FeaturePipelineRunStatus.AsObject,
  }
}

export class FeaturePipelineRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): FeaturePipelineRunCondition;

  getStatus(): string;
  setStatus(value: string): FeaturePipelineRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturePipelineRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): FeaturePipelineRunCondition;

  getReason(): string;
  setReason(value: string): FeaturePipelineRunCondition;

  getMessage(): string;
  setMessage(value: string): FeaturePipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineRunCondition): FeaturePipelineRunCondition.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineRunCondition;
  static deserializeBinaryFromReader(message: FeaturePipelineRunCondition, reader: jspb.BinaryReader): FeaturePipelineRunCondition;
}

export namespace FeaturePipelineRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class FeaturePipelineRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): FeaturePipelineRunList;
  hasMetadata(): boolean;
  clearMetadata(): FeaturePipelineRunList;

  getItemsList(): Array<FeaturePipelineRun>;
  setItemsList(value: Array<FeaturePipelineRun>): FeaturePipelineRunList;
  clearItemsList(): FeaturePipelineRunList;
  addItems(value?: FeaturePipelineRun, index?: number): FeaturePipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineRunList.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineRunList): FeaturePipelineRunList.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineRunList;
  static deserializeBinaryFromReader(message: FeaturePipelineRunList, reader: jspb.BinaryReader): FeaturePipelineRunList;
}

export namespace FeaturePipelineRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<FeaturePipelineRun.AsObject>,
  }
}

export class FeaturePipelineRunSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): FeaturePipelineRunSpec;

  getVersionname(): string;
  setVersionname(value: string): FeaturePipelineRunSpec;

  getFeaturepipelinename(): string;
  setFeaturepipelinename(value: string): FeaturePipelineRunSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): FeaturePipelineRunSpec;

  getTtl(): number;
  setTtl(value: number): FeaturePipelineRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineRunSpec): FeaturePipelineRunSpec.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineRunSpec;
  static deserializeBinaryFromReader(message: FeaturePipelineRunSpec, reader: jspb.BinaryReader): FeaturePipelineRunSpec;
}

export namespace FeaturePipelineRunSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    featurepipelinename: string,
    workloadclassname: string,
    ttl: number,
  }
}

export class FeaturePipelineRunStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturePipelineRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): FeaturePipelineRunStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturePipelineRunStatus;
  hasEndtime(): boolean;
  clearEndtime(): FeaturePipelineRunStatus;

  getPhase(): string;
  setPhase(value: string): FeaturePipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): FeaturePipelineRunStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): FeaturePipelineRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): FeaturePipelineRunStatus;
  hasLogs(): boolean;
  clearLogs(): FeaturePipelineRunStatus;

  getConditionsList(): Array<FeaturePipelineRunCondition>;
  setConditionsList(value: Array<FeaturePipelineRunCondition>): FeaturePipelineRunStatus;
  clearConditionsList(): FeaturePipelineRunStatus;
  addConditions(value?: FeaturePipelineRunCondition, index?: number): FeaturePipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineRunStatus): FeaturePipelineRunStatus.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineRunStatus;
  static deserializeBinaryFromReader(message: FeaturePipelineRunStatus, reader: jspb.BinaryReader): FeaturePipelineRunStatus;
}

export namespace FeaturePipelineRunStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
    triggeredby: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    conditionsList: Array<FeaturePipelineRunCondition.AsObject>,
  }
}

export class FeaturePipelineSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): FeaturePipelineSpec;

  getDatasetselectorMap(): jspb.Map<string, string>;
  clearDatasetselectorMap(): FeaturePipelineSpec;

  getVersionname(): string;
  setVersionname(value: string): FeaturePipelineSpec;

  getDescription(): string;
  setDescription(value: string): FeaturePipelineSpec;

  getAggregation(): AggregationSpec | undefined;
  setAggregation(value?: AggregationSpec): FeaturePipelineSpec;
  hasAggregation(): boolean;
  clearAggregation(): FeaturePipelineSpec;

  getMaterialization(): MaterializationSpec | undefined;
  setMaterialization(value?: MaterializationSpec): FeaturePipelineSpec;
  hasMaterialization(): boolean;
  clearMaterialization(): FeaturePipelineSpec;

  getFamily(): string;
  setFamily(value: string): FeaturePipelineSpec;

  getEntityname(): string;
  setEntityname(value: string): FeaturePipelineSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): FeaturePipelineSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): FeaturePipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): FeaturePipelineSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): FeaturePipelineSpec;

  getPaused(): boolean;
  setPaused(value: boolean): FeaturePipelineSpec;

  getTtl(): number;
  setTtl(value: number): FeaturePipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineSpec): FeaturePipelineSpec.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineSpec;
  static deserializeBinaryFromReader(message: FeaturePipelineSpec, reader: jspb.BinaryReader): FeaturePipelineSpec;
}

export namespace FeaturePipelineSpec {
  export type AsObject = {
    owner: string,
    datasetselectorMap: Array<[string, string]>,
    versionname: string,
    description: string,
    aggregation?: AggregationSpec.AsObject,
    materialization?: MaterializationSpec.AsObject,
    family: string,
    entityname: string,
    workloadclassname: string,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    activedeadlineseconds: number,
    paused: boolean,
    ttl: number,
  }
}

export class FeaturePipelineStatus extends jspb.Message {
  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturePipelineStatus;
  hasLastrun(): boolean;
  clearLastrun(): FeaturePipelineStatus;

  getAveragecost(): number;
  setAveragecost(value: number): FeaturePipelineStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): FeaturePipelineStatus;

  getConditionsList(): Array<FeaturePipelineCondition>;
  setConditionsList(value: Array<FeaturePipelineCondition>): FeaturePipelineStatus;
  clearConditionsList(): FeaturePipelineStatus;
  addConditions(value?: FeaturePipelineCondition, index?: number): FeaturePipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePipelineStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePipelineStatus): FeaturePipelineStatus.AsObject;
  static serializeBinaryToWriter(message: FeaturePipelineStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePipelineStatus;
  static deserializeBinaryFromReader(message: FeaturePipelineStatus, reader: jspb.BinaryReader): FeaturePipelineStatus;
}

export namespace FeaturePipelineStatus {
  export type AsObject = {
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    averagecost: number,
    observedgeneration: number,
    conditionsList: Array<FeaturePipelineCondition.AsObject>,
  }
}

export class FeatureSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): FeatureSpec;

  getVersionname(): string;
  setVersionname(value: string): FeatureSpec;

  getDescription(): string;
  setDescription(value: string): FeatureSpec;

  getKeycolumn(): string;
  setKeycolumn(value: string): FeatureSpec;

  getTimestampcolumn(): string;
  setTimestampcolumn(value: string): FeatureSpec;

  getFeaturecolumn(): string;
  setFeaturecolumn(value: string): FeatureSpec;

  getEntityname(): string;
  setEntityname(value: string): FeatureSpec;

  getFeaturepipelinename(): string;
  setFeaturepipelinename(value: string): FeatureSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureSpec): FeatureSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureSpec;
  static deserializeBinaryFromReader(message: FeatureSpec, reader: jspb.BinaryReader): FeatureSpec;
}

export namespace FeatureSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    keycolumn: string,
    timestampcolumn: string,
    featurecolumn: string,
    entityname: string,
    featurepipelinename: string,
  }
}

export class FeatureStatus extends jspb.Message {
  getMin(): number;
  setMin(value: number): FeatureStatus;

  getMax(): number;
  setMax(value: number): FeatureStatus;

  getMean(): number;
  setMean(value: number): FeatureStatus;

  getStddev(): number;
  setStddev(value: number): FeatureStatus;

  getSkewness(): number;
  setSkewness(value: number): FeatureStatus;

  getKurtosis(): number;
  setKurtosis(value: number): FeatureStatus;

  getZeros(): number;
  setZeros(value: number): FeatureStatus;

  getP25(): number;
  setP25(value: number): FeatureStatus;

  getP50(): number;
  setP50(value: number): FeatureStatus;

  getP75(): number;
  setP75(value: number): FeatureStatus;

  getMissing(): number;
  setMissing(value: number): FeatureStatus;

  getInvalid(): number;
  setInvalid(value: number): FeatureStatus;

  getTarget(): boolean;
  setTarget(value: boolean): FeatureStatus;

  getImportance(): number;
  setImportance(value: number): FeatureStatus;

  getDistinc(): number;
  setDistinc(value: number): FeatureStatus;

  getIgnored(): boolean;
  setIgnored(value: boolean): FeatureStatus;

  getNullable(): boolean;
  setNullable(value: boolean): FeatureStatus;

  getHighcred(): boolean;
  setHighcred(value: boolean): FeatureStatus;

  getHighcorr(): boolean;
  setHighcorr(value: boolean): FeatureStatus;

  getSkew(): boolean;
  setSkew(value: boolean): FeatureStatus;

  getCompleteness(): number;
  setCompleteness(value: number): FeatureStatus;

  getDistinctvaluecount(): number;
  setDistinctvaluecount(value: number): FeatureStatus;

  getMostfreqvaluesratio(): number;
  setMostfreqvaluesratio(value: number): FeatureStatus;

  getIndexofpeculiarity(): number;
  setIndexofpeculiarity(value: number): FeatureStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): FeatureStatus;

  getConditionsList(): Array<FeatureCondition>;
  setConditionsList(value: Array<FeatureCondition>): FeatureStatus;
  clearConditionsList(): FeatureStatus;
  addConditions(value?: FeatureCondition, index?: number): FeatureCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureStatus): FeatureStatus.AsObject;
  static serializeBinaryToWriter(message: FeatureStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureStatus;
  static deserializeBinaryFromReader(message: FeatureStatus, reader: jspb.BinaryReader): FeatureStatus;
}

export namespace FeatureStatus {
  export type AsObject = {
    min: number,
    max: number,
    mean: number,
    stddev: number,
    skewness: number,
    kurtosis: number,
    zeros: number,
    p25: number,
    p50: number,
    p75: number,
    missing: number,
    invalid: number,
    target: boolean,
    importance: number,
    distinc: number,
    ignored: boolean,
    nullable: boolean,
    highcred: boolean,
    highcorr: boolean,
    skew: boolean,
    completeness: number,
    distinctvaluecount: number,
    mostfreqvaluesratio: number,
    indexofpeculiarity: number,
    observedgeneration: number,
    conditionsList: Array<FeatureCondition.AsObject>,
  }
}

export class Featureset extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Featureset;
  hasMetadata(): boolean;
  clearMetadata(): Featureset;

  getSpec(): FeaturesetSpec | undefined;
  setSpec(value?: FeaturesetSpec): Featureset;
  hasSpec(): boolean;
  clearSpec(): Featureset;

  getStatus(): FeaturesetStatus | undefined;
  setStatus(value?: FeaturesetStatus): Featureset;
  hasStatus(): boolean;
  clearStatus(): Featureset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Featureset.AsObject;
  static toObject(includeInstance: boolean, msg: Featureset): Featureset.AsObject;
  static serializeBinaryToWriter(message: Featureset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Featureset;
  static deserializeBinaryFromReader(message: Featureset, reader: jspb.BinaryReader): Featureset;
}

export namespace Featureset {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: FeaturesetSpec.AsObject,
    status?: FeaturesetStatus.AsObject,
  }
}

export class FeaturesetCondition extends jspb.Message {
  getType(): string;
  setType(value: string): FeaturesetCondition;

  getStatus(): string;
  setStatus(value: string): FeaturesetCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturesetCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): FeaturesetCondition;

  getReason(): string;
  setReason(value: string): FeaturesetCondition;

  getMessage(): string;
  setMessage(value: string): FeaturesetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturesetCondition.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturesetCondition): FeaturesetCondition.AsObject;
  static serializeBinaryToWriter(message: FeaturesetCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturesetCondition;
  static deserializeBinaryFromReader(message: FeaturesetCondition, reader: jspb.BinaryReader): FeaturesetCondition;
}

export namespace FeaturesetCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class FeaturesetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): FeaturesetList;
  hasMetadata(): boolean;
  clearMetadata(): FeaturesetList;

  getItemsList(): Array<Featureset>;
  setItemsList(value: Array<Featureset>): FeaturesetList;
  clearItemsList(): FeaturesetList;
  addItems(value?: Featureset, index?: number): Featureset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturesetList.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturesetList): FeaturesetList.AsObject;
  static serializeBinaryToWriter(message: FeaturesetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturesetList;
  static deserializeBinaryFromReader(message: FeaturesetList, reader: jspb.BinaryReader): FeaturesetList;
}

export namespace FeaturesetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Featureset.AsObject>,
  }
}

export class FeaturesetSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): FeaturesetSpec;

  getDescription(): string;
  setDescription(value: string): FeaturesetSpec;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): FeaturesetSpec;
  clearFeaturesList(): FeaturesetSpec;
  addFeatures(value: string, index?: number): FeaturesetSpec;

  getOwner(): string;
  setOwner(value: string): FeaturesetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturesetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturesetSpec): FeaturesetSpec.AsObject;
  static serializeBinaryToWriter(message: FeaturesetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturesetSpec;
  static deserializeBinaryFromReader(message: FeaturesetSpec, reader: jspb.BinaryReader): FeaturesetSpec;
}

export namespace FeaturesetSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    featuresList: Array<string>,
    owner: string,
  }
}

export class FeaturesetStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): FeaturesetStatus;

  getConditionsList(): Array<FeaturesetCondition>;
  setConditionsList(value: Array<FeaturesetCondition>): FeaturesetStatus;
  clearConditionsList(): FeaturesetStatus;
  addConditions(value?: FeaturesetCondition, index?: number): FeaturesetCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturesetStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturesetStatus): FeaturesetStatus.AsObject;
  static serializeBinaryToWriter(message: FeaturesetStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturesetStatus;
  static deserializeBinaryFromReader(message: FeaturesetStatus, reader: jspb.BinaryReader): FeaturesetStatus;
}

export namespace FeaturesetStatus {
  export type AsObject = {
    observedgeneration: number,
    conditionsList: Array<FeaturesetCondition.AsObject>,
  }
}

export class FileValidation extends jspb.Message {
  getType(): string;
  setType(value: string): FileValidation;

  getBucketname(): string;
  setBucketname(value: string): FileValidation;

  getColumn(): string;
  setColumn(value: string): FileValidation;

  getValue(): number;
  setValue(value: number): FileValidation;

  getMin(): number;
  setMin(value: number): FileValidation;

  getMax(): number;
  setMax(value: number): FileValidation;

  getValuesetList(): Array<string>;
  setValuesetList(value: Array<string>): FileValidation;
  clearValuesetList(): FileValidation;
  addValueset(value: string, index?: number): FileValidation;

  getStrictmin(): boolean;
  setStrictmin(value: boolean): FileValidation;

  getStrictmax(): boolean;
  setStrictmax(value: boolean): FileValidation;

  getGenerated(): boolean;
  setGenerated(value: boolean): FileValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileValidation.AsObject;
  static toObject(includeInstance: boolean, msg: FileValidation): FileValidation.AsObject;
  static serializeBinaryToWriter(message: FileValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileValidation;
  static deserializeBinaryFromReader(message: FileValidation, reader: jspb.BinaryReader): FileValidation;
}

export namespace FileValidation {
  export type AsObject = {
    type: string,
    bucketname: string,
    column: string,
    value: number,
    min: number,
    max: number,
    valuesetList: Array<string>,
    strictmin: boolean,
    strictmax: boolean,
    generated: boolean,
  }
}

export class GitLocation extends jspb.Message {
  getGitconnectionname(): string;
  setGitconnectionname(value: string): GitLocation;

  getUrl(): string;
  setUrl(value: string): GitLocation;

  getBranch(): string;
  setBranch(value: string): GitLocation;

  getPrivate(): boolean;
  setPrivate(value: boolean): GitLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitLocation.AsObject;
  static toObject(includeInstance: boolean, msg: GitLocation): GitLocation.AsObject;
  static serializeBinaryToWriter(message: GitLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitLocation;
  static deserializeBinaryFromReader(message: GitLocation, reader: jspb.BinaryReader): GitLocation;
}

export namespace GitLocation {
  export type AsObject = {
    gitconnectionname: string,
    url: string,
    branch: string,
    pb_private: boolean,
  }
}

export class ImageLocation extends jspb.Message {
  getName(): string;
  setName(value: string): ImageLocation;

  getRegistryconnectionname(): string;
  setRegistryconnectionname(value: string): ImageLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ImageLocation): ImageLocation.AsObject;
  static serializeBinaryToWriter(message: ImageLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageLocation;
  static deserializeBinaryFromReader(message: ImageLocation, reader: jspb.BinaryReader): ImageLocation;
}

export namespace ImageLocation {
  export type AsObject = {
    name: string,
    registryconnectionname: string,
  }
}

export class KPI extends jspb.Message {
  getName(): string;
  setName(value: string): KPI;

  getValue(): number;
  setValue(value: number): KPI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KPI.AsObject;
  static toObject(includeInstance: boolean, msg: KPI): KPI.AsObject;
  static serializeBinaryToWriter(message: KPI, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KPI;
  static deserializeBinaryFromReader(message: KPI, reader: jspb.BinaryReader): KPI;
}

export namespace KPI {
  export type AsObject = {
    name: string,
    value: number,
  }
}

export class LabelingPipeline extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): LabelingPipeline;
  hasMetadata(): boolean;
  clearMetadata(): LabelingPipeline;

  getSpec(): LabelingPipelineSpec | undefined;
  setSpec(value?: LabelingPipelineSpec): LabelingPipeline;
  hasSpec(): boolean;
  clearSpec(): LabelingPipeline;

  getStatus(): LabelingPipelineStatus | undefined;
  setStatus(value?: LabelingPipelineStatus): LabelingPipeline;
  hasStatus(): boolean;
  clearStatus(): LabelingPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipeline): LabelingPipeline.AsObject;
  static serializeBinaryToWriter(message: LabelingPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipeline;
  static deserializeBinaryFromReader(message: LabelingPipeline, reader: jspb.BinaryReader): LabelingPipeline;
}

export namespace LabelingPipeline {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: LabelingPipelineSpec.AsObject,
    status?: LabelingPipelineStatus.AsObject,
  }
}

export class LabelingPipelineCondition extends jspb.Message {
  getType(): string;
  setType(value: string): LabelingPipelineCondition;

  getStatus(): string;
  setStatus(value: string): LabelingPipelineCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabelingPipelineCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): LabelingPipelineCondition;

  getReason(): string;
  setReason(value: string): LabelingPipelineCondition;

  getMessage(): string;
  setMessage(value: string): LabelingPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineCondition.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineCondition): LabelingPipelineCondition.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineCondition;
  static deserializeBinaryFromReader(message: LabelingPipelineCondition, reader: jspb.BinaryReader): LabelingPipelineCondition;
}

export namespace LabelingPipelineCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class LabelingPipelineList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): LabelingPipelineList;
  hasMetadata(): boolean;
  clearMetadata(): LabelingPipelineList;

  getItemsList(): Array<LabelingPipeline>;
  setItemsList(value: Array<LabelingPipeline>): LabelingPipelineList;
  clearItemsList(): LabelingPipelineList;
  addItems(value?: LabelingPipeline, index?: number): LabelingPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineList.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineList): LabelingPipelineList.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineList;
  static deserializeBinaryFromReader(message: LabelingPipelineList, reader: jspb.BinaryReader): LabelingPipelineList;
}

export namespace LabelingPipelineList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<LabelingPipeline.AsObject>,
  }
}

export class LabelingPipelineRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): LabelingPipelineRun;
  hasMetadata(): boolean;
  clearMetadata(): LabelingPipelineRun;

  getSpec(): LabelingPipelineRunSpec | undefined;
  setSpec(value?: LabelingPipelineRunSpec): LabelingPipelineRun;
  hasSpec(): boolean;
  clearSpec(): LabelingPipelineRun;

  getStatus(): LabelingPipelineRunStatus | undefined;
  setStatus(value?: LabelingPipelineRunStatus): LabelingPipelineRun;
  hasStatus(): boolean;
  clearStatus(): LabelingPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineRun.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineRun): LabelingPipelineRun.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineRun;
  static deserializeBinaryFromReader(message: LabelingPipelineRun, reader: jspb.BinaryReader): LabelingPipelineRun;
}

export namespace LabelingPipelineRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: LabelingPipelineRunSpec.AsObject,
    status?: LabelingPipelineRunStatus.AsObject,
  }
}

export class LabelingPipelineRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): LabelingPipelineRunCondition;

  getStatus(): string;
  setStatus(value: string): LabelingPipelineRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabelingPipelineRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): LabelingPipelineRunCondition;

  getReason(): string;
  setReason(value: string): LabelingPipelineRunCondition;

  getMessage(): string;
  setMessage(value: string): LabelingPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineRunCondition): LabelingPipelineRunCondition.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineRunCondition;
  static deserializeBinaryFromReader(message: LabelingPipelineRunCondition, reader: jspb.BinaryReader): LabelingPipelineRunCondition;
}

export namespace LabelingPipelineRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class LabelingPipelineRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): LabelingPipelineRunList;
  hasMetadata(): boolean;
  clearMetadata(): LabelingPipelineRunList;

  getItemsList(): Array<LabelingPipelineRun>;
  setItemsList(value: Array<LabelingPipelineRun>): LabelingPipelineRunList;
  clearItemsList(): LabelingPipelineRunList;
  addItems(value?: LabelingPipelineRun, index?: number): LabelingPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineRunList.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineRunList): LabelingPipelineRunList.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineRunList;
  static deserializeBinaryFromReader(message: LabelingPipelineRunList, reader: jspb.BinaryReader): LabelingPipelineRunList;
}

export namespace LabelingPipelineRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<LabelingPipelineRun.AsObject>,
  }
}

export class LabelingPipelineRunSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): LabelingPipelineRunSpec;

  getVersionname(): string;
  setVersionname(value: string): LabelingPipelineRunSpec;

  getLabelpipelinename(): string;
  setLabelpipelinename(value: string): LabelingPipelineRunSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): LabelingPipelineRunSpec;

  getTtl(): number;
  setTtl(value: number): LabelingPipelineRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineRunSpec): LabelingPipelineRunSpec.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineRunSpec;
  static deserializeBinaryFromReader(message: LabelingPipelineRunSpec, reader: jspb.BinaryReader): LabelingPipelineRunSpec;
}

export namespace LabelingPipelineRunSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    labelpipelinename: string,
    workloadclassname: string,
    ttl: number,
  }
}

export class LabelingPipelineRunStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): LabelingPipelineRunStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabelingPipelineRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): LabelingPipelineRunStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabelingPipelineRunStatus;
  hasEndtime(): boolean;
  clearEndtime(): LabelingPipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): LabelingPipelineRunStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): LabelingPipelineRunStatus;

  getConditionsList(): Array<LabelingPipelineRunCondition>;
  setConditionsList(value: Array<LabelingPipelineRunCondition>): LabelingPipelineRunStatus;
  clearConditionsList(): LabelingPipelineRunStatus;
  addConditions(value?: LabelingPipelineRunCondition, index?: number): LabelingPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineRunStatus): LabelingPipelineRunStatus.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineRunStatus;
  static deserializeBinaryFromReader(message: LabelingPipelineRunStatus, reader: jspb.BinaryReader): LabelingPipelineRunStatus;
}

export namespace LabelingPipelineRunStatus {
  export type AsObject = {
    phase: string,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    triggeredby: string,
    conditionsList: Array<LabelingPipelineRunCondition.AsObject>,
  }
}

export class LabelingPipelineSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): LabelingPipelineSpec;

  getDescription(): string;
  setDescription(value: string): LabelingPipelineSpec;

  getDatasetselectorMap(): jspb.Map<string, string>;
  clearDatasetselectorMap(): LabelingPipelineSpec;

  getRecipenamesList(): Array<string>;
  setRecipenamesList(value: Array<string>): LabelingPipelineSpec;
  clearRecipenamesList(): LabelingPipelineSpec;
  addRecipenames(value: string, index?: number): LabelingPipelineSpec;

  getOutputlabelset(): string;
  setOutputlabelset(value: string): LabelingPipelineSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): LabelingPipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): LabelingPipelineSpec;

  getOwner(): string;
  setOwner(value: string): LabelingPipelineSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): LabelingPipelineSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): LabelingPipelineSpec;

  getPaused(): boolean;
  setPaused(value: boolean): LabelingPipelineSpec;

  getTtl(): number;
  setTtl(value: number): LabelingPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineSpec): LabelingPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineSpec;
  static deserializeBinaryFromReader(message: LabelingPipelineSpec, reader: jspb.BinaryReader): LabelingPipelineSpec;
}

export namespace LabelingPipelineSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    datasetselectorMap: Array<[string, string]>,
    recipenamesList: Array<string>,
    outputlabelset: string,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    owner: string,
    workloadclassname: string,
    activedeadlineseconds: number,
    paused: boolean,
    ttl: number,
  }
}

export class LabelingPipelineStatus extends jspb.Message {
  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabelingPipelineStatus;
  hasLastrun(): boolean;
  clearLastrun(): LabelingPipelineStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): LabelingPipelineStatus;

  getConditionsList(): Array<LabelingPipelineCondition>;
  setConditionsList(value: Array<LabelingPipelineCondition>): LabelingPipelineStatus;
  clearConditionsList(): LabelingPipelineStatus;
  addConditions(value?: LabelingPipelineCondition, index?: number): LabelingPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingPipelineStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingPipelineStatus): LabelingPipelineStatus.AsObject;
  static serializeBinaryToWriter(message: LabelingPipelineStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingPipelineStatus;
  static deserializeBinaryFromReader(message: LabelingPipelineStatus, reader: jspb.BinaryReader): LabelingPipelineStatus;
}

export namespace LabelingPipelineStatus {
  export type AsObject = {
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    conditionsList: Array<LabelingPipelineCondition.AsObject>,
  }
}

export class MaterializationSpec extends jspb.Message {
  getOnline(): boolean;
  setOnline(value: boolean): MaterializationSpec;

  getOffline(): boolean;
  setOffline(value: boolean): MaterializationSpec;

  getStartdate(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartdate(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): MaterializationSpec;
  hasStartdate(): boolean;
  clearStartdate(): MaterializationSpec;

  getScheduleinterval(): string;
  setScheduleinterval(value: string): MaterializationSpec;

  getTtl(): number;
  setTtl(value: number): MaterializationSpec;

  getBackfill(): number;
  setBackfill(value: number): MaterializationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaterializationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MaterializationSpec): MaterializationSpec.AsObject;
  static serializeBinaryToWriter(message: MaterializationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaterializationSpec;
  static deserializeBinaryFromReader(message: MaterializationSpec, reader: jspb.BinaryReader): MaterializationSpec;
}

export namespace MaterializationSpec {
  export type AsObject = {
    online: boolean,
    offline: boolean,
    startdate?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    scheduleinterval: string,
    ttl: number,
    backfill: number,
  }
}

export class MultiColumnValidation extends jspb.Message {
  getType(): string;
  setType(value: string): MultiColumnValidation;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): MultiColumnValidation;
  clearColumnsList(): MultiColumnValidation;
  addColumns(value: string, index?: number): MultiColumnValidation;

  getValue(): number;
  setValue(value: number): MultiColumnValidation;

  getMin(): number;
  setMin(value: number): MultiColumnValidation;

  getMax(): number;
  setMax(value: number): MultiColumnValidation;

  getValuesetList(): Array<string>;
  setValuesetList(value: Array<string>): MultiColumnValidation;
  clearValuesetList(): MultiColumnValidation;
  addValueset(value: string, index?: number): MultiColumnValidation;

  getStrictmin(): boolean;
  setStrictmin(value: boolean): MultiColumnValidation;

  getStrictmax(): boolean;
  setStrictmax(value: boolean): MultiColumnValidation;

  getGenerated(): boolean;
  setGenerated(value: boolean): MultiColumnValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiColumnValidation.AsObject;
  static toObject(includeInstance: boolean, msg: MultiColumnValidation): MultiColumnValidation.AsObject;
  static serializeBinaryToWriter(message: MultiColumnValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiColumnValidation;
  static deserializeBinaryFromReader(message: MultiColumnValidation, reader: jspb.BinaryReader): MultiColumnValidation;
}

export namespace MultiColumnValidation {
  export type AsObject = {
    type: string,
    columnsList: Array<string>,
    value: number,
    min: number,
    max: number,
    valuesetList: Array<string>,
    strictmin: boolean,
    strictmax: boolean,
    generated: boolean,
  }
}

export class MultiDatasetValidation extends jspb.Message {
  getType(): string;
  setType(value: string): MultiDatasetValidation;

  getDatasetsList(): Array<string>;
  setDatasetsList(value: Array<string>): MultiDatasetValidation;
  clearDatasetsList(): MultiDatasetValidation;
  addDatasets(value: string, index?: number): MultiDatasetValidation;

  getGenerated(): boolean;
  setGenerated(value: boolean): MultiDatasetValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiDatasetValidation.AsObject;
  static toObject(includeInstance: boolean, msg: MultiDatasetValidation): MultiDatasetValidation.AsObject;
  static serializeBinaryToWriter(message: MultiDatasetValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiDatasetValidation;
  static deserializeBinaryFromReader(message: MultiDatasetValidation, reader: jspb.BinaryReader): MultiDatasetValidation;
}

export namespace MultiDatasetValidation {
  export type AsObject = {
    type: string,
    datasetsList: Array<string>,
    generated: boolean,
  }
}

export class Recipe extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Recipe;
  hasMetadata(): boolean;
  clearMetadata(): Recipe;

  getSpec(): RecipeSpec | undefined;
  setSpec(value?: RecipeSpec): Recipe;
  hasSpec(): boolean;
  clearSpec(): Recipe;

  getStatus(): RecipeStatus | undefined;
  setStatus(value?: RecipeStatus): Recipe;
  hasStatus(): boolean;
  clearStatus(): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recipe.AsObject;
  static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
  static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recipe;
  static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: RecipeSpec.AsObject,
    status?: RecipeStatus.AsObject,
  }
}

export class RecipeCondition extends jspb.Message {
  getType(): string;
  setType(value: string): RecipeCondition;

  getStatus(): string;
  setStatus(value: string): RecipeCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): RecipeCondition;

  getReason(): string;
  setReason(value: string): RecipeCondition;

  getMessage(): string;
  setMessage(value: string): RecipeCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeCondition.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeCondition): RecipeCondition.AsObject;
  static serializeBinaryToWriter(message: RecipeCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeCondition;
  static deserializeBinaryFromReader(message: RecipeCondition, reader: jspb.BinaryReader): RecipeCondition;
}

export namespace RecipeCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class RecipeInputSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): RecipeInputSpec;

  getLocation(): DataLocation | undefined;
  setLocation(value?: DataLocation): RecipeInputSpec;
  hasLocation(): boolean;
  clearLocation(): RecipeInputSpec;

  getFormat(): string;
  setFormat(value: string): RecipeInputSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeInputSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeInputSpec): RecipeInputSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeInputSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeInputSpec;
  static deserializeBinaryFromReader(message: RecipeInputSpec, reader: jspb.BinaryReader): RecipeInputSpec;
}

export namespace RecipeInputSpec {
  export type AsObject = {
    datasetname: string,
    location?: DataLocation.AsObject,
    format: string,
  }
}

export class RecipeList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): RecipeList;
  hasMetadata(): boolean;
  clearMetadata(): RecipeList;

  getItemsList(): Array<Recipe>;
  setItemsList(value: Array<Recipe>): RecipeList;
  clearItemsList(): RecipeList;
  addItems(value?: Recipe, index?: number): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeList.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeList): RecipeList.AsObject;
  static serializeBinaryToWriter(message: RecipeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeList;
  static deserializeBinaryFromReader(message: RecipeList, reader: jspb.BinaryReader): RecipeList;
}

export namespace RecipeList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Recipe.AsObject>,
  }
}

export class RecipeOutputSpec extends jspb.Message {
  getCreatedataset(): boolean;
  setCreatedataset(value: boolean): RecipeOutputSpec;

  getDatasetname(): string;
  setDatasetname(value: string): RecipeOutputSpec;

  getLocation(): DataLocation | undefined;
  setLocation(value?: DataLocation): RecipeOutputSpec;
  hasLocation(): boolean;
  clearLocation(): RecipeOutputSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeOutputSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeOutputSpec): RecipeOutputSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeOutputSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeOutputSpec;
  static deserializeBinaryFromReader(message: RecipeOutputSpec, reader: jspb.BinaryReader): RecipeOutputSpec;
}

export namespace RecipeOutputSpec {
  export type AsObject = {
    createdataset: boolean,
    datasetname: string,
    location?: DataLocation.AsObject,
  }
}

export class RecipePartSpec extends jspb.Message {
  getRecipename(): string;
  setRecipename(value: string): RecipePartSpec;

  getDependentsList(): Array<string>;
  setDependentsList(value: Array<string>): RecipePartSpec;
  clearDependentsList(): RecipePartSpec;
  addDependents(value: string, index?: number): RecipePartSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipePartSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipePartSpec): RecipePartSpec.AsObject;
  static serializeBinaryToWriter(message: RecipePartSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipePartSpec;
  static deserializeBinaryFromReader(message: RecipePartSpec, reader: jspb.BinaryReader): RecipePartSpec;
}

export namespace RecipePartSpec {
  export type AsObject = {
    recipename: string,
    dependentsList: Array<string>,
  }
}

export class RecipeRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): RecipeRun;
  hasMetadata(): boolean;
  clearMetadata(): RecipeRun;

  getSpec(): RecipeRunSpec | undefined;
  setSpec(value?: RecipeRunSpec): RecipeRun;
  hasSpec(): boolean;
  clearSpec(): RecipeRun;

  getStatus(): RecipeRunStatus | undefined;
  setStatus(value?: RecipeRunStatus): RecipeRun;
  hasStatus(): boolean;
  clearStatus(): RecipeRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRun.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRun): RecipeRun.AsObject;
  static serializeBinaryToWriter(message: RecipeRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRun;
  static deserializeBinaryFromReader(message: RecipeRun, reader: jspb.BinaryReader): RecipeRun;
}

export namespace RecipeRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: RecipeRunSpec.AsObject,
    status?: RecipeRunStatus.AsObject,
  }
}

export class RecipeRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): RecipeRunCondition;

  getStatus(): string;
  setStatus(value: string): RecipeRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): RecipeRunCondition;

  getReason(): string;
  setReason(value: string): RecipeRunCondition;

  getMessage(): string;
  setMessage(value: string): RecipeRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRunCondition): RecipeRunCondition.AsObject;
  static serializeBinaryToWriter(message: RecipeRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRunCondition;
  static deserializeBinaryFromReader(message: RecipeRunCondition, reader: jspb.BinaryReader): RecipeRunCondition;
}

export namespace RecipeRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class RecipeRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): RecipeRunList;
  hasMetadata(): boolean;
  clearMetadata(): RecipeRunList;

  getItemsList(): Array<RecipeRun>;
  setItemsList(value: Array<RecipeRun>): RecipeRunList;
  clearItemsList(): RecipeRunList;
  addItems(value?: RecipeRun, index?: number): RecipeRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRunList.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRunList): RecipeRunList.AsObject;
  static serializeBinaryToWriter(message: RecipeRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRunList;
  static deserializeBinaryFromReader(message: RecipeRunList, reader: jspb.BinaryReader): RecipeRunList;
}

export namespace RecipeRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<RecipeRun.AsObject>,
  }
}

export class RecipeRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): RecipeRunSpec;

  getRecipename(): string;
  setRecipename(value: string): RecipeRunSpec;

  getLabname(): string;
  setLabname(value: string): RecipeRunSpec;

  getOutput(): DataLocation | undefined;
  setOutput(value?: DataLocation): RecipeRunSpec;
  hasOutput(): boolean;
  clearOutput(): RecipeRunSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): RecipeRunSpec;

  getTtl(): number;
  setTtl(value: number): RecipeRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRunSpec): RecipeRunSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRunSpec;
  static deserializeBinaryFromReader(message: RecipeRunSpec, reader: jspb.BinaryReader): RecipeRunSpec;
}

export namespace RecipeRunSpec {
  export type AsObject = {
    versionname: string,
    recipename: string,
    labname: string,
    output?: DataLocation.AsObject,
    workloadclassname: string,
    ttl: number,
  }
}

export class RecipeRunStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): RecipeRunStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeRunStatus;
  hasEndtime(): boolean;
  clearEndtime(): RecipeRunStatus;

  getPhase(): string;
  setPhase(value: string): RecipeRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): RecipeRunStatus;

  getLasterror(): string;
  setLasterror(value: string): RecipeRunStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): RecipeRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): RecipeRunStatus;
  hasLogs(): boolean;
  clearLogs(): RecipeRunStatus;

  getConditionsList(): Array<RecipeCondition>;
  setConditionsList(value: Array<RecipeCondition>): RecipeRunStatus;
  clearConditionsList(): RecipeRunStatus;
  addConditions(value?: RecipeCondition, index?: number): RecipeCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRunStatus): RecipeRunStatus.AsObject;
  static serializeBinaryToWriter(message: RecipeRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRunStatus;
  static deserializeBinaryFromReader(message: RecipeRunStatus, reader: jspb.BinaryReader): RecipeRunStatus;
}

export namespace RecipeRunStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
    lasterror: string,
    triggeredby: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    conditionsList: Array<RecipeCondition.AsObject>,
  }
}

export class RecipeSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): RecipeSpec;

  getVersionname(): string;
  setVersionname(value: string): RecipeSpec;

  getDescription(): string;
  setDescription(value: string): RecipeSpec;

  getInput(): RecipeInputSpec | undefined;
  setInput(value?: RecipeInputSpec): RecipeSpec;
  hasInput(): boolean;
  clearInput(): RecipeSpec;

  getStepsList(): Array<RecipeStep>;
  setStepsList(value: Array<RecipeStep>): RecipeSpec;
  clearStepsList(): RecipeSpec;
  addSteps(value?: RecipeStep, index?: number): RecipeStep;

  getOutput(): RecipeOutputSpec | undefined;
  setOutput(value?: RecipeOutputSpec): RecipeSpec;
  hasOutput(): boolean;
  clearOutput(): RecipeSpec;

  getSample(): SampleSpec | undefined;
  setSample(value?: SampleSpec): RecipeSpec;
  hasSample(): boolean;
  clearSample(): RecipeSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): RecipeSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): RecipeSpec;

  getTtl(): number;
  setTtl(value: number): RecipeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeSpec): RecipeSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeSpec;
  static deserializeBinaryFromReader(message: RecipeSpec, reader: jspb.BinaryReader): RecipeSpec;
}

export namespace RecipeSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    input?: RecipeInputSpec.AsObject,
    stepsList: Array<RecipeStep.AsObject>,
    output?: RecipeOutputSpec.AsObject,
    sample?: SampleSpec.AsObject,
    workloadclassname: string,
    activedeadlineseconds: number,
    ttl: number,
  }
}

export class RecipeStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): RecipeStatus;

  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeStatus;
  hasLastrun(): boolean;
  clearLastrun(): RecipeStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): RecipeStatus;

  getConditionsList(): Array<RecipeCondition>;
  setConditionsList(value: Array<RecipeCondition>): RecipeStatus;
  clearConditionsList(): RecipeStatus;
  addConditions(value?: RecipeCondition, index?: number): RecipeCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeStatus): RecipeStatus.AsObject;
  static serializeBinaryToWriter(message: RecipeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeStatus;
  static deserializeBinaryFromReader(message: RecipeStatus, reader: jspb.BinaryReader): RecipeStatus;
}

export namespace RecipeStatus {
  export type AsObject = {
    observedgeneration: number,
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<RecipeCondition.AsObject>,
  }
}

export class RecipeStep extends jspb.Message {
  getOp(): string;
  setOp(value: string): RecipeStep;

  getParametersList(): Array<RecipeStepParam>;
  setParametersList(value: Array<RecipeStepParam>): RecipeStep;
  clearParametersList(): RecipeStep;
  addParameters(value?: RecipeStepParam, index?: number): RecipeStepParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeStep.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeStep): RecipeStep.AsObject;
  static serializeBinaryToWriter(message: RecipeStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeStep;
  static deserializeBinaryFromReader(message: RecipeStep, reader: jspb.BinaryReader): RecipeStep;
}

export namespace RecipeStep {
  export type AsObject = {
    op: string,
    parametersList: Array<RecipeStepParam.AsObject>,
  }
}

export class RecipeStepParam extends jspb.Message {
  getName(): string;
  setName(value: string): RecipeStepParam;

  getValue(): string;
  setValue(value: string): RecipeStepParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeStepParam.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeStepParam): RecipeStepParam.AsObject;
  static serializeBinaryToWriter(message: RecipeStepParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeStepParam;
  static deserializeBinaryFromReader(message: RecipeStepParam, reader: jspb.BinaryReader): RecipeStepParam;
}

export namespace RecipeStepParam {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class RecommendationSchema extends jspb.Message {
  getUseridcolumn(): string;
  setUseridcolumn(value: string): RecommendationSchema;

  getItemidcolumn(): string;
  setItemidcolumn(value: string): RecommendationSchema;

  getRatingcolumn(): string;
  setRatingcolumn(value: string): RecommendationSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationSchema.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationSchema): RecommendationSchema.AsObject;
  static serializeBinaryToWriter(message: RecommendationSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationSchema;
  static deserializeBinaryFromReader(message: RecommendationSchema, reader: jspb.BinaryReader): RecommendationSchema;
}

export namespace RecommendationSchema {
  export type AsObject = {
    useridcolumn: string,
    itemidcolumn: string,
    ratingcolumn: string,
  }
}

export class SampleSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): SampleSpec;

  getType(): string;
  setType(value: string): SampleSpec;

  getRows(): number;
  setRows(value: number): SampleSpec;

  getPercent(): number;
  setPercent(value: number): SampleSpec;

  getFilter(): string;
  setFilter(value: string): SampleSpec;

  getColumn(): string;
  setColumn(value: string): SampleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SampleSpec): SampleSpec.AsObject;
  static serializeBinaryToWriter(message: SampleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleSpec;
  static deserializeBinaryFromReader(message: SampleSpec, reader: jspb.BinaryReader): SampleSpec;
}

export namespace SampleSpec {
  export type AsObject = {
    enabled: boolean,
    type: string,
    rows: number,
    percent: number,
    filter: string,
    column: string,
  }
}

export class Schema extends jspb.Message {
  getTimeseriesschema(): TimeSeriesSchema | undefined;
  setTimeseriesschema(value?: TimeSeriesSchema): Schema;
  hasTimeseriesschema(): boolean;
  clearTimeseriesschema(): Schema;

  getRecommendationschema(): RecommendationSchema | undefined;
  setRecommendationschema(value?: RecommendationSchema): Schema;
  hasRecommendationschema(): boolean;
  clearRecommendationschema(): Schema;

  getColumnsList(): Array<Column>;
  setColumnsList(value: Array<Column>): Schema;
  clearColumnsList(): Schema;
  addColumns(value?: Column, index?: number): Column;

  getValidation(): ValidationSpec | undefined;
  setValidation(value?: ValidationSpec): Schema;
  hasValidation(): boolean;
  clearValidation(): Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    timeseriesschema?: TimeSeriesSchema.AsObject,
    recommendationschema?: RecommendationSchema.AsObject,
    columnsList: Array<Column.AsObject>,
    validation?: ValidationSpec.AsObject,
  }
}

export class SqlQuery extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): SqlQuery;
  hasMetadata(): boolean;
  clearMetadata(): SqlQuery;

  getSpec(): SqlQuerySpec | undefined;
  setSpec(value?: SqlQuerySpec): SqlQuery;
  hasSpec(): boolean;
  clearSpec(): SqlQuery;

  getStatus(): SqlQueryStatus | undefined;
  setStatus(value?: SqlQueryStatus): SqlQuery;
  hasStatus(): boolean;
  clearStatus(): SqlQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQuery): SqlQuery.AsObject;
  static serializeBinaryToWriter(message: SqlQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQuery;
  static deserializeBinaryFromReader(message: SqlQuery, reader: jspb.BinaryReader): SqlQuery;
}

export namespace SqlQuery {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: SqlQuerySpec.AsObject,
    status?: SqlQueryStatus.AsObject,
  }
}

export class SqlQueryCondition extends jspb.Message {
  getType(): string;
  setType(value: string): SqlQueryCondition;

  getStatus(): string;
  setStatus(value: string): SqlQueryCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): SqlQueryCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): SqlQueryCondition;

  getReason(): string;
  setReason(value: string): SqlQueryCondition;

  getMessage(): string;
  setMessage(value: string): SqlQueryCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryCondition.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryCondition): SqlQueryCondition.AsObject;
  static serializeBinaryToWriter(message: SqlQueryCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryCondition;
  static deserializeBinaryFromReader(message: SqlQueryCondition, reader: jspb.BinaryReader): SqlQueryCondition;
}

export namespace SqlQueryCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class SqlQueryList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): SqlQueryList;
  hasMetadata(): boolean;
  clearMetadata(): SqlQueryList;

  getItemsList(): Array<SqlQuery>;
  setItemsList(value: Array<SqlQuery>): SqlQueryList;
  clearItemsList(): SqlQueryList;
  addItems(value?: SqlQuery, index?: number): SqlQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryList.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryList): SqlQueryList.AsObject;
  static serializeBinaryToWriter(message: SqlQueryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryList;
  static deserializeBinaryFromReader(message: SqlQueryList, reader: jspb.BinaryReader): SqlQueryList;
}

export namespace SqlQueryList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<SqlQuery.AsObject>,
  }
}

export class SqlQueryRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): SqlQueryRun;
  hasMetadata(): boolean;
  clearMetadata(): SqlQueryRun;

  getSpec(): SqlQueryRunSpec | undefined;
  setSpec(value?: SqlQueryRunSpec): SqlQueryRun;
  hasSpec(): boolean;
  clearSpec(): SqlQueryRun;

  getStatus(): SqlQueryRunStatus | undefined;
  setStatus(value?: SqlQueryRunStatus): SqlQueryRun;
  hasStatus(): boolean;
  clearStatus(): SqlQueryRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryRun.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryRun): SqlQueryRun.AsObject;
  static serializeBinaryToWriter(message: SqlQueryRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryRun;
  static deserializeBinaryFromReader(message: SqlQueryRun, reader: jspb.BinaryReader): SqlQueryRun;
}

export namespace SqlQueryRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: SqlQueryRunSpec.AsObject,
    status?: SqlQueryRunStatus.AsObject,
  }
}

export class SqlQueryRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): SqlQueryRunCondition;

  getStatus(): string;
  setStatus(value: string): SqlQueryRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): SqlQueryRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): SqlQueryRunCondition;

  getReason(): string;
  setReason(value: string): SqlQueryRunCondition;

  getMessage(): string;
  setMessage(value: string): SqlQueryRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryRunCondition): SqlQueryRunCondition.AsObject;
  static serializeBinaryToWriter(message: SqlQueryRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryRunCondition;
  static deserializeBinaryFromReader(message: SqlQueryRunCondition, reader: jspb.BinaryReader): SqlQueryRunCondition;
}

export namespace SqlQueryRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class SqlQueryRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): SqlQueryRunList;
  hasMetadata(): boolean;
  clearMetadata(): SqlQueryRunList;

  getItemsList(): Array<SqlQueryRun>;
  setItemsList(value: Array<SqlQueryRun>): SqlQueryRunList;
  clearItemsList(): SqlQueryRunList;
  addItems(value?: SqlQueryRun, index?: number): SqlQueryRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryRunList.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryRunList): SqlQueryRunList.AsObject;
  static serializeBinaryToWriter(message: SqlQueryRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryRunList;
  static deserializeBinaryFromReader(message: SqlQueryRunList, reader: jspb.BinaryReader): SqlQueryRunList;
}

export namespace SqlQueryRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<SqlQueryRun.AsObject>,
  }
}

export class SqlQueryRunSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): SqlQueryRunSpec;

  getVersionname(): string;
  setVersionname(value: string): SqlQueryRunSpec;

  getDescription(): string;
  setDescription(value: string): SqlQueryRunSpec;

  getQuery(): string;
  setQuery(value: string): SqlQueryRunSpec;

  getConnectionname(): string;
  setConnectionname(value: string): SqlQueryRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryRunSpec): SqlQueryRunSpec.AsObject;
  static serializeBinaryToWriter(message: SqlQueryRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryRunSpec;
  static deserializeBinaryFromReader(message: SqlQueryRunSpec, reader: jspb.BinaryReader): SqlQueryRunSpec;
}

export namespace SqlQueryRunSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    query: string,
    connectionname: string,
  }
}

export class SqlQueryRunStatus extends jspb.Message {
  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): SqlQueryRunStatus;
  hasStartedat(): boolean;
  clearStartedat(): SqlQueryRunStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): SqlQueryRunStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): SqlQueryRunStatus;

  getConditionsList(): Array<SqlQueryRunCondition>;
  setConditionsList(value: Array<SqlQueryRunCondition>): SqlQueryRunStatus;
  clearConditionsList(): SqlQueryRunStatus;
  addConditions(value?: SqlQueryRunCondition, index?: number): SqlQueryRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryRunStatus): SqlQueryRunStatus.AsObject;
  static serializeBinaryToWriter(message: SqlQueryRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryRunStatus;
  static deserializeBinaryFromReader(message: SqlQueryRunStatus, reader: jspb.BinaryReader): SqlQueryRunStatus;
}

export namespace SqlQueryRunStatus {
  export type AsObject = {
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<SqlQueryRunCondition.AsObject>,
  }
}

export class SqlQuerySpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): SqlQuerySpec;

  getVersionname(): string;
  setVersionname(value: string): SqlQuerySpec;

  getDescription(): string;
  setDescription(value: string): SqlQuerySpec;

  getTemplate(): SqlQueryRunSpec | undefined;
  setTemplate(value?: SqlQueryRunSpec): SqlQuerySpec;
  hasTemplate(): boolean;
  clearTemplate(): SqlQuerySpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): SqlQuerySpec;
  hasSchedule(): boolean;
  clearSchedule(): SqlQuerySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQuerySpec.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQuerySpec): SqlQuerySpec.AsObject;
  static serializeBinaryToWriter(message: SqlQuerySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQuerySpec;
  static deserializeBinaryFromReader(message: SqlQuerySpec, reader: jspb.BinaryReader): SqlQuerySpec;
}

export namespace SqlQuerySpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    template?: SqlQueryRunSpec.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
  }
}

export class SqlQueryStatus extends jspb.Message {
  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): SqlQueryStatus;
  hasLastrun(): boolean;
  clearLastrun(): SqlQueryStatus;

  getConditionsList(): Array<SqlQueryCondition>;
  setConditionsList(value: Array<SqlQueryCondition>): SqlQueryStatus;
  clearConditionsList(): SqlQueryStatus;
  addConditions(value?: SqlQueryCondition, index?: number): SqlQueryCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SqlQueryStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SqlQueryStatus): SqlQueryStatus.AsObject;
  static serializeBinaryToWriter(message: SqlQueryStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SqlQueryStatus;
  static deserializeBinaryFromReader(message: SqlQueryStatus, reader: jspb.BinaryReader): SqlQueryStatus;
}

export namespace SqlQueryStatus {
  export type AsObject = {
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<SqlQueryCondition.AsObject>,
  }
}

export class StakeHolder extends jspb.Message {
  getAccountname(): string;
  setAccountname(value: string): StakeHolder;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): StakeHolder;
  clearRolesList(): StakeHolder;
  addRoles(value: string, index?: number): StakeHolder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeHolder.AsObject;
  static toObject(includeInstance: boolean, msg: StakeHolder): StakeHolder.AsObject;
  static serializeBinaryToWriter(message: StakeHolder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeHolder;
  static deserializeBinaryFromReader(message: StakeHolder, reader: jspb.BinaryReader): StakeHolder;
}

export namespace StakeHolder {
  export type AsObject = {
    accountname: string,
    rolesList: Array<string>,
  }
}

export class TimeSeriesSchema extends jspb.Message {
  getFreq(): string;
  setFreq(value: string): TimeSeriesSchema;

  getCountry(): string;
  setCountry(value: string): TimeSeriesSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesSchema.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesSchema): TimeSeriesSchema.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesSchema;
  static deserializeBinaryFromReader(message: TimeSeriesSchema, reader: jspb.BinaryReader): TimeSeriesSchema;
}

export namespace TimeSeriesSchema {
  export type AsObject = {
    freq: string,
    country: string,
  }
}

export class ValidationSpec extends jspb.Message {
  getMultidatasetvalidationsList(): Array<MultiDatasetValidation>;
  setMultidatasetvalidationsList(value: Array<MultiDatasetValidation>): ValidationSpec;
  clearMultidatasetvalidationsList(): ValidationSpec;
  addMultidatasetvalidations(value?: MultiDatasetValidation, index?: number): MultiDatasetValidation;

  getDatasetvalidationsList(): Array<DatasetValidation>;
  setDatasetvalidationsList(value: Array<DatasetValidation>): ValidationSpec;
  clearDatasetvalidationsList(): ValidationSpec;
  addDatasetvalidations(value?: DatasetValidation, index?: number): DatasetValidation;

  getMulticolumnvalidationsList(): Array<MultiColumnValidation>;
  setMulticolumnvalidationsList(value: Array<MultiColumnValidation>): ValidationSpec;
  clearMulticolumnvalidationsList(): ValidationSpec;
  addMulticolumnvalidations(value?: MultiColumnValidation, index?: number): MultiColumnValidation;

  getColumnvalidationsList(): Array<ColumnValidation>;
  setColumnvalidationsList(value: Array<ColumnValidation>): ValidationSpec;
  clearColumnvalidationsList(): ValidationSpec;
  addColumnvalidations(value?: ColumnValidation, index?: number): ColumnValidation;

  getFilevalidationsList(): Array<FileValidation>;
  setFilevalidationsList(value: Array<FileValidation>): ValidationSpec;
  clearFilevalidationsList(): ValidationSpec;
  addFilevalidations(value?: FileValidation, index?: number): FileValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationSpec): ValidationSpec.AsObject;
  static serializeBinaryToWriter(message: ValidationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationSpec;
  static deserializeBinaryFromReader(message: ValidationSpec, reader: jspb.BinaryReader): ValidationSpec;
}

export namespace ValidationSpec {
  export type AsObject = {
    multidatasetvalidationsList: Array<MultiDatasetValidation.AsObject>,
    datasetvalidationsList: Array<DatasetValidation.AsObject>,
    multicolumnvalidationsList: Array<MultiColumnValidation.AsObject>,
    columnvalidationsList: Array<ColumnValidation.AsObject>,
    filevalidationsList: Array<FileValidation.AsObject>,
  }
}

export class WebRequest extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): WebRequest;
  hasMetadata(): boolean;
  clearMetadata(): WebRequest;

  getSpec(): WebRequestSpec | undefined;
  setSpec(value?: WebRequestSpec): WebRequest;
  hasSpec(): boolean;
  clearSpec(): WebRequest;

  getStatus(): WebRequestStatus | undefined;
  setStatus(value?: WebRequestStatus): WebRequest;
  hasStatus(): boolean;
  clearStatus(): WebRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequest): WebRequest.AsObject;
  static serializeBinaryToWriter(message: WebRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequest;
  static deserializeBinaryFromReader(message: WebRequest, reader: jspb.BinaryReader): WebRequest;
}

export namespace WebRequest {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: WebRequestSpec.AsObject,
    status?: WebRequestStatus.AsObject,
  }
}

export class WebRequestCondition extends jspb.Message {
  getType(): string;
  setType(value: string): WebRequestCondition;

  getStatus(): string;
  setStatus(value: string): WebRequestCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): WebRequestCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): WebRequestCondition;

  getReason(): string;
  setReason(value: string): WebRequestCondition;

  getMessage(): string;
  setMessage(value: string): WebRequestCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestCondition.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestCondition): WebRequestCondition.AsObject;
  static serializeBinaryToWriter(message: WebRequestCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestCondition;
  static deserializeBinaryFromReader(message: WebRequestCondition, reader: jspb.BinaryReader): WebRequestCondition;
}

export namespace WebRequestCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class WebRequestList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): WebRequestList;
  hasMetadata(): boolean;
  clearMetadata(): WebRequestList;

  getItemsList(): Array<WebRequest>;
  setItemsList(value: Array<WebRequest>): WebRequestList;
  clearItemsList(): WebRequestList;
  addItems(value?: WebRequest, index?: number): WebRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestList.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestList): WebRequestList.AsObject;
  static serializeBinaryToWriter(message: WebRequestList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestList;
  static deserializeBinaryFromReader(message: WebRequestList, reader: jspb.BinaryReader): WebRequestList;
}

export namespace WebRequestList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<WebRequest.AsObject>,
  }
}

export class WebRequestRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): WebRequestRun;
  hasMetadata(): boolean;
  clearMetadata(): WebRequestRun;

  getSpec(): WebRequestRunSpec | undefined;
  setSpec(value?: WebRequestRunSpec): WebRequestRun;
  hasSpec(): boolean;
  clearSpec(): WebRequestRun;

  getStatus(): WebRequestRunStatus | undefined;
  setStatus(value?: WebRequestRunStatus): WebRequestRun;
  hasStatus(): boolean;
  clearStatus(): WebRequestRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestRun.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestRun): WebRequestRun.AsObject;
  static serializeBinaryToWriter(message: WebRequestRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestRun;
  static deserializeBinaryFromReader(message: WebRequestRun, reader: jspb.BinaryReader): WebRequestRun;
}

export namespace WebRequestRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: WebRequestRunSpec.AsObject,
    status?: WebRequestRunStatus.AsObject,
  }
}

export class WebRequestRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): WebRequestRunCondition;

  getStatus(): string;
  setStatus(value: string): WebRequestRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): WebRequestRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): WebRequestRunCondition;

  getReason(): string;
  setReason(value: string): WebRequestRunCondition;

  getMessage(): string;
  setMessage(value: string): WebRequestRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestRunCondition): WebRequestRunCondition.AsObject;
  static serializeBinaryToWriter(message: WebRequestRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestRunCondition;
  static deserializeBinaryFromReader(message: WebRequestRunCondition, reader: jspb.BinaryReader): WebRequestRunCondition;
}

export namespace WebRequestRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class WebRequestRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): WebRequestRunList;
  hasMetadata(): boolean;
  clearMetadata(): WebRequestRunList;

  getItemsList(): Array<WebRequestRun>;
  setItemsList(value: Array<WebRequestRun>): WebRequestRunList;
  clearItemsList(): WebRequestRunList;
  addItems(value?: WebRequestRun, index?: number): WebRequestRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestRunList.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestRunList): WebRequestRunList.AsObject;
  static serializeBinaryToWriter(message: WebRequestRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestRunList;
  static deserializeBinaryFromReader(message: WebRequestRunList, reader: jspb.BinaryReader): WebRequestRunList;
}

export namespace WebRequestRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<WebRequestRun.AsObject>,
  }
}

export class WebRequestRunSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): WebRequestRunSpec;

  getVersionname(): string;
  setVersionname(value: string): WebRequestRunSpec;

  getDescription(): string;
  setDescription(value: string): WebRequestRunSpec;

  getQuery(): string;
  setQuery(value: string): WebRequestRunSpec;

  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): WebRequestRunSpec;

  getConnectionname(): string;
  setConnectionname(value: string): WebRequestRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestRunSpec): WebRequestRunSpec.AsObject;
  static serializeBinaryToWriter(message: WebRequestRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestRunSpec;
  static deserializeBinaryFromReader(message: WebRequestRunSpec, reader: jspb.BinaryReader): WebRequestRunSpec;
}

export namespace WebRequestRunSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    query: string,
    parametersMap: Array<[string, string]>,
    connectionname: string,
  }
}

export class WebRequestRunStatus extends jspb.Message {
  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): WebRequestRunStatus;
  hasLastrun(): boolean;
  clearLastrun(): WebRequestRunStatus;

  getConditionsList(): Array<WebRequestRunCondition>;
  setConditionsList(value: Array<WebRequestRunCondition>): WebRequestRunStatus;
  clearConditionsList(): WebRequestRunStatus;
  addConditions(value?: WebRequestRunCondition, index?: number): WebRequestRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestRunStatus): WebRequestRunStatus.AsObject;
  static serializeBinaryToWriter(message: WebRequestRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestRunStatus;
  static deserializeBinaryFromReader(message: WebRequestRunStatus, reader: jspb.BinaryReader): WebRequestRunStatus;
}

export namespace WebRequestRunStatus {
  export type AsObject = {
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<WebRequestRunCondition.AsObject>,
  }
}

export class WebRequestSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): WebRequestSpec;

  getVersionname(): string;
  setVersionname(value: string): WebRequestSpec;

  getDescription(): string;
  setDescription(value: string): WebRequestSpec;

  getTemplate(): SqlQuerySpec | undefined;
  setTemplate(value?: SqlQuerySpec): WebRequestSpec;
  hasTemplate(): boolean;
  clearTemplate(): WebRequestSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): WebRequestSpec;
  hasSchedule(): boolean;
  clearSchedule(): WebRequestSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestSpec): WebRequestSpec.AsObject;
  static serializeBinaryToWriter(message: WebRequestSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestSpec;
  static deserializeBinaryFromReader(message: WebRequestSpec, reader: jspb.BinaryReader): WebRequestSpec;
}

export namespace WebRequestSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    description: string,
    template?: SqlQuerySpec.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
  }
}

export class WebRequestStatus extends jspb.Message {
  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): WebRequestStatus;
  hasLastrun(): boolean;
  clearLastrun(): WebRequestStatus;

  getConditionsList(): Array<WebRequestCondition>;
  setConditionsList(value: Array<WebRequestCondition>): WebRequestStatus;
  clearConditionsList(): WebRequestStatus;
  addConditions(value?: WebRequestCondition, index?: number): WebRequestCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebRequestStatus.AsObject;
  static toObject(includeInstance: boolean, msg: WebRequestStatus): WebRequestStatus.AsObject;
  static serializeBinaryToWriter(message: WebRequestStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebRequestStatus;
  static deserializeBinaryFromReader(message: WebRequestStatus, reader: jspb.BinaryReader): WebRequestStatus;
}

export namespace WebRequestStatus {
  export type AsObject = {
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<WebRequestCondition.AsObject>,
  }
}

