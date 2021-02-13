import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


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

export class AccountCreateRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AccountCreateRequest;

  getName(): string;
  setName(value: string): AccountCreateRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.AccountSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.AccountSpec): AccountCreateRequest;
  hasSpec(): boolean;
  clearSpec(): AccountCreateRequest;

  getPassword(): string;
  setPassword(value: string): AccountCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCreateRequest): AccountCreateRequest.AsObject;
  static serializeBinaryToWriter(message: AccountCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCreateRequest;
  static deserializeBinaryFromReader(message: AccountCreateRequest, reader: jspb.BinaryReader): AccountCreateRequest;
}

export namespace AccountCreateRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.AccountSpec.AsObject,
    password: string,
  }
}

export class AccountDeleteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AccountDeleteRequest;

  getName(): string;
  setName(value: string): AccountDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDeleteRequest): AccountDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: AccountDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDeleteRequest;
  static deserializeBinaryFromReader(message: AccountDeleteRequest, reader: jspb.BinaryReader): AccountDeleteRequest;
}

export namespace AccountDeleteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

