import * as jspb from 'google-protobuf'

import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_api_resource_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AccessSpec extends jspb.Message {
  getPort(): number;
  setPort(value: number): AccessSpec;

  getNodeport(): number;
  setNodeport(value: number): AccessSpec;

  getPath(): string;
  setPath(value: string): AccessSpec;

  getAccesstype(): string;
  setAccesstype(value: string): AccessSpec;

  getRest(): boolean;
  setRest(value: boolean): AccessSpec;

  getAuthmethod(): string;
  setAuthmethod(value: string): AccessSpec;

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
    port: number,
    nodeport: number,
    path: string,
    accesstype: string,
    rest: boolean,
    authmethod: string,
    apikeysecretref?: k8s_io_api_core_v1_generated_pb.SecretReference.AsObject,
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

  getDescription(): string;
  setDescription(value: string): AlgorithmSpec;

  getUrl(): string;
  setUrl(value: string): AlgorithmSpec;

  getTask(): string;
  setTask(value: string): AlgorithmSpec;

  getSparse(): boolean;
  setSparse(value: boolean): AlgorithmSpec;

  getIntegerparametersList(): Array<IntParameter>;
  setIntegerparametersList(value: Array<IntParameter>): AlgorithmSpec;
  clearIntegerparametersList(): AlgorithmSpec;
  addIntegerparameters(value?: IntParameter, index?: number): IntParameter;

  getFloatparametersList(): Array<FloatParameter>;
  setFloatparametersList(value: Array<FloatParameter>): AlgorithmSpec;
  clearFloatparametersList(): AlgorithmSpec;
  addFloatparameters(value?: FloatParameter, index?: number): FloatParameter;

  getCategoricalparametersList(): Array<CategoricalParameter>;
  setCategoricalparametersList(value: Array<CategoricalParameter>): AlgorithmSpec;
  clearCategoricalparametersList(): AlgorithmSpec;
  addCategoricalparameters(value?: CategoricalParameter, index?: number): CategoricalParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmSpec): AlgorithmSpec.AsObject;
  static serializeBinaryToWriter(message: AlgorithmSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmSpec;
  static deserializeBinaryFromReader(message: AlgorithmSpec, reader: jspb.BinaryReader): AlgorithmSpec;
}

export namespace AlgorithmSpec {
  export type AsObject = {
    frameworkname: string,
    description: string,
    url: string,
    task: string,
    sparse: boolean,
    integerparametersList: Array<IntParameter.AsObject>,
    floatparametersList: Array<FloatParameter.AsObject>,
    categoricalparametersList: Array<CategoricalParameter.AsObject>,
  }
}

export class CategoricalParameter extends jspb.Message {
  getName(): string;
  setName(value: string): CategoricalParameter;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): CategoricalParameter;

  getEnumsList(): Array<string>;
  setEnumsList(value: Array<string>): CategoricalParameter;
  clearEnumsList(): CategoricalParameter;
  addEnums(value: string, index?: number): CategoricalParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoricalParameter.AsObject;
  static toObject(includeInstance: boolean, msg: CategoricalParameter): CategoricalParameter.AsObject;
  static serializeBinaryToWriter(message: CategoricalParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoricalParameter;
  static deserializeBinaryFromReader(message: CategoricalParameter, reader: jspb.BinaryReader): CategoricalParameter;
}

export namespace CategoricalParameter {
  export type AsObject = {
    name: string,
    defaultvalue: string,
    enumsList: Array<string>,
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

  getDefaultmachineclassname(): string;
  setDefaultmachineclassname(value: string): CloudSpec;

  getDefaultgpuclassname(): string;
  setDefaultgpuclassname(value: string): CloudSpec;

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
    defaultregionname: string,
    defaultmachineclassname: string,
    defaultgpuclassname: string,
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
    enable: boolean,
    compiler: string,
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

  getP(): string;
  setP(value: string): ConfusionMatrixRow;

  getCount(): number;
  setCount(value: number): ConfusionMatrixRow;

  getPct(): number;
  setPct(value: number): ConfusionMatrixRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfusionMatrixRow.AsObject;
  static toObject(includeInstance: boolean, msg: ConfusionMatrixRow): ConfusionMatrixRow.AsObject;
  static serializeBinaryToWriter(message: ConfusionMatrixRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfusionMatrixRow;
  static deserializeBinaryFromReader(message: ConfusionMatrixRow, reader: jspb.BinaryReader): ConfusionMatrixRow;
}

export namespace ConfusionMatrixRow {
  export type AsObject = {
    t: string,
    p: string,
    count: number,
    pct: number,
  }
}

export class ContainerLog extends jspb.Message {
  getJob(): string;
  setJob(value: string): ContainerLog;

  getContainer(): string;
  setContainer(value: string): ContainerLog;

  getKey(): string;
  setKey(value: string): ContainerLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainerLog.AsObject;
  static toObject(includeInstance: boolean, msg: ContainerLog): ContainerLog.AsObject;
  static serializeBinaryToWriter(message: ContainerLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainerLog;
  static deserializeBinaryFromReader(message: ContainerLog, reader: jspb.BinaryReader): ContainerLog;
}

export namespace ContainerLog {
  export type AsObject = {
    job: string,
    container: string,
    key: string,
  }
}

export class CurvePoint extends jspb.Message {
  getX(): number;
  setX(value: number): CurvePoint;

  getY(): number;
  setY(value: number): CurvePoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurvePoint.AsObject;
  static toObject(includeInstance: boolean, msg: CurvePoint): CurvePoint.AsObject;
  static serializeBinaryToWriter(message: CurvePoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurvePoint;
  static deserializeBinaryFromReader(message: CurvePoint, reader: jspb.BinaryReader): CurvePoint;
}

export namespace CurvePoint {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class DataCenter extends jspb.Message {
  getName(): string;
  setName(value: string): DataCenter;

  getCode(): string;
  setCode(value: string): DataCenter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCenter.AsObject;
  static toObject(includeInstance: boolean, msg: DataCenter): DataCenter.AsObject;
  static serializeBinaryToWriter(message: DataCenter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCenter;
  static deserializeBinaryFromReader(message: DataCenter, reader: jspb.BinaryReader): DataCenter;
}

export namespace DataCenter {
  export type AsObject = {
    name: string,
    code: string,
  }
}

export class DataTestCase extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DataTestCase;

  getName(): string;
  setName(value: string): DataTestCase;

  getAssertthat(): string;
  setAssertthat(value: string): DataTestCase;

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

  getType(): string;
  setType(value: string): DataTestCase;

  getMetric(): string;
  setMetric(value: string): DataTestCase;

  getExpectedvalue(): number;
  setExpectedvalue(value: number): DataTestCase;

  getExpectedcategory(): string;
  setExpectedcategory(value: string): DataTestCase;

  getLower(): number;
  setLower(value: number): DataTestCase;

  getUpper(): number;
  setUpper(value: number): DataTestCase;

  getExpectedsetList(): Array<string>;
  setExpectedsetList(value: Array<string>): DataTestCase;
  clearExpectedsetList(): DataTestCase;
  addExpectedset(value: string, index?: number): DataTestCase;

  getLowerinclusive(): boolean;
  setLowerinclusive(value: boolean): DataTestCase;

  getUpperinclusive(): boolean;
  setUpperinclusive(value: boolean): DataTestCase;

  getGenerated(): boolean;
  setGenerated(value: boolean): DataTestCase;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): DataTestCase;
  clearTagsList(): DataTestCase;
  addTags(value: string, index?: number): DataTestCase;

  getColumn2(): string;
  setColumn2(value: string): DataTestCase;

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

  getReferencetype(): string;
  setReferencetype(value: string): DataTestCase;

  getPeriods(): number;
  setPeriods(value: number): DataTestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTestCase.AsObject;
  static toObject(includeInstance: boolean, msg: DataTestCase): DataTestCase.AsObject;
  static serializeBinaryToWriter(message: DataTestCase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTestCase;
  static deserializeBinaryFromReader(message: DataTestCase, reader: jspb.BinaryReader): DataTestCase;
}

export namespace DataTestCase {
  export type AsObject = {
    enabled: boolean,
    name: string,
    assertthat: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    comparetoref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    column: string,
    type: string,
    metric: string,
    expectedvalue: number,
    expectedcategory: string,
    lower: number,
    upper: number,
    expectedsetList: Array<string>,
    lowerinclusive: boolean,
    upperinclusive: boolean,
    generated: boolean,
    tagsList: Array<string>,
    column2: string,
    entityref2?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    columnsList: Array<string>,
    featurefilter: string,
    referencetype: string,
    periods: number,
  }
}

export class DataTestCaseResult extends jspb.Message {
  getName(): string;
  setName(value: string): DataTestCaseResult;

  getActual(): Measurement | undefined;
  setActual(value?: Measurement): DataTestCaseResult;
  hasActual(): boolean;
  clearActual(): DataTestCaseResult;

  getFailure(): boolean;
  setFailure(value: boolean): DataTestCaseResult;

  getError(): boolean;
  setError(value: boolean): DataTestCaseResult;

  getFailuremsg(): string;
  setFailuremsg(value: string): DataTestCaseResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTestCaseResult.AsObject;
  static toObject(includeInstance: boolean, msg: DataTestCaseResult): DataTestCaseResult.AsObject;
  static serializeBinaryToWriter(message: DataTestCaseResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTestCaseResult;
  static deserializeBinaryFromReader(message: DataTestCaseResult, reader: jspb.BinaryReader): DataTestCaseResult;
}

export namespace DataTestCaseResult {
  export type AsObject = {
    name: string,
    actual?: Measurement.AsObject,
    failure: boolean,
    error: boolean,
    failuremsg: string,
  }
}

export class FloatParameter extends jspb.Message {
  getName(): string;
  setName(value: string): FloatParameter;

  getMin(): number;
  setMin(value: number): FloatParameter;

  getMax(): number;
  setMax(value: number): FloatParameter;

  getDefaultvalue(): number;
  setDefaultvalue(value: number): FloatParameter;

  getLog(): boolean;
  setLog(value: boolean): FloatParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatParameter.AsObject;
  static toObject(includeInstance: boolean, msg: FloatParameter): FloatParameter.AsObject;
  static serializeBinaryToWriter(message: FloatParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatParameter;
  static deserializeBinaryFromReader(message: FloatParameter, reader: jspb.BinaryReader): FloatParameter;
}

export namespace FloatParameter {
  export type AsObject = {
    name: string,
    min: number,
    max: number,
    defaultvalue: number,
    log: boolean,
  }
}

export class GithubEvents extends jspb.Message {
  getGitconnectionname(): string;
  setGitconnectionname(value: string): GithubEvents;

  getRepository(): string;
  setRepository(value: string): GithubEvents;

  getBranch(): string;
  setBranch(value: string): GithubEvents;

  getBlobnameregex(): string;
  setBlobnameregex(value: string): GithubEvents;

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
    gitconnectionname: string,
    repository: string,
    branch: string,
    blobnameregex: string,
    eventsList: Array<string>,
  }
}

export class GpuClass extends jspb.Message {
  getCode(): string;
  setCode(value: string): GpuClass;

  getRegionname(): string;
  setRegionname(value: string): GpuClass;

  getVcpu(): number;
  setVcpu(value: number): GpuClass;

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
    code: string,
    regionname: string,
    vcpu: number,
    gpumem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class GpuClassCost extends jspb.Message {
  getCode(): string;
  setCode(value: string): GpuClassCost;

  getRegion(): string;
  setRegion(value: string): GpuClassCost;

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
    code: string,
    region: string,
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

  getInvalid(): number;
  setInvalid(value: number): HistogramData;

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
    missing: number,
    invalid: number,
  }
}

export class Images extends jspb.Message {
  getTrainerimage(): string;
  setTrainerimage(value: string): Images;

  getDataimage(): string;
  setDataimage(value: string): Images;

  getPublisherimage(): string;
  setPublisherimage(value: string): Images;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Images.AsObject;
  static toObject(includeInstance: boolean, msg: Images): Images.AsObject;
  static serializeBinaryToWriter(message: Images, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Images;
  static deserializeBinaryFromReader(message: Images, reader: jspb.BinaryReader): Images;
}

export namespace Images {
  export type AsObject = {
    trainerimage: string,
    dataimage: string,
    publisherimage: string,
  }
}

export class IntParameter extends jspb.Message {
  getName(): string;
  setName(value: string): IntParameter;

  getType(): string;
  setType(value: string): IntParameter;

  getMin(): number;
  setMin(value: number): IntParameter;

  getMax(): number;
  setMax(value: number): IntParameter;

  getDefaultvalue(): number;
  setDefaultvalue(value: number): IntParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntParameter.AsObject;
  static toObject(includeInstance: boolean, msg: IntParameter): IntParameter.AsObject;
  static serializeBinaryToWriter(message: IntParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntParameter;
  static deserializeBinaryFromReader(message: IntParameter, reader: jspb.BinaryReader): IntParameter;
}

export namespace IntParameter {
  export type AsObject = {
    name: string,
    type: string,
    min: number,
    max: number,
    defaultvalue: number,
  }
}

export class LastRunStatus extends jspb.Message {
  getName(): string;
  setName(value: string): LastRunStatus;

  getStatus(): string;
  setStatus(value: string): LastRunStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): LastRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): LastRunStatus;

  getDuration(): number;
  setDuration(value: number): LastRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): LastRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): LastRunStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: LastRunStatus): LastRunStatus.AsObject;
  static serializeBinaryToWriter(message: LastRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastRunStatus;
  static deserializeBinaryFromReader(message: LastRunStatus, reader: jspb.BinaryReader): LastRunStatus;
}

export namespace LastRunStatus {
  export type AsObject = {
    name: string,
    status: string,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    duration: number,
    failurereason: string,
    failuremessage: string,
  }
}

export class Lib extends jspb.Message {
  getFrameworks(): string;
  setFrameworks(value: string): Lib;

  getVersion(): string;
  setVersion(value: string): Lib;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lib.AsObject;
  static toObject(includeInstance: boolean, msg: Lib): Lib.AsObject;
  static serializeBinaryToWriter(message: Lib, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lib;
  static deserializeBinaryFromReader(message: Lib, reader: jspb.BinaryReader): Lib;
}

export namespace Lib {
  export type AsObject = {
    frameworks: string,
    version: string,
  }
}

export class Logs extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): Logs;

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
    bucketname: string,
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

  getDescription(): string;
  setDescription(value: string): MLFrameworkSpec;

  getVersion(): string;
  setVersion(value: string): MLFrameworkSpec;

  getLang(): string;
  setLang(value: string): MLFrameworkSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFrameworkSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MLFrameworkSpec): MLFrameworkSpec.AsObject;
  static serializeBinaryToWriter(message: MLFrameworkSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFrameworkSpec;
  static deserializeBinaryFromReader(message: MLFrameworkSpec, reader: jspb.BinaryReader): MLFrameworkSpec;
}

export namespace MLFrameworkSpec {
  export type AsObject = {
    url: string,
    description: string,
    version: string,
    lang: string,
  }
}

export class MachineClass extends jspb.Message {
  getCode(): string;
  setCode(value: string): MachineClass;

  getRegionname(): string;
  setRegionname(value: string): MachineClass;

  getMem(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setMem(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): MachineClass;
  hasMem(): boolean;
  clearMem(): MachineClass;

  getVcpu(): number;
  setVcpu(value: number): MachineClass;

  getStorage(): string;
  setStorage(value: string): MachineClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineClass.AsObject;
  static toObject(includeInstance: boolean, msg: MachineClass): MachineClass.AsObject;
  static serializeBinaryToWriter(message: MachineClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineClass;
  static deserializeBinaryFromReader(message: MachineClass, reader: jspb.BinaryReader): MachineClass;
}

export namespace MachineClass {
  export type AsObject = {
    code: string,
    regionname: string,
    mem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    vcpu: number,
    storage: string,
  }
}

export class MachineClassCost extends jspb.Message {
  getCode(): string;
  setCode(value: string): MachineClassCost;

  getRegion(): string;
  setRegion(value: string): MachineClassCost;

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
    code: string,
    region: string,
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

  getRegistry(): string;
  setRegistry(value: string): ManagedImageSpec;

  getRepository(): string;
  setRepository(value: string): ManagedImageSpec;

  getTag(): string;
  setTag(value: string): ManagedImageSpec;

  getEnvList(): Array<k8s_io_api_core_v1_generated_pb.EnvVar>;
  setEnvList(value: Array<k8s_io_api_core_v1_generated_pb.EnvVar>): ManagedImageSpec;
  clearEnvList(): ManagedImageSpec;
  addEnv(value?: k8s_io_api_core_v1_generated_pb.EnvVar, index?: number): k8s_io_api_core_v1_generated_pb.EnvVar;

  getGpu(): boolean;
  setGpu(value: boolean): ManagedImageSpec;

  getActive(): boolean;
  setActive(value: boolean): ManagedImageSpec;

  getPreload(): boolean;
  setPreload(value: boolean): ManagedImageSpec;

  getConnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setConnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ManagedImageSpec;
  hasConnectionref(): boolean;
  clearConnectionref(): ManagedImageSpec;

  getBase(): string;
  setBase(value: string): ManagedImageSpec;

  getRole(): string;
  setRole(value: string): ManagedImageSpec;

  getMantainedby(): string;
  setMantainedby(value: string): ManagedImageSpec;

  getUri(): string;
  setUri(value: string): ManagedImageSpec;

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

  getOsversion(): string;
  setOsversion(value: string): ManagedImageSpec;

  getPrivate(): boolean;
  setPrivate(value: boolean): ManagedImageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedImageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedImageSpec): ManagedImageSpec.AsObject;
  static serializeBinaryToWriter(message: ManagedImageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedImageSpec;
  static deserializeBinaryFromReader(message: ManagedImageSpec, reader: jspb.BinaryReader): ManagedImageSpec;
}

export namespace ManagedImageSpec {
  export type AsObject = {
    description: string,
    registry: string,
    repository: string,
    tag: string,
    envList: Array<k8s_io_api_core_v1_generated_pb.EnvVar.AsObject>,
    gpu: boolean,
    active: boolean,
    preload: boolean,
    connectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    base: string,
    role: string,
    mantainedby: string,
    uri: string,
    frameworksList: Array<string>,
    libsList: Array<Lib.AsObject>,
    os: string,
    osversion: string,
    pb_private: boolean,
  }
}

export class Measurement extends jspb.Message {
  getEntity(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntity(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): Measurement;
  hasEntity(): boolean;
  clearEntity(): Measurement;

  getColumn(): string;
  setColumn(value: string): Measurement;

  getMetric(): string;
  setMetric(value: string): Measurement;

  getValue(): number;
  setValue(value: number): Measurement;

  getStddev(): number;
  setStddev(value: number): Measurement;

  getBoolqty(): boolean;
  setBoolqty(value: boolean): Measurement;

  getCategory(): string;
  setCategory(value: string): Measurement;

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

  getAlgorithm(): string;
  setAlgorithm(value: string): Measurement;

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
    column: string,
    metric: string,
    value: number,
    stddev: number,
    boolqty: boolean,
    category: string,
    valuesetList: Array<string>,
    timepoint?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    tasktype: string,
    algorithm: string,
  }
}

export class ModelDeploymentSpec extends jspb.Message {
  getModelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setModelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentSpec;
  hasModelref(): boolean;
  clearModelref(): ModelDeploymentSpec;

  getPort(): number;
  setPort(value: number): ModelDeploymentSpec;

  getModelversion(): string;
  setModelversion(value: string): ModelDeploymentSpec;

  getTraffic(): number;
  setTraffic(value: number): ModelDeploymentSpec;

  getRole(): string;
  setRole(value: string): ModelDeploymentSpec;

  getMounttar(): boolean;
  setMounttar(value: boolean): ModelDeploymentSpec;

  getTrafficselector(): string;
  setTrafficselector(value: string): ModelDeploymentSpec;

  getApprovedby(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setApprovedby(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentSpec;
  hasApprovedby(): boolean;
  clearApprovedby(): ModelDeploymentSpec;

  getApprovedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setApprovedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentSpec;
  hasApprovedat(): boolean;
  clearApprovedat(): ModelDeploymentSpec;

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
    port: number,
    modelversion: string,
    traffic: number,
    role: string,
    mounttar: boolean,
    trafficselector: string,
    approvedby?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    approvedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class NotificationSpec extends jspb.Message {
  getErrorttl(): number;
  setErrorttl(value: number): NotificationSpec;

  getSuccessttl(): number;
  setSuccessttl(value: number): NotificationSpec;

  getNotifiername(): string;
  setNotifiername(value: string): NotificationSpec;

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
    errorttl: number,
    successttl: number,
    notifiername: string,
    selectorMap: Array<[string, string]>,
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

export class PermissionsSpec extends jspb.Message {
  getStakeholdersList(): Array<Stakeholder>;
  setStakeholdersList(value: Array<Stakeholder>): PermissionsSpec;
  clearStakeholdersList(): PermissionsSpec;
  addStakeholders(value?: Stakeholder, index?: number): Stakeholder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionsSpec): PermissionsSpec.AsObject;
  static serializeBinaryToWriter(message: PermissionsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionsSpec;
  static deserializeBinaryFromReader(message: PermissionsSpec, reader: jspb.BinaryReader): PermissionsSpec;
}

export namespace PermissionsSpec {
  export type AsObject = {
    stakeholdersList: Array<Stakeholder.AsObject>,
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelSpec): PretrainedModelSpec.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelSpec;
  static deserializeBinaryFromReader(message: PretrainedModelSpec, reader: jspb.BinaryReader): PretrainedModelSpec;
}

export namespace PretrainedModelSpec {
  export type AsObject = {
    image: string,
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

  getDescription(): string;
  setDescription(value: string): PublicDatasetSpec;

  getTask(): string;
  setTask(value: string): PublicDatasetSpec;

  getOpenmlid(): string;
  setOpenmlid(value: string): PublicDatasetSpec;

  getDataurl(): string;
  setDataurl(value: string): PublicDatasetSpec;

  getCitation(): string;
  setCitation(value: string): PublicDatasetSpec;

  getRows(): number;
  setRows(value: number): PublicDatasetSpec;

  getColumns(): number;
  setColumns(value: number): PublicDatasetSpec;

  getFilesize(): number;
  setFilesize(value: number): PublicDatasetSpec;

  getTargetcolumn(): string;
  setTargetcolumn(value: string): PublicDatasetSpec;

  getIndustry(): string;
  setIndustry(value: string): PublicDatasetSpec;

  getImbalanced(): boolean;
  setImbalanced(value: boolean): PublicDatasetSpec;

  getDatasourcecr(): string;
  setDatasourcecr(value: string): PublicDatasetSpec;

  getDatasetcr(): string;
  setDatasetcr(value: string): PublicDatasetSpec;

  getStudycr(): string;
  setStudycr(value: string): PublicDatasetSpec;

  getDataproductcr(): string;
  setDataproductcr(value: string): PublicDatasetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDatasetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDatasetSpec): PublicDatasetSpec.AsObject;
  static serializeBinaryToWriter(message: PublicDatasetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDatasetSpec;
  static deserializeBinaryFromReader(message: PublicDatasetSpec, reader: jspb.BinaryReader): PublicDatasetSpec;
}

export namespace PublicDatasetSpec {
  export type AsObject = {
    url: string,
    description: string,
    task: string,
    openmlid: string,
    dataurl: string,
    citation: string,
    rows: number,
    columns: number,
    filesize: number,
    targetcolumn: string,
    industry: string,
    imbalanced: boolean,
    datasourcecr: string,
    datasetcr: string,
    studycr: string,
    dataproductcr: string,
  }
}

export class Region extends jspb.Message {
  getCode(): string;
  setCode(value: string): Region;

  getDefaultdatacentername(): string;
  setDefaultdatacentername(value: string): Region;

  getLocation(): string;
  setLocation(value: string): Region;

  getBillingcode(): string;
  setBillingcode(value: string): Region;

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
    code: string,
    defaultdatacentername: string,
    location: string,
    billingcode: string,
    datacentersList: Array<DataCenter.AsObject>,
  }
}

export class ResourceSpec extends jspb.Message {
  getWorkloadname(): string;
  setWorkloadname(value: string): ResourceSpec;

  getCustom(): boolean;
  setCustom(value: boolean): ResourceSpec;

  getCpuimage(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setCpuimage(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ResourceSpec;
  hasCpuimage(): boolean;
  clearCpuimage(): ResourceSpec;

  getGpuimage(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setGpuimage(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ResourceSpec;
  hasGpuimage(): boolean;
  clearGpuimage(): ResourceSpec;

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
    workloadname: string,
    custom: boolean,
    cpuimage?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    gpuimage?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
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

export class RunSchedule extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): RunSchedule;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunSchedule;
  hasStarttime(): boolean;
  clearStarttime(): RunSchedule;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunSchedule;
  hasEndtime(): boolean;
  clearEndtime(): RunSchedule;

  getCron(): string;
  setCron(value: string): RunSchedule;

  getType(): string;
  setType(value: string): RunSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: RunSchedule): RunSchedule.AsObject;
  static serializeBinaryToWriter(message: RunSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunSchedule;
  static deserializeBinaryFromReader(message: RunSchedule, reader: jspb.BinaryReader): RunSchedule;
}

export namespace RunSchedule {
  export type AsObject = {
    enabled: boolean,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    cron: string,
    type: string,
  }
}

export class RunScheduleStatus extends jspb.Message {
  getLastrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunScheduleStatus;
  hasLastrun(): boolean;
  clearLastrun(): RunScheduleStatus;

  getNextrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setNextrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunScheduleStatus;
  hasNextrun(): boolean;
  clearNextrun(): RunScheduleStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RunScheduleStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): RunScheduleStatus;

  getDuration(): number;
  setDuration(value: number): RunScheduleStatus;

  getFailurereason(): string;
  setFailurereason(value: string): RunScheduleStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): RunScheduleStatus;

  getLogs(): Logs | undefined;
  setLogs(value?: Logs): RunScheduleStatus;
  hasLogs(): boolean;
  clearLogs(): RunScheduleStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunScheduleStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RunScheduleStatus): RunScheduleStatus.AsObject;
  static serializeBinaryToWriter(message: RunScheduleStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunScheduleStatus;
  static deserializeBinaryFromReader(message: RunScheduleStatus, reader: jspb.BinaryReader): RunScheduleStatus;
}

export namespace RunScheduleStatus {
  export type AsObject = {
    lastrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    nextrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    duration: number,
    failurereason: string,
    failuremessage: string,
    logs?: Logs.AsObject,
  }
}

export class Stakeholder extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): Stakeholder;

  getRolesList(): Array<k8s_io_api_core_v1_generated_pb.ObjectReference>;
  setRolesList(value: Array<k8s_io_api_core_v1_generated_pb.ObjectReference>): Stakeholder;
  clearRolesList(): Stakeholder;
  addRoles(value?: k8s_io_api_core_v1_generated_pb.ObjectReference, index?: number): k8s_io_api_core_v1_generated_pb.ObjectReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stakeholder.AsObject;
  static toObject(includeInstance: boolean, msg: Stakeholder): Stakeholder.AsObject;
  static serializeBinaryToWriter(message: Stakeholder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stakeholder;
  static deserializeBinaryFromReader(message: Stakeholder, reader: jspb.BinaryReader): Stakeholder;
}

export namespace Stakeholder {
  export type AsObject = {
    account: string,
    rolesList: Array<k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject>,
  }
}

export class TestSuite extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): TestSuite;

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
    enabled: boolean,
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

  getErrors(): number;
  setErrors(value: number): TestSuiteResult;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TestSuiteResult;
  hasStarttime(): boolean;
  clearStarttime(): TestSuiteResult;

  getStoptime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStoptime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): TestSuiteResult;
  hasStoptime(): boolean;
  clearStoptime(): TestSuiteResult;

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
    failures: number,
    errors: number,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    stoptime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testsList: Array<DataTestCaseResult.AsObject>,
  }
}

export class VizUri extends jspb.Message {
  getName(): string;
  setName(value: string): VizUri;

  getUri(): string;
  setUri(value: string): VizUri;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VizUri.AsObject;
  static toObject(includeInstance: boolean, msg: VizUri): VizUri.AsObject;
  static serializeBinaryToWriter(message: VizUri, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VizUri;
  static deserializeBinaryFromReader(message: VizUri, reader: jspb.BinaryReader): VizUri;
}

export namespace VizUri {
  export type AsObject = {
    name: string,
    uri: string,
  }
}

export class WorkerRunResult extends jspb.Message {
  getId(): number;
  setId(value: number): WorkerRunResult;

  getUri(): string;
  setUri(value: string): WorkerRunResult;

  getTask(): string;
  setTask(value: string): WorkerRunResult;

  getError(): string;
  setError(value: string): WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerRunResult.AsObject;
  static toObject(includeInstance: boolean, msg: WorkerRunResult): WorkerRunResult.AsObject;
  static serializeBinaryToWriter(message: WorkerRunResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkerRunResult;
  static deserializeBinaryFromReader(message: WorkerRunResult, reader: jspb.BinaryReader): WorkerRunResult;
}

export namespace WorkerRunResult {
  export type AsObject = {
    id: number,
    uri: string,
    task: string,
    error: string,
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

