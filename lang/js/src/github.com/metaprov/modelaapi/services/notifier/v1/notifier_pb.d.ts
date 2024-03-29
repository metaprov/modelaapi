import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListNotifiersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotifiersRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListNotifiersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotifiersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotifiersRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListNotifiersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotifiersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotifiersRequest): ListNotifiersRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotifiersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotifiersRequest;
  static deserializeBinaryFromReader(message: ListNotifiersRequest, reader: jspb.BinaryReader): ListNotifiersRequest;
}

export namespace ListNotifiersRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListNotifiersResponse extends jspb.Message {
  getNotifiers(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.NotifierList | undefined;
  setNotifiers(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.NotifierList): ListNotifiersResponse;
  hasNotifiers(): boolean;
  clearNotifiers(): ListNotifiersResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotifiersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotifiersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotifiersResponse): ListNotifiersResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotifiersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotifiersResponse;
  static deserializeBinaryFromReader(message: ListNotifiersResponse, reader: jspb.BinaryReader): ListNotifiersResponse;
}

export namespace ListNotifiersResponse {
  export type AsObject = {
    notifiers?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.NotifierList.AsObject,
    nextPageToken: string,
  }
}

export class NotifierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotifierResponse): NotifierResponse.AsObject;
  static serializeBinaryToWriter(message: NotifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifierResponse;
  static deserializeBinaryFromReader(message: NotifierResponse, reader: jspb.BinaryReader): NotifierResponse;
}

export namespace NotifierResponse {
  export type AsObject = {
  }
}

export class CreateNotifierRequest extends jspb.Message {
  getNotifier(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setNotifier(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): CreateNotifierRequest;
  hasNotifier(): boolean;
  clearNotifier(): CreateNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotifierRequest): CreateNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotifierRequest;
  static deserializeBinaryFromReader(message: CreateNotifierRequest, reader: jspb.BinaryReader): CreateNotifierRequest;
}

export namespace CreateNotifierRequest {
  export type AsObject = {
    notifier?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
  }
}

export class CreateNotifierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotifierResponse): CreateNotifierResponse.AsObject;
  static serializeBinaryToWriter(message: CreateNotifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotifierResponse;
  static deserializeBinaryFromReader(message: CreateNotifierResponse, reader: jspb.BinaryReader): CreateNotifierResponse;
}

export namespace CreateNotifierResponse {
  export type AsObject = {
  }
}

export class UpdateNotifierRequest extends jspb.Message {
  getNotifier(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setNotifier(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): UpdateNotifierRequest;
  hasNotifier(): boolean;
  clearNotifier(): UpdateNotifierRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNotifierRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotifierRequest): UpdateNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotifierRequest;
  static deserializeBinaryFromReader(message: UpdateNotifierRequest, reader: jspb.BinaryReader): UpdateNotifierRequest;
}

export namespace UpdateNotifierRequest {
  export type AsObject = {
    notifier?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateNotifierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotifierResponse): UpdateNotifierResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateNotifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotifierResponse;
  static deserializeBinaryFromReader(message: UpdateNotifierResponse, reader: jspb.BinaryReader): UpdateNotifierResponse;
}

export namespace UpdateNotifierResponse {
  export type AsObject = {
  }
}

export class GetNotifierRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetNotifierRequest;

  getName(): string;
  setName(value: string): GetNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotifierRequest): GetNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotifierRequest;
  static deserializeBinaryFromReader(message: GetNotifierRequest, reader: jspb.BinaryReader): GetNotifierRequest;
}

export namespace GetNotifierRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetNotifierResponse extends jspb.Message {
  getNotifier(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setNotifier(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): GetNotifierResponse;
  hasNotifier(): boolean;
  clearNotifier(): GetNotifierResponse;

  getYaml(): string;
  setYaml(value: string): GetNotifierResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotifierResponse): GetNotifierResponse.AsObject;
  static serializeBinaryToWriter(message: GetNotifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotifierResponse;
  static deserializeBinaryFromReader(message: GetNotifierResponse, reader: jspb.BinaryReader): GetNotifierResponse;
}

export namespace GetNotifierResponse {
  export type AsObject = {
    notifier?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
    yaml: string,
  }
}

export class DeleteNotifierRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteNotifierRequest;

  getName(): string;
  setName(value: string): DeleteNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotifierRequest): DeleteNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotifierRequest;
  static deserializeBinaryFromReader(message: DeleteNotifierRequest, reader: jspb.BinaryReader): DeleteNotifierRequest;
}

export namespace DeleteNotifierRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteNotifierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotifierResponse): DeleteNotifierResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteNotifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotifierResponse;
  static deserializeBinaryFromReader(message: DeleteNotifierResponse, reader: jspb.BinaryReader): DeleteNotifierResponse;
}

export namespace DeleteNotifierResponse {
  export type AsObject = {
  }
}

