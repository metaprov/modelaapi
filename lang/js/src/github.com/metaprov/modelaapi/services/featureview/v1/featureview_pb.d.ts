import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeatureViewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeatureViewRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeatureViewRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeatureViewRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeatureViewRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListFeatureViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureViewRequest): ListFeatureViewRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeatureViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureViewRequest;
  static deserializeBinaryFromReader(message: ListFeatureViewRequest, reader: jspb.BinaryReader): ListFeatureViewRequest;
}

export namespace ListFeatureViewRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListFeatureViewResponse extends jspb.Message {
  getFeatureviews(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureViewList | undefined;
  setFeatureviews(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureViewList): ListFeatureViewResponse;
  hasFeatureviews(): boolean;
  clearFeatureviews(): ListFeatureViewResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeatureViewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureViewResponse): ListFeatureViewResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeatureViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureViewResponse;
  static deserializeBinaryFromReader(message: ListFeatureViewResponse, reader: jspb.BinaryReader): ListFeatureViewResponse;
}

export namespace ListFeatureViewResponse {
  export type AsObject = {
    featureviews?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureViewList.AsObject,
    nextPageToken: string,
  }
}

export class CreateFeatureViewRequest extends jspb.Message {
  getFeatureview(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView | undefined;
  setFeatureview(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView): CreateFeatureViewRequest;
  hasFeatureview(): boolean;
  clearFeatureview(): CreateFeatureViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureViewRequest): CreateFeatureViewRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureViewRequest;
  static deserializeBinaryFromReader(message: CreateFeatureViewRequest, reader: jspb.BinaryReader): CreateFeatureViewRequest;
}

export namespace CreateFeatureViewRequest {
  export type AsObject = {
    featureview?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView.AsObject,
  }
}

export class CreateFeatureViewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureViewResponse): CreateFeatureViewResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureViewResponse;
  static deserializeBinaryFromReader(message: CreateFeatureViewResponse, reader: jspb.BinaryReader): CreateFeatureViewResponse;
}

export namespace CreateFeatureViewResponse {
  export type AsObject = {
  }
}

export class UpdateFeatureViewRequest extends jspb.Message {
  getFeatureview(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView | undefined;
  setFeatureview(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView): UpdateFeatureViewRequest;
  hasFeatureview(): boolean;
  clearFeatureview(): UpdateFeatureViewRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFeatureViewRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateFeatureViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureViewRequest): UpdateFeatureViewRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureViewRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureViewRequest, reader: jspb.BinaryReader): UpdateFeatureViewRequest;
}

export namespace UpdateFeatureViewRequest {
  export type AsObject = {
    featureview?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFeatureViewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureViewResponse): UpdateFeatureViewResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureViewResponse;
  static deserializeBinaryFromReader(message: UpdateFeatureViewResponse, reader: jspb.BinaryReader): UpdateFeatureViewResponse;
}

export namespace UpdateFeatureViewResponse {
  export type AsObject = {
  }
}

export class GetFeatureViewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeatureViewRequest;

  getName(): string;
  setName(value: string): GetFeatureViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureViewRequest): GetFeatureViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureViewRequest;
  static deserializeBinaryFromReader(message: GetFeatureViewRequest, reader: jspb.BinaryReader): GetFeatureViewRequest;
}

export namespace GetFeatureViewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeatureViewResponse extends jspb.Message {
  getFeatureview(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView | undefined;
  setFeatureview(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView): GetFeatureViewResponse;
  hasFeatureview(): boolean;
  clearFeatureview(): GetFeatureViewResponse;

  getYaml(): string;
  setYaml(value: string): GetFeatureViewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureViewResponse): GetFeatureViewResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeatureViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureViewResponse;
  static deserializeBinaryFromReader(message: GetFeatureViewResponse, reader: jspb.BinaryReader): GetFeatureViewResponse;
}

export namespace GetFeatureViewResponse {
  export type AsObject = {
    featureview?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureView.AsObject,
    yaml: string,
  }
}

export class DeleteFeatureViewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeatureViewRequest;

  getName(): string;
  setName(value: string): DeleteFeatureViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureViewRequest): DeleteFeatureViewRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureViewRequest;
  static deserializeBinaryFromReader(message: DeleteFeatureViewRequest, reader: jspb.BinaryReader): DeleteFeatureViewRequest;
}

export namespace DeleteFeatureViewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeatureViewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureViewResponse): DeleteFeatureViewResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureViewResponse;
  static deserializeBinaryFromReader(message: DeleteFeatureViewResponse, reader: jspb.BinaryReader): DeleteFeatureViewResponse;
}

export namespace DeleteFeatureViewResponse {
  export type AsObject = {
  }
}

export class PauseFeatureViewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseFeatureViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseFeatureViewResponse): PauseFeatureViewResponse.AsObject;
  static serializeBinaryToWriter(message: PauseFeatureViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseFeatureViewResponse;
  static deserializeBinaryFromReader(message: PauseFeatureViewResponse, reader: jspb.BinaryReader): PauseFeatureViewResponse;
}

export namespace PauseFeatureViewResponse {
  export type AsObject = {
  }
}

export class PauseFeatureViewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseFeatureViewRequest;

  getName(): string;
  setName(value: string): PauseFeatureViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseFeatureViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseFeatureViewRequest): PauseFeatureViewRequest.AsObject;
  static serializeBinaryToWriter(message: PauseFeatureViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseFeatureViewRequest;
  static deserializeBinaryFromReader(message: PauseFeatureViewRequest, reader: jspb.BinaryReader): PauseFeatureViewRequest;
}

export namespace PauseFeatureViewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeFeatureViewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeFeatureViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeFeatureViewResponse): ResumeFeatureViewResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeFeatureViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeFeatureViewResponse;
  static deserializeBinaryFromReader(message: ResumeFeatureViewResponse, reader: jspb.BinaryReader): ResumeFeatureViewResponse;
}

export namespace ResumeFeatureViewResponse {
  export type AsObject = {
  }
}

export class ResumeFeatureViewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeFeatureViewRequest;

  getName(): string;
  setName(value: string): ResumeFeatureViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeFeatureViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeFeatureViewRequest): ResumeFeatureViewRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeFeatureViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeFeatureViewRequest;
  static deserializeBinaryFromReader(message: ResumeFeatureViewRequest, reader: jspb.BinaryReader): ResumeFeatureViewRequest;
}

export namespace ResumeFeatureViewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

