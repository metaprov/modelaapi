import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeaturesetClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturesetClassRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeaturesetClassRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeaturesetClassRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeaturesetClassRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListFeaturesetClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesetClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesetClassRequest): ListFeaturesetClassRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesetClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesetClassRequest;
  static deserializeBinaryFromReader(message: ListFeaturesetClassRequest, reader: jspb.BinaryReader): ListFeaturesetClassRequest;
}

export namespace ListFeaturesetClassRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListFeaturesetClassResponse extends jspb.Message {
  getFeaturesetclasss(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClassList | undefined;
  setFeaturesetclasss(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClassList): ListFeaturesetClassResponse;
  hasFeaturesetclasss(): boolean;
  clearFeaturesetclasss(): ListFeaturesetClassResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeaturesetClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesetClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesetClassResponse): ListFeaturesetClassResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesetClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesetClassResponse;
  static deserializeBinaryFromReader(message: ListFeaturesetClassResponse, reader: jspb.BinaryReader): ListFeaturesetClassResponse;
}

export namespace ListFeaturesetClassResponse {
  export type AsObject = {
    featuresetclasss?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClassList.AsObject,
    nextPageToken: string,
  }
}

export class CreateFeaturesetClassRequest extends jspb.Message {
  getFeaturesetclass(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass | undefined;
  setFeaturesetclass(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass): CreateFeaturesetClassRequest;
  hasFeaturesetclass(): boolean;
  clearFeaturesetclass(): CreateFeaturesetClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturesetClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturesetClassRequest): CreateFeaturesetClassRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturesetClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturesetClassRequest;
  static deserializeBinaryFromReader(message: CreateFeaturesetClassRequest, reader: jspb.BinaryReader): CreateFeaturesetClassRequest;
}

export namespace CreateFeaturesetClassRequest {
  export type AsObject = {
    featuresetclass?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass.AsObject,
  }
}

export class CreateFeaturesetClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturesetClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturesetClassResponse): CreateFeaturesetClassResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturesetClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturesetClassResponse;
  static deserializeBinaryFromReader(message: CreateFeaturesetClassResponse, reader: jspb.BinaryReader): CreateFeaturesetClassResponse;
}

export namespace CreateFeaturesetClassResponse {
  export type AsObject = {
  }
}

export class UpdateFeaturesetClassRequest extends jspb.Message {
  getFeaturesetclass(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass | undefined;
  setFeaturesetclass(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass): UpdateFeaturesetClassRequest;
  hasFeaturesetclass(): boolean;
  clearFeaturesetclass(): UpdateFeaturesetClassRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFeaturesetClassRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateFeaturesetClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturesetClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturesetClassRequest): UpdateFeaturesetClassRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturesetClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturesetClassRequest;
  static deserializeBinaryFromReader(message: UpdateFeaturesetClassRequest, reader: jspb.BinaryReader): UpdateFeaturesetClassRequest;
}

export namespace UpdateFeaturesetClassRequest {
  export type AsObject = {
    featuresetclass?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFeaturesetClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturesetClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturesetClassResponse): UpdateFeaturesetClassResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturesetClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturesetClassResponse;
  static deserializeBinaryFromReader(message: UpdateFeaturesetClassResponse, reader: jspb.BinaryReader): UpdateFeaturesetClassResponse;
}

export namespace UpdateFeaturesetClassResponse {
  export type AsObject = {
  }
}

export class GetFeaturesetClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeaturesetClassRequest;

  getName(): string;
  setName(value: string): GetFeaturesetClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturesetClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturesetClassRequest): GetFeaturesetClassRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturesetClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturesetClassRequest;
  static deserializeBinaryFromReader(message: GetFeaturesetClassRequest, reader: jspb.BinaryReader): GetFeaturesetClassRequest;
}

export namespace GetFeaturesetClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeaturesetClassResponse extends jspb.Message {
  getFeaturesetclass(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass | undefined;
  setFeaturesetclass(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass): GetFeaturesetClassResponse;
  hasFeaturesetclass(): boolean;
  clearFeaturesetclass(): GetFeaturesetClassResponse;

  getYaml(): string;
  setYaml(value: string): GetFeaturesetClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturesetClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturesetClassResponse): GetFeaturesetClassResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeaturesetClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturesetClassResponse;
  static deserializeBinaryFromReader(message: GetFeaturesetClassResponse, reader: jspb.BinaryReader): GetFeaturesetClassResponse;
}

export namespace GetFeaturesetClassResponse {
  export type AsObject = {
    featuresetclass?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturesetClass.AsObject,
    yaml: string,
  }
}

export class DeleteFeaturesetClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeaturesetClassRequest;

  getName(): string;
  setName(value: string): DeleteFeaturesetClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturesetClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturesetClassRequest): DeleteFeaturesetClassRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturesetClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturesetClassRequest;
  static deserializeBinaryFromReader(message: DeleteFeaturesetClassRequest, reader: jspb.BinaryReader): DeleteFeaturesetClassRequest;
}

export namespace DeleteFeaturesetClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeaturesetClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturesetClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturesetClassResponse): DeleteFeaturesetClassResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturesetClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturesetClassResponse;
  static deserializeBinaryFromReader(message: DeleteFeaturesetClassResponse, reader: jspb.BinaryReader): DeleteFeaturesetClassResponse;
}

export namespace DeleteFeaturesetClassResponse {
  export type AsObject = {
  }
}

export class PauseFeaturesetClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseFeaturesetClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseFeaturesetClassResponse): PauseFeaturesetClassResponse.AsObject;
  static serializeBinaryToWriter(message: PauseFeaturesetClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseFeaturesetClassResponse;
  static deserializeBinaryFromReader(message: PauseFeaturesetClassResponse, reader: jspb.BinaryReader): PauseFeaturesetClassResponse;
}

export namespace PauseFeaturesetClassResponse {
  export type AsObject = {
  }
}

export class PauseFeaturesetClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseFeaturesetClassRequest;

  getName(): string;
  setName(value: string): PauseFeaturesetClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseFeaturesetClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseFeaturesetClassRequest): PauseFeaturesetClassRequest.AsObject;
  static serializeBinaryToWriter(message: PauseFeaturesetClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseFeaturesetClassRequest;
  static deserializeBinaryFromReader(message: PauseFeaturesetClassRequest, reader: jspb.BinaryReader): PauseFeaturesetClassRequest;
}

export namespace PauseFeaturesetClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeFeaturesetClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeFeaturesetClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeFeaturesetClassResponse): ResumeFeaturesetClassResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeFeaturesetClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeFeaturesetClassResponse;
  static deserializeBinaryFromReader(message: ResumeFeaturesetClassResponse, reader: jspb.BinaryReader): ResumeFeaturesetClassResponse;
}

export namespace ResumeFeaturesetClassResponse {
  export type AsObject = {
  }
}

export class ResumeFeaturesetClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeFeaturesetClassRequest;

  getName(): string;
  setName(value: string): ResumeFeaturesetClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeFeaturesetClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeFeaturesetClassRequest): ResumeFeaturesetClassRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeFeaturesetClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeFeaturesetClassRequest;
  static deserializeBinaryFromReader(message: ResumeFeaturesetClassRequest, reader: jspb.BinaryReader): ResumeFeaturesetClassRequest;
}

export namespace ResumeFeaturesetClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

