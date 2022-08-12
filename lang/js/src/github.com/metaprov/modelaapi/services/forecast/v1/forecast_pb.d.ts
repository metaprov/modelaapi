import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListForecastsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListForecastsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListForecastsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListForecastsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListForecastsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListForecastsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListForecastsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListForecastsRequest): ListForecastsRequest.AsObject;
  static serializeBinaryToWriter(message: ListForecastsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListForecastsRequest;
  static deserializeBinaryFromReader(message: ListForecastsRequest, reader: jspb.BinaryReader): ListForecastsRequest;
}

export namespace ListForecastsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListForecastsResponse extends jspb.Message {
  getForecasts(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.ForecastList | undefined;
  setForecasts(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.ForecastList): ListForecastsResponse;
  hasForecasts(): boolean;
  clearForecasts(): ListForecastsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListForecastsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListForecastsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListForecastsResponse): ListForecastsResponse.AsObject;
  static serializeBinaryToWriter(message: ListForecastsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListForecastsResponse;
  static deserializeBinaryFromReader(message: ListForecastsResponse, reader: jspb.BinaryReader): ListForecastsResponse;
}

export namespace ListForecastsResponse {
  export type AsObject = {
    forecasts?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.ForecastList.AsObject,
    nextPageToken: string,
  }
}

export class CreateForecastResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateForecastResponse): CreateForecastResponse.AsObject;
  static serializeBinaryToWriter(message: CreateForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateForecastResponse;
  static deserializeBinaryFromReader(message: CreateForecastResponse, reader: jspb.BinaryReader): CreateForecastResponse;
}

export namespace CreateForecastResponse {
  export type AsObject = {
  }
}

export class CreateForecastRequest extends jspb.Message {
  getForecast(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast | undefined;
  setForecast(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast): CreateForecastRequest;
  hasForecast(): boolean;
  clearForecast(): CreateForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateForecastRequest): CreateForecastRequest.AsObject;
  static serializeBinaryToWriter(message: CreateForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateForecastRequest;
  static deserializeBinaryFromReader(message: CreateForecastRequest, reader: jspb.BinaryReader): CreateForecastRequest;
}

export namespace CreateForecastRequest {
  export type AsObject = {
    forecast?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast.AsObject,
  }
}

export class UpdateForecastRequest extends jspb.Message {
  getForecast(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast | undefined;
  setForecast(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast): UpdateForecastRequest;
  hasForecast(): boolean;
  clearForecast(): UpdateForecastRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateForecastRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateForecastRequest): UpdateForecastRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateForecastRequest;
  static deserializeBinaryFromReader(message: UpdateForecastRequest, reader: jspb.BinaryReader): UpdateForecastRequest;
}

export namespace UpdateForecastRequest {
  export type AsObject = {
    forecast?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateForecastResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateForecastResponse): UpdateForecastResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateForecastResponse;
  static deserializeBinaryFromReader(message: UpdateForecastResponse, reader: jspb.BinaryReader): UpdateForecastResponse;
}

export namespace UpdateForecastResponse {
  export type AsObject = {
  }
}

export class GetForecastRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetForecastRequest;

  getName(): string;
  setName(value: string): GetForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetForecastRequest): GetForecastRequest.AsObject;
  static serializeBinaryToWriter(message: GetForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForecastRequest;
  static deserializeBinaryFromReader(message: GetForecastRequest, reader: jspb.BinaryReader): GetForecastRequest;
}

export namespace GetForecastRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetForecastResponse extends jspb.Message {
  getForecast(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast | undefined;
  setForecast(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast): GetForecastResponse;
  hasForecast(): boolean;
  clearForecast(): GetForecastResponse;

  getYaml(): string;
  setYaml(value: string): GetForecastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetForecastResponse): GetForecastResponse.AsObject;
  static serializeBinaryToWriter(message: GetForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForecastResponse;
  static deserializeBinaryFromReader(message: GetForecastResponse, reader: jspb.BinaryReader): GetForecastResponse;
}

export namespace GetForecastResponse {
  export type AsObject = {
    forecast?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Forecast.AsObject,
    yaml: string,
  }
}

export class DeleteForecastRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteForecastRequest;

  getName(): string;
  setName(value: string): DeleteForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteForecastRequest): DeleteForecastRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteForecastRequest;
  static deserializeBinaryFromReader(message: DeleteForecastRequest, reader: jspb.BinaryReader): DeleteForecastRequest;
}

export namespace DeleteForecastRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteForecastResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteForecastResponse): DeleteForecastResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteForecastResponse;
  static deserializeBinaryFromReader(message: DeleteForecastResponse, reader: jspb.BinaryReader): DeleteForecastResponse;
}

export namespace DeleteForecastResponse {
  export type AsObject = {
  }
}

export class DownloadForecastRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadForecastRequest;

  getName(): string;
  setName(value: string): DownloadForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadForecastRequest): DownloadForecastRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadForecastRequest;
  static deserializeBinaryFromReader(message: DownloadForecastRequest, reader: jspb.BinaryReader): DownloadForecastRequest;
}

export namespace DownloadForecastRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadForecastResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadForecastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadForecastResponse): DownloadForecastResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadForecastResponse;
  static deserializeBinaryFromReader(message: DownloadForecastResponse, reader: jspb.BinaryReader): DownloadForecastResponse;
}

export namespace DownloadForecastResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class AbortForecastRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AbortForecastRequest;

  getName(): string;
  setName(value: string): AbortForecastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortForecastRequest): AbortForecastRequest.AsObject;
  static serializeBinaryToWriter(message: AbortForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortForecastRequest;
  static deserializeBinaryFromReader(message: AbortForecastRequest, reader: jspb.BinaryReader): AbortForecastRequest;
}

export namespace AbortForecastRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class AbortForecastResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortForecastResponse): AbortForecastResponse.AsObject;
  static serializeBinaryToWriter(message: AbortForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortForecastResponse;
  static deserializeBinaryFromReader(message: AbortForecastResponse, reader: jspb.BinaryReader): AbortForecastResponse;
}

export namespace AbortForecastResponse {
  export type AsObject = {
  }
}

