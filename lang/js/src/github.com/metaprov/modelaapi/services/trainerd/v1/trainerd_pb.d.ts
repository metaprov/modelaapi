import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../k8s.io/api/core/v1/generated_pb';


export class TrainRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TrainRequest;
  hasProduct(): boolean;
  clearProduct(): TrainRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TrainRequest;
  hasDatasource(): boolean;
  clearDatasource(): TrainRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TrainRequest;
  hasDataset(): boolean;
  clearDataset(): TrainRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): TrainRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): TrainRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TrainRequest;
  hasBucket(): boolean;
  clearBucket(): TrainRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TrainRequest;
  hasModel(): boolean;
  clearModel(): TrainRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TrainRequest;
  hasStudy(): boolean;
  clearStudy(): TrainRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): TrainRequest;
  hasRun(): boolean;
  clearRun(): TrainRequest;

  getBasemodelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setBasemodelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): TrainRequest;
  clearBasemodelsList(): TrainRequest;
  addBasemodels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrainRequest): TrainRequest.AsObject;
  static serializeBinaryToWriter(message: TrainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainRequest;
  static deserializeBinaryFromReader(message: TrainRequest, reader: jspb.BinaryReader): TrainRequest;
}

export namespace TrainRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    run?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    basemodelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class TrainResponse extends jspb.Message {
  getResultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setResultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): TrainResponse;
  clearResultsList(): TrainResponse;
  addResults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getWeightslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setWeightslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): TrainResponse;
  hasWeightslocation(): boolean;
  clearWeightslocation(): TrainResponse;

  getLabelencoderlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setLabelencoderlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): TrainResponse;
  hasLabelencoderlocation(): boolean;
  clearLabelencoderlocation(): TrainResponse;

  getForecastlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setForecastlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): TrainResponse;
  hasForecastlocation(): boolean;
  clearForecastlocation(): TrainResponse;

  getProfilelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setProfilelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): TrainResponse;
  hasProfilelocation(): boolean;
  clearProfilelocation(): TrainResponse;

  getConfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setConfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): TrainResponse;
  hasConfusionmatrix(): boolean;
  clearConfusionmatrix(): TrainResponse;

  getPythonversioninfo(): string;
  setPythonversioninfo(value: string): TrainResponse;

  getOs(): string;
  setOs(value: string): TrainResponse;

  getPipfreezeMap(): jspb.Map<string, string>;
  clearPipfreezeMap(): TrainResponse;

  getImpurityfeatureimportanceMap(): jspb.Map<string, number>;
  clearImpurityfeatureimportanceMap(): TrainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrainResponse): TrainResponse.AsObject;
  static serializeBinaryToWriter(message: TrainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainResponse;
  static deserializeBinaryFromReader(message: TrainResponse, reader: jspb.BinaryReader): TrainResponse;
}

export namespace TrainResponse {
  export type AsObject = {
    resultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    weightslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    labelencoderlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    forecastlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    profilelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    confusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    pythonversioninfo: string,
    os: string,
    pipfreezeMap: Array<[string, string]>,
    impurityfeatureimportanceMap: Array<[string, number]>,
  }
}

export class TestRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TestRequest;
  hasProduct(): boolean;
  clearProduct(): TestRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TestRequest;
  hasDatasource(): boolean;
  clearDatasource(): TestRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TestRequest;
  hasDataset(): boolean;
  clearDataset(): TestRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): TestRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): TestRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TestRequest;
  hasModel(): boolean;
  clearModel(): TestRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TestRequest;
  hasStudy(): boolean;
  clearStudy(): TestRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): TestRequest;
  hasRun(): boolean;
  clearRun(): TestRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TestRequest;
  hasBucket(): boolean;
  clearBucket(): TestRequest;

  getBasemodelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setBasemodelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): TestRequest;
  clearBasemodelsList(): TestRequest;
  addBasemodels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestRequest): TestRequest.AsObject;
  static serializeBinaryToWriter(message: TestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestRequest;
  static deserializeBinaryFromReader(message: TestRequest, reader: jspb.BinaryReader): TestRequest;
}

export namespace TestRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    run?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    basemodelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class TestResponse extends jspb.Message {
  getTrainresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTrainresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): TestResponse;
  clearTrainresultsList(): TestResponse;
  addTrainresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTestresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTestresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): TestResponse;
  clearTestresultsList(): TestResponse;
  addTestresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTestweightslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTestweightslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): TestResponse;
  hasTestweightslocation(): boolean;
  clearTestweightslocation(): TestResponse;

  getFullweightslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setFullweightslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): TestResponse;
  hasFullweightslocation(): boolean;
  clearFullweightslocation(): TestResponse;

  getMisclasslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setMisclasslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): TestResponse;
  hasMisclasslocation(): boolean;
  clearMisclasslocation(): TestResponse;

  getPermutationfeatureimportanceMap(): jspb.Map<string, number>;
  clearPermutationfeatureimportanceMap(): TestResponse;

  getTrainconfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTrainconfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): TestResponse;
  hasTrainconfusionmatrix(): boolean;
  clearTrainconfusionmatrix(): TestResponse;

  getTestconfusionmatrix(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTestconfusionmatrix(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): TestResponse;
  hasTestconfusionmatrix(): boolean;
  clearTestconfusionmatrix(): TestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestResponse): TestResponse.AsObject;
  static serializeBinaryToWriter(message: TestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestResponse;
  static deserializeBinaryFromReader(message: TestResponse, reader: jspb.BinaryReader): TestResponse;
}

export namespace TestResponse {
  export type AsObject = {
    trainresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    testresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    testweightslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    fullweightslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    misclasslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    permutationfeatureimportanceMap: Array<[string, number]>,
    trainconfusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    testconfusionmatrix?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
  }
}

export class TrainDriftDetectorRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TrainDriftDetectorRequest;
  hasProduct(): boolean;
  clearProduct(): TrainDriftDetectorRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TrainDriftDetectorRequest;
  hasDatasource(): boolean;
  clearDatasource(): TrainDriftDetectorRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TrainDriftDetectorRequest;
  hasDataset(): boolean;
  clearDataset(): TrainDriftDetectorRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): TrainDriftDetectorRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): TrainDriftDetectorRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TrainDriftDetectorRequest;
  hasModel(): boolean;
  clearModel(): TrainDriftDetectorRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TrainDriftDetectorRequest;
  hasStudy(): boolean;
  clearStudy(): TrainDriftDetectorRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): TrainDriftDetectorRequest;
  hasRun(): boolean;
  clearRun(): TrainDriftDetectorRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TrainDriftDetectorRequest;
  hasBucket(): boolean;
  clearBucket(): TrainDriftDetectorRequest;

  getBasemodelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setBasemodelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): TrainDriftDetectorRequest;
  clearBasemodelsList(): TrainDriftDetectorRequest;
  addBasemodels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainDriftDetectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrainDriftDetectorRequest): TrainDriftDetectorRequest.AsObject;
  static serializeBinaryToWriter(message: TrainDriftDetectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainDriftDetectorRequest;
  static deserializeBinaryFromReader(message: TrainDriftDetectorRequest, reader: jspb.BinaryReader): TrainDriftDetectorRequest;
}

export namespace TrainDriftDetectorRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    run?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    basemodelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class ForecastRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): ForecastRequest;
  hasProduct(): boolean;
  clearProduct(): ForecastRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): ForecastRequest;
  hasDatasource(): boolean;
  clearDatasource(): ForecastRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): ForecastRequest;
  hasDataset(): boolean;
  clearDataset(): ForecastRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): ForecastRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): ForecastRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): ForecastRequest;
  hasModel(): boolean;
  clearModel(): ForecastRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): ForecastRequest;
  hasStudy(): boolean;
  clearStudy(): ForecastRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): ForecastRequest;
  hasRun(): boolean;
  clearRun(): ForecastRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): ForecastRequest;
  hasBucket(): boolean;
  clearBucket(): ForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastRequest): ForecastRequest.AsObject;
  static serializeBinaryToWriter(message: ForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastRequest;
  static deserializeBinaryFromReader(message: ForecastRequest, reader: jspb.BinaryReader): ForecastRequest;
}

export namespace ForecastRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    run?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class ForecastResponse extends jspb.Message {
  getForecastlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setForecastlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ForecastResponse;
  hasForecastlocation(): boolean;
  clearForecastlocation(): ForecastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastResponse): ForecastResponse.AsObject;
  static serializeBinaryToWriter(message: ForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastResponse;
  static deserializeBinaryFromReader(message: ForecastResponse, reader: jspb.BinaryReader): ForecastResponse;
}

export namespace ForecastResponse {
  export type AsObject = {
    forecastlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
  }
}

export class ShutdownRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownRequest): ShutdownRequest.AsObject;
  static serializeBinaryToWriter(message: ShutdownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownRequest;
  static deserializeBinaryFromReader(message: ShutdownRequest, reader: jspb.BinaryReader): ShutdownRequest;
}

export namespace ShutdownRequest {
  export type AsObject = {
  }
}

export class ShutdownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownResponse): ShutdownResponse.AsObject;
  static serializeBinaryToWriter(message: ShutdownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownResponse;
  static deserializeBinaryFromReader(message: ShutdownResponse, reader: jspb.BinaryReader): ShutdownResponse;
}

export namespace ShutdownResponse {
  export type AsObject = {
  }
}

export class ExplainRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): ExplainRequest;
  hasProduct(): boolean;
  clearProduct(): ExplainRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): ExplainRequest;
  hasDatasource(): boolean;
  clearDatasource(): ExplainRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): ExplainRequest;
  hasDataset(): boolean;
  clearDataset(): ExplainRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): ExplainRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): ExplainRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): ExplainRequest;
  hasModel(): boolean;
  clearModel(): ExplainRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): ExplainRequest;
  hasStudy(): boolean;
  clearStudy(): ExplainRequest;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun): ExplainRequest;
  hasRun(): boolean;
  clearRun(): ExplainRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): ExplainRequest;
  hasBucket(): boolean;
  clearBucket(): ExplainRequest;

  getBasemodelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setBasemodelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): ExplainRequest;
  clearBasemodelsList(): ExplainRequest;
  addBasemodels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExplainRequest): ExplainRequest.AsObject;
  static serializeBinaryToWriter(message: ExplainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplainRequest;
  static deserializeBinaryFromReader(message: ExplainRequest, reader: jspb.BinaryReader): ExplainRequest;
}

export namespace ExplainRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    run?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    basemodelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class ExplainResponse extends jspb.Message {
  getExplainerlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setExplainerlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ExplainResponse;
  hasExplainerlocation(): boolean;
  clearExplainerlocation(): ExplainResponse;

  getTrainshapvalueslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTrainshapvalueslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ExplainResponse;
  hasTrainshapvalueslocation(): boolean;
  clearTrainshapvalueslocation(): ExplainResponse;

  getTestshapvalueslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTestshapvalueslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): ExplainResponse;
  hasTestshapvalueslocation(): boolean;
  clearTestshapvalueslocation(): ExplainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExplainResponse): ExplainResponse.AsObject;
  static serializeBinaryToWriter(message: ExplainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplainResponse;
  static deserializeBinaryFromReader(message: ExplainResponse, reader: jspb.BinaryReader): ExplainResponse;
}

export namespace ExplainResponse {
  export type AsObject = {
    explainerlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    trainshapvalueslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    testshapvalueslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
  }
}

