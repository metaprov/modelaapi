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

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsRunRecipeRequest;
  hasConnection(): boolean;
  clearConnection(): DsRunRecipeRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsRunRecipeRequest;
  hasBucket(): boolean;
  clearBucket(): DsRunRecipeRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsRunRecipeRequest;

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
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
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

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateRecipeProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateRecipeProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateRecipeProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateRecipeProfileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsCreateRecipeProfileRequest;

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
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateDatasetProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateDatasetProfileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateDatasetProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateDatasetProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateDatasetProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateDatasetProfileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateDatasetProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateDatasetProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateDatasetProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateDatasetProfileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsCreateDatasetProfileRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsCreateDatasetProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsCreateDatasetProfileResponse;

  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile): DsCreateDatasetProfileResponse;
  hasProfile(): boolean;
  clearProfile(): DsCreateDatasetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateDatasetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateDatasetProfileResponse): DsCreateDatasetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateDatasetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateDatasetProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateDatasetProfileResponse, reader: jspb.BinaryReader): DsCreateDatasetProfileResponse;
}

export namespace DsCreateDatasetProfileResponse {
  export type AsObject = {
    uri: string,
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
  }
}

export class DsCreateModelProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateModelProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateModelProfileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateModelProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateModelProfileRequest;

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

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateModelProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateModelProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateModelProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateModelProfileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsCreateModelProfileRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsCreateModelProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsCreateModelProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateModelProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateModelProfileResponse): DsCreateModelProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateModelProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateModelProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateModelProfileResponse, reader: jspb.BinaryReader): DsCreateModelProfileResponse;
}

export namespace DsCreateModelProfileResponse {
  export type AsObject = {
    uri: string,
  }
}

export class DsCreateForecastPartitionFilesRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateForecastPartitionFilesRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateForecastPartitionFilesRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateForecastPartitionFilesRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateForecastPartitionFilesRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateForecastPartitionFilesRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateForecastPartitionFilesRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateForecastPartitionFilesRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateForecastPartitionFilesRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsCreateForecastPartitionFilesRequest;
  hasStudy(): boolean;
  clearStudy(): DsCreateForecastPartitionFilesRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsCreateForecastPartitionFilesRequest;
  hasModel(): boolean;
  clearModel(): DsCreateForecastPartitionFilesRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateForecastPartitionFilesRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateForecastPartitionFilesRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateForecastPartitionFilesRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateForecastPartitionFilesRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsCreateForecastPartitionFilesRequest;

  getForecastsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj>;
  setForecastsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj>): DsCreateForecastPartitionFilesRequest;
  clearForecastsList(): DsCreateForecastPartitionFilesRequest;
  addForecasts(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateForecastPartitionFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateForecastPartitionFilesRequest): DsCreateForecastPartitionFilesRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateForecastPartitionFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateForecastPartitionFilesRequest;
  static deserializeBinaryFromReader(message: DsCreateForecastPartitionFilesRequest, reader: jspb.BinaryReader): DsCreateForecastPartitionFilesRequest;
}

export namespace DsCreateForecastPartitionFilesRequest {
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
    forecastsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.AsObject>,
  }
}

export class DsCreateForecastPartitionFilesResponse extends jspb.Message {
  getPartitionsList(): Array<PartitionValues>;
  setPartitionsList(value: Array<PartitionValues>): DsCreateForecastPartitionFilesResponse;
  clearPartitionsList(): DsCreateForecastPartitionFilesResponse;
  addPartitions(value?: PartitionValues, index?: number): PartitionValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateForecastPartitionFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateForecastPartitionFilesResponse): DsCreateForecastPartitionFilesResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateForecastPartitionFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateForecastPartitionFilesResponse;
  static deserializeBinaryFromReader(message: DsCreateForecastPartitionFilesResponse, reader: jspb.BinaryReader): DsCreateForecastPartitionFilesResponse;
}

export namespace DsCreateForecastPartitionFilesResponse {
  export type AsObject = {
    partitionsList: Array<PartitionValues.AsObject>,
  }
}

export class PartitionValues extends jspb.Message {
  getName(): string;
  setName(value: string): PartitionValues;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): PartitionValues;
  clearValuesList(): PartitionValues;
  addValues(value: string, index?: number): PartitionValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionValues.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionValues): PartitionValues.AsObject;
  static serializeBinaryToWriter(message: PartitionValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionValues;
  static deserializeBinaryFromReader(message: PartitionValues, reader: jspb.BinaryReader): PartitionValues;
}

export namespace PartitionValues {
  export type AsObject = {
    name: string,
    valuesList: Array<string>,
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

export class DsEvalPredictionRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsEvalPredictionRequest;
  hasProduct(): boolean;
  clearProduct(): DsEvalPredictionRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsEvalPredictionRequest;
  hasVersion(): boolean;
  clearVersion(): DsEvalPredictionRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsEvalPredictionRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsEvalPredictionRequest;

  getPredictionsdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setPredictionsdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsEvalPredictionRequest;
  hasPredictionsdataset(): boolean;
  clearPredictionsdataset(): DsEvalPredictionRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsEvalPredictionRequest;
  hasStudy(): boolean;
  clearStudy(): DsEvalPredictionRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsEvalPredictionRequest;
  hasModel(): boolean;
  clearModel(): DsEvalPredictionRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsEvalPredictionRequest;
  hasConnection(): boolean;
  clearConnection(): DsEvalPredictionRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsEvalPredictionRequest;
  hasBucket(): boolean;
  clearBucket(): DsEvalPredictionRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsEvalPredictionRequest;

  getGroundtruthdataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setGroundtruthdataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsEvalPredictionRequest;
  hasGroundtruthdataset(): boolean;
  clearGroundtruthdataset(): DsEvalPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsEvalPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsEvalPredictionRequest): DsEvalPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: DsEvalPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsEvalPredictionRequest;
  static deserializeBinaryFromReader(message: DsEvalPredictionRequest, reader: jspb.BinaryReader): DsEvalPredictionRequest;
}

export namespace DsEvalPredictionRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    predictionsdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    groundtruthdataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DsEvalPredictionResponse extends jspb.Message {
  getResultsMap(): jspb.Map<string, number>;
  clearResultsMap(): DsEvalPredictionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsEvalPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsEvalPredictionResponse): DsEvalPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: DsEvalPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsEvalPredictionResponse;
  static deserializeBinaryFromReader(message: DsEvalPredictionResponse, reader: jspb.BinaryReader): DsEvalPredictionResponse;
}

export namespace DsEvalPredictionResponse {
  export type AsObject = {
    resultsMap: Array<[string, number]>,
  }
}

export class DsDetectDriftRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsDetectDriftRequest;
  hasProduct(): boolean;
  clearProduct(): DsDetectDriftRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsDetectDriftRequest;
  hasVersion(): boolean;
  clearVersion(): DsDetectDriftRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsDetectDriftRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsDetectDriftRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsDetectDriftRequest;
  hasDataset(): boolean;
  clearDataset(): DsDetectDriftRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsDetectDriftRequest;
  hasStudy(): boolean;
  clearStudy(): DsDetectDriftRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsDetectDriftRequest;
  hasModel(): boolean;
  clearModel(): DsDetectDriftRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsDetectDriftRequest;
  hasConnection(): boolean;
  clearConnection(): DsDetectDriftRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsDetectDriftRequest;
  hasBucket(): boolean;
  clearBucket(): DsDetectDriftRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsDetectDriftRequest;

  getTraininghistogramList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;
  setTraininghistogramList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>): DsDetectDriftRequest;
  clearTraininghistogramList(): DsDetectDriftRequest;
  addTraininghistogram(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram;

  getPredictionhistogramList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;
  setPredictionhistogramList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>): DsDetectDriftRequest;
  clearPredictionhistogramList(): DsDetectDriftRequest;
  addPredictionhistogram(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsDetectDriftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsDetectDriftRequest): DsDetectDriftRequest.AsObject;
  static serializeBinaryToWriter(message: DsDetectDriftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsDetectDriftRequest;
  static deserializeBinaryFromReader(message: DsDetectDriftRequest, reader: jspb.BinaryReader): DsDetectDriftRequest;
}

export namespace DsDetectDriftRequest {
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
    traininghistogramList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject>,
    predictionhistogramList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject>,
  }
}

export class DsDetectDriftResponse extends jspb.Message {
  getResultsMap(): jspb.Map<string, number>;
  clearResultsMap(): DsDetectDriftResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsDetectDriftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsDetectDriftResponse): DsDetectDriftResponse.AsObject;
  static serializeBinaryToWriter(message: DsDetectDriftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsDetectDriftResponse;
  static deserializeBinaryFromReader(message: DsDetectDriftResponse, reader: jspb.BinaryReader): DsDetectDriftResponse;
}

export namespace DsDetectDriftResponse {
  export type AsObject = {
    resultsMap: Array<[string, number]>,
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

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsCreateStudyProfileRequest;
  hasStudy(): boolean;
  clearStudy(): DsCreateStudyProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateStudyProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateStudyProfileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateStudyProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateStudyProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateStudyProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateStudyProfileRequest;

  getModelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): DsCreateStudyProfileRequest;
  clearModelsList(): DsCreateStudyProfileRequest;
  addModels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsCreateStudyProfileRequest;

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
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    modelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsCreateStudyProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsCreateStudyProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateStudyProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateStudyProfileResponse): DsCreateStudyProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateStudyProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateStudyProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateStudyProfileResponse, reader: jspb.BinaryReader): DsCreateStudyProfileResponse;
}

export namespace DsCreateStudyProfileResponse {
  export type AsObject = {
    uri: string,
  }
}

export class DsTestDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsTestDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): DsTestDatasetRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsTestDatasetRequest;
  hasVersion(): boolean;
  clearVersion(): DsTestDatasetRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsTestDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsTestDatasetRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsTestDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): DsTestDatasetRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsTestDatasetRequest;
  hasConnection(): boolean;
  clearConnection(): DsTestDatasetRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsTestDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): DsTestDatasetRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsTestDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTestDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsTestDatasetRequest): DsTestDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DsTestDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTestDatasetRequest;
  static deserializeBinaryFromReader(message: DsTestDatasetRequest, reader: jspb.BinaryReader): DsTestDatasetRequest;
}

export namespace DsTestDatasetRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsTestDatasetResponse extends jspb.Message {
  getResultList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestCaseResult>;
  setResultList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestCaseResult>): DsTestDatasetResponse;
  clearResultList(): DsTestDatasetResponse;
  addResult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestCaseResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestCaseResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTestDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsTestDatasetResponse): DsTestDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DsTestDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTestDatasetResponse;
  static deserializeBinaryFromReader(message: DsTestDatasetResponse, reader: jspb.BinaryReader): DsTestDatasetResponse;
}

export namespace DsTestDatasetResponse {
  export type AsObject = {
    resultList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestCaseResult.AsObject>,
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
  }
}

export class DsGenerateDatasetResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): DsGenerateDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGenerateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGenerateDatasetResponse): DsGenerateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DsGenerateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGenerateDatasetResponse;
  static deserializeBinaryFromReader(message: DsGenerateDatasetResponse, reader: jspb.BinaryReader): DsGenerateDatasetResponse;
}

export namespace DsGenerateDatasetResponse {
  export type AsObject = {
    key: string,
  }
}

export class DsSplitDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsSplitDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): DsSplitDatasetRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsSplitDatasetRequest;
  hasVersion(): boolean;
  clearVersion(): DsSplitDatasetRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsSplitDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): DsSplitDatasetRequest;

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

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsSplitDatasetRequest;
  hasConnection(): boolean;
  clearConnection(): DsSplitDatasetRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsSplitDatasetRequest;

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

export class DsSplitDatasetToRungsRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsSplitDatasetToRungsRequest;
  hasProduct(): boolean;
  clearProduct(): DsSplitDatasetToRungsRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsSplitDatasetToRungsRequest;
  hasVersion(): boolean;
  clearVersion(): DsSplitDatasetToRungsRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsSplitDatasetToRungsRequest;
  hasBucket(): boolean;
  clearBucket(): DsSplitDatasetToRungsRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsSplitDatasetToRungsRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsSplitDatasetToRungsRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSplitDatasetToRungsRequest;
  hasDataset(): boolean;
  clearDataset(): DsSplitDatasetToRungsRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsSplitDatasetToRungsRequest;
  hasConnection(): boolean;
  clearConnection(): DsSplitDatasetToRungsRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsSplitDatasetToRungsRequest;

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
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
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

export class DsSplitDatasetResponse extends jspb.Message {
  getTraining(): number;
  setTraining(value: number): DsSplitDatasetResponse;

  getTesting(): number;
  setTesting(value: number): DsSplitDatasetResponse;

  getValidation(): number;
  setValidation(value: number): DsSplitDatasetResponse;

  getTrainingHash(): string;
  setTrainingHash(value: string): DsSplitDatasetResponse;

  getTestingHash(): string;
  setTestingHash(value: string): DsSplitDatasetResponse;

  getValidationHash(): string;
  setValidationHash(value: string): DsSplitDatasetResponse;

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

export class DsDatasetProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsDatasetProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsDatasetProfileRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsDatasetProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsDatasetProfileRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsDatasetProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsDatasetProfileRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsDatasetProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsDatasetProfileRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsDatasetProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsDatasetProfileRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsDatasetProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsDatasetProfileRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsDatasetProfileRequest;

  getQuick(): boolean;
  setQuick(value: boolean): DsDatasetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsDatasetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsDatasetProfileRequest): DsDatasetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsDatasetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsDatasetProfileRequest;
  static deserializeBinaryFromReader(message: DsDatasetProfileRequest, reader: jspb.BinaryReader): DsDatasetProfileRequest;
}

export namespace DsDatasetProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    quick: boolean,
  }
}

export class DsDatasetProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile): DsDatasetProfileResponse;
  hasProfile(): boolean;
  clearProfile(): DsDatasetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsDatasetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsDatasetProfileResponse): DsDatasetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsDatasetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsDatasetProfileResponse;
  static deserializeBinaryFromReader(message: DsDatasetProfileResponse, reader: jspb.BinaryReader): DsDatasetProfileResponse;
}

export namespace DsDatasetProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
  }
}

export class DsInferSchemaRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsInferSchemaRequest;
  hasBucket(): boolean;
  clearBucket(): DsInferSchemaRequest;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): DsInferSchemaRequest;
  hasLocation(): boolean;
  clearLocation(): DsInferSchemaRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsInferSchemaRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsInferSchemaRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsInferSchemaRequest;
  hasConnection(): boolean;
  clearConnection(): DsInferSchemaRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsInferSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsInferSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsInferSchemaRequest): DsInferSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: DsInferSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsInferSchemaRequest;
  static deserializeBinaryFromReader(message: DsInferSchemaRequest, reader: jspb.BinaryReader): DsInferSchemaRequest;
}

export namespace DsInferSchemaRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
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
  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsGetTableViewRequest;
  hasBucket(): boolean;
  clearBucket(): DsGetTableViewRequest;

  getFlatfile(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec | undefined;
  setFlatfile(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec): DsGetTableViewRequest;
  hasFlatfile(): boolean;
  clearFlatfile(): DsGetTableViewRequest;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): DsGetTableViewRequest;
  hasLocation(): boolean;
  clearLocation(): DsGetTableViewRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGetTableViewRequest;
  hasConnection(): boolean;
  clearConnection(): DsGetTableViewRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsGetTableViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetTableViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetTableViewRequest): DsGetTableViewRequest.AsObject;
  static serializeBinaryToWriter(message: DsGetTableViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetTableViewRequest;
  static deserializeBinaryFromReader(message: DsGetTableViewRequest, reader: jspb.BinaryReader): DsGetTableViewRequest;
}

export namespace DsGetTableViewRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    flatfile?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateModelReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateModelReportRequest;

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

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateModelReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateModelReportRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CreateModelReportRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateModelReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateModelReportRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateDatasetReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateDatasetReportRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateDatasetReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateDatasetReportRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateDatasetReportRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateDatasetReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateDatasetReportRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateDatasetReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateDatasetReportRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CreateDatasetReportRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    report?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class CreateStudyReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateStudyReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateStudyReportRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateStudyReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateStudyReportRequest;

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

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateStudyReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateStudyReportRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateStudyReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateStudyReportRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CreateStudyReportRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    models?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    report?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class AskModelRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskModelRequest;
  hasProduct(): boolean;
  clearProduct(): AskModelRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): AskModelRequest;
  hasVersion(): boolean;
  clearVersion(): AskModelRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    budget: number,
    defaulthp: boolean,
    algorithm: string,
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

export class AskEnsembleRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskEnsembleRequest;
  hasProduct(): boolean;
  clearProduct(): AskEnsembleRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): AskEnsembleRequest;
  hasVersion(): boolean;
  clearVersion(): AskEnsembleRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    modelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): AskBaselineRequest;
  hasVersion(): boolean;
  clearVersion(): AskBaselineRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    algnamesList: Array<string>,
    all: boolean,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): AskAllModelsForTaskRequest;
  hasVersion(): boolean;
  clearVersion(): AskAllModelsForTaskRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    budget: number,
    task: string,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): TellModelRequest;
  hasVersion(): boolean;
  clearVersion(): TellModelRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
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

export class DsTestModelRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsTestModelRequest;
  hasProduct(): boolean;
  clearProduct(): DsTestModelRequest;

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsTestModelRequest;
  hasVersion(): boolean;
  clearVersion(): DsTestModelRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsTestModelRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsTestModelRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsTestModelRequest;
  hasDataset(): boolean;
  clearDataset(): DsTestModelRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsTestModelRequest;
  hasStudy(): boolean;
  clearStudy(): DsTestModelRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsTestModelRequest;
  hasModel(): boolean;
  clearModel(): DsTestModelRequest;

  getPredictor(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setPredictor(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): DsTestModelRequest;
  hasPredictor(): boolean;
  clearPredictor(): DsTestModelRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsTestModelRequest;
  hasConnection(): boolean;
  clearConnection(): DsTestModelRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsTestModelRequest;
  hasBucket(): boolean;
  clearBucket(): DsTestModelRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsTestModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTestModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsTestModelRequest): DsTestModelRequest.AsObject;
  static serializeBinaryToWriter(message: DsTestModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTestModelRequest;
  static deserializeBinaryFromReader(message: DsTestModelRequest, reader: jspb.BinaryReader): DsTestModelRequest;
}

export namespace DsTestModelRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    predictor?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class DsTestModelResponse extends jspb.Message {
  getResultList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestResult>;
  setResultList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestResult>): DsTestModelResponse;
  clearResultList(): DsTestModelResponse;
  addResult(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsTestModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsTestModelResponse): DsTestModelResponse.AsObject;
  static serializeBinaryToWriter(message: DsTestModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsTestModelResponse;
  static deserializeBinaryFromReader(message: DsTestModelResponse, reader: jspb.BinaryReader): DsTestModelResponse;
}

export namespace DsTestModelResponse {
  export type AsObject = {
    resultList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestResult.AsObject>,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsStudyEndedRequest;
  hasVersion(): boolean;
  clearVersion(): DsStudyEndedRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsStudyEndedRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsStudyEndedRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsStudyEndedRequest;
  hasDataset(): boolean;
  clearDataset(): DsStudyEndedRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsStudyEndedRequest;
  hasStudy(): boolean;
  clearStudy(): DsStudyEndedRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsStudyEndedRequest;
  hasConnection(): boolean;
  clearConnection(): DsStudyEndedRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsStudyEndedRequest;
  hasBucket(): boolean;
  clearBucket(): DsStudyEndedRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsStudyEndedRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): SaveOptimizerDBRequest;
  hasVersion(): boolean;
  clearVersion(): SaveOptimizerDBRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): SaveOptimizerDBRequest;
  hasDatasource(): boolean;
  clearDatasource(): SaveOptimizerDBRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): SaveOptimizerDBRequest;
  hasDataset(): boolean;
  clearDataset(): SaveOptimizerDBRequest;

  getStudy(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): SaveOptimizerDBRequest;
  hasStudy(): boolean;
  clearStudy(): SaveOptimizerDBRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): SaveOptimizerDBRequest;
  hasConnection(): boolean;
  clearConnection(): SaveOptimizerDBRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): SaveOptimizerDBRequest;
  hasBucket(): boolean;
  clearBucket(): SaveOptimizerDBRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): SaveOptimizerDBRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class SaveOptimizerDBResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveOptimizerDBResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveOptimizerDBResponse): SaveOptimizerDBResponse.AsObject;
  static serializeBinaryToWriter(message: SaveOptimizerDBResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveOptimizerDBResponse;
  static deserializeBinaryFromReader(message: SaveOptimizerDBResponse, reader: jspb.BinaryReader): SaveOptimizerDBResponse;
}

export namespace SaveOptimizerDBResponse {
  export type AsObject = {
  }
}

export class DsGetDatabasesRequest extends jspb.Message {
  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGetDatabasesRequest;
  hasConnection(): boolean;
  clearConnection(): DsGetDatabasesRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsGetDatabasesRequest;

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
    secretMap: Array<[string, Uint8Array | string]>,
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

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsGetTablesRequest;

  getDatabasename(): string;
  setDatabasename(value: string): DsGetTablesRequest;

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
    secretMap: Array<[string, Uint8Array | string]>,
    databasename: string,
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

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): DsExecuteSqlRequest;

  getDatabasename(): string;
  setDatabasename(value: string): DsExecuteSqlRequest;

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
    secretMap: Array<[string, Uint8Array | string]>,
    databasename: string,
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

  getVersion(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsSnapshotRequest;
  hasVersion(): boolean;
  clearVersion(): DsSnapshotRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsSnapshotRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsSnapshotRequest;

  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSnapshotRequest;
  hasDataset(): boolean;
  clearDataset(): DsSnapshotRequest;

  getDbconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setDbconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsSnapshotRequest;
  hasDbconnection(): boolean;
  clearDbconnection(): DsSnapshotRequest;

  getDbsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearDbsecretMap(): DsSnapshotRequest;

  getStorageconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setStorageconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsSnapshotRequest;
  hasStorageconnection(): boolean;
  clearStorageconnection(): DsSnapshotRequest;

  getStoragesecretMap(): jspb.Map<string, Uint8Array | string>;
  clearStoragesecretMap(): DsSnapshotRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsSnapshotRequest;
  hasBucket(): boolean;
  clearBucket(): DsSnapshotRequest;

  getKey(): string;
  setKey(value: string): DsSnapshotRequest;

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
    version?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    dbconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    dbsecretMap: Array<[string, Uint8Array | string]>,
    storageconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    storagesecretMap: Array<[string, Uint8Array | string]>,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    key: string,
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

