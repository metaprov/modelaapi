import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeatureSourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeatureSourceRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeatureSourceRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeatureSourceRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeatureSourceRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListFeatureSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureSourceRequest): ListFeatureSourceRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeatureSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureSourceRequest;
  static deserializeBinaryFromReader(message: ListFeatureSourceRequest, reader: jspb.BinaryReader): ListFeatureSourceRequest;
}

export namespace ListFeatureSourceRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListFeatureSourceResponse extends jspb.Message {
  getFeaturesources(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSourceList | undefined;
  setFeaturesources(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSourceList): ListFeatureSourceResponse;
  hasFeaturesources(): boolean;
  clearFeaturesources(): ListFeatureSourceResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeatureSourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureSourceResponse): ListFeatureSourceResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeatureSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureSourceResponse;
  static deserializeBinaryFromReader(message: ListFeatureSourceResponse, reader: jspb.BinaryReader): ListFeatureSourceResponse;
}

export namespace ListFeatureSourceResponse {
  export type AsObject = {
    featuresources?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSourceList.AsObject,
    nextPageToken: string,
  }
}

export class CreateFeatureSourceRequest extends jspb.Message {
  getFeaturesource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource | undefined;
  setFeaturesource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource): CreateFeatureSourceRequest;
  hasFeaturesource(): boolean;
  clearFeaturesource(): CreateFeatureSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureSourceRequest): CreateFeatureSourceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureSourceRequest;
  static deserializeBinaryFromReader(message: CreateFeatureSourceRequest, reader: jspb.BinaryReader): CreateFeatureSourceRequest;
}

export namespace CreateFeatureSourceRequest {
  export type AsObject = {
    featuresource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource.AsObject,
  }
}

export class CreateFeatureSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureSourceResponse): CreateFeatureSourceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureSourceResponse;
  static deserializeBinaryFromReader(message: CreateFeatureSourceResponse, reader: jspb.BinaryReader): CreateFeatureSourceResponse;
}

export namespace CreateFeatureSourceResponse {
  export type AsObject = {
  }
}

export class UpdateFeatureSourceRequest extends jspb.Message {
  getFeaturesource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource | undefined;
  setFeaturesource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource): UpdateFeatureSourceRequest;
  hasFeaturesource(): boolean;
  clearFeaturesource(): UpdateFeatureSourceRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFeatureSourceRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateFeatureSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureSourceRequest): UpdateFeatureSourceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureSourceRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureSourceRequest, reader: jspb.BinaryReader): UpdateFeatureSourceRequest;
}

export namespace UpdateFeatureSourceRequest {
  export type AsObject = {
    featuresource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFeatureSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureSourceResponse): UpdateFeatureSourceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureSourceResponse;
  static deserializeBinaryFromReader(message: UpdateFeatureSourceResponse, reader: jspb.BinaryReader): UpdateFeatureSourceResponse;
}

export namespace UpdateFeatureSourceResponse {
  export type AsObject = {
  }
}

export class GetFeatureSourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeatureSourceRequest;

  getName(): string;
  setName(value: string): GetFeatureSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureSourceRequest): GetFeatureSourceRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureSourceRequest;
  static deserializeBinaryFromReader(message: GetFeatureSourceRequest, reader: jspb.BinaryReader): GetFeatureSourceRequest;
}

export namespace GetFeatureSourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeatureSourceResponse extends jspb.Message {
  getFeaturesource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource | undefined;
  setFeaturesource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource): GetFeatureSourceResponse;
  hasFeaturesource(): boolean;
  clearFeaturesource(): GetFeatureSourceResponse;

  getYaml(): string;
  setYaml(value: string): GetFeatureSourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureSourceResponse): GetFeatureSourceResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeatureSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureSourceResponse;
  static deserializeBinaryFromReader(message: GetFeatureSourceResponse, reader: jspb.BinaryReader): GetFeatureSourceResponse;
}

export namespace GetFeatureSourceResponse {
  export type AsObject = {
    featuresource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureSource.AsObject,
    yaml: string,
  }
}

export class DeleteFeatureSourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeatureSourceRequest;

  getName(): string;
  setName(value: string): DeleteFeatureSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureSourceRequest): DeleteFeatureSourceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureSourceRequest;
  static deserializeBinaryFromReader(message: DeleteFeatureSourceRequest, reader: jspb.BinaryReader): DeleteFeatureSourceRequest;
}

export namespace DeleteFeatureSourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeatureSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureSourceResponse): DeleteFeatureSourceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureSourceResponse;
  static deserializeBinaryFromReader(message: DeleteFeatureSourceResponse, reader: jspb.BinaryReader): DeleteFeatureSourceResponse;
}

export namespace DeleteFeatureSourceResponse {
  export type AsObject = {
  }
}

