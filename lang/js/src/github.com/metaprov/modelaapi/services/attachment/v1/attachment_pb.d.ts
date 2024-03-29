import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class ListAttachmentsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAttachmentsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListAttachmentsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAttachmentsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAttachmentsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListAttachmentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAttachmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAttachmentsRequest): ListAttachmentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAttachmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAttachmentsRequest;
  static deserializeBinaryFromReader(message: ListAttachmentsRequest, reader: jspb.BinaryReader): ListAttachmentsRequest;
}

export namespace ListAttachmentsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListAttachmentsResponse extends jspb.Message {
  getAttachments(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AttachmentList | undefined;
  setAttachments(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AttachmentList): ListAttachmentsResponse;
  hasAttachments(): boolean;
  clearAttachments(): ListAttachmentsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAttachmentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAttachmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAttachmentsResponse): ListAttachmentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAttachmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAttachmentsResponse;
  static deserializeBinaryFromReader(message: ListAttachmentsResponse, reader: jspb.BinaryReader): ListAttachmentsResponse;
}

export namespace ListAttachmentsResponse {
  export type AsObject = {
    attachments?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.AttachmentList.AsObject,
    nextPageToken: string,
  }
}

export class AttachmentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentResponse): AttachmentResponse.AsObject;
  static serializeBinaryToWriter(message: AttachmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentResponse;
  static deserializeBinaryFromReader(message: AttachmentResponse, reader: jspb.BinaryReader): AttachmentResponse;
}

export namespace AttachmentResponse {
  export type AsObject = {
  }
}

export class CreateAttachmentRequest extends jspb.Message {
  getAttachment(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment | undefined;
  setAttachment(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment): CreateAttachmentRequest;
  hasAttachment(): boolean;
  clearAttachment(): CreateAttachmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAttachmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAttachmentRequest): CreateAttachmentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAttachmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAttachmentRequest;
  static deserializeBinaryFromReader(message: CreateAttachmentRequest, reader: jspb.BinaryReader): CreateAttachmentRequest;
}

export namespace CreateAttachmentRequest {
  export type AsObject = {
    attachment?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.AsObject,
  }
}

export class CreateAttachmentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAttachmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAttachmentResponse): CreateAttachmentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAttachmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAttachmentResponse;
  static deserializeBinaryFromReader(message: CreateAttachmentResponse, reader: jspb.BinaryReader): CreateAttachmentResponse;
}

export namespace CreateAttachmentResponse {
  export type AsObject = {
  }
}

export class UpdateAttachmentRequest extends jspb.Message {
  getAttachment(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment | undefined;
  setAttachment(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment): UpdateAttachmentRequest;
  hasAttachment(): boolean;
  clearAttachment(): UpdateAttachmentRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAttachmentRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateAttachmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAttachmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAttachmentRequest): UpdateAttachmentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAttachmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAttachmentRequest;
  static deserializeBinaryFromReader(message: UpdateAttachmentRequest, reader: jspb.BinaryReader): UpdateAttachmentRequest;
}

export namespace UpdateAttachmentRequest {
  export type AsObject = {
    attachment?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAttachmentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAttachmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAttachmentResponse): UpdateAttachmentResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAttachmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAttachmentResponse;
  static deserializeBinaryFromReader(message: UpdateAttachmentResponse, reader: jspb.BinaryReader): UpdateAttachmentResponse;
}

export namespace UpdateAttachmentResponse {
  export type AsObject = {
  }
}

export class GetAttachmentRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAttachmentRequest;

  getName(): string;
  setName(value: string): GetAttachmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttachmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttachmentRequest): GetAttachmentRequest.AsObject;
  static serializeBinaryToWriter(message: GetAttachmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttachmentRequest;
  static deserializeBinaryFromReader(message: GetAttachmentRequest, reader: jspb.BinaryReader): GetAttachmentRequest;
}

export namespace GetAttachmentRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAttachmentResponse extends jspb.Message {
  getAttachment(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment | undefined;
  setAttachment(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment): GetAttachmentResponse;
  hasAttachment(): boolean;
  clearAttachment(): GetAttachmentResponse;

  getYaml(): string;
  setYaml(value: string): GetAttachmentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttachmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttachmentResponse): GetAttachmentResponse.AsObject;
  static serializeBinaryToWriter(message: GetAttachmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttachmentResponse;
  static deserializeBinaryFromReader(message: GetAttachmentResponse, reader: jspb.BinaryReader): GetAttachmentResponse;
}

export namespace GetAttachmentResponse {
  export type AsObject = {
    attachment?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.AsObject,
    yaml: string,
  }
}

export class GetAttachmentNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAttachmentNamespacesRequest;

  getName(): string;
  setName(value: string): GetAttachmentNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttachmentNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttachmentNamespacesRequest): GetAttachmentNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAttachmentNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttachmentNamespacesRequest;
  static deserializeBinaryFromReader(message: GetAttachmentNamespacesRequest, reader: jspb.BinaryReader): GetAttachmentNamespacesRequest;
}

export namespace GetAttachmentNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAttachmentNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetAttachmentNamespacesResponse;
  clearNamespacesList(): GetAttachmentNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttachmentNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttachmentNamespacesResponse): GetAttachmentNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAttachmentNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttachmentNamespacesResponse;
  static deserializeBinaryFromReader(message: GetAttachmentNamespacesResponse, reader: jspb.BinaryReader): GetAttachmentNamespacesResponse;
}

export namespace GetAttachmentNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
  }
}

export class DeleteAttachmentRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAttachmentRequest;

  getName(): string;
  setName(value: string): DeleteAttachmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAttachmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAttachmentRequest): DeleteAttachmentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAttachmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAttachmentRequest;
  static deserializeBinaryFromReader(message: DeleteAttachmentRequest, reader: jspb.BinaryReader): DeleteAttachmentRequest;
}

export namespace DeleteAttachmentRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteAttachmentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAttachmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAttachmentResponse): DeleteAttachmentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAttachmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAttachmentResponse;
  static deserializeBinaryFromReader(message: DeleteAttachmentResponse, reader: jspb.BinaryReader): DeleteAttachmentResponse;
}

export namespace DeleteAttachmentResponse {
  export type AsObject = {
  }
}

export class AttachmentCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentCreateResponse): AttachmentCreateResponse.AsObject;
  static serializeBinaryToWriter(message: AttachmentCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentCreateResponse;
  static deserializeBinaryFromReader(message: AttachmentCreateResponse, reader: jspb.BinaryReader): AttachmentCreateResponse;
}

export namespace AttachmentCreateResponse {
  export type AsObject = {
  }
}

