import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class ListCommitsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCommitsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCommitsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCommitsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCommitsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListCommitsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommitsRequest): ListCommitsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCommitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommitsRequest;
  static deserializeBinaryFromReader(message: ListCommitsRequest, reader: jspb.BinaryReader): ListCommitsRequest;
}

export namespace ListCommitsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListCommitsResponse extends jspb.Message {
  getCommits(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.CommitList | undefined;
  setCommits(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.CommitList): ListCommitsResponse;
  hasCommits(): boolean;
  clearCommits(): ListCommitsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommitsResponse): ListCommitsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCommitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommitsResponse;
  static deserializeBinaryFromReader(message: ListCommitsResponse, reader: jspb.BinaryReader): ListCommitsResponse;
}

export namespace ListCommitsResponse {
  export type AsObject = {
    commits?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.CommitList.AsObject,
  }
}

export class CommitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommitResponse): CommitResponse.AsObject;
  static serializeBinaryToWriter(message: CommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitResponse;
  static deserializeBinaryFromReader(message: CommitResponse, reader: jspb.BinaryReader): CommitResponse;
}

export namespace CommitResponse {
  export type AsObject = {
  }
}

export class CreateCommitRequest extends jspb.Message {
  getCommit(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit | undefined;
  setCommit(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit): CreateCommitRequest;
  hasCommit(): boolean;
  clearCommit(): CreateCommitRequest;

  getPassword(): string;
  setPassword(value: string): CreateCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommitRequest): CreateCommitRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommitRequest;
  static deserializeBinaryFromReader(message: CreateCommitRequest, reader: jspb.BinaryReader): CreateCommitRequest;
}

export namespace CreateCommitRequest {
  export type AsObject = {
    commit?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject,
    password: string,
  }
}

export class CreateCommitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommitResponse): CreateCommitResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommitResponse;
  static deserializeBinaryFromReader(message: CreateCommitResponse, reader: jspb.BinaryReader): CreateCommitResponse;
}

export namespace CreateCommitResponse {
  export type AsObject = {
  }
}

export class UpdateCommitRequest extends jspb.Message {
  getCommit(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit | undefined;
  setCommit(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit): UpdateCommitRequest;
  hasCommit(): boolean;
  clearCommit(): UpdateCommitRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCommitRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommitRequest): UpdateCommitRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommitRequest;
  static deserializeBinaryFromReader(message: UpdateCommitRequest, reader: jspb.BinaryReader): UpdateCommitRequest;
}

export namespace UpdateCommitRequest {
  export type AsObject = {
    commit?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCommitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommitResponse): UpdateCommitResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommitResponse;
  static deserializeBinaryFromReader(message: UpdateCommitResponse, reader: jspb.BinaryReader): UpdateCommitResponse;
}

export namespace UpdateCommitResponse {
  export type AsObject = {
  }
}

export class GetCommitRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCommitRequest;

  getName(): string;
  setName(value: string): GetCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommitRequest): GetCommitRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommitRequest;
  static deserializeBinaryFromReader(message: GetCommitRequest, reader: jspb.BinaryReader): GetCommitRequest;
}

export namespace GetCommitRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCommitResponse extends jspb.Message {
  getCommit(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit | undefined;
  setCommit(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit): GetCommitResponse;
  hasCommit(): boolean;
  clearCommit(): GetCommitResponse;

  getYaml(): string;
  setYaml(value: string): GetCommitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommitResponse): GetCommitResponse.AsObject;
  static serializeBinaryToWriter(message: GetCommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommitResponse;
  static deserializeBinaryFromReader(message: GetCommitResponse, reader: jspb.BinaryReader): GetCommitResponse;
}

export namespace GetCommitResponse {
  export type AsObject = {
    commit?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject,
    yaml: string,
  }
}

export class GetCommitNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCommitNamespacesRequest;

  getName(): string;
  setName(value: string): GetCommitNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommitNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommitNamespacesRequest): GetCommitNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommitNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommitNamespacesRequest;
  static deserializeBinaryFromReader(message: GetCommitNamespacesRequest, reader: jspb.BinaryReader): GetCommitNamespacesRequest;
}

export namespace GetCommitNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCommitNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetCommitNamespacesResponse;
  clearNamespacesList(): GetCommitNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommitNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommitNamespacesResponse): GetCommitNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCommitNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommitNamespacesResponse;
  static deserializeBinaryFromReader(message: GetCommitNamespacesResponse, reader: jspb.BinaryReader): GetCommitNamespacesResponse;
}

export namespace GetCommitNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteCommitRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCommitRequest;

  getName(): string;
  setName(value: string): DeleteCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommitRequest): DeleteCommitRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommitRequest;
  static deserializeBinaryFromReader(message: DeleteCommitRequest, reader: jspb.BinaryReader): DeleteCommitRequest;
}

export namespace DeleteCommitRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteCommitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommitResponse): DeleteCommitResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommitResponse;
  static deserializeBinaryFromReader(message: DeleteCommitResponse, reader: jspb.BinaryReader): DeleteCommitResponse;
}

export namespace DeleteCommitResponse {
  export type AsObject = {
  }
}

export class CommitCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommitCreateResponse): CommitCreateResponse.AsObject;
  static serializeBinaryToWriter(message: CommitCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitCreateResponse;
  static deserializeBinaryFromReader(message: CommitCreateResponse, reader: jspb.BinaryReader): CommitCreateResponse;
}

export namespace CommitCreateResponse {
  export type AsObject = {
  }
}

