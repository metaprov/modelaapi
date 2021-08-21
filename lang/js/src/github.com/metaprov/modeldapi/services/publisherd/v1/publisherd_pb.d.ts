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
  getDataproduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): PublishModelRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): PublishModelRequest;

  getDataproductversion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setDataproductversion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): PublishModelRequest;
  hasDataproductversion(): boolean;
  clearDataproductversion(): PublishModelRequest;

  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): PublishModelRequest;
  hasModel(): boolean;
  clearModel(): PublishModelRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): PublishModelRequest;
  hasStudy(): boolean;
  clearStudy(): PublishModelRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): PublishModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): PublishModelRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): PublishModelRequest;
  hasDataset(): boolean;
  clearDataset(): PublishModelRequest;

  getProvider(): string;
  setProvider(value: string): PublishModelRequest;

  getImagename(): string;
  setImagename(value: string): PublishModelRequest;

  getImagenamewithversion(): string;
  setImagenamewithversion(value: string): PublishModelRequest;

  getPush(): boolean;
  setPush(value: boolean): PublishModelRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): PublishModelRequest;
  hasBucket(): boolean;
  clearBucket(): PublishModelRequest;

  getCloudconn(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setCloudconn(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): PublishModelRequest;
  hasCloudconn(): boolean;
  clearCloudconn(): PublishModelRequest;

  getCloudsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearCloudsecretMap(): PublishModelRequest;

  getDockerconnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDockerconnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): PublishModelRequest;
  hasDockerconnection(): boolean;
  clearDockerconnection(): PublishModelRequest;

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
    dataproduct?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    dataproductversion?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    provider: string,
    imagename: string,
    imagenamewithversion: string,
    push: boolean,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    cloudconn?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    cloudsecretMap: Array<[string, Uint8Array | string]>,
    dockerconnection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
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

export class TarModelRequest extends jspb.Message {
  getDataproduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TarModelRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): TarModelRequest;

  getDataproductversion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setDataproductversion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): TarModelRequest;
  hasDataproductversion(): boolean;
  clearDataproductversion(): TarModelRequest;

  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): TarModelRequest;
  hasModel(): boolean;
  clearModel(): TarModelRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): TarModelRequest;
  hasStudy(): boolean;
  clearStudy(): TarModelRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TarModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): TarModelRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TarModelRequest;
  hasDataset(): boolean;
  clearDataset(): TarModelRequest;

  getProvider(): string;
  setProvider(value: string): TarModelRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): TarModelRequest;
  hasBucket(): boolean;
  clearBucket(): TarModelRequest;

  getCloudconn(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setCloudconn(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): TarModelRequest;
  hasCloudconn(): boolean;
  clearCloudconn(): TarModelRequest;

  getCloudsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearCloudsecretMap(): TarModelRequest;

  getModelweightsuri(): string;
  setModelweightsuri(value: string): TarModelRequest;

  getPreprocessorweightsuri(): string;
  setPreprocessorweightsuri(value: string): TarModelRequest;

  getLabelencoderuri(): string;
  setLabelencoderuri(value: string): TarModelRequest;

  getModelreporturi(): string;
  setModelreporturi(value: string): TarModelRequest;

  getDatasetreporturi(): string;
  setDatasetreporturi(value: string): TarModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TarModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TarModelRequest): TarModelRequest.AsObject;
  static serializeBinaryToWriter(message: TarModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TarModelRequest;
  static deserializeBinaryFromReader(message: TarModelRequest, reader: jspb.BinaryReader): TarModelRequest;
}

export namespace TarModelRequest {
  export type AsObject = {
    dataproduct?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    dataproductversion?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    provider: string,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    cloudconn?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    cloudsecretMap: Array<[string, Uint8Array | string]>,
    modelweightsuri: string,
    preprocessorweightsuri: string,
    labelencoderuri: string,
    modelreporturi: string,
    datasetreporturi: string,
  }
}

export class TarModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TarModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TarModelResponse): TarModelResponse.AsObject;
  static serializeBinaryToWriter(message: TarModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TarModelResponse;
  static deserializeBinaryFromReader(message: TarModelResponse, reader: jspb.BinaryReader): TarModelResponse;
}

export namespace TarModelResponse {
  export type AsObject = {
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

