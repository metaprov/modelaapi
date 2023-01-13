import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


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
  getModelasystems(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystemList | undefined;
  setModelasystems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystemList): ListModelaSystemsResponse;
  hasModelasystems(): boolean;
  clearModelasystems(): ListModelaSystemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelaSystemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelaSystemsResponse): ListModelaSystemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelaSystemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelaSystemsResponse;
  static deserializeBinaryFromReader(message: ListModelaSystemsResponse, reader: jspb.BinaryReader): ListModelaSystemsResponse;
}

export namespace ListModelaSystemsResponse {
  export type AsObject = {
    modelasystems?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystemList.AsObject,
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
  getModelasystem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem | undefined;
  setModelasystem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem): CreateModelaSystemRequest;
  hasModelasystem(): boolean;
  clearModelasystem(): CreateModelaSystemRequest;

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
    modelasystem?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem.AsObject,
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
  getModelasystem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem | undefined;
  setModelasystem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem): UpdateModelaSystemRequest;
  hasModelasystem(): boolean;
  clearModelasystem(): UpdateModelaSystemRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateModelaSystemRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateModelaSystemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelaSystemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelaSystemRequest): UpdateModelaSystemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelaSystemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelaSystemRequest;
  static deserializeBinaryFromReader(message: UpdateModelaSystemRequest, reader: jspb.BinaryReader): UpdateModelaSystemRequest;
}

export namespace UpdateModelaSystemRequest {
  export type AsObject = {
    modelasystem?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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
  getModelasystem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem | undefined;
  setModelasystem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem): GetModelaSystemResponse;
  hasModelasystem(): boolean;
  clearModelasystem(): GetModelaSystemResponse;

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
    modelasystem?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ModelaSystem.AsObject,
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

export class DownloadLogFileRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): DownloadLogFileRequest;

  getNamespace(): string;
  setNamespace(value: string): DownloadLogFileRequest;

  getBucket(): string;
  setBucket(value: string): DownloadLogFileRequest;

  getPath(): string;
  setPath(value: string): DownloadLogFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadLogFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadLogFileRequest): DownloadLogFileRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadLogFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadLogFileRequest;
  static deserializeBinaryFromReader(message: DownloadLogFileRequest, reader: jspb.BinaryReader): DownloadLogFileRequest;
}

export namespace DownloadLogFileRequest {
  export type AsObject = {
    tenant: string,
    namespace: string,
    bucket: string,
    path: string,
  }
}

export class DownloadLogFileResponse extends jspb.Message {
  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): DownloadLogFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadLogFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadLogFileResponse): DownloadLogFileResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadLogFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadLogFileResponse;
  static deserializeBinaryFromReader(message: DownloadLogFileResponse, reader: jspb.BinaryReader): DownloadLogFileResponse;
}

export namespace DownloadLogFileResponse {
  export type AsObject = {
    result: Uint8Array | string,
  }
}

export class BackupDatabaseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): BackupDatabaseRequest;

  getBucket(): string;
  setBucket(value: string): BackupDatabaseRequest;

  getPath(): string;
  setPath(value: string): BackupDatabaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackupDatabaseRequest): BackupDatabaseRequest.AsObject;
  static serializeBinaryToWriter(message: BackupDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupDatabaseRequest;
  static deserializeBinaryFromReader(message: BackupDatabaseRequest, reader: jspb.BinaryReader): BackupDatabaseRequest;
}

export namespace BackupDatabaseRequest {
  export type AsObject = {
    namespace: string,
    bucket: string,
    path: string,
  }
}

export class BackupDatabaseResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): BackupDatabaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupDatabaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BackupDatabaseResponse): BackupDatabaseResponse.AsObject;
  static serializeBinaryToWriter(message: BackupDatabaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupDatabaseResponse;
  static deserializeBinaryFromReader(message: BackupDatabaseResponse, reader: jspb.BinaryReader): BackupDatabaseResponse;
}

export namespace BackupDatabaseResponse {
  export type AsObject = {
    path: string,
  }
}

export class BackupEtcdRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): BackupEtcdRequest;

  getBucket(): string;
  setBucket(value: string): BackupEtcdRequest;

  getPath(): string;
  setPath(value: string): BackupEtcdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupEtcdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackupEtcdRequest): BackupEtcdRequest.AsObject;
  static serializeBinaryToWriter(message: BackupEtcdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupEtcdRequest;
  static deserializeBinaryFromReader(message: BackupEtcdRequest, reader: jspb.BinaryReader): BackupEtcdRequest;
}

export namespace BackupEtcdRequest {
  export type AsObject = {
    namespace: string,
    bucket: string,
    path: string,
  }
}

export class BackupEtcdResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): BackupEtcdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupEtcdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BackupEtcdResponse): BackupEtcdResponse.AsObject;
  static serializeBinaryToWriter(message: BackupEtcdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupEtcdResponse;
  static deserializeBinaryFromReader(message: BackupEtcdResponse, reader: jspb.BinaryReader): BackupEtcdResponse;
}

export namespace BackupEtcdResponse {
  export type AsObject = {
    path: string,
  }
}

