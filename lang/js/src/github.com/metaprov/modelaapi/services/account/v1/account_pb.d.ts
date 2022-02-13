import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListAccountsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAccountsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListAccountsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAccountsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAccountsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountsRequest): ListAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountsRequest;
  static deserializeBinaryFromReader(message: ListAccountsRequest, reader: jspb.BinaryReader): ListAccountsRequest;
}

export namespace ListAccountsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListAccountsResponse extends jspb.Message {
  getAccounts(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AccountList | undefined;
  setAccounts(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AccountList): ListAccountsResponse;
  hasAccounts(): boolean;
  clearAccounts(): ListAccountsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountsResponse): ListAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountsResponse;
  static deserializeBinaryFromReader(message: ListAccountsResponse, reader: jspb.BinaryReader): ListAccountsResponse;
}

export namespace ListAccountsResponse {
  export type AsObject = {
    accounts?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AccountList.AsObject,
    nextPageToken: string,
  }
}

export class AccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountResponse): AccountResponse.AsObject;
  static serializeBinaryToWriter(message: AccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountResponse;
  static deserializeBinaryFromReader(message: AccountResponse, reader: jspb.BinaryReader): AccountResponse;
}

export namespace AccountResponse {
  export type AsObject = {
  }
}

export class CreateAccountRequest extends jspb.Message {
  getAccount(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setAccount(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account): CreateAccountRequest;
  hasAccount(): boolean;
  clearAccount(): CreateAccountRequest;

  getPassword(): string;
  setPassword(value: string): CreateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    account?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
    password: string,
  }
}

export class CreateAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountResponse): CreateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountResponse;
  static deserializeBinaryFromReader(message: CreateAccountResponse, reader: jspb.BinaryReader): CreateAccountResponse;
}

export namespace CreateAccountResponse {
  export type AsObject = {
  }
}

export class UpdateAccountRequest extends jspb.Message {
  getAccount(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setAccount(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account): UpdateAccountRequest;
  hasAccount(): boolean;
  clearAccount(): UpdateAccountRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAccountRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
  static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
  export type AsObject = {
    account?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountResponse): UpdateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountResponse;
  static deserializeBinaryFromReader(message: UpdateAccountResponse, reader: jspb.BinaryReader): UpdateAccountResponse;
}

export namespace UpdateAccountResponse {
  export type AsObject = {
  }
}

export class GetAccountRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAccountRequest;

  getName(): string;
  setName(value: string): GetAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAccountResponse extends jspb.Message {
  getAccount(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setAccount(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account): GetAccountResponse;
  hasAccount(): boolean;
  clearAccount(): GetAccountResponse;

  getYaml(): string;
  setYaml(value: string): GetAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountResponse): GetAccountResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
  static deserializeBinaryFromReader(message: GetAccountResponse, reader: jspb.BinaryReader): GetAccountResponse;
}

export namespace GetAccountResponse {
  export type AsObject = {
    account?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
    yaml: string,
  }
}

export class GetAccountNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAccountNamespacesRequest;

  getName(): string;
  setName(value: string): GetAccountNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountNamespacesRequest): GetAccountNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountNamespacesRequest;
  static deserializeBinaryFromReader(message: GetAccountNamespacesRequest, reader: jspb.BinaryReader): GetAccountNamespacesRequest;
}

export namespace GetAccountNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAccountNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetAccountNamespacesResponse;
  clearNamespacesList(): GetAccountNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountNamespacesResponse): GetAccountNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountNamespacesResponse;
  static deserializeBinaryFromReader(message: GetAccountNamespacesResponse, reader: jspb.BinaryReader): GetAccountNamespacesResponse;
}

export namespace GetAccountNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteAccountRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAccountRequest;

  getName(): string;
  setName(value: string): DeleteAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
  static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountResponse): DeleteAccountResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountResponse;
  static deserializeBinaryFromReader(message: DeleteAccountResponse, reader: jspb.BinaryReader): DeleteAccountResponse;
}

export namespace DeleteAccountResponse {
  export type AsObject = {
  }
}

export class AccountCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCreateResponse): AccountCreateResponse.AsObject;
  static serializeBinaryToWriter(message: AccountCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCreateResponse;
  static deserializeBinaryFromReader(message: AccountCreateResponse, reader: jspb.BinaryReader): AccountCreateResponse;
}

export namespace AccountCreateResponse {
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

export class AccountLoginRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AccountLoginRequest;

  getName(): string;
  setName(value: string): AccountLoginRequest;

  getPassword(): string;
  setPassword(value: string): AccountLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLoginRequest): AccountLoginRequest.AsObject;
  static serializeBinaryToWriter(message: AccountLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLoginRequest;
  static deserializeBinaryFromReader(message: AccountLoginRequest, reader: jspb.BinaryReader): AccountLoginRequest;
}

export namespace AccountLoginRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    password: string,
  }
}

export class AccountLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): AccountLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLoginResponse): AccountLoginResponse.AsObject;
  static serializeBinaryToWriter(message: AccountLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLoginResponse;
  static deserializeBinaryFromReader(message: AccountLoginResponse, reader: jspb.BinaryReader): AccountLoginResponse;
}

export namespace AccountLoginResponse {
  export type AsObject = {
    token: string,
  }
}

export class AccountGetByNameRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AccountGetByNameRequest;

  getName(): string;
  setName(value: string): AccountGetByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGetByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGetByNameRequest): AccountGetByNameRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGetByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGetByNameRequest;
  static deserializeBinaryFromReader(message: AccountGetByNameRequest, reader: jspb.BinaryReader): AccountGetByNameRequest;
}

export namespace AccountGetByNameRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class AccountLogoutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): AccountLogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLogoutRequest): AccountLogoutRequest.AsObject;
  static serializeBinaryToWriter(message: AccountLogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLogoutRequest;
  static deserializeBinaryFromReader(message: AccountLogoutRequest, reader: jspb.BinaryReader): AccountLogoutRequest;
}

export namespace AccountLogoutRequest {
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

export class UploadAvatarRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UploadAvatarRequest;

  getName(): string;
  setName(value: string): UploadAvatarRequest;

  getBucketname(): string;
  setBucketname(value: string): UploadAvatarRequest;

  getAvatar(): Uint8Array | string;
  getAvatar_asU8(): Uint8Array;
  getAvatar_asB64(): string;
  setAvatar(value: Uint8Array | string): UploadAvatarRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadAvatarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadAvatarRequest): UploadAvatarRequest.AsObject;
  static serializeBinaryToWriter(message: UploadAvatarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadAvatarRequest;
  static deserializeBinaryFromReader(message: UploadAvatarRequest, reader: jspb.BinaryReader): UploadAvatarRequest;
}

export namespace UploadAvatarRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    bucketname: string,
    avatar: Uint8Array | string,
  }
}

export class UploadAvatarReponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadAvatarReponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadAvatarReponse): UploadAvatarReponse.AsObject;
  static serializeBinaryToWriter(message: UploadAvatarReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadAvatarReponse;
  static deserializeBinaryFromReader(message: UploadAvatarReponse, reader: jspb.BinaryReader): UploadAvatarReponse;
}

export namespace UploadAvatarReponse {
  export type AsObject = {
  }
}

export class DownloadAvatarRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadAvatarRequest;

  getName(): string;
  setName(value: string): DownloadAvatarRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadAvatarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadAvatarRequest): DownloadAvatarRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadAvatarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadAvatarRequest;
  static deserializeBinaryFromReader(message: DownloadAvatarRequest, reader: jspb.BinaryReader): DownloadAvatarRequest;
}

export namespace DownloadAvatarRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadAvatarReponse extends jspb.Message {
  getAvatar(): Uint8Array | string;
  getAvatar_asU8(): Uint8Array;
  getAvatar_asB64(): string;
  setAvatar(value: Uint8Array | string): DownloadAvatarReponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadAvatarReponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadAvatarReponse): DownloadAvatarReponse.AsObject;
  static serializeBinaryToWriter(message: DownloadAvatarReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadAvatarReponse;
  static deserializeBinaryFromReader(message: DownloadAvatarReponse, reader: jspb.BinaryReader): DownloadAvatarReponse;
}

export namespace DownloadAvatarReponse {
  export type AsObject = {
    avatar: Uint8Array | string,
  }
}

