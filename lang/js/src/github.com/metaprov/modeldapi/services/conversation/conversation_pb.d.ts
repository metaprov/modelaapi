import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_services_common_common_pb from '../../../../../github.com/metaprov/modeldapi/services/common/common_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';


export class ConversationQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ConversationQuery;

  getName(): string;
  setName(value: string): ConversationQuery;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ConversationQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationQuery): ConversationQuery.AsObject;
  static serializeBinaryToWriter(message: ConversationQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationQuery;
  static deserializeBinaryFromReader(message: ConversationQuery, reader: jspb.BinaryReader): ConversationQuery;
}

export namespace ConversationQuery {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ConversationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationResponse): ConversationResponse.AsObject;
  static serializeBinaryToWriter(message: ConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationResponse;
  static deserializeBinaryFromReader(message: ConversationResponse, reader: jspb.BinaryReader): ConversationResponse;
}

export namespace ConversationResponse {
  export type AsObject = {
  }
}

export class ConversationCreateRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ConversationCreateRequest;

  getName(): string;
  setName(value: string): ConversationCreateRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ConversationCreateRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationSpec): ConversationCreateRequest;
  hasSpec(): boolean;
  clearSpec(): ConversationCreateRequest;

  getPassword(): string;
  setPassword(value: string): ConversationCreateRequest;

  getUpsert(): boolean;
  setUpsert(value: boolean): ConversationCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationCreateRequest): ConversationCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ConversationCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationCreateRequest;
  static deserializeBinaryFromReader(message: ConversationCreateRequest, reader: jspb.BinaryReader): ConversationCreateRequest;
}

export namespace ConversationCreateRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationSpec.AsObject,
    password: string,
    upsert: boolean,
  }
}

export class ConversationUpdateRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ConversationUpdateRequest;

  getName(): string;
  setName(value: string): ConversationUpdateRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ConversationUpdateRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationSpec): ConversationUpdateRequest;
  hasSpec(): boolean;
  clearSpec(): ConversationUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationUpdateRequest): ConversationUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ConversationUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationUpdateRequest;
  static deserializeBinaryFromReader(message: ConversationUpdateRequest, reader: jspb.BinaryReader): ConversationUpdateRequest;
}

export namespace ConversationUpdateRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationSpec.AsObject,
  }
}

export class ConversationGetResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation): ConversationGetResponse;
  hasItem(): boolean;
  clearItem(): ConversationGetResponse;

  getYaml(): string;
  setYaml(value: string): ConversationGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationGetResponse): ConversationGetResponse.AsObject;
  static serializeBinaryToWriter(message: ConversationGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationGetResponse;
  static deserializeBinaryFromReader(message: ConversationGetResponse, reader: jspb.BinaryReader): ConversationGetResponse;
}

export namespace ConversationGetResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject,
    yaml: string,
  }
}

export class ConversationGetNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ConversationGetNamespacesRequest;

  getName(): string;
  setName(value: string): ConversationGetNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationGetNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationGetNamespacesRequest): ConversationGetNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: ConversationGetNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationGetNamespacesRequest;
  static deserializeBinaryFromReader(message: ConversationGetNamespacesRequest, reader: jspb.BinaryReader): ConversationGetNamespacesRequest;
}

export namespace ConversationGetNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ConversationGetNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modeldapi_services_common_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modeldapi_services_common_common_pb.NamespaceInfo>): ConversationGetNamespacesResponse;
  clearNamespacesList(): ConversationGetNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modeldapi_services_common_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modeldapi_services_common_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationGetNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationGetNamespacesResponse): ConversationGetNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: ConversationGetNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationGetNamespacesResponse;
  static deserializeBinaryFromReader(message: ConversationGetNamespacesResponse, reader: jspb.BinaryReader): ConversationGetNamespacesResponse;
}

export namespace ConversationGetNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modeldapi_services_common_common_pb.NamespaceInfo.AsObject>,
  }
}

