import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated_pb';


export class ListLLMServersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLLMServersRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListLLMServersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLLMServersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLLMServersRequest): ListLLMServersRequest.AsObject;
  static serializeBinaryToWriter(message: ListLLMServersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLLMServersRequest;
  static deserializeBinaryFromReader(message: ListLLMServersRequest, reader: jspb.BinaryReader): ListLLMServersRequest;
}

export namespace ListLLMServersRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListLLMServersResponse extends jspb.Message {
  getLlmservers(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServerList | undefined;
  setLlmservers(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServerList): ListLLMServersResponse;
  hasLlmservers(): boolean;
  clearLlmservers(): ListLLMServersResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLLMServersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLLMServersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLLMServersResponse): ListLLMServersResponse.AsObject;
  static serializeBinaryToWriter(message: ListLLMServersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLLMServersResponse;
  static deserializeBinaryFromReader(message: ListLLMServersResponse, reader: jspb.BinaryReader): ListLLMServersResponse;
}

export namespace ListLLMServersResponse {
  export type AsObject = {
    llmservers?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServerList.AsObject,
    nextPageToken: string,
  }
}

export class CreateLLMServerRequest extends jspb.Message {
  getLlmserver(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer | undefined;
  setLlmserver(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer): CreateLLMServerRequest;
  hasLlmserver(): boolean;
  clearLlmserver(): CreateLLMServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLLMServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLLMServerRequest): CreateLLMServerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLLMServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLLMServerRequest;
  static deserializeBinaryFromReader(message: CreateLLMServerRequest, reader: jspb.BinaryReader): CreateLLMServerRequest;
}

export namespace CreateLLMServerRequest {
  export type AsObject = {
    llmserver?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer.AsObject,
  }
}

export class CreateLLMServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLLMServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLLMServerResponse): CreateLLMServerResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLLMServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLLMServerResponse;
  static deserializeBinaryFromReader(message: CreateLLMServerResponse, reader: jspb.BinaryReader): CreateLLMServerResponse;
}

export namespace CreateLLMServerResponse {
  export type AsObject = {
  }
}

export class UpdateLLMServerRequest extends jspb.Message {
  getLlmserver(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer | undefined;
  setLlmserver(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer): UpdateLLMServerRequest;
  hasLlmserver(): boolean;
  clearLlmserver(): UpdateLLMServerRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLLMServerRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLLMServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLLMServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLLMServerRequest): UpdateLLMServerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLLMServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLLMServerRequest;
  static deserializeBinaryFromReader(message: UpdateLLMServerRequest, reader: jspb.BinaryReader): UpdateLLMServerRequest;
}

export namespace UpdateLLMServerRequest {
  export type AsObject = {
    llmserver?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateLLMServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLLMServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLLMServerResponse): UpdateLLMServerResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLLMServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLLMServerResponse;
  static deserializeBinaryFromReader(message: UpdateLLMServerResponse, reader: jspb.BinaryReader): UpdateLLMServerResponse;
}

export namespace UpdateLLMServerResponse {
  export type AsObject = {
  }
}

export class GetLLMServerRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLLMServerRequest;

  getName(): string;
  setName(value: string): GetLLMServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLLMServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLLMServerRequest): GetLLMServerRequest.AsObject;
  static serializeBinaryToWriter(message: GetLLMServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLLMServerRequest;
  static deserializeBinaryFromReader(message: GetLLMServerRequest, reader: jspb.BinaryReader): GetLLMServerRequest;
}

export namespace GetLLMServerRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLLMServerResponse extends jspb.Message {
  getLlmserver(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer | undefined;
  setLlmserver(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer): GetLLMServerResponse;
  hasLlmserver(): boolean;
  clearLlmserver(): GetLLMServerResponse;

  getYaml(): string;
  setYaml(value: string): GetLLMServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLLMServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLLMServerResponse): GetLLMServerResponse.AsObject;
  static serializeBinaryToWriter(message: GetLLMServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLLMServerResponse;
  static deserializeBinaryFromReader(message: GetLLMServerResponse, reader: jspb.BinaryReader): GetLLMServerResponse;
}

export namespace GetLLMServerResponse {
  export type AsObject = {
    llmserver?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMServer.AsObject,
    yaml: string,
  }
}

export class DeleteLLMServerRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLLMServerRequest;

  getName(): string;
  setName(value: string): DeleteLLMServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLLMServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLLMServerRequest): DeleteLLMServerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLLMServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLLMServerRequest;
  static deserializeBinaryFromReader(message: DeleteLLMServerRequest, reader: jspb.BinaryReader): DeleteLLMServerRequest;
}

export namespace DeleteLLMServerRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteLLMServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLLMServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLLMServerResponse): DeleteLLMServerResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLLMServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLLMServerResponse;
  static deserializeBinaryFromReader(message: DeleteLLMServerResponse, reader: jspb.BinaryReader): DeleteLLMServerResponse;
}

export namespace DeleteLLMServerResponse {
  export type AsObject = {
  }
}

export class RefreshLLMServerRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): RefreshLLMServerRequest;

  getName(): string;
  setName(value: string): RefreshLLMServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshLLMServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshLLMServerRequest): RefreshLLMServerRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshLLMServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshLLMServerRequest;
  static deserializeBinaryFromReader(message: RefreshLLMServerRequest, reader: jspb.BinaryReader): RefreshLLMServerRequest;
}

export namespace RefreshLLMServerRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class RefreshLLMServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshLLMServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshLLMServerResponse): RefreshLLMServerResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshLLMServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshLLMServerResponse;
  static deserializeBinaryFromReader(message: RefreshLLMServerResponse, reader: jspb.BinaryReader): RefreshLLMServerResponse;
}

export namespace RefreshLLMServerResponse {
  export type AsObject = {
  }
}

