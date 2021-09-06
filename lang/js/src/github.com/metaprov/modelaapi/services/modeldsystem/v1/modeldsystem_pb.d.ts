import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListModelaSystemsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelaSystemsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelaSystemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelaSystemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelaSystemsRequest): ListModelaSystemsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelaSystemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelaSystemsRequest;
  static deserializeBinaryFromReader(message: ListModelaSystemsRequest, reader: jspb.BinaryReader): ListModelaSystemsRequest;
}

export namespace ListModelaSystemsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListModelaSystemsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystemList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystemList): ListModelaSystemsResponse;
  hasItems(): boolean;
  clearItems(): ListModelaSystemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelaSystemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelaSystemsResponse): ListModelaSystemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelaSystemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelaSystemsResponse;
  static deserializeBinaryFromReader(message: ListModelaSystemsResponse, reader: jspb.BinaryReader): ListModelaSystemsResponse;
}

export namespace ListModelaSystemsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystemList.AsObject,
  }
}

export class ModelaSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemResponse): ModelaSystemResponse.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemResponse;
  static deserializeBinaryFromReader(message: ModelaSystemResponse, reader: jspb.BinaryReader): ModelaSystemResponse;
}

export namespace ModelaSystemResponse {
  export type AsObject = {
  }
}

export class CreateModelaSystemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem): CreateModelaSystemRequest;
  hasItem(): boolean;
  clearItem(): CreateModelaSystemRequest;

  getPassword(): string;
  setPassword(value: string): CreateModelaSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelaSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelaSystemRequest): CreateModelaSystemRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelaSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelaSystemRequest;
  static deserializeBinaryFromReader(message: CreateModelaSystemRequest, reader: jspb.BinaryReader): CreateModelaSystemRequest;
}

export namespace CreateModelaSystemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem.AsObject,
    password: string,
  }
}

export class CreateModelaSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelaSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelaSystemResponse): CreateModelaSystemResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelaSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelaSystemResponse;
  static deserializeBinaryFromReader(message: CreateModelaSystemResponse, reader: jspb.BinaryReader): CreateModelaSystemResponse;
}

export namespace CreateModelaSystemResponse {
  export type AsObject = {
  }
}

export class UpdateModelaSystemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem): UpdateModelaSystemRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelaSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelaSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelaSystemRequest): UpdateModelaSystemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelaSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelaSystemRequest;
  static deserializeBinaryFromReader(message: UpdateModelaSystemRequest, reader: jspb.BinaryReader): UpdateModelaSystemRequest;
}

export namespace UpdateModelaSystemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem.AsObject,
  }
}

export class UpdateModelaSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelaSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelaSystemResponse): UpdateModelaSystemResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelaSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelaSystemResponse;
  static deserializeBinaryFromReader(message: UpdateModelaSystemResponse, reader: jspb.BinaryReader): UpdateModelaSystemResponse;
}

export namespace UpdateModelaSystemResponse {
  export type AsObject = {
  }
}

export class GetModelaSystemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelaSystemRequest;

  getName(): string;
  setName(value: string): GetModelaSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelaSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelaSystemRequest): GetModelaSystemRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelaSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelaSystemRequest;
  static deserializeBinaryFromReader(message: GetModelaSystemRequest, reader: jspb.BinaryReader): GetModelaSystemRequest;
}

export namespace GetModelaSystemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelaSystemResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem): GetModelaSystemResponse;
  hasItem(): boolean;
  clearItem(): GetModelaSystemResponse;

  getYaml(): string;
  setYaml(value: string): GetModelaSystemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelaSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelaSystemResponse): GetModelaSystemResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelaSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelaSystemResponse;
  static deserializeBinaryFromReader(message: GetModelaSystemResponse, reader: jspb.BinaryReader): GetModelaSystemResponse;
}

export namespace GetModelaSystemResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem.AsObject,
    yaml: string,
  }
}

export class GetModelaSystemNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelaSystemNamespacesRequest;

  getName(): string;
  setName(value: string): GetModelaSystemNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelaSystemNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelaSystemNamespacesRequest): GetModelaSystemNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelaSystemNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelaSystemNamespacesRequest;
  static deserializeBinaryFromReader(message: GetModelaSystemNamespacesRequest, reader: jspb.BinaryReader): GetModelaSystemNamespacesRequest;
}

export namespace GetModelaSystemNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelaSystemNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetModelaSystemNamespacesResponse;
  clearNamespacesList(): GetModelaSystemNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelaSystemNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelaSystemNamespacesResponse): GetModelaSystemNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelaSystemNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelaSystemNamespacesResponse;
  static deserializeBinaryFromReader(message: GetModelaSystemNamespacesResponse, reader: jspb.BinaryReader): GetModelaSystemNamespacesResponse;
}

export namespace GetModelaSystemNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteModelaSystemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelaSystemRequest;

  getName(): string;
  setName(value: string): DeleteModelaSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelaSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelaSystemRequest): DeleteModelaSystemRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelaSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelaSystemRequest;
  static deserializeBinaryFromReader(message: DeleteModelaSystemRequest, reader: jspb.BinaryReader): DeleteModelaSystemRequest;
}

export namespace DeleteModelaSystemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelaSystemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelaSystemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelaSystemResponse): DeleteModelaSystemResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelaSystemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelaSystemResponse;
  static deserializeBinaryFromReader(message: DeleteModelaSystemResponse, reader: jspb.BinaryReader): DeleteModelaSystemResponse;
}

export namespace DeleteModelaSystemResponse {
  export type AsObject = {
  }
}

export class ModelaSystemCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemCreateResponse): ModelaSystemCreateResponse.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemCreateResponse;
  static deserializeBinaryFromReader(message: ModelaSystemCreateResponse, reader: jspb.BinaryReader): ModelaSystemCreateResponse;
}

export namespace ModelaSystemCreateResponse {
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

export class ModelaSystemLoginRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModelaSystemLoginRequest;

  getName(): string;
  setName(value: string): ModelaSystemLoginRequest;

  getPassword(): string;
  setPassword(value: string): ModelaSystemLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemLoginRequest): ModelaSystemLoginRequest.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemLoginRequest;
  static deserializeBinaryFromReader(message: ModelaSystemLoginRequest, reader: jspb.BinaryReader): ModelaSystemLoginRequest;
}

export namespace ModelaSystemLoginRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    password: string,
  }
}

export class ModelaSystemLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): ModelaSystemLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemLoginResponse): ModelaSystemLoginResponse.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemLoginResponse;
  static deserializeBinaryFromReader(message: ModelaSystemLoginResponse, reader: jspb.BinaryReader): ModelaSystemLoginResponse;
}

export namespace ModelaSystemLoginResponse {
  export type AsObject = {
    token: string,
  }
}

export class ModelaSystemGetByNameRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModelaSystemGetByNameRequest;

  getName(): string;
  setName(value: string): ModelaSystemGetByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemGetByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemGetByNameRequest): ModelaSystemGetByNameRequest.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemGetByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemGetByNameRequest;
  static deserializeBinaryFromReader(message: ModelaSystemGetByNameRequest, reader: jspb.BinaryReader): ModelaSystemGetByNameRequest;
}

export namespace ModelaSystemGetByNameRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ModelaSystemLogoutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ModelaSystemLogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelaSystemLogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelaSystemLogoutRequest): ModelaSystemLogoutRequest.AsObject;
  static serializeBinaryToWriter(message: ModelaSystemLogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelaSystemLogoutRequest;
  static deserializeBinaryFromReader(message: ModelaSystemLogoutRequest, reader: jspb.BinaryReader): ModelaSystemLogoutRequest;
}

export namespace ModelaSystemLogoutRequest {
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

