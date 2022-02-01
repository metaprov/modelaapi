import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListCurtainsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCurtainsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCurtainsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCurtainsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCurtainsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListCurtainsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurtainsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCurtainsRequest): ListCurtainsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCurtainsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCurtainsRequest;
  static deserializeBinaryFromReader(message: ListCurtainsRequest, reader: jspb.BinaryReader): ListCurtainsRequest;
}

export namespace ListCurtainsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListCurtainsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CurtainList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CurtainList): ListCurtainsResponse;
  hasItems(): boolean;
  clearItems(): ListCurtainsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCurtainsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurtainsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCurtainsResponse): ListCurtainsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCurtainsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCurtainsResponse;
  static deserializeBinaryFromReader(message: ListCurtainsResponse, reader: jspb.BinaryReader): ListCurtainsResponse;
}

export namespace ListCurtainsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CurtainList.AsObject,
    nextPageToken: string,
  }
}

export class CreateCurtainResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCurtainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCurtainResponse): CreateCurtainResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCurtainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCurtainResponse;
  static deserializeBinaryFromReader(message: CreateCurtainResponse, reader: jspb.BinaryReader): CreateCurtainResponse;
}

export namespace CreateCurtainResponse {
  export type AsObject = {
  }
}

export class CreateCurtainRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain): CreateCurtainRequest;
  hasItem(): boolean;
  clearItem(): CreateCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCurtainRequest): CreateCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCurtainRequest;
  static deserializeBinaryFromReader(message: CreateCurtainRequest, reader: jspb.BinaryReader): CreateCurtainRequest;
}

export namespace CreateCurtainRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.AsObject,
  }
}

export class UpdateCurtainRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain): UpdateCurtainRequest;
  hasItem(): boolean;
  clearItem(): UpdateCurtainRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCurtainRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCurtainRequest): UpdateCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCurtainRequest;
  static deserializeBinaryFromReader(message: UpdateCurtainRequest, reader: jspb.BinaryReader): UpdateCurtainRequest;
}

export namespace UpdateCurtainRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCurtainResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCurtainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCurtainResponse): UpdateCurtainResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCurtainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCurtainResponse;
  static deserializeBinaryFromReader(message: UpdateCurtainResponse, reader: jspb.BinaryReader): UpdateCurtainResponse;
}

export namespace UpdateCurtainResponse {
  export type AsObject = {
  }
}

export class GetCurtainRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCurtainRequest;

  getName(): string;
  setName(value: string): GetCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurtainRequest): GetCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: GetCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurtainRequest;
  static deserializeBinaryFromReader(message: GetCurtainRequest, reader: jspb.BinaryReader): GetCurtainRequest;
}

export namespace GetCurtainRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCurtainResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain): GetCurtainResponse;
  hasItem(): boolean;
  clearItem(): GetCurtainResponse;

  getYaml(): string;
  setYaml(value: string): GetCurtainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurtainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurtainResponse): GetCurtainResponse.AsObject;
  static serializeBinaryToWriter(message: GetCurtainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurtainResponse;
  static deserializeBinaryFromReader(message: GetCurtainResponse, reader: jspb.BinaryReader): GetCurtainResponse;
}

export namespace GetCurtainResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.AsObject,
    yaml: string,
  }
}

export class DeleteCurtainRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCurtainRequest;

  getName(): string;
  setName(value: string): DeleteCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCurtainRequest): DeleteCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCurtainRequest;
  static deserializeBinaryFromReader(message: DeleteCurtainRequest, reader: jspb.BinaryReader): DeleteCurtainRequest;
}

export namespace DeleteCurtainRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteCurtainResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCurtainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCurtainResponse): DeleteCurtainResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCurtainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCurtainResponse;
  static deserializeBinaryFromReader(message: DeleteCurtainResponse, reader: jspb.BinaryReader): DeleteCurtainResponse;
}

export namespace DeleteCurtainResponse {
  export type AsObject = {
  }
}

