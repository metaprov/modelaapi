import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListLicensesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLicensesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListLicensesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLicensesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLicensesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListLicensesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLicensesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLicensesRequest): ListLicensesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLicensesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLicensesRequest;
  static deserializeBinaryFromReader(message: ListLicensesRequest, reader: jspb.BinaryReader): ListLicensesRequest;
}

export namespace ListLicensesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListLicensesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.LicenseList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.LicenseList): ListLicensesResponse;
  hasItems(): boolean;
  clearItems(): ListLicensesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLicensesResponse): ListLicensesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLicensesResponse;
  static deserializeBinaryFromReader(message: ListLicensesResponse, reader: jspb.BinaryReader): ListLicensesResponse;
}

export namespace ListLicensesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.LicenseList.AsObject,
  }
}

export class LicenseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LicenseResponse): LicenseResponse.AsObject;
  static serializeBinaryToWriter(message: LicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicenseResponse;
  static deserializeBinaryFromReader(message: LicenseResponse, reader: jspb.BinaryReader): LicenseResponse;
}

export namespace LicenseResponse {
  export type AsObject = {
  }
}

export class CreateLicenseRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License): CreateLicenseRequest;
  hasItem(): boolean;
  clearItem(): CreateLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLicenseRequest): CreateLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLicenseRequest;
  static deserializeBinaryFromReader(message: CreateLicenseRequest, reader: jspb.BinaryReader): CreateLicenseRequest;
}

export namespace CreateLicenseRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject,
  }
}

export class CreateLicenseFromKeyRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): CreateLicenseFromKeyRequest;

  getTenant(): string;
  setTenant(value: string): CreateLicenseFromKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLicenseFromKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLicenseFromKeyRequest): CreateLicenseFromKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLicenseFromKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLicenseFromKeyRequest;
  static deserializeBinaryFromReader(message: CreateLicenseFromKeyRequest, reader: jspb.BinaryReader): CreateLicenseFromKeyRequest;
}

export namespace CreateLicenseFromKeyRequest {
  export type AsObject = {
    key: string,
    tenant: string,
  }
}

export class CreateLicenseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLicenseResponse): CreateLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLicenseResponse;
  static deserializeBinaryFromReader(message: CreateLicenseResponse, reader: jspb.BinaryReader): CreateLicenseResponse;
}

export namespace CreateLicenseResponse {
  export type AsObject = {
  }
}

export class UpdateLicenseRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License): UpdateLicenseRequest;
  hasItem(): boolean;
  clearItem(): UpdateLicenseRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLicenseRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLicenseRequest): UpdateLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLicenseRequest;
  static deserializeBinaryFromReader(message: UpdateLicenseRequest, reader: jspb.BinaryReader): UpdateLicenseRequest;
}

export namespace UpdateLicenseRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateLicenseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLicenseResponse): UpdateLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLicenseResponse;
  static deserializeBinaryFromReader(message: UpdateLicenseResponse, reader: jspb.BinaryReader): UpdateLicenseResponse;
}

export namespace UpdateLicenseResponse {
  export type AsObject = {
  }
}

export class GetLicenseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLicenseRequest;

  getName(): string;
  setName(value: string): GetLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseRequest): GetLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: GetLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseRequest;
  static deserializeBinaryFromReader(message: GetLicenseRequest, reader: jspb.BinaryReader): GetLicenseRequest;
}

export namespace GetLicenseRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLicenseResponse extends jspb.Message {
  getLicense(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
  setLicense(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License): GetLicenseResponse;
  hasLicense(): boolean;
  clearLicense(): GetLicenseResponse;

  getYaml(): string;
  setYaml(value: string): GetLicenseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseResponse): GetLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: GetLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseResponse;
  static deserializeBinaryFromReader(message: GetLicenseResponse, reader: jspb.BinaryReader): GetLicenseResponse;
}

export namespace GetLicenseResponse {
  export type AsObject = {
    license?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject,
    yaml: string,
  }
}

export class GetLicenseNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLicenseNamespacesRequest;

  getName(): string;
  setName(value: string): GetLicenseNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseNamespacesRequest): GetLicenseNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetLicenseNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseNamespacesRequest;
  static deserializeBinaryFromReader(message: GetLicenseNamespacesRequest, reader: jspb.BinaryReader): GetLicenseNamespacesRequest;
}

export namespace GetLicenseNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetLicenseNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetLicenseNamespacesResponse;
  clearNamespacesList(): GetLicenseNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseNamespacesResponse): GetLicenseNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetLicenseNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseNamespacesResponse;
  static deserializeBinaryFromReader(message: GetLicenseNamespacesResponse, reader: jspb.BinaryReader): GetLicenseNamespacesResponse;
}

export namespace GetLicenseNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteLicenseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLicenseRequest;

  getName(): string;
  setName(value: string): DeleteLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLicenseRequest): DeleteLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLicenseRequest;
  static deserializeBinaryFromReader(message: DeleteLicenseRequest, reader: jspb.BinaryReader): DeleteLicenseRequest;
}

export namespace DeleteLicenseRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteLicenseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLicenseResponse): DeleteLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLicenseResponse;
  static deserializeBinaryFromReader(message: DeleteLicenseResponse, reader: jspb.BinaryReader): DeleteLicenseResponse;
}

export namespace DeleteLicenseResponse {
  export type AsObject = {
  }
}

