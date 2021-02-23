import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';


export class GetConversationRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetConversationRequest;

  getName(): string;
  setName(value: string): GetConversationRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationRequest): GetConversationRequest.AsObject;
  static serializeBinaryToWriter(message: GetConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationRequest;
  static deserializeBinaryFromReader(message: GetConversationRequest, reader: jspb.BinaryReader): GetConversationRequest;
}

export namespace GetConversationRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class GetConversationResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation): GetConversationResponse;
  hasItem(): boolean;
  clearItem(): GetConversationResponse;

  getYaml(): string;
  setYaml(value: string): GetConversationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationResponse): GetConversationResponse.AsObject;
  static serializeBinaryToWriter(message: GetConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationResponse;
  static deserializeBinaryFromReader(message: GetConversationResponse, reader: jspb.BinaryReader): GetConversationResponse;
}

export namespace GetConversationResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject,
    yaml: string,
  }
}

export class CreateConversationRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation): CreateConversationRequest;
  hasItem(): boolean;
  clearItem(): CreateConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationRequest): CreateConversationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationRequest;
  static deserializeBinaryFromReader(message: CreateConversationRequest, reader: jspb.BinaryReader): CreateConversationRequest;
}

export namespace CreateConversationRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject,
  }
}

export class CreateConversationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationResponse): CreateConversationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationResponse;
  static deserializeBinaryFromReader(message: CreateConversationResponse, reader: jspb.BinaryReader): CreateConversationResponse;
}

export namespace CreateConversationResponse {
  export type AsObject = {
  }
}

export class UpdateConversationRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation): UpdateConversationRequest;
  hasItem(): boolean;
  clearItem(): UpdateConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConversationRequest): UpdateConversationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConversationRequest;
  static deserializeBinaryFromReader(message: UpdateConversationRequest, reader: jspb.BinaryReader): UpdateConversationRequest;
}

export namespace UpdateConversationRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject,
  }
}

export class UpdateConversationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConversationResponse): UpdateConversationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConversationResponse;
  static deserializeBinaryFromReader(message: UpdateConversationResponse, reader: jspb.BinaryReader): UpdateConversationResponse;
}

export namespace UpdateConversationResponse {
  export type AsObject = {
  }
}

export class DeleteConversationRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteConversationRequest;

  getName(): string;
  setName(value: string): DeleteConversationRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): DeleteConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationRequest): DeleteConversationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationRequest;
  static deserializeBinaryFromReader(message: DeleteConversationRequest, reader: jspb.BinaryReader): DeleteConversationRequest;
}

export namespace DeleteConversationRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class DeleteConversationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationResponse): DeleteConversationResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationResponse;
  static deserializeBinaryFromReader(message: DeleteConversationResponse, reader: jspb.BinaryReader): DeleteConversationResponse;
}

export namespace DeleteConversationResponse {
  export type AsObject = {
  }
}

export class ListConversationRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListConversationRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationRequest): ListConversationRequest.AsObject;
  static serializeBinaryToWriter(message: ListConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationRequest;
  static deserializeBinaryFromReader(message: ListConversationRequest, reader: jspb.BinaryReader): ListConversationRequest;
}

export namespace ListConversationRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListConversationResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList): ListConversationResponse;
  hasItems(): boolean;
  clearItems(): ListConversationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationResponse): ListConversationResponse.AsObject;
  static serializeBinaryToWriter(message: ListConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationResponse;
  static deserializeBinaryFromReader(message: ListConversationResponse, reader: jspb.BinaryReader): ListConversationResponse;
}

export namespace ListConversationResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.ConversationList.AsObject,
  }
}

