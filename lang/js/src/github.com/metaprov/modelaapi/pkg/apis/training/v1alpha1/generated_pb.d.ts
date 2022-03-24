import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AlgorithmSearchSpaceSpec extends jspb.Message {
  getAllowlistList(): Array<string>;
  setAllowlistList(value: Array<string>): AlgorithmSearchSpaceSpec;
  clearAllowlistList(): AlgorithmSearchSpaceSpec;
  addAllowlist(value: string, index?: number): AlgorithmSearchSpaceSpec;

  getFilter(): string;
  setFilter(value: string): AlgorithmSearchSpaceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmSearchSpaceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmSearchSpaceSpec): AlgorithmSearchSpaceSpec.AsObject;
  static serializeBinaryToWriter(message: AlgorithmSearchSpaceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmSearchSpaceSpec;
  static deserializeBinaryFromReader(message: AlgorithmSearchSpaceSpec, reader: jspb.BinaryReader): AlgorithmSearchSpaceSpec;
}

export namespace AlgorithmSearchSpaceSpec {
  export type AsObject = {
    allowlistList: Array<string>,
    filter: string,
  }
}

export class AudioPipelineSpec extends jspb.Message {
  getFeaturizer(): string;
  setFeaturizer(value: string): AudioPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AudioPipelineSpec): AudioPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: AudioPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioPipelineSpec;
  static deserializeBinaryFromReader(message: AudioPipelineSpec, reader: jspb.BinaryReader): AudioPipelineSpec;
}

export namespace AudioPipelineSpec {
  export type AsObject = {
    featurizer: string,
  }
}

export class BacktestSpec extends jspb.Message {
  getSliding(): boolean;
  setSliding(value: boolean): BacktestSpec;

  getSplits(): number;
  setSplits(value: number): BacktestSpec;

  getMaxtrainsize(): number;
  setMaxtrainsize(value: number): BacktestSpec;

  getHorizon(): number;
  setHorizon(value: number): BacktestSpec;

  getGap(): number;
  setGap(value: number): BacktestSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestSpec): BacktestSpec.AsObject;
  static serializeBinaryToWriter(message: BacktestSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestSpec;
  static deserializeBinaryFromReader(message: BacktestSpec, reader: jspb.BinaryReader): BacktestSpec;
}

export namespace BacktestSpec {
  export type AsObject = {
    sliding: boolean,
    splits: number,
    maxtrainsize: number,
    horizon: number,
    gap: number,
  }
}

export class BaselineSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): BaselineSpec;

  getBaselinesList(): Array<string>;
  setBaselinesList(value: Array<string>): BaselineSpec;
  clearBaselinesList(): BaselineSpec;
  addBaselines(value: string, index?: number): BaselineSpec;

  getAll(): boolean;
  setAll(value: boolean): BaselineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaselineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BaselineSpec): BaselineSpec.AsObject;
  static serializeBinaryToWriter(message: BaselineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaselineSpec;
  static deserializeBinaryFromReader(message: BaselineSpec, reader: jspb.BinaryReader): BaselineSpec;
}

export namespace BaselineSpec {
  export type AsObject = {
    enabled: boolean,
    baselinesList: Array<string>,
    all: boolean,
  }
}

export class CapacityStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): CapacityStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): CapacityStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): CapacityStageSpec;
  clearValidationsList(): CapacityStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): CapacityStageSpec;
  hasResources(): boolean;
  clearResources(): CapacityStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapacityStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CapacityStageSpec): CapacityStageSpec.AsObject;
  static serializeBinaryToWriter(message: CapacityStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapacityStageSpec;
  static deserializeBinaryFromReader(message: CapacityStageSpec, reader: jspb.BinaryReader): CapacityStageSpec;
}

export namespace CapacityStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    validationsList: Array<ModelValidation.AsObject>,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
  }
}

export class ChangePointSpec extends jspb.Message {
  getN(): number;
  setN(value: number): ChangePointSpec;

  getRange(): number;
  setRange(value: number): ChangePointSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePointSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePointSpec): ChangePointSpec.AsObject;
  static serializeBinaryToWriter(message: ChangePointSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePointSpec;
  static deserializeBinaryFromReader(message: ChangePointSpec, reader: jspb.BinaryReader): ChangePointSpec;
}

export namespace ChangePointSpec {
  export type AsObject = {
    n: number,
    range: number,
  }
}

export class ChatbotEstimatorSpec extends jspb.Message {
  getBase(): string;
  setBase(value: string): ChatbotEstimatorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatbotEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ChatbotEstimatorSpec): ChatbotEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: ChatbotEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatbotEstimatorSpec;
  static deserializeBinaryFromReader(message: ChatbotEstimatorSpec, reader: jspb.BinaryReader): ChatbotEstimatorSpec;
}

export namespace ChatbotEstimatorSpec {
  export type AsObject = {
    base: string,
  }
}

export class CheckpointSpec extends jspb.Message {
  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): CheckpointSpec;
  hasLocation(): boolean;
  clearLocation(): CheckpointSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointSpec): CheckpointSpec.AsObject;
  static serializeBinaryToWriter(message: CheckpointSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointSpec;
  static deserializeBinaryFromReader(message: CheckpointSpec, reader: jspb.BinaryReader): CheckpointSpec;
}

export namespace CheckpointSpec {
  export type AsObject = {
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class ClassicalEstimatorSpec extends jspb.Message {
  getAlgorithmname(): string;
  setAlgorithmname(value: string): ClassicalEstimatorSpec;

  getParametersList(): Array<HyperParameterValue>;
  setParametersList(value: Array<HyperParameterValue>): ClassicalEstimatorSpec;
  clearParametersList(): ClassicalEstimatorSpec;
  addParameters(value?: HyperParameterValue, index?: number): HyperParameterValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassicalEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ClassicalEstimatorSpec): ClassicalEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: ClassicalEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassicalEstimatorSpec;
  static deserializeBinaryFromReader(message: ClassicalEstimatorSpec, reader: jspb.BinaryReader): ClassicalEstimatorSpec;
}

export namespace ClassicalEstimatorSpec {
  export type AsObject = {
    algorithmname: string,
    parametersList: Array<HyperParameterValue.AsObject>,
  }
}

export class CronReport extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): CronReport;
  hasMetadata(): boolean;
  clearMetadata(): CronReport;

  getSpec(): CronReportSpec | undefined;
  setSpec(value?: CronReportSpec): CronReport;
  hasSpec(): boolean;
  clearSpec(): CronReport;

  getStatus(): CronReportStatus | undefined;
  setStatus(value?: CronReportStatus): CronReport;
  hasStatus(): boolean;
  clearStatus(): CronReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronReport.AsObject;
  static toObject(includeInstance: boolean, msg: CronReport): CronReport.AsObject;
  static serializeBinaryToWriter(message: CronReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronReport;
  static deserializeBinaryFromReader(message: CronReport, reader: jspb.BinaryReader): CronReport;
}

export namespace CronReport {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: CronReportSpec.AsObject,
    status?: CronReportStatus.AsObject,
  }
}

export class CronReportCondition extends jspb.Message {
  getType(): string;
  setType(value: string): CronReportCondition;

  getStatus(): string;
  setStatus(value: string): CronReportCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CronReportCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): CronReportCondition;

  getReason(): string;
  setReason(value: string): CronReportCondition;

  getMessage(): string;
  setMessage(value: string): CronReportCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronReportCondition.AsObject;
  static toObject(includeInstance: boolean, msg: CronReportCondition): CronReportCondition.AsObject;
  static serializeBinaryToWriter(message: CronReportCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronReportCondition;
  static deserializeBinaryFromReader(message: CronReportCondition, reader: jspb.BinaryReader): CronReportCondition;
}

export namespace CronReportCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class CronReportList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): CronReportList;
  hasMetadata(): boolean;
  clearMetadata(): CronReportList;

  getItemsList(): Array<CronReport>;
  setItemsList(value: Array<CronReport>): CronReportList;
  clearItemsList(): CronReportList;
  addItems(value?: CronReport, index?: number): CronReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronReportList.AsObject;
  static toObject(includeInstance: boolean, msg: CronReportList): CronReportList.AsObject;
  static serializeBinaryToWriter(message: CronReportList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronReportList;
  static deserializeBinaryFromReader(message: CronReportList, reader: jspb.BinaryReader): CronReportList;
}

export namespace CronReportList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<CronReport.AsObject>,
  }
}

export class CronReportSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): CronReportSpec;

  getOwner(): string;
  setOwner(value: string): CronReportSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): CronReportSpec;
  hasSchedule(): boolean;
  clearSchedule(): CronReportSpec;

  getRange(): string;
  setRange(value: string): CronReportSpec;

  getTemplate(): ReportTemplate | undefined;
  setTemplate(value?: ReportTemplate): CronReportSpec;
  hasTemplate(): boolean;
  clearTemplate(): CronReportSpec;

  getPaused(): boolean;
  setPaused(value: boolean): CronReportSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): CronReportSpec;
  hasNotification(): boolean;
  clearNotification(): CronReportSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronReportSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CronReportSpec): CronReportSpec.AsObject;
  static serializeBinaryToWriter(message: CronReportSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronReportSpec;
  static deserializeBinaryFromReader(message: CronReportSpec, reader: jspb.BinaryReader): CronReportSpec;
}

export namespace CronReportSpec {
  export type AsObject = {
    versionname: string,
    owner: string,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    range: string,
    template?: ReportTemplate.AsObject,
    paused: boolean,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
  }
}

export class CronReportStatus extends jspb.Message {
  getLastrun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus | undefined;
  setLastrun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus): CronReportStatus;
  hasLastrun(): boolean;
  clearLastrun(): CronReportStatus;

  getNextrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setNextrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CronReportStatus;
  hasNextrun(): boolean;
  clearNextrun(): CronReportStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CronReportStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): CronReportStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): CronReportStatus;

  getFailurereason(): string;
  setFailurereason(value: string): CronReportStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): CronReportStatus;

  getConditionsList(): Array<CronReportCondition>;
  setConditionsList(value: Array<CronReportCondition>): CronReportStatus;
  clearConditionsList(): CronReportStatus;
  addConditions(value?: CronReportCondition, index?: number): CronReportCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronReportStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CronReportStatus): CronReportStatus.AsObject;
  static serializeBinaryToWriter(message: CronReportStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronReportStatus;
  static deserializeBinaryFromReader(message: CronReportStatus, reader: jspb.BinaryReader): CronReportStatus;
}

export namespace CronReportStatus {
  export type AsObject = {
    lastrun?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.AsObject,
    nextrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<CronReportCondition.AsObject>,
  }
}

export class CustomReportSpec extends jspb.Message {
  getPagesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>;
  setPagesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec>): CustomReportSpec;
  clearPagesList(): CustomReportSpec;
  addPages(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomReportSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CustomReportSpec): CustomReportSpec.AsObject;
  static serializeBinaryToWriter(message: CustomReportSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomReportSpec;
  static deserializeBinaryFromReader(message: CustomReportSpec, reader: jspb.BinaryReader): CustomReportSpec;
}

export namespace CustomReportSpec {
  export type AsObject = {
    pagesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec.AsObject>,
  }
}

export class CustomSeasonalitySpec extends jspb.Message {
  getName(): string;
  setName(value: string): CustomSeasonalitySpec;

  getPeriod(): number;
  setPeriod(value: number): CustomSeasonalitySpec;

  getFourierorder(): number;
  setFourierorder(value: number): CustomSeasonalitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomSeasonalitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: CustomSeasonalitySpec): CustomSeasonalitySpec.AsObject;
  static serializeBinaryToWriter(message: CustomSeasonalitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomSeasonalitySpec;
  static deserializeBinaryFromReader(message: CustomSeasonalitySpec, reader: jspb.BinaryReader): CustomSeasonalitySpec;
}

export namespace CustomSeasonalitySpec {
  export type AsObject = {
    name: string,
    period: number,
    fourierorder: number,
  }
}

export class DataHashes extends jspb.Message {
  getTrainhash(): string;
  setTrainhash(value: string): DataHashes;

  getTestinghash(): string;
  setTestinghash(value: string): DataHashes;

  getValidationhash(): string;
  setValidationhash(value: string): DataHashes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataHashes.AsObject;
  static toObject(includeInstance: boolean, msg: DataHashes): DataHashes.AsObject;
  static serializeBinaryToWriter(message: DataHashes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataHashes;
  static deserializeBinaryFromReader(message: DataHashes, reader: jspb.BinaryReader): DataHashes;
}

export namespace DataHashes {
  export type AsObject = {
    trainhash: string,
    testinghash: string,
    validationhash: string,
  }
}

export class DataSplitSpec extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): DataSplitSpec;

  getTrain(): number;
  setTrain(value: number): DataSplitSpec;

  getValidation(): number;
  setValidation(value: number): DataSplitSpec;

  getTest(): number;
  setTest(value: number): DataSplitSpec;

  getSplitcolumn(): string;
  setSplitcolumn(value: string): DataSplitSpec;

  getSegmentsList(): Array<SegmentSpec>;
  setSegmentsList(value: Array<SegmentSpec>): DataSplitSpec;
  clearSegmentsList(): DataSplitSpec;
  addSegments(value?: SegmentSpec, index?: number): SegmentSpec;

  getTraindataset(): string;
  setTraindataset(value: string): DataSplitSpec;

  getTestdataset(): string;
  setTestdataset(value: string): DataSplitSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSplitSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataSplitSpec): DataSplitSpec.AsObject;
  static serializeBinaryToWriter(message: DataSplitSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSplitSpec;
  static deserializeBinaryFromReader(message: DataSplitSpec, reader: jspb.BinaryReader): DataSplitSpec;
}

export namespace DataSplitSpec {
  export type AsObject = {
    method: string,
    train: number,
    validation: number,
    test: number,
    splitcolumn: string,
    segmentsList: Array<SegmentSpec.AsObject>,
    traindataset: string,
    testdataset: string,
  }
}

export class DataStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DataStageSpec;

  getLabname(): string;
  setLabname(value: string): DataStageSpec;

  getDatapipelinename(): string;
  setDatapipelinename(value: string): DataStageSpec;

  getDatasourcename(): string;
  setDatasourcename(value: string): DataStageSpec;

  getDockerimage(): string;
  setDockerimage(value: string): DataStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataStageSpec): DataStageSpec.AsObject;
  static serializeBinaryToWriter(message: DataStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataStageSpec;
  static deserializeBinaryFromReader(message: DataStageSpec, reader: jspb.BinaryReader): DataStageSpec;
}

export namespace DataStageSpec {
  export type AsObject = {
    enabled: boolean,
    labname: string,
    datapipelinename: string,
    datasourcename: string,
    dockerimage: string,
  }
}

export class DeepEstimatorLayer extends jspb.Message {
  getName(): string;
  setName(value: string): DeepEstimatorLayer;

  getType(): string;
  setType(value: string): DeepEstimatorLayer;

  getParametersList(): Array<NNLayerParameter>;
  setParametersList(value: Array<NNLayerParameter>): DeepEstimatorLayer;
  clearParametersList(): DeepEstimatorLayer;
  addParameters(value?: NNLayerParameter, index?: number): NNLayerParameter;

  getInputlayersList(): Array<string>;
  setInputlayersList(value: Array<string>): DeepEstimatorLayer;
  clearInputlayersList(): DeepEstimatorLayer;
  addInputlayers(value: string, index?: number): DeepEstimatorLayer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeepEstimatorLayer.AsObject;
  static toObject(includeInstance: boolean, msg: DeepEstimatorLayer): DeepEstimatorLayer.AsObject;
  static serializeBinaryToWriter(message: DeepEstimatorLayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeepEstimatorLayer;
  static deserializeBinaryFromReader(message: DeepEstimatorLayer, reader: jspb.BinaryReader): DeepEstimatorLayer;
}

export namespace DeepEstimatorLayer {
  export type AsObject = {
    name: string,
    type: string,
    parametersList: Array<NNLayerParameter.AsObject>,
    inputlayersList: Array<string>,
  }
}

export class DeepEstimatorSpec extends jspb.Message {
  getLayersList(): Array<DeepEstimatorLayer>;
  setLayersList(value: Array<DeepEstimatorLayer>): DeepEstimatorSpec;
  clearLayersList(): DeepEstimatorSpec;
  addLayers(value?: DeepEstimatorLayer, index?: number): DeepEstimatorLayer;

  getType(): string;
  setType(value: string): DeepEstimatorSpec;

  getBatchsize(): number;
  setBatchsize(value: number): DeepEstimatorSpec;

  getEpochs(): number;
  setEpochs(value: number): DeepEstimatorSpec;

  getValidationsplit(): number;
  setValidationsplit(value: number): DeepEstimatorSpec;

  getIsseq(): boolean;
  setIsseq(value: boolean): DeepEstimatorSpec;

  getGpus(): number;
  setGpus(value: number): DeepEstimatorSpec;

  getLoss(): string;
  setLoss(value: string): DeepEstimatorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeepEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DeepEstimatorSpec): DeepEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: DeepEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeepEstimatorSpec;
  static deserializeBinaryFromReader(message: DeepEstimatorSpec, reader: jspb.BinaryReader): DeepEstimatorSpec;
}

export namespace DeepEstimatorSpec {
  export type AsObject = {
    layersList: Array<DeepEstimatorLayer.AsObject>,
    type: string,
    batchsize: number,
    epochs: number,
    validationsplit: number,
    isseq: boolean,
    gpus: number,
    loss: string,
  }
}

export class DeploymentStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): DeploymentStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): DeploymentStageSpec;

  getManualapproval(): boolean;
  setManualapproval(value: boolean): DeploymentStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): DeploymentStageSpec;
  clearValidationsList(): DeploymentStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DeploymentStageSpec;
  hasResources(): boolean;
  clearResources(): DeploymentStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentStageSpec): DeploymentStageSpec.AsObject;
  static serializeBinaryToWriter(message: DeploymentStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentStageSpec;
  static deserializeBinaryFromReader(message: DeploymentStageSpec, reader: jspb.BinaryReader): DeploymentStageSpec;
}

export namespace DeploymentStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    manualapproval: boolean,
    validationsList: Array<ModelValidation.AsObject>,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
  }
}

export class EnsembleRules extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsembleRules.AsObject;
  static toObject(includeInstance: boolean, msg: EnsembleRules): EnsembleRules.AsObject;
  static serializeBinaryToWriter(message: EnsembleRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsembleRules;
  static deserializeBinaryFromReader(message: EnsembleRules, reader: jspb.BinaryReader): EnsembleRules;
}

export namespace EnsembleRules {
  export type AsObject = {
  }
}

export class EnsembleSpec extends jspb.Message {
  getModelsList(): Array<string>;
  setModelsList(value: Array<string>): EnsembleSpec;
  clearModelsList(): EnsembleSpec;
  addModels(value: string, index?: number): EnsembleSpec;

  getEstimatorsList(): Array<ClassicalEstimatorSpec>;
  setEstimatorsList(value: Array<ClassicalEstimatorSpec>): EnsembleSpec;
  clearEstimatorsList(): EnsembleSpec;
  addEstimators(value?: ClassicalEstimatorSpec, index?: number): ClassicalEstimatorSpec;

  getBase(): ClassicalEstimatorSpec | undefined;
  setBase(value?: ClassicalEstimatorSpec): EnsembleSpec;
  hasBase(): boolean;
  clearBase(): EnsembleSpec;

  getType(): string;
  setType(value: string): EnsembleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsembleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EnsembleSpec): EnsembleSpec.AsObject;
  static serializeBinaryToWriter(message: EnsembleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsembleSpec;
  static deserializeBinaryFromReader(message: EnsembleSpec, reader: jspb.BinaryReader): EnsembleSpec;
}

export namespace EnsembleSpec {
  export type AsObject = {
    modelsList: Array<string>,
    estimatorsList: Array<ClassicalEstimatorSpec.AsObject>,
    base?: ClassicalEstimatorSpec.AsObject,
    type: string,
  }
}

export class EnsemblesSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): EnsemblesSpec;

  getVotingensemble(): boolean;
  setVotingensemble(value: boolean): EnsemblesSpec;

  getStackingensemble(): boolean;
  setStackingensemble(value: boolean): EnsemblesSpec;

  getTop(): number;
  setTop(value: number): EnsemblesSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsemblesSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EnsemblesSpec): EnsemblesSpec.AsObject;
  static serializeBinaryToWriter(message: EnsemblesSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsemblesSpec;
  static deserializeBinaryFromReader(message: EnsemblesSpec, reader: jspb.BinaryReader): EnsemblesSpec;
}

export namespace EnsemblesSpec {
  export type AsObject = {
    enabled: boolean,
    votingensemble: boolean,
    stackingensemble: boolean,
    top: number,
  }
}

export class FeatureEngineeringPipeline extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureEngineeringPipeline;

  getDatatype(): string;
  setDatatype(value: string): FeatureEngineeringPipeline;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): FeatureEngineeringPipeline;
  clearColumnsList(): FeatureEngineeringPipeline;
  addColumns(value: string, index?: number): FeatureEngineeringPipeline;

  getImputation(): string;
  setImputation(value: string): FeatureEngineeringPipeline;

  getEncoding(): string;
  setEncoding(value: string): FeatureEngineeringPipeline;

  getScaling(): string;
  setScaling(value: string): FeatureEngineeringPipeline;

  getDiscretisation(): string;
  setDiscretisation(value: string): FeatureEngineeringPipeline;

  getVariabletransformation(): string;
  setVariabletransformation(value: string): FeatureEngineeringPipeline;

  getOutlierhandling(): string;
  setOutlierhandling(value: string): FeatureEngineeringPipeline;

  getDatetimetransformation(): string;
  setDatetimetransformation(value: string): FeatureEngineeringPipeline;

  getText(): TextPipelineSpec | undefined;
  setText(value?: TextPipelineSpec): FeatureEngineeringPipeline;
  hasText(): boolean;
  clearText(): FeatureEngineeringPipeline;

  getImage(): ImagePipelineSpec | undefined;
  setImage(value?: ImagePipelineSpec): FeatureEngineeringPipeline;
  hasImage(): boolean;
  clearImage(): FeatureEngineeringPipeline;

  getAudio(): AudioPipelineSpec | undefined;
  setAudio(value?: AudioPipelineSpec): FeatureEngineeringPipeline;
  hasAudio(): boolean;
  clearAudio(): FeatureEngineeringPipeline;

  getVideo(): VideoPipelineSpec | undefined;
  setVideo(value?: VideoPipelineSpec): FeatureEngineeringPipeline;
  hasVideo(): boolean;
  clearVideo(): FeatureEngineeringPipeline;

  getGeneratedList(): Array<GeneratedColumnSpec>;
  setGeneratedList(value: Array<GeneratedColumnSpec>): FeatureEngineeringPipeline;
  clearGeneratedList(): FeatureEngineeringPipeline;
  addGenerated(value?: GeneratedColumnSpec, index?: number): GeneratedColumnSpec;

  getCustomList(): Array<GeneratedColumnSpec>;
  setCustomList(value: Array<GeneratedColumnSpec>): FeatureEngineeringPipeline;
  clearCustomList(): FeatureEngineeringPipeline;
  addCustom(value?: GeneratedColumnSpec, index?: number): GeneratedColumnSpec;

  getDrop(): boolean;
  setDrop(value: boolean): FeatureEngineeringPipeline;

  getPassthrough(): boolean;
  setPassthrough(value: boolean): FeatureEngineeringPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringPipeline): FeatureEngineeringPipeline.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringPipeline;
  static deserializeBinaryFromReader(message: FeatureEngineeringPipeline, reader: jspb.BinaryReader): FeatureEngineeringPipeline;
}

export namespace FeatureEngineeringPipeline {
  export type AsObject = {
    name: string,
    datatype: string,
    columnsList: Array<string>,
    imputation: string,
    encoding: string,
    scaling: string,
    discretisation: string,
    variabletransformation: string,
    outlierhandling: string,
    datetimetransformation: string,
    text?: TextPipelineSpec.AsObject,
    image?: ImagePipelineSpec.AsObject,
    audio?: AudioPipelineSpec.AsObject,
    video?: VideoPipelineSpec.AsObject,
    generatedList: Array<GeneratedColumnSpec.AsObject>,
    customList: Array<GeneratedColumnSpec.AsObject>,
    drop: boolean,
    passthrough: boolean,
  }
}

export class FeatureEngineeringSearchSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FeatureEngineeringSearchSpec;

  getImbalancedhandler(): string;
  setImbalancedhandler(value: string): FeatureEngineeringSearchSpec;

  getEstimator(): string;
  setEstimator(value: string): FeatureEngineeringSearchSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): FeatureEngineeringSearchSpec;

  getMaxtime(): number;
  setMaxtime(value: number): FeatureEngineeringSearchSpec;

  getMaxtrainers(): number;
  setMaxtrainers(value: number): FeatureEngineeringSearchSpec;

  getSamplepct(): number;
  setSamplepct(value: number): FeatureEngineeringSearchSpec;

  getAutoremove(): boolean;
  setAutoremove(value: boolean): FeatureEngineeringSearchSpec;

  getReuse(): boolean;
  setReuse(value: boolean): FeatureEngineeringSearchSpec;

  getFeatureselectiontemplate(): FeatureSelectionSpec | undefined;
  setFeatureselectiontemplate(value?: FeatureSelectionSpec): FeatureEngineeringSearchSpec;
  hasFeatureselectiontemplate(): boolean;
  clearFeatureselectiontemplate(): FeatureEngineeringSearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringSearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringSearchSpec): FeatureEngineeringSearchSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringSearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringSearchSpec;
  static deserializeBinaryFromReader(message: FeatureEngineeringSearchSpec, reader: jspb.BinaryReader): FeatureEngineeringSearchSpec;
}

export namespace FeatureEngineeringSearchSpec {
  export type AsObject = {
    enabled: boolean,
    imbalancedhandler: string,
    estimator: string,
    maxmodels: number,
    maxtime: number,
    maxtrainers: number,
    samplepct: number,
    autoremove: boolean,
    reuse: boolean,
    featureselectiontemplate?: FeatureSelectionSpec.AsObject,
  }
}

export class FeatureEngineeringSearchStatus extends jspb.Message {
  getBest(): FeatureEngineeringSpec | undefined;
  setBest(value?: FeatureEngineeringSpec): FeatureEngineeringSearchStatus;
  hasBest(): boolean;
  clearBest(): FeatureEngineeringSearchStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringSearchStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringSearchStatus): FeatureEngineeringSearchStatus.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringSearchStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringSearchStatus;
  static deserializeBinaryFromReader(message: FeatureEngineeringSearchStatus, reader: jspb.BinaryReader): FeatureEngineeringSearchStatus;
}

export namespace FeatureEngineeringSearchStatus {
  export type AsObject = {
    best?: FeatureEngineeringSpec.AsObject,
  }
}

export class FeatureEngineeringSpec extends jspb.Message {
  getPipelinesList(): Array<FeatureEngineeringPipeline>;
  setPipelinesList(value: Array<FeatureEngineeringPipeline>): FeatureEngineeringSpec;
  clearPipelinesList(): FeatureEngineeringSpec;
  addPipelines(value?: FeatureEngineeringPipeline, index?: number): FeatureEngineeringPipeline;

  getImbalance(): string;
  setImbalance(value: string): FeatureEngineeringSpec;

  getSelection(): FeatureSelectionSpec | undefined;
  setSelection(value?: FeatureSelectionSpec): FeatureEngineeringSpec;
  hasSelection(): boolean;
  clearSelection(): FeatureEngineeringSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringSpec): FeatureEngineeringSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringSpec;
  static deserializeBinaryFromReader(message: FeatureEngineeringSpec, reader: jspb.BinaryReader): FeatureEngineeringSpec;
}

export namespace FeatureEngineeringSpec {
  export type AsObject = {
    pipelinesList: Array<FeatureEngineeringPipeline.AsObject>,
    imbalance: string,
    selection?: FeatureSelectionSpec.AsObject,
  }
}

export class FeatureImportance extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): FeatureImportance;

  getImportance(): number;
  setImportance(value: number): FeatureImportance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureImportance.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureImportance): FeatureImportance.AsObject;
  static serializeBinaryToWriter(message: FeatureImportance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureImportance;
  static deserializeBinaryFromReader(message: FeatureImportance, reader: jspb.BinaryReader): FeatureImportance;
}

export namespace FeatureImportance {
  export type AsObject = {
    feature: string,
    importance: number,
  }
}

export class FeatureInfo extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureInfo;

  getReason(): string;
  setReason(value: string): FeatureInfo;

  getValue(): number;
  setValue(value: number): FeatureInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureInfo): FeatureInfo.AsObject;
  static serializeBinaryToWriter(message: FeatureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureInfo;
  static deserializeBinaryFromReader(message: FeatureInfo, reader: jspb.BinaryReader): FeatureInfo;
}

export namespace FeatureInfo {
  export type AsObject = {
    name: string,
    reason: string,
    value: number,
  }
}

export class FeaturePair extends jspb.Message {
  getX(): string;
  setX(value: string): FeaturePair;

  getY(): string;
  setY(value: string): FeaturePair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePair.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePair): FeaturePair.AsObject;
  static serializeBinaryToWriter(message: FeaturePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePair;
  static deserializeBinaryFromReader(message: FeaturePair, reader: jspb.BinaryReader): FeaturePair;
}

export namespace FeaturePair {
  export type AsObject = {
    x: string,
    y: string,
  }
}

export class FeatureSelectionSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FeatureSelectionSpec;

  getSamplepct(): number;
  setSamplepct(value: number): FeatureSelectionSpec;

  getEmbedding(): boolean;
  setEmbedding(value: boolean): FeatureSelectionSpec;

  getFilter(): boolean;
  setFilter(value: boolean): FeatureSelectionSpec;

  getWrapper(): boolean;
  setWrapper(value: boolean): FeatureSelectionSpec;

  getPipelineList(): Array<string>;
  setPipelineList(value: Array<string>): FeatureSelectionSpec;
  clearPipelineList(): FeatureSelectionSpec;
  addPipeline(value: string, index?: number): FeatureSelectionSpec;

  getVariancethresholdpct(): number;
  setVariancethresholdpct(value: number): FeatureSelectionSpec;

  getCorrthreshold(): number;
  setCorrthreshold(value: number): FeatureSelectionSpec;

  getTopn(): number;
  setTopn(value: number): FeatureSelectionSpec;

  getCumulativeimportancepercent(): number;
  setCumulativeimportancepercent(value: number): FeatureSelectionSpec;

  getReservedList(): Array<string>;
  setReservedList(value: Array<string>): FeatureSelectionSpec;
  clearReservedList(): FeatureSelectionSpec;
  addReserved(value: string, index?: number): FeatureSelectionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureSelectionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureSelectionSpec): FeatureSelectionSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureSelectionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureSelectionSpec;
  static deserializeBinaryFromReader(message: FeatureSelectionSpec, reader: jspb.BinaryReader): FeatureSelectionSpec;
}

export namespace FeatureSelectionSpec {
  export type AsObject = {
    enabled: boolean,
    samplepct: number,
    embedding: boolean,
    filter: boolean,
    wrapper: boolean,
    pipelineList: Array<string>,
    variancethresholdpct: number,
    corrthreshold: number,
    topn: number,
    cumulativeimportancepercent: number,
    reservedList: Array<string>,
  }
}

export class ForecastObj extends jspb.Message {
  getKey(): string;
  setKey(value: string): ForecastObj;

  getLevelindex(): number;
  setLevelindex(value: number): ForecastObj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastObj.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastObj): ForecastObj.AsObject;
  static serializeBinaryToWriter(message: ForecastObj, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastObj;
  static deserializeBinaryFromReader(message: ForecastObj, reader: jspb.BinaryReader): ForecastObj;
}

export namespace ForecastObj {
  export type AsObject = {
    key: string,
    levelindex: number,
  }
}

export class ForecastPostProcessingSpec extends jspb.Message {
  getConnectionname(): string;
  setConnectionname(value: string): ForecastPostProcessingSpec;

  getForecast(): boolean;
  setForecast(value: boolean): ForecastPostProcessingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastPostProcessingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastPostProcessingSpec): ForecastPostProcessingSpec.AsObject;
  static serializeBinaryToWriter(message: ForecastPostProcessingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastPostProcessingSpec;
  static deserializeBinaryFromReader(message: ForecastPostProcessingSpec, reader: jspb.BinaryReader): ForecastPostProcessingSpec;
}

export namespace ForecastPostProcessingSpec {
  export type AsObject = {
    connectionname: string,
    forecast: boolean,
  }
}

export class ForecastSpec extends jspb.Message {
  getData(): TimeSeriesDataSpec | undefined;
  setData(value?: TimeSeriesDataSpec): ForecastSpec;
  hasData(): boolean;
  clearData(): ForecastSpec;

  getConfidenceinterval(): number;
  setConfidenceinterval(value: number): ForecastSpec;

  getBacktest(): BacktestSpec | undefined;
  setBacktest(value?: BacktestSpec): ForecastSpec;
  hasBacktest(): boolean;
  clearBacktest(): ForecastSpec;

  getPostprocessing(): ForecastPostProcessingSpec | undefined;
  setPostprocessing(value?: ForecastPostProcessingSpec): ForecastSpec;
  hasPostprocessing(): boolean;
  clearPostprocessing(): ForecastSpec;

  getPlot(): boolean;
  setPlot(value: boolean): ForecastSpec;

  getPlotchangepoints(): boolean;
  setPlotchangepoints(value: boolean): ForecastSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastSpec): ForecastSpec.AsObject;
  static serializeBinaryToWriter(message: ForecastSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastSpec;
  static deserializeBinaryFromReader(message: ForecastSpec, reader: jspb.BinaryReader): ForecastSpec;
}

export namespace ForecastSpec {
  export type AsObject = {
    data?: TimeSeriesDataSpec.AsObject,
    confidenceinterval: number,
    backtest?: BacktestSpec.AsObject,
    postprocessing?: ForecastPostProcessingSpec.AsObject,
    plot: boolean,
    plotchangepoints: boolean,
  }
}

export class GarbageCollectionSpec extends jspb.Message {
  getCollectatstudyend(): boolean;
  setCollectatstudyend(value: boolean): GarbageCollectionSpec;

  getKeeponlybestmodelperalgorithm(): boolean;
  setKeeponlybestmodelperalgorithm(value: boolean): GarbageCollectionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GarbageCollectionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GarbageCollectionSpec): GarbageCollectionSpec.AsObject;
  static serializeBinaryToWriter(message: GarbageCollectionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GarbageCollectionSpec;
  static deserializeBinaryFromReader(message: GarbageCollectionSpec, reader: jspb.BinaryReader): GarbageCollectionSpec;
}

export namespace GarbageCollectionSpec {
  export type AsObject = {
    collectatstudyend: boolean,
    keeponlybestmodelperalgorithm: boolean,
  }
}

export class GarbageCollectionStatus extends jspb.Message {
  getCollected(): number;
  setCollected(value: number): GarbageCollectionStatus;

  getModelsList(): Array<ModelResult>;
  setModelsList(value: Array<ModelResult>): GarbageCollectionStatus;
  clearModelsList(): GarbageCollectionStatus;
  addModels(value?: ModelResult, index?: number): ModelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GarbageCollectionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: GarbageCollectionStatus): GarbageCollectionStatus.AsObject;
  static serializeBinaryToWriter(message: GarbageCollectionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GarbageCollectionStatus;
  static deserializeBinaryFromReader(message: GarbageCollectionStatus, reader: jspb.BinaryReader): GarbageCollectionStatus;
}

export namespace GarbageCollectionStatus {
  export type AsObject = {
    collected: number,
    modelsList: Array<ModelResult.AsObject>,
  }
}

export class GeneratedColumnSpec extends jspb.Message {
  getName(): string;
  setName(value: string): GeneratedColumnSpec;

  getDatatype(): string;
  setDatatype(value: string): GeneratedColumnSpec;

  getFirst(): string;
  setFirst(value: string): GeneratedColumnSpec;

  getSecond(): string;
  setSecond(value: string): GeneratedColumnSpec;

  getOriginal(): string;
  setOriginal(value: string): GeneratedColumnSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratedColumnSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratedColumnSpec): GeneratedColumnSpec.AsObject;
  static serializeBinaryToWriter(message: GeneratedColumnSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratedColumnSpec;
  static deserializeBinaryFromReader(message: GeneratedColumnSpec, reader: jspb.BinaryReader): GeneratedColumnSpec;
}

export namespace GeneratedColumnSpec {
  export type AsObject = {
    name: string,
    datatype: string,
    first: string,
    second: string,
    original: string,
  }
}

export class Hierarchy extends jspb.Message {
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): Hierarchy;
  clearColumnsList(): Hierarchy;
  addColumns(value: string, index?: number): Hierarchy;

  getGrouplevelsList(): Array<Level>;
  setGrouplevelsList(value: Array<Level>): Hierarchy;
  clearGrouplevelsList(): Hierarchy;
  addGrouplevels(value?: Level, index?: number): Level;

  getItemlevel(): Level | undefined;
  setItemlevel(value?: Level): Hierarchy;
  hasItemlevel(): boolean;
  clearItemlevel(): Hierarchy;

  getNotifiername(): string;
  setNotifiername(value: string): Hierarchy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hierarchy.AsObject;
  static toObject(includeInstance: boolean, msg: Hierarchy): Hierarchy.AsObject;
  static serializeBinaryToWriter(message: Hierarchy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hierarchy;
  static deserializeBinaryFromReader(message: Hierarchy, reader: jspb.BinaryReader): Hierarchy;
}

export namespace Hierarchy {
  export type AsObject = {
    columnsList: Array<string>,
    grouplevelsList: Array<Level.AsObject>,
    itemlevel?: Level.AsObject,
    notifiername: string,
  }
}

export class HierarchySpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): HierarchySpec;

  getGroupcolumn(): string;
  setGroupcolumn(value: string): HierarchySpec;

  getSubgroupcolumn(): string;
  setSubgroupcolumn(value: string): HierarchySpec;

  getSubsubgroupcolumn(): string;
  setSubsubgroupcolumn(value: string): HierarchySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HierarchySpec.AsObject;
  static toObject(includeInstance: boolean, msg: HierarchySpec): HierarchySpec.AsObject;
  static serializeBinaryToWriter(message: HierarchySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HierarchySpec;
  static deserializeBinaryFromReader(message: HierarchySpec, reader: jspb.BinaryReader): HierarchySpec;
}

export namespace HierarchySpec {
  export type AsObject = {
    enabled: boolean,
    groupcolumn: string,
    subgroupcolumn: string,
    subsubgroupcolumn: string,
  }
}

export class HolidaySpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): HolidaySpec;

  getHolidaycolumn(): string;
  setHolidaycolumn(value: string): HolidaySpec;

  getCountry(): string;
  setCountry(value: string): HolidaySpec;

  getDatasetname(): string;
  setDatasetname(value: string): HolidaySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolidaySpec.AsObject;
  static toObject(includeInstance: boolean, msg: HolidaySpec): HolidaySpec.AsObject;
  static serializeBinaryToWriter(message: HolidaySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolidaySpec;
  static deserializeBinaryFromReader(message: HolidaySpec, reader: jspb.BinaryReader): HolidaySpec;
}

export namespace HolidaySpec {
  export type AsObject = {
    enabled: boolean,
    holidaycolumn: string,
    country: string,
    datasetname: string,
  }
}

export class HyperParameterValue extends jspb.Message {
  getName(): string;
  setName(value: string): HyperParameterValue;

  getValue(): string;
  setValue(value: string): HyperParameterValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperParameterValue.AsObject;
  static toObject(includeInstance: boolean, msg: HyperParameterValue): HyperParameterValue.AsObject;
  static serializeBinaryToWriter(message: HyperParameterValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperParameterValue;
  static deserializeBinaryFromReader(message: HyperParameterValue, reader: jspb.BinaryReader): HyperParameterValue;
}

export namespace HyperParameterValue {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class ImagePipelineSpec extends jspb.Message {
  getFeaturizer(): string;
  setFeaturizer(value: string): ImagePipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagePipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ImagePipelineSpec): ImagePipelineSpec.AsObject;
  static serializeBinaryToWriter(message: ImagePipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagePipelineSpec;
  static deserializeBinaryFromReader(message: ImagePipelineSpec, reader: jspb.BinaryReader): ImagePipelineSpec;
}

export namespace ImagePipelineSpec {
  export type AsObject = {
    featurizer: string,
  }
}

export class InterpretabilitySpec extends jspb.Message {
  getIce(): boolean;
  setIce(value: boolean): InterpretabilitySpec;

  getIcepairsList(): Array<FeaturePair>;
  setIcepairsList(value: Array<FeaturePair>): InterpretabilitySpec;
  clearIcepairsList(): InterpretabilitySpec;
  addIcepairs(value?: FeaturePair, index?: number): FeaturePair;

  getLime(): boolean;
  setLime(value: boolean): InterpretabilitySpec;

  getShap(): string;
  setShap(value: string): InterpretabilitySpec;

  getShappairsList(): Array<FeaturePair>;
  setShappairsList(value: Array<FeaturePair>): InterpretabilitySpec;
  clearShappairsList(): InterpretabilitySpec;
  addShappairs(value?: FeaturePair, index?: number): FeaturePair;

  getCounterfactual(): boolean;
  setCounterfactual(value: boolean): InterpretabilitySpec;

  getAnchor(): boolean;
  setAnchor(value: boolean): InterpretabilitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterpretabilitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: InterpretabilitySpec): InterpretabilitySpec.AsObject;
  static serializeBinaryToWriter(message: InterpretabilitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterpretabilitySpec;
  static deserializeBinaryFromReader(message: InterpretabilitySpec, reader: jspb.BinaryReader): InterpretabilitySpec;
}

export namespace InterpretabilitySpec {
  export type AsObject = {
    ice: boolean,
    icepairsList: Array<FeaturePair.AsObject>,
    lime: boolean,
    shap: string,
    shappairsList: Array<FeaturePair.AsObject>,
    counterfactual: boolean,
    anchor: boolean,
  }
}

export class InterpretabilityStatus extends jspb.Message {
  getTrainingstarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingstarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): InterpretabilityStatus;
  hasTrainingstarttime(): boolean;
  clearTrainingstarttime(): InterpretabilityStatus;

  getTrainingendtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingendtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): InterpretabilityStatus;
  hasTrainingendtime(): boolean;
  clearTrainingendtime(): InterpretabilityStatus;

  getExplaineruri(): string;
  setExplaineruri(value: string): InterpretabilityStatus;

  getTrainshapvaluesuri(): string;
  setTrainshapvaluesuri(value: string): InterpretabilityStatus;

  getTestshapvaluesuri(): string;
  setTestshapvaluesuri(value: string): InterpretabilityStatus;

  getImportanceList(): Array<FeatureImportance>;
  setImportanceList(value: Array<FeatureImportance>): InterpretabilityStatus;
  clearImportanceList(): InterpretabilityStatus;
  addImportance(value?: FeatureImportance, index?: number): FeatureImportance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterpretabilityStatus.AsObject;
  static toObject(includeInstance: boolean, msg: InterpretabilityStatus): InterpretabilityStatus.AsObject;
  static serializeBinaryToWriter(message: InterpretabilityStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterpretabilityStatus;
  static deserializeBinaryFromReader(message: InterpretabilityStatus, reader: jspb.BinaryReader): InterpretabilityStatus;
}

export namespace InterpretabilityStatus {
  export type AsObject = {
    trainingstarttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingendtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    explaineruri: string,
    trainshapvaluesuri: string,
    testshapvaluesuri: string,
    importanceList: Array<FeatureImportance.AsObject>,
  }
}

export class Level extends jspb.Message {
  getString(): string;
  setString(value: string): Level;

  getHorizon(): number;
  setHorizon(value: number): Level;

  getFreq(): string;
  setFreq(value: string): Level;

  getAggregate(): string;
  setAggregate(value: string): Level;

  getDistincList(): Array<string>;
  setDistincList(value: Array<string>): Level;
  clearDistincList(): Level;
  addDistinc(value: string, index?: number): Level;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Level.AsObject;
  static toObject(includeInstance: boolean, msg: Level): Level.AsObject;
  static serializeBinaryToWriter(message: Level, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Level;
  static deserializeBinaryFromReader(message: Level, reader: jspb.BinaryReader): Level;
}

export namespace Level {
  export type AsObject = {
    string: string,
    horizon: number,
    freq: string,
    aggregate: string,
    distincList: Array<string>,
  }
}

export class Model extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Model;
  hasMetadata(): boolean;
  clearMetadata(): Model;

  getSpec(): ModelSpec | undefined;
  setSpec(value?: ModelSpec): Model;
  hasSpec(): boolean;
  clearSpec(): Model;

  getStatus(): ModelStatus | undefined;
  setStatus(value?: ModelStatus): Model;
  hasStatus(): boolean;
  clearStatus(): Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelSpec.AsObject,
    status?: ModelStatus.AsObject,
  }
}

export class ModelAutobuilder extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelAutobuilder;
  hasMetadata(): boolean;
  clearMetadata(): ModelAutobuilder;

  getSpec(): ModelAutobuilderSpec | undefined;
  setSpec(value?: ModelAutobuilderSpec): ModelAutobuilder;
  hasSpec(): boolean;
  clearSpec(): ModelAutobuilder;

  getStatus(): ModelAutobuilderStatus | undefined;
  setStatus(value?: ModelAutobuilderStatus): ModelAutobuilder;
  hasStatus(): boolean;
  clearStatus(): ModelAutobuilder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilder.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilder): ModelAutobuilder.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilder;
  static deserializeBinaryFromReader(message: ModelAutobuilder, reader: jspb.BinaryReader): ModelAutobuilder;
}

export namespace ModelAutobuilder {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelAutobuilderSpec.AsObject,
    status?: ModelAutobuilderStatus.AsObject,
  }
}

export class ModelAutobuilderCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelAutobuilderCondition;

  getStatus(): string;
  setStatus(value: string): ModelAutobuilderCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelAutobuilderCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelAutobuilderCondition;

  getReason(): string;
  setReason(value: string): ModelAutobuilderCondition;

  getMessage(): string;
  setMessage(value: string): ModelAutobuilderCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderCondition): ModelAutobuilderCondition.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderCondition;
  static deserializeBinaryFromReader(message: ModelAutobuilderCondition, reader: jspb.BinaryReader): ModelAutobuilderCondition;
}

export namespace ModelAutobuilderCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelAutobuilderList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelAutobuilderList;
  hasMetadata(): boolean;
  clearMetadata(): ModelAutobuilderList;

  getItemsList(): Array<ModelAutobuilder>;
  setItemsList(value: Array<ModelAutobuilder>): ModelAutobuilderList;
  clearItemsList(): ModelAutobuilderList;
  addItems(value?: ModelAutobuilder, index?: number): ModelAutobuilder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderList): ModelAutobuilderList.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderList;
  static deserializeBinaryFromReader(message: ModelAutobuilderList, reader: jspb.BinaryReader): ModelAutobuilderList;
}

export namespace ModelAutobuilderList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelAutobuilder.AsObject>,
  }
}

export class ModelAutobuilderSpec extends jspb.Message {
  getDataproductname(): string;
  setDataproductname(value: string): ModelAutobuilderSpec;

  getDataproductversionname(): string;
  setDataproductversionname(value: string): ModelAutobuilderSpec;

  getDatasourcename(): string;
  setDatasourcename(value: string): ModelAutobuilderSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelAutobuilderSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelAutobuilderSpec;
  hasLocation(): boolean;
  clearLocation(): ModelAutobuilderSpec;

  getTask(): string;
  setTask(value: string): ModelAutobuilderSpec;

  getObjective(): string;
  setObjective(value: string): ModelAutobuilderSpec;

  getTargetcolumn(): string;
  setTargetcolumn(value: string): ModelAutobuilderSpec;

  getMaxtime(): number;
  setMaxtime(value: number): ModelAutobuilderSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): ModelAutobuilderSpec;

  getAccessmethod(): string;
  setAccessmethod(value: string): ModelAutobuilderSpec;

  getAutoscale(): boolean;
  setAutoscale(value: boolean): ModelAutobuilderSpec;

  getDataapp(): boolean;
  setDataapp(value: boolean): ModelAutobuilderSpec;

  getDatasourcespec(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec | undefined;
  setDatasourcespec(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec): ModelAutobuilderSpec;
  hasDatasourcespec(): boolean;
  clearDatasourcespec(): ModelAutobuilderSpec;

  getTrainers(): number;
  setTrainers(value: number): ModelAutobuilderSpec;

  getSampler(): string;
  setSampler(value: string): ModelAutobuilderSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelAutobuilderSpec;

  getOwner(): string;
  setOwner(value: string): ModelAutobuilderSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ModelAutobuilderSpec;
  hasResources(): boolean;
  clearResources(): ModelAutobuilderSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelAutobuilderSpec;
  hasLabref(): boolean;
  clearLabref(): ModelAutobuilderSpec;

  getDatasettype(): string;
  setDatasettype(value: string): ModelAutobuilderSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderSpec): ModelAutobuilderSpec.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderSpec;
  static deserializeBinaryFromReader(message: ModelAutobuilderSpec, reader: jspb.BinaryReader): ModelAutobuilderSpec;
}

export namespace ModelAutobuilderSpec {
  export type AsObject = {
    dataproductname: string,
    dataproductversionname: string,
    datasourcename: string,
    datasetname: string,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    task: string,
    objective: string,
    targetcolumn: string,
    maxtime: number,
    maxmodels: number,
    accessmethod: string,
    autoscale: boolean,
    dataapp: boolean,
    datasourcespec?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.AsObject,
    trainers: number,
    sampler: string,
    aborted: boolean,
    owner: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    datasettype: string,
  }
}

export class ModelAutobuilderStatus extends jspb.Message {
  getFlatfilename(): string;
  setFlatfilename(value: string): ModelAutobuilderStatus;

  getDatasourcename(): string;
  setDatasourcename(value: string): ModelAutobuilderStatus;

  getDatasetname(): string;
  setDatasetname(value: string): ModelAutobuilderStatus;

  getStudyname(): string;
  setStudyname(value: string): ModelAutobuilderStatus;

  getBestmodelname(): string;
  setBestmodelname(value: string): ModelAutobuilderStatus;

  getPredictorname(): string;
  setPredictorname(value: string): ModelAutobuilderStatus;

  getImagereponame(): string;
  setImagereponame(value: string): ModelAutobuilderStatus;

  getPhase(): string;
  setPhase(value: string): ModelAutobuilderStatus;

  getRows(): number;
  setRows(value: number): ModelAutobuilderStatus;

  getCols(): number;
  setCols(value: number): ModelAutobuilderStatus;

  getFilesize(): number;
  setFilesize(value: number): ModelAutobuilderStatus;

  getModels(): number;
  setModels(value: number): ModelAutobuilderStatus;

  getTrainedmodels(): number;
  setTrainedmodels(value: number): ModelAutobuilderStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): ModelAutobuilderStatus;

  getEstimator(): ClassicalEstimatorSpec | undefined;
  setEstimator(value?: ClassicalEstimatorSpec): ModelAutobuilderStatus;
  hasEstimator(): boolean;
  clearEstimator(): ModelAutobuilderStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelAutobuilderStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelAutobuilderStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelAutobuilderStatus;
  hasEndtime(): boolean;
  clearEndtime(): ModelAutobuilderStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelAutobuilderStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelAutobuilderStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelAutobuilderStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelAutobuilderStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ModelAutobuilderStatus;

  getConditionsList(): Array<ModelAutobuilderCondition>;
  setConditionsList(value: Array<ModelAutobuilderCondition>): ModelAutobuilderStatus;
  clearConditionsList(): ModelAutobuilderStatus;
  addConditions(value?: ModelAutobuilderCondition, index?: number): ModelAutobuilderCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelAutobuilderStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelAutobuilderStatus): ModelAutobuilderStatus.AsObject;
  static serializeBinaryToWriter(message: ModelAutobuilderStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelAutobuilderStatus;
  static deserializeBinaryFromReader(message: ModelAutobuilderStatus, reader: jspb.BinaryReader): ModelAutobuilderStatus;
}

export namespace ModelAutobuilderStatus {
  export type AsObject = {
    flatfilename: string,
    datasourcename: string,
    datasetname: string,
    studyname: string,
    bestmodelname: string,
    predictorname: string,
    imagereponame: string,
    phase: string,
    rows: number,
    cols: number,
    filesize: number,
    models: number,
    trainedmodels: number,
    bestmodelscore: number,
    estimator?: ClassicalEstimatorSpec.AsObject,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<ModelAutobuilderCondition.AsObject>,
  }
}

export class ModelCompilerRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelCompilerRun;
  hasMetadata(): boolean;
  clearMetadata(): ModelCompilerRun;

  getSpec(): ModelCompilerRunSpec | undefined;
  setSpec(value?: ModelCompilerRunSpec): ModelCompilerRun;
  hasSpec(): boolean;
  clearSpec(): ModelCompilerRun;

  getStatus(): ModelCompilerRunStatus | undefined;
  setStatus(value?: ModelCompilerRunStatus): ModelCompilerRun;
  hasStatus(): boolean;
  clearStatus(): ModelCompilerRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCompilerRun.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCompilerRun): ModelCompilerRun.AsObject;
  static serializeBinaryToWriter(message: ModelCompilerRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCompilerRun;
  static deserializeBinaryFromReader(message: ModelCompilerRun, reader: jspb.BinaryReader): ModelCompilerRun;
}

export namespace ModelCompilerRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelCompilerRunSpec.AsObject,
    status?: ModelCompilerRunStatus.AsObject,
  }
}

export class ModelCompilerRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelCompilerRunCondition;

  getStatus(): string;
  setStatus(value: string): ModelCompilerRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelCompilerRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelCompilerRunCondition;

  getReason(): string;
  setReason(value: string): ModelCompilerRunCondition;

  getMessage(): string;
  setMessage(value: string): ModelCompilerRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCompilerRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCompilerRunCondition): ModelCompilerRunCondition.AsObject;
  static serializeBinaryToWriter(message: ModelCompilerRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCompilerRunCondition;
  static deserializeBinaryFromReader(message: ModelCompilerRunCondition, reader: jspb.BinaryReader): ModelCompilerRunCondition;
}

export namespace ModelCompilerRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelCompilerRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelCompilerRunList;
  hasMetadata(): boolean;
  clearMetadata(): ModelCompilerRunList;

  getItemsList(): Array<ModelCompilerRun>;
  setItemsList(value: Array<ModelCompilerRun>): ModelCompilerRunList;
  clearItemsList(): ModelCompilerRunList;
  addItems(value?: ModelCompilerRun, index?: number): ModelCompilerRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCompilerRunList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCompilerRunList): ModelCompilerRunList.AsObject;
  static serializeBinaryToWriter(message: ModelCompilerRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCompilerRunList;
  static deserializeBinaryFromReader(message: ModelCompilerRunList, reader: jspb.BinaryReader): ModelCompilerRunList;
}

export namespace ModelCompilerRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelCompilerRun.AsObject>,
  }
}

export class ModelCompilerRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ModelCompilerRunSpec;

  getDescription(): string;
  setDescription(value: string): ModelCompilerRunSpec;

  getModelname(): string;
  setModelname(value: string): ModelCompilerRunSpec;

  getOwner(): string;
  setOwner(value: string): ModelCompilerRunSpec;

  getPriority(): string;
  setPriority(value: string): ModelCompilerRunSpec;

  getCompiler(): string;
  setCompiler(value: string): ModelCompilerRunSpec;

  getTarget(): string;
  setTarget(value: string): ModelCompilerRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCompilerRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCompilerRunSpec): ModelCompilerRunSpec.AsObject;
  static serializeBinaryToWriter(message: ModelCompilerRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCompilerRunSpec;
  static deserializeBinaryFromReader(message: ModelCompilerRunSpec, reader: jspb.BinaryReader): ModelCompilerRunSpec;
}

export namespace ModelCompilerRunSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    modelname: string,
    owner: string,
    priority: string,
    compiler: string,
    target: string,
  }
}

export class ModelCompilerRunStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelCompilerRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelCompilerRunStatus;

  getCompletiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelCompilerRunStatus;
  hasCompletiontime(): boolean;
  clearCompletiontime(): ModelCompilerRunStatus;

  getPhase(): string;
  setPhase(value: string): ModelCompilerRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelCompilerRunStatus;

  getEvalmetrics(): string;
  setEvalmetrics(value: string): ModelCompilerRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelCompilerRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelCompilerRunStatus;

  getProgress(): number;
  setProgress(value: number): ModelCompilerRunStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelCompilerRunStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ModelCompilerRunStatus;

  getConditionsList(): Array<ModelCompilerRunCondition>;
  setConditionsList(value: Array<ModelCompilerRunCondition>): ModelCompilerRunStatus;
  clearConditionsList(): ModelCompilerRunStatus;
  addConditions(value?: ModelCompilerRunCondition, index?: number): ModelCompilerRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCompilerRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCompilerRunStatus): ModelCompilerRunStatus.AsObject;
  static serializeBinaryToWriter(message: ModelCompilerRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCompilerRunStatus;
  static deserializeBinaryFromReader(message: ModelCompilerRunStatus, reader: jspb.BinaryReader): ModelCompilerRunStatus;
}

export namespace ModelCompilerRunStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
    evalmetrics: string,
    failurereason: string,
    failuremessage: string,
    progress: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<ModelCompilerRunCondition.AsObject>,
  }
}

export class ModelCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelCondition;

  getStatus(): string;
  setStatus(value: string): ModelCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelCondition;

  getReason(): string;
  setReason(value: string): ModelCondition;

  getMessage(): string;
  setMessage(value: string): ModelCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCondition): ModelCondition.AsObject;
  static serializeBinaryToWriter(message: ModelCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCondition;
  static deserializeBinaryFromReader(message: ModelCondition, reader: jspb.BinaryReader): ModelCondition;
}

export namespace ModelCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelImageSpec extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): ModelImageSpec;

  getImagename(): string;
  setImagename(value: string): ModelImageSpec;

  getRegistryconnectionname(): string;
  setRegistryconnectionname(value: string): ModelImageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelImageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelImageSpec): ModelImageSpec.AsObject;
  static serializeBinaryToWriter(message: ModelImageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelImageSpec;
  static deserializeBinaryFromReader(message: ModelImageSpec, reader: jspb.BinaryReader): ModelImageSpec;
}

export namespace ModelImageSpec {
  export type AsObject = {
    exist: boolean,
    imagename: string,
    registryconnectionname: string,
  }
}

export class ModelList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelList;
  hasMetadata(): boolean;
  clearMetadata(): ModelList;

  getItemsList(): Array<Model>;
  setItemsList(value: Array<Model>): ModelList;
  clearItemsList(): ModelList;
  addItems(value?: Model, index?: number): Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelList): ModelList.AsObject;
  static serializeBinaryToWriter(message: ModelList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelList;
  static deserializeBinaryFromReader(message: ModelList, reader: jspb.BinaryReader): ModelList;
}

export namespace ModelList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Model.AsObject>,
  }
}

export class ModelPipeline extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelPipeline;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipeline;

  getSpec(): ModelPipelineSpec | undefined;
  setSpec(value?: ModelPipelineSpec): ModelPipeline;
  hasSpec(): boolean;
  clearSpec(): ModelPipeline;

  getStatus(): ModelPipelineStatus | undefined;
  setStatus(value?: ModelPipelineStatus): ModelPipeline;
  hasStatus(): boolean;
  clearStatus(): ModelPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipeline): ModelPipeline.AsObject;
  static serializeBinaryToWriter(message: ModelPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipeline;
  static deserializeBinaryFromReader(message: ModelPipeline, reader: jspb.BinaryReader): ModelPipeline;
}

export namespace ModelPipeline {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelPipelineSpec.AsObject,
    status?: ModelPipelineStatus.AsObject,
  }
}

export class ModelPipelineCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelPipelineCondition;

  getStatus(): string;
  setStatus(value: string): ModelPipelineCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelPipelineCondition;

  getReason(): string;
  setReason(value: string): ModelPipelineCondition;

  getMessage(): string;
  setMessage(value: string): ModelPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineCondition): ModelPipelineCondition.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineCondition;
  static deserializeBinaryFromReader(message: ModelPipelineCondition, reader: jspb.BinaryReader): ModelPipelineCondition;
}

export namespace ModelPipelineCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelPipelineList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelPipelineList;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipelineList;

  getItemsList(): Array<ModelPipeline>;
  setItemsList(value: Array<ModelPipeline>): ModelPipelineList;
  clearItemsList(): ModelPipelineList;
  addItems(value?: ModelPipeline, index?: number): ModelPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineList): ModelPipelineList.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineList;
  static deserializeBinaryFromReader(message: ModelPipelineList, reader: jspb.BinaryReader): ModelPipelineList;
}

export namespace ModelPipelineList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelPipeline.AsObject>,
  }
}

export class ModelPipelineRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelPipelineRun;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipelineRun;

  getSpec(): ModelPipelineRunSpec | undefined;
  setSpec(value?: ModelPipelineRunSpec): ModelPipelineRun;
  hasSpec(): boolean;
  clearSpec(): ModelPipelineRun;

  getStatus(): ModelPipelineRunStatus | undefined;
  setStatus(value?: ModelPipelineRunStatus): ModelPipelineRun;
  hasStatus(): boolean;
  clearStatus(): ModelPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRun.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRun): ModelPipelineRun.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRun;
  static deserializeBinaryFromReader(message: ModelPipelineRun, reader: jspb.BinaryReader): ModelPipelineRun;
}

export namespace ModelPipelineRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelPipelineRunSpec.AsObject,
    status?: ModelPipelineRunStatus.AsObject,
  }
}

export class ModelPipelineRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ModelPipelineRunCondition;

  getStatus(): string;
  setStatus(value: string): ModelPipelineRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ModelPipelineRunCondition;

  getReason(): string;
  setReason(value: string): ModelPipelineRunCondition;

  getMessage(): string;
  setMessage(value: string): ModelPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunCondition): ModelPipelineRunCondition.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunCondition;
  static deserializeBinaryFromReader(message: ModelPipelineRunCondition, reader: jspb.BinaryReader): ModelPipelineRunCondition;
}

export namespace ModelPipelineRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ModelPipelineRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelPipelineRunList;
  hasMetadata(): boolean;
  clearMetadata(): ModelPipelineRunList;

  getItemsList(): Array<ModelPipelineRun>;
  setItemsList(value: Array<ModelPipelineRun>): ModelPipelineRunList;
  clearItemsList(): ModelPipelineRunList;
  addItems(value?: ModelPipelineRun, index?: number): ModelPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunList): ModelPipelineRunList.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunList;
  static deserializeBinaryFromReader(message: ModelPipelineRunList, reader: jspb.BinaryReader): ModelPipelineRunList;
}

export namespace ModelPipelineRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelPipelineRun.AsObject>,
  }
}

export class ModelPipelineRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ModelPipelineRunSpec;

  getDescription(): string;
  setDescription(value: string): ModelPipelineRunSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelPipelineRunSpec;

  getPipelinename(): string;
  setPipelinename(value: string): ModelPipelineRunSpec;

  getOwner(): string;
  setOwner(value: string): ModelPipelineRunSpec;

  getPriority(): string;
  setPriority(value: string): ModelPipelineRunSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelPipelineRunSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelPipelineRunSpec;

  getTtl(): number;
  setTtl(value: number): ModelPipelineRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunSpec): ModelPipelineRunSpec.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunSpec;
  static deserializeBinaryFromReader(message: ModelPipelineRunSpec, reader: jspb.BinaryReader): ModelPipelineRunSpec;
}

export namespace ModelPipelineRunSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    datasetname: string,
    pipelinename: string,
    owner: string,
    priority: string,
    paused: boolean,
    aborted: boolean,
    ttl: number,
  }
}

export class ModelPipelineRunStageStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): ModelPipelineRunStageStatus;

  getApproved(): boolean;
  setApproved(value: boolean): ModelPipelineRunStageStatus;

  getApprovedby(): string;
  setApprovedby(value: string): ModelPipelineRunStageStatus;

  getApprovedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setApprovedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStageStatus;
  hasApprovedat(): boolean;
  clearApprovedat(): ModelPipelineRunStageStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStageStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelPipelineRunStageStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStageStatus;
  hasEndtime(): boolean;
  clearEndtime(): ModelPipelineRunStageStatus;

  getResultsList(): Array<ModelValidationResult>;
  setResultsList(value: Array<ModelValidationResult>): ModelPipelineRunStageStatus;
  clearResultsList(): ModelPipelineRunStageStatus;
  addResults(value?: ModelValidationResult, index?: number): ModelValidationResult;

  getError(): string;
  setError(value: string): ModelPipelineRunStageStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunStageStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunStageStatus): ModelPipelineRunStageStatus.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunStageStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunStageStatus;
  static deserializeBinaryFromReader(message: ModelPipelineRunStageStatus, reader: jspb.BinaryReader): ModelPipelineRunStageStatus;
}

export namespace ModelPipelineRunStageStatus {
  export type AsObject = {
    phase: string,
    approved: boolean,
    approvedby: string,
    approvedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    resultsList: Array<ModelValidationResult.AsObject>,
    error: string,
  }
}

export class ModelPipelineRunStatus extends jspb.Message {
  getStage(): string;
  setStage(value: string): ModelPipelineRunStatus;

  getDatasetname(): string;
  setDatasetname(value: string): ModelPipelineRunStatus;

  getStudyname(): string;
  setStudyname(value: string): ModelPipelineRunStatus;

  getModelname(): string;
  setModelname(value: string): ModelPipelineRunStatus;

  getDatastatus(): ModelPipelineRunStageStatus | undefined;
  setDatastatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasDatastatus(): boolean;
  clearDatastatus(): ModelPipelineRunStatus;

  getTrainingstatus(): ModelPipelineRunStageStatus | undefined;
  setTrainingstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasTrainingstatus(): boolean;
  clearTrainingstatus(): ModelPipelineRunStatus;

  getUatstatus(): ModelPipelineRunStageStatus | undefined;
  setUatstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasUatstatus(): boolean;
  clearUatstatus(): ModelPipelineRunStatus;

  getCapacitystatus(): ModelPipelineRunStageStatus | undefined;
  setCapacitystatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasCapacitystatus(): boolean;
  clearCapacitystatus(): ModelPipelineRunStatus;

  getDeploymentstatus(): ModelPipelineRunStageStatus | undefined;
  setDeploymentstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasDeploymentstatus(): boolean;
  clearDeploymentstatus(): ModelPipelineRunStatus;

  getReleasestatus(): ModelPipelineRunStageStatus | undefined;
  setReleasestatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasReleasestatus(): boolean;
  clearReleasestatus(): ModelPipelineRunStatus;

  getMonitoringstatus(): ModelPipelineRunStageStatus | undefined;
  setMonitoringstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasMonitoringstatus(): boolean;
  clearMonitoringstatus(): ModelPipelineRunStatus;

  getLabelingstatus(): ModelPipelineRunStageStatus | undefined;
  setLabelingstatus(value?: ModelPipelineRunStageStatus): ModelPipelineRunStatus;
  hasLabelingstatus(): boolean;
  clearLabelingstatus(): ModelPipelineRunStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelPipelineRunStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStatus;
  hasEndtime(): boolean;
  clearEndtime(): ModelPipelineRunStatus;

  getPhase(): string;
  setPhase(value: string): ModelPipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelPipelineRunStatus;

  getEvalmetrics(): string;
  setEvalmetrics(value: string): ModelPipelineRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelPipelineRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelPipelineRunStatus;

  getProgress(): number;
  setProgress(value: number): ModelPipelineRunStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): ModelPipelineRunStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineRunStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ModelPipelineRunStatus;

  getConditionsList(): Array<ModelPipelineRunCondition>;
  setConditionsList(value: Array<ModelPipelineRunCondition>): ModelPipelineRunStatus;
  clearConditionsList(): ModelPipelineRunStatus;
  addConditions(value?: ModelPipelineRunCondition, index?: number): ModelPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunStatus): ModelPipelineRunStatus.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunStatus;
  static deserializeBinaryFromReader(message: ModelPipelineRunStatus, reader: jspb.BinaryReader): ModelPipelineRunStatus;
}

export namespace ModelPipelineRunStatus {
  export type AsObject = {
    stage: string,
    datasetname: string,
    studyname: string,
    modelname: string,
    datastatus?: ModelPipelineRunStageStatus.AsObject,
    trainingstatus?: ModelPipelineRunStageStatus.AsObject,
    uatstatus?: ModelPipelineRunStageStatus.AsObject,
    capacitystatus?: ModelPipelineRunStageStatus.AsObject,
    deploymentstatus?: ModelPipelineRunStageStatus.AsObject,
    releasestatus?: ModelPipelineRunStageStatus.AsObject,
    monitoringstatus?: ModelPipelineRunStageStatus.AsObject,
    labelingstatus?: ModelPipelineRunStageStatus.AsObject,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    observedgeneration: number,
    evalmetrics: string,
    failurereason: string,
    failuremessage: string,
    progress: number,
    triggeredby: string,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<ModelPipelineRunCondition.AsObject>,
  }
}

export class ModelPipelineSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ModelPipelineSpec;

  getDescription(): string;
  setDescription(value: string): ModelPipelineSpec;

  getDatasetselectorMap(): jspb.Map<string, string>;
  clearDatasetselectorMap(): ModelPipelineSpec;

  getData(): DataStageSpec | undefined;
  setData(value?: DataStageSpec): ModelPipelineSpec;
  hasData(): boolean;
  clearData(): ModelPipelineSpec;

  getTraining(): TrainingStageSpec | undefined;
  setTraining(value?: TrainingStageSpec): ModelPipelineSpec;
  hasTraining(): boolean;
  clearTraining(): ModelPipelineSpec;

  getUat(): UATStageSpec | undefined;
  setUat(value?: UATStageSpec): ModelPipelineSpec;
  hasUat(): boolean;
  clearUat(): ModelPipelineSpec;

  getCapacity(): CapacityStageSpec | undefined;
  setCapacity(value?: CapacityStageSpec): ModelPipelineSpec;
  hasCapacity(): boolean;
  clearCapacity(): ModelPipelineSpec;

  getDeployment(): DeploymentStageSpec | undefined;
  setDeployment(value?: DeploymentStageSpec): ModelPipelineSpec;
  hasDeployment(): boolean;
  clearDeployment(): ModelPipelineSpec;

  getRelease(): ReleaseStageSpec | undefined;
  setRelease(value?: ReleaseStageSpec): ModelPipelineSpec;
  hasRelease(): boolean;
  clearRelease(): ModelPipelineSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelPipelineSpec;
  hasLocation(): boolean;
  clearLocation(): ModelPipelineSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelPipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): ModelPipelineSpec;

  getOwner(): string;
  setOwner(value: string): ModelPipelineSpec;

  getApproveraccountname(): string;
  setApproveraccountname(value: string): ModelPipelineSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): ModelPipelineSpec;
  hasNotification(): boolean;
  clearNotification(): ModelPipelineSpec;

  getBaselinemodelname(): string;
  setBaselinemodelname(value: string): ModelPipelineSpec;

  getPriority(): string;
  setPriority(value: string): ModelPipelineSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelPipelineSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ModelPipelineSpec;
  hasResources(): boolean;
  clearResources(): ModelPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineSpec): ModelPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineSpec;
  static deserializeBinaryFromReader(message: ModelPipelineSpec, reader: jspb.BinaryReader): ModelPipelineSpec;
}

export namespace ModelPipelineSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    datasetselectorMap: Array<[string, string]>,
    data?: DataStageSpec.AsObject,
    training?: TrainingStageSpec.AsObject,
    uat?: UATStageSpec.AsObject,
    capacity?: CapacityStageSpec.AsObject,
    deployment?: DeploymentStageSpec.AsObject,
    release?: ReleaseStageSpec.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    owner: string,
    approveraccountname: string,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    baselinemodelname: string,
    priority: string,
    paused: boolean,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
  }
}

export class ModelPipelineStatus extends jspb.Message {
  getLastrun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus | undefined;
  setLastrun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus): ModelPipelineStatus;
  hasLastrun(): boolean;
  clearLastrun(): ModelPipelineStatus;

  getNextrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setNextrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineStatus;
  hasNextrun(): boolean;
  clearNextrun(): ModelPipelineStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelPipelineStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelPipelineStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ModelPipelineStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelPipelineStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelPipelineStatus;

  getConditionsList(): Array<ModelPipelineCondition>;
  setConditionsList(value: Array<ModelPipelineCondition>): ModelPipelineStatus;
  clearConditionsList(): ModelPipelineStatus;
  addConditions(value?: ModelPipelineCondition, index?: number): ModelPipelineCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineStatus): ModelPipelineStatus.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineStatus;
  static deserializeBinaryFromReader(message: ModelPipelineStatus, reader: jspb.BinaryReader): ModelPipelineStatus;
}

export namespace ModelPipelineStatus {
  export type AsObject = {
    lastrun?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.AsObject,
    nextrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<ModelPipelineCondition.AsObject>,
  }
}

export class ModelResult extends jspb.Message {
  getName(): string;
  setName(value: string): ModelResult;

  getAlg(): string;
  setAlg(value: string): ModelResult;

  getScore(): number;
  setScore(value: number): ModelResult;

  getError(): boolean;
  setError(value: boolean): ModelResult;

  getTrialid(): number;
  setTrialid(value: number): ModelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelResult.AsObject;
  static toObject(includeInstance: boolean, msg: ModelResult): ModelResult.AsObject;
  static serializeBinaryToWriter(message: ModelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelResult;
  static deserializeBinaryFromReader(message: ModelResult, reader: jspb.BinaryReader): ModelResult;
}

export namespace ModelResult {
  export type AsObject = {
    name: string,
    alg: string,
    score: number,
    error: boolean,
    trialid: number,
  }
}

export class ModelSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): ModelSpec;

  getVersionname(): string;
  setVersionname(value: string): ModelSpec;

  getModelversion(): string;
  setModelversion(value: string): ModelSpec;

  getStudyname(): string;
  setStudyname(value: string): ModelSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelSpec;

  getTask(): string;
  setTask(value: string): ModelSpec;

  getObjective(): string;
  setObjective(value: string): ModelSpec;

  getFeatureengineering(): FeatureEngineeringSpec | undefined;
  setFeatureengineering(value?: FeatureEngineeringSpec): ModelSpec;
  hasFeatureengineering(): boolean;
  clearFeatureengineering(): ModelSpec;

  getEstimator(): ClassicalEstimatorSpec | undefined;
  setEstimator(value?: ClassicalEstimatorSpec): ModelSpec;
  hasEstimator(): boolean;
  clearEstimator(): ModelSpec;

  getDnn(): DeepEstimatorSpec | undefined;
  setDnn(value?: DeepEstimatorSpec): ModelSpec;
  hasDnn(): boolean;
  clearDnn(): ModelSpec;

  getChatbot(): ChatbotEstimatorSpec | undefined;
  setChatbot(value?: ChatbotEstimatorSpec): ModelSpec;
  hasChatbot(): boolean;
  clearChatbot(): ModelSpec;

  getNlpestimator(): NLPEstimatorSpec | undefined;
  setNlpestimator(value?: NLPEstimatorSpec): ModelSpec;
  hasNlpestimator(): boolean;
  clearNlpestimator(): ModelSpec;

  getEnsemble(): EnsembleSpec | undefined;
  setEnsemble(value?: EnsembleSpec): ModelSpec;
  hasEnsemble(): boolean;
  clearEnsemble(): ModelSpec;

  getTraining(): TrainingSpec | undefined;
  setTraining(value?: TrainingSpec): ModelSpec;
  hasTraining(): boolean;
  clearTraining(): ModelSpec;

  getServing(): ServingSpec | undefined;
  setServing(value?: ServingSpec): ModelSpec;
  hasServing(): boolean;
  clearServing(): ModelSpec;

  getTested(): boolean;
  setTested(value: boolean): ModelSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelSpec;

  getPackaged(): boolean;
  setPackaged(value: boolean): ModelSpec;

  getPublished(): boolean;
  setPublished(value: boolean): ModelSpec;

  getPushed(): boolean;
  setPushed(value: boolean): ModelSpec;

  getReported(): boolean;
  setReported(value: boolean): ModelSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelSpec;

  getProfiled(): boolean;
  setProfiled(value: boolean): ModelSpec;

  getArchived(): boolean;
  setArchived(value: boolean): ModelSpec;

  getForecasted(): boolean;
  setForecasted(value: boolean): ModelSpec;

  getReleased(): boolean;
  setReleased(value: boolean): ModelSpec;

  getBenchmarked(): boolean;
  setBenchmarked(value: boolean): ModelSpec;

  getExplained(): boolean;
  setExplained(value: boolean): ModelSpec;

  getBaseline(): boolean;
  setBaseline(value: boolean): ModelSpec;

  getFast(): boolean;
  setFast(value: boolean): ModelSpec;

  getFlagged(): boolean;
  setFlagged(value: boolean): ModelSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelSpec;
  hasLocation(): boolean;
  clearLocation(): ModelSpec;

  getForecast(): ForecastSpec | undefined;
  setForecast(value?: ForecastSpec): ModelSpec;
  hasForecast(): boolean;
  clearForecast(): ModelSpec;

  getCompilation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): ModelSpec;
  hasCompilation(): boolean;
  clearCompilation(): ModelSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): ModelSpec;

  getEstimatortype(): string;
  setEstimatortype(value: string): ModelSpec;

  getTtl(): number;
  setTtl(value: number): ModelSpec;

  getModelclass(): string;
  setModelclass(value: string): ModelSpec;

  getTrialid(): number;
  setTrialid(value: number): ModelSpec;

  getGovernance(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceSpec | undefined;
  setGovernance(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceSpec): ModelSpec;
  hasGovernance(): boolean;
  clearGovernance(): ModelSpec;

  getInterpretability(): InterpretabilitySpec | undefined;
  setInterpretability(value?: InterpretabilitySpec): ModelSpec;
  hasInterpretability(): boolean;
  clearInterpretability(): ModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelSpec): ModelSpec.AsObject;
  static serializeBinaryToWriter(message: ModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelSpec;
  static deserializeBinaryFromReader(message: ModelSpec, reader: jspb.BinaryReader): ModelSpec;
}

export namespace ModelSpec {
  export type AsObject = {
    owner: string,
    versionname: string,
    modelversion: string,
    studyname: string,
    datasetname: string,
    task: string,
    objective: string,
    featureengineering?: FeatureEngineeringSpec.AsObject,
    estimator?: ClassicalEstimatorSpec.AsObject,
    dnn?: DeepEstimatorSpec.AsObject,
    chatbot?: ChatbotEstimatorSpec.AsObject,
    nlpestimator?: NLPEstimatorSpec.AsObject,
    ensemble?: EnsembleSpec.AsObject,
    training?: TrainingSpec.AsObject,
    serving?: ServingSpec.AsObject,
    tested: boolean,
    aborted: boolean,
    packaged: boolean,
    published: boolean,
    pushed: boolean,
    reported: boolean,
    paused: boolean,
    profiled: boolean,
    archived: boolean,
    forecasted: boolean,
    released: boolean,
    benchmarked: boolean,
    explained: boolean,
    baseline: boolean,
    fast: boolean,
    flagged: boolean,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    forecast?: ForecastSpec.AsObject,
    compilation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
    activedeadlineseconds: number,
    estimatortype: string,
    ttl: number,
    modelclass: string,
    trialid: number,
    governance?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceSpec.AsObject,
    interpretability?: InterpretabilitySpec.AsObject,
  }
}

export class ModelStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasStarttime(): boolean;
  clearStarttime(): ModelStatus;

  getTrainingstarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingstarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTrainingstarttime(): boolean;
  clearTrainingstarttime(): ModelStatus;

  getTrainingendtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingendtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTrainingendtime(): boolean;
  clearTrainingendtime(): ModelStatus;

  getTestingstarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingstarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTestingstarttime(): boolean;
  clearTestingstarttime(): ModelStatus;

  getTestingendtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingendtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTestingendtime(): boolean;
  clearTestingendtime(): ModelStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasEndtime(): boolean;
  clearEndtime(): ModelStatus;

  getCvscore(): number;
  setCvscore(value: number): ModelStatus;

  getTrainingscore(): number;
  setTrainingscore(value: number): ModelStatus;

  getTestscore(): number;
  setTestscore(value: number): ModelStatus;

  getCost(): number;
  setCost(value: number): ModelStatus;

  getBest(): boolean;
  setBest(value: boolean): ModelStatus;

  getCvList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setCvList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearCvList(): ModelStatus;
  addCv(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTrainList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTrainList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTrainList(): ModelStatus;
  addTrain(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTestList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTestList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTestList(): ModelStatus;
  addTest(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getPhase(): string;
  setPhase(value: string): ModelStatus;

  getReportname(): string;
  setReportname(value: string): ModelStatus;

  getReporturi(): string;
  setReporturi(value: string): ModelStatus;

  getManifesturi(): string;
  setManifesturi(value: string): ModelStatus;

  getWeightsuri(): string;
  setWeightsuri(value: string): ModelStatus;

  getLabelencoderuri(): string;
  setLabelencoderuri(value: string): ModelStatus;

  getLogsuri(): string;
  setLogsuri(value: string): ModelStatus;

  getProfileuri(): string;
  setProfileuri(value: string): ModelStatus;

  getMisclassuri(): string;
  setMisclassuri(value: string): ModelStatus;

  getTaruri(): string;
  setTaruri(value: string): ModelStatus;

  getAppuri(): string;
  setAppuri(value: string): ModelStatus;

  getImagename(): string;
  setImagename(value: string): ModelStatus;

  getImportanceList(): Array<FeatureImportance>;
  setImportanceList(value: Array<FeatureImportance>): ModelStatus;
  clearImportanceList(): ModelStatus;
  addImportance(value?: FeatureImportance, index?: number): FeatureImportance;

  getForecasturi(): string;
  setForecasturi(value: string): ModelStatus;

  getPythonversion(): string;
  setPythonversion(value: string): ModelStatus;

  getPythonpackagesMap(): jspb.Map<string, string>;
  clearPythonpackagesMap(): ModelStatus;

  getTraindataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTraindataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasTraindataset(): boolean;
  clearTraindataset(): ModelStatus;

  getTestdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTestdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasTestdataset(): boolean;
  clearTestdataset(): ModelStatus;

  getValidationdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setValidationdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ModelStatus;
  hasValidationdataset(): boolean;
  clearValidationdataset(): ModelStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelStatus;

  getTrainingrows(): number;
  setTrainingrows(value: number): ModelStatus;

  getTestingrows(): number;
  setTestingrows(value: number): ModelStatus;

  getValidationrows(): number;
  setValidationrows(value: number): ModelStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ModelStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelStatus;

  getProgress(): number;
  setProgress(value: number): ModelStatus;

  getSizeinbytes(): number;
  setSizeinbytes(value: number): ModelStatus;

  getLatency(): number;
  setLatency(value: number): ModelStatus;

  getUrl(): string;
  setUrl(value: string): ModelStatus;

  getPredictorname(): string;
  setPredictorname(value: string): ModelStatus;

  getReleasedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setReleasedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasReleasedat(): boolean;
  clearReleasedat(): ModelStatus;

  getTarfilehash(): string;
  setTarfilehash(value: string): ModelStatus;

  getImagehash(): string;
  setImagehash(value: string): ModelStatus;

  getTrainingdatahash(): DataHashes | undefined;
  setTrainingdatahash(value?: DataHashes): ModelStatus;
  hasTrainingdatahash(): boolean;
  clearTrainingdatahash(): ModelStatus;

  getTrainingresources(): ResourceConsumption | undefined;
  setTrainingresources(value?: ResourceConsumption): ModelStatus;
  hasTrainingresources(): boolean;
  clearTrainingresources(): ModelStatus;

  getTestingresources(): ResourceConsumption | undefined;
  setTestingresources(value?: ResourceConsumption): ModelStatus;
  hasTestingresources(): boolean;
  clearTestingresources(): ModelStatus;

  getTrainedby(): string;
  setTrainedby(value: string): ModelStatus;

  getTeam(): string;
  setTeam(value: string): ModelStatus;

  getEndpoint(): string;
  setEndpoint(value: string): ModelStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ModelStatus;
  hasLogs(): boolean;
  clearLogs(): ModelStatus;

  getRocauccurve(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve | undefined;
  setRocauccurve(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve): ModelStatus;
  hasRocauccurve(): boolean;
  clearRocauccurve(): ModelStatus;

  getPrcurve(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve | undefined;
  setPrcurve(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve): ModelStatus;
  hasPrcurve(): boolean;
  clearPrcurve(): ModelStatus;

  getConfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setConfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): ModelStatus;
  hasConfusionmatrix(): boolean;
  clearConfusionmatrix(): ModelStatus;

  getCorrelationswithtargetList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>;
  setCorrelationswithtargetList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>): ModelStatus;
  clearCorrelationswithtargetList(): ModelStatus;
  addCorrelationswithtarget(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation;

  getTopcorrelationsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>;
  setTopcorrelationsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>): ModelStatus;
  clearTopcorrelationsList(): ModelStatus;
  addTopcorrelations(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ModelStatus;

  getGovernancestatus(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceStatus | undefined;
  setGovernancestatus(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceStatus): ModelStatus;
  hasGovernancestatus(): boolean;
  clearGovernancestatus(): ModelStatus;

  getInterpretability(): InterpretabilityStatus | undefined;
  setInterpretability(value?: InterpretabilityStatus): ModelStatus;
  hasInterpretability(): boolean;
  clearInterpretability(): ModelStatus;

  getImages(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images | undefined;
  setImages(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images): ModelStatus;
  hasImages(): boolean;
  clearImages(): ModelStatus;

  getConditionsList(): Array<ModelCondition>;
  setConditionsList(value: Array<ModelCondition>): ModelStatus;
  clearConditionsList(): ModelStatus;
  addConditions(value?: ModelCondition, index?: number): ModelCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatus): ModelStatus.AsObject;
  static serializeBinaryToWriter(message: ModelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatus;
  static deserializeBinaryFromReader(message: ModelStatus, reader: jspb.BinaryReader): ModelStatus;
}

export namespace ModelStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingstarttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingendtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingstarttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingendtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    cvscore: number,
    trainingscore: number,
    testscore: number,
    cost: number,
    best: boolean,
    cvList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    trainList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    testList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    phase: string,
    reportname: string,
    reporturi: string,
    manifesturi: string,
    weightsuri: string,
    labelencoderuri: string,
    logsuri: string,
    profileuri: string,
    misclassuri: string,
    taruri: string,
    appuri: string,
    imagename: string,
    importanceList: Array<FeatureImportance.AsObject>,
    forecasturi: string,
    pythonversion: string,
    pythonpackagesMap: Array<[string, string]>,
    traindataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    testdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    validationdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    observedgeneration: number,
    trainingrows: number,
    testingrows: number,
    validationrows: number,
    failurereason: string,
    failuremessage: string,
    progress: number,
    sizeinbytes: number,
    latency: number,
    url: string,
    predictorname: string,
    releasedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    tarfilehash: string,
    imagehash: string,
    trainingdatahash?: DataHashes.AsObject,
    trainingresources?: ResourceConsumption.AsObject,
    testingresources?: ResourceConsumption.AsObject,
    trainedby: string,
    team: string,
    endpoint: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    rocauccurve?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve.AsObject,
    prcurve?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve.AsObject,
    confusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    correlationswithtargetList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation.AsObject>,
    topcorrelationsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation.AsObject>,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    governancestatus?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.GovernanceStatus.AsObject,
    interpretability?: InterpretabilityStatus.AsObject,
    images?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images.AsObject,
    conditionsList: Array<ModelCondition.AsObject>,
  }
}

export class ModelValidation extends jspb.Message {
  getType(): string;
  setType(value: string): ModelValidation;

  getPrevmodel(): string;
  setPrevmodel(value: string): ModelValidation;

  getDatasetname(): string;
  setDatasetname(value: string): ModelValidation;

  getDriftfreq(): string;
  setDriftfreq(value: string): ModelValidation;

  getDriftinterval(): number;
  setDriftinterval(value: number): ModelValidation;

  getColumn(): string;
  setColumn(value: string): ModelValidation;

  getMetric(): string;
  setMetric(value: string): ModelValidation;

  getMin(): number;
  setMin(value: number): ModelValidation;

  getMax(): number;
  setMax(value: number): ModelValidation;

  getMinpercent(): number;
  setMinpercent(value: number): ModelValidation;

  getMaxpercent(): number;
  setMaxpercent(value: number): ModelValidation;

  getAgg(): string;
  setAgg(value: string): ModelValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelValidation.AsObject;
  static toObject(includeInstance: boolean, msg: ModelValidation): ModelValidation.AsObject;
  static serializeBinaryToWriter(message: ModelValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelValidation;
  static deserializeBinaryFromReader(message: ModelValidation, reader: jspb.BinaryReader): ModelValidation;
}

export namespace ModelValidation {
  export type AsObject = {
    type: string,
    prevmodel: string,
    datasetname: string,
    driftfreq: string,
    driftinterval: number,
    column: string,
    metric: string,
    min: number,
    max: number,
    minpercent: number,
    maxpercent: number,
    agg: string,
  }
}

export class ModelValidationResult extends jspb.Message {
  getType(): string;
  setType(value: string): ModelValidationResult;

  getDatasetname(): string;
  setDatasetname(value: string): ModelValidationResult;

  getModelname(): string;
  setModelname(value: string): ModelValidationResult;

  getColumn(): string;
  setColumn(value: string): ModelValidationResult;

  getError(): string;
  setError(value: string): ModelValidationResult;

  getMetric(): string;
  setMetric(value: string): ModelValidationResult;

  getActualvalue(): number;
  setActualvalue(value: number): ModelValidationResult;

  getPassed(): boolean;
  setPassed(value: boolean): ModelValidationResult;

  getAt(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setAt(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelValidationResult;
  hasAt(): boolean;
  clearAt(): ModelValidationResult;

  getDurationinsec(): number;
  setDurationinsec(value: number): ModelValidationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelValidationResult.AsObject;
  static toObject(includeInstance: boolean, msg: ModelValidationResult): ModelValidationResult.AsObject;
  static serializeBinaryToWriter(message: ModelValidationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelValidationResult;
  static deserializeBinaryFromReader(message: ModelValidationResult, reader: jspb.BinaryReader): ModelValidationResult;
}

export namespace ModelValidationResult {
  export type AsObject = {
    type: string,
    datasetname: string,
    modelname: string,
    column: string,
    error: string,
    metric: string,
    actualvalue: number,
    passed: boolean,
    at?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    durationinsec: number,
  }
}

export class NLPEstimatorSpec extends jspb.Message {
  getBase(): string;
  setBase(value: string): NLPEstimatorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NLPEstimatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NLPEstimatorSpec): NLPEstimatorSpec.AsObject;
  static serializeBinaryToWriter(message: NLPEstimatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NLPEstimatorSpec;
  static deserializeBinaryFromReader(message: NLPEstimatorSpec, reader: jspb.BinaryReader): NLPEstimatorSpec;
}

export namespace NLPEstimatorSpec {
  export type AsObject = {
    base: string,
  }
}

export class NNLayerParameter extends jspb.Message {
  getName(): string;
  setName(value: string): NNLayerParameter;

  getValue(): string;
  setValue(value: string): NNLayerParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NNLayerParameter.AsObject;
  static toObject(includeInstance: boolean, msg: NNLayerParameter): NNLayerParameter.AsObject;
  static serializeBinaryToWriter(message: NNLayerParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NNLayerParameter;
  static deserializeBinaryFromReader(message: NNLayerParameter, reader: jspb.BinaryReader): NNLayerParameter;
}

export namespace NNLayerParameter {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class Notebook extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Notebook;
  hasMetadata(): boolean;
  clearMetadata(): Notebook;

  getSpec(): NotebookSpec | undefined;
  setSpec(value?: NotebookSpec): Notebook;
  hasSpec(): boolean;
  clearSpec(): Notebook;

  getStatus(): NotebookStatus | undefined;
  setStatus(value?: NotebookStatus): Notebook;
  hasStatus(): boolean;
  clearStatus(): Notebook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notebook.AsObject;
  static toObject(includeInstance: boolean, msg: Notebook): Notebook.AsObject;
  static serializeBinaryToWriter(message: Notebook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notebook;
  static deserializeBinaryFromReader(message: Notebook, reader: jspb.BinaryReader): Notebook;
}

export namespace Notebook {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: NotebookSpec.AsObject,
    status?: NotebookStatus.AsObject,
  }
}

export class NotebookCondition extends jspb.Message {
  getType(): string;
  setType(value: string): NotebookCondition;

  getStatus(): string;
  setStatus(value: string): NotebookCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): NotebookCondition;

  getReason(): string;
  setReason(value: string): NotebookCondition;

  getMessage(): string;
  setMessage(value: string): NotebookCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookCondition.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookCondition): NotebookCondition.AsObject;
  static serializeBinaryToWriter(message: NotebookCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookCondition;
  static deserializeBinaryFromReader(message: NotebookCondition, reader: jspb.BinaryReader): NotebookCondition;
}

export namespace NotebookCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class NotebookList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): NotebookList;
  hasMetadata(): boolean;
  clearMetadata(): NotebookList;

  getItemsList(): Array<Notebook>;
  setItemsList(value: Array<Notebook>): NotebookList;
  clearItemsList(): NotebookList;
  addItems(value?: Notebook, index?: number): Notebook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookList.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookList): NotebookList.AsObject;
  static serializeBinaryToWriter(message: NotebookList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookList;
  static deserializeBinaryFromReader(message: NotebookList, reader: jspb.BinaryReader): NotebookList;
}

export namespace NotebookList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Notebook.AsObject>,
  }
}

export class NotebookRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): NotebookRun;
  hasMetadata(): boolean;
  clearMetadata(): NotebookRun;

  getSpec(): NotebookRunSpec | undefined;
  setSpec(value?: NotebookRunSpec): NotebookRun;
  hasSpec(): boolean;
  clearSpec(): NotebookRun;

  getStatus(): NotebookRunStatus | undefined;
  setStatus(value?: NotebookRunStatus): NotebookRun;
  hasStatus(): boolean;
  clearStatus(): NotebookRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRun.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRun): NotebookRun.AsObject;
  static serializeBinaryToWriter(message: NotebookRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRun;
  static deserializeBinaryFromReader(message: NotebookRun, reader: jspb.BinaryReader): NotebookRun;
}

export namespace NotebookRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: NotebookRunSpec.AsObject,
    status?: NotebookRunStatus.AsObject,
  }
}

export class NotebookRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): NotebookRunCondition;

  getStatus(): string;
  setStatus(value: string): NotebookRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): NotebookRunCondition;

  getReason(): string;
  setReason(value: string): NotebookRunCondition;

  getMessage(): string;
  setMessage(value: string): NotebookRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunCondition): NotebookRunCondition.AsObject;
  static serializeBinaryToWriter(message: NotebookRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunCondition;
  static deserializeBinaryFromReader(message: NotebookRunCondition, reader: jspb.BinaryReader): NotebookRunCondition;
}

export namespace NotebookRunCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class NotebookRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): NotebookRunList;
  hasMetadata(): boolean;
  clearMetadata(): NotebookRunList;

  getItemsList(): Array<NotebookRun>;
  setItemsList(value: Array<NotebookRun>): NotebookRunList;
  clearItemsList(): NotebookRunList;
  addItems(value?: NotebookRun, index?: number): NotebookRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunList.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunList): NotebookRunList.AsObject;
  static serializeBinaryToWriter(message: NotebookRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunList;
  static deserializeBinaryFromReader(message: NotebookRunList, reader: jspb.BinaryReader): NotebookRunList;
}

export namespace NotebookRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<NotebookRun.AsObject>,
  }
}

export class NotebookRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): NotebookRunSpec;

  getNotebookname(): string;
  setNotebookname(value: string): NotebookRunSpec;

  getValuesList(): Array<NotebookVarValue>;
  setValuesList(value: Array<NotebookVarValue>): NotebookRunSpec;
  clearValuesList(): NotebookRunSpec;
  addValues(value?: NotebookVarValue, index?: number): NotebookVarValue;

  getOwner(): string;
  setOwner(value: string): NotebookRunSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): NotebookRunSpec;
  hasResources(): boolean;
  clearResources(): NotebookRunSpec;

  getTtl(): number;
  setTtl(value: number): NotebookRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunSpec): NotebookRunSpec.AsObject;
  static serializeBinaryToWriter(message: NotebookRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunSpec;
  static deserializeBinaryFromReader(message: NotebookRunSpec, reader: jspb.BinaryReader): NotebookRunSpec;
}

export namespace NotebookRunSpec {
  export type AsObject = {
    versionname: string,
    notebookname: string,
    valuesList: Array<NotebookVarValue.AsObject>,
    owner: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    ttl: number,
  }
}

export class NotebookRunStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): NotebookRunStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookRunStatus;
  hasStarttime(): boolean;
  clearStarttime(): NotebookRunStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookRunStatus;
  hasEndtime(): boolean;
  clearEndtime(): NotebookRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): NotebookRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): NotebookRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): NotebookRunStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): NotebookRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): NotebookRunStatus;
  hasLogs(): boolean;
  clearLogs(): NotebookRunStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookRunStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): NotebookRunStatus;

  getConditionsList(): Array<NotebookRunCondition>;
  setConditionsList(value: Array<NotebookRunCondition>): NotebookRunStatus;
  clearConditionsList(): NotebookRunStatus;
  addConditions(value?: NotebookRunCondition, index?: number): NotebookRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunStatus): NotebookRunStatus.AsObject;
  static serializeBinaryToWriter(message: NotebookRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunStatus;
  static deserializeBinaryFromReader(message: NotebookRunStatus, reader: jspb.BinaryReader): NotebookRunStatus;
}

export namespace NotebookRunStatus {
  export type AsObject = {
    phase: string,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    triggeredby: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<NotebookRunCondition.AsObject>,
  }
}

export class NotebookSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): NotebookSpec;

  getDescription(): string;
  setDescription(value: string): NotebookSpec;

  getSchemaref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setSchemaref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): NotebookSpec;
  hasSchemaref(): boolean;
  clearSchemaref(): NotebookSpec;

  getImagename(): string;
  setImagename(value: string): NotebookSpec;

  getRequirements(): string;
  setRequirements(value: string): NotebookSpec;

  getDebpackages(): string;
  setDebpackages(value: string): NotebookSpec;

  getVarsList(): Array<string>;
  setVarsList(value: Array<string>): NotebookSpec;
  clearVarsList(): NotebookSpec;
  addVars(value: string, index?: number): NotebookSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): NotebookSpec;
  hasLocation(): boolean;
  clearLocation(): NotebookSpec;

  getOwner(): string;
  setOwner(value: string): NotebookSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): NotebookSpec;
  hasResources(): boolean;
  clearResources(): NotebookSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): NotebookSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): NotebookSpec;
  hasSchedule(): boolean;
  clearSchedule(): NotebookSpec;

  getPriority(): string;
  setPriority(value: string): NotebookSpec;

  getPaused(): boolean;
  setPaused(value: boolean): NotebookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookSpec): NotebookSpec.AsObject;
  static serializeBinaryToWriter(message: NotebookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookSpec;
  static deserializeBinaryFromReader(message: NotebookSpec, reader: jspb.BinaryReader): NotebookSpec;
}

export namespace NotebookSpec {
  export type AsObject = {
    versionname: string,
    description: string,
    schemaref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    imagename: string,
    requirements: string,
    debpackages: string,
    varsList: Array<string>,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    owner: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    activedeadlineseconds: number,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    priority: string,
    paused: boolean,
  }
}

export class NotebookStatus extends jspb.Message {
  getImage(): string;
  setImage(value: string): NotebookStatus;

  getUri(): string;
  setUri(value: string): NotebookStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): NotebookStatus;

  getLastrun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus | undefined;
  setLastrun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus): NotebookStatus;
  hasLastrun(): boolean;
  clearLastrun(): NotebookStatus;

  getNextrun(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setNextrun(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookStatus;
  hasNextrun(): boolean;
  clearNextrun(): NotebookStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): NotebookStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): NotebookStatus;

  getFailurereason(): string;
  setFailurereason(value: string): NotebookStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): NotebookStatus;

  getConditionsList(): Array<NotebookCondition>;
  setConditionsList(value: Array<NotebookCondition>): NotebookStatus;
  clearConditionsList(): NotebookStatus;
  addConditions(value?: NotebookCondition, index?: number): NotebookCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookStatus): NotebookStatus.AsObject;
  static serializeBinaryToWriter(message: NotebookStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookStatus;
  static deserializeBinaryFromReader(message: NotebookStatus, reader: jspb.BinaryReader): NotebookStatus;
}

export namespace NotebookStatus {
  export type AsObject = {
    image: string,
    uri: string,
    observedgeneration: number,
    lastrun?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.AsObject,
    nextrun?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason: string,
    failuremessage: string,
    conditionsList: Array<NotebookCondition.AsObject>,
  }
}

export class NotebookVarValue extends jspb.Message {
  getName(): string;
  setName(value: string): NotebookVarValue;

  getValue(): string;
  setValue(value: string): NotebookVarValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookVarValue.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookVarValue): NotebookVarValue.AsObject;
  static serializeBinaryToWriter(message: NotebookVarValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookVarValue;
  static deserializeBinaryFromReader(message: NotebookVarValue, reader: jspb.BinaryReader): NotebookVarValue;
}

export namespace NotebookVarValue {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class PeriodSeasonalitySpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): PeriodSeasonalitySpec;

  getPeriods(): number;
  setPeriods(value: number): PeriodSeasonalitySpec;

  getMode(): string;
  setMode(value: string): PeriodSeasonalitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeriodSeasonalitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: PeriodSeasonalitySpec): PeriodSeasonalitySpec.AsObject;
  static serializeBinaryToWriter(message: PeriodSeasonalitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeriodSeasonalitySpec;
  static deserializeBinaryFromReader(message: PeriodSeasonalitySpec, reader: jspb.BinaryReader): PeriodSeasonalitySpec;
}

export namespace PeriodSeasonalitySpec {
  export type AsObject = {
    enabled: boolean,
    periods: number,
    mode: string,
  }
}

export class PeriodSpec extends jspb.Message {
  getInterval(): string;
  setInterval(value: string): PeriodSpec;

  getStart(): number;
  setStart(value: number): PeriodSpec;

  getLength(): number;
  setLength(value: number): PeriodSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeriodSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PeriodSpec): PeriodSpec.AsObject;
  static serializeBinaryToWriter(message: PeriodSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeriodSpec;
  static deserializeBinaryFromReader(message: PeriodSpec, reader: jspb.BinaryReader): PeriodSpec;
}

export namespace PeriodSpec {
  export type AsObject = {
    interval: string,
    start: number,
    length: number,
  }
}

export class PrunerSpec extends jspb.Message {
  getType(): string;
  setType(value: string): PrunerSpec;

  getStartuptrials(): number;
  setStartuptrials(value: number): PrunerSpec;

  getWarmuptrials(): number;
  setWarmuptrials(value: number): PrunerSpec;

  getMintrials(): number;
  setMintrials(value: number): PrunerSpec;

  getIntervaltrials(): number;
  setIntervaltrials(value: number): PrunerSpec;

  getPercentile(): number;
  setPercentile(value: number): PrunerSpec;

  getLower(): number;
  setLower(value: number): PrunerSpec;

  getUpper(): number;
  setUpper(value: number): PrunerSpec;

  getShoptions(): SuccessiveHalvingOptions | undefined;
  setShoptions(value?: SuccessiveHalvingOptions): PrunerSpec;
  hasShoptions(): boolean;
  clearShoptions(): PrunerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrunerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PrunerSpec): PrunerSpec.AsObject;
  static serializeBinaryToWriter(message: PrunerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrunerSpec;
  static deserializeBinaryFromReader(message: PrunerSpec, reader: jspb.BinaryReader): PrunerSpec;
}

export namespace PrunerSpec {
  export type AsObject = {
    type: string,
    startuptrials: number,
    warmuptrials: number,
    mintrials: number,
    intervaltrials: number,
    percentile: number,
    lower: number,
    upper: number,
    shoptions?: SuccessiveHalvingOptions.AsObject,
  }
}

export class RegressorSpec extends jspb.Message {
  getName(): string;
  setName(value: string): RegressorSpec;

  getPriorscale(): number;
  setPriorscale(value: number): RegressorSpec;

  getStandardize(): boolean;
  setStandardize(value: boolean): RegressorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegressorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RegressorSpec): RegressorSpec.AsObject;
  static serializeBinaryToWriter(message: RegressorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegressorSpec;
  static deserializeBinaryFromReader(message: RegressorSpec, reader: jspb.BinaryReader): RegressorSpec;
}

export namespace RegressorSpec {
  export type AsObject = {
    name: string,
    priorscale: number,
    standardize: boolean,
  }
}

export class ReleaseStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ReleaseStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): ReleaseStageSpec;

  getPredictorname(): string;
  setPredictorname(value: string): ReleaseStageSpec;

  getTemplate(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec | undefined;
  setTemplate(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec): ReleaseStageSpec;
  hasTemplate(): boolean;
  clearTemplate(): ReleaseStageSpec;

  getManualapproval(): boolean;
  setManualapproval(value: boolean): ReleaseStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): ReleaseStageSpec;
  clearValidationsList(): ReleaseStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ReleaseStageSpec;
  hasResources(): boolean;
  clearResources(): ReleaseStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseStageSpec): ReleaseStageSpec.AsObject;
  static serializeBinaryToWriter(message: ReleaseStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseStageSpec;
  static deserializeBinaryFromReader(message: ReleaseStageSpec, reader: jspb.BinaryReader): ReleaseStageSpec;
}

export namespace ReleaseStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    predictorname: string,
    template?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.AsObject,
    manualapproval: boolean,
    validationsList: Array<ModelValidation.AsObject>,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
  }
}

export class Report extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Report;
  hasMetadata(): boolean;
  clearMetadata(): Report;

  getSpec(): ReportSpec | undefined;
  setSpec(value?: ReportSpec): Report;
  hasSpec(): boolean;
  clearSpec(): Report;

  getStatus(): ReportStatus | undefined;
  setStatus(value?: ReportStatus): Report;
  hasStatus(): boolean;
  clearStatus(): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ReportSpec.AsObject,
    status?: ReportStatus.AsObject,
  }
}

export class ReportCondition extends jspb.Message {
  getType(): string;
  setType(value: string): ReportCondition;

  getStatus(): string;
  setStatus(value: string): ReportCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): ReportCondition;

  getReason(): string;
  setReason(value: string): ReportCondition;

  getMessage(): string;
  setMessage(value: string): ReportCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportCondition.AsObject;
  static toObject(includeInstance: boolean, msg: ReportCondition): ReportCondition.AsObject;
  static serializeBinaryToWriter(message: ReportCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportCondition;
  static deserializeBinaryFromReader(message: ReportCondition, reader: jspb.BinaryReader): ReportCondition;
}

export namespace ReportCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class ReportList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ReportList;
  hasMetadata(): boolean;
  clearMetadata(): ReportList;

  getItemsList(): Array<Report>;
  setItemsList(value: Array<Report>): ReportList;
  clearItemsList(): ReportList;
  addItems(value?: Report, index?: number): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportList.AsObject;
  static toObject(includeInstance: boolean, msg: ReportList): ReportList.AsObject;
  static serializeBinaryToWriter(message: ReportList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportList;
  static deserializeBinaryFromReader(message: ReportList, reader: jspb.BinaryReader): ReportList;
}

export namespace ReportList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Report.AsObject>,
  }
}

export class ReportSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ReportSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ReportSpec;
  hasEntityref(): boolean;
  clearEntityref(): ReportSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ReportSpec;
  hasLocation(): boolean;
  clearLocation(): ReportSpec;

  getReporttype(): string;
  setReporttype(value: string): ReportSpec;

  getFormat(): string;
  setFormat(value: string): ReportSpec;

  getNotifiername(): string;
  setNotifiername(value: string): ReportSpec;

  getOwner(): string;
  setOwner(value: string): ReportSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ReportSpec;
  hasResources(): boolean;
  clearResources(): ReportSpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): ReportSpec;

  getCustom(): CustomReportSpec | undefined;
  setCustom(value?: CustomReportSpec): ReportSpec;
  hasCustom(): boolean;
  clearCustom(): ReportSpec;

  getCronreportname(): string;
  setCronreportname(value: string): ReportSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReportSpec): ReportSpec.AsObject;
  static serializeBinaryToWriter(message: ReportSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportSpec;
  static deserializeBinaryFromReader(message: ReportSpec, reader: jspb.BinaryReader): ReportSpec;
}

export namespace ReportSpec {
  export type AsObject = {
    versionname: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    reporttype: string,
    format: string,
    notifiername: string,
    owner: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    activedeadlineseconds: number,
    custom?: CustomReportSpec.AsObject,
    cronreportname: string,
  }
}

export class ReportStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasStarttime(): boolean;
  clearStarttime(): ReportStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasEndtime(): boolean;
  clearEndtime(): ReportStatus;

  getPhase(): string;
  setPhase(value: string): ReportStatus;

  getUri(): string;
  setUri(value: string): ReportStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ReportStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ReportStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ReportStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ReportStatus;
  hasLogs(): boolean;
  clearLogs(): ReportStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): ReportStatus;

  getConditionsList(): Array<ReportCondition>;
  setConditionsList(value: Array<ReportCondition>): ReportStatus;
  clearConditionsList(): ReportStatus;
  addConditions(value?: ReportCondition, index?: number): ReportCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReportStatus): ReportStatus.AsObject;
  static serializeBinaryToWriter(message: ReportStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportStatus;
  static deserializeBinaryFromReader(message: ReportStatus, reader: jspb.BinaryReader): ReportStatus;
}

export namespace ReportStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase: string,
    uri: string,
    observedgeneration: number,
    failurereason: string,
    failuremessage: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<ReportCondition.AsObject>,
  }
}

export class ReportTemplate extends jspb.Message {
  getSpec(): ReportSpec | undefined;
  setSpec(value?: ReportSpec): ReportTemplate;
  hasSpec(): boolean;
  clearSpec(): ReportTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: ReportTemplate): ReportTemplate.AsObject;
  static serializeBinaryToWriter(message: ReportTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportTemplate;
  static deserializeBinaryFromReader(message: ReportTemplate, reader: jspb.BinaryReader): ReportTemplate;
}

export namespace ReportTemplate {
  export type AsObject = {
    spec?: ReportSpec.AsObject,
  }
}

export class ResourceConsumption extends jspb.Message {
  getCpu(): number;
  setCpu(value: number): ResourceConsumption;

  getMem(): number;
  setMem(value: number): ResourceConsumption;

  getGpu(): number;
  setGpu(value: number): ResourceConsumption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceConsumption.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceConsumption): ResourceConsumption.AsObject;
  static serializeBinaryToWriter(message: ResourceConsumption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceConsumption;
  static deserializeBinaryFromReader(message: ResourceConsumption, reader: jspb.BinaryReader): ResourceConsumption;
}

export namespace ResourceConsumption {
  export type AsObject = {
    cpu: number,
    mem: number,
    gpu: number,
  }
}

export class SearchSpec extends jspb.Message {
  getSampler(): string;
  setSampler(value: string): SearchSpec;

  getPruner(): PrunerSpec | undefined;
  setPruner(value?: PrunerSpec): SearchSpec;
  hasPruner(): boolean;
  clearPruner(): SearchSpec;

  getMaxcost(): number;
  setMaxcost(value: number): SearchSpec;

  getMaxtime(): number;
  setMaxtime(value: number): SearchSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): SearchSpec;

  getMinscore(): number;
  setMinscore(value: number): SearchSpec;

  getTrainers(): number;
  setTrainers(value: number): SearchSpec;

  getTest(): number;
  setTest(value: number): SearchSpec;

  getRetaintop(): number;
  setRetaintop(value: number): SearchSpec;

  getRetainedfor(): number;
  setRetainedfor(value: number): SearchSpec;

  getSearchspace(): AlgorithmSearchSpaceSpec | undefined;
  setSearchspace(value?: AlgorithmSearchSpaceSpec): SearchSpec;
  hasSearchspace(): boolean;
  clearSearchspace(): SearchSpec;

  getEarlystopafter(): number;
  setEarlystopafter(value: number): SearchSpec;

  getKeeponlytopmodel(): boolean;
  setKeeponlytopmodel(value: boolean): SearchSpec;

  getObjective(): string;
  setObjective(value: string): SearchSpec;

  getObjective2(): string;
  setObjective2(value: string): SearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSpec): SearchSpec.AsObject;
  static serializeBinaryToWriter(message: SearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSpec;
  static deserializeBinaryFromReader(message: SearchSpec, reader: jspb.BinaryReader): SearchSpec;
}

export namespace SearchSpec {
  export type AsObject = {
    sampler: string,
    pruner?: PrunerSpec.AsObject,
    maxcost: number,
    maxtime: number,
    maxmodels: number,
    minscore: number,
    trainers: number,
    test: number,
    retaintop: number,
    retainedfor: number,
    searchspace?: AlgorithmSearchSpaceSpec.AsObject,
    earlystopafter: number,
    keeponlytopmodel: boolean,
    objective: string,
    objective2: string,
  }
}

export class SegmentSpec extends jspb.Message {
  getColumnname(): string;
  setColumnname(value: string): SegmentSpec;

  getOp(): string;
  setOp(value: string): SegmentSpec;

  getValue(): string;
  setValue(value: string): SegmentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SegmentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SegmentSpec): SegmentSpec.AsObject;
  static serializeBinaryToWriter(message: SegmentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SegmentSpec;
  static deserializeBinaryFromReader(message: SegmentSpec, reader: jspb.BinaryReader): SegmentSpec;
}

export namespace SegmentSpec {
  export type AsObject = {
    columnname: string,
    op: string,
    value: string,
  }
}

export class ServingSpec extends jspb.Message {
  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ServingSpec;
  hasResources(): boolean;
  clearResources(): ServingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSpec): ServingSpec.AsObject;
  static serializeBinaryToWriter(message: ServingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSpec;
  static deserializeBinaryFromReader(message: ServingSpec, reader: jspb.BinaryReader): ServingSpec;
}

export namespace ServingSpec {
  export type AsObject = {
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
  }
}

export class Study extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Study;
  hasMetadata(): boolean;
  clearMetadata(): Study;

  getSpec(): StudySpec | undefined;
  setSpec(value?: StudySpec): Study;
  hasSpec(): boolean;
  clearSpec(): Study;

  getStatus(): StudyStatus | undefined;
  setStatus(value?: StudyStatus): Study;
  hasStatus(): boolean;
  clearStatus(): Study;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Study.AsObject;
  static toObject(includeInstance: boolean, msg: Study): Study.AsObject;
  static serializeBinaryToWriter(message: Study, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Study;
  static deserializeBinaryFromReader(message: Study, reader: jspb.BinaryReader): Study;
}

export namespace Study {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: StudySpec.AsObject,
    status?: StudyStatus.AsObject,
  }
}

export class StudyCondition extends jspb.Message {
  getType(): string;
  setType(value: string): StudyCondition;

  getStatus(): string;
  setStatus(value: string): StudyCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): StudyCondition;

  getReason(): string;
  setReason(value: string): StudyCondition;

  getMessage(): string;
  setMessage(value: string): StudyCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyCondition.AsObject;
  static toObject(includeInstance: boolean, msg: StudyCondition): StudyCondition.AsObject;
  static serializeBinaryToWriter(message: StudyCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyCondition;
  static deserializeBinaryFromReader(message: StudyCondition, reader: jspb.BinaryReader): StudyCondition;
}

export namespace StudyCondition {
  export type AsObject = {
    type: string,
    status: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason: string,
    message: string,
  }
}

export class StudyForecastSpec extends jspb.Message {
  getTemplate(): ForecastSpec | undefined;
  setTemplate(value?: ForecastSpec): StudyForecastSpec;
  hasTemplate(): boolean;
  clearTemplate(): StudyForecastSpec;

  getHierarchy(): Hierarchy | undefined;
  setHierarchy(value?: Hierarchy): StudyForecastSpec;
  hasHierarchy(): boolean;
  clearHierarchy(): StudyForecastSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyForecastSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StudyForecastSpec): StudyForecastSpec.AsObject;
  static serializeBinaryToWriter(message: StudyForecastSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyForecastSpec;
  static deserializeBinaryFromReader(message: StudyForecastSpec, reader: jspb.BinaryReader): StudyForecastSpec;
}

export namespace StudyForecastSpec {
  export type AsObject = {
    template?: ForecastSpec.AsObject,
    hierarchy?: Hierarchy.AsObject,
  }
}

export class StudyList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): StudyList;
  hasMetadata(): boolean;
  clearMetadata(): StudyList;

  getItemsList(): Array<Study>;
  setItemsList(value: Array<Study>): StudyList;
  clearItemsList(): StudyList;
  addItems(value?: Study, index?: number): Study;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyList.AsObject;
  static toObject(includeInstance: boolean, msg: StudyList): StudyList.AsObject;
  static serializeBinaryToWriter(message: StudyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyList;
  static deserializeBinaryFromReader(message: StudyList, reader: jspb.BinaryReader): StudyList;
}

export namespace StudyList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Study.AsObject>,
  }
}

export class StudyPhaseStatus extends jspb.Message {
  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyPhaseStatus;
  hasStarttime(): boolean;
  clearStarttime(): StudyPhaseStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyPhaseStatus;
  hasEndtime(): boolean;
  clearEndtime(): StudyPhaseStatus;

  getWaiting(): number;
  setWaiting(value: number): StudyPhaseStatus;

  getRunning(): number;
  setRunning(value: number): StudyPhaseStatus;

  getFailed(): number;
  setFailed(value: number): StudyPhaseStatus;

  getCompleted(): number;
  setCompleted(value: number): StudyPhaseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyPhaseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyPhaseStatus): StudyPhaseStatus.AsObject;
  static serializeBinaryToWriter(message: StudyPhaseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyPhaseStatus;
  static deserializeBinaryFromReader(message: StudyPhaseStatus, reader: jspb.BinaryReader): StudyPhaseStatus;
}

export namespace StudyPhaseStatus {
  export type AsObject = {
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    waiting: number,
    running: number,
    failed: number,
    completed: number,
  }
}

export class StudyScheduleSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): StudyScheduleSpec;

  getStartat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyScheduleSpec;
  hasStartat(): boolean;
  clearStartat(): StudyScheduleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyScheduleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StudyScheduleSpec): StudyScheduleSpec.AsObject;
  static serializeBinaryToWriter(message: StudyScheduleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyScheduleSpec;
  static deserializeBinaryFromReader(message: StudyScheduleSpec, reader: jspb.BinaryReader): StudyScheduleSpec;
}

export namespace StudyScheduleSpec {
  export type AsObject = {
    enabled: boolean,
    startat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class StudySpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): StudySpec;

  getDescription(): string;
  setDescription(value: string): StudySpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): StudySpec;
  hasLabref(): boolean;
  clearLabref(): StudySpec;

  getDatasetname(): string;
  setDatasetname(value: string): StudySpec;

  getTask(): string;
  setTask(value: string): StudySpec;

  getFesearch(): FeatureEngineeringSearchSpec | undefined;
  setFesearch(value?: FeatureEngineeringSearchSpec): StudySpec;
  hasFesearch(): boolean;
  clearFesearch(): StudySpec;

  getBaseline(): BaselineSpec | undefined;
  setBaseline(value?: BaselineSpec): StudySpec;
  hasBaseline(): boolean;
  clearBaseline(): StudySpec;

  getSearch(): SearchSpec | undefined;
  setSearch(value?: SearchSpec): StudySpec;
  hasSearch(): boolean;
  clearSearch(): StudySpec;

  getEnsembles(): EnsemblesSpec | undefined;
  setEnsembles(value?: EnsemblesSpec): StudySpec;
  hasEnsembles(): boolean;
  clearEnsembles(): StudySpec;

  getTrainingtemplate(): TrainingSpec | undefined;
  setTrainingtemplate(value?: TrainingSpec): StudySpec;
  hasTrainingtemplate(): boolean;
  clearTrainingtemplate(): StudySpec;

  getForecast(): StudyForecastSpec | undefined;
  setForecast(value?: StudyForecastSpec): StudySpec;
  hasForecast(): boolean;
  clearForecast(): StudySpec;

  getSchedule(): StudyScheduleSpec | undefined;
  setSchedule(value?: StudyScheduleSpec): StudySpec;
  hasSchedule(): boolean;
  clearSchedule(): StudySpec;

  getInterpretability(): InterpretabilitySpec | undefined;
  setInterpretability(value?: InterpretabilitySpec): StudySpec;
  hasInterpretability(): boolean;
  clearInterpretability(): StudySpec;

  getAborted(): boolean;
  setAborted(value: boolean): StudySpec;

  getReported(): boolean;
  setReported(value: boolean): StudySpec;

  getPaused(): boolean;
  setPaused(value: boolean): StudySpec;

  getProfiled(): boolean;
  setProfiled(value: boolean): StudySpec;

  getModelpublished(): boolean;
  setModelpublished(value: boolean): StudySpec;

  getModelimagepushed(): boolean;
  setModelimagepushed(value: boolean): StudySpec;

  getModelbenchmarked(): boolean;
  setModelbenchmarked(value: boolean): StudySpec;

  getModelexplained(): boolean;
  setModelexplained(value: boolean): StudySpec;

  getFast(): boolean;
  setFast(value: boolean): StudySpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudySpec;
  hasLocation(): boolean;
  clearLocation(): StudySpec;

  getOwner(): string;
  setOwner(value: string): StudySpec;

  getActivedeadlineseconds(): number;
  setActivedeadlineseconds(value: number): StudySpec;

  getCompilation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec | undefined;
  setCompilation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec): StudySpec;
  hasCompilation(): boolean;
  clearCompilation(): StudySpec;

  getTemplate(): boolean;
  setTemplate(value: boolean): StudySpec;

  getFlagged(): boolean;
  setFlagged(value: boolean): StudySpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): StudySpec;
  hasNotification(): boolean;
  clearNotification(): StudySpec;

  getModelimage(): ModelImageSpec | undefined;
  setModelimage(value?: ModelImageSpec): StudySpec;
  hasModelimage(): boolean;
  clearModelimage(): StudySpec;

  getGc(): GarbageCollectionSpec | undefined;
  setGc(value?: GarbageCollectionSpec): StudySpec;
  hasGc(): boolean;
  clearGc(): StudySpec;

  getTtl(): number;
  setTtl(value: number): StudySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudySpec.AsObject;
  static toObject(includeInstance: boolean, msg: StudySpec): StudySpec.AsObject;
  static serializeBinaryToWriter(message: StudySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudySpec;
  static deserializeBinaryFromReader(message: StudySpec, reader: jspb.BinaryReader): StudySpec;
}

export namespace StudySpec {
  export type AsObject = {
    versionname: string,
    description: string,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    datasetname: string,
    task: string,
    fesearch?: FeatureEngineeringSearchSpec.AsObject,
    baseline?: BaselineSpec.AsObject,
    search?: SearchSpec.AsObject,
    ensembles?: EnsemblesSpec.AsObject,
    trainingtemplate?: TrainingSpec.AsObject,
    forecast?: StudyForecastSpec.AsObject,
    schedule?: StudyScheduleSpec.AsObject,
    interpretability?: InterpretabilitySpec.AsObject,
    aborted: boolean,
    reported: boolean,
    paused: boolean,
    profiled: boolean,
    modelpublished: boolean,
    modelimagepushed: boolean,
    modelbenchmarked: boolean,
    modelexplained: boolean,
    fast: boolean,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    owner: string,
    activedeadlineseconds: number,
    compilation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CompilerSpec.AsObject,
    template: boolean,
    flagged: boolean,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    modelimage?: ModelImageSpec.AsObject,
    gc?: GarbageCollectionSpec.AsObject,
    ttl: number,
  }
}

export class StudyStatus extends jspb.Message {
  getModels(): number;
  setModels(value: number): StudyStatus;

  getStarttime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStarttime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasStarttime(): boolean;
  clearStarttime(): StudyStatus;

  getEndtime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEndtime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasEndtime(): boolean;
  clearEndtime(): StudyStatus;

  getBestmodel(): string;
  setBestmodel(value: string): StudyStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): StudyStatus;

  getProfileuri(): string;
  setProfileuri(value: string): StudyStatus;

  getReportname(): string;
  setReportname(value: string): StudyStatus;

  getPhase(): string;
  setPhase(value: string): StudyStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): StudyStatus;

  getTraindataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTraindataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasTraindataset(): boolean;
  clearTraindataset(): StudyStatus;

  getTestdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setTestdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasTestdataset(): boolean;
  clearTestdataset(): StudyStatus;

  getValidationdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setValidationdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): StudyStatus;
  hasValidationdataset(): boolean;
  clearValidationdataset(): StudyStatus;

  getLastmodelid(): number;
  setLastmodelid(value: number): StudyStatus;

  getFailurereason(): string;
  setFailurereason(value: string): StudyStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): StudyStatus;

  getTrainingrows(): number;
  setTrainingrows(value: number): StudyStatus;

  getTestingrows(): number;
  setTestingrows(value: number): StudyStatus;

  getValidationrows(): number;
  setValidationrows(value: number): StudyStatus;

  getProgress(): number;
  setProgress(value: number): StudyStatus;

  getBaselinemodel(): string;
  setBaselinemodel(value: string): StudyStatus;

  getTrainingdatahash(): DataHashes | undefined;
  setTrainingdatahash(value?: DataHashes): StudyStatus;
  hasTrainingdatahash(): boolean;
  clearTrainingdatahash(): StudyStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): StudyStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): StudyStatus;
  hasLogs(): boolean;
  clearLogs(): StudyStatus;

  getFeatureengineering(): StudyPhaseStatus | undefined;
  setFeatureengineering(value?: StudyPhaseStatus): StudyStatus;
  hasFeatureengineering(): boolean;
  clearFeatureengineering(): StudyStatus;

  getBaseline(): StudyPhaseStatus | undefined;
  setBaseline(value?: StudyPhaseStatus): StudyStatus;
  hasBaseline(): boolean;
  clearBaseline(): StudyStatus;

  getSearch(): StudyPhaseStatus | undefined;
  setSearch(value?: StudyPhaseStatus): StudyStatus;
  hasSearch(): boolean;
  clearSearch(): StudyStatus;

  getEnsemble(): StudyPhaseStatus | undefined;
  setEnsemble(value?: StudyPhaseStatus): StudyStatus;
  hasEnsemble(): boolean;
  clearEnsemble(): StudyStatus;

  getTest(): StudyPhaseStatus | undefined;
  setTest(value?: StudyPhaseStatus): StudyStatus;
  hasTest(): boolean;
  clearTest(): StudyStatus;

  getExplain(): StudyPhaseStatus | undefined;
  setExplain(value?: StudyPhaseStatus): StudyStatus;
  hasExplain(): boolean;
  clearExplain(): StudyStatus;

  getLastupdated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastupdated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasLastupdated(): boolean;
  clearLastupdated(): StudyStatus;

  getBestfe(): FeatureEngineeringSpec | undefined;
  setBestfe(value?: FeatureEngineeringSpec): StudyStatus;
  hasBestfe(): boolean;
  clearBestfe(): StudyStatus;

  getGc(): GarbageCollectionStatus | undefined;
  setGc(value?: GarbageCollectionStatus): StudyStatus;
  hasGc(): boolean;
  clearGc(): StudyStatus;

  getConditionsList(): Array<StudyCondition>;
  setConditionsList(value: Array<StudyCondition>): StudyStatus;
  clearConditionsList(): StudyStatus;
  addConditions(value?: StudyCondition, index?: number): StudyCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyStatus): StudyStatus.AsObject;
  static serializeBinaryToWriter(message: StudyStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyStatus;
  static deserializeBinaryFromReader(message: StudyStatus, reader: jspb.BinaryReader): StudyStatus;
}

export namespace StudyStatus {
  export type AsObject = {
    models: number,
    starttime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    endtime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    bestmodel: string,
    bestmodelscore: number,
    profileuri: string,
    reportname: string,
    phase: string,
    observedgeneration: number,
    traindataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    testdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    validationdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    lastmodelid: number,
    failurereason: string,
    failuremessage: string,
    trainingrows: number,
    testingrows: number,
    validationrows: number,
    progress: number,
    baselinemodel: string,
    trainingdatahash?: DataHashes.AsObject,
    triggeredby: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    featureengineering?: StudyPhaseStatus.AsObject,
    baseline?: StudyPhaseStatus.AsObject,
    search?: StudyPhaseStatus.AsObject,
    ensemble?: StudyPhaseStatus.AsObject,
    test?: StudyPhaseStatus.AsObject,
    explain?: StudyPhaseStatus.AsObject,
    lastupdated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    bestfe?: FeatureEngineeringSpec.AsObject,
    gc?: GarbageCollectionStatus.AsObject,
    conditionsList: Array<StudyCondition.AsObject>,
  }
}

export class SuccessiveHalvingOptions extends jspb.Message {
  getMaxbudget(): number;
  setMaxbudget(value: number): SuccessiveHalvingOptions;

  getEliminationrate(): number;
  setEliminationrate(value: number): SuccessiveHalvingOptions;

  getModality(): string;
  setModality(value: string): SuccessiveHalvingOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingOptions): SuccessiveHalvingOptions.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingOptions;
  static deserializeBinaryFromReader(message: SuccessiveHalvingOptions, reader: jspb.BinaryReader): SuccessiveHalvingOptions;
}

export namespace SuccessiveHalvingOptions {
  export type AsObject = {
    maxbudget: number,
    eliminationrate: number,
    modality: string,
  }
}

export class SuccessiveHalvingSpec extends jspb.Message {
  getBudget(): number;
  setBudget(value: number): SuccessiveHalvingSpec;

  getBracket(): number;
  setBracket(value: number): SuccessiveHalvingSpec;

  getRung(): number;
  setRung(value: number): SuccessiveHalvingSpec;

  getConfid(): number;
  setConfid(value: number): SuccessiveHalvingSpec;

  getModality(): string;
  setModality(value: string): SuccessiveHalvingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingSpec): SuccessiveHalvingSpec.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingSpec;
  static deserializeBinaryFromReader(message: SuccessiveHalvingSpec, reader: jspb.BinaryReader): SuccessiveHalvingSpec;
}

export namespace SuccessiveHalvingSpec {
  export type AsObject = {
    budget: number,
    bracket: number,
    rung: number,
    confid: number,
    modality: string,
  }
}

export class TextPipelineSpec extends jspb.Message {
  getEncoder(): string;
  setEncoder(value: string): TextPipelineSpec;

  getTokenizer(): string;
  setTokenizer(value: string): TextPipelineSpec;

  getStopwords(): boolean;
  setStopwords(value: boolean): TextPipelineSpec;

  getPos(): boolean;
  setPos(value: boolean): TextPipelineSpec;

  getLemma(): boolean;
  setLemma(value: boolean): TextPipelineSpec;

  getStem(): boolean;
  setStem(value: boolean): TextPipelineSpec;

  getEmbedding(): string;
  setEmbedding(value: string): TextPipelineSpec;

  getSvd(): boolean;
  setSvd(value: boolean): TextPipelineSpec;

  getMaxsvdcomponents(): number;
  setMaxsvdcomponents(value: number): TextPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TextPipelineSpec): TextPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: TextPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPipelineSpec;
  static deserializeBinaryFromReader(message: TextPipelineSpec, reader: jspb.BinaryReader): TextPipelineSpec;
}

export namespace TextPipelineSpec {
  export type AsObject = {
    encoder: string,
    tokenizer: string,
    stopwords: boolean,
    pos: boolean,
    lemma: boolean,
    stem: boolean,
    embedding: string,
    svd: boolean,
    maxsvdcomponents: number,
  }
}

export class TimeSeriesDataSpec extends jspb.Message {
  getTimecolumn(): string;
  setTimecolumn(value: string): TimeSeriesDataSpec;

  getTargetcolumn(): string;
  setTargetcolumn(value: string): TimeSeriesDataSpec;

  getDatetimeformat(): string;
  setDatetimeformat(value: string): TimeSeriesDataSpec;

  getHierarchy(): HierarchySpec | undefined;
  setHierarchy(value?: HierarchySpec): TimeSeriesDataSpec;
  hasHierarchy(): boolean;
  clearHierarchy(): TimeSeriesDataSpec;

  getHoliday(): HolidaySpec | undefined;
  setHoliday(value?: HolidaySpec): TimeSeriesDataSpec;
  hasHoliday(): boolean;
  clearHoliday(): TimeSeriesDataSpec;

  getHistory(): PeriodSpec | undefined;
  setHistory(value?: PeriodSpec): TimeSeriesDataSpec;
  hasHistory(): boolean;
  clearHistory(): TimeSeriesDataSpec;

  getForecast(): PeriodSpec | undefined;
  setForecast(value?: PeriodSpec): TimeSeriesDataSpec;
  hasForecast(): boolean;
  clearForecast(): TimeSeriesDataSpec;

  getYearlyseasonality(): PeriodSeasonalitySpec | undefined;
  setYearlyseasonality(value?: PeriodSeasonalitySpec): TimeSeriesDataSpec;
  hasYearlyseasonality(): boolean;
  clearYearlyseasonality(): TimeSeriesDataSpec;

  getWeeklyseasonality(): PeriodSeasonalitySpec | undefined;
  setWeeklyseasonality(value?: PeriodSeasonalitySpec): TimeSeriesDataSpec;
  hasWeeklyseasonality(): boolean;
  clearWeeklyseasonality(): TimeSeriesDataSpec;

  getDailyseasonality(): PeriodSeasonalitySpec | undefined;
  setDailyseasonality(value?: PeriodSeasonalitySpec): TimeSeriesDataSpec;
  hasDailyseasonality(): boolean;
  clearDailyseasonality(): TimeSeriesDataSpec;

  getGrowth(): string;
  setGrowth(value: string): TimeSeriesDataSpec;

  getRegressorsList(): Array<RegressorSpec>;
  setRegressorsList(value: Array<RegressorSpec>): TimeSeriesDataSpec;
  clearRegressorsList(): TimeSeriesDataSpec;
  addRegressors(value?: RegressorSpec, index?: number): RegressorSpec;

  getCustomseasonalitiesList(): Array<CustomSeasonalitySpec>;
  setCustomseasonalitiesList(value: Array<CustomSeasonalitySpec>): TimeSeriesDataSpec;
  clearCustomseasonalitiesList(): TimeSeriesDataSpec;
  addCustomseasonalities(value?: CustomSeasonalitySpec, index?: number): CustomSeasonalitySpec;

  getChangepoints(): ChangePointSpec | undefined;
  setChangepoints(value?: ChangePointSpec): TimeSeriesDataSpec;
  hasChangepoints(): boolean;
  clearChangepoints(): TimeSeriesDataSpec;

  getIntevalwidth(): number;
  setIntevalwidth(value: number): TimeSeriesDataSpec;

  getUncertaintysamples(): number;
  setUncertaintysamples(value: number): TimeSeriesDataSpec;

  getSeasonality(): string;
  setSeasonality(value: string): TimeSeriesDataSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesDataSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesDataSpec): TimeSeriesDataSpec.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesDataSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesDataSpec;
  static deserializeBinaryFromReader(message: TimeSeriesDataSpec, reader: jspb.BinaryReader): TimeSeriesDataSpec;
}

export namespace TimeSeriesDataSpec {
  export type AsObject = {
    timecolumn: string,
    targetcolumn: string,
    datetimeformat: string,
    hierarchy?: HierarchySpec.AsObject,
    holiday?: HolidaySpec.AsObject,
    history?: PeriodSpec.AsObject,
    forecast?: PeriodSpec.AsObject,
    yearlyseasonality?: PeriodSeasonalitySpec.AsObject,
    weeklyseasonality?: PeriodSeasonalitySpec.AsObject,
    dailyseasonality?: PeriodSeasonalitySpec.AsObject,
    growth: string,
    regressorsList: Array<RegressorSpec.AsObject>,
    customseasonalitiesList: Array<CustomSeasonalitySpec.AsObject>,
    changepoints?: ChangePointSpec.AsObject,
    intevalwidth: number,
    uncertaintysamples: number,
    seasonality: string,
  }
}

export class TrainingSpec extends jspb.Message {
  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TrainingSpec;
  hasLabref(): boolean;
  clearLabref(): TrainingSpec;

  getPriority(): string;
  setPriority(value: string): TrainingSpec;

  getCvtype(): string;
  setCvtype(value: string): TrainingSpec;

  getCv(): boolean;
  setCv(value: boolean): TrainingSpec;

  getFolds(): number;
  setFolds(value: number): TrainingSpec;

  getSplit(): DataSplitSpec | undefined;
  setSplit(value?: DataSplitSpec): TrainingSpec;
  hasSplit(): boolean;
  clearSplit(): TrainingSpec;

  getEvalmetricsList(): Array<string>;
  setEvalmetricsList(value: Array<string>): TrainingSpec;
  clearEvalmetricsList(): TrainingSpec;
  addEvalmetrics(value: string, index?: number): TrainingSpec;

  getEarlystop(): boolean;
  setEarlystop(value: boolean): TrainingSpec;

  getCheckpointinterval(): number;
  setCheckpointinterval(value: number): TrainingSpec;

  getSh(): SuccessiveHalvingSpec | undefined;
  setSh(value?: SuccessiveHalvingSpec): TrainingSpec;
  hasSh(): boolean;
  clearSh(): TrainingSpec;

  getSeed(): number;
  setSeed(value: number): TrainingSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): TrainingSpec;
  hasResources(): boolean;
  clearResources(): TrainingSpec;

  getGpu(): boolean;
  setGpu(value: boolean): TrainingSpec;

  getDistributed(): boolean;
  setDistributed(value: boolean): TrainingSpec;

  getNodecount(): number;
  setNodecount(value: number): TrainingSpec;

  getSamplepct(): number;
  setSamplepct(value: number): TrainingSpec;

  getCheckpoint(): CheckpointSpec | undefined;
  setCheckpoint(value?: CheckpointSpec): TrainingSpec;
  hasCheckpoint(): boolean;
  clearCheckpoint(): TrainingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingSpec): TrainingSpec.AsObject;
  static serializeBinaryToWriter(message: TrainingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingSpec;
  static deserializeBinaryFromReader(message: TrainingSpec, reader: jspb.BinaryReader): TrainingSpec;
}

export namespace TrainingSpec {
  export type AsObject = {
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    priority: string,
    cvtype: string,
    cv: boolean,
    folds: number,
    split?: DataSplitSpec.AsObject,
    evalmetricsList: Array<string>,
    earlystop: boolean,
    checkpointinterval: number,
    sh?: SuccessiveHalvingSpec.AsObject,
    seed: number,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    gpu: boolean,
    distributed: boolean,
    nodecount: number,
    samplepct: number,
    checkpoint?: CheckpointSpec.AsObject,
  }
}

export class TrainingStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): TrainingStageSpec;

  getNotebookname(): string;
  setNotebookname(value: string): TrainingStageSpec;

  getLabname(): string;
  setLabname(value: string): TrainingStageSpec;

  getStudytemplatename(): string;
  setStudytemplatename(value: string): TrainingStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): TrainingStageSpec;
  clearValidationsList(): TrainingStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingStageSpec): TrainingStageSpec.AsObject;
  static serializeBinaryToWriter(message: TrainingStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingStageSpec;
  static deserializeBinaryFromReader(message: TrainingStageSpec, reader: jspb.BinaryReader): TrainingStageSpec;
}

export namespace TrainingStageSpec {
  export type AsObject = {
    enabled: boolean,
    notebookname: string,
    labname: string,
    studytemplatename: string,
    validationsList: Array<ModelValidation.AsObject>,
  }
}

export class UATStageSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): UATStageSpec;

  getServingsitename(): string;
  setServingsitename(value: string): UATStageSpec;

  getValidationsList(): Array<ModelValidation>;
  setValidationsList(value: Array<ModelValidation>): UATStageSpec;
  clearValidationsList(): UATStageSpec;
  addValidations(value?: ModelValidation, index?: number): ModelValidation;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): UATStageSpec;
  hasResources(): boolean;
  clearResources(): UATStageSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UATStageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: UATStageSpec): UATStageSpec.AsObject;
  static serializeBinaryToWriter(message: UATStageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UATStageSpec;
  static deserializeBinaryFromReader(message: UATStageSpec, reader: jspb.BinaryReader): UATStageSpec;
}

export namespace UATStageSpec {
  export type AsObject = {
    enabled: boolean,
    servingsitename: string,
    validationsList: Array<ModelValidation.AsObject>,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
  }
}

export class VideoPipelineSpec extends jspb.Message {
  getFeaturizer(): string;
  setFeaturizer(value: string): VideoPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VideoPipelineSpec): VideoPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: VideoPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoPipelineSpec;
  static deserializeBinaryFromReader(message: VideoPipelineSpec, reader: jspb.BinaryReader): VideoPipelineSpec;
}

export namespace VideoPipelineSpec {
  export type AsObject = {
    featurizer: string,
  }
}

