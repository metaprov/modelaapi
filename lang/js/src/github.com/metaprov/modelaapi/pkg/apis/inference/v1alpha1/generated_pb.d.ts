import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AutoScalingSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): AutoScalingSpec;
  hasEnabled(): boolean;
  clearEnabled(): AutoScalingSpec;

  getMinreplicas(): number;
  setMinreplicas(value: number): AutoScalingSpec;
  hasMinreplicas(): boolean;
  clearMinreplicas(): AutoScalingSpec;

  getMaxreplicas(): number;
  setMaxreplicas(value: number): AutoScalingSpec;
  hasMaxreplicas(): boolean;
  clearMaxreplicas(): AutoScalingSpec;

  getCpuavgutilization(): number;
  setCpuavgutilization(value: number): AutoScalingSpec;
  hasCpuavgutilization(): boolean;
  clearCpuavgutilization(): AutoScalingSpec;

  getMemavgutilization(): number;
  setMemavgutilization(value: number): AutoScalingSpec;
  hasMemavgutilization(): boolean;
  clearMemavgutilization(): AutoScalingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoScalingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AutoScalingSpec): AutoScalingSpec.AsObject;
  static serializeBinaryToWriter(message: AutoScalingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoScalingSpec;
  static deserializeBinaryFromReader(message: AutoScalingSpec, reader: jspb.BinaryReader): AutoScalingSpec;
}

export namespace AutoScalingSpec {
  export type AsObject = {
    enabled?: boolean,
    minreplicas?: number,
    maxreplicas?: number,
    cpuavgutilization?: number,
    memavgutilization?: number,
  }
}

export class BackwardCurtainSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): BackwardCurtainSpec;
  hasEnabled(): boolean;
  clearEnabled(): BackwardCurtainSpec;

  getAccountref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setAccountref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): BackwardCurtainSpec;
  hasAccountref(): boolean;
  clearAccountref(): BackwardCurtainSpec;

  getConfidencelow(): number;
  setConfidencelow(value: number): BackwardCurtainSpec;
  hasConfidencelow(): boolean;
  clearConfidencelow(): BackwardCurtainSpec;

  getConfidencehigh(): number;
  setConfidencehigh(value: number): BackwardCurtainSpec;
  hasConfidencehigh(): boolean;
  clearConfidencehigh(): BackwardCurtainSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackwardCurtainSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BackwardCurtainSpec): BackwardCurtainSpec.AsObject;
  static serializeBinaryToWriter(message: BackwardCurtainSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackwardCurtainSpec;
  static deserializeBinaryFromReader(message: BackwardCurtainSpec, reader: jspb.BinaryReader): BackwardCurtainSpec;
}

export namespace BackwardCurtainSpec {
  export type AsObject = {
    enabled?: boolean,
    accountref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    confidencelow?: number,
    confidencehigh?: number,
  }
}

export class CustomAppSpec extends jspb.Message {
  getOwner(): boolean;
  setOwner(value: boolean): CustomAppSpec;
  hasOwner(): boolean;
  clearOwner(): CustomAppSpec;

  getTitle(): string;
  setTitle(value: string): CustomAppSpec;
  hasTitle(): boolean;
  clearTitle(): CustomAppSpec;

  getPagesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>;
  setPagesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>): CustomAppSpec;
  clearPagesList(): CustomAppSpec;
  addPages(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomAppSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CustomAppSpec): CustomAppSpec.AsObject;
  static serializeBinaryToWriter(message: CustomAppSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomAppSpec;
  static deserializeBinaryFromReader(message: CustomAppSpec, reader: jspb.BinaryReader): CustomAppSpec;
}

export namespace CustomAppSpec {
  export type AsObject = {
    owner?: boolean,
    title?: string,
    pagesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec.AsObject>,
  }
}

export class DataApp extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataApp;
  hasMetadata(): boolean;
  clearMetadata(): DataApp;

  getSpec(): DataAppSpec | undefined;
  setSpec(value?: DataAppSpec): DataApp;
  hasSpec(): boolean;
  clearSpec(): DataApp;

  getStatus(): DataAppStatus | undefined;
  setStatus(value?: DataAppStatus): DataApp;
  hasStatus(): boolean;
  clearStatus(): DataApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataApp.AsObject;
  static toObject(includeInstance: boolean, msg: DataApp): DataApp.AsObject;
  static serializeBinaryToWriter(message: DataApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataApp;
  static deserializeBinaryFromReader(message: DataApp, reader: jspb.BinaryReader): DataApp;
}

export namespace DataApp {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataAppSpec.AsObject,
    status?: DataAppStatus.AsObject,
  }
}

export class DataAppList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataAppList;
  hasMetadata(): boolean;
  clearMetadata(): DataAppList;

  getItemsList(): Array<DataApp>;
  setItemsList(value: Array<DataApp>): DataAppList;
  clearItemsList(): DataAppList;
  addItems(value?: DataApp, index?: number): DataApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAppList.AsObject;
  static toObject(includeInstance: boolean, msg: DataAppList): DataAppList.AsObject;
  static serializeBinaryToWriter(message: DataAppList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAppList;
  static deserializeBinaryFromReader(message: DataAppList, reader: jspb.BinaryReader): DataAppList;
}

export namespace DataAppList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataApp.AsObject>,
  }
}

export class DataAppSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DataAppSpec;
  hasOwner(): boolean;
  clearOwner(): DataAppSpec;

  getVersionname(): string;
  setVersionname(value: string): DataAppSpec;
  hasVersionname(): boolean;
  clearVersionname(): DataAppSpec;

  getModelclassname(): string;
  setModelclassname(value: string): DataAppSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): DataAppSpec;

  getDescription(): string;
  setDescription(value: string): DataAppSpec;
  hasDescription(): boolean;
  clearDescription(): DataAppSpec;

  getModelname(): string;
  setModelname(value: string): DataAppSpec;
  hasModelname(): boolean;
  clearModelname(): DataAppSpec;

  getAccess(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec | undefined;
  setAccess(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec): DataAppSpec;
  hasAccess(): boolean;
  clearAccess(): DataAppSpec;

  getReplicas(): number;
  setReplicas(value: number): DataAppSpec;
  hasReplicas(): boolean;
  clearReplicas(): DataAppSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DataAppSpec;
  hasResources(): boolean;
  clearResources(): DataAppSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataAppSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): DataAppSpec;

  getCustom(): CustomAppSpec | undefined;
  setCustom(value?: CustomAppSpec): DataAppSpec;
  hasCustom(): boolean;
  clearCustom(): DataAppSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAppSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataAppSpec): DataAppSpec.AsObject;
  static serializeBinaryToWriter(message: DataAppSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAppSpec;
  static deserializeBinaryFromReader(message: DataAppSpec, reader: jspb.BinaryReader): DataAppSpec;
}

export namespace DataAppSpec {
  export type AsObject = {
    owner?: string,
    versionname?: string,
    modelclassname?: string,
    description?: string,
    modelname?: string,
    access?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.AsObject,
    replicas?: number,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    custom?: CustomAppSpec.AsObject,
  }
}

export class DataAppStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataAppStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DataAppStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataAppStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DataAppStatus;

  getDeploymentstatus(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDeploymentstatus(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataAppStatus;
  hasDeploymentstatus(): boolean;
  clearDeploymentstatus(): DataAppStatus;

  getServicetstatus(): k8s_io_api_core_v1_generated_pb.ServiceStatus | undefined;
  setServicetstatus(value?: k8s_io_api_core_v1_generated_pb.ServiceStatus): DataAppStatus;
  hasServicetstatus(): boolean;
  clearServicetstatus(): DataAppStatus;

  getFailurereason(): string;
  setFailurereason(value: string): DataAppStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): DataAppStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DataAppStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): DataAppStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DataAppStatus;
  clearConditionsList(): DataAppStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAppStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataAppStatus): DataAppStatus.AsObject;
  static serializeBinaryToWriter(message: DataAppStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAppStatus;
  static deserializeBinaryFromReader(message: DataAppStatus, reader: jspb.BinaryReader): DataAppStatus;
}

export namespace DataAppStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    deploymentstatus?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    servicetstatus?: k8s_io_api_core_v1_generated_pb.ServiceStatus.AsObject,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class DriftDetectionSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DriftDetectionSpec;
  hasEnabled(): boolean;
  clearEnabled(): DriftDetectionSpec;

  getGendrifttests(): boolean;
  setGendrifttests(value: boolean): DriftDetectionSpec;
  hasGendrifttests(): boolean;
  clearGendrifttests(): DriftDetectionSpec;

  getMinpredictions(): number;
  setMinpredictions(value: number): DriftDetectionSpec;
  hasMinpredictions(): boolean;
  clearMinpredictions(): DriftDetectionSpec;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): DriftDetectionSpec;
  clearColumnsList(): DriftDetectionSpec;
  addColumns(value: string, index?: number): DriftDetectionSpec;

  getDriftthresholdsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold>;
  setDriftthresholdsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold>): DriftDetectionSpec;
  clearDriftthresholdsList(): DriftDetectionSpec;
  addDriftthresholds(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): DriftDetectionSpec;
  hasSchedule(): boolean;
  clearSchedule(): DriftDetectionSpec;

  getOutlierdetectionmodelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setOutlierdetectionmodelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DriftDetectionSpec;
  hasOutlierdetectionmodelref(): boolean;
  clearOutlierdetectionmodelref(): DriftDetectionSpec;

  getMaxhistograms(): number;
  setMaxhistograms(value: number): DriftDetectionSpec;
  hasMaxhistograms(): boolean;
  clearMaxhistograms(): DriftDetectionSpec;

  getPeriodseconds(): number;
  setPeriodseconds(value: number): DriftDetectionSpec;
  hasPeriodseconds(): boolean;
  clearPeriodseconds(): DriftDetectionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriftDetectionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DriftDetectionSpec): DriftDetectionSpec.AsObject;
  static serializeBinaryToWriter(message: DriftDetectionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriftDetectionSpec;
  static deserializeBinaryFromReader(message: DriftDetectionSpec, reader: jspb.BinaryReader): DriftDetectionSpec;
}

export namespace DriftDetectionSpec {
  export type AsObject = {
    enabled?: boolean,
    gendrifttests?: boolean,
    minpredictions?: number,
    columnsList: Array<string>,
    driftthresholdsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold.AsObject>,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    outlierdetectionmodelref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    maxhistograms?: number,
    periodseconds?: number,
  }
}

export class FastSlowModelSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FastSlowModelSpec;
  hasEnabled(): boolean;
  clearEnabled(): FastSlowModelSpec;

  getFastmodelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setFastmodelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): FastSlowModelSpec;
  hasFastmodelref(): boolean;
  clearFastmodelref(): FastSlowModelSpec;

  getSlowmodelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setSlowmodelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): FastSlowModelSpec;
  hasSlowmodelref(): boolean;
  clearSlowmodelref(): FastSlowModelSpec;

  getProbalowpct(): number;
  setProbalowpct(value: number): FastSlowModelSpec;
  hasProbalowpct(): boolean;
  clearProbalowpct(): FastSlowModelSpec;

  getProbahighpct(): number;
  setProbahighpct(value: number): FastSlowModelSpec;
  hasProbahighpct(): boolean;
  clearProbahighpct(): FastSlowModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FastSlowModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FastSlowModelSpec): FastSlowModelSpec.AsObject;
  static serializeBinaryToWriter(message: FastSlowModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FastSlowModelSpec;
  static deserializeBinaryFromReader(message: FastSlowModelSpec, reader: jspb.BinaryReader): FastSlowModelSpec;
}

export namespace FastSlowModelSpec {
  export type AsObject = {
    enabled?: boolean,
    fastmodelref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    slowmodelref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    probalowpct?: number,
    probahighpct?: number,
  }
}

export class FeedbackTestSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FeedbackTestSpec;
  hasEnabled(): boolean;
  clearEnabled(): FeedbackTestSpec;

  getTests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setTests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): FeedbackTestSpec;
  hasTests(): boolean;
  clearTests(): FeedbackTestSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): FeedbackTestSpec;
  hasSchedule(): boolean;
  clearSchedule(): FeedbackTestSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedbackTestSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeedbackTestSpec): FeedbackTestSpec.AsObject;
  static serializeBinaryToWriter(message: FeedbackTestSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedbackTestSpec;
  static deserializeBinaryFromReader(message: FeedbackTestSpec, reader: jspb.BinaryReader): FeedbackTestSpec;
}

export namespace FeedbackTestSpec {
  export type AsObject = {
    enabled?: boolean,
    tests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
  }
}

export class ForecastPredictionSpec extends jspb.Message {
  getHierarchyvaluesMap(): jspb.Map<string, string>;
  clearHierarchyvaluesMap(): ForecastPredictionSpec;

  getHorizon(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec | undefined;
  setHorizon(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec): ForecastPredictionSpec;
  hasHorizon(): boolean;
  clearHorizon(): ForecastPredictionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastPredictionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastPredictionSpec): ForecastPredictionSpec.AsObject;
  static serializeBinaryToWriter(message: ForecastPredictionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastPredictionSpec;
  static deserializeBinaryFromReader(message: ForecastPredictionSpec, reader: jspb.BinaryReader): ForecastPredictionSpec;
}

export namespace ForecastPredictionSpec {
  export type AsObject = {
    hierarchyvaluesMap: Array<[string, string]>,
    horizon?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.AsObject,
  }
}

export class ForecastRun extends jspb.Message {
  getKey(): string;
  setKey(value: string): ForecastRun;
  hasKey(): boolean;
  clearKey(): ForecastRun;

  getModellocation(): string;
  setModellocation(value: string): ForecastRun;
  hasModellocation(): boolean;
  clearModellocation(): ForecastRun;

  getHorizon(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec | undefined;
  setHorizon(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec): ForecastRun;
  hasHorizon(): boolean;
  clearHorizon(): ForecastRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastRun.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastRun): ForecastRun.AsObject;
  static serializeBinaryToWriter(message: ForecastRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastRun;
  static deserializeBinaryFromReader(message: ForecastRun, reader: jspb.BinaryReader): ForecastRun;
}

export namespace ForecastRun {
  export type AsObject = {
    key?: string,
    modellocation?: string,
    horizon?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.AsObject,
  }
}

export class ForecastSpec extends jspb.Message {
  getRunsMap(): jspb.Map<string, ForecastRun>;
  clearRunsMap(): ForecastSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastSpec): ForecastSpec.AsObject;
  static serializeBinaryToWriter(message: ForecastSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastSpec;
  static deserializeBinaryFromReader(message: ForecastSpec, reader: jspb.BinaryReader): ForecastSpec;
}

export namespace ForecastSpec {
  export type AsObject = {
    runsMap: Array<[string, ForecastRun.AsObject]>,
  }
}

export class ForecastStatus extends jspb.Message {
  getProfileuri(): string;
  setProfileuri(value: string): ForecastStatus;
  hasProfileuri(): boolean;
  clearProfileuri(): ForecastStatus;

  getReporturi(): string;
  setReporturi(value: string): ForecastStatus;
  hasReporturi(): boolean;
  clearReporturi(): ForecastStatus;

  getForecasturi(): string;
  setForecasturi(value: string): ForecastStatus;
  hasForecasturi(): boolean;
  clearForecasturi(): ForecastStatus;

  getFailed(): boolean;
  setFailed(value: boolean): ForecastStatus;
  hasFailed(): boolean;
  clearFailed(): ForecastStatus;

  getFailuremsg(): string;
  setFailuremsg(value: string): ForecastStatus;
  hasFailuremsg(): boolean;
  clearFailuremsg(): ForecastStatus;

  getWorkerresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>;
  setWorkerresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>): ForecastStatus;
  clearWorkerresultsList(): ForecastStatus;
  addWorkerresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastStatus): ForecastStatus.AsObject;
  static serializeBinaryToWriter(message: ForecastStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastStatus;
  static deserializeBinaryFromReader(message: ForecastStatus, reader: jspb.BinaryReader): ForecastStatus;
}

export namespace ForecastStatus {
  export type AsObject = {
    profileuri?: string,
    reporturi?: string,
    forecasturi?: string,
    failed?: boolean,
    failuremsg?: string,
    workerresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.AsObject>,
  }
}

export class ForwardCurtainSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ForwardCurtainSpec;
  hasEnabled(): boolean;
  clearEnabled(): ForwardCurtainSpec;

  getAccountref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setAccountref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ForwardCurtainSpec;
  hasAccountref(): boolean;
  clearAccountref(): ForwardCurtainSpec;

  getPercent(): number;
  setPercent(value: number): ForwardCurtainSpec;
  hasPercent(): boolean;
  clearPercent(): ForwardCurtainSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardCurtainSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardCurtainSpec): ForwardCurtainSpec.AsObject;
  static serializeBinaryToWriter(message: ForwardCurtainSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardCurtainSpec;
  static deserializeBinaryFromReader(message: ForwardCurtainSpec, reader: jspb.BinaryReader): ForwardCurtainSpec;
}

export namespace ForwardCurtainSpec {
  export type AsObject = {
    enabled?: boolean,
    accountref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    percent?: number,
  }
}

export class MetricHistory extends jspb.Message {
  getMetric(): string;
  setMetric(value: string): MetricHistory;
  hasMetric(): boolean;
  clearMetric(): MetricHistory;

  getHistoryList(): Array<number>;
  setHistoryList(value: Array<number>): MetricHistory;
  clearHistoryList(): MetricHistory;
  addHistory(value: number, index?: number): MetricHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricHistory.AsObject;
  static toObject(includeInstance: boolean, msg: MetricHistory): MetricHistory.AsObject;
  static serializeBinaryToWriter(message: MetricHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricHistory;
  static deserializeBinaryFromReader(message: MetricHistory, reader: jspb.BinaryReader): MetricHistory;
}

export namespace MetricHistory {
  export type AsObject = {
    metric?: string,
    historyList: Array<number>,
  }
}

export class ModelDeploymentRecord extends jspb.Message {
  getModelname(): string;
  setModelname(value: string): ModelDeploymentRecord;
  hasModelname(): boolean;
  clearModelname(): ModelDeploymentRecord;

  getModelversion(): string;
  setModelversion(value: string): ModelDeploymentRecord;
  hasModelversion(): boolean;
  clearModelversion(): ModelDeploymentRecord;

  getModelrole(): string;
  setModelrole(value: string): ModelDeploymentRecord;
  hasModelrole(): boolean;
  clearModelrole(): ModelDeploymentRecord;

  getImagename(): string;
  setImagename(value: string): ModelDeploymentRecord;
  hasImagename(): boolean;
  clearImagename(): ModelDeploymentRecord;

  getDeployedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDeployedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentRecord;
  hasDeployedat(): boolean;
  clearDeployedat(): ModelDeploymentRecord;

  getRetiredat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setRetiredat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentRecord;
  hasRetiredat(): boolean;
  clearRetiredat(): ModelDeploymentRecord;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelDeploymentRecord;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ModelDeploymentRecord;

  getAvgdailyprediction(): number;
  setAvgdailyprediction(value: number): ModelDeploymentRecord;
  hasAvgdailyprediction(): boolean;
  clearAvgdailyprediction(): ModelDeploymentRecord;

  getAvglatency(): number;
  setAvglatency(value: number): ModelDeploymentRecord;
  hasAvglatency(): boolean;
  clearAvglatency(): ModelDeploymentRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelDeploymentRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ModelDeploymentRecord): ModelDeploymentRecord.AsObject;
  static serializeBinaryToWriter(message: ModelDeploymentRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelDeploymentRecord;
  static deserializeBinaryFromReader(message: ModelDeploymentRecord, reader: jspb.BinaryReader): ModelDeploymentRecord;
}

export namespace ModelDeploymentRecord {
  export type AsObject = {
    modelname?: string,
    modelversion?: string,
    modelrole?: string,
    imagename?: string,
    deployedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    retiredat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failuremessage?: string,
    avgdailyprediction?: number,
    avglatency?: number,
  }
}

export class ModelDeploymentStatus extends jspb.Message {
  getModelname(): string;
  setModelname(value: string): ModelDeploymentStatus;
  hasModelname(): boolean;
  clearModelname(): ModelDeploymentStatus;

  getModelversion(): string;
  setModelversion(value: string): ModelDeploymentStatus;
  hasModelversion(): boolean;
  clearModelversion(): ModelDeploymentStatus;

  getModelrole(): string;
  setModelrole(value: string): ModelDeploymentStatus;
  hasModelrole(): boolean;
  clearModelrole(): ModelDeploymentStatus;

  getImagename(): string;
  setImagename(value: string): ModelDeploymentStatus;
  hasImagename(): boolean;
  clearImagename(): ModelDeploymentStatus;

  getDeploymentref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDeploymentref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentStatus;
  hasDeploymentref(): boolean;
  clearDeploymentref(): ModelDeploymentStatus;

  getServiceref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServiceref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentStatus;
  hasServiceref(): boolean;
  clearServiceref(): ModelDeploymentStatus;

  getHparef(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setHparef(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentStatus;
  hasHparef(): boolean;
  clearHparef(): ModelDeploymentStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelDeploymentStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ModelDeploymentStatus;

  getDeployedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDeployedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentStatus;
  hasDeployedat(): boolean;
  clearDeployedat(): ModelDeploymentStatus;

  getLastfeedbackdatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLastfeedbackdatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelDeploymentStatus;
  hasLastfeedbackdatasetref(): boolean;
  clearLastfeedbackdatasetref(): ModelDeploymentStatus;

  getLastfeedbacktestat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastfeedbacktestat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelDeploymentStatus;
  hasLastfeedbacktestat(): boolean;
  clearLastfeedbacktestat(): ModelDeploymentStatus;

  getLastfeedbacktestresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setLastfeedbacktestresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelDeploymentStatus;
  clearLastfeedbacktestresultsList(): ModelDeploymentStatus;
  addLastfeedbacktestresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getMetricshistoryMap(): jspb.Map<string, MetricHistory>;
  clearMetricshistoryMap(): ModelDeploymentStatus;

  getAvgdailyprediction(): number;
  setAvgdailyprediction(value: number): ModelDeploymentStatus;
  hasAvgdailyprediction(): boolean;
  clearAvgdailyprediction(): ModelDeploymentStatus;

  getAvglatency(): number;
  setAvglatency(value: number): ModelDeploymentStatus;
  hasAvglatency(): boolean;
  clearAvglatency(): ModelDeploymentStatus;

  getEndpoint(): string;
  setEndpoint(value: string): ModelDeploymentStatus;
  hasEndpoint(): boolean;
  clearEndpoint(): ModelDeploymentStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelDeploymentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelDeploymentStatus): ModelDeploymentStatus.AsObject;
  static serializeBinaryToWriter(message: ModelDeploymentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelDeploymentStatus;
  static deserializeBinaryFromReader(message: ModelDeploymentStatus, reader: jspb.BinaryReader): ModelDeploymentStatus;
}

export namespace ModelDeploymentStatus {
  export type AsObject = {
    modelname?: string,
    modelversion?: string,
    modelrole?: string,
    imagename?: string,
    deploymentref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    serviceref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    hparef?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    failuremessage?: string,
    deployedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastfeedbackdatasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    lastfeedbacktestat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastfeedbacktestresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    metricshistoryMap: Array<[string, MetricHistory.AsObject]>,
    avgdailyprediction?: number,
    avglatency?: number,
    endpoint?: string,
  }
}

export class ModelServingSpec extends jspb.Message {
  getServerless(): boolean;
  setServerless(value: boolean): ModelServingSpec;
  hasServerless(): boolean;
  clearServerless(): ModelServingSpec;

  getServingtests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setServingtests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelServingSpec;
  hasServingtests(): boolean;
  clearServingtests(): ModelServingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelServingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelServingSpec): ModelServingSpec.AsObject;
  static serializeBinaryToWriter(message: ModelServingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelServingSpec;
  static deserializeBinaryFromReader(message: ModelServingSpec, reader: jspb.BinaryReader): ModelServingSpec;
}

export namespace ModelServingSpec {
  export type AsObject = {
    serverless?: boolean,
    servingtests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
  }
}

export class OnlineFeatureStoreSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): OnlineFeatureStoreSpec;
  hasEnabled(): boolean;
  clearEnabled(): OnlineFeatureStoreSpec;

  getHostname(): string;
  setHostname(value: string): OnlineFeatureStoreSpec;
  hasHostname(): boolean;
  clearHostname(): OnlineFeatureStoreSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineFeatureStoreSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineFeatureStoreSpec): OnlineFeatureStoreSpec.AsObject;
  static serializeBinaryToWriter(message: OnlineFeatureStoreSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineFeatureStoreSpec;
  static deserializeBinaryFromReader(message: OnlineFeatureStoreSpec, reader: jspb.BinaryReader): OnlineFeatureStoreSpec;
}

export namespace OnlineFeatureStoreSpec {
  export type AsObject = {
    enabled?: boolean,
    hostname?: string,
  }
}

export class OnlineStoreStatus extends jspb.Message {
  getLastaccessed(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastaccessed(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): OnlineStoreStatus;
  hasLastaccessed(): boolean;
  clearLastaccessed(): OnlineStoreStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineStoreStatus.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineStoreStatus): OnlineStoreStatus.AsObject;
  static serializeBinaryToWriter(message: OnlineStoreStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineStoreStatus;
  static deserializeBinaryFromReader(message: OnlineStoreStatus, reader: jspb.BinaryReader): OnlineStoreStatus;
}

export namespace OnlineStoreStatus {
  export type AsObject = {
    lastaccessed?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class PartitionPredictionLocationsSpec extends jspb.Message {
  getGroupforecastfile(): string;
  setGroupforecastfile(value: string): PartitionPredictionLocationsSpec;
  hasGroupforecastfile(): boolean;
  clearGroupforecastfile(): PartitionPredictionLocationsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionPredictionLocationsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionPredictionLocationsSpec): PartitionPredictionLocationsSpec.AsObject;
  static serializeBinaryToWriter(message: PartitionPredictionLocationsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionPredictionLocationsSpec;
  static deserializeBinaryFromReader(message: PartitionPredictionLocationsSpec, reader: jspb.BinaryReader): PartitionPredictionLocationsSpec;
}

export namespace PartitionPredictionLocationsSpec {
  export type AsObject = {
    groupforecastfile?: string,
  }
}

export class Prediction extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Prediction;
  hasMetadata(): boolean;
  clearMetadata(): Prediction;

  getSpec(): PredictionSpec | undefined;
  setSpec(value?: PredictionSpec): Prediction;
  hasSpec(): boolean;
  clearSpec(): Prediction;

  getStatus(): PredictionStatus | undefined;
  setStatus(value?: PredictionStatus): Prediction;
  hasStatus(): boolean;
  clearStatus(): Prediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prediction.AsObject;
  static toObject(includeInstance: boolean, msg: Prediction): Prediction.AsObject;
  static serializeBinaryToWriter(message: Prediction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prediction;
  static deserializeBinaryFromReader(message: Prediction, reader: jspb.BinaryReader): Prediction;
}

export namespace Prediction {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PredictionSpec.AsObject,
    status?: PredictionStatus.AsObject,
  }
}

export class PredictionCacheSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): PredictionCacheSpec;
  hasEnabled(): boolean;
  clearEnabled(): PredictionCacheSpec;

  getInmemory(): boolean;
  setInmemory(value: boolean): PredictionCacheSpec;
  hasInmemory(): boolean;
  clearInmemory(): PredictionCacheSpec;

  getRedis(): boolean;
  setRedis(value: boolean): PredictionCacheSpec;
  hasRedis(): boolean;
  clearRedis(): PredictionCacheSpec;

  getConnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setConnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictionCacheSpec;
  hasConnectionref(): boolean;
  clearConnectionref(): PredictionCacheSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionCacheSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionCacheSpec): PredictionCacheSpec.AsObject;
  static serializeBinaryToWriter(message: PredictionCacheSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionCacheSpec;
  static deserializeBinaryFromReader(message: PredictionCacheSpec, reader: jspb.BinaryReader): PredictionCacheSpec;
}

export namespace PredictionCacheSpec {
  export type AsObject = {
    enabled?: boolean,
    inmemory?: boolean,
    redis?: boolean,
    connectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class PredictionList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PredictionList;
  hasMetadata(): boolean;
  clearMetadata(): PredictionList;

  getItemsList(): Array<Prediction>;
  setItemsList(value: Array<Prediction>): PredictionList;
  clearItemsList(): PredictionList;
  addItems(value?: Prediction, index?: number): Prediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionList.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionList): PredictionList.AsObject;
  static serializeBinaryToWriter(message: PredictionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionList;
  static deserializeBinaryFromReader(message: PredictionList, reader: jspb.BinaryReader): PredictionList;
}

export namespace PredictionList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Prediction.AsObject>,
  }
}

export class PredictionLoggingSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): PredictionLoggingSpec;
  hasEnabled(): boolean;
  clearEnabled(): PredictionLoggingSpec;

  getSamplepercent(): number;
  setSamplepercent(value: number): PredictionLoggingSpec;
  hasSamplepercent(): boolean;
  clearSamplepercent(): PredictionLoggingSpec;

  getRows(): number;
  setRows(value: number): PredictionLoggingSpec;
  hasRows(): boolean;
  clearRows(): PredictionLoggingSpec;

  getBackupfreqseconds(): number;
  setBackupfreqseconds(value: number): PredictionLoggingSpec;
  hasBackupfreqseconds(): boolean;
  clearBackupfreqseconds(): PredictionLoggingSpec;

  getBackupconnectionref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setBackupconnectionref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictionLoggingSpec;
  hasBackupconnectionref(): boolean;
  clearBackupconnectionref(): PredictionLoggingSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): PredictionLoggingSpec;
  hasLocation(): boolean;
  clearLocation(): PredictionLoggingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionLoggingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionLoggingSpec): PredictionLoggingSpec.AsObject;
  static serializeBinaryToWriter(message: PredictionLoggingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionLoggingSpec;
  static deserializeBinaryFromReader(message: PredictionLoggingSpec, reader: jspb.BinaryReader): PredictionLoggingSpec;
}

export namespace PredictionLoggingSpec {
  export type AsObject = {
    enabled?: boolean,
    samplepercent?: number,
    rows?: number,
    backupfreqseconds?: number,
    backupconnectionref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class PredictionSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): PredictionSpec;
  hasVersionname(): boolean;
  clearVersionname(): PredictionSpec;

  getOwner(): string;
  setOwner(value: string): PredictionSpec;
  hasOwner(): boolean;
  clearOwner(): PredictionSpec;

  getInput(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec | undefined;
  setInput(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec): PredictionSpec;
  hasInput(): boolean;
  clearInput(): PredictionSpec;

  getOutput(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec | undefined;
  setOutput(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec): PredictionSpec;
  hasOutput(): boolean;
  clearOutput(): PredictionSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictionSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): PredictionSpec;

  getModelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setModelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictionSpec;
  hasModelref(): boolean;
  clearModelref(): PredictionSpec;

  getCreatedataset(): boolean;
  setCreatedataset(value: boolean): PredictionSpec;
  hasCreatedataset(): boolean;
  clearCreatedataset(): PredictionSpec;

  getLabeled(): boolean;
  setLabeled(value: boolean): PredictionSpec;
  hasLabeled(): boolean;
  clearLabeled(): PredictionSpec;

  getUnittests(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite | undefined;
  setUnittests(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite): PredictionSpec;
  hasUnittests(): boolean;
  clearUnittests(): PredictionSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): PredictionSpec;
  hasResources(): boolean;
  clearResources(): PredictionSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): PredictionSpec;
  hasActivedeadlineseconds(): boolean;
  clearActivedeadlineseconds(): PredictionSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CronSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CronSchedule): PredictionSpec;
  hasSchedule(): boolean;
  clearSchedule(): PredictionSpec;

  getAbort(): boolean;
  setAbort(value: boolean): PredictionSpec;
  hasAbort(): boolean;
  clearAbort(): PredictionSpec;

  getForecastspec(): ForecastPredictionSpec | undefined;
  setForecastspec(value?: ForecastPredictionSpec): PredictionSpec;
  hasForecastspec(): boolean;
  clearForecastspec(): PredictionSpec;

  getPartitionlocation(): PartitionPredictionLocationsSpec | undefined;
  setPartitionlocation(value?: PartitionPredictionLocationsSpec): PredictionSpec;
  hasPartitionlocation(): boolean;
  clearPartitionlocation(): PredictionSpec;

  getModelclassname(): string;
  setModelclassname(value: string): PredictionSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): PredictionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionSpec): PredictionSpec.AsObject;
  static serializeBinaryToWriter(message: PredictionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionSpec;
  static deserializeBinaryFromReader(message: PredictionSpec, reader: jspb.BinaryReader): PredictionSpec;
}

export namespace PredictionSpec {
  export type AsObject = {
    versionname?: string,
    owner?: string,
    input?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.AsObject,
    output?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    modelref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    createdataset?: boolean,
    labeled?: boolean,
    unittests?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite.AsObject,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    activedeadlineseconds?: number,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CronSchedule.AsObject,
    abort?: boolean,
    forecastspec?: ForecastPredictionSpec.AsObject,
    partitionlocation?: PartitionPredictionLocationsSpec.AsObject,
    modelclassname?: string,
  }
}

export class PredictionStatus extends jspb.Message {
  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): PredictionStatus;

  getPhase(): string;
  setPhase(value: string): PredictionStatus;
  hasPhase(): boolean;
  clearPhase(): PredictionStatus;

  getUnittestsresult(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setUnittestsresult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): PredictionStatus;
  hasUnittestsresult(): boolean;
  clearUnittestsresult(): PredictionStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): PredictionStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): PredictionStatus;

  getRows(): number;
  setRows(value: number): PredictionStatus;
  hasRows(): boolean;
  clearRows(): PredictionStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): PredictionStatus;
  hasLogs(): boolean;
  clearLogs(): PredictionStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictionStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): PredictionStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): PredictionStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): PredictionStatus;

  getDatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictionStatus;
  hasDatasetref(): boolean;
  clearDatasetref(): PredictionStatus;

  getForecast(): ForecastStatus | undefined;
  setForecast(value?: ForecastStatus): PredictionStatus;
  hasForecast(): boolean;
  clearForecast(): PredictionStatus;

  getUsage(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption | undefined;
  setUsage(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption): PredictionStatus;
  hasUsage(): boolean;
  clearUsage(): PredictionStatus;

  getRuns(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunStatus | undefined;
  setRuns(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunStatus): PredictionStatus;
  hasRuns(): boolean;
  clearRuns(): PredictionStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): PredictionStatus;
  clearConditionsList(): PredictionStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionStatus): PredictionStatus.AsObject;
  static serializeBinaryToWriter(message: PredictionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionStatus;
  static deserializeBinaryFromReader(message: PredictionStatus, reader: jspb.BinaryReader): PredictionStatus;
}

export namespace PredictionStatus {
  export type AsObject = {
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase?: string,
    unittestsresult?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    observedgeneration?: number,
    rows?: number,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failuremessage?: string,
    datasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    forecast?: ForecastStatus.AsObject,
    usage?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.AsObject,
    runs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunStatus.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class Predictor extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Predictor;
  hasMetadata(): boolean;
  clearMetadata(): Predictor;

  getSpec(): PredictorSpec | undefined;
  setSpec(value?: PredictorSpec): Predictor;
  hasSpec(): boolean;
  clearSpec(): Predictor;

  getStatus(): PredictorStatus | undefined;
  setStatus(value?: PredictorStatus): Predictor;
  hasStatus(): boolean;
  clearStatus(): Predictor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Predictor.AsObject;
  static toObject(includeInstance: boolean, msg: Predictor): Predictor.AsObject;
  static serializeBinaryToWriter(message: Predictor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Predictor;
  static deserializeBinaryFromReader(message: Predictor, reader: jspb.BinaryReader): Predictor;
}

export namespace Predictor {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PredictorSpec.AsObject,
    status?: PredictorStatus.AsObject,
  }
}

export class PredictorList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PredictorList;
  hasMetadata(): boolean;
  clearMetadata(): PredictorList;

  getItemsList(): Array<Predictor>;
  setItemsList(value: Array<Predictor>): PredictorList;
  clearItemsList(): PredictorList;
  addItems(value?: Predictor, index?: number): Predictor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorList.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorList): PredictorList.AsObject;
  static serializeBinaryToWriter(message: PredictorList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorList;
  static deserializeBinaryFromReader(message: PredictorList, reader: jspb.BinaryReader): PredictorList;
}

export namespace PredictorList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Predictor.AsObject>,
  }
}

export class PredictorSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): PredictorSpec;
  hasVersionname(): boolean;
  clearVersionname(): PredictorSpec;

  getModelclassname(): string;
  setModelclassname(value: string): PredictorSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): PredictorSpec;

  getDescription(): string;
  setDescription(value: string): PredictorSpec;
  hasDescription(): boolean;
  clearDescription(): PredictorSpec;

  getProductref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setProductref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorSpec;
  hasProductref(): boolean;
  clearProductref(): PredictorSpec;

  getTemplate(): boolean;
  setTemplate(value: boolean): PredictorSpec;
  hasTemplate(): boolean;
  clearTemplate(): PredictorSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): PredictorSpec;

  getModelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec>;
  setModelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec>): PredictorSpec;
  clearModelsList(): PredictorSpec;
  addModels(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec;

  getProgressive(): ProgressiveSpec | undefined;
  setProgressive(value?: ProgressiveSpec): PredictorSpec;
  hasProgressive(): boolean;
  clearProgressive(): PredictorSpec;

  getAccess(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec | undefined;
  setAccess(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec): PredictorSpec;
  hasAccess(): boolean;
  clearAccess(): PredictorSpec;

  getReplicas(): number;
  setReplicas(value: number): PredictorSpec;
  hasReplicas(): boolean;
  clearReplicas(): PredictorSpec;

  getAutoscaling(): AutoScalingSpec | undefined;
  setAutoscaling(value?: AutoScalingSpec): PredictorSpec;
  hasAutoscaling(): boolean;
  clearAutoscaling(): PredictorSpec;

  getOwner(): string;
  setOwner(value: string): PredictorSpec;
  hasOwner(): boolean;
  clearOwner(): PredictorSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): PredictorSpec;
  hasResources(): boolean;
  clearResources(): PredictorSpec;

  getCache(): PredictionCacheSpec | undefined;
  setCache(value?: PredictionCacheSpec): PredictorSpec;
  hasCache(): boolean;
  clearCache(): PredictorSpec;

  getStore(): OnlineFeatureStoreSpec | undefined;
  setStore(value?: OnlineFeatureStoreSpec): PredictorSpec;
  hasStore(): boolean;
  clearStore(): PredictorSpec;

  getServing(): ModelServingSpec | undefined;
  setServing(value?: ModelServingSpec): PredictorSpec;
  hasServing(): boolean;
  clearServing(): PredictorSpec;

  getTask(): string;
  setTask(value: string): PredictorSpec;
  hasTask(): boolean;
  clearTask(): PredictorSpec;

  getDrift(): DriftDetectionSpec | undefined;
  setDrift(value?: DriftDetectionSpec): PredictorSpec;
  hasDrift(): boolean;
  clearDrift(): PredictorSpec;

  getFeedback(): FeedbackTestSpec | undefined;
  setFeedback(value?: FeedbackTestSpec): PredictorSpec;
  hasFeedback(): boolean;
  clearFeedback(): PredictorSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): PredictorSpec;
  hasNotification(): boolean;
  clearNotification(): PredictorSpec;

  getPredictionlogging(): PredictionLoggingSpec | undefined;
  setPredictionlogging(value?: PredictionLoggingSpec): PredictorSpec;
  hasPredictionlogging(): boolean;
  clearPredictionlogging(): PredictorSpec;

  getForwardcurtain(): ForwardCurtainSpec | undefined;
  setForwardcurtain(value?: ForwardCurtainSpec): PredictorSpec;
  hasForwardcurtain(): boolean;
  clearForwardcurtain(): PredictorSpec;

  getBackwardcurtain(): BackwardCurtainSpec | undefined;
  setBackwardcurtain(value?: BackwardCurtainSpec): PredictorSpec;
  hasBackwardcurtain(): boolean;
  clearBackwardcurtain(): PredictorSpec;

  getFastslow(): FastSlowModelSpec | undefined;
  setFastslow(value?: FastSlowModelSpec): PredictorSpec;
  hasFastslow(): boolean;
  clearFastslow(): PredictorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorSpec): PredictorSpec.AsObject;
  static serializeBinaryToWriter(message: PredictorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorSpec;
  static deserializeBinaryFromReader(message: PredictorSpec, reader: jspb.BinaryReader): PredictorSpec;
}

export namespace PredictorSpec {
  export type AsObject = {
    versionname?: string,
    modelclassname?: string,
    description?: string,
    productref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    template?: boolean,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    modelsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.AsObject>,
    progressive?: ProgressiveSpec.AsObject,
    access?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.AsObject,
    replicas?: number,
    autoscaling?: AutoScalingSpec.AsObject,
    owner?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    cache?: PredictionCacheSpec.AsObject,
    store?: OnlineFeatureStoreSpec.AsObject,
    serving?: ModelServingSpec.AsObject,
    task?: string,
    drift?: DriftDetectionSpec.AsObject,
    feedback?: FeedbackTestSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    predictionlogging?: PredictionLoggingSpec.AsObject,
    forwardcurtain?: ForwardCurtainSpec.AsObject,
    backwardcurtain?: BackwardCurtainSpec.AsObject,
    fastslow?: FastSlowModelSpec.AsObject,
  }
}

export class PredictorStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): PredictorStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): PredictorStatus;

  getHistoryList(): Array<ModelDeploymentRecord>;
  setHistoryList(value: Array<ModelDeploymentRecord>): PredictorStatus;
  clearHistoryList(): PredictorStatus;
  addHistory(value?: ModelDeploymentRecord, index?: number): ModelDeploymentRecord;

  getModelstatusList(): Array<ModelDeploymentStatus>;
  setModelstatusList(value: Array<ModelDeploymentStatus>): PredictorStatus;
  clearModelstatusList(): PredictorStatus;
  addModelstatus(value?: ModelDeploymentStatus, index?: number): ModelDeploymentStatus;

  getPredictorletstatus(): PredictorletStatus | undefined;
  setPredictorletstatus(value?: PredictorletStatus): PredictorStatus;
  hasPredictorletstatus(): boolean;
  clearPredictorletstatus(): PredictorStatus;

  getOnlinestorestatus(): OnlineStoreStatus | undefined;
  setOnlinestorestatus(value?: OnlineStoreStatus): PredictorStatus;
  hasOnlinestorestatus(): boolean;
  clearOnlinestorestatus(): PredictorStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): PredictorStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): PredictorStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): PredictorStatus;

  getLoadbalancerstatus(): k8s_io_api_core_v1_generated_pb.LoadBalancerStatus | undefined;
  setLoadbalancerstatus(value?: k8s_io_api_core_v1_generated_pb.LoadBalancerStatus): PredictorStatus;
  hasLoadbalancerstatus(): boolean;
  clearLoadbalancerstatus(): PredictorStatus;

  getLastpredictiondataset(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLastpredictiondataset(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorStatus;
  hasLastpredictiondataset(): boolean;
  clearLastpredictiondataset(): PredictorStatus;

  getServingtestsresults(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setServingtestsresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): PredictorStatus;
  hasServingtestsresults(): boolean;
  clearServingtestsresults(): PredictorStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): PredictorStatus;
  clearConditionsList(): PredictorStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorStatus): PredictorStatus.AsObject;
  static serializeBinaryToWriter(message: PredictorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorStatus;
  static deserializeBinaryFromReader(message: PredictorStatus, reader: jspb.BinaryReader): PredictorStatus;
}

export namespace PredictorStatus {
  export type AsObject = {
    observedgeneration?: number,
    historyList: Array<ModelDeploymentRecord.AsObject>,
    modelstatusList: Array<ModelDeploymentStatus.AsObject>,
    predictorletstatus?: PredictorletStatus.AsObject,
    onlinestorestatus?: OnlineStoreStatus.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failuremessage?: string,
    loadbalancerstatus?: k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.AsObject,
    lastpredictiondataset?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    servingtestsresults?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class PredictorletStatus extends jspb.Message {
  getDeploymentref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDeploymentref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorletStatus;
  hasDeploymentref(): boolean;
  clearDeploymentref(): PredictorletStatus;

  getServiceref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServiceref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): PredictorletStatus;
  hasServiceref(): boolean;
  clearServiceref(): PredictorletStatus;

  getDeployedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setDeployedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorletStatus;
  hasDeployedat(): boolean;
  clearDeployedat(): PredictorletStatus;

  getP50(): number;
  setP50(value: number): PredictorletStatus;
  hasP50(): boolean;
  clearP50(): PredictorletStatus;

  getP95(): number;
  setP95(value: number): PredictorletStatus;
  hasP95(): boolean;
  clearP95(): PredictorletStatus;

  getP99(): number;
  setP99(value: number): PredictorletStatus;
  hasP99(): boolean;
  clearP99(): PredictorletStatus;

  getAvgdailyprediction(): number;
  setAvgdailyprediction(value: number): PredictorletStatus;
  hasAvgdailyprediction(): boolean;
  clearAvgdailyprediction(): PredictorletStatus;

  getTotalpredictions(): number;
  setTotalpredictions(value: number): PredictorletStatus;
  hasTotalpredictions(): boolean;
  clearTotalpredictions(): PredictorletStatus;

  getLastpredictiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastpredictiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): PredictorletStatus;
  hasLastpredictiontime(): boolean;
  clearLastpredictiontime(): PredictorletStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): PredictorletStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): PredictorletStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictorletStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PredictorletStatus): PredictorletStatus.AsObject;
  static serializeBinaryToWriter(message: PredictorletStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictorletStatus;
  static deserializeBinaryFromReader(message: PredictorletStatus, reader: jspb.BinaryReader): PredictorletStatus;
}

export namespace PredictorletStatus {
  export type AsObject = {
    deploymentref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    serviceref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    deployedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    p50?: number,
    p95?: number,
    p99?: number,
    avgdailyprediction?: number,
    totalpredictions?: number,
    lastpredictiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failuremessage?: string,
  }
}

export class ProgressiveSpec extends jspb.Message {
  getWarmup(): number;
  setWarmup(value: number): ProgressiveSpec;
  hasWarmup(): boolean;
  clearWarmup(): ProgressiveSpec;

  getTrafficincrement(): number;
  setTrafficincrement(value: number): ProgressiveSpec;
  hasTrafficincrement(): boolean;
  clearTrafficincrement(): ProgressiveSpec;

  getCanarymetricsList(): Array<string>;
  setCanarymetricsList(value: Array<string>): ProgressiveSpec;
  clearCanarymetricsList(): ProgressiveSpec;
  addCanarymetrics(value: string, index?: number): ProgressiveSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgressiveSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ProgressiveSpec): ProgressiveSpec.AsObject;
  static serializeBinaryToWriter(message: ProgressiveSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgressiveSpec;
  static deserializeBinaryFromReader(message: ProgressiveSpec, reader: jspb.BinaryReader): ProgressiveSpec;
}

export namespace ProgressiveSpec {
  export type AsObject = {
    warmup?: number,
    trafficincrement?: number,
    canarymetricsList: Array<string>,
  }
}

export class ValidationError extends jspb.Message {
  getColumn(): string;
  setColumn(value: string): ValidationError;
  hasColumn(): boolean;
  clearColumn(): ValidationError;

  getMetric(): string;
  setMetric(value: string): ValidationError;
  hasMetric(): boolean;
  clearMetric(): ValidationError;

  getMin(): number;
  setMin(value: number): ValidationError;
  hasMin(): boolean;
  clearMin(): ValidationError;

  getMax(): number;
  setMax(value: number): ValidationError;
  hasMax(): boolean;
  clearMax(): ValidationError;

  getActual(): number;
  setActual(value: number): ValidationError;
  hasActual(): boolean;
  clearActual(): ValidationError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationError): ValidationError.AsObject;
  static serializeBinaryToWriter(message: ValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationError;
  static deserializeBinaryFromReader(message: ValidationError, reader: jspb.BinaryReader): ValidationError;
}

export namespace ValidationError {
  export type AsObject = {
    column?: string,
    metric?: string,
    min?: number,
    max?: number,
    actual?: number,
  }
}

