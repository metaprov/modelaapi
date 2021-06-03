import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modeldapi/services/common/v1/common_pb';


export class ListTaskCardsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListTaskCardsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListTaskCardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskCardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaskCardsRequest): ListTaskCardsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTaskCardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskCardsRequest;
  static deserializeBinaryFromReader(message: ListTaskCardsRequest, reader: jspb.BinaryReader): ListTaskCardsRequest;
}

export namespace ListTaskCardsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListTaskCardsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCardList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCardList): ListTaskCardsResponse;
  hasItems(): boolean;
  clearItems(): ListTaskCardsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskCardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaskCardsResponse): ListTaskCardsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTaskCardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskCardsResponse;
  static deserializeBinaryFromReader(message: ListTaskCardsResponse, reader: jspb.BinaryReader): ListTaskCardsResponse;
}

export namespace ListTaskCardsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCardList.AsObject,
  }
}

export class TaskCardResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCardResponse): TaskCardResponse.AsObject;
  static serializeBinaryToWriter(message: TaskCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCardResponse;
  static deserializeBinaryFromReader(message: TaskCardResponse, reader: jspb.BinaryReader): TaskCardResponse;
}

export namespace TaskCardResponse {
  export type AsObject = {
  }
}

export class CreateTaskCardRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard): CreateTaskCardRequest;
  hasItem(): boolean;
  clearItem(): CreateTaskCardRequest;

  getPassword(): string;
  setPassword(value: string): CreateTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskCardRequest): CreateTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskCardRequest;
  static deserializeBinaryFromReader(message: CreateTaskCardRequest, reader: jspb.BinaryReader): CreateTaskCardRequest;
}

export namespace CreateTaskCardRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard.AsObject,
    password: string,
  }
}

export class CreateTaskCardResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskCardResponse): CreateTaskCardResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTaskCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskCardResponse;
  static deserializeBinaryFromReader(message: CreateTaskCardResponse, reader: jspb.BinaryReader): CreateTaskCardResponse;
}

export namespace CreateTaskCardResponse {
  export type AsObject = {
  }
}

export class UpdateTaskCardRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard): UpdateTaskCardRequest;
  hasItem(): boolean;
  clearItem(): UpdateTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskCardRequest): UpdateTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskCardRequest;
  static deserializeBinaryFromReader(message: UpdateTaskCardRequest, reader: jspb.BinaryReader): UpdateTaskCardRequest;
}

export namespace UpdateTaskCardRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard.AsObject,
  }
}

export class UpdateTaskCardResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskCardResponse): UpdateTaskCardResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskCardResponse;
  static deserializeBinaryFromReader(message: UpdateTaskCardResponse, reader: jspb.BinaryReader): UpdateTaskCardResponse;
}

export namespace UpdateTaskCardResponse {
  export type AsObject = {
  }
}

export class GetTaskCardRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTaskCardRequest;

  getName(): string;
  setName(value: string): GetTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskCardRequest): GetTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskCardRequest;
  static deserializeBinaryFromReader(message: GetTaskCardRequest, reader: jspb.BinaryReader): GetTaskCardRequest;
}

export namespace GetTaskCardRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetTaskCardResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard): GetTaskCardResponse;
  hasItem(): boolean;
  clearItem(): GetTaskCardResponse;

  getYaml(): string;
  setYaml(value: string): GetTaskCardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskCardResponse): GetTaskCardResponse.AsObject;
  static serializeBinaryToWriter(message: GetTaskCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskCardResponse;
  static deserializeBinaryFromReader(message: GetTaskCardResponse, reader: jspb.BinaryReader): GetTaskCardResponse;
}

export namespace GetTaskCardResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard.AsObject,
    yaml: string,
  }
}

export class GetTaskCardNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTaskCardNamespacesRequest;

  getName(): string;
  setName(value: string): GetTaskCardNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskCardNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskCardNamespacesRequest): GetTaskCardNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskCardNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskCardNamespacesRequest;
  static deserializeBinaryFromReader(message: GetTaskCardNamespacesRequest, reader: jspb.BinaryReader): GetTaskCardNamespacesRequest;
}

export namespace GetTaskCardNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetTaskCardNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo>): GetTaskCardNamespacesResponse;
  clearNamespacesList(): GetTaskCardNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskCardNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskCardNamespacesResponse): GetTaskCardNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetTaskCardNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskCardNamespacesResponse;
  static deserializeBinaryFromReader(message: GetTaskCardNamespacesResponse, reader: jspb.BinaryReader): GetTaskCardNamespacesResponse;
}

export namespace GetTaskCardNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteTaskCardRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteTaskCardRequest;

  getName(): string;
  setName(value: string): DeleteTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskCardRequest): DeleteTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskCardRequest;
  static deserializeBinaryFromReader(message: DeleteTaskCardRequest, reader: jspb.BinaryReader): DeleteTaskCardRequest;
}

export namespace DeleteTaskCardRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteTaskCardResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskCardResponse): DeleteTaskCardResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskCardResponse;
  static deserializeBinaryFromReader(message: DeleteTaskCardResponse, reader: jspb.BinaryReader): DeleteTaskCardResponse;
}

export namespace DeleteTaskCardResponse {
  export type AsObject = {
  }
}

export class TaskCardCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCardCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCardCreateResponse): TaskCardCreateResponse.AsObject;
  static serializeBinaryToWriter(message: TaskCardCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCardCreateResponse;
  static deserializeBinaryFromReader(message: TaskCardCreateResponse, reader: jspb.BinaryReader): TaskCardCreateResponse;
}

export namespace TaskCardCreateResponse {
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

export class TaskCardLoginRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): TaskCardLoginRequest;

  getName(): string;
  setName(value: string): TaskCardLoginRequest;

  getPassword(): string;
  setPassword(value: string): TaskCardLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCardLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCardLoginRequest): TaskCardLoginRequest.AsObject;
  static serializeBinaryToWriter(message: TaskCardLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCardLoginRequest;
  static deserializeBinaryFromReader(message: TaskCardLoginRequest, reader: jspb.BinaryReader): TaskCardLoginRequest;
}

export namespace TaskCardLoginRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    password: string,
  }
}

export class TaskCardLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): TaskCardLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCardLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCardLoginResponse): TaskCardLoginResponse.AsObject;
  static serializeBinaryToWriter(message: TaskCardLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCardLoginResponse;
  static deserializeBinaryFromReader(message: TaskCardLoginResponse, reader: jspb.BinaryReader): TaskCardLoginResponse;
}

export namespace TaskCardLoginResponse {
  export type AsObject = {
    token: string,
  }
}

export class TaskCardGetByNameRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): TaskCardGetByNameRequest;

  getName(): string;
  setName(value: string): TaskCardGetByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCardGetByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCardGetByNameRequest): TaskCardGetByNameRequest.AsObject;
  static serializeBinaryToWriter(message: TaskCardGetByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCardGetByNameRequest;
  static deserializeBinaryFromReader(message: TaskCardGetByNameRequest, reader: jspb.BinaryReader): TaskCardGetByNameRequest;
}

export namespace TaskCardGetByNameRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class TaskCardLogoutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): TaskCardLogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCardLogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCardLogoutRequest): TaskCardLogoutRequest.AsObject;
  static serializeBinaryToWriter(message: TaskCardLogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCardLogoutRequest;
  static deserializeBinaryFromReader(message: TaskCardLogoutRequest, reader: jspb.BinaryReader): TaskCardLogoutRequest;
}

export namespace TaskCardLogoutRequest {
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

