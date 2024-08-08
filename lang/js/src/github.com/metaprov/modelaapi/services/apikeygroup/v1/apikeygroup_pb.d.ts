import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated_pb';


export class ListAPIKeyGroupsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAPIKeyGroupsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListAPIKeyGroupsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAPIKeyGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAPIKeyGroupsRequest): ListAPIKeyGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAPIKeyGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAPIKeyGroupsRequest;
  static deserializeBinaryFromReader(message: ListAPIKeyGroupsRequest, reader: jspb.BinaryReader): ListAPIKeyGroupsRequest;
}

export namespace ListAPIKeyGroupsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListAPIKeyGroupsResponse extends jspb.Message {
  getApikeygroups(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroupList | undefined;
  setApikeygroups(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroupList): ListAPIKeyGroupsResponse;
  hasApikeygroups(): boolean;
  clearApikeygroups(): ListAPIKeyGroupsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAPIKeyGroupsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAPIKeyGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAPIKeyGroupsResponse): ListAPIKeyGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAPIKeyGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAPIKeyGroupsResponse;
  static deserializeBinaryFromReader(message: ListAPIKeyGroupsResponse, reader: jspb.BinaryReader): ListAPIKeyGroupsResponse;
}

export namespace ListAPIKeyGroupsResponse {
  export type AsObject = {
    apikeygroups?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroupList.AsObject,
    nextPageToken: string,
  }
}

export class CreateAPIKeyGroupRequest extends jspb.Message {
  getApikeygroup(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup | undefined;
  setApikeygroup(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup): CreateAPIKeyGroupRequest;
  hasApikeygroup(): boolean;
  clearApikeygroup(): CreateAPIKeyGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAPIKeyGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAPIKeyGroupRequest): CreateAPIKeyGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAPIKeyGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAPIKeyGroupRequest;
  static deserializeBinaryFromReader(message: CreateAPIKeyGroupRequest, reader: jspb.BinaryReader): CreateAPIKeyGroupRequest;
}

export namespace CreateAPIKeyGroupRequest {
  export type AsObject = {
    apikeygroup?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup.AsObject,
  }
}

export class CreateAPIKeyGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAPIKeyGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAPIKeyGroupResponse): CreateAPIKeyGroupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAPIKeyGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAPIKeyGroupResponse;
  static deserializeBinaryFromReader(message: CreateAPIKeyGroupResponse, reader: jspb.BinaryReader): CreateAPIKeyGroupResponse;
}

export namespace CreateAPIKeyGroupResponse {
  export type AsObject = {
  }
}

export class UpdateAPIKeyGroupRequest extends jspb.Message {
  getApikeygroup(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup | undefined;
  setApikeygroup(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup): UpdateAPIKeyGroupRequest;
  hasApikeygroup(): boolean;
  clearApikeygroup(): UpdateAPIKeyGroupRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAPIKeyGroupRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateAPIKeyGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAPIKeyGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAPIKeyGroupRequest): UpdateAPIKeyGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAPIKeyGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAPIKeyGroupRequest;
  static deserializeBinaryFromReader(message: UpdateAPIKeyGroupRequest, reader: jspb.BinaryReader): UpdateAPIKeyGroupRequest;
}

export namespace UpdateAPIKeyGroupRequest {
  export type AsObject = {
    apikeygroup?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAPIKeyGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAPIKeyGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAPIKeyGroupResponse): UpdateAPIKeyGroupResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAPIKeyGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAPIKeyGroupResponse;
  static deserializeBinaryFromReader(message: UpdateAPIKeyGroupResponse, reader: jspb.BinaryReader): UpdateAPIKeyGroupResponse;
}

export namespace UpdateAPIKeyGroupResponse {
  export type AsObject = {
  }
}

export class GetAPIKeyGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAPIKeyGroupRequest;

  getName(): string;
  setName(value: string): GetAPIKeyGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAPIKeyGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAPIKeyGroupRequest): GetAPIKeyGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetAPIKeyGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAPIKeyGroupRequest;
  static deserializeBinaryFromReader(message: GetAPIKeyGroupRequest, reader: jspb.BinaryReader): GetAPIKeyGroupRequest;
}

export namespace GetAPIKeyGroupRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAPIKeyGroupResponse extends jspb.Message {
  getApikeygroup(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup | undefined;
  setApikeygroup(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup): GetAPIKeyGroupResponse;
  hasApikeygroup(): boolean;
  clearApikeygroup(): GetAPIKeyGroupResponse;

  getYaml(): string;
  setYaml(value: string): GetAPIKeyGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAPIKeyGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAPIKeyGroupResponse): GetAPIKeyGroupResponse.AsObject;
  static serializeBinaryToWriter(message: GetAPIKeyGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAPIKeyGroupResponse;
  static deserializeBinaryFromReader(message: GetAPIKeyGroupResponse, reader: jspb.BinaryReader): GetAPIKeyGroupResponse;
}

export namespace GetAPIKeyGroupResponse {
  export type AsObject = {
    apikeygroup?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.APIKeyGroup.AsObject,
    yaml: string,
  }
}

export class DeleteAPIKeyGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAPIKeyGroupRequest;

  getName(): string;
  setName(value: string): DeleteAPIKeyGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAPIKeyGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAPIKeyGroupRequest): DeleteAPIKeyGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAPIKeyGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAPIKeyGroupRequest;
  static deserializeBinaryFromReader(message: DeleteAPIKeyGroupRequest, reader: jspb.BinaryReader): DeleteAPIKeyGroupRequest;
}

export namespace DeleteAPIKeyGroupRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteAPIKeyGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAPIKeyGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAPIKeyGroupResponse): DeleteAPIKeyGroupResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAPIKeyGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAPIKeyGroupResponse;
  static deserializeBinaryFromReader(message: DeleteAPIKeyGroupResponse, reader: jspb.BinaryReader): DeleteAPIKeyGroupResponse;
}

export namespace DeleteAPIKeyGroupResponse {
  export type AsObject = {
  }
}

export class GenerateAPIKeyRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): GenerateAPIKeyRequest;

  getNamespace(): string;
  setNamespace(value: string): GenerateAPIKeyRequest;

  getName(): string;
  setName(value: string): GenerateAPIKeyRequest;

  getKeyname(): string;
  setKeyname(value: string): GenerateAPIKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAPIKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAPIKeyRequest): GenerateAPIKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateAPIKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAPIKeyRequest;
  static deserializeBinaryFromReader(message: GenerateAPIKeyRequest, reader: jspb.BinaryReader): GenerateAPIKeyRequest;
}

export namespace GenerateAPIKeyRequest {
  export type AsObject = {
    tenant: string,
    namespace: string,
    name: string,
    keyname: string,
  }
}

export class GenerateAPIKeyResponse extends jspb.Message {
  getApikey(): string;
  setApikey(value: string): GenerateAPIKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAPIKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAPIKeyResponse): GenerateAPIKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateAPIKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAPIKeyResponse;
  static deserializeBinaryFromReader(message: GenerateAPIKeyResponse, reader: jspb.BinaryReader): GenerateAPIKeyResponse;
}

export namespace GenerateAPIKeyResponse {
  export type AsObject = {
    apikey: string,
  }
}

export class RefreshAPIKeyGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): RefreshAPIKeyGroupRequest;

  getName(): string;
  setName(value: string): RefreshAPIKeyGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshAPIKeyGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshAPIKeyGroupRequest): RefreshAPIKeyGroupRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshAPIKeyGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshAPIKeyGroupRequest;
  static deserializeBinaryFromReader(message: RefreshAPIKeyGroupRequest, reader: jspb.BinaryReader): RefreshAPIKeyGroupRequest;
}

export namespace RefreshAPIKeyGroupRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class RefreshAPIKeyGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshAPIKeyGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshAPIKeyGroupResponse): RefreshAPIKeyGroupResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshAPIKeyGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshAPIKeyGroupResponse;
  static deserializeBinaryFromReader(message: RefreshAPIKeyGroupResponse, reader: jspb.BinaryReader): RefreshAPIKeyGroupResponse;
}

export namespace RefreshAPIKeyGroupResponse {
  export type AsObject = {
  }
}

