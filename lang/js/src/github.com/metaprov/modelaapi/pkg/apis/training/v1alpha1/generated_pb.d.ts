import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class AlgorithmParameterRange extends jspb.Message {
  getName(): string;
  setName(value: string): AlgorithmParameterRange;
  hasName(): boolean;
  clearName(): AlgorithmParameterRange;

  getRangesList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange>;
  setRangesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange>): AlgorithmParameterRange;
  clearRangesList(): AlgorithmParameterRange;
  addRanges(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmParameterRange.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmParameterRange): AlgorithmParameterRange.AsObject;
  static serializeBinaryToWriter(message: AlgorithmParameterRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmParameterRange;
  static deserializeBinaryFromReader(message: AlgorithmParameterRange, reader: jspb.BinaryReader): AlgorithmParameterRange;
}

export namespace AlgorithmParameterRange {
  export type AsObject = {
    name?: string,
    rangesList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ParameterRange.AsObject>,
  }
}

export class AlgorithmSearchSpaceSpec extends jspb.Message {
  getIncludeList(): Array<string>;
  setIncludeList(value: Array<string>): AlgorithmSearchSpaceSpec;
  clearIncludeList(): AlgorithmSearchSpaceSpec;
  addInclude(value: string, index?: number): AlgorithmSearchSpaceSpec;

  getExcludeList(): Array<string>;
  setExcludeList(value: Array<string>): AlgorithmSearchSpaceSpec;
  clearExcludeList(): AlgorithmSearchSpaceSpec;
  addExclude(value: string, index?: number): AlgorithmSearchSpaceSpec;

  getCustomList(): Array<AlgorithmParameterRange>;
  setCustomList(value: Array<AlgorithmParameterRange>): AlgorithmSearchSpaceSpec;
  clearCustomList(): AlgorithmSearchSpaceSpec;
  addCustom(value?: AlgorithmParameterRange, index?: number): AlgorithmParameterRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmSearchSpaceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmSearchSpaceSpec): AlgorithmSearchSpaceSpec.AsObject;
  static serializeBinaryToWriter(message: AlgorithmSearchSpaceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmSearchSpaceSpec;
  static deserializeBinaryFromReader(message: AlgorithmSearchSpaceSpec, reader: jspb.BinaryReader): AlgorithmSearchSpaceSpec;
}

export namespace AlgorithmSearchSpaceSpec {
  export type AsObject = {
    includeList: Array<string>,
    excludeList: Array<string>,
    customList: Array<AlgorithmParameterRange.AsObject>,
  }
}

export class Anomaly extends jspb.Message {
  getName(): string;
  setName(value: string): Anomaly;
  hasName(): boolean;
  clearName(): Anomaly;

  getValuecolumn(): string;
  setValuecolumn(value: string): Anomaly;
  hasValuecolumn(): boolean;
  clearValuecolumn(): Anomaly;

  getAdjdeltacolumn(): string;
  setAdjdeltacolumn(value: string): Anomaly;
  hasAdjdeltacolumn(): boolean;
  clearAdjdeltacolumn(): Anomaly;

  getStart(): string;
  setStart(value: string): Anomaly;
  hasStart(): boolean;
  clearStart(): Anomaly;

  getEnd(): string;
  setEnd(value: string): Anomaly;
  hasEnd(): boolean;
  clearEnd(): Anomaly;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Anomaly.AsObject;
  static toObject(includeInstance: boolean, msg: Anomaly): Anomaly.AsObject;
  static serializeBinaryToWriter(message: Anomaly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Anomaly;
  static deserializeBinaryFromReader(message: Anomaly, reader: jspb.BinaryReader): Anomaly;
}

export namespace Anomaly {
  export type AsObject = {
    name?: string,
    valuecolumn?: string,
    adjdeltacolumn?: string,
    start?: string,
    end?: string,
  }
}

export class AudioPipelineSpec extends jspb.Message {
  getFeaturizer(): string;
  setFeaturizer(value: string): AudioPipelineSpec;
  hasFeaturizer(): boolean;
  clearFeaturizer(): AudioPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AudioPipelineSpec): AudioPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: AudioPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioPipelineSpec;
  static deserializeBinaryFromReader(message: AudioPipelineSpec, reader: jspb.BinaryReader): AudioPipelineSpec;
}

export namespace AudioPipelineSpec {
  export type AsObject = {
    featurizer?: string,
  }
}

export class BacktestSpec extends jspb.Message {
  getSliding(): boolean;
  setSliding(value: boolean): BacktestSpec;
  hasSliding(): boolean;
  clearSliding(): BacktestSpec;

  getSplits(): number;
  setSplits(value: number): BacktestSpec;
  hasSplits(): boolean;
  clearSplits(): BacktestSpec;

  getInitial(): number;
  setInitial(value: number): BacktestSpec;
  hasInitial(): boolean;
  clearInitial(): BacktestSpec;

  getGap(): number;
  setGap(value: number): BacktestSpec;
  hasGap(): boolean;
  clearGap(): BacktestSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BacktestSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BacktestSpec): BacktestSpec.AsObject;
  static serializeBinaryToWriter(message: BacktestSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BacktestSpec;
  static deserializeBinaryFromReader(message: BacktestSpec, reader: jspb.BinaryReader): BacktestSpec;
}

export namespace BacktestSpec {
  export type AsObject = {
    sliding?: boolean,
    splits?: number,
    initial?: number,
    gap?: number,
  }
}

export class BaselineSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): BaselineSpec;
  hasEnabled(): boolean;
  clearEnabled(): BaselineSpec;

  getBaselinesList(): Array<string>;
  setBaselinesList(value: Array<string>): BaselineSpec;
  clearBaselinesList(): BaselineSpec;
  addBaselines(value: string, index?: number): BaselineSpec;

  getAll(): boolean;
  setAll(value: boolean): BaselineSpec;
  hasAll(): boolean;
  clearAll(): BaselineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaselineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BaselineSpec): BaselineSpec.AsObject;
  static serializeBinaryToWriter(message: BaselineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaselineSpec;
  static deserializeBinaryFromReader(message: BaselineSpec, reader: jspb.BinaryReader): BaselineSpec;
}

export namespace BaselineSpec {
  export type AsObject = {
    enabled?: boolean,
    baselinesList: Array<string>,
    all?: boolean,
  }
}

export class ChangePoint extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePoint.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePoint): ChangePoint.AsObject;
  static serializeBinaryToWriter(message: ChangePoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePoint;
  static deserializeBinaryFromReader(message: ChangePoint, reader: jspb.BinaryReader): ChangePoint;
}

export namespace ChangePoint {
  export type AsObject = {
  }
}

export class CheckpointSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): CheckpointSpec;
  hasEnabled(): boolean;
  clearEnabled(): CheckpointSpec;

  getCheckpointinterval(): number;
  setCheckpointinterval(value: number): CheckpointSpec;
  hasCheckpointinterval(): boolean;
  clearCheckpointinterval(): CheckpointSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): CheckpointSpec;
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
    enabled?: boolean,
    checkpointinterval?: number,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class ClassicalEstimatorSpec extends jspb.Message {
  getAlgorithmname(): string;
  setAlgorithmname(value: string): ClassicalEstimatorSpec;
  hasAlgorithmname(): boolean;
  clearAlgorithmname(): ClassicalEstimatorSpec;

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
    algorithmname?: string,
    parametersList: Array<HyperParameterValue.AsObject>,
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

export class DataHashes extends jspb.Message {
  getTrainhash(): string;
  setTrainhash(value: string): DataHashes;
  hasTrainhash(): boolean;
  clearTrainhash(): DataHashes;

  getTestinghash(): string;
  setTestinghash(value: string): DataHashes;
  hasTestinghash(): boolean;
  clearTestinghash(): DataHashes;

  getValidationhash(): string;
  setValidationhash(value: string): DataHashes;
  hasValidationhash(): boolean;
  clearValidationhash(): DataHashes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataHashes.AsObject;
  static toObject(includeInstance: boolean, msg: DataHashes): DataHashes.AsObject;
  static serializeBinaryToWriter(message: DataHashes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataHashes;
  static deserializeBinaryFromReader(message: DataHashes, reader: jspb.BinaryReader): DataHashes;
}

export namespace DataHashes {
  export type AsObject = {
    trainhash?: string,
    testinghash?: string,
    validationhash?: string,
  }
}

export class DataSplitSpec extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): DataSplitSpec;
  hasMethod(): boolean;
  clearMethod(): DataSplitSpec;

  getTrain(): number;
  setTrain(value: number): DataSplitSpec;
  hasTrain(): boolean;
  clearTrain(): DataSplitSpec;

  getValidation(): number;
  setValidation(value: number): DataSplitSpec;
  hasValidation(): boolean;
  clearValidation(): DataSplitSpec;

  getTest(): number;
  setTest(value: number): DataSplitSpec;
  hasTest(): boolean;
  clearTest(): DataSplitSpec;

  getSplitcolumn(): string;
  setSplitcolumn(value: string): DataSplitSpec;
  hasSplitcolumn(): boolean;
  clearSplitcolumn(): DataSplitSpec;

  getTrainsnapshot(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference | undefined;
  setTrainsnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference): DataSplitSpec;
  hasTrainsnapshot(): boolean;
  clearTrainsnapshot(): DataSplitSpec;

  getTestsnapshot(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference | undefined;
  setTestsnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference): DataSplitSpec;
  hasTestsnapshot(): boolean;
  clearTestsnapshot(): DataSplitSpec;

  getValidationdataset(): string;
  setValidationdataset(value: string): DataSplitSpec;
  hasValidationdataset(): boolean;
  clearValidationdataset(): DataSplitSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSplitSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataSplitSpec): DataSplitSpec.AsObject;
  static serializeBinaryToWriter(message: DataSplitSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSplitSpec;
  static deserializeBinaryFromReader(message: DataSplitSpec, reader: jspb.BinaryReader): DataSplitSpec;
}

export namespace DataSplitSpec {
  export type AsObject = {
    method?: string,
    train?: number,
    validation?: number,
    test?: number,
    splitcolumn?: string,
    trainsnapshot?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference.AsObject,
    testsnapshot?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference.AsObject,
    validationdataset?: string,
  }
}

export class DeepEstimatorLayer extends jspb.Message {
  getName(): string;
  setName(value: string): DeepEstimatorLayer;
  hasName(): boolean;
  clearName(): DeepEstimatorLayer;

  getType(): string;
  setType(value: string): DeepEstimatorLayer;
  hasType(): boolean;
  clearType(): DeepEstimatorLayer;

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
    name?: string,
    type?: string,
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
  hasType(): boolean;
  clearType(): DeepEstimatorSpec;

  getBatchsize(): number;
  setBatchsize(value: number): DeepEstimatorSpec;
  hasBatchsize(): boolean;
  clearBatchsize(): DeepEstimatorSpec;

  getEpochs(): number;
  setEpochs(value: number): DeepEstimatorSpec;
  hasEpochs(): boolean;
  clearEpochs(): DeepEstimatorSpec;

  getValidationsplit(): number;
  setValidationsplit(value: number): DeepEstimatorSpec;
  hasValidationsplit(): boolean;
  clearValidationsplit(): DeepEstimatorSpec;

  getIsseq(): boolean;
  setIsseq(value: boolean): DeepEstimatorSpec;
  hasIsseq(): boolean;
  clearIsseq(): DeepEstimatorSpec;

  getGpus(): number;
  setGpus(value: number): DeepEstimatorSpec;
  hasGpus(): boolean;
  clearGpus(): DeepEstimatorSpec;

  getLoss(): string;
  setLoss(value: string): DeepEstimatorSpec;
  hasLoss(): boolean;
  clearLoss(): DeepEstimatorSpec;

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
    type?: string,
    batchsize?: number,
    epochs?: number,
    validationsplit?: number,
    isseq?: boolean,
    gpus?: number,
    loss?: string,
  }
}

export class EarlyStopSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): EarlyStopSpec;
  hasEnabled(): boolean;
  clearEnabled(): EarlyStopSpec;

  getInitial(): number;
  setInitial(value: number): EarlyStopSpec;
  hasInitial(): boolean;
  clearInitial(): EarlyStopSpec;

  getModelswithnoprogress(): number;
  setModelswithnoprogress(value: number): EarlyStopSpec;
  hasModelswithnoprogress(): boolean;
  clearModelswithnoprogress(): EarlyStopSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarlyStopSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EarlyStopSpec): EarlyStopSpec.AsObject;
  static serializeBinaryToWriter(message: EarlyStopSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarlyStopSpec;
  static deserializeBinaryFromReader(message: EarlyStopSpec, reader: jspb.BinaryReader): EarlyStopSpec;
}

export namespace EarlyStopSpec {
  export type AsObject = {
    enabled?: boolean,
    initial?: number,
    modelswithnoprogress?: number,
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

  getBaseestimator(): ClassicalEstimatorSpec | undefined;
  setBaseestimator(value?: ClassicalEstimatorSpec): EnsembleSpec;
  hasBaseestimator(): boolean;
  clearBaseestimator(): EnsembleSpec;

  getType(): string;
  setType(value: string): EnsembleSpec;
  hasType(): boolean;
  clearType(): EnsembleSpec;

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
    baseestimator?: ClassicalEstimatorSpec.AsObject,
    type?: string,
  }
}

export class EnsemblesSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): EnsemblesSpec;
  hasEnabled(): boolean;
  clearEnabled(): EnsemblesSpec;

  getVotingensemble(): boolean;
  setVotingensemble(value: boolean): EnsemblesSpec;
  hasVotingensemble(): boolean;
  clearVotingensemble(): EnsemblesSpec;

  getStackingensemble(): boolean;
  setStackingensemble(value: boolean): EnsemblesSpec;
  hasStackingensemble(): boolean;
  clearStackingensemble(): EnsemblesSpec;

  getTop(): number;
  setTop(value: number): EnsemblesSpec;
  hasTop(): boolean;
  clearTop(): EnsemblesSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnsemblesSpec.AsObject;
  static toObject(includeInstance: boolean, msg: EnsemblesSpec): EnsemblesSpec.AsObject;
  static serializeBinaryToWriter(message: EnsemblesSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnsemblesSpec;
  static deserializeBinaryFromReader(message: EnsemblesSpec, reader: jspb.BinaryReader): EnsemblesSpec;
}

export namespace EnsemblesSpec {
  export type AsObject = {
    enabled?: boolean,
    votingensemble?: boolean,
    stackingensemble?: boolean,
    top?: number,
  }
}

export class EntityRef extends jspb.Message {
  getName(): string;
  setName(value: string): EntityRef;
  hasName(): boolean;
  clearName(): EntityRef;

  getExcludeList(): Array<string>;
  setExcludeList(value: Array<string>): EntityRef;
  clearExcludeList(): EntityRef;
  addExclude(value: string, index?: number): EntityRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityRef.AsObject;
  static toObject(includeInstance: boolean, msg: EntityRef): EntityRef.AsObject;
  static serializeBinaryToWriter(message: EntityRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityRef;
  static deserializeBinaryFromReader(message: EntityRef, reader: jspb.BinaryReader): EntityRef;
}

export namespace EntityRef {
  export type AsObject = {
    name?: string,
    excludeList: Array<string>,
  }
}

export class EvalMetrics extends jspb.Message {
  getSelection(): string;
  setSelection(value: string): EvalMetrics;
  hasSelection(): boolean;
  clearSelection(): EvalMetrics;

  getReportingList(): Array<string>;
  setReportingList(value: Array<string>): EvalMetrics;
  clearReportingList(): EvalMetrics;
  addReporting(value: string, index?: number): EvalMetrics;

  getAggfunc(): string;
  setAggfunc(value: string): EvalMetrics;
  hasAggfunc(): boolean;
  clearAggfunc(): EvalMetrics;

  getAggperiod(): number;
  setAggperiod(value: number): EvalMetrics;
  hasAggperiod(): boolean;
  clearAggperiod(): EvalMetrics;

  getNullmodelparams(): string;
  setNullmodelparams(value: string): EvalMetrics;
  hasNullmodelparams(): boolean;
  clearNullmodelparams(): EvalMetrics;

  getRelerrtolerance(): number;
  setRelerrtolerance(value: number): EvalMetrics;
  hasRelerrtolerance(): boolean;
  clearRelerrtolerance(): EvalMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: EvalMetrics): EvalMetrics.AsObject;
  static serializeBinaryToWriter(message: EvalMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalMetrics;
  static deserializeBinaryFromReader(message: EvalMetrics, reader: jspb.BinaryReader): EvalMetrics;
}

export namespace EvalMetrics {
  export type AsObject = {
    selection?: string,
    reportingList: Array<string>,
    aggfunc?: string,
    aggperiod?: number,
    nullmodelparams?: string,
    relerrtolerance?: number,
  }
}

export class EvalPeriod extends jspb.Message {
  getTesthorizon(): number;
  setTesthorizon(value: number): EvalPeriod;
  hasTesthorizon(): boolean;
  clearTesthorizon(): EvalPeriod;

  getPeriodsbetweentraintest(): number;
  setPeriodsbetweentraintest(value: number): EvalPeriod;
  hasPeriodsbetweentraintest(): boolean;
  clearPeriodsbetweentraintest(): EvalPeriod;

  getCvperiodsbetweensplits(): number;
  setCvperiodsbetweensplits(value: number): EvalPeriod;
  hasCvperiodsbetweensplits(): boolean;
  clearCvperiodsbetweensplits(): EvalPeriod;

  getCvexpandingwindows(): boolean;
  setCvexpandingwindows(value: boolean): EvalPeriod;
  hasCvexpandingwindows(): boolean;
  clearCvexpandingwindows(): EvalPeriod;

  getCvhorizon(): number;
  setCvhorizon(value: number): EvalPeriod;
  hasCvhorizon(): boolean;
  clearCvhorizon(): EvalPeriod;

  getCvmintrainperiods(): number;
  setCvmintrainperiods(value: number): EvalPeriod;
  hasCvmintrainperiods(): boolean;
  clearCvmintrainperiods(): EvalPeriod;

  getCvmaxsplits(): number;
  setCvmaxsplits(value: number): EvalPeriod;
  hasCvmaxsplits(): boolean;
  clearCvmaxsplits(): EvalPeriod;

  getCvusemostrecentsplits(): boolean;
  setCvusemostrecentsplits(value: boolean): EvalPeriod;
  hasCvusemostrecentsplits(): boolean;
  clearCvusemostrecentsplits(): EvalPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: EvalPeriod): EvalPeriod.AsObject;
  static serializeBinaryToWriter(message: EvalPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalPeriod;
  static deserializeBinaryFromReader(message: EvalPeriod, reader: jspb.BinaryReader): EvalPeriod;
}

export namespace EvalPeriod {
  export type AsObject = {
    testhorizon?: number,
    periodsbetweentraintest?: number,
    cvperiodsbetweensplits?: number,
    cvexpandingwindows?: boolean,
    cvhorizon?: number,
    cvmintrainperiods?: number,
    cvmaxsplits?: number,
    cvusemostrecentsplits?: boolean,
  }
}

export class FeatureEngineeringPipeline extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureEngineeringPipeline;
  hasName(): boolean;
  clearName(): FeatureEngineeringPipeline;

  getDatatype(): string;
  setDatatype(value: string): FeatureEngineeringPipeline;
  hasDatatype(): boolean;
  clearDatatype(): FeatureEngineeringPipeline;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): FeatureEngineeringPipeline;
  clearFeaturesList(): FeatureEngineeringPipeline;
  addFeatures(value: string, index?: number): FeatureEngineeringPipeline;

  getImputation(): string;
  setImputation(value: string): FeatureEngineeringPipeline;
  hasImputation(): boolean;
  clearImputation(): FeatureEngineeringPipeline;

  getEncoding(): string;
  setEncoding(value: string): FeatureEngineeringPipeline;
  hasEncoding(): boolean;
  clearEncoding(): FeatureEngineeringPipeline;

  getScaling(): string;
  setScaling(value: string): FeatureEngineeringPipeline;
  hasScaling(): boolean;
  clearScaling(): FeatureEngineeringPipeline;

  getDiscretisation(): string;
  setDiscretisation(value: string): FeatureEngineeringPipeline;
  hasDiscretisation(): boolean;
  clearDiscretisation(): FeatureEngineeringPipeline;

  getVariabletransformation(): string;
  setVariabletransformation(value: string): FeatureEngineeringPipeline;
  hasVariabletransformation(): boolean;
  clearVariabletransformation(): FeatureEngineeringPipeline;

  getOutlierhandling(): string;
  setOutlierhandling(value: string): FeatureEngineeringPipeline;
  hasOutlierhandling(): boolean;
  clearOutlierhandling(): FeatureEngineeringPipeline;

  getDatetimetransformation(): string;
  setDatetimetransformation(value: string): FeatureEngineeringPipeline;
  hasDatetimetransformation(): boolean;
  clearDatetimetransformation(): FeatureEngineeringPipeline;

  getText(): TextPipelineSpec | undefined;
  setText(value?: TextPipelineSpec): FeatureEngineeringPipeline;
  hasText(): boolean;
  clearText(): FeatureEngineeringPipeline;

  getDrop(): boolean;
  setDrop(value: boolean): FeatureEngineeringPipeline;
  hasDrop(): boolean;
  clearDrop(): FeatureEngineeringPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureEngineeringPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureEngineeringPipeline): FeatureEngineeringPipeline.AsObject;
  static serializeBinaryToWriter(message: FeatureEngineeringPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureEngineeringPipeline;
  static deserializeBinaryFromReader(message: FeatureEngineeringPipeline, reader: jspb.BinaryReader): FeatureEngineeringPipeline;
}

export namespace FeatureEngineeringPipeline {
  export type AsObject = {
    name?: string,
    datatype?: string,
    featuresList: Array<string>,
    imputation?: string,
    encoding?: string,
    scaling?: string,
    discretisation?: string,
    variabletransformation?: string,
    outlierhandling?: string,
    datetimetransformation?: string,
    text?: TextPipelineSpec.AsObject,
    drop?: boolean,
  }
}

export class FeatureEngineeringSpec extends jspb.Message {
  getPipelinesList(): Array<FeatureEngineeringPipeline>;
  setPipelinesList(value: Array<FeatureEngineeringPipeline>): FeatureEngineeringSpec;
  clearPipelinesList(): FeatureEngineeringSpec;
  addPipelines(value?: FeatureEngineeringPipeline, index?: number): FeatureEngineeringPipeline;

  getImbalance(): string;
  setImbalance(value: string): FeatureEngineeringSpec;
  hasImbalance(): boolean;
  clearImbalance(): FeatureEngineeringSpec;

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
    imbalance?: string,
  }
}

export class FeatureImportance extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): FeatureImportance;
  hasFeature(): boolean;
  clearFeature(): FeatureImportance;

  getImportance(): number;
  setImportance(value: number): FeatureImportance;
  hasImportance(): boolean;
  clearImportance(): FeatureImportance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureImportance.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureImportance): FeatureImportance.AsObject;
  static serializeBinaryToWriter(message: FeatureImportance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureImportance;
  static deserializeBinaryFromReader(message: FeatureImportance, reader: jspb.BinaryReader): FeatureImportance;
}

export namespace FeatureImportance {
  export type AsObject = {
    feature?: string,
    importance?: number,
  }
}

export class FeatureInfo extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureInfo;
  hasName(): boolean;
  clearName(): FeatureInfo;

  getReason(): string;
  setReason(value: string): FeatureInfo;
  hasReason(): boolean;
  clearReason(): FeatureInfo;

  getValue(): number;
  setValue(value: number): FeatureInfo;
  hasValue(): boolean;
  clearValue(): FeatureInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureInfo): FeatureInfo.AsObject;
  static serializeBinaryToWriter(message: FeatureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureInfo;
  static deserializeBinaryFromReader(message: FeatureInfo, reader: jspb.BinaryReader): FeatureInfo;
}

export namespace FeatureInfo {
  export type AsObject = {
    name?: string,
    reason?: string,
    value?: number,
  }
}

export class FeaturePair extends jspb.Message {
  getX(): string;
  setX(value: string): FeaturePair;
  hasX(): boolean;
  clearX(): FeaturePair;

  getY(): string;
  setY(value: string): FeaturePair;
  hasY(): boolean;
  clearY(): FeaturePair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturePair.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturePair): FeaturePair.AsObject;
  static serializeBinaryToWriter(message: FeaturePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturePair;
  static deserializeBinaryFromReader(message: FeaturePair, reader: jspb.BinaryReader): FeaturePair;
}

export namespace FeaturePair {
  export type AsObject = {
    x?: string,
    y?: string,
  }
}

export class FeatureSelectionSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FeatureSelectionSpec;
  hasEnabled(): boolean;
  clearEnabled(): FeatureSelectionSpec;

  getEmbedding(): boolean;
  setEmbedding(value: boolean): FeatureSelectionSpec;
  hasEmbedding(): boolean;
  clearEmbedding(): FeatureSelectionSpec;

  getFilter(): boolean;
  setFilter(value: boolean): FeatureSelectionSpec;
  hasFilter(): boolean;
  clearFilter(): FeatureSelectionSpec;

  getWrapper(): boolean;
  setWrapper(value: boolean): FeatureSelectionSpec;
  hasWrapper(): boolean;
  clearWrapper(): FeatureSelectionSpec;

  getPipelineList(): Array<string>;
  setPipelineList(value: Array<string>): FeatureSelectionSpec;
  clearPipelineList(): FeatureSelectionSpec;
  addPipeline(value: string, index?: number): FeatureSelectionSpec;

  getVarthreshold(): number;
  setVarthreshold(value: number): FeatureSelectionSpec;
  hasVarthreshold(): boolean;
  clearVarthreshold(): FeatureSelectionSpec;

  getCorrthreshold(): number;
  setCorrthreshold(value: number): FeatureSelectionSpec;
  hasCorrthreshold(): boolean;
  clearCorrthreshold(): FeatureSelectionSpec;

  getMaxfeatures(): number;
  setMaxfeatures(value: number): FeatureSelectionSpec;
  hasMaxfeatures(): boolean;
  clearMaxfeatures(): FeatureSelectionSpec;

  getPercentile(): number;
  setPercentile(value: number): FeatureSelectionSpec;
  hasPercentile(): boolean;
  clearPercentile(): FeatureSelectionSpec;

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
    enabled?: boolean,
    embedding?: boolean,
    filter?: boolean,
    wrapper?: boolean,
    pipelineList: Array<string>,
    varthreshold?: number,
    corrthreshold?: number,
    maxfeatures?: number,
    percentile?: number,
    reservedList: Array<string>,
  }
}

export class ForecasterSpec extends jspb.Message {
  getEventsList(): Array<TimeSeriesEvent>;
  setEventsList(value: Array<TimeSeriesEvent>): ForecasterSpec;
  clearEventsList(): ForecasterSpec;
  addEvents(value?: TimeSeriesEvent, index?: number): TimeSeriesEvent;

  getPast(): WindowSpec | undefined;
  setPast(value?: WindowSpec): ForecasterSpec;
  hasPast(): boolean;
  clearPast(): ForecasterSpec;

  getFuture(): WindowSpec | undefined;
  setFuture(value?: WindowSpec): ForecasterSpec;
  hasFuture(): boolean;
  clearFuture(): ForecasterSpec;

  getForecast(): boolean;
  setForecast(value: boolean): ForecasterSpec;
  hasForecast(): boolean;
  clearForecast(): ForecasterSpec;

  getCoverage(): number;
  setCoverage(value: number): ForecasterSpec;
  hasCoverage(): boolean;
  clearCoverage(): ForecasterSpec;

  getOutputlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setOutputlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): ForecasterSpec;
  hasOutputlocation(): boolean;
  clearOutputlocation(): ForecasterSpec;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): ForecasterSpec;
  clearFeaturesList(): ForecasterSpec;
  addFeatures(value: string, index?: number): ForecasterSpec;

  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): ForecasterSpec;
  clearGroupsList(): ForecasterSpec;
  addGroups(value: string, index?: number): ForecasterSpec;

  getPredefinedtemplate(): string;
  setPredefinedtemplate(value: string): ForecasterSpec;
  hasPredefinedtemplate(): boolean;
  clearPredefinedtemplate(): ForecasterSpec;

  getAnomaliesList(): Array<Anomaly>;
  setAnomaliesList(value: Array<Anomaly>): ForecasterSpec;
  clearAnomaliesList(): ForecasterSpec;
  addAnomalies(value?: Anomaly, index?: number): Anomaly;

  getTrainenddata(): string;
  setTrainenddata(value: string): ForecasterSpec;
  hasTrainenddata(): boolean;
  clearTrainenddata(): ForecasterSpec;

  getValuecolumn(): string;
  setValuecolumn(value: string): ForecasterSpec;
  hasValuecolumn(): boolean;
  clearValuecolumn(): ForecasterSpec;

  getHpobudget(): number;
  setHpobudget(value: number): ForecasterSpec;
  hasHpobudget(): boolean;
  clearHpobudget(): ForecasterSpec;

  getEvaluationmetrics(): EvalMetrics | undefined;
  setEvaluationmetrics(value?: EvalMetrics): ForecasterSpec;
  hasEvaluationmetrics(): boolean;
  clearEvaluationmetrics(): ForecasterSpec;

  getEvaluationperiod(): EvalPeriod | undefined;
  setEvaluationperiod(value?: EvalPeriod): ForecasterSpec;
  hasEvaluationperiod(): boolean;
  clearEvaluationperiod(): ForecasterSpec;

  getSeasonality(): SeasonalitySpec | undefined;
  setSeasonality(value?: SeasonalitySpec): ForecasterSpec;
  hasSeasonality(): boolean;
  clearSeasonality(): ForecasterSpec;

  getRegressorsList(): Array<string>;
  setRegressorsList(value: Array<string>): ForecasterSpec;
  clearRegressorsList(): ForecasterSpec;
  addRegressors(value: string, index?: number): ForecasterSpec;

  getLaggedregressorsList(): Array<string>;
  setLaggedregressorsList(value: Array<string>): ForecasterSpec;
  clearLaggedregressorsList(): ForecasterSpec;
  addLaggedregressors(value: string, index?: number): ForecasterSpec;

  getGrowth(): string;
  setGrowth(value: string): ForecasterSpec;
  hasGrowth(): boolean;
  clearGrowth(): ForecasterSpec;

  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): ForecasterSpec;
  clearKeyList(): ForecasterSpec;
  addKey(value: string, index?: number): ForecasterSpec;

  getEstimatorsList(): Array<string>;
  setEstimatorsList(value: Array<string>): ForecasterSpec;
  clearEstimatorsList(): ForecasterSpec;
  addEstimators(value: string, index?: number): ForecasterSpec;

  getHts(): string;
  setHts(value: string): ForecasterSpec;
  hasHts(): boolean;
  clearHts(): ForecasterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecasterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ForecasterSpec): ForecasterSpec.AsObject;
  static serializeBinaryToWriter(message: ForecasterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecasterSpec;
  static deserializeBinaryFromReader(message: ForecasterSpec, reader: jspb.BinaryReader): ForecasterSpec;
}

export namespace ForecasterSpec {
  export type AsObject = {
    eventsList: Array<TimeSeriesEvent.AsObject>,
    past?: WindowSpec.AsObject,
    future?: WindowSpec.AsObject,
    forecast?: boolean,
    coverage?: number,
    outputlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    featuresList: Array<string>,
    groupsList: Array<string>,
    predefinedtemplate?: string,
    anomaliesList: Array<Anomaly.AsObject>,
    trainenddata?: string,
    valuecolumn?: string,
    hpobudget?: number,
    evaluationmetrics?: EvalMetrics.AsObject,
    evaluationperiod?: EvalPeriod.AsObject,
    seasonality?: SeasonalitySpec.AsObject,
    regressorsList: Array<string>,
    laggedregressorsList: Array<string>,
    growth?: string,
    keyList: Array<string>,
    estimatorsList: Array<string>,
    hts?: string,
  }
}

export class GarbageCollectionSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): GarbageCollectionSpec;
  hasEnabled(): boolean;
  clearEnabled(): GarbageCollectionSpec;

  getKeepbestmodelperalgorithm(): boolean;
  setKeepbestmodelperalgorithm(value: boolean): GarbageCollectionSpec;
  hasKeepbestmodelperalgorithm(): boolean;
  clearKeepbestmodelperalgorithm(): GarbageCollectionSpec;

  getKeepprunedmodels(): boolean;
  setKeepprunedmodels(value: boolean): GarbageCollectionSpec;
  hasKeepprunedmodels(): boolean;
  clearKeepprunedmodels(): GarbageCollectionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GarbageCollectionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GarbageCollectionSpec): GarbageCollectionSpec.AsObject;
  static serializeBinaryToWriter(message: GarbageCollectionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GarbageCollectionSpec;
  static deserializeBinaryFromReader(message: GarbageCollectionSpec, reader: jspb.BinaryReader): GarbageCollectionSpec;
}

export namespace GarbageCollectionSpec {
  export type AsObject = {
    enabled?: boolean,
    keepbestmodelperalgorithm?: boolean,
    keepprunedmodels?: boolean,
  }
}

export class GarbageCollectionStatus extends jspb.Message {
  getCollectedmodelscount(): number;
  setCollectedmodelscount(value: number): GarbageCollectionStatus;
  hasCollectedmodelscount(): boolean;
  clearCollectedmodelscount(): GarbageCollectionStatus;

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
    collectedmodelscount?: number,
    modelsList: Array<ModelResult.AsObject>,
  }
}

export class GeneratedColumnSpec extends jspb.Message {
  getName(): string;
  setName(value: string): GeneratedColumnSpec;
  hasName(): boolean;
  clearName(): GeneratedColumnSpec;

  getDatatype(): string;
  setDatatype(value: string): GeneratedColumnSpec;
  hasDatatype(): boolean;
  clearDatatype(): GeneratedColumnSpec;

  getFirst(): string;
  setFirst(value: string): GeneratedColumnSpec;
  hasFirst(): boolean;
  clearFirst(): GeneratedColumnSpec;

  getSecond(): string;
  setSecond(value: string): GeneratedColumnSpec;
  hasSecond(): boolean;
  clearSecond(): GeneratedColumnSpec;

  getOriginal(): string;
  setOriginal(value: string): GeneratedColumnSpec;
  hasOriginal(): boolean;
  clearOriginal(): GeneratedColumnSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratedColumnSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratedColumnSpec): GeneratedColumnSpec.AsObject;
  static serializeBinaryToWriter(message: GeneratedColumnSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratedColumnSpec;
  static deserializeBinaryFromReader(message: GeneratedColumnSpec, reader: jspb.BinaryReader): GeneratedColumnSpec;
}

export namespace GeneratedColumnSpec {
  export type AsObject = {
    name?: string,
    datatype?: string,
    first?: string,
    second?: string,
    original?: string,
  }
}

export class HyperParameterValue extends jspb.Message {
  getName(): string;
  setName(value: string): HyperParameterValue;
  hasName(): boolean;
  clearName(): HyperParameterValue;

  getValue(): string;
  setValue(value: string): HyperParameterValue;
  hasValue(): boolean;
  clearValue(): HyperParameterValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperParameterValue.AsObject;
  static toObject(includeInstance: boolean, msg: HyperParameterValue): HyperParameterValue.AsObject;
  static serializeBinaryToWriter(message: HyperParameterValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperParameterValue;
  static deserializeBinaryFromReader(message: HyperParameterValue, reader: jspb.BinaryReader): HyperParameterValue;
}

export namespace HyperParameterValue {
  export type AsObject = {
    name?: string,
    value?: string,
  }
}

export class HyperbandOptions extends jspb.Message {
  getMinresources(): number;
  setMinresources(value: number): HyperbandOptions;
  hasMinresources(): boolean;
  clearMinresources(): HyperbandOptions;

  getMaxresources(): number;
  setMaxresources(value: number): HyperbandOptions;
  hasMaxresources(): boolean;
  clearMaxresources(): HyperbandOptions;

  getReductionfactor(): number;
  setReductionfactor(value: number): HyperbandOptions;
  hasReductionfactor(): boolean;
  clearReductionfactor(): HyperbandOptions;

  getBootstrapcount(): number;
  setBootstrapcount(value: number): HyperbandOptions;
  hasBootstrapcount(): boolean;
  clearBootstrapcount(): HyperbandOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperbandOptions.AsObject;
  static toObject(includeInstance: boolean, msg: HyperbandOptions): HyperbandOptions.AsObject;
  static serializeBinaryToWriter(message: HyperbandOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperbandOptions;
  static deserializeBinaryFromReader(message: HyperbandOptions, reader: jspb.BinaryReader): HyperbandOptions;
}

export namespace HyperbandOptions {
  export type AsObject = {
    minresources?: number,
    maxresources?: number,
    reductionfactor?: number,
    bootstrapcount?: number,
  }
}

export class ImagePipelineSpec extends jspb.Message {
  getFeaturizer(): string;
  setFeaturizer(value: string): ImagePipelineSpec;
  hasFeaturizer(): boolean;
  clearFeaturizer(): ImagePipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagePipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ImagePipelineSpec): ImagePipelineSpec.AsObject;
  static serializeBinaryToWriter(message: ImagePipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagePipelineSpec;
  static deserializeBinaryFromReader(message: ImagePipelineSpec, reader: jspb.BinaryReader): ImagePipelineSpec;
}

export namespace ImagePipelineSpec {
  export type AsObject = {
    featurizer?: string,
  }
}

export class ImbalanceHandlingSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ImbalanceHandlingSpec;
  hasEnabled(): boolean;
  clearEnabled(): ImbalanceHandlingSpec;

  getImbalance(): string;
  setImbalance(value: string): ImbalanceHandlingSpec;
  hasImbalance(): boolean;
  clearImbalance(): ImbalanceHandlingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImbalanceHandlingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ImbalanceHandlingSpec): ImbalanceHandlingSpec.AsObject;
  static serializeBinaryToWriter(message: ImbalanceHandlingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImbalanceHandlingSpec;
  static deserializeBinaryFromReader(message: ImbalanceHandlingSpec, reader: jspb.BinaryReader): ImbalanceHandlingSpec;
}

export namespace ImbalanceHandlingSpec {
  export type AsObject = {
    enabled?: boolean,
    imbalance?: string,
  }
}

export class InterpretabilitySpec extends jspb.Message {
  getIce(): boolean;
  setIce(value: boolean): InterpretabilitySpec;
  hasIce(): boolean;
  clearIce(): InterpretabilitySpec;

  getIcepairsList(): Array<FeaturePair>;
  setIcepairsList(value: Array<FeaturePair>): InterpretabilitySpec;
  clearIcepairsList(): InterpretabilitySpec;
  addIcepairs(value?: FeaturePair, index?: number): FeaturePair;

  getLime(): boolean;
  setLime(value: boolean): InterpretabilitySpec;
  hasLime(): boolean;
  clearLime(): InterpretabilitySpec;

  getShap(): string;
  setShap(value: string): InterpretabilitySpec;
  hasShap(): boolean;
  clearShap(): InterpretabilitySpec;

  getShappairsList(): Array<FeaturePair>;
  setShappairsList(value: Array<FeaturePair>): InterpretabilitySpec;
  clearShappairsList(): InterpretabilitySpec;
  addShappairs(value?: FeaturePair, index?: number): FeaturePair;

  getCounterfactual(): boolean;
  setCounterfactual(value: boolean): InterpretabilitySpec;
  hasCounterfactual(): boolean;
  clearCounterfactual(): InterpretabilitySpec;

  getAnchor(): boolean;
  setAnchor(value: boolean): InterpretabilitySpec;
  hasAnchor(): boolean;
  clearAnchor(): InterpretabilitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterpretabilitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: InterpretabilitySpec): InterpretabilitySpec.AsObject;
  static serializeBinaryToWriter(message: InterpretabilitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterpretabilitySpec;
  static deserializeBinaryFromReader(message: InterpretabilitySpec, reader: jspb.BinaryReader): InterpretabilitySpec;
}

export namespace InterpretabilitySpec {
  export type AsObject = {
    ice?: boolean,
    icepairsList: Array<FeaturePair.AsObject>,
    lime?: boolean,
    shap?: string,
    shappairsList: Array<FeaturePair.AsObject>,
    counterfactual?: boolean,
    anchor?: boolean,
  }
}

export class InterpretabilityStatus extends jspb.Message {
  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): InterpretabilityStatus;
  hasStartedat(): boolean;
  clearStartedat(): InterpretabilityStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): InterpretabilityStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): InterpretabilityStatus;

  getExplainerlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setExplainerlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): InterpretabilityStatus;
  hasExplainerlocation(): boolean;
  clearExplainerlocation(): InterpretabilityStatus;

  getTrainshapvalueslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTrainshapvalueslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): InterpretabilityStatus;
  hasTrainshapvalueslocation(): boolean;
  clearTrainshapvalueslocation(): InterpretabilityStatus;

  getTestshapvalueslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTestshapvalueslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): InterpretabilityStatus;
  hasTestshapvalueslocation(): boolean;
  clearTestshapvalueslocation(): InterpretabilityStatus;

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
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    explainerlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    trainshapvalueslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    testshapvalueslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    importanceList: Array<FeatureImportance.AsObject>,
  }
}

export class MedianPrunerOptions extends jspb.Message {
  getStartuptrials(): number;
  setStartuptrials(value: number): MedianPrunerOptions;
  hasStartuptrials(): boolean;
  clearStartuptrials(): MedianPrunerOptions;

  getWarmupsteps(): number;
  setWarmupsteps(value: number): MedianPrunerOptions;
  hasWarmupsteps(): boolean;
  clearWarmupsteps(): MedianPrunerOptions;

  getIntervalsteps(): number;
  setIntervalsteps(value: number): MedianPrunerOptions;
  hasIntervalsteps(): boolean;
  clearIntervalsteps(): MedianPrunerOptions;

  getMintrials(): number;
  setMintrials(value: number): MedianPrunerOptions;
  hasMintrials(): boolean;
  clearMintrials(): MedianPrunerOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedianPrunerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MedianPrunerOptions): MedianPrunerOptions.AsObject;
  static serializeBinaryToWriter(message: MedianPrunerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedianPrunerOptions;
  static deserializeBinaryFromReader(message: MedianPrunerOptions, reader: jspb.BinaryReader): MedianPrunerOptions;
}

export namespace MedianPrunerOptions {
  export type AsObject = {
    startuptrials?: number,
    warmupsteps?: number,
    intervalsteps?: number,
    mintrials?: number,
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

export class ModelClass extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelClass;
  hasMetadata(): boolean;
  clearMetadata(): ModelClass;

  getSpec(): ModelClassSpec | undefined;
  setSpec(value?: ModelClassSpec): ModelClass;
  hasSpec(): boolean;
  clearSpec(): ModelClass;

  getStatus(): ModelClassStatus | undefined;
  setStatus(value?: ModelClassStatus): ModelClass;
  hasStatus(): boolean;
  clearStatus(): ModelClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClass.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClass): ModelClass.AsObject;
  static serializeBinaryToWriter(message: ModelClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClass;
  static deserializeBinaryFromReader(message: ModelClass, reader: jspb.BinaryReader): ModelClass;
}

export namespace ModelClass {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelClassSpec.AsObject,
    status?: ModelClassStatus.AsObject,
  }
}

export class ModelClassDataSpec extends jspb.Message {
  getObservations(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setObservations(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): ModelClassDataSpec;
  hasObservations(): boolean;
  clearObservations(): ModelClassDataSpec;

  getPredictions(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setPredictions(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): ModelClassDataSpec;
  hasPredictions(): boolean;
  clearPredictions(): ModelClassDataSpec;

  getSchema(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Schema | undefined;
  setSchema(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Schema): ModelClassDataSpec;
  hasSchema(): boolean;
  clearSchema(): ModelClassDataSpec;

  getFlatfile(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec | undefined;
  setFlatfile(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec): ModelClassDataSpec;
  hasFlatfile(): boolean;
  clearFlatfile(): ModelClassDataSpec;

  getPrimarykeyList(): Array<string>;
  setPrimarykeyList(value: Array<string>): ModelClassDataSpec;
  clearPrimarykeyList(): ModelClassDataSpec;
  addPrimarykey(value: string, index?: number): ModelClassDataSpec;

  getPredictiontimecolumn(): string;
  setPredictiontimecolumn(value: string): ModelClassDataSpec;
  hasPredictiontimecolumn(): boolean;
  clearPredictiontimecolumn(): ModelClassDataSpec;

  getTarget(): string;
  setTarget(value: string): ModelClassDataSpec;
  hasTarget(): boolean;
  clearTarget(): ModelClassDataSpec;

  getTests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setTests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelClassDataSpec;
  hasTests(): boolean;
  clearTests(): ModelClassDataSpec;

  getOnlinefeaturestorename(): string;
  setOnlinefeaturestorename(value: string): ModelClassDataSpec;
  hasOnlinefeaturestorename(): boolean;
  clearOnlinefeaturestorename(): ModelClassDataSpec;

  getOfflinefeaturestorename(): string;
  setOfflinefeaturestorename(value: string): ModelClassDataSpec;
  hasOfflinefeaturestorename(): boolean;
  clearOfflinefeaturestorename(): ModelClassDataSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassDataSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassDataSpec): ModelClassDataSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassDataSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassDataSpec;
  static deserializeBinaryFromReader(message: ModelClassDataSpec, reader: jspb.BinaryReader): ModelClassDataSpec;
}

export namespace ModelClassDataSpec {
  export type AsObject = {
    observations?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    predictions?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    schema?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Schema.AsObject,
    flatfile?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec.AsObject,
    primarykeyList: Array<string>,
    predictiontimecolumn?: string,
    target?: string,
    tests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    onlinefeaturestorename?: string,
    offlinefeaturestorename?: string,
  }
}

export class ModelClassList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelClassList;
  hasMetadata(): boolean;
  clearMetadata(): ModelClassList;

  getItemsList(): Array<ModelClass>;
  setItemsList(value: Array<ModelClass>): ModelClassList;
  clearItemsList(): ModelClassList;
  addItems(value?: ModelClass, index?: number): ModelClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassList): ModelClassList.AsObject;
  static serializeBinaryToWriter(message: ModelClassList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassList;
  static deserializeBinaryFromReader(message: ModelClassList, reader: jspb.BinaryReader): ModelClassList;
}

export namespace ModelClassList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelClass.AsObject>,
  }
}

export class ModelClassRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): ModelClassRun;
  hasMetadata(): boolean;
  clearMetadata(): ModelClassRun;

  getSpec(): ModelClassRunSpec | undefined;
  setSpec(value?: ModelClassRunSpec): ModelClassRun;
  hasSpec(): boolean;
  clearSpec(): ModelClassRun;

  getStatus(): ModelClassRunStatus | undefined;
  setStatus(value?: ModelClassRunStatus): ModelClassRun;
  hasStatus(): boolean;
  clearStatus(): ModelClassRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRun.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRun): ModelClassRun.AsObject;
  static serializeBinaryToWriter(message: ModelClassRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRun;
  static deserializeBinaryFromReader(message: ModelClassRun, reader: jspb.BinaryReader): ModelClassRun;
}

export namespace ModelClassRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: ModelClassRunSpec.AsObject,
    status?: ModelClassRunStatus.AsObject,
  }
}

export class ModelClassRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): ModelClassRunList;
  hasMetadata(): boolean;
  clearMetadata(): ModelClassRunList;

  getItemsList(): Array<ModelClassRun>;
  setItemsList(value: Array<ModelClassRun>): ModelClassRunList;
  clearItemsList(): ModelClassRunList;
  addItems(value?: ModelClassRun, index?: number): ModelClassRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRunList.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRunList): ModelClassRunList.AsObject;
  static serializeBinaryToWriter(message: ModelClassRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRunList;
  static deserializeBinaryFromReader(message: ModelClassRunList, reader: jspb.BinaryReader): ModelClassRunList;
}

export namespace ModelClassRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<ModelClassRun.AsObject>,
  }
}

export class ModelClassRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): ModelClassRunSpec;
  hasVersionname(): boolean;
  clearVersionname(): ModelClassRunSpec;

  getDescription(): string;
  setDescription(value: string): ModelClassRunSpec;
  hasDescription(): boolean;
  clearDescription(): ModelClassRunSpec;

  getDatasetname(): string;
  setDatasetname(value: string): ModelClassRunSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): ModelClassRunSpec;

  getModelclassname(): string;
  setModelclassname(value: string): ModelClassRunSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): ModelClassRunSpec;

  getOwner(): string;
  setOwner(value: string): ModelClassRunSpec;
  hasOwner(): boolean;
  clearOwner(): ModelClassRunSpec;

  getPriority(): string;
  setPriority(value: string): ModelClassRunSpec;
  hasPriority(): boolean;
  clearPriority(): ModelClassRunSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelClassRunSpec;
  hasPaused(): boolean;
  clearPaused(): ModelClassRunSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelClassRunSpec;
  hasAborted(): boolean;
  clearAborted(): ModelClassRunSpec;

  getTtl(): number;
  setTtl(value: number): ModelClassRunSpec;
  hasTtl(): boolean;
  clearTtl(): ModelClassRunSpec;

  getTriggeredby(): string;
  setTriggeredby(value: string): ModelClassRunSpec;
  hasTriggeredby(): boolean;
  clearTriggeredby(): ModelClassRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRunSpec): ModelClassRunSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRunSpec;
  static deserializeBinaryFromReader(message: ModelClassRunSpec, reader: jspb.BinaryReader): ModelClassRunSpec;
}

export namespace ModelClassRunSpec {
  export type AsObject = {
    versionname?: string,
    description?: string,
    datasetname?: string,
    modelclassname?: string,
    owner?: string,
    priority?: string,
    paused?: boolean,
    aborted?: boolean,
    ttl?: number,
    triggeredby?: string,
  }
}

export class ModelClassRunStatus extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): ModelClassRunStatus;
  hasDatasetname(): boolean;
  clearDatasetname(): ModelClassRunStatus;

  getStudyname(): string;
  setStudyname(value: string): ModelClassRunStatus;
  hasStudyname(): boolean;
  clearStudyname(): ModelClassRunStatus;

  getModelname(): string;
  setModelname(value: string): ModelClassRunStatus;
  hasModelname(): boolean;
  clearModelname(): ModelClassRunStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassRunStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ModelClassRunStatus;

  getPhase(): string;
  setPhase(value: string): ModelClassRunStatus;
  hasPhase(): boolean;
  clearPhase(): ModelClassRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelClassRunStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ModelClassRunStatus;

  getEvalmetrics(): string;
  setEvalmetrics(value: string): ModelClassRunStatus;
  hasEvalmetrics(): boolean;
  clearEvalmetrics(): ModelClassRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelClassRunStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ModelClassRunStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassRunStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ModelClassRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ModelClassRunStatus;
  hasLogs(): boolean;
  clearLogs(): ModelClassRunStatus;

  getPromotedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setPromotedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassRunStatus;
  hasPromotedat(): boolean;
  clearPromotedat(): ModelClassRunStatus;

  getAuto(): boolean;
  setAuto(value: boolean): ModelClassRunStatus;
  hasAuto(): boolean;
  clearAuto(): ModelClassRunStatus;

  getApprovedby(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setApprovedby(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelClassRunStatus;
  hasApprovedby(): boolean;
  clearApprovedby(): ModelClassRunStatus;

  getModelscount(): number;
  setModelscount(value: number): ModelClassRunStatus;
  hasModelscount(): boolean;
  clearModelscount(): ModelClassRunStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ModelClassRunStatus;
  clearConditionsList(): ModelClassRunStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRunStatus): ModelClassRunStatus.AsObject;
  static serializeBinaryToWriter(message: ModelClassRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRunStatus;
  static deserializeBinaryFromReader(message: ModelClassRunStatus, reader: jspb.BinaryReader): ModelClassRunStatus;
}

export namespace ModelClassRunStatus {
  export type AsObject = {
    datasetname?: string,
    studyname?: string,
    modelname?: string,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase?: string,
    observedgeneration?: number,
    evalmetrics?: string,
    failuremessage?: string,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    promotedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    auto?: boolean,
    approvedby?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    modelscount?: number,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ModelClassServingSpec extends jspb.Message {
  getTemplate(): ServingSpec | undefined;
  setTemplate(value?: ServingSpec): ModelClassServingSpec;
  hasTemplate(): boolean;
  clearTemplate(): ModelClassServingSpec;

  getMonitoringschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setMonitoringschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassServingSpec;
  hasMonitoringschedule(): boolean;
  clearMonitoringschedule(): ModelClassServingSpec;

  getPredictionschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setPredictionschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassServingSpec;
  hasPredictionschedule(): boolean;
  clearPredictionschedule(): ModelClassServingSpec;

  getPresqlList(): Array<string>;
  setPresqlList(value: Array<string>): ModelClassServingSpec;
  clearPresqlList(): ModelClassServingSpec;
  addPresql(value: string, index?: number): ModelClassServingSpec;

  getPostsqlList(): Array<string>;
  setPostsqlList(value: Array<string>): ModelClassServingSpec;
  clearPostsqlList(): ModelClassServingSpec;
  addPostsql(value: string, index?: number): ModelClassServingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassServingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassServingSpec): ModelClassServingSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassServingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassServingSpec;
  static deserializeBinaryFromReader(message: ModelClassServingSpec, reader: jspb.BinaryReader): ModelClassServingSpec;
}

export namespace ModelClassServingSpec {
  export type AsObject = {
    template?: ServingSpec.AsObject,
    monitoringschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    predictionschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    presqlList: Array<string>,
    postsqlList: Array<string>,
  }
}

export class ModelClassSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): ModelClassSpec;
  hasOwner(): boolean;
  clearOwner(): ModelClassSpec;

  getVersionname(): string;
  setVersionname(value: string): ModelClassSpec;
  hasVersionname(): boolean;
  clearVersionname(): ModelClassSpec;

  getDescription(): string;
  setDescription(value: string): ModelClassSpec;
  hasDescription(): boolean;
  clearDescription(): ModelClassSpec;

  getTask(): string;
  setTask(value: string): ModelClassSpec;
  hasTask(): boolean;
  clearTask(): ModelClassSpec;

  getSubtask(): string;
  setSubtask(value: string): ModelClassSpec;
  hasSubtask(): boolean;
  clearSubtask(): ModelClassSpec;

  getObjective(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setObjective(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): ModelClassSpec;
  hasObjective(): boolean;
  clearObjective(): ModelClassSpec;

  getEntitiesList(): Array<EntityRef>;
  setEntitiesList(value: Array<EntityRef>): ModelClassSpec;
  clearEntitiesList(): ModelClassSpec;
  addEntities(value?: EntityRef, index?: number): EntityRef;

  getData(): ModelClassDataSpec | undefined;
  setData(value?: ModelClassDataSpec): ModelClassSpec;
  hasData(): boolean;
  clearData(): ModelClassSpec;

  getTraining(): ModelClassTrainingSpec | undefined;
  setTraining(value?: ModelClassTrainingSpec): ModelClassSpec;
  hasTraining(): boolean;
  clearTraining(): ModelClassSpec;

  getServing(): ModelClassServingSpec | undefined;
  setServing(value?: ModelClassServingSpec): ModelClassSpec;
  hasServing(): boolean;
  clearServing(): ModelClassSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): ModelClassSpec;
  hasNotification(): boolean;
  clearNotification(): ModelClassSpec;

  getReportschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setReportschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassSpec;
  hasReportschedule(): boolean;
  clearReportschedule(): ModelClassSpec;

  getFast(): boolean;
  setFast(value: boolean): ModelClassSpec;
  hasFast(): boolean;
  clearFast(): ModelClassSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelClassSpec;
  hasPaused(): boolean;
  clearPaused(): ModelClassSpec;

  getRegistered(): boolean;
  setRegistered(value: boolean): ModelClassSpec;
  hasRegistered(): boolean;
  clearRegistered(): ModelClassSpec;

  getArtifactbucketname(): string;
  setArtifactbucketname(value: string): ModelClassSpec;
  hasArtifactbucketname(): boolean;
  clearArtifactbucketname(): ModelClassSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassSpec): ModelClassSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassSpec;
  static deserializeBinaryFromReader(message: ModelClassSpec, reader: jspb.BinaryReader): ModelClassSpec;
}

export namespace ModelClassSpec {
  export type AsObject = {
    owner?: string,
    versionname?: string,
    description?: string,
    task?: string,
    subtask?: string,
    objective?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    entitiesList: Array<EntityRef.AsObject>,
    data?: ModelClassDataSpec.AsObject,
    training?: ModelClassTrainingSpec.AsObject,
    serving?: ModelClassServingSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    reportschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    fast?: boolean,
    paused?: boolean,
    registered?: boolean,
    artifactbucketname?: string,
  }
}

export class ModelClassStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelClassStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ModelClassStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ModelClassStatus;

  getBestfe(): FeatureEngineeringSpec | undefined;
  setBestfe(value?: FeatureEngineeringSpec): ModelClassStatus;
  hasBestfe(): boolean;
  clearBestfe(): ModelClassStatus;

  getTrainingschedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setTrainingschedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasTrainingschedulestatus(): boolean;
  clearTrainingschedulestatus(): ModelClassStatus;

  getPredictionschedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setPredictionschedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasPredictionschedulestatus(): boolean;
  clearPredictionschedulestatus(): ModelClassStatus;

  getMonitoringschedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setMonitoringschedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasMonitoringschedulestatus(): boolean;
  clearMonitoringschedulestatus(): ModelClassStatus;

  getReportschedulestatus(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setReportschedulestatus(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): ModelClassStatus;
  hasReportschedulestatus(): boolean;
  clearReportschedulestatus(): ModelClassStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): ModelClassStatus;
  hasBestmodelscore(): boolean;
  clearBestmodelscore(): ModelClassStatus;

  getRetiredList(): Array<string>;
  setRetiredList(value: Array<string>): ModelClassStatus;
  clearRetiredList(): ModelClassStatus;
  addRetired(value: string, index?: number): ModelClassStatus;

  getPredictorname(): string;
  setPredictorname(value: string): ModelClassStatus;
  hasPredictorname(): boolean;
  clearPredictorname(): ModelClassStatus;

  getDataappname(): string;
  setDataappname(value: string): ModelClassStatus;
  hasDataappname(): boolean;
  clearDataappname(): ModelClassStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): ModelClassStatus;
  hasTriggeredby(): boolean;
  clearTriggeredby(): ModelClassStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelClassStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ModelClassStatus;

  getLastrunat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastrunat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassStatus;
  hasLastrunat(): boolean;
  clearLastrunat(): ModelClassStatus;

  getLastrunname(): string;
  setLastrunname(value: string): ModelClassStatus;
  hasLastrunname(): boolean;
  clearLastrunname(): ModelClassStatus;

  getLastpredictionat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastpredictionat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelClassStatus;
  hasLastpredictionat(): boolean;
  clearLastpredictionat(): ModelClassStatus;

  getLastpredictionname(): string;
  setLastpredictionname(value: string): ModelClassStatus;
  hasLastpredictionname(): boolean;
  clearLastpredictionname(): ModelClassStatus;

  getPredictionscount(): number;
  setPredictionscount(value: number): ModelClassStatus;
  hasPredictionscount(): boolean;
  clearPredictionscount(): ModelClassStatus;

  getRunscount(): number;
  setRunscount(value: number): ModelClassStatus;
  hasRunscount(): boolean;
  clearRunscount(): ModelClassStatus;

  getModelscount(): number;
  setModelscount(value: number): ModelClassStatus;
  hasModelscount(): boolean;
  clearModelscount(): ModelClassStatus;

  getLive(): boolean;
  setLive(value: boolean): ModelClassStatus;
  hasLive(): boolean;
  clearLive(): ModelClassStatus;

  getPredictorscount(): number;
  setPredictorscount(value: number): ModelClassStatus;
  hasPredictorscount(): boolean;
  clearPredictorscount(): ModelClassStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ModelClassStatus;
  clearConditionsList(): ModelClassStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassStatus): ModelClassStatus.AsObject;
  static serializeBinaryToWriter(message: ModelClassStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassStatus;
  static deserializeBinaryFromReader(message: ModelClassStatus, reader: jspb.BinaryReader): ModelClassStatus;
}

export namespace ModelClassStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    bestfe?: FeatureEngineeringSpec.AsObject,
    trainingschedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    predictionschedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    monitoringschedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    reportschedulestatus?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    bestmodelscore?: number,
    retiredList: Array<string>,
    predictorname?: string,
    dataappname?: string,
    triggeredby?: string,
    failuremessage?: string,
    lastrunat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastrunname?: string,
    lastpredictionat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastpredictionname?: string,
    predictionscount?: number,
    runscount?: number,
    modelscount?: number,
    live?: boolean,
    predictorscount?: number,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ModelClassTrainingSpec extends jspb.Message {
  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelClassTrainingSpec;
  hasLabref(): boolean;
  clearLabref(): ModelClassTrainingSpec;

  getStudytemplatename(): string;
  setStudytemplatename(value: string): ModelClassTrainingSpec;
  hasStudytemplatename(): boolean;
  clearStudytemplatename(): ModelClassTrainingSpec;

  getModelunittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setModelunittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelClassTrainingSpec;
  hasModelunittests(): boolean;
  clearModelunittests(): ModelClassTrainingSpec;

  getTrainingschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setTrainingschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): ModelClassTrainingSpec;
  hasTrainingschedule(): boolean;
  clearTrainingschedule(): ModelClassTrainingSpec;

  getSearchspace(): AlgorithmSearchSpaceSpec | undefined;
  setSearchspace(value?: AlgorithmSearchSpaceSpec): ModelClassTrainingSpec;
  hasSearchspace(): boolean;
  clearSearchspace(): ModelClassTrainingSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ModelClassTrainingSpec;
  hasResources(): boolean;
  clearResources(): ModelClassTrainingSpec;

  getTriggeredby(): string;
  setTriggeredby(value: string): ModelClassTrainingSpec;
  hasTriggeredby(): boolean;
  clearTriggeredby(): ModelClassTrainingSpec;

  getPaused(): boolean;
  setPaused(value: boolean): ModelClassTrainingSpec;
  hasPaused(): boolean;
  clearPaused(): ModelClassTrainingSpec;

  getMaxtime(): number;
  setMaxtime(value: number): ModelClassTrainingSpec;
  hasMaxtime(): boolean;
  clearMaxtime(): ModelClassTrainingSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): ModelClassTrainingSpec;
  hasMaxmodels(): boolean;
  clearMaxmodels(): ModelClassTrainingSpec;

  getTrainers(): number;
  setTrainers(value: number): ModelClassTrainingSpec;
  hasTrainers(): boolean;
  clearTrainers(): ModelClassTrainingSpec;

  getAborted(): boolean;
  setAborted(value: boolean): ModelClassTrainingSpec;
  hasAborted(): boolean;
  clearAborted(): ModelClassTrainingSpec;

  getExplained(): boolean;
  setExplained(value: boolean): ModelClassTrainingSpec;
  hasExplained(): boolean;
  clearExplained(): ModelClassTrainingSpec;

  getPresqlList(): Array<string>;
  setPresqlList(value: Array<string>): ModelClassTrainingSpec;
  clearPresqlList(): ModelClassTrainingSpec;
  addPresql(value: string, index?: number): ModelClassTrainingSpec;

  getPostsqlList(): Array<string>;
  setPostsqlList(value: Array<string>): ModelClassTrainingSpec;
  clearPostsqlList(): ModelClassTrainingSpec;
  addPostsql(value: string, index?: number): ModelClassTrainingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassTrainingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassTrainingSpec): ModelClassTrainingSpec.AsObject;
  static serializeBinaryToWriter(message: ModelClassTrainingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassTrainingSpec;
  static deserializeBinaryFromReader(message: ModelClassTrainingSpec, reader: jspb.BinaryReader): ModelClassTrainingSpec;
}

export namespace ModelClassTrainingSpec {
  export type AsObject = {
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    studytemplatename?: string,
    modelunittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    trainingschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    searchspace?: AlgorithmSearchSpaceSpec.AsObject,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    triggeredby?: string,
    paused?: boolean,
    maxtime?: number,
    maxmodels?: number,
    trainers?: number,
    aborted?: boolean,
    explained?: boolean,
    presqlList: Array<string>,
    postsqlList: Array<string>,
  }
}

export class ModelGroupByStatus extends jspb.Message {
  getModelsuri(): string;
  setModelsuri(value: string): ModelGroupByStatus;
  hasModelsuri(): boolean;
  clearModelsuri(): ModelGroupByStatus;

  getProfilesuri(): string;
  setProfilesuri(value: string): ModelGroupByStatus;
  hasProfilesuri(): boolean;
  clearProfilesuri(): ModelGroupByStatus;

  getForecastsuri(): string;
  setForecastsuri(value: string): ModelGroupByStatus;
  hasForecastsuri(): boolean;
  clearForecastsuri(): ModelGroupByStatus;

  getWorkerresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>;
  setWorkerresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>): ModelGroupByStatus;
  clearWorkerresultsList(): ModelGroupByStatus;
  addWorkerresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelGroupByStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelGroupByStatus): ModelGroupByStatus.AsObject;
  static serializeBinaryToWriter(message: ModelGroupByStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelGroupByStatus;
  static deserializeBinaryFromReader(message: ModelGroupByStatus, reader: jspb.BinaryReader): ModelGroupByStatus;
}

export namespace ModelGroupByStatus {
  export type AsObject = {
    modelsuri?: string,
    profilesuri?: string,
    forecastsuri?: string,
    workerresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.AsObject>,
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

export class ModelResult extends jspb.Message {
  getName(): string;
  setName(value: string): ModelResult;
  hasName(): boolean;
  clearName(): ModelResult;

  getAlgorithm(): string;
  setAlgorithm(value: string): ModelResult;
  hasAlgorithm(): boolean;
  clearAlgorithm(): ModelResult;

  getScore(): number;
  setScore(value: number): ModelResult;
  hasScore(): boolean;
  clearScore(): ModelResult;

  getError(): boolean;
  setError(value: boolean): ModelResult;
  hasError(): boolean;
  clearError(): ModelResult;

  getTrialid(): number;
  setTrialid(value: number): ModelResult;
  hasTrialid(): boolean;
  clearTrialid(): ModelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelResult.AsObject;
  static toObject(includeInstance: boolean, msg: ModelResult): ModelResult.AsObject;
  static serializeBinaryToWriter(message: ModelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelResult;
  static deserializeBinaryFromReader(message: ModelResult, reader: jspb.BinaryReader): ModelResult;
}

export namespace ModelResult {
  export type AsObject = {
    name?: string,
    algorithm?: string,
    score?: number,
    error?: boolean,
    trialid?: number,
  }
}

export class ModelSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): ModelSpec;
  hasOwner(): boolean;
  clearOwner(): ModelSpec;

  getVersion(): string;
  setVersion(value: string): ModelSpec;
  hasVersion(): boolean;
  clearVersion(): ModelSpec;

  getStudyname(): string;
  setStudyname(value: string): ModelSpec;
  hasStudyname(): boolean;
  clearStudyname(): ModelSpec;

  getTask(): string;
  setTask(value: string): ModelSpec;
  hasTask(): boolean;
  clearTask(): ModelSpec;

  getSubtask(): string;
  setSubtask(value: string): ModelSpec;
  hasSubtask(): boolean;
  clearSubtask(): ModelSpec;

  getObjective(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setObjective(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): ModelSpec;
  hasObjective(): boolean;
  clearObjective(): ModelSpec;

  getFeatureengineering(): FeatureEngineeringSpec | undefined;
  setFeatureengineering(value?: FeatureEngineeringSpec): ModelSpec;
  hasFeatureengineering(): boolean;
  clearFeatureengineering(): ModelSpec;

  getEstimator(): ClassicalEstimatorSpec | undefined;
  setEstimator(value?: ClassicalEstimatorSpec): ModelSpec;
  hasEstimator(): boolean;
  clearEstimator(): ModelSpec;

  getEnsemble(): EnsembleSpec | undefined;
  setEnsemble(value?: EnsembleSpec): ModelSpec;
  hasEnsemble(): boolean;
  clearEnsemble(): ModelSpec;

  getTraining(): TrainingSpec | undefined;
  setTraining(value?: TrainingSpec): ModelSpec;
  hasTraining(): boolean;
  clearTraining(): ModelSpec;

  getTest(): boolean;
  setTest(value: boolean): ModelSpec;
  hasTest(): boolean;
  clearTest(): ModelSpec;

  getAbort(): boolean;
  setAbort(value: boolean): ModelSpec;
  hasAbort(): boolean;
  clearAbort(): ModelSpec;

  getPackage(): boolean;
  setPackage(value: boolean): ModelSpec;
  hasPackage(): boolean;
  clearPackage(): ModelSpec;

  getReport(): boolean;
  setReport(value: boolean): ModelSpec;
  hasReport(): boolean;
  clearReport(): ModelSpec;

  getPause(): boolean;
  setPause(value: boolean): ModelSpec;
  hasPause(): boolean;
  clearPause(): ModelSpec;

  getProfile(): boolean;
  setProfile(value: boolean): ModelSpec;
  hasProfile(): boolean;
  clearProfile(): ModelSpec;

  getForecast(): boolean;
  setForecast(value: boolean): ModelSpec;
  hasForecast(): boolean;
  clearForecast(): ModelSpec;

  getExplain(): boolean;
  setExplain(value: boolean): ModelSpec;
  hasExplain(): boolean;
  clearExplain(): ModelSpec;

  getUnittest(): boolean;
  setUnittest(value: boolean): ModelSpec;
  hasUnittest(): boolean;
  clearUnittest(): ModelSpec;

  getBaseline(): boolean;
  setBaseline(value: boolean): ModelSpec;
  hasBaseline(): boolean;
  clearBaseline(): ModelSpec;

  getFast(): boolean;
  setFast(value: boolean): ModelSpec;
  hasFast(): boolean;
  clearFast(): ModelSpec;

  getArtifactbucketname(): string;
  setArtifactbucketname(value: string): ModelSpec;
  hasArtifactbucketname(): boolean;
  clearArtifactbucketname(): ModelSpec;

  getForecasting(): ForecasterSpec | undefined;
  setForecasting(value?: ForecasterSpec): ModelSpec;
  hasForecasting(): boolean;
  clearForecasting(): ModelSpec;

  getTimeout(): number;
  setTimeout(value: number): ModelSpec;
  hasTimeout(): boolean;
  clearTimeout(): ModelSpec;

  getEstimatortype(): string;
  setEstimatortype(value: string): ModelSpec;
  hasEstimatortype(): boolean;
  clearEstimatortype(): ModelSpec;

  getModelclass(): string;
  setModelclass(value: string): ModelSpec;
  hasModelclass(): boolean;
  clearModelclass(): ModelSpec;

  getTrialid(): number;
  setTrialid(value: number): ModelSpec;
  hasTrialid(): boolean;
  clearTrialid(): ModelSpec;

  getApproval(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApprovalSpec | undefined;
  setApproval(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApprovalSpec): ModelSpec;
  hasApproval(): boolean;
  clearApproval(): ModelSpec;

  getInterpretability(): InterpretabilitySpec | undefined;
  setInterpretability(value?: InterpretabilitySpec): ModelSpec;
  hasInterpretability(): boolean;
  clearInterpretability(): ModelSpec;

  getUnittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelSpec;
  hasUnittests(): boolean;
  clearUnittests(): ModelSpec;

  getPartitionlocations(): PartitionModelLocationsSpec | undefined;
  setPartitionlocations(value?: PartitionModelLocationsSpec): ModelSpec;
  hasPartitionlocations(): boolean;
  clearPartitionlocations(): ModelSpec;

  getModelclassname(): string;
  setModelclassname(value: string): ModelSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): ModelSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): ModelSpec;
  hasModelclassrunname(): boolean;
  clearModelclassrunname(): ModelSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): ModelSpec;
  hasNotification(): boolean;
  clearNotification(): ModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ModelSpec): ModelSpec.AsObject;
  static serializeBinaryToWriter(message: ModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelSpec;
  static deserializeBinaryFromReader(message: ModelSpec, reader: jspb.BinaryReader): ModelSpec;
}

export namespace ModelSpec {
  export type AsObject = {
    owner?: string,
    version?: string,
    studyname?: string,
    task?: string,
    subtask?: string,
    objective?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    featureengineering?: FeatureEngineeringSpec.AsObject,
    estimator?: ClassicalEstimatorSpec.AsObject,
    ensemble?: EnsembleSpec.AsObject,
    training?: TrainingSpec.AsObject,
    test?: boolean,
    abort?: boolean,
    pb_package?: boolean,
    report?: boolean,
    pause?: boolean,
    profile?: boolean,
    forecast?: boolean,
    explain?: boolean,
    unittest?: boolean,
    baseline?: boolean,
    fast?: boolean,
    artifactbucketname?: string,
    forecasting?: ForecasterSpec.AsObject,
    timeout?: number,
    estimatortype?: string,
    modelclass?: string,
    trialid?: number,
    approval?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApprovalSpec.AsObject,
    interpretability?: InterpretabilitySpec.AsObject,
    unittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    partitionlocations?: PartitionModelLocationsSpec.AsObject,
    modelclassname?: string,
    modelclassrunname?: string,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
  }
}

export class ModelStageStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): ModelStageStatus;
  hasPhase(): boolean;
  clearPhase(): ModelStageStatus;

  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStageStatus;
  hasStartedat(): boolean;
  clearStartedat(): ModelStageStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStageStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ModelStageStatus;

  getUnittestsresult(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setUnittestsresult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): ModelStageStatus;
  hasUnittestsresult(): boolean;
  clearUnittestsresult(): ModelStageStatus;

  getError(): string;
  setError(value: string): ModelStageStatus;
  hasError(): boolean;
  clearError(): ModelStageStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStageStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStageStatus): ModelStageStatus.AsObject;
  static serializeBinaryToWriter(message: ModelStageStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStageStatus;
  static deserializeBinaryFromReader(message: ModelStageStatus, reader: jspb.BinaryReader): ModelStageStatus;
}

export namespace ModelStageStatus {
  export type AsObject = {
    phase?: string,
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    unittestsresult?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    error?: string,
  }
}

export class ModelStatus extends jspb.Message {
  getTrainingstartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingstartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTrainingstartedat(): boolean;
  clearTrainingstartedat(): ModelStatus;

  getTrainingcompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTrainingcompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTrainingcompletedat(): boolean;
  clearTrainingcompletedat(): ModelStatus;

  getTestingstartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingstartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTestingstartedat(): boolean;
  clearTestingstartedat(): ModelStatus;

  getTestingcompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setTestingcompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasTestingcompletedat(): boolean;
  clearTestingcompletedat(): ModelStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ModelStatus;

  getValidationscore(): number;
  setValidationscore(value: number): ModelStatus;
  hasValidationscore(): boolean;
  clearValidationscore(): ModelStatus;

  getTrainingscore(): number;
  setTrainingscore(value: number): ModelStatus;
  hasTrainingscore(): boolean;
  clearTrainingscore(): ModelStatus;

  getTestscore(): number;
  setTestscore(value: number): ModelStatus;
  hasTestscore(): boolean;
  clearTestscore(): ModelStatus;

  getValidationList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setValidationList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearValidationList(): ModelStatus;
  addValidation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTrainList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTrainList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTrainList(): ModelStatus;
  addTrain(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTestList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTestList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTestList(): ModelStatus;
  addTest(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTuneList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTuneList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearTuneList(): ModelStatus;
  addTune(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getFeedbackList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setFeedbackList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ModelStatus;
  clearFeedbackList(): ModelStatus;
  addFeedback(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getPhase(): string;
  setPhase(value: string): ModelStatus;
  hasPhase(): boolean;
  clearPhase(): ModelStatus;

  getReportname(): string;
  setReportname(value: string): ModelStatus;
  hasReportname(): boolean;
  clearReportname(): ModelStatus;

  getReportlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setReportlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasReportlocation(): boolean;
  clearReportlocation(): ModelStatus;

  getTrainweightslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTrainweightslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasTrainweightslocation(): boolean;
  clearTrainweightslocation(): ModelStatus;

  getTestweightslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTestweightslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasTestweightslocation(): boolean;
  clearTestweightslocation(): ModelStatus;

  getFullweightslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setFullweightslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasFullweightslocation(): boolean;
  clearFullweightslocation(): ModelStatus;

  getTrainlabelencoderlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTrainlabelencoderlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasTrainlabelencoderlocation(): boolean;
  clearTrainlabelencoderlocation(): ModelStatus;

  getProfilelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setProfilelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasProfilelocation(): boolean;
  clearProfilelocation(): ModelStatus;

  getMisclassificationlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setMisclassificationlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasMisclassificationlocation(): boolean;
  clearMisclassificationlocation(): ModelStatus;

  getForecastlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setForecastlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasForecastlocation(): boolean;
  clearForecastlocation(): ModelStatus;

  getPackagelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setPackagelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasPackagelocation(): boolean;
  clearPackagelocation(): ModelStatus;

  getImpurityimportanceList(): Array<FeatureImportance>;
  setImpurityimportanceList(value: Array<FeatureImportance>): ModelStatus;
  clearImpurityimportanceList(): ModelStatus;
  addImpurityimportance(value?: FeatureImportance, index?: number): FeatureImportance;

  getPermutationimportanceList(): Array<FeatureImportance>;
  setPermutationimportanceList(value: Array<FeatureImportance>): ModelStatus;
  clearPermutationimportanceList(): ModelStatus;
  addPermutationimportance(value?: FeatureImportance, index?: number): FeatureImportance;

  getRuntime(): RuntimeStatus | undefined;
  setRuntime(value?: RuntimeStatus): ModelStatus;
  hasRuntime(): boolean;
  clearRuntime(): ModelStatus;

  getTraindatasetlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTraindatasetlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasTraindatasetlocation(): boolean;
  clearTraindatasetlocation(): ModelStatus;

  getTestdatasetlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTestdatasetlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasTestdatasetlocation(): boolean;
  clearTestdatasetlocation(): ModelStatus;

  getValidationdatasetlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setValidationdatasetlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ModelStatus;
  hasValidationdatasetlocation(): boolean;
  clearValidationdatasetlocation(): ModelStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ModelStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ModelStatus;

  getTrainingrows(): number;
  setTrainingrows(value: number): ModelStatus;
  hasTrainingrows(): boolean;
  clearTrainingrows(): ModelStatus;

  getTestingrows(): number;
  setTestingrows(value: number): ModelStatus;
  hasTestingrows(): boolean;
  clearTestingrows(): ModelStatus;

  getValidationrows(): number;
  setValidationrows(value: number): ModelStatus;
  hasValidationrows(): boolean;
  clearValidationrows(): ModelStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ModelStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ModelStatus;

  getProgress(): number;
  setProgress(value: number): ModelStatus;
  hasProgress(): boolean;
  clearProgress(): ModelStatus;

  getDatasetname(): string;
  setDatasetname(value: string): ModelStatus;
  hasDatasetname(): boolean;
  clearDatasetname(): ModelStatus;

  getDatasourcename(): string;
  setDatasourcename(value: string): ModelStatus;
  hasDatasourcename(): boolean;
  clearDatasourcename(): ModelStatus;

  getServing(): ServingStatus | undefined;
  setServing(value?: ServingStatus): ModelStatus;
  hasServing(): boolean;
  clearServing(): ModelStatus;

  getTarfilehash(): string;
  setTarfilehash(value: string): ModelStatus;
  hasTarfilehash(): boolean;
  clearTarfilehash(): ModelStatus;

  getTrainingdatahash(): DataHashes | undefined;
  setTrainingdatahash(value?: DataHashes): ModelStatus;
  hasTrainingdatahash(): boolean;
  clearTrainingdatahash(): ModelStatus;

  getTrainingresources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption | undefined;
  setTrainingresources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption): ModelStatus;
  hasTrainingresources(): boolean;
  clearTrainingresources(): ModelStatus;

  getTestingresources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption | undefined;
  setTestingresources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption): ModelStatus;
  hasTestingresources(): boolean;
  clearTestingresources(): ModelStatus;

  getTrainedby(): string;
  setTrainedby(value: string): ModelStatus;
  hasTrainedby(): boolean;
  clearTrainedby(): ModelStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ModelStatus;
  hasLogs(): boolean;
  clearLogs(): ModelStatus;

  getRoccurve(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve | undefined;
  setRoccurve(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve): ModelStatus;
  hasRoccurve(): boolean;
  clearRoccurve(): ModelStatus;

  getPrcurve(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve | undefined;
  setPrcurve(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve): ModelStatus;
  hasPrcurve(): boolean;
  clearPrcurve(): ModelStatus;

  getTrainconfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTrainconfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): ModelStatus;
  hasTrainconfusionmatrix(): boolean;
  clearTrainconfusionmatrix(): ModelStatus;

  getTestconfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTestconfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): ModelStatus;
  hasTestconfusionmatrix(): boolean;
  clearTestconfusionmatrix(): ModelStatus;

  getCorrelationswithtargetList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>;
  setCorrelationswithtargetList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>): ModelStatus;
  clearCorrelationswithtargetList(): ModelStatus;
  addCorrelationswithtarget(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation;

  getTopcorrelationsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>;
  setTopcorrelationsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation>): ModelStatus;
  clearTopcorrelationsList(): ModelStatus;
  addTopcorrelations(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ModelStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ModelStatus;

  getApproval(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApprovalStatus | undefined;
  setApproval(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApprovalStatus): ModelStatus;
  hasApproval(): boolean;
  clearApproval(): ModelStatus;

  getInterpretability(): InterpretabilityStatus | undefined;
  setInterpretability(value?: InterpretabilityStatus): ModelStatus;
  hasInterpretability(): boolean;
  clearInterpretability(): ModelStatus;

  getImages(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images | undefined;
  setImages(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images): ModelStatus;
  hasImages(): boolean;
  clearImages(): ModelStatus;

  getUnittestresults(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setUnittestresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): ModelStatus;
  hasUnittestresults(): boolean;
  clearUnittestresults(): ModelStatus;

  getFeedbacktestresults(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setFeedbacktestresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): ModelStatus;
  hasFeedbacktestresults(): boolean;
  clearFeedbacktestresults(): ModelStatus;

  getGroupby(): ModelGroupByStatus | undefined;
  setGroupby(value?: ModelGroupByStatus): ModelStatus;
  hasGroupby(): boolean;
  clearGroupby(): ModelStatus;

  getUsage(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption | undefined;
  setUsage(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption): ModelStatus;
  hasUsage(): boolean;
  clearUsage(): ModelStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ModelStatus;
  clearConditionsList(): ModelStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ModelStatus): ModelStatus.AsObject;
  static serializeBinaryToWriter(message: ModelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelStatus;
  static deserializeBinaryFromReader(message: ModelStatus, reader: jspb.BinaryReader): ModelStatus;
}

export namespace ModelStatus {
  export type AsObject = {
    trainingstartedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    trainingcompletedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingstartedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    testingcompletedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    validationscore?: number,
    trainingscore?: number,
    testscore?: number,
    validationList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    trainList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    testList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    tuneList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    feedbackList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    phase?: string,
    reportname?: string,
    reportlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    trainweightslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    testweightslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    fullweightslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    trainlabelencoderlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    profilelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    misclassificationlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    forecastlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    packagelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    impurityimportanceList: Array<FeatureImportance.AsObject>,
    permutationimportanceList: Array<FeatureImportance.AsObject>,
    runtime?: RuntimeStatus.AsObject,
    traindatasetlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    testdatasetlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    validationdatasetlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    observedgeneration?: number,
    trainingrows?: number,
    testingrows?: number,
    validationrows?: number,
    failuremessage?: string,
    progress?: number,
    datasetname?: string,
    datasourcename?: string,
    serving?: ServingStatus.AsObject,
    tarfilehash?: string,
    trainingdatahash?: DataHashes.AsObject,
    trainingresources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.AsObject,
    testingresources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.AsObject,
    trainedby?: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    roccurve?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RocAucCurve.AsObject,
    prcurve?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PRCurve.AsObject,
    trainconfusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    testconfusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    correlationswithtargetList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation.AsObject>,
    topcorrelationsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Correlation.AsObject>,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    approval?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApprovalStatus.AsObject,
    interpretability?: InterpretabilityStatus.AsObject,
    images?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images.AsObject,
    unittestresults?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    feedbacktestresults?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    groupby?: ModelGroupByStatus.AsObject,
    usage?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ModelTestSuite extends jspb.Message {
  getBaselinemodelref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setBaselinemodelref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelTestSuite;
  hasBaselinemodelref(): boolean;
  clearBaselinemodelref(): ModelTestSuite;

  getDatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setDatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ModelTestSuite;
  hasDatasetref(): boolean;
  clearDatasetref(): ModelTestSuite;

  getUnittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ModelTestSuite;
  hasUnittests(): boolean;
  clearUnittests(): ModelTestSuite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTestSuite.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTestSuite): ModelTestSuite.AsObject;
  static serializeBinaryToWriter(message: ModelTestSuite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTestSuite;
  static deserializeBinaryFromReader(message: ModelTestSuite, reader: jspb.BinaryReader): ModelTestSuite;
}

export namespace ModelTestSuite {
  export type AsObject = {
    baselinemodelref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    datasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    unittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
  }
}

export class NNLayerParameter extends jspb.Message {
  getName(): string;
  setName(value: string): NNLayerParameter;
  hasName(): boolean;
  clearName(): NNLayerParameter;

  getValue(): string;
  setValue(value: string): NNLayerParameter;
  hasValue(): boolean;
  clearValue(): NNLayerParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NNLayerParameter.AsObject;
  static toObject(includeInstance: boolean, msg: NNLayerParameter): NNLayerParameter.AsObject;
  static serializeBinaryToWriter(message: NNLayerParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NNLayerParameter;
  static deserializeBinaryFromReader(message: NNLayerParameter, reader: jspb.BinaryReader): NNLayerParameter;
}

export namespace NNLayerParameter {
  export type AsObject = {
    name?: string,
    value?: string,
  }
}

export class OutlierDetectorStatus extends jspb.Message {
  getOutliermodeluri(): string;
  setOutliermodeluri(value: string): OutlierDetectorStatus;
  hasOutliermodeluri(): boolean;
  clearOutliermodeluri(): OutlierDetectorStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutlierDetectorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: OutlierDetectorStatus): OutlierDetectorStatus.AsObject;
  static serializeBinaryToWriter(message: OutlierDetectorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutlierDetectorStatus;
  static deserializeBinaryFromReader(message: OutlierDetectorStatus, reader: jspb.BinaryReader): OutlierDetectorStatus;
}

export namespace OutlierDetectorStatus {
  export type AsObject = {
    outliermodeluri?: string,
  }
}

export class OutlierModelSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): OutlierModelSpec;
  hasEnabled(): boolean;
  clearEnabled(): OutlierModelSpec;

  getOutlieralgorithm(): string;
  setOutlieralgorithm(value: string): OutlierModelSpec;
  hasOutlieralgorithm(): boolean;
  clearOutlieralgorithm(): OutlierModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutlierModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OutlierModelSpec): OutlierModelSpec.AsObject;
  static serializeBinaryToWriter(message: OutlierModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutlierModelSpec;
  static deserializeBinaryFromReader(message: OutlierModelSpec, reader: jspb.BinaryReader): OutlierModelSpec;
}

export namespace OutlierModelSpec {
  export type AsObject = {
    enabled?: boolean,
    outlieralgorithm?: string,
  }
}

export class PartitionModelLocationsSpec extends jspb.Message {
  getPartitionfolder(): string;
  setPartitionfolder(value: string): PartitionModelLocationsSpec;
  hasPartitionfolder(): boolean;
  clearPartitionfolder(): PartitionModelLocationsSpec;

  getPartitionprofilefolder(): string;
  setPartitionprofilefolder(value: string): PartitionModelLocationsSpec;
  hasPartitionprofilefolder(): boolean;
  clearPartitionprofilefolder(): PartitionModelLocationsSpec;

  getPartitionreportfile(): string;
  setPartitionreportfile(value: string): PartitionModelLocationsSpec;
  hasPartitionreportfile(): boolean;
  clearPartitionreportfile(): PartitionModelLocationsSpec;

  getPartitionmodelfolder(): string;
  setPartitionmodelfolder(value: string): PartitionModelLocationsSpec;
  hasPartitionmodelfolder(): boolean;
  clearPartitionmodelfolder(): PartitionModelLocationsSpec;

  getPartitionmodelfile(): string;
  setPartitionmodelfile(value: string): PartitionModelLocationsSpec;
  hasPartitionmodelfile(): boolean;
  clearPartitionmodelfile(): PartitionModelLocationsSpec;

  getPartitionforecastfile(): string;
  setPartitionforecastfile(value: string): PartitionModelLocationsSpec;
  hasPartitionforecastfile(): boolean;
  clearPartitionforecastfile(): PartitionModelLocationsSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionModelLocationsSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionModelLocationsSpec): PartitionModelLocationsSpec.AsObject;
  static serializeBinaryToWriter(message: PartitionModelLocationsSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionModelLocationsSpec;
  static deserializeBinaryFromReader(message: PartitionModelLocationsSpec, reader: jspb.BinaryReader): PartitionModelLocationsSpec;
}

export namespace PartitionModelLocationsSpec {
  export type AsObject = {
    partitionfolder?: string,
    partitionprofilefolder?: string,
    partitionreportfile?: string,
    partitionmodelfolder?: string,
    partitionmodelfile?: string,
    partitionforecastfile?: string,
  }
}

export class PercentilePrunerOptions extends jspb.Message {
  getPercentile(): number;
  setPercentile(value: number): PercentilePrunerOptions;
  hasPercentile(): boolean;
  clearPercentile(): PercentilePrunerOptions;

  getStartuptrials(): number;
  setStartuptrials(value: number): PercentilePrunerOptions;
  hasStartuptrials(): boolean;
  clearStartuptrials(): PercentilePrunerOptions;

  getWarmupsteps(): number;
  setWarmupsteps(value: number): PercentilePrunerOptions;
  hasWarmupsteps(): boolean;
  clearWarmupsteps(): PercentilePrunerOptions;

  getIntervaltrials(): number;
  setIntervaltrials(value: number): PercentilePrunerOptions;
  hasIntervaltrials(): boolean;
  clearIntervaltrials(): PercentilePrunerOptions;

  getMintrials(): number;
  setMintrials(value: number): PercentilePrunerOptions;
  hasMintrials(): boolean;
  clearMintrials(): PercentilePrunerOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PercentilePrunerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: PercentilePrunerOptions): PercentilePrunerOptions.AsObject;
  static serializeBinaryToWriter(message: PercentilePrunerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PercentilePrunerOptions;
  static deserializeBinaryFromReader(message: PercentilePrunerOptions, reader: jspb.BinaryReader): PercentilePrunerOptions;
}

export namespace PercentilePrunerOptions {
  export type AsObject = {
    percentile?: number,
    startuptrials?: number,
    warmupsteps?: number,
    intervaltrials?: number,
    mintrials?: number,
  }
}

export class PrunerSpec extends jspb.Message {
  getType(): string;
  setType(value: string): PrunerSpec;
  hasType(): boolean;
  clearType(): PrunerSpec;

  getMedian(): MedianPrunerOptions | undefined;
  setMedian(value?: MedianPrunerOptions): PrunerSpec;
  hasMedian(): boolean;
  clearMedian(): PrunerSpec;

  getPercentile(): PercentilePrunerOptions | undefined;
  setPercentile(value?: PercentilePrunerOptions): PrunerSpec;
  hasPercentile(): boolean;
  clearPercentile(): PrunerSpec;

  getSuccessivehalving(): SuccessiveHalvingOptions | undefined;
  setSuccessivehalving(value?: SuccessiveHalvingOptions): PrunerSpec;
  hasSuccessivehalving(): boolean;
  clearSuccessivehalving(): PrunerSpec;

  getHyperband(): HyperbandOptions | undefined;
  setHyperband(value?: HyperbandOptions): PrunerSpec;
  hasHyperband(): boolean;
  clearHyperband(): PrunerSpec;

  getThreshold(): ThresholdPrunerOptions | undefined;
  setThreshold(value?: ThresholdPrunerOptions): PrunerSpec;
  hasThreshold(): boolean;
  clearThreshold(): PrunerSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrunerSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PrunerSpec): PrunerSpec.AsObject;
  static serializeBinaryToWriter(message: PrunerSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrunerSpec;
  static deserializeBinaryFromReader(message: PrunerSpec, reader: jspb.BinaryReader): PrunerSpec;
}

export namespace PrunerSpec {
  export type AsObject = {
    type?: string,
    median?: MedianPrunerOptions.AsObject,
    percentile?: PercentilePrunerOptions.AsObject,
    successivehalving?: SuccessiveHalvingOptions.AsObject,
    hyperband?: HyperbandOptions.AsObject,
    threshold?: ThresholdPrunerOptions.AsObject,
  }
}

export class RegressionForecasterSpec extends jspb.Message {
  getEnsemble(): boolean;
  setEnsemble(value: boolean): RegressionForecasterSpec;
  hasEnsemble(): boolean;
  clearEnsemble(): RegressionForecasterSpec;

  getImputation(): string;
  setImputation(value: string): RegressionForecasterSpec;
  hasImputation(): boolean;
  clearImputation(): RegressionForecasterSpec;

  getEncoding(): string;
  setEncoding(value: string): RegressionForecasterSpec;
  hasEncoding(): boolean;
  clearEncoding(): RegressionForecasterSpec;

  getScaling(): string;
  setScaling(value: string): RegressionForecasterSpec;
  hasScaling(): boolean;
  clearScaling(): RegressionForecasterSpec;

  getDate(): boolean;
  setDate(value: boolean): RegressionForecasterSpec;
  hasDate(): boolean;
  clearDate(): RegressionForecasterSpec;

  getWindowsList(): Array<number>;
  setWindowsList(value: Array<number>): RegressionForecasterSpec;
  clearWindowsList(): RegressionForecasterSpec;
  addWindows(value: number, index?: number): RegressionForecasterSpec;

  getLagsList(): Array<number>;
  setLagsList(value: Array<number>): RegressionForecasterSpec;
  clearLagsList(): RegressionForecasterSpec;
  addLags(value: number, index?: number): RegressionForecasterSpec;

  getFunctionsList(): Array<string>;
  setFunctionsList(value: Array<string>): RegressionForecasterSpec;
  clearFunctionsList(): RegressionForecasterSpec;
  addFunctions(value: string, index?: number): RegressionForecasterSpec;

  getEma(): boolean;
  setEma(value: boolean): RegressionForecasterSpec;
  hasEma(): boolean;
  clearEma(): RegressionForecasterSpec;

  getLog(): boolean;
  setLog(value: boolean): RegressionForecasterSpec;
  hasLog(): boolean;
  clearLog(): RegressionForecasterSpec;

  getReduction(): string;
  setReduction(value: string): RegressionForecasterSpec;
  hasReduction(): boolean;
  clearReduction(): RegressionForecasterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegressionForecasterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RegressionForecasterSpec): RegressionForecasterSpec.AsObject;
  static serializeBinaryToWriter(message: RegressionForecasterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegressionForecasterSpec;
  static deserializeBinaryFromReader(message: RegressionForecasterSpec, reader: jspb.BinaryReader): RegressionForecasterSpec;
}

export namespace RegressionForecasterSpec {
  export type AsObject = {
    ensemble?: boolean,
    imputation?: string,
    encoding?: string,
    scaling?: string,
    date?: boolean,
    windowsList: Array<number>,
    lagsList: Array<number>,
    functionsList: Array<string>,
    ema?: boolean,
    log?: boolean,
    reduction?: string,
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

export class ReportGroupByStatus extends jspb.Message {
  getReportsuri(): string;
  setReportsuri(value: string): ReportGroupByStatus;
  hasReportsuri(): boolean;
  clearReportsuri(): ReportGroupByStatus;

  getWorkerresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>;
  setWorkerresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>): ReportGroupByStatus;
  clearWorkerresultsList(): ReportGroupByStatus;
  addWorkerresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportGroupByStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReportGroupByStatus): ReportGroupByStatus.AsObject;
  static serializeBinaryToWriter(message: ReportGroupByStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportGroupByStatus;
  static deserializeBinaryFromReader(message: ReportGroupByStatus, reader: jspb.BinaryReader): ReportGroupByStatus;
}

export namespace ReportGroupByStatus {
  export type AsObject = {
    reportsuri?: string,
    workerresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.AsObject>,
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
  hasVersionname(): boolean;
  clearVersionname(): ReportSpec;

  getEntityref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setEntityref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ReportSpec;
  hasEntityref(): boolean;
  clearEntityref(): ReportSpec;

  getReporttype(): string;
  setReporttype(value: string): ReportSpec;
  hasReporttype(): boolean;
  clearReporttype(): ReportSpec;

  getFormat(): string;
  setFormat(value: string): ReportSpec;
  hasFormat(): boolean;
  clearFormat(): ReportSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): ReportSpec;
  hasNotification(): boolean;
  clearNotification(): ReportSpec;

  getOwner(): string;
  setOwner(value: string): ReportSpec;
  hasOwner(): boolean;
  clearOwner(): ReportSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ReportSpec;
  hasResources(): boolean;
  clearResources(): ReportSpec;

  getTimeout(): number;
  setTimeout(value: number): ReportSpec;
  hasTimeout(): boolean;
  clearTimeout(): ReportSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ReportSpec;
  hasLabref(): boolean;
  clearLabref(): ReportSpec;

  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): ReportSpec;
  clearKeyList(): ReportSpec;
  addKey(value: string, index?: number): ReportSpec;

  getArtifactbucketname(): string;
  setArtifactbucketname(value: string): ReportSpec;
  hasArtifactbucketname(): boolean;
  clearArtifactbucketname(): ReportSpec;

  getModelclassname(): string;
  setModelclassname(value: string): ReportSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): ReportSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): ReportSpec;
  hasModelclassrunname(): boolean;
  clearModelclassrunname(): ReportSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ReportSpec): ReportSpec.AsObject;
  static serializeBinaryToWriter(message: ReportSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportSpec;
  static deserializeBinaryFromReader(message: ReportSpec, reader: jspb.BinaryReader): ReportSpec;
}

export namespace ReportSpec {
  export type AsObject = {
    versionname?: string,
    entityref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    reporttype?: string,
    format?: string,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    owner?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    timeout?: number,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    keyList: Array<string>,
    artifactbucketname?: string,
    modelclassname?: string,
    modelclassrunname?: string,
  }
}

export class ReportStatus extends jspb.Message {
  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): ReportStatus;

  getPhase(): string;
  setPhase(value: string): ReportStatus;
  hasPhase(): boolean;
  clearPhase(): ReportStatus;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ReportStatus;
  hasLocation(): boolean;
  clearLocation(): ReportStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): ReportStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): ReportStatus;

  getFailurereason(): string;
  setFailurereason(value: string): ReportStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): ReportStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): ReportStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): ReportStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): ReportStatus;
  hasLogs(): boolean;
  clearLogs(): ReportStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ReportStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ReportStatus;

  getGroupby(): ReportGroupByStatus | undefined;
  setGroupby(value?: ReportGroupByStatus): ReportStatus;
  hasGroupby(): boolean;
  clearGroupby(): ReportStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): ReportStatus;
  clearConditionsList(): ReportStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ReportStatus): ReportStatus.AsObject;
  static serializeBinaryToWriter(message: ReportStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportStatus;
  static deserializeBinaryFromReader(message: ReportStatus, reader: jspb.BinaryReader): ReportStatus;
}

export namespace ReportStatus {
  export type AsObject = {
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase?: string,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    observedgeneration?: number,
    failurereason?: string,
    failuremessage?: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    groupby?: ReportGroupByStatus.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class RuntimeStatus extends jspb.Message {
  getPythonversion(): string;
  setPythonversion(value: string): RuntimeStatus;
  hasPythonversion(): boolean;
  clearPythonversion(): RuntimeStatus;

  getOs(): string;
  setOs(value: string): RuntimeStatus;
  hasOs(): boolean;
  clearOs(): RuntimeStatus;

  getPythonpackagesMap(): jspb.Map<string, string>;
  clearPythonpackagesMap(): RuntimeStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeStatus): RuntimeStatus.AsObject;
  static serializeBinaryToWriter(message: RuntimeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeStatus;
  static deserializeBinaryFromReader(message: RuntimeStatus, reader: jspb.BinaryReader): RuntimeStatus;
}

export namespace RuntimeStatus {
  export type AsObject = {
    pythonversion?: string,
    os?: string,
    pythonpackagesMap: Array<[string, string]>,
  }
}

export class SearchSpec extends jspb.Message {
  getSampler(): string;
  setSampler(value: string): SearchSpec;
  hasSampler(): boolean;
  clearSampler(): SearchSpec;

  getPruner(): PrunerSpec | undefined;
  setPruner(value?: PrunerSpec): SearchSpec;
  hasPruner(): boolean;
  clearPruner(): SearchSpec;

  getMaxtime(): number;
  setMaxtime(value: number): SearchSpec;
  hasMaxtime(): boolean;
  clearMaxtime(): SearchSpec;

  getMaxmodels(): number;
  setMaxmodels(value: number): SearchSpec;
  hasMaxmodels(): boolean;
  clearMaxmodels(): SearchSpec;

  getMaxscore(): number;
  setMaxscore(value: number): SearchSpec;
  hasMaxscore(): boolean;
  clearMaxscore(): SearchSpec;

  getTrainers(): number;
  setTrainers(value: number): SearchSpec;
  hasTrainers(): boolean;
  clearTrainers(): SearchSpec;

  getTest(): number;
  setTest(value: number): SearchSpec;
  hasTest(): boolean;
  clearTest(): SearchSpec;

  getRetaintop(): number;
  setRetaintop(value: number): SearchSpec;
  hasRetaintop(): boolean;
  clearRetaintop(): SearchSpec;

  getRetainfor(): number;
  setRetainfor(value: number): SearchSpec;
  hasRetainfor(): boolean;
  clearRetainfor(): SearchSpec;

  getSearchspace(): AlgorithmSearchSpaceSpec | undefined;
  setSearchspace(value?: AlgorithmSearchSpaceSpec): SearchSpec;
  hasSearchspace(): boolean;
  clearSearchspace(): SearchSpec;

  getEarlystop(): EarlyStopSpec | undefined;
  setEarlystop(value?: EarlyStopSpec): SearchSpec;
  hasEarlystop(): boolean;
  clearEarlystop(): SearchSpec;

  getObjective(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setObjective(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): SearchSpec;
  hasObjective(): boolean;
  clearObjective(): SearchSpec;

  getSecondaryobjective(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec | undefined;
  setSecondaryobjective(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec): SearchSpec;
  hasSecondaryobjective(): boolean;
  clearSecondaryobjective(): SearchSpec;

  getGoal(): string;
  setGoal(value: string): SearchSpec;
  hasGoal(): boolean;
  clearGoal(): SearchSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSpec): SearchSpec.AsObject;
  static serializeBinaryToWriter(message: SearchSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSpec;
  static deserializeBinaryFromReader(message: SearchSpec, reader: jspb.BinaryReader): SearchSpec;
}

export namespace SearchSpec {
  export type AsObject = {
    sampler?: string,
    pruner?: PrunerSpec.AsObject,
    maxtime?: number,
    maxmodels?: number,
    maxscore?: number,
    trainers?: number,
    test?: number,
    retaintop?: number,
    retainfor?: number,
    searchspace?: AlgorithmSearchSpaceSpec.AsObject,
    earlystop?: EarlyStopSpec.AsObject,
    objective?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    secondaryobjective?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ObjectiveSpec.AsObject,
    goal?: string,
  }
}

export class SeasonalityPeriodSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): SeasonalityPeriodSpec;
  hasEnabled(): boolean;
  clearEnabled(): SeasonalityPeriodSpec;

  getAuto(): boolean;
  setAuto(value: boolean): SeasonalityPeriodSpec;
  hasAuto(): boolean;
  clearAuto(): SeasonalityPeriodSpec;

  getFourierorder(): number;
  setFourierorder(value: number): SeasonalityPeriodSpec;
  hasFourierorder(): boolean;
  clearFourierorder(): SeasonalityPeriodSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonalityPeriodSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonalityPeriodSpec): SeasonalityPeriodSpec.AsObject;
  static serializeBinaryToWriter(message: SeasonalityPeriodSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonalityPeriodSpec;
  static deserializeBinaryFromReader(message: SeasonalityPeriodSpec, reader: jspb.BinaryReader): SeasonalityPeriodSpec;
}

export namespace SeasonalityPeriodSpec {
  export type AsObject = {
    enabled?: boolean,
    auto?: boolean,
    fourierorder?: number,
  }
}

export class SeasonalitySpec extends jspb.Message {
  getAuto(): boolean;
  setAuto(value: boolean): SeasonalitySpec;
  hasAuto(): boolean;
  clearAuto(): SeasonalitySpec;

  getYearly(): SeasonalityPeriodSpec | undefined;
  setYearly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasYearly(): boolean;
  clearYearly(): SeasonalitySpec;

  getQuarterly(): SeasonalityPeriodSpec | undefined;
  setQuarterly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasQuarterly(): boolean;
  clearQuarterly(): SeasonalitySpec;

  getMonthly(): SeasonalityPeriodSpec | undefined;
  setMonthly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasMonthly(): boolean;
  clearMonthly(): SeasonalitySpec;

  getWeekly(): SeasonalityPeriodSpec | undefined;
  setWeekly(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasWeekly(): boolean;
  clearWeekly(): SeasonalitySpec;

  getDaily(): SeasonalityPeriodSpec | undefined;
  setDaily(value?: SeasonalityPeriodSpec): SeasonalitySpec;
  hasDaily(): boolean;
  clearDaily(): SeasonalitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonalitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonalitySpec): SeasonalitySpec.AsObject;
  static serializeBinaryToWriter(message: SeasonalitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonalitySpec;
  static deserializeBinaryFromReader(message: SeasonalitySpec, reader: jspb.BinaryReader): SeasonalitySpec;
}

export namespace SeasonalitySpec {
  export type AsObject = {
    auto?: boolean,
    yearly?: SeasonalityPeriodSpec.AsObject,
    quarterly?: SeasonalityPeriodSpec.AsObject,
    monthly?: SeasonalityPeriodSpec.AsObject,
    weekly?: SeasonalityPeriodSpec.AsObject,
    daily?: SeasonalityPeriodSpec.AsObject,
  }
}

export class ServingEnvironment extends jspb.Message {
  getName(): string;
  setName(value: string): ServingEnvironment;
  hasName(): boolean;
  clearName(): ServingEnvironment;

  getTests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setTests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): ServingEnvironment;
  hasTests(): boolean;
  clearTests(): ServingEnvironment;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ServingEnvironment;
  hasServingsiteref(): boolean;
  clearServingsiteref(): ServingEnvironment;

  getAccess(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec | undefined;
  setAccess(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec): ServingEnvironment;
  hasAccess(): boolean;
  clearAccess(): ServingEnvironment;

  getReplicas(): number;
  setReplicas(value: number): ServingEnvironment;
  hasReplicas(): boolean;
  clearReplicas(): ServingEnvironment;

  getOnline(): boolean;
  setOnline(value: boolean): ServingEnvironment;
  hasOnline(): boolean;
  clearOnline(): ServingEnvironment;

  getDashboard(): boolean;
  setDashboard(value: boolean): ServingEnvironment;
  hasDashboard(): boolean;
  clearDashboard(): ServingEnvironment;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ServingEnvironment;
  hasResources(): boolean;
  clearResources(): ServingEnvironment;

  getPresqlList(): Array<string>;
  setPresqlList(value: Array<string>): ServingEnvironment;
  clearPresqlList(): ServingEnvironment;
  addPresql(value: string, index?: number): ServingEnvironment;

  getPostsqlList(): Array<string>;
  setPostsqlList(value: Array<string>): ServingEnvironment;
  clearPostsqlList(): ServingEnvironment;
  addPostsql(value: string, index?: number): ServingEnvironment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingEnvironment.AsObject;
  static toObject(includeInstance: boolean, msg: ServingEnvironment): ServingEnvironment.AsObject;
  static serializeBinaryToWriter(message: ServingEnvironment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingEnvironment;
  static deserializeBinaryFromReader(message: ServingEnvironment, reader: jspb.BinaryReader): ServingEnvironment;
}

export namespace ServingEnvironment {
  export type AsObject = {
    name?: string,
    tests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    access?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.AsObject,
    replicas?: number,
    online?: boolean,
    dashboard?: boolean,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    presqlList: Array<string>,
    postsqlList: Array<string>,
  }
}

export class ServingSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ServingSpec;
  hasEnabled(): boolean;
  clearEnabled(): ServingSpec;

  getPredictorname(): string;
  setPredictorname(value: string): ServingSpec;
  hasPredictorname(): boolean;
  clearPredictorname(): ServingSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): ServingSpec;
  hasResources(): boolean;
  clearResources(): ServingSpec;

  getServingsiteref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingsiteref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ServingSpec;
  hasServingsiteref(): boolean;
  clearServingsiteref(): ServingSpec;

  getDashboard(): boolean;
  setDashboard(value: boolean): ServingSpec;
  hasDashboard(): boolean;
  clearDashboard(): ServingSpec;

  getAccess(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec | undefined;
  setAccess(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec): ServingSpec;
  hasAccess(): boolean;
  clearAccess(): ServingSpec;

  getReplicas(): number;
  setReplicas(value: number): ServingSpec;
  hasReplicas(): boolean;
  clearReplicas(): ServingSpec;

  getPromotion(): string;
  setPromotion(value: string): ServingSpec;
  hasPromotion(): boolean;
  clearPromotion(): ServingSpec;

  getApprovedby(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setApprovedby(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): ServingSpec;
  hasApprovedby(): boolean;
  clearApprovedby(): ServingSpec;

  getApprovedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setApprovedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ServingSpec;
  hasApprovedat(): boolean;
  clearApprovedat(): ServingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ServingSpec): ServingSpec.AsObject;
  static serializeBinaryToWriter(message: ServingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingSpec;
  static deserializeBinaryFromReader(message: ServingSpec, reader: jspb.BinaryReader): ServingSpec;
}

export namespace ServingSpec {
  export type AsObject = {
    enabled?: boolean,
    predictorname?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    servingsiteref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    dashboard?: boolean,
    access?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.AsObject,
    replicas?: number,
    promotion?: string,
    approvedby?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    approvedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
  }
}

export class ServingStatus extends jspb.Message {
  getPredictorname(): string;
  setPredictorname(value: string): ServingStatus;
  hasPredictorname(): boolean;
  clearPredictorname(): ServingStatus;

  getDataappname(): string;
  setDataappname(value: string): ServingStatus;
  hasDataappname(): boolean;
  clearDataappname(): ServingStatus;

  getPredictorendpoint(): string;
  setPredictorendpoint(value: string): ServingStatus;
  hasPredictorendpoint(): boolean;
  clearPredictorendpoint(): ServingStatus;

  getDashboardendpoint(): string;
  setDashboardendpoint(value: string): ServingStatus;
  hasDashboardendpoint(): boolean;
  clearDashboardendpoint(): ServingStatus;

  getRole(): string;
  setRole(value: string): ServingStatus;
  hasRole(): boolean;
  clearRole(): ServingStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServingStatus): ServingStatus.AsObject;
  static serializeBinaryToWriter(message: ServingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingStatus;
  static deserializeBinaryFromReader(message: ServingStatus, reader: jspb.BinaryReader): ServingStatus;
}

export namespace ServingStatus {
  export type AsObject = {
    predictorname?: string,
    dataappname?: string,
    predictorendpoint?: string,
    dashboardendpoint?: string,
    role?: string,
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

export class StudyRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): StudyRun;
  hasMetadata(): boolean;
  clearMetadata(): StudyRun;

  getSpec(): StudyRunSpec | undefined;
  setSpec(value?: StudyRunSpec): StudyRun;
  hasSpec(): boolean;
  clearSpec(): StudyRun;

  getStatus(): StudyRunStatus | undefined;
  setStatus(value?: StudyRunStatus): StudyRun;
  hasStatus(): boolean;
  clearStatus(): StudyRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyRun.AsObject;
  static toObject(includeInstance: boolean, msg: StudyRun): StudyRun.AsObject;
  static serializeBinaryToWriter(message: StudyRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyRun;
  static deserializeBinaryFromReader(message: StudyRun, reader: jspb.BinaryReader): StudyRun;
}

export namespace StudyRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: StudyRunSpec.AsObject,
    status?: StudyRunStatus.AsObject,
  }
}

export class StudyRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): StudyRunList;
  hasMetadata(): boolean;
  clearMetadata(): StudyRunList;

  getItemsList(): Array<StudyRun>;
  setItemsList(value: Array<StudyRun>): StudyRunList;
  clearItemsList(): StudyRunList;
  addItems(value?: StudyRun, index?: number): StudyRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyRunList.AsObject;
  static toObject(includeInstance: boolean, msg: StudyRunList): StudyRunList.AsObject;
  static serializeBinaryToWriter(message: StudyRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyRunList;
  static deserializeBinaryFromReader(message: StudyRunList, reader: jspb.BinaryReader): StudyRunList;
}

export namespace StudyRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<StudyRun.AsObject>,
  }
}

export class StudyRunPhaseStatus extends jspb.Message {
  getStartedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyRunPhaseStatus;
  hasStartedat(): boolean;
  clearStartedat(): StudyRunPhaseStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyRunPhaseStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): StudyRunPhaseStatus;

  getWaitingmodelscount(): number;
  setWaitingmodelscount(value: number): StudyRunPhaseStatus;
  hasWaitingmodelscount(): boolean;
  clearWaitingmodelscount(): StudyRunPhaseStatus;

  getRunningmodelscount(): number;
  setRunningmodelscount(value: number): StudyRunPhaseStatus;
  hasRunningmodelscount(): boolean;
  clearRunningmodelscount(): StudyRunPhaseStatus;

  getFailedmodelscount(): number;
  setFailedmodelscount(value: number): StudyRunPhaseStatus;
  hasFailedmodelscount(): boolean;
  clearFailedmodelscount(): StudyRunPhaseStatus;

  getCompletedmodelscount(): number;
  setCompletedmodelscount(value: number): StudyRunPhaseStatus;
  hasCompletedmodelscount(): boolean;
  clearCompletedmodelscount(): StudyRunPhaseStatus;

  getBestscore(): number;
  setBestscore(value: number): StudyRunPhaseStatus;
  hasBestscore(): boolean;
  clearBestscore(): StudyRunPhaseStatus;

  getModelswithnoprogress(): number;
  setModelswithnoprogress(value: number): StudyRunPhaseStatus;
  hasModelswithnoprogress(): boolean;
  clearModelswithnoprogress(): StudyRunPhaseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyRunPhaseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyRunPhaseStatus): StudyRunPhaseStatus.AsObject;
  static serializeBinaryToWriter(message: StudyRunPhaseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyRunPhaseStatus;
  static deserializeBinaryFromReader(message: StudyRunPhaseStatus, reader: jspb.BinaryReader): StudyRunPhaseStatus;
}

export namespace StudyRunPhaseStatus {
  export type AsObject = {
    startedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    waitingmodelscount?: number,
    runningmodelscount?: number,
    failedmodelscount?: number,
    completedmodelscount?: number,
    bestscore?: number,
    modelswithnoprogress?: number,
  }
}

export class StudyRunSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): StudyRunSpec;
  hasOwner(): boolean;
  clearOwner(): StudyRunSpec;

  getStudyname(): string;
  setStudyname(value: string): StudyRunSpec;
  hasStudyname(): boolean;
  clearStudyname(): StudyRunSpec;

  getTimeout(): number;
  setTimeout(value: number): StudyRunSpec;
  hasTimeout(): boolean;
  clearTimeout(): StudyRunSpec;

  getPause(): boolean;
  setPause(value: boolean): StudyRunSpec;
  hasPause(): boolean;
  clearPause(): StudyRunSpec;

  getAbort(): boolean;
  setAbort(value: boolean): StudyRunSpec;
  hasAbort(): boolean;
  clearAbort(): StudyRunSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): StudyRunSpec;
  hasModelclassrunname(): boolean;
  clearModelclassrunname(): StudyRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StudyRunSpec): StudyRunSpec.AsObject;
  static serializeBinaryToWriter(message: StudyRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyRunSpec;
  static deserializeBinaryFromReader(message: StudyRunSpec, reader: jspb.BinaryReader): StudyRunSpec;
}

export namespace StudyRunSpec {
  export type AsObject = {
    owner?: string,
    studyname?: string,
    timeout?: number,
    pause?: boolean,
    abort?: boolean,
    modelclassrunname?: string,
  }
}

export class StudyRunStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): StudyRunStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): StudyRunStatus;

  getManifestlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setManifestlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): StudyRunStatus;
  hasManifestlocation(): boolean;
  clearManifestlocation(): StudyRunStatus;

  getManifestversion(): number;
  setManifestversion(value: number): StudyRunStatus;
  hasManifestversion(): boolean;
  clearManifestversion(): StudyRunStatus;

  getRunversion(): number;
  setRunversion(value: number): StudyRunStatus;
  hasRunversion(): boolean;
  clearRunversion(): StudyRunStatus;

  getPhase(): string;
  setPhase(value: string): StudyRunStatus;
  hasPhase(): boolean;
  clearPhase(): StudyRunStatus;

  getTrainingrowscount(): number;
  setTrainingrowscount(value: number): StudyRunStatus;
  hasTrainingrowscount(): boolean;
  clearTrainingrowscount(): StudyRunStatus;

  getTestingrowscount(): number;
  setTestingrowscount(value: number): StudyRunStatus;
  hasTestingrowscount(): boolean;
  clearTestingrowscount(): StudyRunStatus;

  getValidationrowscount(): number;
  setValidationrowscount(value: number): StudyRunStatus;
  hasValidationrowscount(): boolean;
  clearValidationrowscount(): StudyRunStatus;

  getProgress(): number;
  setProgress(value: number): StudyRunStatus;
  hasProgress(): boolean;
  clearProgress(): StudyRunStatus;

  getModelscount(): number;
  setModelscount(value: number): StudyRunStatus;
  hasModelscount(): boolean;
  clearModelscount(): StudyRunStatus;

  getBestmodel(): string;
  setBestmodel(value: string): StudyRunStatus;
  hasBestmodel(): boolean;
  clearBestmodel(): StudyRunStatus;

  getBestmodelscore(): number;
  setBestmodelscore(value: number): StudyRunStatus;
  hasBestmodelscore(): boolean;
  clearBestmodelscore(): StudyRunStatus;

  getReportname(): string;
  setReportname(value: string): StudyRunStatus;
  hasReportname(): boolean;
  clearReportname(): StudyRunStatus;

  getProfilelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setProfilelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): StudyRunStatus;
  hasProfilelocation(): boolean;
  clearProfilelocation(): StudyRunStatus;

  getTraindatasetlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTraindatasetlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): StudyRunStatus;
  hasTraindatasetlocation(): boolean;
  clearTraindatasetlocation(): StudyRunStatus;

  getTestdatasetlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTestdatasetlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): StudyRunStatus;
  hasTestdatasetlocation(): boolean;
  clearTestdatasetlocation(): StudyRunStatus;

  getValidationdatasetlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setValidationdatasetlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): StudyRunStatus;
  hasValidationdatasetlocation(): boolean;
  clearValidationdatasetlocation(): StudyRunStatus;

  getOptimizerlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setOptimizerlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): StudyRunStatus;
  hasOptimizerlocation(): boolean;
  clearOptimizerlocation(): StudyRunStatus;

  getLastmodelid(): number;
  setLastmodelid(value: number): StudyRunStatus;
  hasLastmodelid(): boolean;
  clearLastmodelid(): StudyRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): StudyRunStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): StudyRunStatus;

  getGc(): GarbageCollectionStatus | undefined;
  setGc(value?: GarbageCollectionStatus): StudyRunStatus;
  hasGc(): boolean;
  clearGc(): StudyRunStatus;

  getTrainingdatahash(): DataHashes | undefined;
  setTrainingdatahash(value?: DataHashes): StudyRunStatus;
  hasTrainingdatahash(): boolean;
  clearTrainingdatahash(): StudyRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): StudyRunStatus;
  hasLogs(): boolean;
  clearLogs(): StudyRunStatus;

  getBaseline(): StudyRunPhaseStatus | undefined;
  setBaseline(value?: StudyRunPhaseStatus): StudyRunStatus;
  hasBaseline(): boolean;
  clearBaseline(): StudyRunStatus;

  getSearch(): StudyRunPhaseStatus | undefined;
  setSearch(value?: StudyRunPhaseStatus): StudyRunStatus;
  hasSearch(): boolean;
  clearSearch(): StudyRunStatus;

  getEnsemble(): StudyRunPhaseStatus | undefined;
  setEnsemble(value?: StudyRunPhaseStatus): StudyRunStatus;
  hasEnsemble(): boolean;
  clearEnsemble(): StudyRunStatus;

  getTest(): StudyRunPhaseStatus | undefined;
  setTest(value?: StudyRunPhaseStatus): StudyRunStatus;
  hasTest(): boolean;
  clearTest(): StudyRunStatus;

  getExplain(): StudyRunPhaseStatus | undefined;
  setExplain(value?: StudyRunPhaseStatus): StudyRunStatus;
  hasExplain(): boolean;
  clearExplain(): StudyRunStatus;

  getOutlierdetection(): OutlierDetectorStatus | undefined;
  setOutlierdetection(value?: OutlierDetectorStatus): StudyRunStatus;
  hasOutlierdetection(): boolean;
  clearOutlierdetection(): StudyRunStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyRunStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): StudyRunStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyRunStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): StudyRunStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): StudyRunStatus;
  clearConditionsList(): StudyRunStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyRunStatus): StudyRunStatus.AsObject;
  static serializeBinaryToWriter(message: StudyRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyRunStatus;
  static deserializeBinaryFromReader(message: StudyRunStatus, reader: jspb.BinaryReader): StudyRunStatus;
}

export namespace StudyRunStatus {
  export type AsObject = {
    observedgeneration?: number,
    manifestlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    manifestversion?: number,
    runversion?: number,
    phase?: string,
    trainingrowscount?: number,
    testingrowscount?: number,
    validationrowscount?: number,
    progress?: number,
    modelscount?: number,
    bestmodel?: string,
    bestmodelscore?: number,
    reportname?: string,
    profilelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    traindatasetlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    testdatasetlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    validationdatasetlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    optimizerlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    lastmodelid?: number,
    failuremessage?: string,
    gc?: GarbageCollectionStatus.AsObject,
    trainingdatahash?: DataHashes.AsObject,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    baseline?: StudyRunPhaseStatus.AsObject,
    search?: StudyRunPhaseStatus.AsObject,
    ensemble?: StudyRunPhaseStatus.AsObject,
    test?: StudyRunPhaseStatus.AsObject,
    explain?: StudyRunPhaseStatus.AsObject,
    outlierdetection?: OutlierDetectorStatus.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class StudySpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): StudySpec;
  hasOwner(): boolean;
  clearOwner(): StudySpec;

  getDescription(): string;
  setDescription(value: string): StudySpec;
  hasDescription(): boolean;
  clearDescription(): StudySpec;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference): StudySpec;
  hasSnapshot(): boolean;
  clearSnapshot(): StudySpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): StudySpec;
  hasLabref(): boolean;
  clearLabref(): StudySpec;

  getTask(): string;
  setTask(value: string): StudySpec;
  hasTask(): boolean;
  clearTask(): StudySpec;

  getSubtask(): string;
  setSubtask(value: string): StudySpec;
  hasSubtask(): boolean;
  clearSubtask(): StudySpec;

  getFeatureengineering(): FeatureEngineeringSpec | undefined;
  setFeatureengineering(value?: FeatureEngineeringSpec): StudySpec;
  hasFeatureengineering(): boolean;
  clearFeatureengineering(): StudySpec;

  getImbalancehandler(): ImbalanceHandlingSpec | undefined;
  setImbalancehandler(value?: ImbalanceHandlingSpec): StudySpec;
  hasImbalancehandler(): boolean;
  clearImbalancehandler(): StudySpec;

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

  getSplit(): DataSplitSpec | undefined;
  setSplit(value?: DataSplitSpec): StudySpec;
  hasSplit(): boolean;
  clearSplit(): StudySpec;

  getForecasttemplate(): ForecasterSpec | undefined;
  setForecasttemplate(value?: ForecasterSpec): StudySpec;
  hasForecasttemplate(): boolean;
  clearForecasttemplate(): StudySpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): StudySpec;
  hasSchedule(): boolean;
  clearSchedule(): StudySpec;

  getInterpretability(): InterpretabilitySpec | undefined;
  setInterpretability(value?: InterpretabilitySpec): StudySpec;
  hasInterpretability(): boolean;
  clearInterpretability(): StudySpec;

  getOutliermodel(): OutlierModelSpec | undefined;
  setOutliermodel(value?: OutlierModelSpec): StudySpec;
  hasOutliermodel(): boolean;
  clearOutliermodel(): StudySpec;

  getUnitteststemplate(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnitteststemplate(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): StudySpec;
  hasUnitteststemplate(): boolean;
  clearUnitteststemplate(): StudySpec;

  getServing(): ServingSpec | undefined;
  setServing(value?: ServingSpec): StudySpec;
  hasServing(): boolean;
  clearServing(): StudySpec;

  getGc(): GarbageCollectionSpec | undefined;
  setGc(value?: GarbageCollectionSpec): StudySpec;
  hasGc(): boolean;
  clearGc(): StudySpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): StudySpec;
  hasNotification(): boolean;
  clearNotification(): StudySpec;

  getReport(): boolean;
  setReport(value: boolean): StudySpec;
  hasReport(): boolean;
  clearReport(): StudySpec;

  getProfile(): boolean;
  setProfile(value: boolean): StudySpec;
  hasProfile(): boolean;
  clearProfile(): StudySpec;

  getExplain(): boolean;
  setExplain(value: boolean): StudySpec;
  hasExplain(): boolean;
  clearExplain(): StudySpec;

  getFast(): boolean;
  setFast(value: boolean): StudySpec;
  hasFast(): boolean;
  clearFast(): StudySpec;

  getArtifactbucketname(): string;
  setArtifactbucketname(value: string): StudySpec;
  hasArtifactbucketname(): boolean;
  clearArtifactbucketname(): StudySpec;

  getTimeout(): number;
  setTimeout(value: number): StudySpec;
  hasTimeout(): boolean;
  clearTimeout(): StudySpec;

  getModelclassname(): string;
  setModelclassname(value: string): StudySpec;
  hasModelclassname(): boolean;
  clearModelclassname(): StudySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudySpec.AsObject;
  static toObject(includeInstance: boolean, msg: StudySpec): StudySpec.AsObject;
  static serializeBinaryToWriter(message: StudySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudySpec;
  static deserializeBinaryFromReader(message: StudySpec, reader: jspb.BinaryReader): StudySpec;
}

export namespace StudySpec {
  export type AsObject = {
    owner?: string,
    description?: string,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference.AsObject,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    task?: string,
    subtask?: string,
    featureengineering?: FeatureEngineeringSpec.AsObject,
    imbalancehandler?: ImbalanceHandlingSpec.AsObject,
    baseline?: BaselineSpec.AsObject,
    search?: SearchSpec.AsObject,
    ensembles?: EnsemblesSpec.AsObject,
    trainingtemplate?: TrainingSpec.AsObject,
    split?: DataSplitSpec.AsObject,
    forecasttemplate?: ForecasterSpec.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    interpretability?: InterpretabilitySpec.AsObject,
    outliermodel?: OutlierModelSpec.AsObject,
    unitteststemplate?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    serving?: ServingSpec.AsObject,
    gc?: GarbageCollectionSpec.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    report?: boolean,
    profile?: boolean,
    explain?: boolean,
    fast?: boolean,
    artifactbucketname?: string,
    timeout?: number,
    modelclassname?: string,
  }
}

export class StudyStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): StudyStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): StudyStatus;

  getActiveList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference>;
  setActiveList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference>): StudyStatus;
  clearActiveList(): StudyStatus;
  addActive(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference;

  getVersion(): number;
  setVersion(value: number): StudyStatus;
  hasVersion(): boolean;
  clearVersion(): StudyStatus;

  getLastrunversion(): number;
  setLastrunversion(value: number): StudyStatus;
  hasLastrunversion(): boolean;
  clearLastrunversion(): StudyStatus;

  getAvailablerunversionsList(): Array<number>;
  setAvailablerunversionsList(value: Array<number>): StudyStatus;
  clearAvailablerunversionsList(): StudyStatus;
  addAvailablerunversions(value: number, index?: number): StudyStatus;

  getLastsnapshotat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastsnapshotat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasLastsnapshotat(): boolean;
  clearLastsnapshotat(): StudyStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): StudyStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): StudyStatus;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): StudyStatus;
  hasSchedule(): boolean;
  clearSchedule(): StudyStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): StudyStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): StudyStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): StudyStatus;
  clearConditionsList(): StudyStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StudyStatus): StudyStatus.AsObject;
  static serializeBinaryToWriter(message: StudyStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyStatus;
  static deserializeBinaryFromReader(message: StudyStatus, reader: jspb.BinaryReader): StudyStatus;
}

export namespace StudyStatus {
  export type AsObject = {
    observedgeneration?: number,
    activeList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference.AsObject>,
    version?: number,
    lastrunversion?: number,
    availablerunversionsList: Array<number>,
    lastsnapshotat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failuremessage?: string,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class SuccessiveHalvingOptions extends jspb.Message {
  getMinresources(): number;
  setMinresources(value: number): SuccessiveHalvingOptions;
  hasMinresources(): boolean;
  clearMinresources(): SuccessiveHalvingOptions;

  getReductionfactor(): number;
  setReductionfactor(value: number): SuccessiveHalvingOptions;
  hasReductionfactor(): boolean;
  clearReductionfactor(): SuccessiveHalvingOptions;

  getMinearlystoppingrate(): number;
  setMinearlystoppingrate(value: number): SuccessiveHalvingOptions;
  hasMinearlystoppingrate(): boolean;
  clearMinearlystoppingrate(): SuccessiveHalvingOptions;

  getBootstrapcount(): number;
  setBootstrapcount(value: number): SuccessiveHalvingOptions;
  hasBootstrapcount(): boolean;
  clearBootstrapcount(): SuccessiveHalvingOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingOptions): SuccessiveHalvingOptions.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingOptions;
  static deserializeBinaryFromReader(message: SuccessiveHalvingOptions, reader: jspb.BinaryReader): SuccessiveHalvingOptions;
}

export namespace SuccessiveHalvingOptions {
  export type AsObject = {
    minresources?: number,
    reductionfactor?: number,
    minearlystoppingrate?: number,
    bootstrapcount?: number,
  }
}

export class SuccessiveHalvingSpec extends jspb.Message {
  getBudget(): number;
  setBudget(value: number): SuccessiveHalvingSpec;
  hasBudget(): boolean;
  clearBudget(): SuccessiveHalvingSpec;

  getBracket(): number;
  setBracket(value: number): SuccessiveHalvingSpec;
  hasBracket(): boolean;
  clearBracket(): SuccessiveHalvingSpec;

  getRung(): number;
  setRung(value: number): SuccessiveHalvingSpec;
  hasRung(): boolean;
  clearRung(): SuccessiveHalvingSpec;

  getConfid(): number;
  setConfid(value: number): SuccessiveHalvingSpec;
  hasConfid(): boolean;
  clearConfid(): SuccessiveHalvingSpec;

  getModality(): string;
  setModality(value: string): SuccessiveHalvingSpec;
  hasModality(): boolean;
  clearModality(): SuccessiveHalvingSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessiveHalvingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessiveHalvingSpec): SuccessiveHalvingSpec.AsObject;
  static serializeBinaryToWriter(message: SuccessiveHalvingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessiveHalvingSpec;
  static deserializeBinaryFromReader(message: SuccessiveHalvingSpec, reader: jspb.BinaryReader): SuccessiveHalvingSpec;
}

export namespace SuccessiveHalvingSpec {
  export type AsObject = {
    budget?: number,
    bracket?: number,
    rung?: number,
    confid?: number,
    modality?: string,
  }
}

export class TextPipelineSpec extends jspb.Message {
  getEncoder(): string;
  setEncoder(value: string): TextPipelineSpec;
  hasEncoder(): boolean;
  clearEncoder(): TextPipelineSpec;

  getTokenizer(): string;
  setTokenizer(value: string): TextPipelineSpec;
  hasTokenizer(): boolean;
  clearTokenizer(): TextPipelineSpec;

  getStopwords(): boolean;
  setStopwords(value: boolean): TextPipelineSpec;
  hasStopwords(): boolean;
  clearStopwords(): TextPipelineSpec;

  getPos(): boolean;
  setPos(value: boolean): TextPipelineSpec;
  hasPos(): boolean;
  clearPos(): TextPipelineSpec;

  getLemma(): boolean;
  setLemma(value: boolean): TextPipelineSpec;
  hasLemma(): boolean;
  clearLemma(): TextPipelineSpec;

  getStem(): boolean;
  setStem(value: boolean): TextPipelineSpec;
  hasStem(): boolean;
  clearStem(): TextPipelineSpec;

  getEmbedding(): string;
  setEmbedding(value: string): TextPipelineSpec;
  hasEmbedding(): boolean;
  clearEmbedding(): TextPipelineSpec;

  getSvd(): boolean;
  setSvd(value: boolean): TextPipelineSpec;
  hasSvd(): boolean;
  clearSvd(): TextPipelineSpec;

  getMaxsvdcomponents(): number;
  setMaxsvdcomponents(value: number): TextPipelineSpec;
  hasMaxsvdcomponents(): boolean;
  clearMaxsvdcomponents(): TextPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TextPipelineSpec): TextPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: TextPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPipelineSpec;
  static deserializeBinaryFromReader(message: TextPipelineSpec, reader: jspb.BinaryReader): TextPipelineSpec;
}

export namespace TextPipelineSpec {
  export type AsObject = {
    encoder?: string,
    tokenizer?: string,
    stopwords?: boolean,
    pos?: boolean,
    lemma?: boolean,
    stem?: boolean,
    embedding?: string,
    svd?: boolean,
    maxsvdcomponents?: number,
  }
}

export class ThresholdPrunerOptions extends jspb.Message {
  getLower(): number;
  setLower(value: number): ThresholdPrunerOptions;
  hasLower(): boolean;
  clearLower(): ThresholdPrunerOptions;

  getUpper(): number;
  setUpper(value: number): ThresholdPrunerOptions;
  hasUpper(): boolean;
  clearUpper(): ThresholdPrunerOptions;

  getWarmupsteps(): number;
  setWarmupsteps(value: number): ThresholdPrunerOptions;
  hasWarmupsteps(): boolean;
  clearWarmupsteps(): ThresholdPrunerOptions;

  getIntervalsteps(): number;
  setIntervalsteps(value: number): ThresholdPrunerOptions;
  hasIntervalsteps(): boolean;
  clearIntervalsteps(): ThresholdPrunerOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdPrunerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdPrunerOptions): ThresholdPrunerOptions.AsObject;
  static serializeBinaryToWriter(message: ThresholdPrunerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdPrunerOptions;
  static deserializeBinaryFromReader(message: ThresholdPrunerOptions, reader: jspb.BinaryReader): ThresholdPrunerOptions;
}

export namespace ThresholdPrunerOptions {
  export type AsObject = {
    lower?: number,
    upper?: number,
    warmupsteps?: number,
    intervalsteps?: number,
  }
}

export class TimeSeriesEvent extends jspb.Message {
  getName(): string;
  setName(value: string): TimeSeriesEvent;
  hasName(): boolean;
  clearName(): TimeSeriesEvent;

  getMethod(): string;
  setMethod(value: string): TimeSeriesEvent;
  hasMethod(): boolean;
  clearMethod(): TimeSeriesEvent;

  getHoliday(): boolean;
  setHoliday(value: boolean): TimeSeriesEvent;
  hasHoliday(): boolean;
  clearHoliday(): TimeSeriesEvent;

  getCountry(): string;
  setCountry(value: string): TimeSeriesEvent;
  hasCountry(): boolean;
  clearCountry(): TimeSeriesEvent;

  getPreevent(): number;
  setPreevent(value: number): TimeSeriesEvent;
  hasPreevent(): boolean;
  clearPreevent(): TimeSeriesEvent;

  getPostevent(): number;
  setPostevent(value: number): TimeSeriesEvent;
  hasPostevent(): boolean;
  clearPostevent(): TimeSeriesEvent;

  getTimepointsList(): Array<string>;
  setTimepointsList(value: Array<string>): TimeSeriesEvent;
  clearTimepointsList(): TimeSeriesEvent;
  addTimepoints(value: string, index?: number): TimeSeriesEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesEvent): TimeSeriesEvent.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesEvent;
  static deserializeBinaryFromReader(message: TimeSeriesEvent, reader: jspb.BinaryReader): TimeSeriesEvent;
}

export namespace TimeSeriesEvent {
  export type AsObject = {
    name?: string,
    method?: string,
    holiday?: boolean,
    country?: string,
    preevent?: number,
    postevent?: number,
    timepointsList: Array<string>,
  }
}

export class TrainingSpec extends jspb.Message {
  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): TrainingSpec;
  hasLabref(): boolean;
  clearLabref(): TrainingSpec;

  getPriority(): string;
  setPriority(value: string): TrainingSpec;
  hasPriority(): boolean;
  clearPriority(): TrainingSpec;

  getCvtype(): string;
  setCvtype(value: string): TrainingSpec;
  hasCvtype(): boolean;
  clearCvtype(): TrainingSpec;

  getFolds(): number;
  setFolds(value: number): TrainingSpec;
  hasFolds(): boolean;
  clearFolds(): TrainingSpec;

  getSh(): SuccessiveHalvingSpec | undefined;
  setSh(value?: SuccessiveHalvingSpec): TrainingSpec;
  hasSh(): boolean;
  clearSh(): TrainingSpec;

  getSeed(): number;
  setSeed(value: number): TrainingSpec;
  hasSeed(): boolean;
  clearSeed(): TrainingSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): TrainingSpec;
  hasResources(): boolean;
  clearResources(): TrainingSpec;

  getGpu(): boolean;
  setGpu(value: boolean): TrainingSpec;
  hasGpu(): boolean;
  clearGpu(): TrainingSpec;

  getFeatureimportance(): boolean;
  setFeatureimportance(value: boolean): TrainingSpec;
  hasFeatureimportance(): boolean;
  clearFeatureimportance(): TrainingSpec;

  getSamplepct(): number;
  setSamplepct(value: number): TrainingSpec;
  hasSamplepct(): boolean;
  clearSamplepct(): TrainingSpec;

  getCheckpoint(): CheckpointSpec | undefined;
  setCheckpoint(value?: CheckpointSpec): TrainingSpec;
  hasCheckpoint(): boolean;
  clearCheckpoint(): TrainingSpec;

  getLoglevel(): string;
  setLoglevel(value: string): TrainingSpec;
  hasLoglevel(): boolean;
  clearLoglevel(): TrainingSpec;

  getTimeout(): number;
  setTimeout(value: number): TrainingSpec;
  hasTimeout(): boolean;
  clearTimeout(): TrainingSpec;

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
    priority?: string,
    cvtype?: string,
    folds?: number,
    sh?: SuccessiveHalvingSpec.AsObject,
    seed?: number,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    gpu?: boolean,
    featureimportance?: boolean,
    samplepct?: number,
    checkpoint?: CheckpointSpec.AsObject,
    loglevel?: string,
    timeout?: number,
  }
}

export class UnivariateForecastStatus extends jspb.Message {
  getGridsearchresulturi(): string;
  setGridsearchresulturi(value: string): UnivariateForecastStatus;
  hasGridsearchresulturi(): boolean;
  clearGridsearchresulturi(): UnivariateForecastStatus;

  getBaseestimator(): ClassicalEstimatorSpec | undefined;
  setBaseestimator(value?: ClassicalEstimatorSpec): UnivariateForecastStatus;
  hasBaseestimator(): boolean;
  clearBaseestimator(): UnivariateForecastStatus;

  getModeluri(): string;
  setModeluri(value: string): UnivariateForecastStatus;
  hasModeluri(): boolean;
  clearModeluri(): UnivariateForecastStatus;

  getCvresulturi(): string;
  setCvresulturi(value: string): UnivariateForecastStatus;
  hasCvresulturi(): boolean;
  clearCvresulturi(): UnivariateForecastStatus;

  getForecasturi(): string;
  setForecasturi(value: string): UnivariateForecastStatus;
  hasForecasturi(): boolean;
  clearForecasturi(): UnivariateForecastStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnivariateForecastStatus.AsObject;
  static toObject(includeInstance: boolean, msg: UnivariateForecastStatus): UnivariateForecastStatus.AsObject;
  static serializeBinaryToWriter(message: UnivariateForecastStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnivariateForecastStatus;
  static deserializeBinaryFromReader(message: UnivariateForecastStatus, reader: jspb.BinaryReader): UnivariateForecastStatus;
}

export namespace UnivariateForecastStatus {
  export type AsObject = {
    gridsearchresulturi?: string,
    baseestimator?: ClassicalEstimatorSpec.AsObject,
    modeluri?: string,
    cvresulturi?: string,
    forecasturi?: string,
  }
}

export class VideoPipelineSpec extends jspb.Message {
  getFeaturizer(): string;
  setFeaturizer(value: string): VideoPipelineSpec;
  hasFeaturizer(): boolean;
  clearFeaturizer(): VideoPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: VideoPipelineSpec): VideoPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: VideoPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoPipelineSpec;
  static deserializeBinaryFromReader(message: VideoPipelineSpec, reader: jspb.BinaryReader): VideoPipelineSpec;
}

export namespace VideoPipelineSpec {
  export type AsObject = {
    featurizer?: string,
  }
}

export class WindowSpec extends jspb.Message {
  getInterval(): string;
  setInterval(value: string): WindowSpec;
  hasInterval(): boolean;
  clearInterval(): WindowSpec;

  getStart(): number;
  setStart(value: number): WindowSpec;
  hasStart(): boolean;
  clearStart(): WindowSpec;

  getLength(): number;
  setLength(value: number): WindowSpec;
  hasLength(): boolean;
  clearLength(): WindowSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WindowSpec): WindowSpec.AsObject;
  static serializeBinaryToWriter(message: WindowSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowSpec;
  static deserializeBinaryFromReader(message: WindowSpec, reader: jspb.BinaryReader): WindowSpec;
}

export namespace WindowSpec {
  export type AsObject = {
    interval?: string,
    start?: number,
    length?: number,
  }
}

