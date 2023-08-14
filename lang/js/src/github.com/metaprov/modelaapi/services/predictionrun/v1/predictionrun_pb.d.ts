import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListPredictionRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictionRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPredictionRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPredictionRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPredictionRunsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListPredictionRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionRunsRequest): ListPredictionRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictionRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionRunsRequest;
  static deserializeBinaryFromReader(message: ListPredictionRunsRequest, reader: jspb.BinaryReader): ListPredictionRunsRequest;
}

export namespace ListPredictionRunsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListPredictionRunsResponse extends jspb.Message {
  getPredictions(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRunList | undefined;
  setPredictions(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRunList): ListPredictionRunsResponse;
  hasPredictions(): boolean;
  clearPredictions(): ListPredictionRunsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPredictionRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionRunsResponse): ListPredictionRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictionRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionRunsResponse;
  static deserializeBinaryFromReader(message: ListPredictionRunsResponse, reader: jspb.BinaryReader): ListPredictionRunsResponse;
}

export namespace ListPredictionRunsResponse {
  export type AsObject = {
    predictions?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRunList.AsObject,
    nextPageToken: string,
  }
}

export class CreatePredictionRunRequest extends jspb.Message {
  getPrediction(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun | undefined;
  setPrediction(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun): CreatePredictionRunRequest;
  hasPrediction(): boolean;
  clearPrediction(): CreatePredictionRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionRunRequest): CreatePredictionRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionRunRequest;
  static deserializeBinaryFromReader(message: CreatePredictionRunRequest, reader: jspb.BinaryReader): CreatePredictionRunRequest;
}

export namespace CreatePredictionRunRequest {
  export type AsObject = {
    prediction?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun.AsObject,
  }
}

export class CreatePredictionRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionRunResponse): CreatePredictionRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionRunResponse;
  static deserializeBinaryFromReader(message: CreatePredictionRunResponse, reader: jspb.BinaryReader): CreatePredictionRunResponse;
}

export namespace CreatePredictionRunResponse {
  export type AsObject = {
  }
}

export class UpdatePredictionRunRequest extends jspb.Message {
  getPrediction(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun | undefined;
  setPrediction(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun): UpdatePredictionRunRequest;
  hasPrediction(): boolean;
  clearPrediction(): UpdatePredictionRunRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdatePredictionRunRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdatePredictionRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionRunRequest): UpdatePredictionRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionRunRequest;
  static deserializeBinaryFromReader(message: UpdatePredictionRunRequest, reader: jspb.BinaryReader): UpdatePredictionRunRequest;
}

export namespace UpdatePredictionRunRequest {
  export type AsObject = {
    prediction?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePredictionRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionRunResponse): UpdatePredictionRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionRunResponse;
  static deserializeBinaryFromReader(message: UpdatePredictionRunResponse, reader: jspb.BinaryReader): UpdatePredictionRunResponse;
}

export namespace UpdatePredictionRunResponse {
  export type AsObject = {
  }
}

export class GetPredictionRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictionRunRequest;

  getName(): string;
  setName(value: string): GetPredictionRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionRunRequest): GetPredictionRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictionRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionRunRequest;
  static deserializeBinaryFromReader(message: GetPredictionRunRequest, reader: jspb.BinaryReader): GetPredictionRunRequest;
}

export namespace GetPredictionRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPredictionRunResponse extends jspb.Message {
  getPrediction(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun | undefined;
  setPrediction(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun): GetPredictionRunResponse;
  hasPrediction(): boolean;
  clearPrediction(): GetPredictionRunResponse;

  getYaml(): string;
  setYaml(value: string): GetPredictionRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionRunResponse): GetPredictionRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetPredictionRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionRunResponse;
  static deserializeBinaryFromReader(message: GetPredictionRunResponse, reader: jspb.BinaryReader): GetPredictionRunResponse;
}

export namespace GetPredictionRunResponse {
  export type AsObject = {
    prediction?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun.AsObject,
    yaml: string,
  }
}

export class DeletePredictionRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictionRunRequest;

  getName(): string;
  setName(value: string): DeletePredictionRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionRunRequest): DeletePredictionRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionRunRequest;
  static deserializeBinaryFromReader(message: DeletePredictionRunRequest, reader: jspb.BinaryReader): DeletePredictionRunRequest;
}

export namespace DeletePredictionRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeletePredictionRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionRunResponse): DeletePredictionRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionRunResponse;
  static deserializeBinaryFromReader(message: DeletePredictionRunResponse, reader: jspb.BinaryReader): DeletePredictionRunResponse;
}

export namespace DeletePredictionRunResponse {
  export type AsObject = {
  }
}

export class DownloadPredictionRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadPredictionRunRequest;

  getName(): string;
  setName(value: string): DownloadPredictionRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionRunRequest): DownloadPredictionRunRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionRunRequest;
  static deserializeBinaryFromReader(message: DownloadPredictionRunRequest, reader: jspb.BinaryReader): DownloadPredictionRunRequest;
}

export namespace DownloadPredictionRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadPredictionRunResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadPredictionRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionRunResponse): DownloadPredictionRunResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionRunResponse;
  static deserializeBinaryFromReader(message: DownloadPredictionRunResponse, reader: jspb.BinaryReader): DownloadPredictionRunResponse;
}

export namespace DownloadPredictionRunResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class AbortPredictionRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AbortPredictionRunRequest;

  getName(): string;
  setName(value: string): AbortPredictionRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortPredictionRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortPredictionRunRequest): AbortPredictionRunRequest.AsObject;
  static serializeBinaryToWriter(message: AbortPredictionRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortPredictionRunRequest;
  static deserializeBinaryFromReader(message: AbortPredictionRunRequest, reader: jspb.BinaryReader): AbortPredictionRunRequest;
}

export namespace AbortPredictionRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class AbortPredictionRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortPredictionRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortPredictionRunResponse): AbortPredictionRunResponse.AsObject;
  static serializeBinaryToWriter(message: AbortPredictionRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortPredictionRunResponse;
  static deserializeBinaryFromReader(message: AbortPredictionRunResponse, reader: jspb.BinaryReader): AbortPredictionRunResponse;
}

export namespace AbortPredictionRunResponse {
  export type AsObject = {
  }
}

