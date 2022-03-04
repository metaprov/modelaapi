import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class ListUserRoleClasssRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListUserRoleClasssRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListUserRoleClasssRequest;

  getPageSize(): number;
  setPageSize(value: number): ListUserRoleClasssRequest;

  getPageToken(): string;
  setPageToken(value: string): ListUserRoleClasssRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListUserRoleClasssRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRoleClasssRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRoleClasssRequest): ListUserRoleClasssRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserRoleClasssRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRoleClasssRequest;
  static deserializeBinaryFromReader(message: ListUserRoleClasssRequest, reader: jspb.BinaryReader): ListUserRoleClasssRequest;
}

export namespace ListUserRoleClasssRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListUserRoleClasssResponse extends jspb.Message {
  getRoles(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClassList | undefined;
  setRoles(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClassList): ListUserRoleClasssResponse;
  hasRoles(): boolean;
  clearRoles(): ListUserRoleClasssResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListUserRoleClasssResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRoleClasssResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRoleClasssResponse): ListUserRoleClasssResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserRoleClasssResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRoleClasssResponse;
  static deserializeBinaryFromReader(message: ListUserRoleClasssResponse, reader: jspb.BinaryReader): ListUserRoleClasssResponse;
}

export namespace ListUserRoleClasssResponse {
  export type AsObject = {
    roles?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClassList.AsObject,
    nextPageToken: string,
  }
}

export class UserRoleClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassResponse): UserRoleClassResponse.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassResponse;
  static deserializeBinaryFromReader(message: UserRoleClassResponse, reader: jspb.BinaryReader): UserRoleClassResponse;
}

export namespace UserRoleClassResponse {
  export type AsObject = {
  }
}

export class CreateUserRoleClassRequest extends jspb.Message {
  getRole(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass | undefined;
  setRole(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass): CreateUserRoleClassRequest;
  hasRole(): boolean;
  clearRole(): CreateUserRoleClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRoleClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRoleClassRequest): CreateUserRoleClassRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRoleClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRoleClassRequest;
  static deserializeBinaryFromReader(message: CreateUserRoleClassRequest, reader: jspb.BinaryReader): CreateUserRoleClassRequest;
}

export namespace CreateUserRoleClassRequest {
  export type AsObject = {
    role?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass.AsObject,
  }
}

export class CreateUserRoleClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRoleClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRoleClassResponse): CreateUserRoleClassResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserRoleClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRoleClassResponse;
  static deserializeBinaryFromReader(message: CreateUserRoleClassResponse, reader: jspb.BinaryReader): CreateUserRoleClassResponse;
}

export namespace CreateUserRoleClassResponse {
  export type AsObject = {
  }
}

export class UpdateUserRoleClassRequest extends jspb.Message {
  getRole(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass | undefined;
  setRole(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass): UpdateUserRoleClassRequest;
  hasRole(): boolean;
  clearRole(): UpdateUserRoleClassRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateUserRoleClassRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateUserRoleClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRoleClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRoleClassRequest): UpdateUserRoleClassRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRoleClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRoleClassRequest;
  static deserializeBinaryFromReader(message: UpdateUserRoleClassRequest, reader: jspb.BinaryReader): UpdateUserRoleClassRequest;
}

export namespace UpdateUserRoleClassRequest {
  export type AsObject = {
    role?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserRoleClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRoleClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRoleClassResponse): UpdateUserRoleClassResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRoleClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRoleClassResponse;
  static deserializeBinaryFromReader(message: UpdateUserRoleClassResponse, reader: jspb.BinaryReader): UpdateUserRoleClassResponse;
}

export namespace UpdateUserRoleClassResponse {
  export type AsObject = {
  }
}

export class GetUserRoleClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetUserRoleClassRequest;

  getName(): string;
  setName(value: string): GetUserRoleClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRoleClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRoleClassRequest): GetUserRoleClassRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRoleClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRoleClassRequest;
  static deserializeBinaryFromReader(message: GetUserRoleClassRequest, reader: jspb.BinaryReader): GetUserRoleClassRequest;
}

export namespace GetUserRoleClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetUserRoleClassResponse extends jspb.Message {
  getRole(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass | undefined;
  setRole(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass): GetUserRoleClassResponse;
  hasRole(): boolean;
  clearRole(): GetUserRoleClassResponse;

  getYaml(): string;
  setYaml(value: string): GetUserRoleClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRoleClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRoleClassResponse): GetUserRoleClassResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserRoleClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRoleClassResponse;
  static deserializeBinaryFromReader(message: GetUserRoleClassResponse, reader: jspb.BinaryReader): GetUserRoleClassResponse;
}

export namespace GetUserRoleClassResponse {
  export type AsObject = {
    role?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass.AsObject,
    yaml: string,
  }
}

export class DeleteUserRoleClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteUserRoleClassRequest;

  getName(): string;
  setName(value: string): DeleteUserRoleClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRoleClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRoleClassRequest): DeleteUserRoleClassRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRoleClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRoleClassRequest;
  static deserializeBinaryFromReader(message: DeleteUserRoleClassRequest, reader: jspb.BinaryReader): DeleteUserRoleClassRequest;
}

export namespace DeleteUserRoleClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteUserRoleClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRoleClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRoleClassResponse): DeleteUserRoleClassResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRoleClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRoleClassResponse;
  static deserializeBinaryFromReader(message: DeleteUserRoleClassResponse, reader: jspb.BinaryReader): DeleteUserRoleClassResponse;
}

export namespace DeleteUserRoleClassResponse {
  export type AsObject = {
  }
}

export class UserRoleClassCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassCreateResponse): UserRoleClassCreateResponse.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassCreateResponse;
  static deserializeBinaryFromReader(message: UserRoleClassCreateResponse, reader: jspb.BinaryReader): UserRoleClassCreateResponse;
}

export namespace UserRoleClassCreateResponse {
  export type AsObject = {
  }
}

export class UserRoleClassLoginRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UserRoleClassLoginRequest;

  getName(): string;
  setName(value: string): UserRoleClassLoginRequest;

  getPassword(): string;
  setPassword(value: string): UserRoleClassLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassLoginRequest): UserRoleClassLoginRequest.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassLoginRequest;
  static deserializeBinaryFromReader(message: UserRoleClassLoginRequest, reader: jspb.BinaryReader): UserRoleClassLoginRequest;
}

export namespace UserRoleClassLoginRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    password: string,
  }
}

export class UserRoleClassLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): UserRoleClassLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassLoginResponse): UserRoleClassLoginResponse.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassLoginResponse;
  static deserializeBinaryFromReader(message: UserRoleClassLoginResponse, reader: jspb.BinaryReader): UserRoleClassLoginResponse;
}

export namespace UserRoleClassLoginResponse {
  export type AsObject = {
    token: string,
  }
}

