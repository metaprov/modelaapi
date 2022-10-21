import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeatureGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeatureGroupRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeatureGroupRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeatureGroupRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeatureGroupRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureGroupRequest): ListFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureGroupRequest;
  static deserializeBinaryFromReader(message: ListFeatureGroupRequest, reader: jspb.BinaryReader): ListFeatureGroupRequest;
}

export namespace ListFeatureGroupRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListFeatureGroupResponse extends jspb.Message {
  getFeaturegroups(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList | undefined;
  setFeaturegroups(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList): ListFeatureGroupResponse;
  hasFeaturegroups(): boolean;
  clearFeaturegroups(): ListFeatureGroupResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeatureGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureGroupResponse): ListFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureGroupResponse;
  static deserializeBinaryFromReader(message: ListFeatureGroupResponse, reader: jspb.BinaryReader): ListFeatureGroupResponse;
}

export namespace ListFeatureGroupResponse {
  export type AsObject = {
    featuregroups?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroupList.AsObject,
    nextPageToken: string,
  }
}

export class CreateFeatureGroupRequest extends jspb.Message {
  getFeaturegroup(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFeaturegroup(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): CreateFeatureGroupRequest;
  hasFeaturegroup(): boolean;
  clearFeaturegroup(): CreateFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureGroupRequest): CreateFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureGroupRequest;
  static deserializeBinaryFromReader(message: CreateFeatureGroupRequest, reader: jspb.BinaryReader): CreateFeatureGroupRequest;
}

export namespace CreateFeatureGroupRequest {
  export type AsObject = {
    featuregroup?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
  }
}

export class CreateFeatureGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureGroupResponse): CreateFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureGroupResponse;
  static deserializeBinaryFromReader(message: CreateFeatureGroupResponse, reader: jspb.BinaryReader): CreateFeatureGroupResponse;
}

export namespace CreateFeatureGroupResponse {
  export type AsObject = {
  }
}

export class UpdateFeatureGroupRequest extends jspb.Message {
  getFeaturegroup(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFeaturegroup(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): UpdateFeatureGroupRequest;
  hasFeaturegroup(): boolean;
  clearFeaturegroup(): UpdateFeatureGroupRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFeatureGroupRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureGroupRequest): UpdateFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureGroupRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureGroupRequest, reader: jspb.BinaryReader): UpdateFeatureGroupRequest;
}

export namespace UpdateFeatureGroupRequest {
  export type AsObject = {
    featuregroup?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFeatureGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureGroupResponse): UpdateFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureGroupResponse;
  static deserializeBinaryFromReader(message: UpdateFeatureGroupResponse, reader: jspb.BinaryReader): UpdateFeatureGroupResponse;
}

export namespace UpdateFeatureGroupResponse {
  export type AsObject = {
  }
}

export class GetFeatureGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeatureGroupRequest;

  getName(): string;
  setName(value: string): GetFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureGroupRequest): GetFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureGroupRequest;
  static deserializeBinaryFromReader(message: GetFeatureGroupRequest, reader: jspb.BinaryReader): GetFeatureGroupRequest;
}

export namespace GetFeatureGroupRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeatureGroupResponse extends jspb.Message {
  getFeaturegroup(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setFeaturegroup(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): GetFeatureGroupResponse;
  hasFeaturegroup(): boolean;
  clearFeaturegroup(): GetFeatureGroupResponse;

  getYaml(): string;
  setYaml(value: string): GetFeatureGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureGroupResponse): GetFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureGroupResponse;
  static deserializeBinaryFromReader(message: GetFeatureGroupResponse, reader: jspb.BinaryReader): GetFeatureGroupResponse;
}

export namespace GetFeatureGroupResponse {
  export type AsObject = {
    featuregroup?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
    yaml: string,
  }
}

export class DeleteFeatureGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeatureGroupRequest;

  getName(): string;
  setName(value: string): DeleteFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureGroupRequest): DeleteFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureGroupRequest;
  static deserializeBinaryFromReader(message: DeleteFeatureGroupRequest, reader: jspb.BinaryReader): DeleteFeatureGroupRequest;
}

export namespace DeleteFeatureGroupRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeatureGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureGroupResponse): DeleteFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureGroupResponse;
  static deserializeBinaryFromReader(message: DeleteFeatureGroupResponse, reader: jspb.BinaryReader): DeleteFeatureGroupResponse;
}

export namespace DeleteFeatureGroupResponse {
  export type AsObject = {
  }
}

export class PauseFeatureGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseFeatureGroupResponse): PauseFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: PauseFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseFeatureGroupResponse;
  static deserializeBinaryFromReader(message: PauseFeatureGroupResponse, reader: jspb.BinaryReader): PauseFeatureGroupResponse;
}

export namespace PauseFeatureGroupResponse {
  export type AsObject = {
  }
}

export class PauseFeatureGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseFeatureGroupRequest;

  getName(): string;
  setName(value: string): PauseFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseFeatureGroupRequest): PauseFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: PauseFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseFeatureGroupRequest;
  static deserializeBinaryFromReader(message: PauseFeatureGroupRequest, reader: jspb.BinaryReader): PauseFeatureGroupRequest;
}

export namespace PauseFeatureGroupRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeFeatureGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeFeatureGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeFeatureGroupResponse): ResumeFeatureGroupResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeFeatureGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeFeatureGroupResponse;
  static deserializeBinaryFromReader(message: ResumeFeatureGroupResponse, reader: jspb.BinaryReader): ResumeFeatureGroupResponse;
}

export namespace ResumeFeatureGroupResponse {
  export type AsObject = {
  }
}

export class ResumeFeatureGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeFeatureGroupRequest;

  getName(): string;
  setName(value: string): ResumeFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeFeatureGroupRequest): ResumeFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeFeatureGroupRequest;
  static deserializeBinaryFromReader(message: ResumeFeatureGroupRequest, reader: jspb.BinaryReader): ResumeFeatureGroupRequest;
}

export namespace ResumeFeatureGroupRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

