import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated_pb';
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

export class ApiSpec extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): ApiSpec;

  getConnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setConnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ApiSpec;
  hasConnectionref(): boolean;
  clearConnectionref(): ApiSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApiSpec): ApiSpec.AsObject;
  static serializeBinaryToWriter(message: ApiSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiSpec;
  static deserializeBinaryFromReader(message: ApiSpec, reader: jspb.BinaryReader): ApiSpec;
}

export namespace ApiSpec {
  export type AsObject = {
    topic: string,
    connectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class Attachment extends jspb.Message {
  getName(): string;
  setName(value: string): Attachment;

  getDescription(): string;
  setDescription(value: string): Attachment;

  getLocation(): DataLocation | undefined;
  setLocation(value?: DataLocation): Attachment;
  hasLocation(): boolean;
  clearLocation(): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    name: string,
    description: string,
    location?: DataLocation.AsObject,
  }
}

export class Column extends jspb.Message {
  getName(): string;
  setName(value: string): Column;

  getFeaturename(): string;
  setFeaturename(value: string): Column;

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

  getTitle(): string;
  setTitle(value: string): Column;

  getExample(): string;
  setExample(value: string): Column;

  getExternaldocs(): string;
  setExternaldocs(value: string): Column;

  getEnumList(): Array<string>;
  setEnumList(value: Array<string>): Column;
  clearEnumList(): Column;
  addEnum(value: string, index?: number): Column;

  getTransformerhint(): string;
  setTransformerhint(value: string): Column;

  getMaxitems(): number;
  setMaxitems(value: number): Column;

  getMinitems(): number;
  setMinitems(value: number): Column;

  getUniqueitems(): boolean;
  setUniqueitems(value: boolean): Column;

  getTimecolumn(): boolean;
  setTimecolumn(value: boolean): Column;

  getPreserveprivacy(): boolean;
  setPreserveprivacy(value: boolean): Column;

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
    featurename: string,
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
    title: string,
    example: string,
    externaldocs: string,
    enumList: Array<string>,
    transformerhint: string,
    maxitems: number,
    minitems: number,
    uniqueitems: boolean,
    timecolumn: boolean,
    preserveprivacy: boolean,
    pb_protected: boolean,
    defaultvaluenum: number,
    log: boolean,
    mu: number,
    sigma: number,
    skewthreshold: number,
    driftthreshold: number,
  }
}

export class ColumnStatistics extends jspb.Message {
  getName(): string;
  setName(value: string): ColumnStatistics;

  getMin(): number;
  setMin(value: number): ColumnStatistics;

  getMax(): number;
  setMax(value: number): ColumnStatistics;

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

  getDistinc(): number;
  setDistinc(value: number): ColumnStatistics;

  getIgnored(): boolean;
  setIgnored(value: boolean): ColumnStatistics;

  getNullable(): boolean;
  setNullable(value: boolean): ColumnStatistics;

  getHighcred(): boolean;
  setHighcred(value: boolean): ColumnStatistics;

  getHighcorr(): boolean;
  setHighcorr(value: boolean): ColumnStatistics;

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
  }
}

export class ColumnValidation extends jspb.Message {
  getType(): string;
  setType(value: string): ColumnValidation;

  getColumn(): string;
  setColumn(value: string): ColumnValidation;

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
    min: number,
    max: number,
    valuesetList: Array<string>,
    strictmin: boolean,
    strictmax: boolean,
  }
}

export class CompilerSpec extends jspb.Message {
  getCompiler(): string;
  setCompiler(value: string): CompilerSpec;

  getTargetsList(): Array<string>;
  setTargetsList(value: Array<string>): CompilerSpec;
  clearTargetsList(): CompilerSpec;
  addTargets(value: string, index?: number): CompilerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompilerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CompilerSpec): CompilerSpec.AsObject;
  static serializeBinaryToWriter(message: CompilerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompilerSpec;
  static deserializeBinaryFromReader(message: CompilerSpec, reader: jspb.BinaryReader): CompilerSpec;
}

export namespace CompilerSpec {
  export type AsObject = {
    compiler: string,
    targetsList: Array<string>,
  }
}

export class DataLocation extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): DataLocation;

  getPath(): string;
  setPath(value: string): DataLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataLocation.AsObject;
  static toObject(includeInstance: boolean, msg: DataLocation): DataLocation.AsObject;
  static serializeBinaryToWriter(message: DataLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataLocation;
  static deserializeBinaryFromReader(message: DataLocation, reader: jspb.BinaryReader): DataLocation;
}

export namespace DataLocation {
  export type AsObject = {
    bucketname: string,
    path: string,
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

  getDatalocation(): DataLocation | undefined;
  setDatalocation(value?: DataLocation): DataPipelineRunSpec;
  hasDatalocation(): boolean;
  clearDatalocation(): DataPipelineRunSpec;

  getOwner(): string;
  setOwner(value: string): DataPipelineRunSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): DataPipelineRunSpec;

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
    datalocation?: DataLocation.AsObject,
    owner: string,
    workloadclassname: string,
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

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): DataPipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataPipelineRunStatus;

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
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
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

  getSchedule(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): DataPipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): DataPipelineSpec;

  getOwner(): string;
  setOwner(value: string): DataPipelineSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): DataPipelineSpec;

  getDefaultcompilerspec(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setDefaultcompilerspec(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): DataPipelineSpec;
  hasDefaultcompilerspec(): boolean;
  clearDefaultcompilerspec(): DataPipelineSpec;

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
    schedule?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    owner: string,
    workloadclassname: string,
    defaultcompilerspec?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
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

  getNotifiername(): string;
  setNotifiername(value: string): DataProductSpec;

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

  getAttachmentsList(): Array<Attachment>;
  setAttachmentsList(value: Array<Attachment>): DataProductSpec;
  clearAttachmentsList(): DataProductSpec;
  addAttachments(value?: Attachment, index?: number): Attachment;

  getCompilation(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): DataProductSpec;
  hasCompilation(): boolean;
  clearCompilation(): DataProductSpec;

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
    notifiername: string,
    defaultworkloadclassname: string,
    retriesonfailure: number,
    kpisList: Array<KPI.AsObject>,
    oncallaccountname: string,
    attachmentsList: Array<Attachment.AsObject>,
    compilation?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
  }
}

export class DataProductStatus extends jspb.Message {
  getLastmodelversion(): number;
  setLastmodelversion(value: number): DataProductStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataProductStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): DataProductStatus;

  getLaststudyid(): number;
  setLaststudyid(value: number): DataProductStatus;

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
    lastmodelversion: number,
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    laststudyid: number,
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
  getOwnername(): string;
  setOwnername(value: string): DataSourceSpec;

  getVersionname(): string;
  setVersionname(value: string): DataSourceSpec;

  getDescription(): string;
  setDescription(value: string): DataSourceSpec;

  getSchema(): Schema | undefined;
  setSchema(value?: Schema): DataSourceSpec;
  hasSchema(): boolean;
  clearSchema(): DataSourceSpec;

  getType(): string;
  setType(value: string): DataSourceSpec;

  getFile(): FlatFileSpec | undefined;
  setFile(value?: FlatFileSpec): DataSourceSpec;
  hasFile(): boolean;
  clearFile(): DataSourceSpec;

  getTable(): TableSpec | undefined;
  setTable(value?: TableSpec): DataSourceSpec;
  hasTable(): boolean;
  clearTable(): DataSourceSpec;

  getStream(): StreamSpec | undefined;
  setStream(value?: StreamSpec): DataSourceSpec;
  hasStream(): boolean;
  clearStream(): DataSourceSpec;

  getApi(): ApiSpec | undefined;
  setApi(value?: ApiSpec): DataSourceSpec;
  hasApi(): boolean;
  clearApi(): DataSourceSpec;

  getOwner(): string;
  setOwner(value: string): DataSourceSpec;

  getDatasettype(): string;
  setDatasettype(value: string): DataSourceSpec;

  getSample(): SampleSpec | undefined;
  setSample(value?: SampleSpec): DataSourceSpec;
  hasSample(): boolean;
  clearSample(): DataSourceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceSpec): DataSourceSpec.AsObject;
  static serializeBinaryToWriter(message: DataSourceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceSpec;
  static deserializeBinaryFromReader(message: DataSourceSpec, reader: jspb.BinaryReader): DataSourceSpec;
}

export namespace DataSourceSpec {
  export type AsObject = {
    ownername: string,
    versionname: string,
    description: string,
    schema?: Schema.AsObject,
    type: string,
    file?: FlatFileSpec.AsObject,
    table?: TableSpec.AsObject,
    stream?: StreamSpec.AsObject,
    api?: ApiSpec.AsObject,
    owner: string,
    datasettype: string,
    sample?: SampleSpec.AsObject,
  }
}

export class DataSourceStatus extends jspb.Message {
  getCols(): number;
  setCols(value: number): DataSourceStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataSourceStatus;

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

  getReport(): boolean;
  setReport(value: boolean): DatasetSpec;

  getValidate(): boolean;
  setValidate(value: boolean): DatasetSpec;

  getLabeled(): boolean;
  setLabeled(value: boolean): DatasetSpec;

  getSyntatic(): boolean;
  setSyntatic(value: boolean): DatasetSpec;

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
    report: boolean,
    validate: boolean,
    labeled: boolean,
    syntatic: boolean,
    syntacticrows: number,
    origin?: DataLocation.AsObject,
    location?: DataLocation.AsObject,
    workloadclassname: string,
    activedeadlineseconds: number,
    type: string,
    sample?: SampleSpec.AsObject,
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

  getProfileuri(): string;
  setProfileuri(value: string): DatasetStatus;

  getImbalanced(): boolean;
  setImbalanced(value: boolean): DatasetStatus;

  getSigs(): Signatures | undefined;
  setSigs(value?: Signatures): DatasetStatus;
  hasSigs(): boolean;
  clearSigs(): DatasetStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DatasetStatus;

  getConditionsList(): Array<DatasetCondition>;
  setConditionsList(value: Array<DatasetCondition>): DatasetStatus;
  clearConditionsList(): DatasetStatus;
  addConditions(value?: DatasetCondition, index?: number): DatasetCondition;

  getValidationresultsList(): Array<DataValidationResult>;
  setValidationresultsList(value: Array<DataValidationResult>): DatasetStatus;
  clearValidationresultsList(): DatasetStatus;
  addValidationresults(value?: DataValidationResult, index?: number): DataValidationResult;

  getLaststudytime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLaststudytime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetStatus;
  hasLaststudytime(): boolean;
  clearLaststudytime(): DatasetStatus;

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
    profileuri: string,
    imbalanced: boolean,
    sigs?: Signatures.AsObject,
    observedgeneration: number,
    conditionsList: Array<DatasetCondition.AsObject>,
    validationresultsList: Array<DataValidationResult.AsObject>,
    laststudytime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
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
    min: number,
    max: number,
    valuesetList: Array<string>,
    strictmin: boolean,
    strictmax: boolean,
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
  }
}

export class FeaturePipelineRunStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturePipelineRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): FeaturePipelineRunStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeaturePipelineRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): FeaturePipelineRunStatus;

  getPhase(): string;
  setPhase(value: string): FeaturePipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): FeaturePipelineRunStatus;

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
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
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

  getSchedule(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): FeaturePipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): FeaturePipelineSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): FeaturePipelineSpec;

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
    schedule?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    activedeadlineseconds: number,
  }
}

export class FeaturePipelineStatus extends jspb.Message {
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

export class FlatFileSpec extends jspb.Message {
  getFiletype(): string;
  setFiletype(value: string): FlatFileSpec;

  getDelimiter(): string;
  setDelimiter(value: string): FlatFileSpec;

  getQuote(): string;
  setQuote(value: string): FlatFileSpec;

  getEscapechar(): string;
  setEscapechar(value: string): FlatFileSpec;

  getCommentchars(): string;
  setCommentchars(value: string): FlatFileSpec;

  getHeader(): boolean;
  setHeader(value: boolean): FlatFileSpec;

  getSkiprows(): number;
  setSkiprows(value: number): FlatFileSpec;

  getNullvalues(): string;
  setNullvalues(value: string): FlatFileSpec;

  getEncoding(): string;
  setEncoding(value: string): FlatFileSpec;

  getMaxrows(): number;
  setMaxrows(value: number): FlatFileSpec;

  getStrict(): boolean;
  setStrict(value: boolean): FlatFileSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatFileSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FlatFileSpec): FlatFileSpec.AsObject;
  static serializeBinaryToWriter(message: FlatFileSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatFileSpec;
  static deserializeBinaryFromReader(message: FlatFileSpec, reader: jspb.BinaryReader): FlatFileSpec;
}

export namespace FlatFileSpec {
  export type AsObject = {
    filetype: string,
    delimiter: string,
    quote: string,
    escapechar: string,
    commentchars: string,
    header: boolean,
    skiprows: number,
    nullvalues: string,
    encoding: string,
    maxrows: number,
    strict: boolean,
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
  }
}

export class LabelingPipelineRunStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): LabelingPipelineRunStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabelingPipelineRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): LabelingPipelineRunStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LabelingPipelineRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): LabelingPipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): LabelingPipelineRunStatus;

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
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
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

  getSchedule(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): LabelingPipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): LabelingPipelineSpec;

  getOwner(): string;
  setOwner(value: string): LabelingPipelineSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): LabelingPipelineSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): LabelingPipelineSpec;

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
    schedule?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    owner: string,
    workloadclassname: string,
    activedeadlineseconds: number,
  }
}

export class LabelingPipelineStatus extends jspb.Message {
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
    min: number,
    max: number,
    valuesetList: Array<string>,
    strictmin: boolean,
    strictmax: boolean,
  }
}

export class MultiDatasetValidation extends jspb.Message {
  getType(): string;
  setType(value: string): MultiDatasetValidation;

  getDatasetsList(): Array<string>;
  setDatasetsList(value: Array<string>): MultiDatasetValidation;
  clearDatasetsList(): MultiDatasetValidation;
  addDatasets(value: string, index?: number): MultiDatasetValidation;

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
  }
}

export class RecipeRunStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): RecipeRunStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): RecipeRunStatus;

  getPhase(): string;
  setPhase(value: string): RecipeRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): RecipeRunStatus;

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
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
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

  getObservedgeneration(): number;
  setObservedgeneration(value: number): RecipeSpec;

  getWorkloadclassname(): string;
  setWorkloadclassname(value: string): RecipeSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): RecipeSpec;

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
    observedgeneration: number,
    workloadclassname: string,
    activedeadlineseconds: number,
  }
}

export class RecipeStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): RecipeStatus;

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
  }
}

export class Schema extends jspb.Message {
  getTimeseriesschema(): TimeSeriesSchema | undefined;
  setTimeseriesschema(value?: TimeSeriesSchema): Schema;
  hasTimeseriesschema(): boolean;
  clearTimeseriesschema(): Schema;

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
    columnsList: Array<Column.AsObject>,
    validation?: ValidationSpec.AsObject,
  }
}

export class Signatures extends jspb.Message {
  getData(): string;
  setData(value: string): Signatures;

  getLabels(): string;
  setLabels(value: string): Signatures;

  getTrain(): string;
  setTrain(value: string): Signatures;

  getTest(): string;
  setTest(value: string): Signatures;

  getValidation(): string;
  setValidation(value: string): Signatures;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signatures.AsObject;
  static toObject(includeInstance: boolean, msg: Signatures): Signatures.AsObject;
  static serializeBinaryToWriter(message: Signatures, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signatures;
  static deserializeBinaryFromReader(message: Signatures, reader: jspb.BinaryReader): Signatures;
}

export namespace Signatures {
  export type AsObject = {
    data: string,
    labels: string,
    train: string,
    test: string,
    validation: string,
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

export class StreamSpec extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): StreamSpec;

  getConnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setConnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): StreamSpec;
  hasConnectionref(): boolean;
  clearConnectionref(): StreamSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSpec): StreamSpec.AsObject;
  static serializeBinaryToWriter(message: StreamSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSpec;
  static deserializeBinaryFromReader(message: StreamSpec, reader: jspb.BinaryReader): StreamSpec;
}

export namespace StreamSpec {
  export type AsObject = {
    topic: string,
    connectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class TableSpec extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): TableSpec;

  getTablename(): string;
  setTablename(value: string): TableSpec;

  getConnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setConnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TableSpec;
  hasConnectionref(): boolean;
  clearConnectionref(): TableSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TableSpec): TableSpec.AsObject;
  static serializeBinaryToWriter(message: TableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableSpec;
  static deserializeBinaryFromReader(message: TableSpec, reader: jspb.BinaryReader): TableSpec;
}

export namespace TableSpec {
  export type AsObject = {
    query: string,
    tablename: string,
    connectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
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
  }
}

