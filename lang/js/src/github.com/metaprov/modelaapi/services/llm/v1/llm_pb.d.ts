import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated_pb';


export class ListLLMsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLLMsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListLLMsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLLMsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLLMsRequest): ListLLMsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLLMsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLLMsRequest;
  static deserializeBinaryFromReader(message: ListLLMsRequest, reader: jspb.BinaryReader): ListLLMsRequest;
}

export namespace ListLLMsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListLLMsResponse extends jspb.Message {
  getLlms(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMList | undefined;
  setLlms(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMList): ListLLMsResponse;
  hasLlms(): boolean;
  clearLlms(): ListLLMsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLLMsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLLMsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLLMsResponse): ListLLMsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLLMsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLLMsResponse;
  static deserializeBinaryFromReader(message: ListLLMsResponse, reader: jspb.BinaryReader): ListLLMsResponse;
}

export namespace ListLLMsResponse {
  export type AsObject = {
    llms?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLMList.AsObject,
    nextPageToken: string,
  }
}

export class CreateLLMRequest extends jspb.Message {
  getLlm(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM | undefined;
  setLlm(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM): CreateLLMRequest;
  hasLlm(): boolean;
  clearLlm(): CreateLLMRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLLMRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLLMRequest): CreateLLMRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLLMRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLLMRequest;
  static deserializeBinaryFromReader(message: CreateLLMRequest, reader: jspb.BinaryReader): CreateLLMRequest;
}

export namespace CreateLLMRequest {
  export type AsObject = {
    llm?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM.AsObject,
  }
}

export class CreateLLMResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLLMResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLLMResponse): CreateLLMResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLLMResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLLMResponse;
  static deserializeBinaryFromReader(message: CreateLLMResponse, reader: jspb.BinaryReader): CreateLLMResponse;
}

export namespace CreateLLMResponse {
  export type AsObject = {
  }
}

export class UpdateLLMRequest extends jspb.Message {
  getLlm(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM | undefined;
  setLlm(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM): UpdateLLMRequest;
  hasLlm(): boolean;
  clearLlm(): UpdateLLMRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLLMRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLLMRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLLMRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLLMRequest): UpdateLLMRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLLMRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLLMRequest;
  static deserializeBinaryFromReader(message: UpdateLLMRequest, reader: jspb.BinaryReader): UpdateLLMRequest;
}

export namespace UpdateLLMRequest {
  export type AsObject = {
    llm?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateLLMResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLLMResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLLMResponse): UpdateLLMResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLLMResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLLMResponse;
  static deserializeBinaryFromReader(message: UpdateLLMResponse, reader: jspb.BinaryReader): UpdateLLMResponse;
}

export namespace UpdateLLMResponse {
  export type AsObject = {
  }
}

export class GetLLMRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLLMRequest;

  getName(): string;
  setName(value: string): GetLLMRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLLMRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLLMRequest): GetLLMRequest.AsObject;
  static serializeBinaryToWriter(message: GetLLMRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLLMRequest;
  static deserializeBinaryFromReader(message: GetLLMRequest, reader: jspb.BinaryReader): GetLLMRequest;
}

export namespace GetLLMRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLLMResponse extends jspb.Message {
  getLlm(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM | undefined;
  setLlm(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM): GetLLMResponse;
  hasLlm(): boolean;
  clearLlm(): GetLLMResponse;

  getYaml(): string;
  setYaml(value: string): GetLLMResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLLMResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLLMResponse): GetLLMResponse.AsObject;
  static serializeBinaryToWriter(message: GetLLMResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLLMResponse;
  static deserializeBinaryFromReader(message: GetLLMResponse, reader: jspb.BinaryReader): GetLLMResponse;
}

export namespace GetLLMResponse {
  export type AsObject = {
    llm?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.LLM.AsObject,
    yaml: string,
  }
}

export class DeleteLLMRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLLMRequest;

  getName(): string;
  setName(value: string): DeleteLLMRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLLMRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLLMRequest): DeleteLLMRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLLMRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLLMRequest;
  static deserializeBinaryFromReader(message: DeleteLLMRequest, reader: jspb.BinaryReader): DeleteLLMRequest;
}

export namespace DeleteLLMRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteLLMResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLLMResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLLMResponse): DeleteLLMResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLLMResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLLMResponse;
  static deserializeBinaryFromReader(message: DeleteLLMResponse, reader: jspb.BinaryReader): DeleteLLMResponse;
}

export namespace DeleteLLMResponse {
  export type AsObject = {
  }
}

