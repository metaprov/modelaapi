import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeatureHistogramsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeatureHistogramsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeatureHistogramsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeatureHistogramsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeatureHistogramsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListFeatureHistogramsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureHistogramsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureHistogramsRequest): ListFeatureHistogramsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeatureHistogramsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureHistogramsRequest;
  static deserializeBinaryFromReader(message: ListFeatureHistogramsRequest, reader: jspb.BinaryReader): ListFeatureHistogramsRequest;
}

export namespace ListFeatureHistogramsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListFeatureHistogramsResponse extends jspb.Message {
  getHistograms(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogramList | undefined;
  setHistograms(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogramList): ListFeatureHistogramsResponse;
  hasHistograms(): boolean;
  clearHistograms(): ListFeatureHistogramsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeatureHistogramsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureHistogramsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureHistogramsResponse): ListFeatureHistogramsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeatureHistogramsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureHistogramsResponse;
  static deserializeBinaryFromReader(message: ListFeatureHistogramsResponse, reader: jspb.BinaryReader): ListFeatureHistogramsResponse;
}

export namespace ListFeatureHistogramsResponse {
  export type AsObject = {
    histograms?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogramList.AsObject,
    nextPageToken: string,
  }
}

export class CreateFeatureHistogramRequest extends jspb.Message {
  getHistogram(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
  setHistogram(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): CreateFeatureHistogramRequest;
  hasHistogram(): boolean;
  clearHistogram(): CreateFeatureHistogramRequest;

  getNextPageToken(): string;
  setNextPageToken(value: string): CreateFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureHistogramRequest): CreateFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: CreateFeatureHistogramRequest, reader: jspb.BinaryReader): CreateFeatureHistogramRequest;
}

export namespace CreateFeatureHistogramRequest {
  export type AsObject = {
    histogram?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
    nextPageToken: string,
  }
}

export class CreateFeatureHistogramResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureHistogramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureHistogramResponse): CreateFeatureHistogramResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureHistogramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureHistogramResponse;
  static deserializeBinaryFromReader(message: CreateFeatureHistogramResponse, reader: jspb.BinaryReader): CreateFeatureHistogramResponse;
}

export namespace CreateFeatureHistogramResponse {
  export type AsObject = {
  }
}

export class UpdateFeatureHistogramRequest extends jspb.Message {
  getHistogram(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
  setHistogram(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): UpdateFeatureHistogramRequest;
  hasHistogram(): boolean;
  clearHistogram(): UpdateFeatureHistogramRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFeatureHistogramRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureHistogramRequest): UpdateFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureHistogramRequest, reader: jspb.BinaryReader): UpdateFeatureHistogramRequest;
}

export namespace UpdateFeatureHistogramRequest {
  export type AsObject = {
    histogram?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFeatureHistogramResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureHistogramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureHistogramResponse): UpdateFeatureHistogramResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureHistogramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureHistogramResponse;
  static deserializeBinaryFromReader(message: UpdateFeatureHistogramResponse, reader: jspb.BinaryReader): UpdateFeatureHistogramResponse;
}

export namespace UpdateFeatureHistogramResponse {
  export type AsObject = {
  }
}

export class GetFeatureHistogramRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeatureHistogramRequest;

  getName(): string;
  setName(value: string): GetFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureHistogramRequest): GetFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: GetFeatureHistogramRequest, reader: jspb.BinaryReader): GetFeatureHistogramRequest;
}

export namespace GetFeatureHistogramRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeatureHistogramResponse extends jspb.Message {
  getHistogram(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
  setHistogram(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): GetFeatureHistogramResponse;
  hasHistogram(): boolean;
  clearHistogram(): GetFeatureHistogramResponse;

  getYaml(): string;
  setYaml(value: string): GetFeatureHistogramResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureHistogramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureHistogramResponse): GetFeatureHistogramResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeatureHistogramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureHistogramResponse;
  static deserializeBinaryFromReader(message: GetFeatureHistogramResponse, reader: jspb.BinaryReader): GetFeatureHistogramResponse;
}

export namespace GetFeatureHistogramResponse {
  export type AsObject = {
    histogram?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
    yaml: string,
  }
}

export class DeleteFeatureHistogramRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeatureHistogramRequest;

  getName(): string;
  setName(value: string): DeleteFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureHistogramRequest): DeleteFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: DeleteFeatureHistogramRequest, reader: jspb.BinaryReader): DeleteFeatureHistogramRequest;
}

export namespace DeleteFeatureHistogramRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeatureHistogramResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureHistogramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureHistogramResponse): DeleteFeatureHistogramResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureHistogramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureHistogramResponse;
  static deserializeBinaryFromReader(message: DeleteFeatureHistogramResponse, reader: jspb.BinaryReader): DeleteFeatureHistogramResponse;
}

export namespace DeleteFeatureHistogramResponse {
  export type AsObject = {
  }
}

