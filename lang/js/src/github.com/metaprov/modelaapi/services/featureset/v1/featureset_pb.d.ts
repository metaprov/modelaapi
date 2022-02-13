import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeaturesetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturesetRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeaturesetRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeaturesetRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeaturesetRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesetRequest): ListFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesetRequest;
  static deserializeBinaryFromReader(message: ListFeaturesetRequest, reader: jspb.BinaryReader): ListFeaturesetRequest;
}

export namespace ListFeaturesetRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListFeaturesetResponse extends jspb.Message {
  getFeaturesets(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetList | undefined;
  setFeaturesets(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetList): ListFeaturesetResponse;
  hasFeaturesets(): boolean;
  clearFeaturesets(): ListFeaturesetResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeaturesetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesetResponse): ListFeaturesetResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesetResponse;
  static deserializeBinaryFromReader(message: ListFeaturesetResponse, reader: jspb.BinaryReader): ListFeaturesetResponse;
}

export namespace ListFeaturesetResponse {
  export type AsObject = {
    featuresets?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetList.AsObject,
    nextPageToken: string,
  }
}

export class CreateFeaturesetRequest extends jspb.Message {
  getFeatureset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset | undefined;
  setFeatureset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset): CreateFeaturesetRequest;
  hasFeatureset(): boolean;
  clearFeatureset(): CreateFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturesetRequest): CreateFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturesetRequest;
  static deserializeBinaryFromReader(message: CreateFeaturesetRequest, reader: jspb.BinaryReader): CreateFeaturesetRequest;
}

export namespace CreateFeaturesetRequest {
  export type AsObject = {
    featureset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.AsObject,
  }
}

export class CreateFeaturesetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturesetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturesetResponse): CreateFeaturesetResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturesetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturesetResponse;
  static deserializeBinaryFromReader(message: CreateFeaturesetResponse, reader: jspb.BinaryReader): CreateFeaturesetResponse;
}

export namespace CreateFeaturesetResponse {
  export type AsObject = {
  }
}

export class UpdateFeaturesetRequest extends jspb.Message {
  getFeatureset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset | undefined;
  setFeatureset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset): UpdateFeaturesetRequest;
  hasFeatureset(): boolean;
  clearFeatureset(): UpdateFeaturesetRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFeaturesetRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturesetRequest): UpdateFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturesetRequest;
  static deserializeBinaryFromReader(message: UpdateFeaturesetRequest, reader: jspb.BinaryReader): UpdateFeaturesetRequest;
}

export namespace UpdateFeaturesetRequest {
  export type AsObject = {
    featureset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFeaturesetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturesetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturesetResponse): UpdateFeaturesetResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturesetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturesetResponse;
  static deserializeBinaryFromReader(message: UpdateFeaturesetResponse, reader: jspb.BinaryReader): UpdateFeaturesetResponse;
}

export namespace UpdateFeaturesetResponse {
  export type AsObject = {
  }
}

export class GetFeaturesetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeaturesetRequest;

  getName(): string;
  setName(value: string): GetFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturesetRequest): GetFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturesetRequest;
  static deserializeBinaryFromReader(message: GetFeaturesetRequest, reader: jspb.BinaryReader): GetFeaturesetRequest;
}

export namespace GetFeaturesetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeaturesetResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset): GetFeaturesetResponse;
  hasItem(): boolean;
  clearItem(): GetFeaturesetResponse;

  getYaml(): string;
  setYaml(value: string): GetFeaturesetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturesetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturesetResponse): GetFeaturesetResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeaturesetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturesetResponse;
  static deserializeBinaryFromReader(message: GetFeaturesetResponse, reader: jspb.BinaryReader): GetFeaturesetResponse;
}

export namespace GetFeaturesetResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.AsObject,
    yaml: string,
  }
}

export class DeleteFeaturesetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeaturesetRequest;

  getName(): string;
  setName(value: string): DeleteFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturesetRequest): DeleteFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturesetRequest;
  static deserializeBinaryFromReader(message: DeleteFeaturesetRequest, reader: jspb.BinaryReader): DeleteFeaturesetRequest;
}

export namespace DeleteFeaturesetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeaturesetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturesetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturesetResponse): DeleteFeaturesetResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturesetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturesetResponse;
  static deserializeBinaryFromReader(message: DeleteFeaturesetResponse, reader: jspb.BinaryReader): DeleteFeaturesetResponse;
}

export namespace DeleteFeaturesetResponse {
  export type AsObject = {
  }
}

