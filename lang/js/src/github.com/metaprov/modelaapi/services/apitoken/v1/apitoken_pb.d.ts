import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListApiTokensRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListApiTokensRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListApiTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiTokensRequest): ListApiTokensRequest.AsObject;
  static serializeBinaryToWriter(message: ListApiTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiTokensRequest;
  static deserializeBinaryFromReader(message: ListApiTokensRequest, reader: jspb.BinaryReader): ListApiTokensRequest;
}

export namespace ListApiTokensRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListApiTokensResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiTokenList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiTokenList): ListApiTokensResponse;
  hasItems(): boolean;
  clearItems(): ListApiTokensResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiTokensResponse): ListApiTokensResponse.AsObject;
  static serializeBinaryToWriter(message: ListApiTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiTokensResponse;
  static deserializeBinaryFromReader(message: ListApiTokensResponse, reader: jspb.BinaryReader): ListApiTokensResponse;
}

export namespace ListApiTokensResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiTokenList.AsObject,
  }
}

export class ApiTokenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenResponse): ApiTokenResponse.AsObject;
  static serializeBinaryToWriter(message: ApiTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenResponse;
  static deserializeBinaryFromReader(message: ApiTokenResponse, reader: jspb.BinaryReader): ApiTokenResponse;
}

export namespace ApiTokenResponse {
  export type AsObject = {
  }
}

export class CreateApiTokenRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken): CreateApiTokenRequest;
  hasItem(): boolean;
  clearItem(): CreateApiTokenRequest;

  getPassword(): string;
  setPassword(value: string): CreateApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiTokenRequest): CreateApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiTokenRequest;
  static deserializeBinaryFromReader(message: CreateApiTokenRequest, reader: jspb.BinaryReader): CreateApiTokenRequest;
}

export namespace CreateApiTokenRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject,
    password: string,
  }
}

export class CreateApiTokenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiTokenResponse): CreateApiTokenResponse.AsObject;
  static serializeBinaryToWriter(message: CreateApiTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiTokenResponse;
  static deserializeBinaryFromReader(message: CreateApiTokenResponse, reader: jspb.BinaryReader): CreateApiTokenResponse;
}

export namespace CreateApiTokenResponse {
  export type AsObject = {
  }
}

export class UpdateApiTokenRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken): UpdateApiTokenRequest;
  hasItem(): boolean;
  clearItem(): UpdateApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApiTokenRequest): UpdateApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApiTokenRequest;
  static deserializeBinaryFromReader(message: UpdateApiTokenRequest, reader: jspb.BinaryReader): UpdateApiTokenRequest;
}

export namespace UpdateApiTokenRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject,
  }
}

export class UpdateApiTokenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApiTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApiTokenResponse): UpdateApiTokenResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateApiTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApiTokenResponse;
  static deserializeBinaryFromReader(message: UpdateApiTokenResponse, reader: jspb.BinaryReader): UpdateApiTokenResponse;
}

export namespace UpdateApiTokenResponse {
  export type AsObject = {
  }
}

export class GetApiTokenRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetApiTokenRequest;

  getName(): string;
  setName(value: string): GetApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiTokenRequest): GetApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiTokenRequest;
  static deserializeBinaryFromReader(message: GetApiTokenRequest, reader: jspb.BinaryReader): GetApiTokenRequest;
}

export namespace GetApiTokenRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetApiTokenResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken): GetApiTokenResponse;
  hasItem(): boolean;
  clearItem(): GetApiTokenResponse;

  getYaml(): string;
  setYaml(value: string): GetApiTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiTokenResponse): GetApiTokenResponse.AsObject;
  static serializeBinaryToWriter(message: GetApiTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiTokenResponse;
  static deserializeBinaryFromReader(message: GetApiTokenResponse, reader: jspb.BinaryReader): GetApiTokenResponse;
}

export namespace GetApiTokenResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject,
    yaml: string,
  }
}

export class GetApiTokenNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetApiTokenNamespacesRequest;

  getName(): string;
  setName(value: string): GetApiTokenNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiTokenNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiTokenNamespacesRequest): GetApiTokenNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetApiTokenNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiTokenNamespacesRequest;
  static deserializeBinaryFromReader(message: GetApiTokenNamespacesRequest, reader: jspb.BinaryReader): GetApiTokenNamespacesRequest;
}

export namespace GetApiTokenNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetApiTokenNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetApiTokenNamespacesResponse;
  clearNamespacesList(): GetApiTokenNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiTokenNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiTokenNamespacesResponse): GetApiTokenNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetApiTokenNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiTokenNamespacesResponse;
  static deserializeBinaryFromReader(message: GetApiTokenNamespacesResponse, reader: jspb.BinaryReader): GetApiTokenNamespacesResponse;
}

export namespace GetApiTokenNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteApiTokenRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteApiTokenRequest;

  getName(): string;
  setName(value: string): DeleteApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiTokenRequest): DeleteApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiTokenRequest;
  static deserializeBinaryFromReader(message: DeleteApiTokenRequest, reader: jspb.BinaryReader): DeleteApiTokenRequest;
}

export namespace DeleteApiTokenRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteApiTokenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiTokenResponse): DeleteApiTokenResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteApiTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiTokenResponse;
  static deserializeBinaryFromReader(message: DeleteApiTokenResponse, reader: jspb.BinaryReader): DeleteApiTokenResponse;
}

export namespace DeleteApiTokenResponse {
  export type AsObject = {
  }
}

export class ApiTokenCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenCreateResponse): ApiTokenCreateResponse.AsObject;
  static serializeBinaryToWriter(message: ApiTokenCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenCreateResponse;
  static deserializeBinaryFromReader(message: ApiTokenCreateResponse, reader: jspb.BinaryReader): ApiTokenCreateResponse;
}

export namespace ApiTokenCreateResponse {
  export type AsObject = {
  }
}

export class ApiTokenLoginRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ApiTokenLoginRequest;

  getName(): string;
  setName(value: string): ApiTokenLoginRequest;

  getPassword(): string;
  setPassword(value: string): ApiTokenLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenLoginRequest): ApiTokenLoginRequest.AsObject;
  static serializeBinaryToWriter(message: ApiTokenLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenLoginRequest;
  static deserializeBinaryFromReader(message: ApiTokenLoginRequest, reader: jspb.BinaryReader): ApiTokenLoginRequest;
}

export namespace ApiTokenLoginRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    password: string,
  }
}

export class ApiTokenLoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): ApiTokenLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTokenLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTokenLoginResponse): ApiTokenLoginResponse.AsObject;
  static serializeBinaryToWriter(message: ApiTokenLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTokenLoginResponse;
  static deserializeBinaryFromReader(message: ApiTokenLoginResponse, reader: jspb.BinaryReader): ApiTokenLoginResponse;
}

export namespace ApiTokenLoginResponse {
  export type AsObject = {
    token: string,
  }
}

