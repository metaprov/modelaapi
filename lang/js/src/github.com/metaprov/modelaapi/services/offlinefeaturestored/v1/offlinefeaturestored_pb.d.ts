import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class CreateFeatureRequest extends jspb.Message {
  getFeaturesource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFeaturesource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): CreateFeatureRequest;
  hasFeaturesource(): boolean;
  clearFeaturesource(): CreateFeatureRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateFeatureRequest;
  hasConnection(): boolean;
  clearConnection(): CreateFeatureRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CreateFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureRequest): CreateFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureRequest;
  static deserializeBinaryFromReader(message: CreateFeatureRequest, reader: jspb.BinaryReader): CreateFeatureRequest;
}

export namespace CreateFeatureRequest {
  export type AsObject = {
    featuresource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class CreateFeatureResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureResponse): CreateFeatureResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureResponse;
  static deserializeBinaryFromReader(message: CreateFeatureResponse, reader: jspb.BinaryReader): CreateFeatureResponse;
}

export namespace CreateFeatureResponse {
  export type AsObject = {
  }
}

export class DeleteFeatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteFeatureRequest;

  getNs(): string;
  setNs(value: string): DeleteFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureRequest): DeleteFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureRequest;
  static deserializeBinaryFromReader(message: DeleteFeatureRequest, reader: jspb.BinaryReader): DeleteFeatureRequest;
}

export namespace DeleteFeatureRequest {
  export type AsObject = {
    name: string,
    ns: string,
  }
}

export class DeleteFeatureResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureResponse): DeleteFeatureResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureResponse;
  static deserializeBinaryFromReader(message: DeleteFeatureResponse, reader: jspb.BinaryReader): DeleteFeatureResponse;
}

export namespace DeleteFeatureResponse {
  export type AsObject = {
  }
}

export class UpdateFeatureRequest extends jspb.Message {
  getFeaturesource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFeaturesource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): UpdateFeatureRequest;
  hasFeaturesource(): boolean;
  clearFeaturesource(): UpdateFeatureRequest;

  getConnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): UpdateFeatureRequest;
  hasConnection(): boolean;
  clearConnection(): UpdateFeatureRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): UpdateFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureRequest): UpdateFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureRequest, reader: jspb.BinaryReader): UpdateFeatureRequest;
}

export namespace UpdateFeatureRequest {
  export type AsObject = {
    featuresource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
    connection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class UpdateFeatureResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureResponse): UpdateFeatureResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureResponse;
  static deserializeBinaryFromReader(message: UpdateFeatureResponse, reader: jspb.BinaryReader): UpdateFeatureResponse;
}

export namespace UpdateFeatureResponse {
  export type AsObject = {
  }
}

export class ListFeaturesRequest extends jspb.Message {
  getNs(): string;
  setNs(value: string): ListFeaturesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesRequest): ListFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesRequest;
  static deserializeBinaryFromReader(message: ListFeaturesRequest, reader: jspb.BinaryReader): ListFeaturesRequest;
}

export namespace ListFeaturesRequest {
  export type AsObject = {
    ns: string,
  }
}

export class ListFeaturesResponse extends jspb.Message {
  getFeatures(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList | undefined;
  setFeatures(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList): ListFeaturesResponse;
  hasFeatures(): boolean;
  clearFeatures(): ListFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesResponse): ListFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesResponse;
  static deserializeBinaryFromReader(message: ListFeaturesResponse, reader: jspb.BinaryReader): ListFeaturesResponse;
}

export namespace ListFeaturesResponse {
  export type AsObject = {
    features?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList.AsObject,
  }
}

export class GetFeatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFeatureRequest;

  getNs(): string;
  setNs(value: string): GetFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureRequest): GetFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureRequest;
  static deserializeBinaryFromReader(message: GetFeatureRequest, reader: jspb.BinaryReader): GetFeatureRequest;
}

export namespace GetFeatureRequest {
  export type AsObject = {
    name: string,
    ns: string,
  }
}

export class GetFeatureResponse extends jspb.Message {
  getFeature(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFeature(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): GetFeatureResponse;
  hasFeature(): boolean;
  clearFeature(): GetFeatureResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureResponse): GetFeatureResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureResponse;
  static deserializeBinaryFromReader(message: GetFeatureResponse, reader: jspb.BinaryReader): GetFeatureResponse;
}

export namespace GetFeatureResponse {
  export type AsObject = {
    feature?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
  }
}

export class GenerateTrainingDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GenerateTrainingDatasetRequest;

  getNs(): string;
  setNs(value: string): GenerateTrainingDatasetRequest;

  getFeatures(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList | undefined;
  setFeatures(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList): GenerateTrainingDatasetRequest;
  hasFeatures(): boolean;
  clearFeatures(): GenerateTrainingDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTrainingDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTrainingDatasetRequest): GenerateTrainingDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateTrainingDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTrainingDatasetRequest;
  static deserializeBinaryFromReader(message: GenerateTrainingDatasetRequest, reader: jspb.BinaryReader): GenerateTrainingDatasetRequest;
}

export namespace GenerateTrainingDatasetRequest {
  export type AsObject = {
    name: string,
    ns: string,
    features?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList.AsObject,
  }
}

export class GenerateTrainingDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTrainingDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTrainingDatasetResponse): GenerateTrainingDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateTrainingDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTrainingDatasetResponse;
  static deserializeBinaryFromReader(message: GenerateTrainingDatasetResponse, reader: jspb.BinaryReader): GenerateTrainingDatasetResponse;
}

export namespace GenerateTrainingDatasetResponse {
  export type AsObject = {
  }
}

