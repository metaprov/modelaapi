import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';


export class ListServingSitesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListServingSitesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListServingSitesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListServingSitesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListServingSitesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListServingSitesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingSitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingSitesRequest): ListServingSitesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServingSitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingSitesRequest;
  static deserializeBinaryFromReader(message: ListServingSitesRequest, reader: jspb.BinaryReader): ListServingSitesRequest;
}

export namespace ListServingSitesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListServingSitesResponse extends jspb.Message {
  getServingsites(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSiteList | undefined;
  setServingsites(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSiteList): ListServingSitesResponse;
  hasServingsites(): boolean;
  clearServingsites(): ListServingSitesResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServingSitesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingSitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingSitesResponse): ListServingSitesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServingSitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingSitesResponse;
  static deserializeBinaryFromReader(message: ListServingSitesResponse, reader: jspb.BinaryReader): ListServingSitesResponse;
}

export namespace ListServingSitesResponse {
  export type AsObject = {
    servingsites?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSiteList.AsObject,
    nextPageToken: string,
  }
}

export class CreateServingSiteRequest extends jspb.Message {
  getServingsite(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setServingsite(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): CreateServingSiteRequest;
  hasServingsite(): boolean;
  clearServingsite(): CreateServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServingSiteRequest): CreateServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServingSiteRequest;
  static deserializeBinaryFromReader(message: CreateServingSiteRequest, reader: jspb.BinaryReader): CreateServingSiteRequest;
}

export namespace CreateServingSiteRequest {
  export type AsObject = {
    servingsite?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class CreateServingSiteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServingSiteResponse): CreateServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: CreateServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServingSiteResponse;
  static deserializeBinaryFromReader(message: CreateServingSiteResponse, reader: jspb.BinaryReader): CreateServingSiteResponse;
}

export namespace CreateServingSiteResponse {
  export type AsObject = {
  }
}

export class UpdateServingSiteRequest extends jspb.Message {
  getServingsite(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setServingsite(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): UpdateServingSiteRequest;
  hasServingsite(): boolean;
  clearServingsite(): UpdateServingSiteRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateServingSiteRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServingSiteRequest): UpdateServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServingSiteRequest;
  static deserializeBinaryFromReader(message: UpdateServingSiteRequest, reader: jspb.BinaryReader): UpdateServingSiteRequest;
}

export namespace UpdateServingSiteRequest {
  export type AsObject = {
    servingsite?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateServingSiteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServingSiteResponse): UpdateServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServingSiteResponse;
  static deserializeBinaryFromReader(message: UpdateServingSiteResponse, reader: jspb.BinaryReader): UpdateServingSiteResponse;
}

export namespace UpdateServingSiteResponse {
  export type AsObject = {
  }
}

export class GetServingSiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetServingSiteRequest;

  getName(): string;
  setName(value: string): GetServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServingSiteRequest): GetServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: GetServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServingSiteRequest;
  static deserializeBinaryFromReader(message: GetServingSiteRequest, reader: jspb.BinaryReader): GetServingSiteRequest;
}

export namespace GetServingSiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetServingSiteResponse extends jspb.Message {
  getServingsite(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setServingsite(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): GetServingSiteResponse;
  hasServingsite(): boolean;
  clearServingsite(): GetServingSiteResponse;

  getYaml(): string;
  setYaml(value: string): GetServingSiteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServingSiteResponse): GetServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: GetServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServingSiteResponse;
  static deserializeBinaryFromReader(message: GetServingSiteResponse, reader: jspb.BinaryReader): GetServingSiteResponse;
}

export namespace GetServingSiteResponse {
  export type AsObject = {
    servingsite?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
    yaml: string,
  }
}

export class GetPublicKeyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPublicKeyRequest;

  getName(): string;
  setName(value: string): GetPublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicKeyRequest): GetPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicKeyRequest;
  static deserializeBinaryFromReader(message: GetPublicKeyRequest, reader: jspb.BinaryReader): GetPublicKeyRequest;
}

export namespace GetPublicKeyRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPublicKeyResponse extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): GetPublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicKeyResponse): GetPublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetPublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicKeyResponse;
  static deserializeBinaryFromReader(message: GetPublicKeyResponse, reader: jspb.BinaryReader): GetPublicKeyResponse;
}

export namespace GetPublicKeyResponse {
  export type AsObject = {
    publickey: Uint8Array | string,
  }
}

export class DeleteServingSiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteServingSiteRequest;

  getName(): string;
  setName(value: string): DeleteServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServingSiteRequest): DeleteServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServingSiteRequest;
  static deserializeBinaryFromReader(message: DeleteServingSiteRequest, reader: jspb.BinaryReader): DeleteServingSiteRequest;
}

export namespace DeleteServingSiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteServingSiteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServingSiteResponse): DeleteServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServingSiteResponse;
  static deserializeBinaryFromReader(message: DeleteServingSiteResponse, reader: jspb.BinaryReader): DeleteServingSiteResponse;
}

export namespace DeleteServingSiteResponse {
  export type AsObject = {
  }
}

