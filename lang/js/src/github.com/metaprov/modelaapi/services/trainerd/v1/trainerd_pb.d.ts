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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): TrainRequest;
  hasVersion(): boolean;
  clearVersion(): TrainRequest;

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

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TrainRequest;
  hasDatasource(): boolean;
  clearDatasource(): TrainRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TrainRequest;
  hasDataset(): boolean;
  clearDataset(): TrainRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): TrainRequest;
  hasConnection(): boolean;
  clearConnection(): TrainRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): TrainRequest;

  getTestdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setTestdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TrainRequest;
  hasTestdataset(): boolean;
  clearTestdataset(): TrainRequest;

  getTraindataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setTraindataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TrainRequest;
  hasTraindataset(): boolean;
  clearTraindataset(): TrainRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    testdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    traindataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class TrainResponse extends jspb.Message {
  getResultList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setResultList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): TrainResponse;
  clearResultList(): TrainResponse;
  addResult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getWeightsclouduri(): string;
  setWeightsclouduri(value: string): TrainResponse;

  getManifestclouduri(): string;
  setManifestclouduri(value: string): TrainResponse;

  getLogsclouduri(): string;
  setLogsclouduri(value: string): TrainResponse;

  getLabelencoder(): string;
  setLabelencoder(value: string): TrainResponse;

  getPythonversioninfo(): string;
  setPythonversioninfo(value: string): TrainResponse;

  getPythoncmd(): string;
  setPythoncmd(value: string): TrainResponse;

  getOs(): string;
  setOs(value: string): TrainResponse;

  getPipfreezeMap(): jspb.Map<string, string>;
  clearPipfreezeMap(): TrainResponse;

  getFeaturesimportanceMap(): jspb.Map<string, number>;
  clearFeaturesimportanceMap(): TrainResponse;

  getCm(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setCm(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): TrainResponse;
  hasCm(): boolean;
  clearCm(): TrainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrainResponse): TrainResponse.AsObject;
  static serializeBinaryToWriter(message: TrainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainResponse;
  static deserializeBinaryFromReader(message: TrainResponse, reader: jspb.BinaryReader): TrainResponse;
}

export namespace TrainResponse {
  export type AsObject = {
    resultList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    weightsclouduri: string,
    manifestclouduri: string,
    logsclouduri: string,
    labelencoder: string,
    pythonversioninfo: string,
    pythoncmd: string,
    os: string,
    pipfreezeMap: Array<[string, string]>,
    featuresimportanceMap: Array<[string, number]>,
    cm?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
  }
}

export class CompileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CompileRequest;
  hasProduct(): boolean;
  clearProduct(): CompileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CompileRequest;
  hasVersion(): boolean;
  clearVersion(): CompileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CompileRequest;
  hasBucket(): boolean;
  clearBucket(): CompileRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): CompileRequest;
  hasModel(): boolean;
  clearModel(): CompileRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): CompileRequest;
  hasStudy(): boolean;
  clearStudy(): CompileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CompileRequest;
  hasDatasource(): boolean;
  clearDatasource(): CompileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CompileRequest;
  hasDataset(): boolean;
  clearDataset(): CompileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CompileRequest;
  hasConnection(): boolean;
  clearConnection(): CompileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CompileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompileRequest): CompileRequest.AsObject;
  static serializeBinaryToWriter(message: CompileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompileRequest;
  static deserializeBinaryFromReader(message: CompileRequest, reader: jspb.BinaryReader): CompileRequest;
}

export namespace CompileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class CompileResponse extends jspb.Message {
  getCompiledmodeluri(): string;
  setCompiledmodeluri(value: string): CompileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompileResponse): CompileResponse.AsObject;
  static serializeBinaryToWriter(message: CompileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompileResponse;
  static deserializeBinaryFromReader(message: CompileResponse, reader: jspb.BinaryReader): CompileResponse;
}

export namespace CompileResponse {
  export type AsObject = {
    compiledmodeluri: string,
  }
}

export class TestRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TestRequest;
  hasProduct(): boolean;
  clearProduct(): TestRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): TestRequest;
  hasVersion(): boolean;
  clearVersion(): TestRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TestRequest;
  hasBucket(): boolean;
  clearBucket(): TestRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TestRequest;
  hasModel(): boolean;
  clearModel(): TestRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TestRequest;
  hasStudy(): boolean;
  clearStudy(): TestRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TestRequest;
  hasDatasource(): boolean;
  clearDatasource(): TestRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TestRequest;
  hasDataset(): boolean;
  clearDataset(): TestRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): TestRequest;
  hasConnection(): boolean;
  clearConnection(): TestRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): TestRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class TestResponse extends jspb.Message {
  getTrainResultList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTrainResultList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): TestResponse;
  clearTrainResultList(): TestResponse;
  addTrainResult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getTestResultList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setTestResultList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): TestResponse;
  clearTestResultList(): TestResponse;
  addTestResult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getBenchmarkResultList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setBenchmarkResultList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): TestResponse;
  clearBenchmarkResultList(): TestResponse;
  addBenchmarkResult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getModelweightsclouduri(): string;
  setModelweightsclouduri(value: string): TestResponse;

  getModelmanifestclouduri(): string;
  setModelmanifestclouduri(value: string): TestResponse;

  getModellogsclouduri(): string;
  setModellogsclouduri(value: string): TestResponse;

  getPreweightsclouduri(): string;
  setPreweightsclouduri(value: string): TestResponse;

  getPremanifestclouduri(): string;
  setPremanifestclouduri(value: string): TestResponse;

  getPrelogsclouduri(): string;
  setPrelogsclouduri(value: string): TestResponse;

  getLabelencoder(): string;
  setLabelencoder(value: string): TestResponse;

  getPythoncmd(): string;
  setPythoncmd(value: string): TestResponse;

  getOs(): string;
  setOs(value: string): TestResponse;

  getPythonversioninfo(): string;
  setPythonversioninfo(value: string): TestResponse;

  getPipfreezeMap(): jspb.Map<string, string>;
  clearPipfreezeMap(): TestResponse;

  getMisclassuri(): string;
  setMisclassuri(value: string): TestResponse;

  getImpurityfeatureimportanceMap(): jspb.Map<string, number>;
  clearImpurityfeatureimportanceMap(): TestResponse;

  getPermutationfeatureimportanceMap(): jspb.Map<string, number>;
  clearPermutationfeatureimportanceMap(): TestResponse;

  getTraincm(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTraincm(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): TestResponse;
  hasTraincm(): boolean;
  clearTraincm(): TestResponse;

  getTestcm(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix | undefined;
  setTestcm(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix): TestResponse;
  hasTestcm(): boolean;
  clearTestcm(): TestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestResponse): TestResponse.AsObject;
  static serializeBinaryToWriter(message: TestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestResponse;
  static deserializeBinaryFromReader(message: TestResponse, reader: jspb.BinaryReader): TestResponse;
}

export namespace TestResponse {
  export type AsObject = {
    trainResultList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    testResultList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    benchmarkResultList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    modelweightsclouduri: string,
    modelmanifestclouduri: string,
    modellogsclouduri: string,
    preweightsclouduri: string,
    premanifestclouduri: string,
    prelogsclouduri: string,
    labelencoder: string,
    pythoncmd: string,
    os: string,
    pythonversioninfo: string,
    pipfreezeMap: Array<[string, string]>,
    misclassuri: string,
    impurityfeatureimportanceMap: Array<[string, number]>,
    permutationfeatureimportanceMap: Array<[string, number]>,
    traincm?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
    testcm?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ConfusionMatrix.AsObject,
  }
}

export class TrainEnsembleRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TrainEnsembleRequest;
  hasProduct(): boolean;
  clearProduct(): TrainEnsembleRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): TrainEnsembleRequest;
  hasVersion(): boolean;
  clearVersion(): TrainEnsembleRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TrainEnsembleRequest;
  hasBucket(): boolean;
  clearBucket(): TrainEnsembleRequest;

  getBaseList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setBaseList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): TrainEnsembleRequest;
  clearBaseList(): TrainEnsembleRequest;
  addBase(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TrainEnsembleRequest;
  hasModel(): boolean;
  clearModel(): TrainEnsembleRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TrainEnsembleRequest;
  hasStudy(): boolean;
  clearStudy(): TrainEnsembleRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TrainEnsembleRequest;
  hasDatasource(): boolean;
  clearDatasource(): TrainEnsembleRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TrainEnsembleRequest;
  hasDataset(): boolean;
  clearDataset(): TrainEnsembleRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): TrainEnsembleRequest;
  hasConnection(): boolean;
  clearConnection(): TrainEnsembleRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): TrainEnsembleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainEnsembleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrainEnsembleRequest): TrainEnsembleRequest.AsObject;
  static serializeBinaryToWriter(message: TrainEnsembleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainEnsembleRequest;
  static deserializeBinaryFromReader(message: TrainEnsembleRequest, reader: jspb.BinaryReader): TrainEnsembleRequest;
}

export namespace TrainEnsembleRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    baseList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class TestEnsembleRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TestEnsembleRequest;
  hasProduct(): boolean;
  clearProduct(): TestEnsembleRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): TestEnsembleRequest;
  hasVersion(): boolean;
  clearVersion(): TestEnsembleRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TestEnsembleRequest;
  hasBucket(): boolean;
  clearBucket(): TestEnsembleRequest;

  getBaseList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setBaseList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): TestEnsembleRequest;
  clearBaseList(): TestEnsembleRequest;
  addBase(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TestEnsembleRequest;
  hasModel(): boolean;
  clearModel(): TestEnsembleRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TestEnsembleRequest;
  hasStudy(): boolean;
  clearStudy(): TestEnsembleRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TestEnsembleRequest;
  hasDatasource(): boolean;
  clearDatasource(): TestEnsembleRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TestEnsembleRequest;
  hasDataset(): boolean;
  clearDataset(): TestEnsembleRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): TestEnsembleRequest;
  hasConnection(): boolean;
  clearConnection(): TestEnsembleRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): TestEnsembleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestEnsembleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestEnsembleRequest): TestEnsembleRequest.AsObject;
  static serializeBinaryToWriter(message: TestEnsembleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestEnsembleRequest;
  static deserializeBinaryFromReader(message: TestEnsembleRequest, reader: jspb.BinaryReader): TestEnsembleRequest;
}

export namespace TestEnsembleRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    baseList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class TrainDriftDetectorRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TrainDriftDetectorRequest;
  hasProduct(): boolean;
  clearProduct(): TrainDriftDetectorRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): TrainDriftDetectorRequest;
  hasVersion(): boolean;
  clearVersion(): TrainDriftDetectorRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TrainDriftDetectorRequest;
  hasBucket(): boolean;
  clearBucket(): TrainDriftDetectorRequest;

  getBaseList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setBaseList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): TrainDriftDetectorRequest;
  clearBaseList(): TrainDriftDetectorRequest;
  addBase(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TrainDriftDetectorRequest;
  hasModel(): boolean;
  clearModel(): TrainDriftDetectorRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TrainDriftDetectorRequest;
  hasStudy(): boolean;
  clearStudy(): TrainDriftDetectorRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TrainDriftDetectorRequest;
  hasDatasource(): boolean;
  clearDatasource(): TrainDriftDetectorRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TrainDriftDetectorRequest;
  hasDataset(): boolean;
  clearDataset(): TrainDriftDetectorRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): TrainDriftDetectorRequest;
  hasConnection(): boolean;
  clearConnection(): TrainDriftDetectorRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): TrainDriftDetectorRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    baseList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class ForecastRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): ForecastRequest;
  hasProduct(): boolean;
  clearProduct(): ForecastRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): ForecastRequest;
  hasVersion(): boolean;
  clearVersion(): ForecastRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): ForecastRequest;
  hasBucket(): boolean;
  clearBucket(): ForecastRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): ForecastRequest;
  hasModel(): boolean;
  clearModel(): ForecastRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): ForecastRequest;
  hasStudy(): boolean;
  clearStudy(): ForecastRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): ForecastRequest;
  hasDatasource(): boolean;
  clearDatasource(): ForecastRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): ForecastRequest;
  hasDataset(): boolean;
  clearDataset(): ForecastRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): ForecastRequest;
  hasConnection(): boolean;
  clearConnection(): ForecastRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): ForecastRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class ForecastResponse extends jspb.Message {
  getForecastclouduri(): string;
  setForecastclouduri(value: string): ForecastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastResponse): ForecastResponse.AsObject;
  static serializeBinaryToWriter(message: ForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastResponse;
  static deserializeBinaryFromReader(message: ForecastResponse, reader: jspb.BinaryReader): ForecastResponse;
}

export namespace ForecastResponse {
  export type AsObject = {
    forecastclouduri: string,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): ExplainRequest;
  hasVersion(): boolean;
  clearVersion(): ExplainRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): ExplainRequest;
  hasBucket(): boolean;
  clearBucket(): ExplainRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): ExplainRequest;
  hasModel(): boolean;
  clearModel(): ExplainRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): ExplainRequest;
  hasStudy(): boolean;
  clearStudy(): ExplainRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): ExplainRequest;
  hasDatasource(): boolean;
  clearDatasource(): ExplainRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): ExplainRequest;
  hasDataset(): boolean;
  clearDataset(): ExplainRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): ExplainRequest;
  hasConnection(): boolean;
  clearConnection(): ExplainRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): ExplainRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class ExplainResponse extends jspb.Message {
  getExplaineruri(): string;
  setExplaineruri(value: string): ExplainResponse;

  getTrainshapvaluesuri(): string;
  setTrainshapvaluesuri(value: string): ExplainResponse;

  getTestshapvaluesuri(): string;
  setTestshapvaluesuri(value: string): ExplainResponse;

  getShapfeaturesimportanceMap(): jspb.Map<string, number>;
  clearShapfeaturesimportanceMap(): ExplainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExplainResponse): ExplainResponse.AsObject;
  static serializeBinaryToWriter(message: ExplainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplainResponse;
  static deserializeBinaryFromReader(message: ExplainResponse, reader: jspb.BinaryReader): ExplainResponse;
}

export namespace ExplainResponse {
  export type AsObject = {
    explaineruri: string,
    trainshapvaluesuri: string,
    testshapvaluesuri: string,
    shapfeaturesimportanceMap: Array<[string, number]>,
  }
}

