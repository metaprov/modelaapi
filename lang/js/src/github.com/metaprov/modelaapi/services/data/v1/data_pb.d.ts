import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../k8s.io/api/core/v1/generated_pb';


export class DsReadFileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadFileRequest;
  hasProduct(): boolean;
  clearProduct(): DsReadFileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadFileRequest;
  hasVersion(): boolean;
  clearVersion(): DsReadFileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadFileRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadFileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadFileRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadFileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsReadFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadFileRequest): DsReadFileRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadFileRequest;
  static deserializeBinaryFromReader(message: DsReadFileRequest, reader: jspb.BinaryReader): DsReadFileRequest;
}

export namespace DsReadFileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsReadFeatureRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadFeatureRequest;
  hasProduct(): boolean;
  clearProduct(): DsReadFeatureRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadFeatureRequest;
  hasVersion(): boolean;
  clearVersion(): DsReadFeatureRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadFeatureRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadFeatureRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadFeatureRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadFeatureRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsReadFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadFeatureRequest): DsReadFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadFeatureRequest;
  static deserializeBinaryFromReader(message: DsReadFeatureRequest, reader: jspb.BinaryReader): DsReadFeatureRequest;
}

export namespace DsReadFeatureRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsWriteFileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsWriteFileRequest;
  hasProduct(): boolean;
  clearProduct(): DsWriteFileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsWriteFileRequest;
  hasVersion(): boolean;
  clearVersion(): DsWriteFileRequest;

  getContent(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setContent(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsWriteFileRequest;
  hasContent(): boolean;
  clearContent(): DsWriteFileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsWriteFileRequest;
  hasBucket(): boolean;
  clearBucket(): DsWriteFileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsWriteFileRequest;
  hasConnection(): boolean;
  clearConnection(): DsWriteFileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsWriteFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsWriteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsWriteFileRequest): DsWriteFileRequest.AsObject;
  static serializeBinaryToWriter(message: DsWriteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsWriteFileRequest;
  static deserializeBinaryFromReader(message: DsWriteFileRequest, reader: jspb.BinaryReader): DsWriteFileRequest;
}

export namespace DsWriteFileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    content?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsReadAudioRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadAudioRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadAudioRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadAudioRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadAudioRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsReadAudioRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadAudioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadAudioRequest): DsReadAudioRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadAudioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadAudioRequest;
  static deserializeBinaryFromReader(message: DsReadAudioRequest, reader: jspb.BinaryReader): DsReadAudioRequest;
}

export namespace DsReadAudioRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsReadTextCorpusRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadTextCorpusRequest;
  hasProduct(): boolean;
  clearProduct(): DsReadTextCorpusRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadTextCorpusRequest;
  hasVersion(): boolean;
  clearVersion(): DsReadTextCorpusRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadTextCorpusRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadTextCorpusRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadTextCorpusRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadTextCorpusRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsReadTextCorpusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadTextCorpusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadTextCorpusRequest): DsReadTextCorpusRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadTextCorpusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadTextCorpusRequest;
  static deserializeBinaryFromReader(message: DsReadTextCorpusRequest, reader: jspb.BinaryReader): DsReadTextCorpusRequest;
}

export namespace DsReadTextCorpusRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsReadFromStoreResponse extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadFromStoreResponse;
  hasProduct(): boolean;
  clearProduct(): DsReadFromStoreResponse;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadFromStoreResponse;
  hasVersion(): boolean;
  clearVersion(): DsReadFromStoreResponse;

  getResult(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setResult(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsReadFromStoreResponse;
  hasResult(): boolean;
  clearResult(): DsReadFromStoreResponse;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadFromStoreResponse;
  hasBucket(): boolean;
  clearBucket(): DsReadFromStoreResponse;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadFromStoreResponse;
  hasConnection(): boolean;
  clearConnection(): DsReadFromStoreResponse;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsReadFromStoreResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadFromStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadFromStoreResponse): DsReadFromStoreResponse.AsObject;
  static serializeBinaryToWriter(message: DsReadFromStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadFromStoreResponse;
  static deserializeBinaryFromReader(message: DsReadFromStoreResponse, reader: jspb.BinaryReader): DsReadFromStoreResponse;
}

export namespace DsReadFromStoreResponse {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    result?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsRunDataPipelineRequest extends jspb.Message {
  getPipeline(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setPipeline(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): DsRunDataPipelineRequest;
  hasPipeline(): boolean;
  clearPipeline(): DsRunDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunDataPipelineRequest): DsRunDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DsRunDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunDataPipelineRequest;
  static deserializeBinaryFromReader(message: DsRunDataPipelineRequest, reader: jspb.BinaryReader): DsRunDataPipelineRequest;
}

export namespace DsRunDataPipelineRequest {
  export type AsObject = {
    pipeline?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class DsRunDataPipelineResponse extends jspb.Message {
  getResult(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setResult(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsRunDataPipelineResponse;
  hasResult(): boolean;
  clearResult(): DsRunDataPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunDataPipelineResponse): DsRunDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DsRunDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunDataPipelineResponse;
  static deserializeBinaryFromReader(message: DsRunDataPipelineResponse, reader: jspb.BinaryReader): DsRunDataPipelineResponse;
}

export namespace DsRunDataPipelineResponse {
  export type AsObject = {
    result?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DsRunRecipeRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsRunRecipeRequest;
  hasProduct(): boolean;
  clearProduct(): DsRunRecipeRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsRunRecipeRequest;
  hasVersion(): boolean;
  clearVersion(): DsRunRecipeRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsRunRecipeRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsRunRecipeRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsRunRecipeRequest;
  hasDataset(): boolean;
  clearDataset(): DsRunRecipeRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsRunRecipeRequest;
  hasBucket(): boolean;
  clearBucket(): DsRunRecipeRequest;

  getStorageconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setStorageconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsRunRecipeRequest;
  hasStorageconnection(): boolean;
  clearStorageconnection(): DsRunRecipeRequest;

  getStoragesecretMap(): jspb.Map<string, Uint8Array | string>;
  clearStoragesecretMap(): DsRunRecipeRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsRunRecipeRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): DsRunRecipeRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): DsRunRecipeRequest;

  getRecipe(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setRecipe(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): DsRunRecipeRequest;
  hasRecipe(): boolean;
  clearRecipe(): DsRunRecipeRequest;

  getReciperun(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setReciperun(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): DsRunRecipeRequest;
  hasReciperun(): boolean;
  clearReciperun(): DsRunRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunRecipeRequest): DsRunRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: DsRunRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunRecipeRequest;
  static deserializeBinaryFromReader(message: DsRunRecipeRequest, reader: jspb.BinaryReader): DsRunRecipeRequest;
}

export namespace DsRunRecipeRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    storageconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    storagesecretMap: Array<[string, Uint8Array | string]>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    recipe?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
    reciperun?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
  }
}

export class DsRunRecipeResponse extends jspb.Message {
  getResult(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setResult(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): DsRunRecipeResponse;
  hasResult(): boolean;
  clearResult(): DsRunRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunRecipeResponse): DsRunRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: DsRunRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunRecipeResponse;
  static deserializeBinaryFromReader(message: DsRunRecipeResponse, reader: jspb.BinaryReader): DsRunRecipeResponse;
}

export namespace DsRunRecipeResponse {
  export type AsObject = {
    result?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class DsCreateRecipeProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateRecipeProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateRecipeProfileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateRecipeProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateRecipeProfileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateRecipeProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateRecipeProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateRecipeProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateRecipeProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateRecipeProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateRecipeProfileRequest;

  getStorageconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setStorageconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateRecipeProfileRequest;
  hasStorageconnection(): boolean;
  clearStorageconnection(): DsCreateRecipeProfileRequest;

  getStoragesecretMap(): jspb.Map<string, Uint8Array | string>;
  clearStoragesecretMap(): DsCreateRecipeProfileRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateRecipeProfileRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): DsCreateRecipeProfileRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): DsCreateRecipeProfileRequest;

  getRecipe(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setRecipe(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): DsCreateRecipeProfileRequest;
  hasRecipe(): boolean;
  clearRecipe(): DsCreateRecipeProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateRecipeProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateRecipeProfileRequest): DsCreateRecipeProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateRecipeProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateRecipeProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateRecipeProfileRequest, reader: jspb.BinaryReader): DsCreateRecipeProfileRequest;
}

export namespace DsCreateRecipeProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    storageconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    storagesecretMap: Array<[string, Uint8Array | string]>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    recipe?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class DsCreateRecipeProfileResponse extends jspb.Message {
  getResult(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setResult(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): DsCreateRecipeProfileResponse;
  hasResult(): boolean;
  clearResult(): DsCreateRecipeProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateRecipeProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateRecipeProfileResponse): DsCreateRecipeProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateRecipeProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateRecipeProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateRecipeProfileResponse, reader: jspb.BinaryReader): DsCreateRecipeProfileResponse;
}

export namespace DsCreateRecipeProfileResponse {
  export type AsObject = {
    result?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

export class DataSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceResponse): DataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: DataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceResponse;
  static deserializeBinaryFromReader(message: DataSourceResponse, reader: jspb.BinaryReader): DataSourceResponse;
}

export namespace DataSourceResponse {
  export type AsObject = {
  }
}

export class DatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetResponse): DatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetResponse;
  static deserializeBinaryFromReader(message: DatasetResponse, reader: jspb.BinaryReader): DatasetResponse;
}

export namespace DatasetResponse {
  export type AsObject = {
  }
}

export class DsCreateDatasetProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateDatasetProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateDatasetProfileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateDatasetProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateDatasetProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateDatasetProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateDatasetProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateDatasetProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateDatasetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateDatasetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateDatasetProfileRequest): DsCreateDatasetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateDatasetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateDatasetProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateDatasetProfileRequest, reader: jspb.BinaryReader): DsCreateDatasetProfileRequest;
}

export namespace DsCreateDatasetProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class DsCreateDatasetProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile): DsCreateDatasetProfileResponse;
  hasProfile(): boolean;
  clearProfile(): DsCreateDatasetProfileResponse;

  getProfilelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setProfilelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DsCreateDatasetProfileResponse;
  hasProfilelocation(): boolean;
  clearProfilelocation(): DsCreateDatasetProfileResponse;

  getAnomalylocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setAnomalylocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DsCreateDatasetProfileResponse;
  hasAnomalylocation(): boolean;
  clearAnomalylocation(): DsCreateDatasetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateDatasetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateDatasetProfileResponse): DsCreateDatasetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateDatasetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateDatasetProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateDatasetProfileResponse, reader: jspb.BinaryReader): DsCreateDatasetProfileResponse;
}

export namespace DsCreateDatasetProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
    profilelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    anomalylocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
  }
}

export class DsCreateModelProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateModelProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateModelProfileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateModelProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateModelProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateModelProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateModelProfileRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsCreateModelProfileRequest;
  hasStudy(): boolean;
  clearStudy(): DsCreateModelProfileRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsCreateModelProfileRequest;
  hasModel(): boolean;
  clearModel(): DsCreateModelProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateModelProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateModelProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateModelProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateModelProfileRequest): DsCreateModelProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateModelProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateModelProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateModelProfileRequest, reader: jspb.BinaryReader): DsCreateModelProfileRequest;
}

export namespace DsCreateModelProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class DsCreateModelProfileResponse extends jspb.Message {
  getProfilelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setProfilelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DsCreateModelProfileResponse;
  hasProfilelocation(): boolean;
  clearProfilelocation(): DsCreateModelProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateModelProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateModelProfileResponse): DsCreateModelProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateModelProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateModelProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateModelProfileResponse, reader: jspb.BinaryReader): DsCreateModelProfileResponse;
}

export namespace DsCreateModelProfileResponse {
  export type AsObject = {
    profilelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
  }
}

export class DsMergeForecastFileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsMergeForecastFileRequest;
  hasProduct(): boolean;
  clearProduct(): DsMergeForecastFileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsMergeForecastFileRequest;
  hasVersion(): boolean;
  clearVersion(): DsMergeForecastFileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsMergeForecastFileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsMergeForecastFileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsMergeForecastFileRequest;
  hasDataset(): boolean;
  clearDataset(): DsMergeForecastFileRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsMergeForecastFileRequest;
  hasStudy(): boolean;
  clearStudy(): DsMergeForecastFileRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsMergeForecastFileRequest;
  hasModel(): boolean;
  clearModel(): DsMergeForecastFileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsMergeForecastFileRequest;
  hasConnection(): boolean;
  clearConnection(): DsMergeForecastFileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsMergeForecastFileRequest;
  hasBucket(): boolean;
  clearBucket(): DsMergeForecastFileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsMergeForecastFileRequest;

  getForecastsList(): Array<string>;
  setForecastsList(value: Array<string>): DsMergeForecastFileRequest;
  clearForecastsList(): DsMergeForecastFileRequest;
  addForecasts(value: string, index?: number): DsMergeForecastFileRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsMergeForecastFileRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): DsMergeForecastFileRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): DsMergeForecastFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsMergeForecastFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsMergeForecastFileRequest): DsMergeForecastFileRequest.AsObject;
  static serializeBinaryToWriter(message: DsMergeForecastFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsMergeForecastFileRequest;
  static deserializeBinaryFromReader(message: DsMergeForecastFileRequest, reader: jspb.BinaryReader): DsMergeForecastFileRequest;
}

export namespace DsMergeForecastFileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    forecastsList: Array<string>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsMergeForecastFileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsMergeForecastFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsMergeForecastFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsMergeForecastFileResponse): DsMergeForecastFileResponse.AsObject;
  static serializeBinaryToWriter(message: DsMergeForecastFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsMergeForecastFileResponse;
  static deserializeBinaryFromReader(message: DsMergeForecastFileResponse, reader: jspb.BinaryReader): DsMergeForecastFileResponse;
}

export namespace DsMergeForecastFileResponse {
  export type AsObject = {
    uri: string,
  }
}

export class DsCreateStudyProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateStudyProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateStudyProfileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateStudyProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateStudyProfileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateStudyProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateStudyProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateStudyProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateStudyProfileRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsCreateStudyProfileRequest;
  hasStudy(): boolean;
  clearStudy(): DsCreateStudyProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateStudyProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateStudyProfileRequest;

  getModelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): DsCreateStudyProfileRequest;
  clearModelsList(): DsCreateStudyProfileRequest;
  addModels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateStudyProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateStudyProfileRequest): DsCreateStudyProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateStudyProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateStudyProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateStudyProfileRequest, reader: jspb.BinaryReader): DsCreateStudyProfileRequest;
}

export namespace DsCreateStudyProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    modelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class DsCreateStudyProfileResponse extends jspb.Message {
  getProfilelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setProfilelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DsCreateStudyProfileResponse;
  hasProfilelocation(): boolean;
  clearProfilelocation(): DsCreateStudyProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateStudyProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateStudyProfileResponse): DsCreateStudyProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateStudyProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateStudyProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateStudyProfileResponse, reader: jspb.BinaryReader): DsCreateStudyProfileResponse;
}

export namespace DsCreateStudyProfileResponse {
  export type AsObject = {
    profilelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
  }
}

export class RunTestSuiteRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): RunTestSuiteRequest;
  hasProduct(): boolean;
  clearProduct(): RunTestSuiteRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): RunTestSuiteRequest;
  hasDatasource(): boolean;
  clearDatasource(): RunTestSuiteRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): RunTestSuiteRequest;
  hasDataset(): boolean;
  clearDataset(): RunTestSuiteRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): RunTestSuiteRequest;
  hasStudy(): boolean;
  clearStudy(): RunTestSuiteRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): RunTestSuiteRequest;
  hasModel(): boolean;
  clearModel(): RunTestSuiteRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): RunTestSuiteRequest;
  hasConnection(): boolean;
  clearConnection(): RunTestSuiteRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): RunTestSuiteRequest;
  hasBucket(): boolean;
  clearBucket(): RunTestSuiteRequest;

  getHistogram(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
  setHistogram(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): RunTestSuiteRequest;
  hasHistogram(): boolean;
  clearHistogram(): RunTestSuiteRequest;

  getRefhistogram(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
  setRefhistogram(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): RunTestSuiteRequest;
  hasRefhistogram(): boolean;
  clearRefhistogram(): RunTestSuiteRequest;

  getSuite(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setSuite(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): RunTestSuiteRequest;
  hasSuite(): boolean;
  clearSuite(): RunTestSuiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunTestSuiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunTestSuiteRequest): RunTestSuiteRequest.AsObject;
  static serializeBinaryToWriter(message: RunTestSuiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunTestSuiteRequest;
  static deserializeBinaryFromReader(message: RunTestSuiteRequest, reader: jspb.BinaryReader): RunTestSuiteRequest;
}

export namespace RunTestSuiteRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    histogram?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
    refhistogram?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
    suite?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
  }
}

export class RunTestSuiteResponse extends jspb.Message {
  getResult(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setResult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): RunTestSuiteResponse;
  hasResult(): boolean;
  clearResult(): RunTestSuiteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunTestSuiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunTestSuiteResponse): RunTestSuiteResponse.AsObject;
  static serializeBinaryToWriter(message: RunTestSuiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunTestSuiteResponse;
  static deserializeBinaryFromReader(message: RunTestSuiteResponse, reader: jspb.BinaryReader): RunTestSuiteResponse;
}

export namespace RunTestSuiteResponse {
  export type AsObject = {
    result?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
  }
}

export class DsGenerateDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsGenerateDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): DsGenerateDatasetRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsGenerateDatasetRequest;
  hasVersion(): boolean;
  clearVersion(): DsGenerateDatasetRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsGenerateDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsGenerateDatasetRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGenerateDatasetRequest;
  hasConnection(): boolean;
  clearConnection(): DsGenerateDatasetRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsGenerateDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): DsGenerateDatasetRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsGenerateDatasetRequest;

  getRows(): number;
  setRows(value: number): DsGenerateDatasetRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGenerateDatasetRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): DsGenerateDatasetRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): DsGenerateDatasetRequest;

  getTarget(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setTarget(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DsGenerateDatasetRequest;
  hasTarget(): boolean;
  clearTarget(): DsGenerateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGenerateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGenerateDatasetRequest): DsGenerateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DsGenerateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGenerateDatasetRequest;
  static deserializeBinaryFromReader(message: DsGenerateDatasetRequest, reader: jspb.BinaryReader): DsGenerateDatasetRequest;
}

export namespace DsGenerateDatasetRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    rows: number,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    target?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class DsGenerateDatasetResponse extends jspb.Message {
  getTarget(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setTarget(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DsGenerateDatasetResponse;
  hasTarget(): boolean;
  clearTarget(): DsGenerateDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGenerateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGenerateDatasetResponse): DsGenerateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DsGenerateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGenerateDatasetResponse;
  static deserializeBinaryFromReader(message: DsGenerateDatasetResponse, reader: jspb.BinaryReader): DsGenerateDatasetResponse;
}

export namespace DsGenerateDatasetResponse {
  export type AsObject = {
    target?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class DsSplitDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsSplitDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): DsSplitDatasetRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsSplitDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsSplitDatasetRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSplitDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): DsSplitDatasetRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsSplitDatasetRequest;
  hasStudy(): boolean;
  clearStudy(): DsSplitDatasetRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsSplitDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): DsSplitDatasetRequest;

  getTrainingdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setTrainingdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSplitDatasetRequest;
  hasTrainingdataset(): boolean;
  clearTrainingdataset(): DsSplitDatasetRequest;

  getTestingdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setTestingdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSplitDatasetRequest;
  hasTestingdataset(): boolean;
  clearTestingdataset(): DsSplitDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetRequest): DsSplitDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetRequest;
  static deserializeBinaryFromReader(message: DsSplitDatasetRequest, reader: jspb.BinaryReader): DsSplitDatasetRequest;
}

export namespace DsSplitDatasetRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    trainingdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    testingdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DsSplitDatasetResponse extends jspb.Message {
  getTraining(): number;
  setTraining(value: number): DsSplitDatasetResponse;

  getTesting(): number;
  setTesting(value: number): DsSplitDatasetResponse;

  getValidation(): number;
  setValidation(value: number): DsSplitDatasetResponse;

  getTraininghash(): string;
  setTraininghash(value: string): DsSplitDatasetResponse;

  getTestinghash(): string;
  setTestinghash(value: string): DsSplitDatasetResponse;

  getValidationhash(): string;
  setValidationhash(value: string): DsSplitDatasetResponse;

  getIndexfile(): string;
  setIndexfile(value: string): DsSplitDatasetResponse;

  getTrainlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTrainlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DsSplitDatasetResponse;
  hasTrainlocation(): boolean;
  clearTrainlocation(): DsSplitDatasetResponse;

  getTestlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setTestlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DsSplitDatasetResponse;
  hasTestlocation(): boolean;
  clearTestlocation(): DsSplitDatasetResponse;

  getValidationlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setValidationlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DsSplitDatasetResponse;
  hasValidationlocation(): boolean;
  clearValidationlocation(): DsSplitDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetResponse): DsSplitDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetResponse;
  static deserializeBinaryFromReader(message: DsSplitDatasetResponse, reader: jspb.BinaryReader): DsSplitDatasetResponse;
}

export namespace DsSplitDatasetResponse {
  export type AsObject = {
    training: number,
    testing: number,
    validation: number,
    traininghash: string,
    testinghash: string,
    validationhash: string,
    indexfile: string,
    trainlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    testlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    validationlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
  }
}

export class DsSplitDatasetToRungsRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsSplitDatasetToRungsRequest;
  hasProduct(): boolean;
  clearProduct(): DsSplitDatasetToRungsRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsSplitDatasetToRungsRequest;
  hasVersion(): boolean;
  clearVersion(): DsSplitDatasetToRungsRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsSplitDatasetToRungsRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsSplitDatasetToRungsRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSplitDatasetToRungsRequest;
  hasDataset(): boolean;
  clearDataset(): DsSplitDatasetToRungsRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsSplitDatasetToRungsRequest;
  hasBucket(): boolean;
  clearBucket(): DsSplitDatasetToRungsRequest;

  getRungs(): number;
  setRungs(value: number): DsSplitDatasetToRungsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetToRungsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetToRungsRequest): DsSplitDatasetToRungsRequest.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetToRungsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetToRungsRequest;
  static deserializeBinaryFromReader(message: DsSplitDatasetToRungsRequest, reader: jspb.BinaryReader): DsSplitDatasetToRungsRequest;
}

export namespace DsSplitDatasetToRungsRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    rungs: number,
  }
}

export class DsSplitDatasetToRungsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetToRungsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetToRungsResponse): DsSplitDatasetToRungsResponse.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetToRungsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetToRungsResponse;
  static deserializeBinaryFromReader(message: DsSplitDatasetToRungsResponse, reader: jspb.BinaryReader): DsSplitDatasetToRungsResponse;
}

export namespace DsSplitDatasetToRungsResponse {
  export type AsObject = {
  }
}

export class DsTransformRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsTransformRequest;
  hasProduct(): boolean;
  clearProduct(): DsTransformRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsTransformRequest;
  hasVersion(): boolean;
  clearVersion(): DsTransformRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsTransformRequest;
  hasBucket(): boolean;
  clearBucket(): DsTransformRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsTransformRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsTransformRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsTransformRequest;
  hasDataset(): boolean;
  clearDataset(): DsTransformRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsTransformRequest;
  hasStudy(): boolean;
  clearStudy(): DsTransformRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsTransformRequest;
  hasConnection(): boolean;
  clearConnection(): DsTransformRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsTransformRequest;

  getTrainingdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setTrainingdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsTransformRequest;
  hasTrainingdataset(): boolean;
  clearTrainingdataset(): DsTransformRequest;

  getTestingdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setTestingdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsTransformRequest;
  hasTestingdataset(): boolean;
  clearTestingdataset(): DsTransformRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTransformRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsTransformRequest): DsTransformRequest.AsObject;
  static serializeBinaryToWriter(message: DsTransformRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTransformRequest;
  static deserializeBinaryFromReader(message: DsTransformRequest, reader: jspb.BinaryReader): DsTransformRequest;
}

export namespace DsTransformRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    trainingdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    testingdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DsTransformResponse extends jspb.Message {
  getTrainingHash(): string;
  setTrainingHash(value: string): DsTransformResponse;

  getTestingHash(): string;
  setTestingHash(value: string): DsTransformResponse;

  getValidationHash(): string;
  setValidationHash(value: string): DsTransformResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTransformResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsTransformResponse): DsTransformResponse.AsObject;
  static serializeBinaryToWriter(message: DsTransformResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTransformResponse;
  static deserializeBinaryFromReader(message: DsTransformResponse, reader: jspb.BinaryReader): DsTransformResponse;
}

export namespace DsTransformResponse {
  export type AsObject = {
    trainingHash: string,
    testingHash: string,
    validationHash: string,
  }
}

export class DsCreateColumnProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateColumnProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateColumnProfileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateColumnProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateColumnProfileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateColumnProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateColumnProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateColumnProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateColumnProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateColumnProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateColumnProfileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateColumnProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateColumnProfileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsCreateColumnProfileRequest;

  getColumntype(): string;
  setColumntype(value: string): DsCreateColumnProfileRequest;

  getColumnname(): string;
  setColumnname(value: string): DsCreateColumnProfileRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateColumnProfileRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): DsCreateColumnProfileRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): DsCreateColumnProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateColumnProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateColumnProfileRequest): DsCreateColumnProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateColumnProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateColumnProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateColumnProfileRequest, reader: jspb.BinaryReader): DsCreateColumnProfileRequest;
}

export namespace DsCreateColumnProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    columntype: string,
    columnname: string,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsCreateColumnProfileResponse extends jspb.Message {
  getName(): string;
  setName(value: string): DsCreateColumnProfileResponse;

  getPlot(): github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot | undefined;
  setPlot(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot): DsCreateColumnProfileResponse;
  hasPlot(): boolean;
  clearPlot(): DsCreateColumnProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateColumnProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateColumnProfileResponse): DsCreateColumnProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateColumnProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateColumnProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateColumnProfileResponse, reader: jspb.BinaryReader): DsCreateColumnProfileResponse;
}

export namespace DsCreateColumnProfileResponse {
  export type AsObject = {
    name: string,
    plot?: github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot.AsObject,
  }
}

export class GroupByDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): GroupByDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): GroupByDatasetRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): GroupByDatasetRequest;
  hasVersion(): boolean;
  clearVersion(): GroupByDatasetRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): GroupByDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): GroupByDatasetRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): GroupByDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): GroupByDatasetRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GroupByDatasetRequest;
  hasConnection(): boolean;
  clearConnection(): GroupByDatasetRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): GroupByDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): GroupByDatasetRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): GroupByDatasetRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GroupByDatasetRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): GroupByDatasetRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): GroupByDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupByDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroupByDatasetRequest): GroupByDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GroupByDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupByDatasetRequest;
  static deserializeBinaryFromReader(message: GroupByDatasetRequest, reader: jspb.BinaryReader): GroupByDatasetRequest;
}

export namespace GroupByDatasetRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class GroupByDatasetResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): GroupByDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupByDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupByDatasetResponse): GroupByDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GroupByDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupByDatasetResponse;
  static deserializeBinaryFromReader(message: GroupByDatasetResponse, reader: jspb.BinaryReader): GroupByDatasetResponse;
}

export namespace GroupByDatasetResponse {
  export type AsObject = {
    uri: string,
  }
}

export class DsInferSchemaRequest extends jspb.Message {
  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DsInferSchemaRequest;
  hasLocation(): boolean;
  clearLocation(): DsInferSchemaRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsInferSchemaRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsInferSchemaRequest;

  getTenant(): string;
  setTenant(value: string): DsInferSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsInferSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsInferSchemaRequest): DsInferSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: DsInferSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsInferSchemaRequest;
  static deserializeBinaryFromReader(message: DsInferSchemaRequest, reader: jspb.BinaryReader): DsInferSchemaRequest;
}

export namespace DsInferSchemaRequest {
  export type AsObject = {
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    tenant: string,
  }
}

export class DsInferSchemaResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile): DsInferSchemaResponse;
  hasProfile(): boolean;
  clearProfile(): DsInferSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsInferSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsInferSchemaResponse): DsInferSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: DsInferSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsInferSchemaResponse;
  static deserializeBinaryFromReader(message: DsInferSchemaResponse, reader: jspb.BinaryReader): DsInferSchemaResponse;
}

export namespace DsInferSchemaResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
  }
}

export class DsGetTableViewRequest extends jspb.Message {
  getFlatfile(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec | undefined;
  setFlatfile(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec): DsGetTableViewRequest;
  hasFlatfile(): boolean;
  clearFlatfile(): DsGetTableViewRequest;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DsGetTableViewRequest;
  hasLocation(): boolean;
  clearLocation(): DsGetTableViewRequest;

  getTenant(): string;
  setTenant(value: string): DsGetTableViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetTableViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetTableViewRequest): DsGetTableViewRequest.AsObject;
  static serializeBinaryToWriter(message: DsGetTableViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetTableViewRequest;
  static deserializeBinaryFromReader(message: DsGetTableViewRequest, reader: jspb.BinaryReader): DsGetTableViewRequest;
}

export namespace DsGetTableViewRequest {
  export type AsObject = {
    flatfile?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    tenant: string,
  }
}

export class DsGetTableViewResponse extends jspb.Message {
  getTableview(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setTableview(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): DsGetTableViewResponse;
  hasTableview(): boolean;
  clearTableview(): DsGetTableViewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetTableViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetTableViewResponse): DsGetTableViewResponse.AsObject;
  static serializeBinaryToWriter(message: DsGetTableViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetTableViewResponse;
  static deserializeBinaryFromReader(message: DsGetTableViewResponse, reader: jspb.BinaryReader): DsGetTableViewResponse;
}

export namespace DsGetTableViewResponse {
  export type AsObject = {
    tableview?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

export class CreateModelReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateModelReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateModelReportRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateModelReportRequest;
  hasStudy(): boolean;
  clearStudy(): CreateModelReportRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateModelReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateModelReportRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateModelReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateModelReportRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): CreateModelReportRequest;
  hasModel(): boolean;
  clearModel(): CreateModelReportRequest;

  getReport(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateModelReportRequest;
  hasReport(): boolean;
  clearReport(): CreateModelReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelReportRequest): CreateModelReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelReportRequest;
  static deserializeBinaryFromReader(message: CreateModelReportRequest, reader: jspb.BinaryReader): CreateModelReportRequest;
}

export namespace CreateModelReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    report?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class CreateForecastReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateForecastReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateForecastReportRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateForecastReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateForecastReportRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateForecastReportRequest;
  hasStudy(): boolean;
  clearStudy(): CreateForecastReportRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateForecastReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateForecastReportRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateForecastReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateForecastReportRequest;

  getForecast(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setForecast(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): CreateForecastReportRequest;
  hasForecast(): boolean;
  clearForecast(): CreateForecastReportRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateForecastReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateForecastReportRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CreateForecastReportRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateForecastReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateForecastReportRequest;

  getReport(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateForecastReportRequest;
  hasReport(): boolean;
  clearReport(): CreateForecastReportRequest;

  getGroup(): boolean;
  setGroup(value: boolean): CreateForecastReportRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateForecastReportRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): CreateForecastReportRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): CreateForecastReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateForecastReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateForecastReportRequest): CreateForecastReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateForecastReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateForecastReportRequest;
  static deserializeBinaryFromReader(message: CreateForecastReportRequest, reader: jspb.BinaryReader): CreateForecastReportRequest;
}

export namespace CreateForecastReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    forecast?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    report?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
    group: boolean,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class CreateSummaryReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateSummaryReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateSummaryReportRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateSummaryReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateSummaryReportRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateSummaryReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateSummaryReportRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CreateSummaryReportRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateSummaryReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateSummaryReportRequest;

  getReport(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateSummaryReportRequest;
  hasReport(): boolean;
  clearReport(): CreateSummaryReportRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateSummaryReportRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): CreateSummaryReportRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): CreateSummaryReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSummaryReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSummaryReportRequest): CreateSummaryReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSummaryReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSummaryReportRequest;
  static deserializeBinaryFromReader(message: CreateSummaryReportRequest, reader: jspb.BinaryReader): CreateSummaryReportRequest;
}

export namespace CreateSummaryReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    report?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class CreateReportResponse extends jspb.Message {
  getPdf(): Uint8Array | string;
  getPdf_asU8(): Uint8Array;
  getPdf_asB64(): string;
  setPdf(value: Uint8Array | string): CreateReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportResponse): CreateReportResponse.AsObject;
  static serializeBinaryToWriter(message: CreateReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportResponse;
  static deserializeBinaryFromReader(message: CreateReportResponse, reader: jspb.BinaryReader): CreateReportResponse;
}

export namespace CreateReportResponse {
  export type AsObject = {
    pdf: Uint8Array | string,
  }
}

export class CreateDatasetReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateDatasetReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateDatasetReportRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateDatasetReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateDatasetReportRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateDatasetReportRequest;

  getReport(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateDatasetReportRequest;
  hasReport(): boolean;
  clearReport(): CreateDatasetReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetReportRequest): CreateDatasetReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetReportRequest;
  static deserializeBinaryFromReader(message: CreateDatasetReportRequest, reader: jspb.BinaryReader): CreateDatasetReportRequest;
}

export namespace CreateDatasetReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    report?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class CreateStudyReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateStudyReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateStudyReportRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateStudyReportRequest;
  hasStudy(): boolean;
  clearStudy(): CreateStudyReportRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateStudyReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateStudyReportRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateStudyReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateStudyReportRequest;

  getModels(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList | undefined;
  setModels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList): CreateStudyReportRequest;
  hasModels(): boolean;
  clearModels(): CreateStudyReportRequest;

  getReport(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateStudyReportRequest;
  hasReport(): boolean;
  clearReport(): CreateStudyReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyReportRequest): CreateStudyReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStudyReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyReportRequest;
  static deserializeBinaryFromReader(message: CreateStudyReportRequest, reader: jspb.BinaryReader): CreateStudyReportRequest;
}

export namespace CreateStudyReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    models?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.AsObject,
    report?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class AskModelRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskModelRequest;
  hasProduct(): boolean;
  clearProduct(): AskModelRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): AskModelRequest;
  hasStudy(): boolean;
  clearStudy(): AskModelRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): AskModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): AskModelRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): AskModelRequest;
  hasDataset(): boolean;
  clearDataset(): AskModelRequest;

  getBudget(): number;
  setBudget(value: number): AskModelRequest;

  getDefaulthp(): boolean;
  setDefaulthp(value: boolean): AskModelRequest;

  getAlgorithm(): string;
  setAlgorithm(value: string): AskModelRequest;

  getAlgorithmsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>;
  setAlgorithmsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>): AskModelRequest;
  clearAlgorithmsList(): AskModelRequest;
  addAlgorithms(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AskModelRequest): AskModelRequest.AsObject;
  static serializeBinaryToWriter(message: AskModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskModelRequest;
  static deserializeBinaryFromReader(message: AskModelRequest, reader: jspb.BinaryReader): AskModelRequest;
}

export namespace AskModelRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    budget: number,
    defaulthp: boolean,
    algorithm: string,
    algorithmsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.AsObject>,
  }
}

export class GetTimeSeriesDatasetKeysRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): GetTimeSeriesDatasetKeysRequest;
  hasProduct(): boolean;
  clearProduct(): GetTimeSeriesDatasetKeysRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): GetTimeSeriesDatasetKeysRequest;
  hasVersion(): boolean;
  clearVersion(): GetTimeSeriesDatasetKeysRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): GetTimeSeriesDatasetKeysRequest;
  hasStudy(): boolean;
  clearStudy(): GetTimeSeriesDatasetKeysRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): GetTimeSeriesDatasetKeysRequest;
  hasDatasource(): boolean;
  clearDatasource(): GetTimeSeriesDatasetKeysRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): GetTimeSeriesDatasetKeysRequest;
  hasDataset(): boolean;
  clearDataset(): GetTimeSeriesDatasetKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTimeSeriesDatasetKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTimeSeriesDatasetKeysRequest): GetTimeSeriesDatasetKeysRequest.AsObject;
  static serializeBinaryToWriter(message: GetTimeSeriesDatasetKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTimeSeriesDatasetKeysRequest;
  static deserializeBinaryFromReader(message: GetTimeSeriesDatasetKeysRequest, reader: jspb.BinaryReader): GetTimeSeriesDatasetKeysRequest;
}

export namespace GetTimeSeriesDatasetKeysRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class GetTimeSeriesDatasetKeysResponse extends jspb.Message {
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): GetTimeSeriesDatasetKeysResponse;
  clearKeysList(): GetTimeSeriesDatasetKeysResponse;
  addKeys(value: string, index?: number): GetTimeSeriesDatasetKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTimeSeriesDatasetKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTimeSeriesDatasetKeysResponse): GetTimeSeriesDatasetKeysResponse.AsObject;
  static serializeBinaryToWriter(message: GetTimeSeriesDatasetKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTimeSeriesDatasetKeysResponse;
  static deserializeBinaryFromReader(message: GetTimeSeriesDatasetKeysResponse, reader: jspb.BinaryReader): GetTimeSeriesDatasetKeysResponse;
}

export namespace GetTimeSeriesDatasetKeysResponse {
  export type AsObject = {
    keysList: Array<string>,
  }
}

export class AskForecastModelRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskForecastModelRequest;
  hasProduct(): boolean;
  clearProduct(): AskForecastModelRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): AskForecastModelRequest;
  hasStudy(): boolean;
  clearStudy(): AskForecastModelRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): AskForecastModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): AskForecastModelRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): AskForecastModelRequest;
  hasDataset(): boolean;
  clearDataset(): AskForecastModelRequest;

  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): AskForecastModelRequest;
  clearKeysList(): AskForecastModelRequest;
  addKeys(value: string, index?: number): AskForecastModelRequest;

  getAlgorithmsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>;
  setAlgorithmsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>): AskForecastModelRequest;
  clearAlgorithmsList(): AskForecastModelRequest;
  addAlgorithms(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskForecastModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AskForecastModelRequest): AskForecastModelRequest.AsObject;
  static serializeBinaryToWriter(message: AskForecastModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskForecastModelRequest;
  static deserializeBinaryFromReader(message: AskForecastModelRequest, reader: jspb.BinaryReader): AskForecastModelRequest;
}

export namespace AskForecastModelRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    keysList: Array<string>,
    algorithmsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.AsObject>,
  }
}

export class AskForecastModelResponse extends jspb.Message {
  getModelList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): AskForecastModelResponse;
  clearModelList(): AskForecastModelResponse;
  addModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskForecastModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AskForecastModelResponse): AskForecastModelResponse.AsObject;
  static serializeBinaryToWriter(message: AskForecastModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskForecastModelResponse;
  static deserializeBinaryFromReader(message: AskForecastModelResponse, reader: jspb.BinaryReader): AskForecastModelResponse;
}

export namespace AskForecastModelResponse {
  export type AsObject = {
    modelList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class AskEnsembleRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskEnsembleRequest;
  hasProduct(): boolean;
  clearProduct(): AskEnsembleRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): AskEnsembleRequest;
  hasStudy(): boolean;
  clearStudy(): AskEnsembleRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): AskEnsembleRequest;
  hasDatasource(): boolean;
  clearDatasource(): AskEnsembleRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): AskEnsembleRequest;
  hasDataset(): boolean;
  clearDataset(): AskEnsembleRequest;

  getModelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): AskEnsembleRequest;
  clearModelsList(): AskEnsembleRequest;
  addModels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getAlgorithmsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>;
  setAlgorithmsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>): AskEnsembleRequest;
  clearAlgorithmsList(): AskEnsembleRequest;
  addAlgorithms(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskEnsembleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AskEnsembleRequest): AskEnsembleRequest.AsObject;
  static serializeBinaryToWriter(message: AskEnsembleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskEnsembleRequest;
  static deserializeBinaryFromReader(message: AskEnsembleRequest, reader: jspb.BinaryReader): AskEnsembleRequest;
}

export namespace AskEnsembleRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    modelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    algorithmsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.AsObject>,
  }
}

export class AskEnsembleResponse extends jspb.Message {
  getModelList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): AskEnsembleResponse;
  clearModelList(): AskEnsembleResponse;
  addModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskEnsembleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AskEnsembleResponse): AskEnsembleResponse.AsObject;
  static serializeBinaryToWriter(message: AskEnsembleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskEnsembleResponse;
  static deserializeBinaryFromReader(message: AskEnsembleResponse, reader: jspb.BinaryReader): AskEnsembleResponse;
}

export namespace AskEnsembleResponse {
  export type AsObject = {
    modelList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class AskBaselineRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskBaselineRequest;
  hasProduct(): boolean;
  clearProduct(): AskBaselineRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): AskBaselineRequest;
  hasStudy(): boolean;
  clearStudy(): AskBaselineRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): AskBaselineRequest;
  hasDatasource(): boolean;
  clearDatasource(): AskBaselineRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): AskBaselineRequest;
  hasDataset(): boolean;
  clearDataset(): AskBaselineRequest;

  getAlgnamesList(): Array<string>;
  setAlgnamesList(value: Array<string>): AskBaselineRequest;
  clearAlgnamesList(): AskBaselineRequest;
  addAlgnames(value: string, index?: number): AskBaselineRequest;

  getAll(): boolean;
  setAll(value: boolean): AskBaselineRequest;

  getAlgorithmsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>;
  setAlgorithmsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>): AskBaselineRequest;
  clearAlgorithmsList(): AskBaselineRequest;
  addAlgorithms(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskBaselineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AskBaselineRequest): AskBaselineRequest.AsObject;
  static serializeBinaryToWriter(message: AskBaselineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskBaselineRequest;
  static deserializeBinaryFromReader(message: AskBaselineRequest, reader: jspb.BinaryReader): AskBaselineRequest;
}

export namespace AskBaselineRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    algnamesList: Array<string>,
    all: boolean,
    algorithmsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.AsObject>,
  }
}

export class AskBaselineResponse extends jspb.Message {
  getModelList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): AskBaselineResponse;
  clearModelList(): AskBaselineResponse;
  addModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskBaselineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AskBaselineResponse): AskBaselineResponse.AsObject;
  static serializeBinaryToWriter(message: AskBaselineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskBaselineResponse;
  static deserializeBinaryFromReader(message: AskBaselineResponse, reader: jspb.BinaryReader): AskBaselineResponse;
}

export namespace AskBaselineResponse {
  export type AsObject = {
    modelList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class AskAllModelsForTaskRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskAllModelsForTaskRequest;
  hasProduct(): boolean;
  clearProduct(): AskAllModelsForTaskRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): AskAllModelsForTaskRequest;
  hasStudy(): boolean;
  clearStudy(): AskAllModelsForTaskRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): AskAllModelsForTaskRequest;
  hasDatasource(): boolean;
  clearDatasource(): AskAllModelsForTaskRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): AskAllModelsForTaskRequest;
  hasDataset(): boolean;
  clearDataset(): AskAllModelsForTaskRequest;

  getBudget(): number;
  setBudget(value: number): AskAllModelsForTaskRequest;

  getTask(): string;
  setTask(value: string): AskAllModelsForTaskRequest;

  getAlgorithmsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>;
  setAlgorithmsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm>): AskAllModelsForTaskRequest;
  clearAlgorithmsList(): AskAllModelsForTaskRequest;
  addAlgorithms(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskAllModelsForTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AskAllModelsForTaskRequest): AskAllModelsForTaskRequest.AsObject;
  static serializeBinaryToWriter(message: AskAllModelsForTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskAllModelsForTaskRequest;
  static deserializeBinaryFromReader(message: AskAllModelsForTaskRequest, reader: jspb.BinaryReader): AskAllModelsForTaskRequest;
}

export namespace AskAllModelsForTaskRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    budget: number,
    task: string,
    algorithmsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.AsObject>,
  }
}

export class AskAllModelsForTaskResponse extends jspb.Message {
  getModelList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): AskAllModelsForTaskResponse;
  clearModelList(): AskAllModelsForTaskResponse;
  addModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskAllModelsForTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AskAllModelsForTaskResponse): AskAllModelsForTaskResponse.AsObject;
  static serializeBinaryToWriter(message: AskAllModelsForTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskAllModelsForTaskResponse;
  static deserializeBinaryFromReader(message: AskAllModelsForTaskResponse, reader: jspb.BinaryReader): AskAllModelsForTaskResponse;
}

export namespace AskAllModelsForTaskResponse {
  export type AsObject = {
    modelList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class TellModelRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): TellModelRequest;
  hasProduct(): boolean;
  clearProduct(): TellModelRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): TellModelRequest;
  hasStudy(): boolean;
  clearStudy(): TellModelRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): TellModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): TellModelRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): TellModelRequest;
  hasDataset(): boolean;
  clearDataset(): TellModelRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): TellModelRequest;
  hasModel(): boolean;
  clearModel(): TellModelRequest;

  getFailed(): boolean;
  setFailed(value: boolean): TellModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TellModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TellModelRequest): TellModelRequest.AsObject;
  static serializeBinaryToWriter(message: TellModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TellModelRequest;
  static deserializeBinaryFromReader(message: TellModelRequest, reader: jspb.BinaryReader): TellModelRequest;
}

export namespace TellModelRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    failed: boolean,
  }
}

export class TellModelResponse extends jspb.Message {
  getPruned(): boolean;
  setPruned(value: boolean): TellModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TellModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TellModelResponse): TellModelResponse.AsObject;
  static serializeBinaryToWriter(message: TellModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TellModelResponse;
  static deserializeBinaryFromReader(message: TellModelResponse, reader: jspb.BinaryReader): TellModelResponse;
}

export namespace TellModelResponse {
  export type AsObject = {
    pruned: boolean,
  }
}

export class DsShutdownRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsShutdownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsShutdownRequest): DsShutdownRequest.AsObject;
  static serializeBinaryToWriter(message: DsShutdownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsShutdownRequest;
  static deserializeBinaryFromReader(message: DsShutdownRequest, reader: jspb.BinaryReader): DsShutdownRequest;
}

export namespace DsShutdownRequest {
  export type AsObject = {
  }
}

export class DsShutdownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsShutdownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsShutdownResponse): DsShutdownResponse.AsObject;
  static serializeBinaryToWriter(message: DsShutdownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsShutdownResponse;
  static deserializeBinaryFromReader(message: DsShutdownResponse, reader: jspb.BinaryReader): DsShutdownResponse;
}

export namespace DsShutdownResponse {
  export type AsObject = {
  }
}

export class DsTestConnectionRequest extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsTestConnectionRequest;
  hasConnection(): boolean;
  clearConnection(): DsTestConnectionRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsTestConnectionRequest;
  hasBucket(): boolean;
  clearBucket(): DsTestConnectionRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsTestConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTestConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsTestConnectionRequest): DsTestConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: DsTestConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTestConnectionRequest;
  static deserializeBinaryFromReader(message: DsTestConnectionRequest, reader: jspb.BinaryReader): DsTestConnectionRequest;
}

export namespace DsTestConnectionRequest {
  export type AsObject = {
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsTestConnectionResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): DsTestConnectionResponse;

  getMsg(): string;
  setMsg(value: string): DsTestConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTestConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsTestConnectionResponse): DsTestConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: DsTestConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTestConnectionResponse;
  static deserializeBinaryFromReader(message: DsTestConnectionResponse, reader: jspb.BinaryReader): DsTestConnectionResponse;
}

export namespace DsTestConnectionResponse {
  export type AsObject = {
    status: boolean,
    msg: string,
  }
}

export class DsStudyEndedRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsStudyEndedRequest;
  hasProduct(): boolean;
  clearProduct(): DsStudyEndedRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsStudyEndedRequest;
  hasStudy(): boolean;
  clearStudy(): DsStudyEndedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsStudyEndedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsStudyEndedRequest): DsStudyEndedRequest.AsObject;
  static serializeBinaryToWriter(message: DsStudyEndedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsStudyEndedRequest;
  static deserializeBinaryFromReader(message: DsStudyEndedRequest, reader: jspb.BinaryReader): DsStudyEndedRequest;
}

export namespace DsStudyEndedRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
  }
}

export class DsStudyEndedResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsStudyEndedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsStudyEndedResponse): DsStudyEndedResponse.AsObject;
  static serializeBinaryToWriter(message: DsStudyEndedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsStudyEndedResponse;
  static deserializeBinaryFromReader(message: DsStudyEndedResponse, reader: jspb.BinaryReader): DsStudyEndedResponse;
}

export namespace DsStudyEndedResponse {
  export type AsObject = {
  }
}

export class SaveOptimizerDBRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): SaveOptimizerDBRequest;
  hasProduct(): boolean;
  clearProduct(): SaveOptimizerDBRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): SaveOptimizerDBRequest;
  hasStudy(): boolean;
  clearStudy(): SaveOptimizerDBRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): SaveOptimizerDBRequest;
  hasBucket(): boolean;
  clearBucket(): SaveOptimizerDBRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveOptimizerDBRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveOptimizerDBRequest): SaveOptimizerDBRequest.AsObject;
  static serializeBinaryToWriter(message: SaveOptimizerDBRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveOptimizerDBRequest;
  static deserializeBinaryFromReader(message: SaveOptimizerDBRequest, reader: jspb.BinaryReader): SaveOptimizerDBRequest;
}

export namespace SaveOptimizerDBRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class SaveOptimizerDBResponse extends jspb.Message {
  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): SaveOptimizerDBResponse;
  hasLocation(): boolean;
  clearLocation(): SaveOptimizerDBResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveOptimizerDBResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveOptimizerDBResponse): SaveOptimizerDBResponse.AsObject;
  static serializeBinaryToWriter(message: SaveOptimizerDBResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveOptimizerDBResponse;
  static deserializeBinaryFromReader(message: SaveOptimizerDBResponse, reader: jspb.BinaryReader): SaveOptimizerDBResponse;
}

export namespace SaveOptimizerDBResponse {
  export type AsObject = {
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
  }
}

export class DsGetDatabasesRequest extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGetDatabasesRequest;
  hasConnection(): boolean;
  clearConnection(): DsGetDatabasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetDatabasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetDatabasesRequest): DsGetDatabasesRequest.AsObject;
  static serializeBinaryToWriter(message: DsGetDatabasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetDatabasesRequest;
  static deserializeBinaryFromReader(message: DsGetDatabasesRequest, reader: jspb.BinaryReader): DsGetDatabasesRequest;
}

export namespace DsGetDatabasesRequest {
  export type AsObject = {
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class DsGetDatabasesResponse extends jspb.Message {
  getDatabasesList(): Array<string>;
  setDatabasesList(value: Array<string>): DsGetDatabasesResponse;
  clearDatabasesList(): DsGetDatabasesResponse;
  addDatabases(value: string, index?: number): DsGetDatabasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetDatabasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetDatabasesResponse): DsGetDatabasesResponse.AsObject;
  static serializeBinaryToWriter(message: DsGetDatabasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetDatabasesResponse;
  static deserializeBinaryFromReader(message: DsGetDatabasesResponse, reader: jspb.BinaryReader): DsGetDatabasesResponse;
}

export namespace DsGetDatabasesResponse {
  export type AsObject = {
    databasesList: Array<string>,
  }
}

export class DsGetTablesRequest extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGetTablesRequest;
  hasConnection(): boolean;
  clearConnection(): DsGetTablesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetTablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetTablesRequest): DsGetTablesRequest.AsObject;
  static serializeBinaryToWriter(message: DsGetTablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetTablesRequest;
  static deserializeBinaryFromReader(message: DsGetTablesRequest, reader: jspb.BinaryReader): DsGetTablesRequest;
}

export namespace DsGetTablesRequest {
  export type AsObject = {
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class DsGetTablesResponse extends jspb.Message {
  getTablesList(): Array<string>;
  setTablesList(value: Array<string>): DsGetTablesResponse;
  clearTablesList(): DsGetTablesResponse;
  addTables(value: string, index?: number): DsGetTablesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetTablesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetTablesResponse): DsGetTablesResponse.AsObject;
  static serializeBinaryToWriter(message: DsGetTablesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetTablesResponse;
  static deserializeBinaryFromReader(message: DsGetTablesResponse, reader: jspb.BinaryReader): DsGetTablesResponse;
}

export namespace DsGetTablesResponse {
  export type AsObject = {
    tablesList: Array<string>,
  }
}

export class DsExecuteSqlRequest extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsExecuteSqlRequest;
  hasConnection(): boolean;
  clearConnection(): DsExecuteSqlRequest;

  getSql(): string;
  setSql(value: string): DsExecuteSqlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsExecuteSqlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsExecuteSqlRequest): DsExecuteSqlRequest.AsObject;
  static serializeBinaryToWriter(message: DsExecuteSqlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsExecuteSqlRequest;
  static deserializeBinaryFromReader(message: DsExecuteSqlRequest, reader: jspb.BinaryReader): DsExecuteSqlRequest;
}

export namespace DsExecuteSqlRequest {
  export type AsObject = {
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    sql: string,
  }
}

export class DsExecuteSqlResponse extends jspb.Message {
  getTableview(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setTableview(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): DsExecuteSqlResponse;
  hasTableview(): boolean;
  clearTableview(): DsExecuteSqlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsExecuteSqlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsExecuteSqlResponse): DsExecuteSqlResponse.AsObject;
  static serializeBinaryToWriter(message: DsExecuteSqlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsExecuteSqlResponse;
  static deserializeBinaryFromReader(message: DsExecuteSqlResponse, reader: jspb.BinaryReader): DsExecuteSqlResponse;
}

export namespace DsExecuteSqlResponse {
  export type AsObject = {
    tableview?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

export class DsSnapshotRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsSnapshotRequest;
  hasProduct(): boolean;
  clearProduct(): DsSnapshotRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsSnapshotRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsSnapshotRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSnapshotRequest;
  hasDataset(): boolean;
  clearDataset(): DsSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsSnapshotRequest): DsSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: DsSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSnapshotRequest;
  static deserializeBinaryFromReader(message: DsSnapshotRequest, reader: jspb.BinaryReader): DsSnapshotRequest;
}

export namespace DsSnapshotRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DsSnapshotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsSnapshotResponse): DsSnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: DsSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSnapshotResponse;
  static deserializeBinaryFromReader(message: DsSnapshotResponse, reader: jspb.BinaryReader): DsSnapshotResponse;
}

export namespace DsSnapshotResponse {
  export type AsObject = {
  }
}

export class AskModelResponse extends jspb.Message {
  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): AskModelResponse;
  hasModel(): boolean;
  clearModel(): AskModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AskModelResponse): AskModelResponse.AsObject;
  static serializeBinaryToWriter(message: AskModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskModelResponse;
  static deserializeBinaryFromReader(message: AskModelResponse, reader: jspb.BinaryReader): AskModelResponse;
}

export namespace AskModelResponse {
  export type AsObject = {
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class GenTrainingDataRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): GenTrainingDataRequest;
  hasProduct(): boolean;
  clearProduct(): GenTrainingDataRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): GenTrainingDataRequest;
  hasVersion(): boolean;
  clearVersion(): GenTrainingDataRequest;

  getStorageconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setStorageconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GenTrainingDataRequest;
  hasStorageconnection(): boolean;
  clearStorageconnection(): GenTrainingDataRequest;

  getStoragebucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setStoragebucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): GenTrainingDataRequest;
  hasStoragebucket(): boolean;
  clearStoragebucket(): GenTrainingDataRequest;

  getStoragesecretMap(): jspb.Map<string, Uint8Array | string>;
  clearStoragesecretMap(): GenTrainingDataRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GenTrainingDataRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): GenTrainingDataRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): GenTrainingDataRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): GenTrainingDataRequest;
  hasModel(): boolean;
  clearModel(): GenTrainingDataRequest;

  getEntitiesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;
  setEntitiesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>): GenTrainingDataRequest;
  clearEntitiesList(): GenTrainingDataRequest;
  addEntities(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity;

  getGroupsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>;
  setGroupsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>): GenTrainingDataRequest;
  clearGroupsList(): GenTrainingDataRequest;
  addGroups(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenTrainingDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenTrainingDataRequest): GenTrainingDataRequest.AsObject;
  static serializeBinaryToWriter(message: GenTrainingDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenTrainingDataRequest;
  static deserializeBinaryFromReader(message: GenTrainingDataRequest, reader: jspb.BinaryReader): GenTrainingDataRequest;
}

export namespace GenTrainingDataRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    storageconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    storagebucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    storagesecretMap: Array<[string, Uint8Array | string]>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    entitiesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject>,
    groupsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject>,
  }
}

export class GenTrainingDataResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): GenTrainingDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenTrainingDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenTrainingDataResponse): GenTrainingDataResponse.AsObject;
  static serializeBinaryToWriter(message: GenTrainingDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenTrainingDataResponse;
  static deserializeBinaryFromReader(message: GenTrainingDataResponse, reader: jspb.BinaryReader): GenTrainingDataResponse;
}

export namespace GenTrainingDataResponse {
  export type AsObject = {
    path: string,
  }
}

export class SyncOnlineStoreRequest extends jspb.Message {
  getStorageconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setStorageconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): SyncOnlineStoreRequest;
  hasStorageconnection(): boolean;
  clearStorageconnection(): SyncOnlineStoreRequest;

  getStoragebucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setStoragebucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): SyncOnlineStoreRequest;
  hasStoragebucket(): boolean;
  clearStoragebucket(): SyncOnlineStoreRequest;

  getStoragesecretMap(): jspb.Map<string, Uint8Array | string>;
  clearStoragesecretMap(): SyncOnlineStoreRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): SyncOnlineStoreRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): SyncOnlineStoreRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): SyncOnlineStoreRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): SyncOnlineStoreRequest;
  hasModel(): boolean;
  clearModel(): SyncOnlineStoreRequest;

  getFg(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFg(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): SyncOnlineStoreRequest;
  hasFg(): boolean;
  clearFg(): SyncOnlineStoreRequest;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): SyncOnlineStoreRequest;
  hasLocation(): boolean;
  clearLocation(): SyncOnlineStoreRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncOnlineStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncOnlineStoreRequest): SyncOnlineStoreRequest.AsObject;
  static serializeBinaryToWriter(message: SyncOnlineStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncOnlineStoreRequest;
  static deserializeBinaryFromReader(message: SyncOnlineStoreRequest, reader: jspb.BinaryReader): SyncOnlineStoreRequest;
}

export namespace SyncOnlineStoreRequest {
  export type AsObject = {
    storageconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    storagebucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    storagesecretMap: Array<[string, Uint8Array | string]>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    fg?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class SyncOnlineStoreResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncOnlineStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncOnlineStoreResponse): SyncOnlineStoreResponse.AsObject;
  static serializeBinaryToWriter(message: SyncOnlineStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncOnlineStoreResponse;
  static deserializeBinaryFromReader(message: SyncOnlineStoreResponse, reader: jspb.BinaryReader): SyncOnlineStoreResponse;
}

export namespace SyncOnlineStoreResponse {
  export type AsObject = {
  }
}

export class GenOnlineStoreDatasetRequest extends jspb.Message {
  getStorageconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setStorageconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GenOnlineStoreDatasetRequest;
  hasStorageconnection(): boolean;
  clearStorageconnection(): GenOnlineStoreDatasetRequest;

  getStoragebucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setStoragebucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): GenOnlineStoreDatasetRequest;
  hasStoragebucket(): boolean;
  clearStoragebucket(): GenOnlineStoreDatasetRequest;

  getStoragesecretMap(): jspb.Map<string, Uint8Array | string>;
  clearStoragesecretMap(): GenOnlineStoreDatasetRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GenOnlineStoreDatasetRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): GenOnlineStoreDatasetRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): GenOnlineStoreDatasetRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): GenOnlineStoreDatasetRequest;
  hasModel(): boolean;
  clearModel(): GenOnlineStoreDatasetRequest;

  getFg(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFg(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): GenOnlineStoreDatasetRequest;
  hasFg(): boolean;
  clearFg(): GenOnlineStoreDatasetRequest;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): GenOnlineStoreDatasetRequest;
  hasLocation(): boolean;
  clearLocation(): GenOnlineStoreDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenOnlineStoreDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenOnlineStoreDatasetRequest): GenOnlineStoreDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GenOnlineStoreDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenOnlineStoreDatasetRequest;
  static deserializeBinaryFromReader(message: GenOnlineStoreDatasetRequest, reader: jspb.BinaryReader): GenOnlineStoreDatasetRequest;
}

export namespace GenOnlineStoreDatasetRequest {
  export type AsObject = {
    storageconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    storagebucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    storagesecretMap: Array<[string, Uint8Array | string]>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    fg?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class GenOnlineStoreDatasetResponse extends jspb.Message {
  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): GenOnlineStoreDatasetResponse;
  hasLocation(): boolean;
  clearLocation(): GenOnlineStoreDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenOnlineStoreDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenOnlineStoreDatasetResponse): GenOnlineStoreDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GenOnlineStoreDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenOnlineStoreDatasetResponse;
  static deserializeBinaryFromReader(message: GenOnlineStoreDatasetResponse, reader: jspb.BinaryReader): GenOnlineStoreDatasetResponse;
}

export namespace GenOnlineStoreDatasetResponse {
  export type AsObject = {
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class BatchPredictRequest extends jspb.Message {
  getStorageconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setStorageconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictRequest;
  hasStorageconnection(): boolean;
  clearStorageconnection(): BatchPredictRequest;

  getStoragebucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setStoragebucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BatchPredictRequest;
  hasStoragebucket(): boolean;
  clearStoragebucket(): BatchPredictRequest;

  getStoragesecretMap(): jspb.Map<string, Uint8Array | string>;
  clearStoragesecretMap(): BatchPredictRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): BatchPredictRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): BatchPredictRequest;

  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): BatchPredictRequest;
  hasModelclass(): boolean;
  clearModelclass(): BatchPredictRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): BatchPredictRequest;
  hasModel(): boolean;
  clearModel(): BatchPredictRequest;

  getEntitiesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;
  setEntitiesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>): BatchPredictRequest;
  clearEntitiesList(): BatchPredictRequest;
  addEntities(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity;

  getGroupsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>;
  setGroupsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>): BatchPredictRequest;
  clearGroupsList(): BatchPredictRequest;
  addGroups(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;

  getPrediction(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setPrediction(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): BatchPredictRequest;
  hasPrediction(): boolean;
  clearPrediction(): BatchPredictRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictRequest): BatchPredictRequest.AsObject;
  static serializeBinaryToWriter(message: BatchPredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictRequest;
  static deserializeBinaryFromReader(message: BatchPredictRequest, reader: jspb.BinaryReader): BatchPredictRequest;
}

export namespace BatchPredictRequest {
  export type AsObject = {
    storageconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    storagebucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    storagesecretMap: Array<[string, Uint8Array | string]>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    entitiesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject>,
    groupsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject>,
    prediction?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
  }
}

export class BatchPredictResponse extends jspb.Message {
  getRows(): number;
  setRows(value: number): BatchPredictResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictResponse): BatchPredictResponse.AsObject;
  static serializeBinaryToWriter(message: BatchPredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictResponse;
  static deserializeBinaryFromReader(message: BatchPredictResponse, reader: jspb.BinaryReader): BatchPredictResponse;
}

export namespace BatchPredictResponse {
  export type AsObject = {
    rows: number,
  }
}

export class SaveDatasetRequest extends jspb.Message {
  getDataproduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): SaveDatasetRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): SaveDatasetRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): SaveDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): SaveDatasetRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): SaveDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): SaveDatasetRequest;

  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): SaveDatasetRequest;
  hasModelclass(): boolean;
  clearModelclass(): SaveDatasetRequest;

  getModelclassrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun | undefined;
  setModelclassrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun): SaveDatasetRequest;
  hasModelclassrun(): boolean;
  clearModelclassrun(): SaveDatasetRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): SaveDatasetRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): SaveDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveDatasetRequest): SaveDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: SaveDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveDatasetRequest;
  static deserializeBinaryFromReader(message: SaveDatasetRequest, reader: jspb.BinaryReader): SaveDatasetRequest;
}

export namespace SaveDatasetRequest {
  export type AsObject = {
    dataproduct?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    modelclassrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.AsObject,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class SaveModelRequest extends jspb.Message {
  getDataproduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): SaveModelRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): SaveModelRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): SaveModelRequest;
  hasStudy(): boolean;
  clearStudy(): SaveModelRequest;

  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): SaveModelRequest;
  hasModelclass(): boolean;
  clearModelclass(): SaveModelRequest;

  getModelclassrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun | undefined;
  setModelclassrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun): SaveModelRequest;
  hasModelclassrun(): boolean;
  clearModelclassrun(): SaveModelRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): SaveModelRequest;
  hasModel(): boolean;
  clearModel(): SaveModelRequest;

  getGroupsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>;
  setGroupsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>): SaveModelRequest;
  clearGroupsList(): SaveModelRequest;
  addGroups(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): SaveModelRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): SaveModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveModelRequest): SaveModelRequest.AsObject;
  static serializeBinaryToWriter(message: SaveModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveModelRequest;
  static deserializeBinaryFromReader(message: SaveModelRequest, reader: jspb.BinaryReader): SaveModelRequest;
}

export namespace SaveModelRequest {
  export type AsObject = {
    dataproduct?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    modelclassrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    groupsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject>,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class SavePredictionRequest extends jspb.Message {
  getDataproduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): SavePredictionRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): SavePredictionRequest;

  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): SavePredictionRequest;
  hasModelclass(): boolean;
  clearModelclass(): SavePredictionRequest;

  getModelclassrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun | undefined;
  setModelclassrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun): SavePredictionRequest;
  hasModelclassrun(): boolean;
  clearModelclassrun(): SavePredictionRequest;

  getPredictor(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setPredictor(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): SavePredictionRequest;
  hasPredictor(): boolean;
  clearPredictor(): SavePredictionRequest;

  getPrediction(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setPrediction(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): SavePredictionRequest;
  hasPrediction(): boolean;
  clearPrediction(): SavePredictionRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): SavePredictionRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): SavePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavePredictionRequest): SavePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: SavePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePredictionRequest;
  static deserializeBinaryFromReader(message: SavePredictionRequest, reader: jspb.BinaryReader): SavePredictionRequest;
}

export namespace SavePredictionRequest {
  export type AsObject = {
    dataproduct?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    modelclassrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.AsObject,
    predictor?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
    prediction?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class SavePredictorRequest extends jspb.Message {
  getDataproduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setDataproduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): SavePredictorRequest;
  hasDataproduct(): boolean;
  clearDataproduct(): SavePredictorRequest;

  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): SavePredictorRequest;
  hasModelclass(): boolean;
  clearModelclass(): SavePredictorRequest;

  getPredictor(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setPredictor(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): SavePredictorRequest;
  hasPredictor(): boolean;
  clearPredictor(): SavePredictorRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): SavePredictorRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): SavePredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavePredictorRequest): SavePredictorRequest.AsObject;
  static serializeBinaryToWriter(message: SavePredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePredictorRequest;
  static deserializeBinaryFromReader(message: SavePredictorRequest, reader: jspb.BinaryReader): SavePredictorRequest;
}

export namespace SavePredictorRequest {
  export type AsObject = {
    dataproduct?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    predictor?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class CreateMetricsStoreRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): CreateMetricsStoreRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateMetricsStoreRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): CreateMetricsStoreRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetricsStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetricsStoreRequest): CreateMetricsStoreRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMetricsStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetricsStoreRequest;
  static deserializeBinaryFromReader(message: CreateMetricsStoreRequest, reader: jspb.BinaryReader): CreateMetricsStoreRequest;
}

export namespace CreateMetricsStoreRequest {
  export type AsObject = {
    tenant: string,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class CreateMetricsStoreResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMetricsStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMetricsStoreResponse): CreateMetricsStoreResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMetricsStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMetricsStoreResponse;
  static deserializeBinaryFromReader(message: CreateMetricsStoreResponse, reader: jspb.BinaryReader): CreateMetricsStoreResponse;
}

export namespace CreateMetricsStoreResponse {
  export type AsObject = {
  }
}

export class SaveResponse extends jspb.Message {
  getDbid(): number;
  setDbid(value: number): SaveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveResponse): SaveResponse.AsObject;
  static serializeBinaryToWriter(message: SaveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveResponse;
  static deserializeBinaryFromReader(message: SaveResponse, reader: jspb.BinaryReader): SaveResponse;
}

export namespace SaveResponse {
  export type AsObject = {
    dbid: number,
  }
}

