import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';


export class PublishModelRequest extends jspb.Message {
  getDataproduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): PublishModelRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): PublishModelRequest;

  getDataproductversion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setDataproductversion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): PublishModelRequest;
  hasDataproductversion(): boolean;
  clearDataproductversion(): PublishModelRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): PublishModelRequest;
  hasModel(): boolean;
  clearModel(): PublishModelRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): PublishModelRequest;
  hasStudy(): boolean;
  clearStudy(): PublishModelRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): PublishModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): PublishModelRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): PublishModelRequest;
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

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): PublishModelRequest;
  hasBucket(): boolean;
  clearBucket(): PublishModelRequest;

  getCloudconn(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setCloudconn(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): PublishModelRequest;
  hasCloudconn(): boolean;
  clearCloudconn(): PublishModelRequest;

  getCloudsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearCloudsecretMap(): PublishModelRequest;

  getDockerconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDockerconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): PublishModelRequest;
  hasDockerconnection(): boolean;
  clearDockerconnection(): PublishModelRequest;

  getDockerregistrysecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDockerregistrysecretMap(): PublishModelRequest;

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
    dataproduct?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    dataproductversion?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    provider: string,
    imagename: string,
    imagenamewithversion: string,
    push: boolean,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    cloudconn?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    cloudsecretMap: Array<[string, Uint8Array | string]>,
    dockerconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dockerregistrysecretMap: Array<[string, Uint8Array | string]>,
    kaniko: boolean,
  }
}

export class PublishModelResponse extends jspb.Message {
  getImagename(): string;
  setImagename(value: string): PublishModelResponse;

  getHash(): string;
  setHash(value: string): PublishModelResponse;

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
    hash: string,
  }
}

export class PackageModelRequest extends jspb.Message {
  getDataproduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): PackageModelRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): PackageModelRequest;

  getDataproductversion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setDataproductversion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): PackageModelRequest;
  hasDataproductversion(): boolean;
  clearDataproductversion(): PackageModelRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): PackageModelRequest;
  hasModel(): boolean;
  clearModel(): PackageModelRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): PackageModelRequest;
  hasStudy(): boolean;
  clearStudy(): PackageModelRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): PackageModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): PackageModelRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): PackageModelRequest;
  hasDataset(): boolean;
  clearDataset(): PackageModelRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): PackageModelRequest;
  hasBucket(): boolean;
  clearBucket(): PackageModelRequest;

  getCloudconn(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setCloudconn(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): PackageModelRequest;
  hasCloudconn(): boolean;
  clearCloudconn(): PackageModelRequest;

  getCloudsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearCloudsecretMap(): PackageModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PackageModelRequest): PackageModelRequest.AsObject;
  static serializeBinaryToWriter(message: PackageModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageModelRequest;
  static deserializeBinaryFromReader(message: PackageModelRequest, reader: jspb.BinaryReader): PackageModelRequest;
}

export namespace PackageModelRequest {
  export type AsObject = {
    dataproduct?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    dataproductversion?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    cloudconn?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    cloudsecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class PackageModelResponse extends jspb.Message {
  getTaruri(): string;
  setTaruri(value: string): PackageModelResponse;

  getHash(): string;
  setHash(value: string): PackageModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PackageModelResponse): PackageModelResponse.AsObject;
  static serializeBinaryToWriter(message: PackageModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageModelResponse;
  static deserializeBinaryFromReader(message: PackageModelResponse, reader: jspb.BinaryReader): PackageModelResponse;
}

export namespace PackageModelResponse {
  export type AsObject = {
    taruri: string,
    hash: string,
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

