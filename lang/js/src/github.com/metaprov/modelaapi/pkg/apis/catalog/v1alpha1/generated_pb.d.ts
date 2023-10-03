import * as jspb from 'google-protobuf'

import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_api_resource_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AccessSpec extends jspb.Message {
  getPort(): number;
  setPort(value: number): AccessSpec;
  hasPort(): boolean;
  clearPort(): AccessSpec;

  getNodeport(): number;
  setNodeport(value: number): AccessSpec;
  hasNodeport(): boolean;
  clearNodeport(): AccessSpec;

  getPath(): string;
  setPath(value: string): AccessSpec;
  hasPath(): boolean;
  clearPath(): AccessSpec;

  getAccesstype(): string;
  setAccesstype(value: string): AccessSpec;
  hasAccesstype(): boolean;
  clearAccesstype(): AccessSpec;

  getHttp(): boolean;
  setHttp(value: boolean): AccessSpec;
  hasHttp(): boolean;
  clearHttp(): AccessSpec;

  getAuthmethod(): string;
  setAuthmethod(value: string): AccessSpec;
  hasAuthmethod(): boolean;
  clearAuthmethod(): AccessSpec;

  getApikeysecretref(): k8s_io_api_core_v1_generated_pb.SecretReference | undefined;
  setApikeysecretref(value?: k8s_io_api_core_v1_generated_pb.SecretReference): AccessSpec;
  hasApikeysecretref(): boolean;
  clearApikeysecretref(): AccessSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AccessSpec): AccessSpec.AsObject;
  static serializeBinaryToWriter(message: AccessSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessSpec;
  static deserializeBinaryFromReader(message: AccessSpec, reader: jspb.BinaryReader): AccessSpec;
}

export namespace AccessSpec {
  export type AsObject = {
    port?: number,
    nodeport?: number,
    path?: string,
    accesstype?: string,
    http?: boolean,
    authmethod?: string,
    apikeysecretref?: k8s_io_api_core_v1_generated_pb.SecretReference.AsObject,
  }
}

export class AccountPermissions extends jspb.Message {
  getAccountname(): string;
  setAccountname(value: string): AccountPermissions;
  hasAccountname(): boolean;
  clearAccountname(): AccountPermissions;

  getRolesList(): Array<k8s_io_api_core_v1_generated_pb.LocalObjectReference>;
  setRolesList(value: Array<k8s_io_api_core_v1_generated_pb.LocalObjectReference>): AccountPermissions;
  clearRolesList(): AccountPermissions;
  addRoles(value?: k8s_io_api_core_v1_generated_pb.LocalObjectReference, index?: number): k8s_io_api_core_v1_generated_pb.LocalObjectReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPermissions.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPermissions): AccountPermissions.AsObject;
  static serializeBinaryToWriter(message: AccountPermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPermissions;
  static deserializeBinaryFromReader(message: AccountPermissions, reader: jspb.BinaryReader): AccountPermissions;
}

export namespace AccountPermissions {
  export type AsObject = {
    accountname?: string,
    rolesList: Array<k8s_io_api_core_v1_generated_pb.LocalObjectReference.AsObject>,
  }
}

export class Algorithm extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Algorithm;
  hasMetadata(): boolean;
  clearMetadata(): Algorithm;

  getSpec(): AlgorithmSpec | undefined;
  setSpec(value?: AlgorithmSpec): Algorithm;
  hasSpec(): boolean;
  clearSpec(): Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Algorithm.AsObject;
  static toObject(includeInstance: boolean, msg: Algorithm): Algorithm.AsObject;
  static serializeBinaryToWriter(message: Algorithm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Algorithm;
  static deserializeBinaryFromReader(message: Algorithm, reader: jspb.BinaryReader): Algorithm;
}

export namespace Algorithm {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: AlgorithmSpec.AsObject,
  }
}

export class AlgorithmList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): AlgorithmList;
  hasMetadata(): boolean;
  clearMetadata(): AlgorithmList;

  getItemsList(): Array<Algorithm>;
  setItemsList(value: Array<Algorithm>): AlgorithmList;
  clearItemsList(): AlgorithmList;
  addItems(value?: Algorithm, index?: number): Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmList.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmList): AlgorithmList.AsObject;
  static serializeBinaryToWriter(message: AlgorithmList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmList;
  static deserializeBinaryFromReader(message: AlgorithmList, reader: jspb.BinaryReader): AlgorithmList;
}

export namespace AlgorithmList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Algorithm.AsObject>,
  }
}

export class AlgorithmSpec extends jspb.Message {
  getFrameworkname(): string;
  setFrameworkname(value: string): AlgorithmSpec;
  hasFrameworkname(): boolean;
  clearFrameworkname(): AlgorithmSpec;

  getDescription(): string;
  setDescription(value: string): AlgorithmSpec;
  hasDescription(): boolean;
  clearDescription(): AlgorithmSpec;

  getUrl(): string;
  setUrl(value: string): AlgorithmSpec;
  hasUrl(): boolean;
  clearUrl(): AlgorithmSpec;

  getTasksList(): Array<string>;
  setTasksList(value: Array<string>): AlgorithmSpec;
  clearTasksList(): AlgorithmSpec;
  addTasks(value: string, index?: number): AlgorithmSpec;

  getSparse(): boolean;
  setSparse(value: boolean): AlgorithmSpec;
  hasSparse(): boolean;
  clearSparse(): AlgorithmSpec;

  getRangesList(): Array<ParameterRange>;
  setRangesList(value: Array<ParameterRange>): AlgorithmSpec;
  clearRangesList(): AlgorithmSpec;
  addRanges(value?: ParameterRange, index?: number): ParameterRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmSpec): AlgorithmSpec.AsObject;
  static serializeBinaryToWriter(message: AlgorithmSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmSpec;
  static deserializeBinaryFromReader(message: AlgorithmSpec, reader: jspb.BinaryReader): AlgorithmSpec;
}

export namespace AlgorithmSpec {
  export type AsObject = {
    frameworkname?: string,
    description?: string,
    url?: string,
    tasksList: Array<string>,
    sparse?: boolean,
    rangesList: Array<ParameterRange.AsObject>,
  }
}

export class Cloud extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Cloud;
  hasMetadata(): boolean;
  clearMetadata(): Cloud;

  getSpec(): CloudSpec | undefined;
  setSpec(value?: CloudSpec): Cloud;
  hasSpec(): boolean;
  clearSpec(): Cloud;

  getStatus(): CloudStatus | undefined;
  setStatus(value?: CloudStatus): Cloud;
  hasStatus(): boolean;
  clearStatus(): Cloud;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cloud.AsObject;
  static toObject(includeInstance: boolean, msg: Cloud): Cloud.AsObject;
  static serializeBinaryToWriter(message: Cloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cloud;
  static deserializeBinaryFromReader(message: Cloud, reader: jspb.BinaryReader): Cloud;
}

export namespace Cloud {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: CloudSpec.AsObject,
    status?: CloudStatus.AsObject,
  }
}

export class CloudList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): CloudList;
  hasMetadata(): boolean;
  clearMetadata(): CloudList;

  getItemsList(): Array<Cloud>;
  setItemsList(value: Array<Cloud>): CloudList;
  clearItemsList(): CloudList;
  addItems(value?: Cloud, index?: number): Cloud;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudList.AsObject;
  static toObject(includeInstance: boolean, msg: CloudList): CloudList.AsObject;
  static serializeBinaryToWriter(message: CloudList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudList;
  static deserializeBinaryFromReader(message: CloudList, reader: jspb.BinaryReader): CloudList;
}

export namespace CloudList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Cloud.AsObject>,
  }
}

export class CloudSpec extends jspb.Message {
  getDefaultregionname(): string;
  setDefaultregionname(value: string): CloudSpec;
  hasDefaultregionname(): boolean;
  clearDefaultregionname(): CloudSpec;

  getDefaultmachineclassname(): string;
  setDefaultmachineclassname(value: string): CloudSpec;
  hasDefaultmachineclassname(): boolean;
  clearDefaultmachineclassname(): CloudSpec;

  getDefaultgpuclassname(): string;
  setDefaultgpuclassname(value: string): CloudSpec;
  hasDefaultgpuclassname(): boolean;
  clearDefaultgpuclassname(): CloudSpec;

  getMachineclassesList(): Array<MachineClass>;
  setMachineclassesList(value: Array<MachineClass>): CloudSpec;
  clearMachineclassesList(): CloudSpec;
  addMachineclasses(value?: MachineClass, index?: number): MachineClass;

  getGpuclassesList(): Array<GpuClass>;
  setGpuclassesList(value: Array<GpuClass>): CloudSpec;
  clearGpuclassesList(): CloudSpec;
  addGpuclasses(value?: GpuClass, index?: number): GpuClass;

  getRegionsList(): Array<Region>;
  setRegionsList(value: Array<Region>): CloudSpec;
  clearRegionsList(): CloudSpec;
  addRegions(value?: Region, index?: number): Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CloudSpec): CloudSpec.AsObject;
  static serializeBinaryToWriter(message: CloudSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudSpec;
  static deserializeBinaryFromReader(message: CloudSpec, reader: jspb.BinaryReader): CloudSpec;
}

export namespace CloudSpec {
  export type AsObject = {
    defaultregionname?: string,
    defaultmachineclassname?: string,
    defaultgpuclassname?: string,
    machineclassesList: Array<MachineClass.AsObject>,
    gpuclassesList: Array<GpuClass.AsObject>,
    regionsList: Array<Region.AsObject>,
  }
}

export class CloudStatus extends jspb.Message {
  getMachinecostsList(): Array<MachineClassCost>;
  setMachinecostsList(value: Array<MachineClassCost>): CloudStatus;
  clearMachinecostsList(): CloudStatus;
  addMachinecosts(value?: MachineClassCost, index?: number): MachineClassCost;

  getGpucostsList(): Array<GpuClassCost>;
  setGpucostsList(value: Array<GpuClassCost>): CloudStatus;
  clearGpucostsList(): CloudStatus;
  addGpucosts(value?: GpuClassCost, index?: number): GpuClassCost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStatus): CloudStatus.AsObject;
  static serializeBinaryToWriter(message: CloudStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStatus;
  static deserializeBinaryFromReader(message: CloudStatus, reader: jspb.BinaryReader): CloudStatus;
}

export namespace CloudStatus {
  export type AsObject = {
    machinecostsList: Array<MachineClassCost.AsObject>,
    gpucostsList: Array<GpuClassCost.AsObject>,
  }
}

export class CompilerSpec extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): CompilerSpec;
  hasEnable(): boolean;
  clearEnable(): CompilerSpec;

  getCompiler(): string;
  setCompiler(value: string): CompilerSpec;
  hasCompiler(): boolean;
  clearCompiler(): CompilerSpec;

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
    enable?: boolean,
    compiler?: string,
    targetsList: Array<string>,
  }
}

export class ConfusionMatrix extends jspb.Message {
  getRowsList(): Array<ConfusionMatrixRow>;
  setRowsList(value: Array<ConfusionMatrixRow>): ConfusionMatrix;
  clearRowsList(): ConfusionMatrix;
  addRows(value?: ConfusionMatrixRow, index?: number): ConfusionMatrixRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfusionMatrix.AsObject;
  static toObject(includeInstance: boolean, msg: ConfusionMatrix): ConfusionMatrix.AsObject;
  static serializeBinaryToWriter(message: ConfusionMatrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfusionMatrix;
  static deserializeBinaryFromReader(message: ConfusionMatrix, reader: jspb.BinaryReader): ConfusionMatrix;
}

export namespace ConfusionMatrix {
  export type AsObject = {
    rowsList: Array<ConfusionMatrixRow.AsObject>,
  }
}

export class ConfusionMatrixRow extends jspb.Message {
  getT(): string;
  setT(value: string): ConfusionMatrixRow;
  hasT(): boolean;
  clearT(): ConfusionMatrixRow;

  getP(): string;
  setP(value: string): ConfusionMatrixRow;
  hasP(): boolean;
  clearP(): ConfusionMatrixRow;

  getCount(): number;
  setCount(value: number): ConfusionMatrixRow;
  hasCount(): boolean;
  clearCount(): ConfusionMatrixRow;

  getPct(): number;
  setPct(value: number): ConfusionMatrixRow;
  hasPct(): boolean;
  clearPct(): ConfusionMatrixRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfusionMatrixRow.AsObject;
  static toObject(includeInstance: boolean, msg: ConfusionMatrixRow): ConfusionMatrixRow.AsObject;
  static serializeBinaryToWriter(message: ConfusionMatrixRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfusionMatrixRow;
  static deserializeBinaryFromReader(message: ConfusionMatrixRow, reader: jspb.BinaryReader): ConfusionMatrixRow;
}

export namespace ConfusionMatrixRow {
  export type AsObject = {
    t?: string,
    p?: string,
    count?: number,
    pct?: number,
  }
}

export class ContainerLog extends jspb.Message {
  getJob(): string;
  setJob(value: string): ContainerLog;
  hasJob(): boolean;
  clearJob(): ContainerLog;

  getContainer(): string;
  setContainer(value: string): ContainerLog;
  hasContainer(): boolean;
  clearContainer(): ContainerLog;

  getKey(): string;
  setKey(value: string): ContainerLog;
  hasKey(): boolean;
  clearKey(): ContainerLog;

  getBucket(): string;
  setBucket(value: string): ContainerLog;
  hasBucket(): boolean;
  clearBucket(): ContainerLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerLog.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerLog): ContainerLog.AsObject;
  static serializeBinaryToWriter(message: ContainerLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerLog;
  static deserializeBinaryFromReader(message: ContainerLog, reader: jspb.BinaryReader): ContainerLog;
}

export namespace ContainerLog {
  export type AsObject = {
    job?: string,
    container?: string,
    key?: string,
    bucket?: string,
  }
}

export class CronSchedule extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): CronSchedule;
  hasEnabled(): boolean;
  clearEnabled(): CronSchedule;

  getCron(): string;
  setCron(value: string): CronSchedule;
  hasCron(): boolean;
  clearCron(): CronSchedule;

  getType(): string;
  setType(value: string): CronSchedule;
  hasType(): boolean;
  clearType(): CronSchedule;

  getMaxrecords(): number;
  setMaxrecords(value: number): CronSchedule;
  hasMaxrecords(): boolean;
  clearMaxrecords(): CronSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: CronSchedule): CronSchedule.AsObject;
  static serializeBinaryToWriter(message: CronSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronSchedule;
  static deserializeBinaryFromReader(message: CronSchedule, reader: jspb.BinaryReader): CronSchedule;
}

export namespace CronSchedule {
  export type AsObject = {
    enabled?: boolean,
    cron?: string,
    type?: string,
    maxrecords?: number,
  }
}

export class CurvePoint extends jspb.Message {
  getX(): number;
  setX(value: number): CurvePoint;
  hasX(): boolean;
  clearX(): CurvePoint;

  getY(): number;
  setY(value: number): CurvePoint;
  hasY(): boolean;
  clearY(): CurvePoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurvePoint.AsObject;
  static toObject(includeInstance: boolean, msg: CurvePoint): CurvePoint.AsObject;
  static serializeBinaryToWriter(message: CurvePoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurvePoint;
  static deserializeBinaryFromReader(message: CurvePoint, reader: jspb.BinaryReader): CurvePoint;
}

export namespace CurvePoint {
  export type AsObject = {
    x?: number,
    y?: number,
  }
}

export class DataCenter extends jspb.Message {
  getName(): string;
  setName(value: string): DataCenter;
  hasName(): boolean;
  clearName(): DataCenter;

  getCode(): string;
  setCode(value: string): DataCenter;
  hasCode(): boolean;
  clearCode(): DataCenter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCenter.AsObject;
  static toObject(includeInstance: boolean, msg: DataCenter): DataCenter.AsObject;
  static serializeBinaryToWriter(message: DataCenter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCenter;
  static deserializeBinaryFromReader(message: DataCenter, reader: jspb.BinaryReader): DataCenter;
}

export namespace DataCenter {
  export type AsObject = {
    name?: string,
    code?: string,
  }
}

export class DataLocation extends jspb.Message {
  getType(): string;
  setType(value: string): DataLocation;
  hasType(): boolean;
  clearType(): DataLocation;

  getConnectionname(): string;
  setConnectionname(value: string): DataLocation;
  hasConnectionname(): boolean;
  clearConnectionname(): DataLocation;

  getBucketname(): string;
  setBucketname(value: string): DataLocation;
  hasBucketname(): boolean;
  clearBucketname(): DataLocation;

  getPath(): string;
  setPath(value: string): DataLocation;
  hasPath(): boolean;
  clearPath(): DataLocation;

  getTable(): string;
  setTable(value: string): DataLocation;
  hasTable(): boolean;
  clearTable(): DataLocation;

  getDatabase(): string;
  setDatabase(value: string): DataLocation;
  hasDatabase(): boolean;
  clearDatabase(): DataLocation;

  getSql(): string;
  setSql(value: string): DataLocation;
  hasSql(): boolean;
  clearSql(): DataLocation;

  getTopic(): string;
  setTopic(value: string): DataLocation;
  hasTopic(): boolean;
  clearTopic(): DataLocation;

  getUrl(): string;
  setUrl(value: string): DataLocation;
  hasUrl(): boolean;
  clearUrl(): DataLocation;

  getResourceref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setResourceref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataLocation;
  hasResourceref(): boolean;
  clearResourceref(): DataLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataLocation.AsObject;
  static toObject(includeInstance: boolean, msg: DataLocation): DataLocation.AsObject;
  static serializeBinaryToWriter(message: DataLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataLocation;
  static deserializeBinaryFromReader(message: DataLocation, reader: jspb.BinaryReader): DataLocation;
}

export namespace DataLocation {
  export type AsObject = {
    type?: string,
    connectionname?: string,
    bucketname?: string,
    path?: string,
    table?: string,
    database?: string,
    sql?: string,
    topic?: string,
    url?: string,
    resourceref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class DataTestCase extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DataTestCase;
  hasEnabled(): boolean;
  clearEnabled(): DataTestCase;

  getName(): string;
  setName(value: string): DataTestCase;
  hasName(): boolean;
  clearName(): DataTestCase;

  getAssertthat(): string;
  setAssertthat(value: string): DataTestCase;
  hasAssertthat(): boolean;
  clearAssertthat(): DataTestCase;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataTestCase;
  hasEntityref(): boolean;
  clearEntityref(): DataTestCase;

  getComparetoref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setComparetoref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataTestCase;
  hasComparetoref(): boolean;
  clearComparetoref(): DataTestCase;

  getColumn(): string;
  setColumn(value: string): DataTestCase;
  hasColumn(): boolean;
  clearColumn(): DataTestCase;

  getType(): string;
  setType(value: string): DataTestCase;
  hasType(): boolean;
  clearType(): DataTestCase;

  getMetric(): string;
  setMetric(value: string): DataTestCase;
  hasMetric(): boolean;
  clearMetric(): DataTestCase;

  getExpectedvalue(): number;
  setExpectedvalue(value: number): DataTestCase;
  hasExpectedvalue(): boolean;
  clearExpectedvalue(): DataTestCase;

  getExpectedcategory(): string;
  setExpectedcategory(value: string): DataTestCase;
  hasExpectedcategory(): boolean;
  clearExpectedcategory(): DataTestCase;

  getLower(): number;
  setLower(value: number): DataTestCase;
  hasLower(): boolean;
  clearLower(): DataTestCase;

  getUpper(): number;
  setUpper(value: number): DataTestCase;
  hasUpper(): boolean;
  clearUpper(): DataTestCase;

  getExpectedsetList(): Array<string>;
  setExpectedsetList(value: Array<string>): DataTestCase;
  clearExpectedsetList(): DataTestCase;
  addExpectedset(value: string, index?: number): DataTestCase;

  getLowerinclusive(): boolean;
  setLowerinclusive(value: boolean): DataTestCase;
  hasLowerinclusive(): boolean;
  clearLowerinclusive(): DataTestCase;

  getUpperinclusive(): boolean;
  setUpperinclusive(value: boolean): DataTestCase;
  hasUpperinclusive(): boolean;
  clearUpperinclusive(): DataTestCase;

  getGenerated(): boolean;
  setGenerated(value: boolean): DataTestCase;
  hasGenerated(): boolean;
  clearGenerated(): DataTestCase;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): DataTestCase;
  clearTagsList(): DataTestCase;
  addTags(value: string, index?: number): DataTestCase;

  getColumn2(): string;
  setColumn2(value: string): DataTestCase;
  hasColumn2(): boolean;
  clearColumn2(): DataTestCase;

  getEntityref2(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref2(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataTestCase;
  hasEntityref2(): boolean;
  clearEntityref2(): DataTestCase;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): DataTestCase;
  clearColumnsList(): DataTestCase;
  addColumns(value: string, index?: number): DataTestCase;

  getFeaturefilter(): string;
  setFeaturefilter(value: string): DataTestCase;
  hasFeaturefilter(): boolean;
  clearFeaturefilter(): DataTestCase;

  getDatafilter(): string;
  setDatafilter(value: string): DataTestCase;
  hasDatafilter(): boolean;
  clearDatafilter(): DataTestCase;

  getReferencetype(): string;
  setReferencetype(value: string): DataTestCase;
  hasReferencetype(): boolean;
  clearReferencetype(): DataTestCase;

  getPeriods(): number;
  setPeriods(value: number): DataTestCase;
  hasPeriods(): boolean;
  clearPeriods(): DataTestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTestCase.AsObject;
  static toObject(includeInstance: boolean, msg: DataTestCase): DataTestCase.AsObject;
  static serializeBinaryToWriter(message: DataTestCase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTestCase;
  static deserializeBinaryFromReader(message: DataTestCase, reader: jspb.BinaryReader): DataTestCase;
}

export namespace DataTestCase {
  export type AsObject = {
    enabled?: boolean,
    name?: string,
    assertthat?: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    comparetoref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    column?: string,
    type?: string,
    metric?: string,
    expectedvalue?: number,
    expectedcategory?: string,
    lower?: number,
    upper?: number,
    expectedsetList: Array<string>,
    lowerinclusive?: boolean,
    upperinclusive?: boolean,
    generated?: boolean,
    tagsList: Array<string>,
    column2?: string,
    entityref2?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    columnsList: Array<string>,
    featurefilter?: string,
    datafilter?: string,
    referencetype?: string,
    periods?: number,
  }
}

export class DataTestCaseResult extends jspb.Message {
  getName(): string;
  setName(value: string): DataTestCaseResult;
  hasName(): boolean;
  clearName(): DataTestCaseResult;

  getActual(): Measurement | undefined;
  setActual(value?: Measurement): DataTestCaseResult;
  hasActual(): boolean;
  clearActual(): DataTestCaseResult;

  getFailure(): boolean;
  setFailure(value: boolean): DataTestCaseResult;
  hasFailure(): boolean;
  clearFailure(): DataTestCaseResult;

  getError(): boolean;
  setError(value: boolean): DataTestCaseResult;
  hasError(): boolean;
  clearError(): DataTestCaseResult;

  getFailuremsg(): string;
  setFailuremsg(value: string): DataTestCaseResult;
  hasFailuremsg(): boolean;
  clearFailuremsg(): DataTestCaseResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTestCaseResult.AsObject;
  static toObject(includeInstance: boolean, msg: DataTestCaseResult): DataTestCaseResult.AsObject;
  static serializeBinaryToWriter(message: DataTestCaseResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTestCaseResult;
  static deserializeBinaryFromReader(message: DataTestCaseResult, reader: jspb.BinaryReader): DataTestCaseResult;
}

export namespace DataTestCaseResult {
  export type AsObject = {
    name?: string,
    actual?: Measurement.AsObject,
    failure?: boolean,
    error?: boolean,
    failuremsg?: string,
  }
}

export class FileLocation extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): FileLocation;
  hasBucketname(): boolean;
  clearBucketname(): FileLocation;

  getPath(): string;
  setPath(value: string): FileLocation;
  hasPath(): boolean;
  clearPath(): FileLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileLocation.AsObject;
  static toObject(includeInstance: boolean, msg: FileLocation): FileLocation.AsObject;
  static serializeBinaryToWriter(message: FileLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileLocation;
  static deserializeBinaryFromReader(message: FileLocation, reader: jspb.BinaryReader): FileLocation;
}

export namespace FileLocation {
  export type AsObject = {
    bucketname?: string,
    path?: string,
  }
}

export class GithubEvents extends jspb.Message {
  getGitconnectionname(): string;
  setGitconnectionname(value: string): GithubEvents;
  hasGitconnectionname(): boolean;
  clearGitconnectionname(): GithubEvents;

  getRepository(): string;
  setRepository(value: string): GithubEvents;
  hasRepository(): boolean;
  clearRepository(): GithubEvents;

  getBranch(): string;
  setBranch(value: string): GithubEvents;
  hasBranch(): boolean;
  clearBranch(): GithubEvents;

  getBlobnameregex(): string;
  setBlobnameregex(value: string): GithubEvents;
  hasBlobnameregex(): boolean;
  clearBlobnameregex(): GithubEvents;

  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): GithubEvents;
  clearEventsList(): GithubEvents;
  addEvents(value: string, index?: number): GithubEvents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GithubEvents.AsObject;
  static toObject(includeInstance: boolean, msg: GithubEvents): GithubEvents.AsObject;
  static serializeBinaryToWriter(message: GithubEvents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GithubEvents;
  static deserializeBinaryFromReader(message: GithubEvents, reader: jspb.BinaryReader): GithubEvents;
}

export namespace GithubEvents {
  export type AsObject = {
    gitconnectionname?: string,
    repository?: string,
    branch?: string,
    blobnameregex?: string,
    eventsList: Array<string>,
  }
}

export class GpuClass extends jspb.Message {
  getCode(): string;
  setCode(value: string): GpuClass;
  hasCode(): boolean;
  clearCode(): GpuClass;

  getRegionname(): string;
  setRegionname(value: string): GpuClass;
  hasRegionname(): boolean;
  clearRegionname(): GpuClass;

  getVcpu(): number;
  setVcpu(value: number): GpuClass;
  hasVcpu(): boolean;
  clearVcpu(): GpuClass;

  getGpumem(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setGpumem(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): GpuClass;
  hasGpumem(): boolean;
  clearGpumem(): GpuClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GpuClass.AsObject;
  static toObject(includeInstance: boolean, msg: GpuClass): GpuClass.AsObject;
  static serializeBinaryToWriter(message: GpuClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GpuClass;
  static deserializeBinaryFromReader(message: GpuClass, reader: jspb.BinaryReader): GpuClass;
}

export namespace GpuClass {
  export type AsObject = {
    code?: string,
    regionname?: string,
    vcpu?: number,
    gpumem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class GpuClassCost extends jspb.Message {
  getCode(): string;
  setCode(value: string): GpuClassCost;
  hasCode(): boolean;
  clearCode(): GpuClassCost;

  getRegion(): string;
  setRegion(value: string): GpuClassCost;
  hasRegion(): boolean;
  clearRegion(): GpuClassCost;

  getCostperminute(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostperminute(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): GpuClassCost;
  hasCostperminute(): boolean;
  clearCostperminute(): GpuClassCost;

  getCostspot(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostspot(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): GpuClassCost;
  hasCostspot(): boolean;
  clearCostspot(): GpuClassCost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GpuClassCost.AsObject;
  static toObject(includeInstance: boolean, msg: GpuClassCost): GpuClassCost.AsObject;
  static serializeBinaryToWriter(message: GpuClassCost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GpuClassCost;
  static deserializeBinaryFromReader(message: GpuClassCost, reader: jspb.BinaryReader): GpuClassCost;
}

export namespace GpuClassCost {
  export type AsObject = {
    code?: string,
    region?: string,
    costperminute?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    costspot?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class HistogramData extends jspb.Message {
  getBinsList(): Array<number>;
  setBinsList(value: Array<number>): HistogramData;
  clearBinsList(): HistogramData;
  addBins(value: number, index?: number): HistogramData;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): HistogramData;
  clearCategoriesList(): HistogramData;
  addCategories(value: string, index?: number): HistogramData;

  getCountsList(): Array<number>;
  setCountsList(value: Array<number>): HistogramData;
  clearCountsList(): HistogramData;
  addCounts(value: number, index?: number): HistogramData;

  getMissing(): number;
  setMissing(value: number): HistogramData;
  hasMissing(): boolean;
  clearMissing(): HistogramData;

  getInvalid(): number;
  setInvalid(value: number): HistogramData;
  hasInvalid(): boolean;
  clearInvalid(): HistogramData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistogramData.AsObject;
  static toObject(includeInstance: boolean, msg: HistogramData): HistogramData.AsObject;
  static serializeBinaryToWriter(message: HistogramData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistogramData;
  static deserializeBinaryFromReader(message: HistogramData, reader: jspb.BinaryReader): HistogramData;
}

export namespace HistogramData {
  export type AsObject = {
    binsList: Array<number>,
    categoriesList: Array<string>,
    countsList: Array<number>,
    missing?: number,
    invalid?: number,
  }
}

export class Images extends jspb.Message {
  getTrainerimage(): string;
  setTrainerimage(value: string): Images;
  hasTrainerimage(): boolean;
  clearTrainerimage(): Images;

  getDataimage(): string;
  setDataimage(value: string): Images;
  hasDataimage(): boolean;
  clearDataimage(): Images;

  getPublisherimage(): string;
  setPublisherimage(value: string): Images;
  hasPublisherimage(): boolean;
  clearPublisherimage(): Images;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Images.AsObject;
  static toObject(includeInstance: boolean, msg: Images): Images.AsObject;
  static serializeBinaryToWriter(message: Images, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Images;
  static deserializeBinaryFromReader(message: Images, reader: jspb.BinaryReader): Images;
}

export namespace Images {
  export type AsObject = {
    trainerimage?: string,
    dataimage?: string,
    publisherimage?: string,
  }
}

export class LastRunStatus extends jspb.Message {
  getName(): string;
  setName(value: string): LastRunStatus;
  hasName(): boolean;
  clearName(): LastRunStatus;

  getStatus(): string;
  setStatus(value: string): LastRunStatus;
  hasStatus(): boolean;
  clearStatus(): LastRunStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LastRunStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): LastRunStatus;

  getDuration(): number;
  setDuration(value: number): LastRunStatus;
  hasDuration(): boolean;
  clearDuration(): LastRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): LastRunStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): LastRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): LastRunStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): LastRunStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LastRunStatus): LastRunStatus.AsObject;
  static serializeBinaryToWriter(message: LastRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastRunStatus;
  static deserializeBinaryFromReader(message: LastRunStatus, reader: jspb.BinaryReader): LastRunStatus;
}

export namespace LastRunStatus {
  export type AsObject = {
    name?: string,
    status?: string,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    duration?: number,
    failurereason?: string,
    failuremessage?: string,
  }
}

export class Lib extends jspb.Message {
  getFrameworks(): string;
  setFrameworks(value: string): Lib;
  hasFrameworks(): boolean;
  clearFrameworks(): Lib;

  getVersion(): string;
  setVersion(value: string): Lib;
  hasVersion(): boolean;
  clearVersion(): Lib;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lib.AsObject;
  static toObject(includeInstance: boolean, msg: Lib): Lib.AsObject;
  static serializeBinaryToWriter(message: Lib, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lib;
  static deserializeBinaryFromReader(message: Lib, reader: jspb.BinaryReader): Lib;
}

export namespace Lib {
  export type AsObject = {
    frameworks?: string,
    version?: string,
  }
}

export class Logs extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): Logs;
  hasBucket(): boolean;
  clearBucket(): Logs;

  getContainersList(): Array<ContainerLog>;
  setContainersList(value: Array<ContainerLog>): Logs;
  clearContainersList(): Logs;
  addContainers(value?: ContainerLog, index?: number): ContainerLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logs.AsObject;
  static toObject(includeInstance: boolean, msg: Logs): Logs.AsObject;
  static serializeBinaryToWriter(message: Logs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logs;
  static deserializeBinaryFromReader(message: Logs, reader: jspb.BinaryReader): Logs;
}

export namespace Logs {
  export type AsObject = {
    bucket?: string,
    containersList: Array<ContainerLog.AsObject>,
  }
}

export class MLFramework extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): MLFramework;
  hasMetadata(): boolean;
  clearMetadata(): MLFramework;

  getSpec(): MLFrameworkSpec | undefined;
  setSpec(value?: MLFrameworkSpec): MLFramework;
  hasSpec(): boolean;
  clearSpec(): MLFramework;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFramework.AsObject;
  static toObject(includeInstance: boolean, msg: MLFramework): MLFramework.AsObject;
  static serializeBinaryToWriter(message: MLFramework, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFramework;
  static deserializeBinaryFromReader(message: MLFramework, reader: jspb.BinaryReader): MLFramework;
}

export namespace MLFramework {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: MLFrameworkSpec.AsObject,
  }
}

export class MLFrameworkList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): MLFrameworkList;
  hasMetadata(): boolean;
  clearMetadata(): MLFrameworkList;

  getItemsList(): Array<MLFramework>;
  setItemsList(value: Array<MLFramework>): MLFrameworkList;
  clearItemsList(): MLFrameworkList;
  addItems(value?: MLFramework, index?: number): MLFramework;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFrameworkList.AsObject;
  static toObject(includeInstance: boolean, msg: MLFrameworkList): MLFrameworkList.AsObject;
  static serializeBinaryToWriter(message: MLFrameworkList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFrameworkList;
  static deserializeBinaryFromReader(message: MLFrameworkList, reader: jspb.BinaryReader): MLFrameworkList;
}

export namespace MLFrameworkList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<MLFramework.AsObject>,
  }
}

export class MLFrameworkSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MLFrameworkSpec;
  hasUrl(): boolean;
  clearUrl(): MLFrameworkSpec;

  getDescription(): string;
  setDescription(value: string): MLFrameworkSpec;
  hasDescription(): boolean;
  clearDescription(): MLFrameworkSpec;

  getVersion(): string;
  setVersion(value: string): MLFrameworkSpec;
  hasVersion(): boolean;
  clearVersion(): MLFrameworkSpec;

  getLang(): string;
  setLang(value: string): MLFrameworkSpec;
  hasLang(): boolean;
  clearLang(): MLFrameworkSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFrameworkSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MLFrameworkSpec): MLFrameworkSpec.AsObject;
  static serializeBinaryToWriter(message: MLFrameworkSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFrameworkSpec;
  static deserializeBinaryFromReader(message: MLFrameworkSpec, reader: jspb.BinaryReader): MLFrameworkSpec;
}

export namespace MLFrameworkSpec {
  export type AsObject = {
    url?: string,
    description?: string,
    version?: string,
    lang?: string,
  }
}

export class MachineClass extends jspb.Message {
  getCode(): string;
  setCode(value: string): MachineClass;
  hasCode(): boolean;
  clearCode(): MachineClass;

  getRegionname(): string;
  setRegionname(value: string): MachineClass;
  hasRegionname(): boolean;
  clearRegionname(): MachineClass;

  getMem(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setMem(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): MachineClass;
  hasMem(): boolean;
  clearMem(): MachineClass;

  getVcpu(): number;
  setVcpu(value: number): MachineClass;
  hasVcpu(): boolean;
  clearVcpu(): MachineClass;

  getStorage(): string;
  setStorage(value: string): MachineClass;
  hasStorage(): boolean;
  clearStorage(): MachineClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineClass.AsObject;
  static toObject(includeInstance: boolean, msg: MachineClass): MachineClass.AsObject;
  static serializeBinaryToWriter(message: MachineClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineClass;
  static deserializeBinaryFromReader(message: MachineClass, reader: jspb.BinaryReader): MachineClass;
}

export namespace MachineClass {
  export type AsObject = {
    code?: string,
    regionname?: string,
    mem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    vcpu?: number,
    storage?: string,
  }
}

export class MachineClassCost extends jspb.Message {
  getCode(): string;
  setCode(value: string): MachineClassCost;
  hasCode(): boolean;
  clearCode(): MachineClassCost;

  getRegion(): string;
  setRegion(value: string): MachineClassCost;
  hasRegion(): boolean;
  clearRegion(): MachineClassCost;

  getCostperminute(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostperminute(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): MachineClassCost;
  hasCostperminute(): boolean;
  clearCostperminute(): MachineClassCost;

  getCostspot(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostspot(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): MachineClassCost;
  hasCostspot(): boolean;
  clearCostspot(): MachineClassCost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineClassCost.AsObject;
  static toObject(includeInstance: boolean, msg: MachineClassCost): MachineClassCost.AsObject;
  static serializeBinaryToWriter(message: MachineClassCost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineClassCost;
  static deserializeBinaryFromReader(message: MachineClassCost, reader: jspb.BinaryReader): MachineClassCost;
}

export namespace MachineClassCost {
  export type AsObject = {
    code?: string,
    region?: string,
    costperminute?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    costspot?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class ManagedImage extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ManagedImage;
  hasMetadata(): boolean;
  clearMetadata(): ManagedImage;

  getSpec(): ManagedImageSpec | undefined;
  setSpec(value?: ManagedImageSpec): ManagedImage;
  hasSpec(): boolean;
  clearSpec(): ManagedImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedImage.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedImage): ManagedImage.AsObject;
  static serializeBinaryToWriter(message: ManagedImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedImage;
  static deserializeBinaryFromReader(message: ManagedImage, reader: jspb.BinaryReader): ManagedImage;
}

export namespace ManagedImage {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ManagedImageSpec.AsObject,
  }
}

export class ManagedImageList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ManagedImageList;
  hasMetadata(): boolean;
  clearMetadata(): ManagedImageList;

  getItemsList(): Array<ManagedImage>;
  setItemsList(value: Array<ManagedImage>): ManagedImageList;
  clearItemsList(): ManagedImageList;
  addItems(value?: ManagedImage, index?: number): ManagedImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedImageList.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedImageList): ManagedImageList.AsObject;
  static serializeBinaryToWriter(message: ManagedImageList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedImageList;
  static deserializeBinaryFromReader(message: ManagedImageList, reader: jspb.BinaryReader): ManagedImageList;
}

export namespace ManagedImageList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ManagedImage.AsObject>,
  }
}

export class ManagedImageSpec extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): ManagedImageSpec;
  hasDescription(): boolean;
  clearDescription(): ManagedImageSpec;

  getRegistry(): string;
  setRegistry(value: string): ManagedImageSpec;
  hasRegistry(): boolean;
  clearRegistry(): ManagedImageSpec;

  getRepository(): string;
  setRepository(value: string): ManagedImageSpec;
  hasRepository(): boolean;
  clearRepository(): ManagedImageSpec;

  getTag(): string;
  setTag(value: string): ManagedImageSpec;
  hasTag(): boolean;
  clearTag(): ManagedImageSpec;

  getEnvList(): Array<k8s_io_api_core_v1_generated_pb.EnvVar>;
  setEnvList(value: Array<k8s_io_api_core_v1_generated_pb.EnvVar>): ManagedImageSpec;
  clearEnvList(): ManagedImageSpec;
  addEnv(value?: k8s_io_api_core_v1_generated_pb.EnvVar, index?: number): k8s_io_api_core_v1_generated_pb.EnvVar;

  getGpu(): boolean;
  setGpu(value: boolean): ManagedImageSpec;
  hasGpu(): boolean;
  clearGpu(): ManagedImageSpec;

  getActive(): boolean;
  setActive(value: boolean): ManagedImageSpec;
  hasActive(): boolean;
  clearActive(): ManagedImageSpec;

  getPreload(): boolean;
  setPreload(value: boolean): ManagedImageSpec;
  hasPreload(): boolean;
  clearPreload(): ManagedImageSpec;

  getConnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setConnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ManagedImageSpec;
  hasConnectionref(): boolean;
  clearConnectionref(): ManagedImageSpec;

  getBase(): string;
  setBase(value: string): ManagedImageSpec;
  hasBase(): boolean;
  clearBase(): ManagedImageSpec;

  getRole(): string;
  setRole(value: string): ManagedImageSpec;
  hasRole(): boolean;
  clearRole(): ManagedImageSpec;

  getMantainedby(): string;
  setMantainedby(value: string): ManagedImageSpec;
  hasMantainedby(): boolean;
  clearMantainedby(): ManagedImageSpec;

  getUri(): string;
  setUri(value: string): ManagedImageSpec;
  hasUri(): boolean;
  clearUri(): ManagedImageSpec;

  getFrameworksList(): Array<string>;
  setFrameworksList(value: Array<string>): ManagedImageSpec;
  clearFrameworksList(): ManagedImageSpec;
  addFrameworks(value: string, index?: number): ManagedImageSpec;

  getLibsList(): Array<Lib>;
  setLibsList(value: Array<Lib>): ManagedImageSpec;
  clearLibsList(): ManagedImageSpec;
  addLibs(value?: Lib, index?: number): Lib;

  getOs(): string;
  setOs(value: string): ManagedImageSpec;
  hasOs(): boolean;
  clearOs(): ManagedImageSpec;

  getOsversion(): string;
  setOsversion(value: string): ManagedImageSpec;
  hasOsversion(): boolean;
  clearOsversion(): ManagedImageSpec;

  getPrivate(): boolean;
  setPrivate(value: boolean): ManagedImageSpec;
  hasPrivate(): boolean;
  clearPrivate(): ManagedImageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedImageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedImageSpec): ManagedImageSpec.AsObject;
  static serializeBinaryToWriter(message: ManagedImageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedImageSpec;
  static deserializeBinaryFromReader(message: ManagedImageSpec, reader: jspb.BinaryReader): ManagedImageSpec;
}

export namespace ManagedImageSpec {
  export type AsObject = {
    description?: string,
    registry?: string,
    repository?: string,
    tag?: string,
    envList: Array<k8s_io_api_core_v1_generated_pb.EnvVar.AsObject>,
    gpu?: boolean,
    active?: boolean,
    preload?: boolean,
    connectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    base?: string,
    role?: string,
    mantainedby?: string,
    uri?: string,
    frameworksList: Array<string>,
    libsList: Array<Lib.AsObject>,
    os?: string,
    osversion?: string,
    pb_private?: boolean,
  }
}

export class ManifestLocation extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): ManifestLocation;
  hasBucketname(): boolean;
  clearBucketname(): ManifestLocation;

  getPath(): string;
  setPath(value: string): ManifestLocation;
  hasPath(): boolean;
  clearPath(): ManifestLocation;

  getGeneration(): number;
  setGeneration(value: number): ManifestLocation;
  hasGeneration(): boolean;
  clearGeneration(): ManifestLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManifestLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ManifestLocation): ManifestLocation.AsObject;
  static serializeBinaryToWriter(message: ManifestLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManifestLocation;
  static deserializeBinaryFromReader(message: ManifestLocation, reader: jspb.BinaryReader): ManifestLocation;
}

export namespace ManifestLocation {
  export type AsObject = {
    bucketname?: string,
    path?: string,
    generation?: number,
  }
}

export class Measurement extends jspb.Message {
  getEntity(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntity(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): Measurement;
  hasEntity(): boolean;
  clearEntity(): Measurement;

  getColumn(): string;
  setColumn(value: string): Measurement;
  hasColumn(): boolean;
  clearColumn(): Measurement;

  getMetric(): string;
  setMetric(value: string): Measurement;
  hasMetric(): boolean;
  clearMetric(): Measurement;

  getValue(): number;
  setValue(value: number): Measurement;
  hasValue(): boolean;
  clearValue(): Measurement;

  getStddev(): number;
  setStddev(value: number): Measurement;
  hasStddev(): boolean;
  clearStddev(): Measurement;

  getBoolqty(): boolean;
  setBoolqty(value: boolean): Measurement;
  hasBoolqty(): boolean;
  clearBoolqty(): Measurement;

  getCategory(): string;
  setCategory(value: string): Measurement;
  hasCategory(): boolean;
  clearCategory(): Measurement;

  getValuesetList(): Array<string>;
  setValuesetList(value: Array<string>): Measurement;
  clearValuesetList(): Measurement;
  addValueset(value: string, index?: number): Measurement;

  getTimepoint(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTimepoint(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): Measurement;
  hasTimepoint(): boolean;
  clearTimepoint(): Measurement;

  getTasktype(): string;
  setTasktype(value: string): Measurement;
  hasTasktype(): boolean;
  clearTasktype(): Measurement;

  getAlgorithm(): string;
  setAlgorithm(value: string): Measurement;
  hasAlgorithm(): boolean;
  clearAlgorithm(): Measurement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Measurement.AsObject;
  static toObject(includeInstance: boolean, msg: Measurement): Measurement.AsObject;
  static serializeBinaryToWriter(message: Measurement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Measurement;
  static deserializeBinaryFromReader(message: Measurement, reader: jspb.BinaryReader): Measurement;
}

export namespace Measurement {
  export type AsObject = {
    entity?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    column?: string,
    metric?: string,
    value?: number,
    stddev?: number,
    boolqty?: boolean,
    category?: string,
    valuesetList: Array<string>,
    timepoint?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    tasktype?: string,
    algorithm?: string,
  }
}

export class ModelDeploymentSpec extends jspb.Message {
  getModelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setModelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentSpec;
  hasModelref(): boolean;
  clearModelref(): ModelDeploymentSpec;

  getPort(): number;
  setPort(value: number): ModelDeploymentSpec;
  hasPort(): boolean;
  clearPort(): ModelDeploymentSpec;

  getTraffic(): number;
  setTraffic(value: number): ModelDeploymentSpec;
  hasTraffic(): boolean;
  clearTraffic(): ModelDeploymentSpec;

  getRole(): string;
  setRole(value: string): ModelDeploymentSpec;
  hasRole(): boolean;
  clearRole(): ModelDeploymentSpec;

  getImagename(): string;
  setImagename(value: string): ModelDeploymentSpec;
  hasImagename(): boolean;
  clearImagename(): ModelDeploymentSpec;

  getApprovedby(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setApprovedby(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentSpec;
  hasApprovedby(): boolean;
  clearApprovedby(): ModelDeploymentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelDeploymentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelDeploymentSpec): ModelDeploymentSpec.AsObject;
  static serializeBinaryToWriter(message: ModelDeploymentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelDeploymentSpec;
  static deserializeBinaryFromReader(message: ModelDeploymentSpec, reader: jspb.BinaryReader): ModelDeploymentSpec;
}

export namespace ModelDeploymentSpec {
  export type AsObject = {
    modelref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    port?: number,
    traffic?: number,
    role?: string,
    imagename?: string,
    approvedby?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class NotificationSpec extends jspb.Message {
  getTtl(): number;
  setTtl(value: number): NotificationSpec;
  hasTtl(): boolean;
  clearTtl(): NotificationSpec;

  getNotifiername(): string;
  setNotifiername(value: string): NotificationSpec;
  hasNotifiername(): boolean;
  clearNotifiername(): NotificationSpec;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): NotificationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSpec): NotificationSpec.AsObject;
  static serializeBinaryToWriter(message: NotificationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSpec;
  static deserializeBinaryFromReader(message: NotificationSpec, reader: jspb.BinaryReader): NotificationSpec;
}

export namespace NotificationSpec {
  export type AsObject = {
    ttl?: number,
    notifiername?: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ObjectiveSpec extends jspb.Message {
  getMetric(): string;
  setMetric(value: string): ObjectiveSpec;
  hasMetric(): boolean;
  clearMetric(): ObjectiveSpec;

  getGoal(): string;
  setGoal(value: string): ObjectiveSpec;
  hasGoal(): boolean;
  clearGoal(): ObjectiveSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectiveSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectiveSpec): ObjectiveSpec.AsObject;
  static serializeBinaryToWriter(message: ObjectiveSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectiveSpec;
  static deserializeBinaryFromReader(message: ObjectiveSpec, reader: jspb.BinaryReader): ObjectiveSpec;
}

export namespace ObjectiveSpec {
  export type AsObject = {
    metric?: string,
    goal?: string,
  }
}

export class PRCurve extends jspb.Message {
  getValuesList(): Array<CurvePoint>;
  setValuesList(value: Array<CurvePoint>): PRCurve;
  clearValuesList(): PRCurve;
  addValues(value?: CurvePoint, index?: number): CurvePoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PRCurve.AsObject;
  static toObject(includeInstance: boolean, msg: PRCurve): PRCurve.AsObject;
  static serializeBinaryToWriter(message: PRCurve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PRCurve;
  static deserializeBinaryFromReader(message: PRCurve, reader: jspb.BinaryReader): PRCurve;
}

export namespace PRCurve {
  export type AsObject = {
    valuesList: Array<CurvePoint.AsObject>,
  }
}

export class ParameterRange extends jspb.Message {
  getName(): string;
  setName(value: string): ParameterRange;
  hasName(): boolean;
  clearName(): ParameterRange;

  getType(): string;
  setType(value: string): ParameterRange;
  hasType(): boolean;
  clearType(): ParameterRange;

  getLow(): number;
  setLow(value: number): ParameterRange;
  hasLow(): boolean;
  clearLow(): ParameterRange;

  getHigh(): number;
  setHigh(value: number): ParameterRange;
  hasHigh(): boolean;
  clearHigh(): ParameterRange;

  getStep(): number;
  setStep(value: number): ParameterRange;
  hasStep(): boolean;
  clearStep(): ParameterRange;

  getLog(): boolean;
  setLog(value: boolean): ParameterRange;
  hasLog(): boolean;
  clearLog(): ParameterRange;

  getChoicesList(): Array<string>;
  setChoicesList(value: Array<string>): ParameterRange;
  clearChoicesList(): ParameterRange;
  addChoices(value: string, index?: number): ParameterRange;

  getDefaultvalue(): number;
  setDefaultvalue(value: number): ParameterRange;
  hasDefaultvalue(): boolean;
  clearDefaultvalue(): ParameterRange;

  getDefaultchoice(): string;
  setDefaultchoice(value: string): ParameterRange;
  hasDefaultchoice(): boolean;
  clearDefaultchoice(): ParameterRange;

  getConditional(): boolean;
  setConditional(value: boolean): ParameterRange;
  hasConditional(): boolean;
  clearConditional(): ParameterRange;

  getParent(): string;
  setParent(value: string): ParameterRange;
  hasParent(): boolean;
  clearParent(): ParameterRange;

  getParentvaluecat(): string;
  setParentvaluecat(value: string): ParameterRange;
  hasParentvaluecat(): boolean;
  clearParentvaluecat(): ParameterRange;

  getParentvalueinteger(): number;
  setParentvalueinteger(value: number): ParameterRange;
  hasParentvalueinteger(): boolean;
  clearParentvalueinteger(): ParameterRange;

  getParentvaluefloat(): number;
  setParentvaluefloat(value: number): ParameterRange;
  hasParentvaluefloat(): boolean;
  clearParentvaluefloat(): ParameterRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterRange.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterRange): ParameterRange.AsObject;
  static serializeBinaryToWriter(message: ParameterRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterRange;
  static deserializeBinaryFromReader(message: ParameterRange, reader: jspb.BinaryReader): ParameterRange;
}

export namespace ParameterRange {
  export type AsObject = {
    name?: string,
    type?: string,
    low?: number,
    high?: number,
    step?: number,
    log?: boolean,
    choicesList: Array<string>,
    defaultvalue?: number,
    defaultchoice?: string,
    conditional?: boolean,
    parent?: string,
    parentvaluecat?: string,
    parentvalueinteger?: number,
    parentvaluefloat?: number,
  }
}

export class PermissionsSpec extends jspb.Message {
  getAccountsList(): Array<AccountPermissions>;
  setAccountsList(value: Array<AccountPermissions>): PermissionsSpec;
  clearAccountsList(): PermissionsSpec;
  addAccounts(value?: AccountPermissions, index?: number): AccountPermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionsSpec): PermissionsSpec.AsObject;
  static serializeBinaryToWriter(message: PermissionsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionsSpec;
  static deserializeBinaryFromReader(message: PermissionsSpec, reader: jspb.BinaryReader): PermissionsSpec;
}

export namespace PermissionsSpec {
  export type AsObject = {
    accountsList: Array<AccountPermissions.AsObject>,
  }
}

export class PredictionRunReference extends jspb.Message {
  getPrediction(): string;
  setPrediction(value: string): PredictionRunReference;
  hasPrediction(): boolean;
  clearPrediction(): PredictionRunReference;

  getVersion(): number;
  setVersion(value: number): PredictionRunReference;
  hasVersion(): boolean;
  clearVersion(): PredictionRunReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionRunReference.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionRunReference): PredictionRunReference.AsObject;
  static serializeBinaryToWriter(message: PredictionRunReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionRunReference;
  static deserializeBinaryFromReader(message: PredictionRunReference, reader: jspb.BinaryReader): PredictionRunReference;
}

export namespace PredictionRunReference {
  export type AsObject = {
    prediction?: string,
    version?: number,
  }
}

export class PretrainedModel extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PretrainedModel;
  hasMetadata(): boolean;
  clearMetadata(): PretrainedModel;

  getSpec(): PretrainedModelSpec | undefined;
  setSpec(value?: PretrainedModelSpec): PretrainedModel;
  hasSpec(): boolean;
  clearSpec(): PretrainedModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModel.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModel): PretrainedModel.AsObject;
  static serializeBinaryToWriter(message: PretrainedModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModel;
  static deserializeBinaryFromReader(message: PretrainedModel, reader: jspb.BinaryReader): PretrainedModel;
}

export namespace PretrainedModel {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PretrainedModelSpec.AsObject,
  }
}

export class PretrainedModelList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PretrainedModelList;
  hasMetadata(): boolean;
  clearMetadata(): PretrainedModelList;

  getItemsList(): Array<PretrainedModel>;
  setItemsList(value: Array<PretrainedModel>): PretrainedModelList;
  clearItemsList(): PretrainedModelList;
  addItems(value?: PretrainedModel, index?: number): PretrainedModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelList.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelList): PretrainedModelList.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelList;
  static deserializeBinaryFromReader(message: PretrainedModelList, reader: jspb.BinaryReader): PretrainedModelList;
}

export namespace PretrainedModelList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PretrainedModel.AsObject>,
  }
}

export class PretrainedModelSpec extends jspb.Message {
  getImage(): string;
  setImage(value: string): PretrainedModelSpec;
  hasImage(): boolean;
  clearImage(): PretrainedModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelSpec): PretrainedModelSpec.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelSpec;
  static deserializeBinaryFromReader(message: PretrainedModelSpec, reader: jspb.BinaryReader): PretrainedModelSpec;
}

export namespace PretrainedModelSpec {
  export type AsObject = {
    image?: string,
  }
}

export class PublicDataset extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PublicDataset;
  hasMetadata(): boolean;
  clearMetadata(): PublicDataset;

  getSpec(): PublicDatasetSpec | undefined;
  setSpec(value?: PublicDatasetSpec): PublicDataset;
  hasSpec(): boolean;
  clearSpec(): PublicDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDataset.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDataset): PublicDataset.AsObject;
  static serializeBinaryToWriter(message: PublicDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDataset;
  static deserializeBinaryFromReader(message: PublicDataset, reader: jspb.BinaryReader): PublicDataset;
}

export namespace PublicDataset {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PublicDatasetSpec.AsObject,
  }
}

export class PublicDatasetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PublicDatasetList;
  hasMetadata(): boolean;
  clearMetadata(): PublicDatasetList;

  getItemsList(): Array<PublicDataset>;
  setItemsList(value: Array<PublicDataset>): PublicDatasetList;
  clearItemsList(): PublicDatasetList;
  addItems(value?: PublicDataset, index?: number): PublicDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDatasetList.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDatasetList): PublicDatasetList.AsObject;
  static serializeBinaryToWriter(message: PublicDatasetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDatasetList;
  static deserializeBinaryFromReader(message: PublicDatasetList, reader: jspb.BinaryReader): PublicDatasetList;
}

export namespace PublicDatasetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PublicDataset.AsObject>,
  }
}

export class PublicDatasetSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): PublicDatasetSpec;
  hasUrl(): boolean;
  clearUrl(): PublicDatasetSpec;

  getDescription(): string;
  setDescription(value: string): PublicDatasetSpec;
  hasDescription(): boolean;
  clearDescription(): PublicDatasetSpec;

  getTask(): string;
  setTask(value: string): PublicDatasetSpec;
  hasTask(): boolean;
  clearTask(): PublicDatasetSpec;

  getOpenmlid(): string;
  setOpenmlid(value: string): PublicDatasetSpec;
  hasOpenmlid(): boolean;
  clearOpenmlid(): PublicDatasetSpec;

  getDataurl(): string;
  setDataurl(value: string): PublicDatasetSpec;
  hasDataurl(): boolean;
  clearDataurl(): PublicDatasetSpec;

  getCitation(): string;
  setCitation(value: string): PublicDatasetSpec;
  hasCitation(): boolean;
  clearCitation(): PublicDatasetSpec;

  getRows(): number;
  setRows(value: number): PublicDatasetSpec;
  hasRows(): boolean;
  clearRows(): PublicDatasetSpec;

  getColumns(): number;
  setColumns(value: number): PublicDatasetSpec;
  hasColumns(): boolean;
  clearColumns(): PublicDatasetSpec;

  getFilesize(): number;
  setFilesize(value: number): PublicDatasetSpec;
  hasFilesize(): boolean;
  clearFilesize(): PublicDatasetSpec;

  getTargetcolumn(): string;
  setTargetcolumn(value: string): PublicDatasetSpec;
  hasTargetcolumn(): boolean;
  clearTargetcolumn(): PublicDatasetSpec;

  getIndustry(): string;
  setIndustry(value: string): PublicDatasetSpec;
  hasIndustry(): boolean;
  clearIndustry(): PublicDatasetSpec;

  getImbalanced(): boolean;
  setImbalanced(value: boolean): PublicDatasetSpec;
  hasImbalanced(): boolean;
  clearImbalanced(): PublicDatasetSpec;

  getDatasourcecr(): string;
  setDatasourcecr(value: string): PublicDatasetSpec;
  hasDatasourcecr(): boolean;
  clearDatasourcecr(): PublicDatasetSpec;

  getDatasetcr(): string;
  setDatasetcr(value: string): PublicDatasetSpec;
  hasDatasetcr(): boolean;
  clearDatasetcr(): PublicDatasetSpec;

  getStudycr(): string;
  setStudycr(value: string): PublicDatasetSpec;
  hasStudycr(): boolean;
  clearStudycr(): PublicDatasetSpec;

  getDataproductcr(): string;
  setDataproductcr(value: string): PublicDatasetSpec;
  hasDataproductcr(): boolean;
  clearDataproductcr(): PublicDatasetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDatasetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDatasetSpec): PublicDatasetSpec.AsObject;
  static serializeBinaryToWriter(message: PublicDatasetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDatasetSpec;
  static deserializeBinaryFromReader(message: PublicDatasetSpec, reader: jspb.BinaryReader): PublicDatasetSpec;
}

export namespace PublicDatasetSpec {
  export type AsObject = {
    url?: string,
    description?: string,
    task?: string,
    openmlid?: string,
    dataurl?: string,
    citation?: string,
    rows?: number,
    columns?: number,
    filesize?: number,
    targetcolumn?: string,
    industry?: string,
    imbalanced?: boolean,
    datasourcecr?: string,
    datasetcr?: string,
    studycr?: string,
    dataproductcr?: string,
  }
}

export class Region extends jspb.Message {
  getCode(): string;
  setCode(value: string): Region;
  hasCode(): boolean;
  clearCode(): Region;

  getDefaultdatacentername(): string;
  setDefaultdatacentername(value: string): Region;
  hasDefaultdatacentername(): boolean;
  clearDefaultdatacentername(): Region;

  getLocation(): string;
  setLocation(value: string): Region;
  hasLocation(): boolean;
  clearLocation(): Region;

  getBillingcode(): string;
  setBillingcode(value: string): Region;
  hasBillingcode(): boolean;
  clearBillingcode(): Region;

  getDatacentersList(): Array<DataCenter>;
  setDatacentersList(value: Array<DataCenter>): Region;
  clearDatacentersList(): Region;
  addDatacenters(value?: DataCenter, index?: number): DataCenter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    code?: string,
    defaultdatacentername?: string,
    location?: string,
    billingcode?: string,
    datacentersList: Array<DataCenter.AsObject>,
  }
}

export class ResourceConsumption extends jspb.Message {
  getCpu(): number;
  setCpu(value: number): ResourceConsumption;
  hasCpu(): boolean;
  clearCpu(): ResourceConsumption;

  getMemory(): number;
  setMemory(value: number): ResourceConsumption;
  hasMemory(): boolean;
  clearMemory(): ResourceConsumption;

  getGpu(): number;
  setGpu(value: number): ResourceConsumption;
  hasGpu(): boolean;
  clearGpu(): ResourceConsumption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceConsumption.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceConsumption): ResourceConsumption.AsObject;
  static serializeBinaryToWriter(message: ResourceConsumption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceConsumption;
  static deserializeBinaryFromReader(message: ResourceConsumption, reader: jspb.BinaryReader): ResourceConsumption;
}

export namespace ResourceConsumption {
  export type AsObject = {
    cpu?: number,
    memory?: number,
    gpu?: number,
  }
}

export class ResourceSpec extends jspb.Message {
  getWorkloadname(): string;
  setWorkloadname(value: string): ResourceSpec;
  hasWorkloadname(): boolean;
  clearWorkloadname(): ResourceSpec;

  getCustom(): boolean;
  setCustom(value: boolean): ResourceSpec;
  hasCustom(): boolean;
  clearCustom(): ResourceSpec;

  getRequirements(): k8s_io_api_core_v1_generated_pb.ResourceRequirements | undefined;
  setRequirements(value?: k8s_io_api_core_v1_generated_pb.ResourceRequirements): ResourceSpec;
  hasRequirements(): boolean;
  clearRequirements(): ResourceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceSpec): ResourceSpec.AsObject;
  static serializeBinaryToWriter(message: ResourceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceSpec;
  static deserializeBinaryFromReader(message: ResourceSpec, reader: jspb.BinaryReader): ResourceSpec;
}

export namespace ResourceSpec {
  export type AsObject = {
    workloadname?: string,
    custom?: boolean,
    requirements?: k8s_io_api_core_v1_generated_pb.ResourceRequirements.AsObject,
  }
}

export class RocAucCurve extends jspb.Message {
  getValuesList(): Array<CurvePoint>;
  setValuesList(value: Array<CurvePoint>): RocAucCurve;
  clearValuesList(): RocAucCurve;
  addValues(value?: CurvePoint, index?: number): CurvePoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RocAucCurve.AsObject;
  static toObject(includeInstance: boolean, msg: RocAucCurve): RocAucCurve.AsObject;
  static serializeBinaryToWriter(message: RocAucCurve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RocAucCurve;
  static deserializeBinaryFromReader(message: RocAucCurve, reader: jspb.BinaryReader): RocAucCurve;
}

export namespace RocAucCurve {
  export type AsObject = {
    valuesList: Array<CurvePoint.AsObject>,
  }
}

export class RunRecord extends jspb.Message {
  getId(): string;
  setId(value: string): RunRecord;
  hasId(): boolean;
  clearId(): RunRecord;

  getFailuremessage(): string;
  setFailuremessage(value: string): RunRecord;
  hasFailuremessage(): boolean;
  clearFailuremessage(): RunRecord;

  getResourceversion(): number;
  setResourceversion(value: number): RunRecord;
  hasResourceversion(): boolean;
  clearResourceversion(): RunRecord;

  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunRecord;
  hasStartedat(): boolean;
  clearStartedat(): RunRecord;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunRecord;
  hasCompletedat(): boolean;
  clearCompletedat(): RunRecord;

  getLogsList(): Array<ContainerLog>;
  setLogsList(value: Array<ContainerLog>): RunRecord;
  clearLogsList(): RunRecord;
  addLogs(value?: ContainerLog, index?: number): ContainerLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunRecord.AsObject;
  static toObject(includeInstance: boolean, msg: RunRecord): RunRecord.AsObject;
  static serializeBinaryToWriter(message: RunRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunRecord;
  static deserializeBinaryFromReader(message: RunRecord, reader: jspb.BinaryReader): RunRecord;
}

export namespace RunRecord {
  export type AsObject = {
    id?: string,
    failuremessage?: string,
    resourceversion?: number,
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    logsList: Array<ContainerLog.AsObject>,
  }
}

export class RunReference extends jspb.Message {
  getName(): string;
  setName(value: string): RunReference;
  hasName(): boolean;
  clearName(): RunReference;

  getVersion(): number;
  setVersion(value: number): RunReference;
  hasVersion(): boolean;
  clearVersion(): RunReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunReference.AsObject;
  static toObject(includeInstance: boolean, msg: RunReference): RunReference.AsObject;
  static serializeBinaryToWriter(message: RunReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunReference;
  static deserializeBinaryFromReader(message: RunReference, reader: jspb.BinaryReader): RunReference;
}

export namespace RunReference {
  export type AsObject = {
    name?: string,
    version?: number,
  }
}

export class RunSchedule extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): RunSchedule;
  hasEnabled(): boolean;
  clearEnabled(): RunSchedule;

  getCron(): string;
  setCron(value: string): RunSchedule;
  hasCron(): boolean;
  clearCron(): RunSchedule;

  getType(): string;
  setType(value: string): RunSchedule;
  hasType(): boolean;
  clearType(): RunSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: RunSchedule): RunSchedule.AsObject;
  static serializeBinaryToWriter(message: RunSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunSchedule;
  static deserializeBinaryFromReader(message: RunSchedule, reader: jspb.BinaryReader): RunSchedule;
}

export namespace RunSchedule {
  export type AsObject = {
    enabled?: boolean,
    cron?: string,
    type?: string,
  }
}

export class RunScheduleStatus extends jspb.Message {
  getActiveList(): Array<RunReference>;
  setActiveList(value: Array<RunReference>): RunScheduleStatus;
  clearActiveList(): RunScheduleStatus;
  addActive(value?: RunReference, index?: number): RunReference;

  getLastscheduletime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastscheduletime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunScheduleStatus;
  hasLastscheduletime(): boolean;
  clearLastscheduletime(): RunScheduleStatus;

  getLastsuccessfultime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastsuccessfultime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunScheduleStatus;
  hasLastsuccessfultime(): boolean;
  clearLastsuccessfultime(): RunScheduleStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunScheduleStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RunScheduleStatus): RunScheduleStatus.AsObject;
  static serializeBinaryToWriter(message: RunScheduleStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunScheduleStatus;
  static deserializeBinaryFromReader(message: RunScheduleStatus, reader: jspb.BinaryReader): RunScheduleStatus;
}

export namespace RunScheduleStatus {
  export type AsObject = {
    activeList: Array<RunReference.AsObject>,
    lastscheduletime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastsuccessfultime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class RunSpec extends jspb.Message {
  getTimeout(): number;
  setTimeout(value: number): RunSpec;
  hasTimeout(): boolean;
  clearTimeout(): RunSpec;

  getMaxpreviousruns(): number;
  setMaxpreviousruns(value: number): RunSpec;
  hasMaxpreviousruns(): boolean;
  clearMaxpreviousruns(): RunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RunSpec): RunSpec.AsObject;
  static serializeBinaryToWriter(message: RunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunSpec;
  static deserializeBinaryFromReader(message: RunSpec, reader: jspb.BinaryReader): RunSpec;
}

export namespace RunSpec {
  export type AsObject = {
    timeout?: number,
    maxpreviousruns?: number,
  }
}

export class RunStatusOld extends jspb.Message {
  getLastrunat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrunat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunStatusOld;
  hasLastrunat(): boolean;
  clearLastrunat(): RunStatusOld;

  getLastrunid(): string;
  setLastrunid(value: string): RunStatusOld;
  hasLastrunid(): boolean;
  clearLastrunid(): RunStatusOld;

  getActiverunid(): string;
  setActiverunid(value: string): RunStatusOld;
  hasActiverunid(): boolean;
  clearActiverunid(): RunStatusOld;

  getActiverunlogsList(): Array<ContainerLog>;
  setActiverunlogsList(value: Array<ContainerLog>): RunStatusOld;
  clearActiverunlogsList(): RunStatusOld;
  addActiverunlogs(value?: ContainerLog, index?: number): ContainerLog;

  getRunrecordsList(): Array<RunRecord>;
  setRunrecordsList(value: Array<RunRecord>): RunStatusOld;
  clearRunrecordsList(): RunStatusOld;
  addRunrecords(value?: RunRecord, index?: number): RunRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunStatusOld.AsObject;
  static toObject(includeInstance: boolean, msg: RunStatusOld): RunStatusOld.AsObject;
  static serializeBinaryToWriter(message: RunStatusOld, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunStatusOld;
  static deserializeBinaryFromReader(message: RunStatusOld, reader: jspb.BinaryReader): RunStatusOld;
}

export namespace RunStatusOld {
  export type AsObject = {
    lastrunat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastrunid?: string,
    activerunid?: string,
    activerunlogsList: Array<ContainerLog.AsObject>,
    runrecordsList: Array<RunRecord.AsObject>,
  }
}

export class SnapshotReference extends jspb.Message {
  getDataset(): string;
  setDataset(value: string): SnapshotReference;
  hasDataset(): boolean;
  clearDataset(): SnapshotReference;

  getVersion(): number;
  setVersion(value: number): SnapshotReference;
  hasVersion(): boolean;
  clearVersion(): SnapshotReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotReference.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotReference): SnapshotReference.AsObject;
  static serializeBinaryToWriter(message: SnapshotReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotReference;
  static deserializeBinaryFromReader(message: SnapshotReference, reader: jspb.BinaryReader): SnapshotReference;
}

export namespace SnapshotReference {
  export type AsObject = {
    dataset?: string,
    version?: number,
  }
}

export class StudyRunReference extends jspb.Message {
  getStudy(): string;
  setStudy(value: string): StudyRunReference;
  hasStudy(): boolean;
  clearStudy(): StudyRunReference;

  getVersion(): number;
  setVersion(value: number): StudyRunReference;
  hasVersion(): boolean;
  clearVersion(): StudyRunReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyRunReference.AsObject;
  static toObject(includeInstance: boolean, msg: StudyRunReference): StudyRunReference.AsObject;
  static serializeBinaryToWriter(message: StudyRunReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyRunReference;
  static deserializeBinaryFromReader(message: StudyRunReference, reader: jspb.BinaryReader): StudyRunReference;
}

export namespace StudyRunReference {
  export type AsObject = {
    study?: string,
    version?: number,
  }
}

export class TestSuite extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): TestSuite;
  hasEnabled(): boolean;
  clearEnabled(): TestSuite;

  getTestsList(): Array<DataTestCase>;
  setTestsList(value: Array<DataTestCase>): TestSuite;
  clearTestsList(): TestSuite;
  addTests(value?: DataTestCase, index?: number): DataTestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestSuite.AsObject;
  static toObject(includeInstance: boolean, msg: TestSuite): TestSuite.AsObject;
  static serializeBinaryToWriter(message: TestSuite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestSuite;
  static deserializeBinaryFromReader(message: TestSuite, reader: jspb.BinaryReader): TestSuite;
}

export namespace TestSuite {
  export type AsObject = {
    enabled?: boolean,
    testsList: Array<DataTestCase.AsObject>,
  }
}

export class TestSuiteResult extends jspb.Message {
  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TestSuiteResult;
  hasEntityref(): boolean;
  clearEntityref(): TestSuiteResult;

  getFailures(): number;
  setFailures(value: number): TestSuiteResult;
  hasFailures(): boolean;
  clearFailures(): TestSuiteResult;

  getErrors(): number;
  setErrors(value: number): TestSuiteResult;
  hasErrors(): boolean;
  clearErrors(): TestSuiteResult;

  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TestSuiteResult;
  hasStartedat(): boolean;
  clearStartedat(): TestSuiteResult;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TestSuiteResult;
  hasCompletedat(): boolean;
  clearCompletedat(): TestSuiteResult;

  getTestsList(): Array<DataTestCaseResult>;
  setTestsList(value: Array<DataTestCaseResult>): TestSuiteResult;
  clearTestsList(): TestSuiteResult;
  addTests(value?: DataTestCaseResult, index?: number): DataTestCaseResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestSuiteResult.AsObject;
  static toObject(includeInstance: boolean, msg: TestSuiteResult): TestSuiteResult.AsObject;
  static serializeBinaryToWriter(message: TestSuiteResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestSuiteResult;
  static deserializeBinaryFromReader(message: TestSuiteResult, reader: jspb.BinaryReader): TestSuiteResult;
}

export namespace TestSuiteResult {
  export type AsObject = {
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    failures?: number,
    errors?: number,
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testsList: Array<DataTestCaseResult.AsObject>,
  }
}

export class WorkerRunResult extends jspb.Message {
  getId(): number;
  setId(value: number): WorkerRunResult;
  hasId(): boolean;
  clearId(): WorkerRunResult;

  getUri(): string;
  setUri(value: string): WorkerRunResult;
  hasUri(): boolean;
  clearUri(): WorkerRunResult;

  getTask(): string;
  setTask(value: string): WorkerRunResult;
  hasTask(): boolean;
  clearTask(): WorkerRunResult;

  getError(): string;
  setError(value: string): WorkerRunResult;
  hasError(): boolean;
  clearError(): WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerRunResult.AsObject;
  static toObject(includeInstance: boolean, msg: WorkerRunResult): WorkerRunResult.AsObject;
  static serializeBinaryToWriter(message: WorkerRunResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkerRunResult;
  static deserializeBinaryFromReader(message: WorkerRunResult, reader: jspb.BinaryReader): WorkerRunResult;
}

export namespace WorkerRunResult {
  export type AsObject = {
    id?: number,
    uri?: string,
    task?: string,
    error?: string,
  }
}

export class WorkloadClass extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): WorkloadClass;
  hasMetadata(): boolean;
  clearMetadata(): WorkloadClass;

  getSpec(): WorkloadClassSpec | undefined;
  setSpec(value?: WorkloadClassSpec): WorkloadClass;
  hasSpec(): boolean;
  clearSpec(): WorkloadClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadClass.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadClass): WorkloadClass.AsObject;
  static serializeBinaryToWriter(message: WorkloadClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadClass;
  static deserializeBinaryFromReader(message: WorkloadClass, reader: jspb.BinaryReader): WorkloadClass;
}

export namespace WorkloadClass {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: WorkloadClassSpec.AsObject,
  }
}

export class WorkloadClassList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): WorkloadClassList;
  hasMetadata(): boolean;
  clearMetadata(): WorkloadClassList;

  getItemsList(): Array<WorkloadClass>;
  setItemsList(value: Array<WorkloadClass>): WorkloadClassList;
  clearItemsList(): WorkloadClassList;
  addItems(value?: WorkloadClass, index?: number): WorkloadClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadClassList.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadClassList): WorkloadClassList.AsObject;
  static serializeBinaryToWriter(message: WorkloadClassList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadClassList;
  static deserializeBinaryFromReader(message: WorkloadClassList, reader: jspb.BinaryReader): WorkloadClassList;
}

export namespace WorkloadClassList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<WorkloadClass.AsObject>,
  }
}

export class WorkloadClassSpec extends jspb.Message {
  getResourcestemplate(): ResourceSpec | undefined;
  setResourcestemplate(value?: ResourceSpec): WorkloadClassSpec;
  hasResourcestemplate(): boolean;
  clearResourcestemplate(): WorkloadClassSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadClassSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadClassSpec): WorkloadClassSpec.AsObject;
  static serializeBinaryToWriter(message: WorkloadClassSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadClassSpec;
  static deserializeBinaryFromReader(message: WorkloadClassSpec, reader: jspb.BinaryReader): WorkloadClassSpec;
}

export namespace WorkloadClassSpec {
  export type AsObject = {
    resourcestemplate?: ResourceSpec.AsObject,
  }
}

