import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/llm/v1alpha1/generated_pb';


export class ListKnowledgeBasesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListKnowledgeBasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnowledgeBasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnowledgeBasesRequest): ListKnowledgeBasesRequest.AsObject;
  static serializeBinaryToWriter(message: ListKnowledgeBasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnowledgeBasesRequest;
  static deserializeBinaryFromReader(message: ListKnowledgeBasesRequest, reader: jspb.BinaryReader): ListKnowledgeBasesRequest;
}

export namespace ListKnowledgeBasesRequest {
  export type AsObject = {
    namespace: string,
  }
}

export class ListKnowledgeBasesResponse extends jspb.Message {
  getKnowledgebases(): github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBaseList | undefined;
  setKnowledgebases(value?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBaseList): ListKnowledgeBasesResponse;
  hasKnowledgebases(): boolean;
  clearKnowledgebases(): ListKnowledgeBasesResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListKnowledgeBasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnowledgeBasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnowledgeBasesResponse): ListKnowledgeBasesResponse.AsObject;
  static serializeBinaryToWriter(message: ListKnowledgeBasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnowledgeBasesResponse;
  static deserializeBinaryFromReader(message: ListKnowledgeBasesResponse, reader: jspb.BinaryReader): ListKnowledgeBasesResponse;
}

export namespace ListKnowledgeBasesResponse {
  export type AsObject = {
    knowledgebases?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBaseList.AsObject,
    nextPageToken: string,
  }
}

export class CreateKnowledgeBaseRequest extends jspb.Message {
  getKnowledgebase(): github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase | undefined;
  setKnowledgebase(value?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase): CreateKnowledgeBaseRequest;
  hasKnowledgebase(): boolean;
  clearKnowledgebase(): CreateKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeBaseRequest): CreateKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: CreateKnowledgeBaseRequest, reader: jspb.BinaryReader): CreateKnowledgeBaseRequest;
}

export namespace CreateKnowledgeBaseRequest {
  export type AsObject = {
    knowledgebase?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase.AsObject,
  }
}

export class CreateKnowledgeBaseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKnowledgeBaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKnowledgeBaseResponse): CreateKnowledgeBaseResponse.AsObject;
  static serializeBinaryToWriter(message: CreateKnowledgeBaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKnowledgeBaseResponse;
  static deserializeBinaryFromReader(message: CreateKnowledgeBaseResponse, reader: jspb.BinaryReader): CreateKnowledgeBaseResponse;
}

export namespace CreateKnowledgeBaseResponse {
  export type AsObject = {
  }
}

export class UpdateKnowledgeBaseRequest extends jspb.Message {
  getKnowledgebase(): github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase | undefined;
  setKnowledgebase(value?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase): UpdateKnowledgeBaseRequest;
  hasKnowledgebase(): boolean;
  clearKnowledgebase(): UpdateKnowledgeBaseRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateKnowledgeBaseRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKnowledgeBaseRequest): UpdateKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: UpdateKnowledgeBaseRequest, reader: jspb.BinaryReader): UpdateKnowledgeBaseRequest;
}

export namespace UpdateKnowledgeBaseRequest {
  export type AsObject = {
    knowledgebase?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateKnowledgeBaseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKnowledgeBaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKnowledgeBaseResponse): UpdateKnowledgeBaseResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateKnowledgeBaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKnowledgeBaseResponse;
  static deserializeBinaryFromReader(message: UpdateKnowledgeBaseResponse, reader: jspb.BinaryReader): UpdateKnowledgeBaseResponse;
}

export namespace UpdateKnowledgeBaseResponse {
  export type AsObject = {
  }
}

export class GetKnowledgeBaseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetKnowledgeBaseRequest;

  getName(): string;
  setName(value: string): GetKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeBaseRequest): GetKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: GetKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: GetKnowledgeBaseRequest, reader: jspb.BinaryReader): GetKnowledgeBaseRequest;
}

export namespace GetKnowledgeBaseRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetKnowledgeBaseResponse extends jspb.Message {
  getKnowledgebase(): github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase | undefined;
  setKnowledgebase(value?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase): GetKnowledgeBaseResponse;
  hasKnowledgebase(): boolean;
  clearKnowledgebase(): GetKnowledgeBaseResponse;

  getYaml(): string;
  setYaml(value: string): GetKnowledgeBaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKnowledgeBaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKnowledgeBaseResponse): GetKnowledgeBaseResponse.AsObject;
  static serializeBinaryToWriter(message: GetKnowledgeBaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKnowledgeBaseResponse;
  static deserializeBinaryFromReader(message: GetKnowledgeBaseResponse, reader: jspb.BinaryReader): GetKnowledgeBaseResponse;
}

export namespace GetKnowledgeBaseResponse {
  export type AsObject = {
    knowledgebase?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase.AsObject,
    yaml: string,
  }
}

export class DeleteKnowledgeBaseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteKnowledgeBaseRequest;

  getName(): string;
  setName(value: string): DeleteKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKnowledgeBaseRequest): DeleteKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: DeleteKnowledgeBaseRequest, reader: jspb.BinaryReader): DeleteKnowledgeBaseRequest;
}

export namespace DeleteKnowledgeBaseRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteKnowledgeBaseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKnowledgeBaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKnowledgeBaseResponse): DeleteKnowledgeBaseResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteKnowledgeBaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKnowledgeBaseResponse;
  static deserializeBinaryFromReader(message: DeleteKnowledgeBaseResponse, reader: jspb.BinaryReader): DeleteKnowledgeBaseResponse;
}

export namespace DeleteKnowledgeBaseResponse {
  export type AsObject = {
  }
}

export class RefreshKnowledgeBaseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): RefreshKnowledgeBaseRequest;

  getName(): string;
  setName(value: string): RefreshKnowledgeBaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshKnowledgeBaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshKnowledgeBaseRequest): RefreshKnowledgeBaseRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshKnowledgeBaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshKnowledgeBaseRequest;
  static deserializeBinaryFromReader(message: RefreshKnowledgeBaseRequest, reader: jspb.BinaryReader): RefreshKnowledgeBaseRequest;
}

export namespace RefreshKnowledgeBaseRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class RefreshKnowledgeBaseResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): RefreshKnowledgeBaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshKnowledgeBaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshKnowledgeBaseResponse): RefreshKnowledgeBaseResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshKnowledgeBaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshKnowledgeBaseResponse;
  static deserializeBinaryFromReader(message: RefreshKnowledgeBaseResponse, reader: jspb.BinaryReader): RefreshKnowledgeBaseResponse;
}

export namespace RefreshKnowledgeBaseResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

