import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class CreateFeatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateFeatureRequest;

  getNs(): string;
  setNs(value: string): CreateFeatureRequest;

  getConnectionname(): string;
  setConnectionname(value: string): CreateFeatureRequest;

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
    name: string,
    ns: string,
    connectionname: string,
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
  getConnections(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureList | undefined;
  setConnections(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureList): ListFeaturesResponse;
  hasConnections(): boolean;
  clearConnections(): ListFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesResponse): ListFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesResponse;
  static deserializeBinaryFromReader(message: ListFeaturesResponse, reader: jspb.BinaryReader): ListFeaturesResponse;
}

export namespace ListFeaturesResponse {
  export type AsObject = {
    connections?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureList.AsObject,
  }
}

export class GetFeatureRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetFeatureRequest;

  getNs(): string;
  setNs(value: string): GetFeatureRequest;

  getFeature(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature | undefined;
  setFeature(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature): GetFeatureRequest;
  hasFeature(): boolean;
  clearFeature(): GetFeatureRequest;

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
    feature?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature.AsObject,
  }
}

export class GetFeatureResponse extends jspb.Message {
  getFeature(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature | undefined;
  setFeature(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature): GetFeatureResponse;
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
    feature?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature.AsObject,
  }
}

export class EnrichRequest extends jspb.Message {
  getId(): string;
  setId(value: string): EnrichRequest;

  getRecord(): string;
  setRecord(value: string): EnrichRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrichRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnrichRequest): EnrichRequest.AsObject;
  static serializeBinaryToWriter(message: EnrichRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrichRequest;
  static deserializeBinaryFromReader(message: EnrichRequest, reader: jspb.BinaryReader): EnrichRequest;
}

export namespace EnrichRequest {
  export type AsObject = {
    id: string,
    record: string,
  }
}

export class EnrichResponse extends jspb.Message {
  getId(): string;
  setId(value: string): EnrichResponse;

  getRecord(): string;
  setRecord(value: string): EnrichResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrichResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnrichResponse): EnrichResponse.AsObject;
  static serializeBinaryToWriter(message: EnrichResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrichResponse;
  static deserializeBinaryFromReader(message: EnrichResponse, reader: jspb.BinaryReader): EnrichResponse;
}

export namespace EnrichResponse {
  export type AsObject = {
    id: string,
    record: string,
  }
}

export class UpdateFeatureRequest extends jspb.Message {
  getFeature(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature | undefined;
  setFeature(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature): UpdateFeatureRequest;
  hasFeature(): boolean;
  clearFeature(): UpdateFeatureRequest;

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
    feature?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Feature.AsObject,
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

