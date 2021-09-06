import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListModeldSystemsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModeldSystemsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModeldSystemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModeldSystemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModeldSystemsRequest): ListModeldSystemsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModeldSystemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModeldSystemsRequest;
  static deserializeBinaryFromReader(message: ListModeldSystemsRequest, reader: jspb.BinaryReader): ListModeldSystemsRequest;
}

export namespace ListModeldSystemsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListModeldSystemsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystemList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystemList): ListModeldSystemsResponse;
  hasItems(): boolean;
  clearItems(): ListModeldSystemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModeldSystemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModeldSystemsResponse): ListModeldSystemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModeldSystemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModeldSystemsResponse;
  static deserializeBinaryFromReader(message: ListModeldSystemsResponse, reader: jspb.BinaryReader): ListModeldSystemsResponse;
}

export namespace ListModeldSystemsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystemList.AsObject,
  }
}

export class ModeldSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeldSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModeldSystemResponse): ModeldSystemResponse.AsObject;
  static serializeBinaryToWriter(message: ModeldSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeldSystemResponse;
  static deserializeBinaryFromReader(message: ModeldSystemResponse, reader: jspb.BinaryReader): ModeldSystemResponse;
}

export namespace ModeldSystemResponse {
  export type AsObject = {
  }
}

export class CreateModeldSystemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem): CreateModeldSystemRequest;
  hasItem(): boolean;
  clearItem(): CreateModeldSystemRequest;

  getPassword(): string;
  setPassword(value: string): CreateModeldSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModeldSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModeldSystemRequest): CreateModeldSystemRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModeldSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModeldSystemRequest;
  static deserializeBinaryFromReader(message: CreateModeldSystemRequest, reader: jspb.BinaryReader): CreateModeldSystemRequest;
}

export namespace CreateModeldSystemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem.AsObject,
    password: string,
  }
}

export class CreateModeldSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModeldSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModeldSystemResponse): CreateModeldSystemResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModeldSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModeldSystemResponse;
  static deserializeBinaryFromReader(message: CreateModeldSystemResponse, reader: jspb.BinaryReader): CreateModeldSystemResponse;
}

export namespace CreateModeldSystemResponse {
  export type AsObject = {
  }
}

export class UpdateModeldSystemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem): UpdateModeldSystemRequest;
  hasItem(): boolean;
  clearItem(): UpdateModeldSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModeldSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModeldSystemRequest): UpdateModeldSystemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModeldSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModeldSystemRequest;
  static deserializeBinaryFromReader(message: UpdateModeldSystemRequest, reader: jspb.BinaryReader): UpdateModeldSystemRequest;
}

export namespace UpdateModeldSystemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem.AsObject,
  }
}

export class UpdateModeldSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModeldSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModeldSystemResponse): UpdateModeldSystemResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModeldSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModeldSystemResponse;
  static deserializeBinaryFromReader(message: UpdateModeldSystemResponse, reader: jspb.BinaryReader): UpdateModeldSystemResponse;
}

export namespace UpdateModeldSystemResponse {
  export type AsObject = {
  }
}

export class GetModeldSystemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModeldSystemRequest;

  getName(): string;
  setName(value: string): GetModeldSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModeldSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModeldSystemRequest): GetModeldSystemRequest.AsObject;
  static serializeBinaryToWriter(message: GetModeldSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModeldSystemRequest;
  static deserializeBinaryFromReader(message: GetModeldSystemRequest, reader: jspb.BinaryReader): GetModeldSystemRequest;
}

export namespace GetModeldSystemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModeldSystemResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem): GetModeldSystemResponse;
  hasItem(): boolean;
  clearItem(): GetModeldSystemResponse;

  getYaml(): string;
  setYaml(value: string): GetModeldSystemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModeldSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModeldSystemResponse): GetModeldSystemResponse.AsObject;
  static serializeBinaryToWriter(message: GetModeldSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModeldSystemResponse;
  static deserializeBinaryFromReader(message: GetModeldSystemResponse, reader: jspb.BinaryReader): GetModeldSystemResponse;
}

export namespace GetModeldSystemResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModeldSystem.AsObject,
    yaml: string,
  }
}

export class GetModeldSystemNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModeldSystemNamespacesRequest;

  getName(): string;
  setName(value: string): GetModeldSystemNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModeldSystemNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModeldSystemNamespacesRequest): GetModeldSystemNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetModeldSystemNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModeldSystemNamespacesRequest;
  static deserializeBinaryFromReader(message: GetModeldSystemNamespacesRequest, reader: jspb.BinaryReader): GetModeldSystemNamespacesRequest;
}

export namespace GetModeldSystemNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModeldSystemNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetModeldSystemNamespacesResponse;
  clearNamespacesList(): GetModeldSystemNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModeldSystemNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModeldSystemNamespacesResponse): GetModeldSystemNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetModeldSystemNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModeldSystemNamespacesResponse;
  static deserializeBinaryFromReader(message: GetModeldSystemNamespacesResponse, reader: jspb.BinaryReader): GetModeldSystemNamespacesResponse;
}

export namespace GetModeldSystemNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteModeldSystemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModeldSystemRequest;

  getName(): string;
  setName(value: string): DeleteModeldSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModeldSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModeldSystemRequest): DeleteModeldSystemRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModeldSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModeldSystemRequest;
  static deserializeBinaryFromReader(message: DeleteModeldSystemRequest, reader: jspb.BinaryReader): DeleteModeldSystemRequest;
}

export namespace DeleteModeldSystemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModeldSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModeldSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModeldSystemResponse): DeleteModeldSystemResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModeldSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModeldSystemResponse;
  static deserializeBinaryFromReader(message: DeleteModeldSystemResponse, reader: jspb.BinaryReader): DeleteModeldSystemResponse;
}

export namespace DeleteModeldSystemResponse {
  export type AsObject = {
  }
}

export class ModeldSystemCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeldSystemCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModeldSystemCreateResponse): ModeldSystemCreateResponse.AsObject;
  static serializeBinaryToWriter(message: ModeldSystemCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeldSystemCreateResponse;
  static deserializeBinaryFromReader(message: ModeldSystemCreateResponse, reader: jspb.BinaryReader): ModeldSystemCreateResponse;
}

export namespace ModeldSystemCreateResponse {
  export type AsObject = {
  }
}

export class LogoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
  }
}

export class ResetPasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
  }
}

export class ModeldSystemLoginRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModeldSystemLoginRequest;

  getName(): string;
  setName(value: string): ModeldSystemLoginRequest;

  getPassword(): string;
  setPassword(value: string): ModeldSystemLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeldSystemLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModeldSystemLoginRequest): ModeldSystemLoginRequest.AsObject;
  static serializeBinaryToWriter(message: ModeldSystemLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeldSystemLoginRequest;
  static deserializeBinaryFromReader(message: ModeldSystemLoginRequest, reader: jspb.BinaryReader): ModeldSystemLoginRequest;
}

export namespace ModeldSystemLoginRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    password: string,
  }
}

export class ModeldSystemLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): ModeldSystemLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeldSystemLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModeldSystemLoginResponse): ModeldSystemLoginResponse.AsObject;
  static serializeBinaryToWriter(message: ModeldSystemLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeldSystemLoginResponse;
  static deserializeBinaryFromReader(message: ModeldSystemLoginResponse, reader: jspb.BinaryReader): ModeldSystemLoginResponse;
}

export namespace ModeldSystemLoginResponse {
  export type AsObject = {
    token: string,
  }
}

export class ModeldSystemGetByNameRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModeldSystemGetByNameRequest;

  getName(): string;
  setName(value: string): ModeldSystemGetByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeldSystemGetByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModeldSystemGetByNameRequest): ModeldSystemGetByNameRequest.AsObject;
  static serializeBinaryToWriter(message: ModeldSystemGetByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeldSystemGetByNameRequest;
  static deserializeBinaryFromReader(message: ModeldSystemGetByNameRequest, reader: jspb.BinaryReader): ModeldSystemGetByNameRequest;
}

export namespace ModeldSystemGetByNameRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ModeldSystemLogoutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ModeldSystemLogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeldSystemLogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModeldSystemLogoutRequest): ModeldSystemLogoutRequest.AsObject;
  static serializeBinaryToWriter(message: ModeldSystemLogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeldSystemLogoutRequest;
  static deserializeBinaryFromReader(message: ModeldSystemLogoutRequest, reader: jspb.BinaryReader): ModeldSystemLogoutRequest;
}

export namespace ModeldSystemLogoutRequest {
  export type AsObject = {
    token: string,
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ChangePasswordRequest;

  getName(): string;
  setName(value: string): ChangePasswordRequest;

  getOld(): string;
  setOld(value: string): ChangePasswordRequest;

  getNew(): string;
  setNew(value: string): ChangePasswordRequest;

  getConfirmednew(): string;
  setConfirmednew(value: string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    old: string,
    pb_new: string,
    confirmednew: string,
  }
}

export class ChangePasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
  export type AsObject = {
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResetPasswordRequest;

  getName(): string;
  setName(value: string): ResetPasswordRequest;

  getNew(): string;
  setNew(value: string): ResetPasswordRequest;

  getConfirmednew(): string;
  setConfirmednew(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    pb_new: string,
    confirmednew: string,
  }
}

export class ResetPasswordReponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordReponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordReponse): ResetPasswordReponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordReponse;
  static deserializeBinaryFromReader(message: ResetPasswordReponse, reader: jspb.BinaryReader): ResetPasswordReponse;
}

export namespace ResetPasswordReponse {
  export type AsObject = {
  }
}

