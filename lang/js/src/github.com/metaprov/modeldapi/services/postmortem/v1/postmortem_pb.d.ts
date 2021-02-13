import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modeldapi/services/common/v1/common_pb';


export class PostMortemQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PostMortemQuery;

  getName(): string;
  setName(value: string): PostMortemQuery;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): PostMortemQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemQuery): PostMortemQuery.AsObject;
  static serializeBinaryToWriter(message: PostMortemQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemQuery;
  static deserializeBinaryFromReader(message: PostMortemQuery, reader: jspb.BinaryReader): PostMortemQuery;
}

export namespace PostMortemQuery {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class PostMortemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemResponse): PostMortemResponse.AsObject;
  static serializeBinaryToWriter(message: PostMortemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemResponse;
  static deserializeBinaryFromReader(message: PostMortemResponse, reader: jspb.BinaryReader): PostMortemResponse;
}

export namespace PostMortemResponse {
  export type AsObject = {
  }
}

export class PostMortemCreateRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PostMortemCreateRequest;

  getName(): string;
  setName(value: string): PostMortemCreateRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): PostMortemCreateRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemSpec): PostMortemCreateRequest;
  hasSpec(): boolean;
  clearSpec(): PostMortemCreateRequest;

  getPassword(): string;
  setPassword(value: string): PostMortemCreateRequest;

  getUpsert(): boolean;
  setUpsert(value: boolean): PostMortemCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemCreateRequest): PostMortemCreateRequest.AsObject;
  static serializeBinaryToWriter(message: PostMortemCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemCreateRequest;
  static deserializeBinaryFromReader(message: PostMortemCreateRequest, reader: jspb.BinaryReader): PostMortemCreateRequest;
}

export namespace PostMortemCreateRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemSpec.AsObject,
    password: string,
    upsert: boolean,
  }
}

export class PostMortemUpdateRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PostMortemUpdateRequest;

  getName(): string;
  setName(value: string): PostMortemUpdateRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): PostMortemUpdateRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemSpec): PostMortemUpdateRequest;
  hasSpec(): boolean;
  clearSpec(): PostMortemUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemUpdateRequest): PostMortemUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: PostMortemUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemUpdateRequest;
  static deserializeBinaryFromReader(message: PostMortemUpdateRequest, reader: jspb.BinaryReader): PostMortemUpdateRequest;
}

export namespace PostMortemUpdateRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemSpec.AsObject,
  }
}

export class PostMortemGetResponse extends jspb.Message {
  getPostmortem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
  setPostmortem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): PostMortemGetResponse;
  hasPostmortem(): boolean;
  clearPostmortem(): PostMortemGetResponse;

  getYaml(): string;
  setYaml(value: string): PostMortemGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemGetResponse): PostMortemGetResponse.AsObject;
  static serializeBinaryToWriter(message: PostMortemGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemGetResponse;
  static deserializeBinaryFromReader(message: PostMortemGetResponse, reader: jspb.BinaryReader): PostMortemGetResponse;
}

export namespace PostMortemGetResponse {
  export type AsObject = {
    postmortem?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
    yaml: string,
  }
}

export class PostMortemGetNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PostMortemGetNamespacesRequest;

  getName(): string;
  setName(value: string): PostMortemGetNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemGetNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemGetNamespacesRequest): PostMortemGetNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: PostMortemGetNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemGetNamespacesRequest;
  static deserializeBinaryFromReader(message: PostMortemGetNamespacesRequest, reader: jspb.BinaryReader): PostMortemGetNamespacesRequest;
}

export namespace PostMortemGetNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PostMortemGetNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo>): PostMortemGetNamespacesResponse;
  clearNamespacesList(): PostMortemGetNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMortemGetNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostMortemGetNamespacesResponse): PostMortemGetNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: PostMortemGetNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMortemGetNamespacesResponse;
  static deserializeBinaryFromReader(message: PostMortemGetNamespacesResponse, reader: jspb.BinaryReader): PostMortemGetNamespacesResponse;
}

export namespace PostMortemGetNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

