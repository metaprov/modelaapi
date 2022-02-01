import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListPredictionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictionsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPredictionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPredictionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPredictionsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListPredictionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionsRequest): ListPredictionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionsRequest;
  static deserializeBinaryFromReader(message: ListPredictionsRequest, reader: jspb.BinaryReader): ListPredictionsRequest;
}

export namespace ListPredictionsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListPredictionsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionList): ListPredictionsResponse;
  hasItems(): boolean;
  clearItems(): ListPredictionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionsResponse): ListPredictionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionsResponse;
  static deserializeBinaryFromReader(message: ListPredictionsResponse, reader: jspb.BinaryReader): ListPredictionsResponse;
}

export namespace ListPredictionsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionList.AsObject,
  }
}

export class CreatePredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionResponse): CreatePredictionResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionResponse;
  static deserializeBinaryFromReader(message: CreatePredictionResponse, reader: jspb.BinaryReader): CreatePredictionResponse;
}

export namespace CreatePredictionResponse {
  export type AsObject = {
  }
}

export class CreatePredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): CreatePredictionRequest;
  hasItem(): boolean;
  clearItem(): CreatePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionRequest): CreatePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionRequest;
  static deserializeBinaryFromReader(message: CreatePredictionRequest, reader: jspb.BinaryReader): CreatePredictionRequest;
}

export namespace CreatePredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
  }
}

export class UpdatePredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): UpdatePredictionRequest;
  hasItem(): boolean;
  clearItem(): UpdatePredictionRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdatePredictionRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdatePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionRequest): UpdatePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionRequest;
  static deserializeBinaryFromReader(message: UpdatePredictionRequest, reader: jspb.BinaryReader): UpdatePredictionRequest;
}

export namespace UpdatePredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionResponse): UpdatePredictionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionResponse;
  static deserializeBinaryFromReader(message: UpdatePredictionResponse, reader: jspb.BinaryReader): UpdatePredictionResponse;
}

export namespace UpdatePredictionResponse {
  export type AsObject = {
  }
}

export class GetPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictionRequest;

  getName(): string;
  setName(value: string): GetPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionRequest): GetPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionRequest;
  static deserializeBinaryFromReader(message: GetPredictionRequest, reader: jspb.BinaryReader): GetPredictionRequest;
}

export namespace GetPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPredictionResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): GetPredictionResponse;
  hasItem(): boolean;
  clearItem(): GetPredictionResponse;

  getYaml(): string;
  setYaml(value: string): GetPredictionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionResponse): GetPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: GetPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionResponse;
  static deserializeBinaryFromReader(message: GetPredictionResponse, reader: jspb.BinaryReader): GetPredictionResponse;
}

export namespace GetPredictionResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    yaml: string,
  }
}

export class DeletePredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictionRequest;

  getName(): string;
  setName(value: string): DeletePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionRequest): DeletePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionRequest;
  static deserializeBinaryFromReader(message: DeletePredictionRequest, reader: jspb.BinaryReader): DeletePredictionRequest;
}

export namespace DeletePredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeletePredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionResponse): DeletePredictionResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionResponse;
  static deserializeBinaryFromReader(message: DeletePredictionResponse, reader: jspb.BinaryReader): DeletePredictionResponse;
}

export namespace DeletePredictionResponse {
  export type AsObject = {
  }
}

export class DownloadPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadPredictionRequest;

  getName(): string;
  setName(value: string): DownloadPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionRequest): DownloadPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionRequest;
  static deserializeBinaryFromReader(message: DownloadPredictionRequest, reader: jspb.BinaryReader): DownloadPredictionRequest;
}

export namespace DownloadPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadPredictionResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadPredictionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionResponse): DownloadPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionResponse;
  static deserializeBinaryFromReader(message: DownloadPredictionResponse, reader: jspb.BinaryReader): DownloadPredictionResponse;
}

export namespace DownloadPredictionResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class AbortPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AbortPredictionRequest;

  getName(): string;
  setName(value: string): AbortPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortPredictionRequest): AbortPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: AbortPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortPredictionRequest;
  static deserializeBinaryFromReader(message: AbortPredictionRequest, reader: jspb.BinaryReader): AbortPredictionRequest;
}

export namespace AbortPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class AbortPredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortPredictionResponse): AbortPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: AbortPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortPredictionResponse;
  static deserializeBinaryFromReader(message: AbortPredictionResponse, reader: jspb.BinaryReader): AbortPredictionResponse;
}

export namespace AbortPredictionResponse {
  export type AsObject = {
  }
}

