import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListLabsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListLabsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLabsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLabsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListLabsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabsRequest): ListLabsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabsRequest;
  static deserializeBinaryFromReader(message: ListLabsRequest, reader: jspb.BinaryReader): ListLabsRequest;
}

export namespace ListLabsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListLabsResponse extends jspb.Message {
  getLabs(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.LabList | undefined;
  setLabs(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.LabList): ListLabsResponse;
  hasLabs(): boolean;
  clearLabs(): ListLabsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLabsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabsResponse): ListLabsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabsResponse;
  static deserializeBinaryFromReader(message: ListLabsResponse, reader: jspb.BinaryReader): ListLabsResponse;
}

export namespace ListLabsResponse {
  export type AsObject = {
    labs?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.LabList.AsObject,
    nextPageToken: string,
  }
}

export class LabResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LabResponse): LabResponse.AsObject;
  static serializeBinaryToWriter(message: LabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabResponse;
  static deserializeBinaryFromReader(message: LabResponse, reader: jspb.BinaryReader): LabResponse;
}

export namespace LabResponse {
  export type AsObject = {
  }
}

export class CreateLabRequest extends jspb.Message {
  getLab(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setLab(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): CreateLabRequest;
  hasLab(): boolean;
  clearLab(): CreateLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabRequest): CreateLabRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabRequest;
  static deserializeBinaryFromReader(message: CreateLabRequest, reader: jspb.BinaryReader): CreateLabRequest;
}

export namespace CreateLabRequest {
  export type AsObject = {
    lab?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
  }
}

export class CreateLabResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabResponse): CreateLabResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabResponse;
  static deserializeBinaryFromReader(message: CreateLabResponse, reader: jspb.BinaryReader): CreateLabResponse;
}

export namespace CreateLabResponse {
  export type AsObject = {
  }
}

export class UpdateLabRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): UpdateLabRequest;
  hasItem(): boolean;
  clearItem(): UpdateLabRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLabRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabRequest): UpdateLabRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabRequest;
  static deserializeBinaryFromReader(message: UpdateLabRequest, reader: jspb.BinaryReader): UpdateLabRequest;
}

export namespace UpdateLabRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateLabResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabResponse): UpdateLabResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabResponse;
  static deserializeBinaryFromReader(message: UpdateLabResponse, reader: jspb.BinaryReader): UpdateLabResponse;
}

export namespace UpdateLabResponse {
  export type AsObject = {
  }
}

export class GetLabRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLabRequest;

  getName(): string;
  setName(value: string): GetLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabRequest): GetLabRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabRequest;
  static deserializeBinaryFromReader(message: GetLabRequest, reader: jspb.BinaryReader): GetLabRequest;
}

export namespace GetLabRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLabResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): GetLabResponse;
  hasItem(): boolean;
  clearItem(): GetLabResponse;

  getYaml(): string;
  setYaml(value: string): GetLabResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabResponse): GetLabResponse.AsObject;
  static serializeBinaryToWriter(message: GetLabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabResponse;
  static deserializeBinaryFromReader(message: GetLabResponse, reader: jspb.BinaryReader): GetLabResponse;
}

export namespace GetLabResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
    yaml: string,
  }
}

export class GetLabNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLabNamespacesRequest;

  getName(): string;
  setName(value: string): GetLabNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabNamespacesRequest): GetLabNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabNamespacesRequest;
  static deserializeBinaryFromReader(message: GetLabNamespacesRequest, reader: jspb.BinaryReader): GetLabNamespacesRequest;
}

export namespace GetLabNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLabNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetLabNamespacesResponse;
  clearNamespacesList(): GetLabNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabNamespacesResponse): GetLabNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetLabNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabNamespacesResponse;
  static deserializeBinaryFromReader(message: GetLabNamespacesResponse, reader: jspb.BinaryReader): GetLabNamespacesResponse;
}

export namespace GetLabNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteLabRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLabRequest;

  getName(): string;
  setName(value: string): DeleteLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabRequest): DeleteLabRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabRequest;
  static deserializeBinaryFromReader(message: DeleteLabRequest, reader: jspb.BinaryReader): DeleteLabRequest;
}

export namespace DeleteLabRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteLabResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabResponse): DeleteLabResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabResponse;
  static deserializeBinaryFromReader(message: DeleteLabResponse, reader: jspb.BinaryReader): DeleteLabResponse;
}

export namespace DeleteLabResponse {
  export type AsObject = {
  }
}

