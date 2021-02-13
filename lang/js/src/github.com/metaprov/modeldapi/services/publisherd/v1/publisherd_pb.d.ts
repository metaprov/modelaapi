import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class PublishNotebookRequest extends jspb.Message {
  getNotebookname(): string;
  setNotebookname(value: string): PublishNotebookRequest;

  getNotebooknamespace(): string;
  setNotebooknamespace(value: string): PublishNotebookRequest;

  getNotebookspec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookSpec | undefined;
  setNotebookspec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookSpec): PublishNotebookRequest;
  hasNotebookspec(): boolean;
  clearNotebookspec(): PublishNotebookRequest;

  getNotebookcontent(): string;
  setNotebookcontent(value: string): PublishNotebookRequest;

  getDockerfile(): string;
  setDockerfile(value: string): PublishNotebookRequest;

  getProvider(): string;
  setProvider(value: string): PublishNotebookRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): PublishNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishNotebookRequest): PublishNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: PublishNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishNotebookRequest;
  static deserializeBinaryFromReader(message: PublishNotebookRequest, reader: jspb.BinaryReader): PublishNotebookRequest;
}

export namespace PublishNotebookRequest {
  export type AsObject = {
    notebookname: string,
    notebooknamespace: string,
    notebookspec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookSpec.AsObject,
    notebookcontent: string,
    dockerfile: string,
    provider: string,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class PublishNotebookResponse extends jspb.Message {
  getImagename(): string;
  setImagename(value: string): PublishNotebookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishNotebookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishNotebookResponse): PublishNotebookResponse.AsObject;
  static serializeBinaryToWriter(message: PublishNotebookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishNotebookResponse;
  static deserializeBinaryFromReader(message: PublishNotebookResponse, reader: jspb.BinaryReader): PublishNotebookResponse;
}

export namespace PublishNotebookResponse {
  export type AsObject = {
    imagename: string,
  }
}

export class PublishModelRequest extends jspb.Message {
  getDataproductname(): string;
  setDataproductname(value: string): PublishModelRequest;

  getDataproductnamespace(): string;
  setDataproductnamespace(value: string): PublishModelRequest;

  getDataproductspec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductSpec | undefined;
  setDataproductspec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductSpec): PublishModelRequest;
  hasDataproductspec(): boolean;
  clearDataproductspec(): PublishModelRequest;

  getDataproductversionname(): string;
  setDataproductversionname(value: string): PublishModelRequest;

  getDataproductversionnamespace(): string;
  setDataproductversionnamespace(value: string): PublishModelRequest;

  getDataproductversionspec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersionSpec | undefined;
  setDataproductversionspec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersionSpec): PublishModelRequest;
  hasDataproductversionspec(): boolean;
  clearDataproductversionspec(): PublishModelRequest;

  getModelname(): string;
  setModelname(value: string): PublishModelRequest;

  getModelnamespace(): string;
  setModelnamespace(value: string): PublishModelRequest;

  getModelspec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec | undefined;
  setModelspec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec): PublishModelRequest;
  hasModelspec(): boolean;
  clearModelspec(): PublishModelRequest;

  getStudyname(): string;
  setStudyname(value: string): PublishModelRequest;

  getStudynamespace(): string;
  setStudynamespace(value: string): PublishModelRequest;

  getStudyspec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec | undefined;
  setStudyspec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec): PublishModelRequest;
  hasStudyspec(): boolean;
  clearStudyspec(): PublishModelRequest;

  getDatasourcename(): string;
  setDatasourcename(value: string): PublishModelRequest;

  getDatasourcenamespace(): string;
  setDatasourcenamespace(value: string): PublishModelRequest;

  getDatasourcespec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec | undefined;
  setDatasourcespec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec): PublishModelRequest;
  hasDatasourcespec(): boolean;
  clearDatasourcespec(): PublishModelRequest;

  getDatasetname(): string;
  setDatasetname(value: string): PublishModelRequest;

  getDatasetnamespace(): string;
  setDatasetnamespace(value: string): PublishModelRequest;

  getDatasetspec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec | undefined;
  setDatasetspec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec): PublishModelRequest;
  hasDatasetspec(): boolean;
  clearDatasetspec(): PublishModelRequest;

  getProvider(): string;
  setProvider(value: string): PublishModelRequest;

  getImagename(): string;
  setImagename(value: string): PublishModelRequest;

  getPush(): boolean;
  setPush(value: boolean): PublishModelRequest;

  getBucketname(): string;
  setBucketname(value: string): PublishModelRequest;

  getBucketnamespace(): string;
  setBucketnamespace(value: string): PublishModelRequest;

  getBucketspec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec | undefined;
  setBucketspec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec): PublishModelRequest;
  hasBucketspec(): boolean;
  clearBucketspec(): PublishModelRequest;

  getCloudconnectionname(): string;
  setCloudconnectionname(value: string): PublishModelRequest;

  getCloudsconnectionnamespace(): string;
  setCloudsconnectionnamespace(value: string): PublishModelRequest;

  getCloudconnectionspec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec | undefined;
  setCloudconnectionspec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec): PublishModelRequest;
  hasCloudconnectionspec(): boolean;
  clearCloudconnectionspec(): PublishModelRequest;

  getCloudsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearCloudsecretMap(): PublishModelRequest;

  getDockerconnectionname(): string;
  setDockerconnectionname(value: string): PublishModelRequest;

  getDockerconnectionnamespace(): string;
  setDockerconnectionnamespace(value: string): PublishModelRequest;

  getDockerconnectionspec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec | undefined;
  setDockerconnectionspec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec): PublishModelRequest;
  hasDockerconnectionspec(): boolean;
  clearDockerconnectionspec(): PublishModelRequest;

  getDockerregistrysecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDockerregistrysecretMap(): PublishModelRequest;

  getModelweightsuri(): string;
  setModelweightsuri(value: string): PublishModelRequest;

  getPreprocessorweightsuri(): string;
  setPreprocessorweightsuri(value: string): PublishModelRequest;

  getLabelencoderuri(): string;
  setLabelencoderuri(value: string): PublishModelRequest;

  getKaniko(): boolean;
  setKaniko(value: boolean): PublishModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishModelRequest): PublishModelRequest.AsObject;
  static serializeBinaryToWriter(message: PublishModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishModelRequest;
  static deserializeBinaryFromReader(message: PublishModelRequest, reader: jspb.BinaryReader): PublishModelRequest;
}

export namespace PublishModelRequest {
  export type AsObject = {
    dataproductname: string,
    dataproductnamespace: string,
    dataproductspec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductSpec.AsObject,
    dataproductversionname: string,
    dataproductversionnamespace: string,
    dataproductversionspec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersionSpec.AsObject,
    modelname: string,
    modelnamespace: string,
    modelspec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.AsObject,
    studyname: string,
    studynamespace: string,
    studyspec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.AsObject,
    datasourcename: string,
    datasourcenamespace: string,
    datasourcespec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.AsObject,
    datasetname: string,
    datasetnamespace: string,
    datasetspec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.AsObject,
    provider: string,
    imagename: string,
    push: boolean,
    bucketname: string,
    bucketnamespace: string,
    bucketspec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec.AsObject,
    cloudconnectionname: string,
    cloudsconnectionnamespace: string,
    cloudconnectionspec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.AsObject,
    cloudsecretMap: Array<[string, Uint8Array | string]>,
    dockerconnectionname: string,
    dockerconnectionnamespace: string,
    dockerconnectionspec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.AsObject,
    dockerregistrysecretMap: Array<[string, Uint8Array | string]>,
    modelweightsuri: string,
    preprocessorweightsuri: string,
    labelencoderuri: string,
    kaniko: boolean,
  }
}

export class PublishModelResponse extends jspb.Message {
  getImagename(): string;
  setImagename(value: string): PublishModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishModelResponse): PublishModelResponse.AsObject;
  static serializeBinaryToWriter(message: PublishModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishModelResponse;
  static deserializeBinaryFromReader(message: PublishModelResponse, reader: jspb.BinaryReader): PublishModelResponse;
}

export namespace PublishModelResponse {
  export type AsObject = {
    imagename: string,
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

