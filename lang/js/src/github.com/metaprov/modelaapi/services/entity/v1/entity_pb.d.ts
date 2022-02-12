import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListEntitiesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListEntitiesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListEntitiesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListEntitiesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListEntitiesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntitiesRequest): ListEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntitiesRequest;
  static deserializeBinaryFromReader(message: ListEntitiesRequest, reader: jspb.BinaryReader): ListEntitiesRequest;
}

export namespace ListEntitiesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListEntitiesResponse extends jspb.Message {
  getEntities(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.EntityList | undefined;
  setEntities(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.EntityList): ListEntitiesResponse;
  hasEntities(): boolean;
  clearEntities(): ListEntitiesResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListEntitiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntitiesResponse): ListEntitiesResponse.AsObject;
  static serializeBinaryToWriter(message: ListEntitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntitiesResponse;
  static deserializeBinaryFromReader(message: ListEntitiesResponse, reader: jspb.BinaryReader): ListEntitiesResponse;
}

export namespace ListEntitiesResponse {
  export type AsObject = {
    entities?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.EntityList.AsObject,
    nextPageToken: string,
  }
}

export class CreateEntityRequest extends jspb.Message {
  getEntity(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setEntity(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity): CreateEntityRequest;
  hasEntity(): boolean;
  clearEntity(): CreateEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntityRequest): CreateEntityRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntityRequest;
  static deserializeBinaryFromReader(message: CreateEntityRequest, reader: jspb.BinaryReader): CreateEntityRequest;
}

export namespace CreateEntityRequest {
  export type AsObject = {
    entity?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
  }
}

export class CreateEntityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntityResponse): CreateEntityResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEntityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntityResponse;
  static deserializeBinaryFromReader(message: CreateEntityResponse, reader: jspb.BinaryReader): CreateEntityResponse;
}

export namespace CreateEntityResponse {
  export type AsObject = {
  }
}

export class UpdateEntityRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity): UpdateEntityRequest;
  hasItem(): boolean;
  clearItem(): UpdateEntityRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateEntityRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntityRequest): UpdateEntityRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntityRequest;
  static deserializeBinaryFromReader(message: UpdateEntityRequest, reader: jspb.BinaryReader): UpdateEntityRequest;
}

export namespace UpdateEntityRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEntityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntityResponse): UpdateEntityResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEntityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntityResponse;
  static deserializeBinaryFromReader(message: UpdateEntityResponse, reader: jspb.BinaryReader): UpdateEntityResponse;
}

export namespace UpdateEntityResponse {
  export type AsObject = {
  }
}

export class GetEntityRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetEntityRequest;

  getName(): string;
  setName(value: string): GetEntityRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetEntityRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntityRequest): GetEntityRequest.AsObject;
  static serializeBinaryToWriter(message: GetEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntityRequest;
  static deserializeBinaryFromReader(message: GetEntityRequest, reader: jspb.BinaryReader): GetEntityRequest;
}

export namespace GetEntityRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetEntityResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity): GetEntityResponse;
  hasItem(): boolean;
  clearItem(): GetEntityResponse;

  getYaml(): string;
  setYaml(value: string): GetEntityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntityResponse): GetEntityResponse.AsObject;
  static serializeBinaryToWriter(message: GetEntityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntityResponse;
  static deserializeBinaryFromReader(message: GetEntityResponse, reader: jspb.BinaryReader): GetEntityResponse;
}

export namespace GetEntityResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
    yaml: string,
  }
}

export class DeleteEntityRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteEntityRequest;

  getName(): string;
  setName(value: string): DeleteEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntityRequest): DeleteEntityRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntityRequest;
  static deserializeBinaryFromReader(message: DeleteEntityRequest, reader: jspb.BinaryReader): DeleteEntityRequest;
}

export namespace DeleteEntityRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteEntityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntityResponse): DeleteEntityResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEntityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntityResponse;
  static deserializeBinaryFromReader(message: DeleteEntityResponse, reader: jspb.BinaryReader): DeleteEntityResponse;
}

export namespace DeleteEntityResponse {
  export type AsObject = {
  }
}

