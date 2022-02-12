import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListNotebooksRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotebooksRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListNotebooksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotebooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotebooksRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListNotebooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebooksRequest): ListNotebooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotebooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebooksRequest;
  static deserializeBinaryFromReader(message: ListNotebooksRequest, reader: jspb.BinaryReader): ListNotebooksRequest;
}

export namespace ListNotebooksRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListNotebooksResponse extends jspb.Message {
  getNotebooks(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookList | undefined;
  setNotebooks(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookList): ListNotebooksResponse;
  hasNotebooks(): boolean;
  clearNotebooks(): ListNotebooksResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotebooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebooksResponse): ListNotebooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotebooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebooksResponse;
  static deserializeBinaryFromReader(message: ListNotebooksResponse, reader: jspb.BinaryReader): ListNotebooksResponse;
}

export namespace ListNotebooksResponse {
  export type AsObject = {
    notebooks?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookList.AsObject,
    nextPageToken: string,
  }
}

export class NotebookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookResponse): NotebookResponse.AsObject;
  static serializeBinaryToWriter(message: NotebookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookResponse;
  static deserializeBinaryFromReader(message: NotebookResponse, reader: jspb.BinaryReader): NotebookResponse;
}

export namespace NotebookResponse {
  export type AsObject = {
  }
}

export class CreateNotebookRequest extends jspb.Message {
  getNotebook(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook | undefined;
  setNotebook(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook): CreateNotebookRequest;
  hasNotebook(): boolean;
  clearNotebook(): CreateNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookRequest): CreateNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookRequest;
  static deserializeBinaryFromReader(message: CreateNotebookRequest, reader: jspb.BinaryReader): CreateNotebookRequest;
}

export namespace CreateNotebookRequest {
  export type AsObject = {
    notebook?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.AsObject,
  }
}

export class CreateNotebookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookResponse): CreateNotebookResponse.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookResponse;
  static deserializeBinaryFromReader(message: CreateNotebookResponse, reader: jspb.BinaryReader): CreateNotebookResponse;
}

export namespace CreateNotebookResponse {
  export type AsObject = {
  }
}

export class UpdateNotebookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook): UpdateNotebookRequest;
  hasItem(): boolean;
  clearItem(): UpdateNotebookRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNotebookRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookRequest): UpdateNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookRequest;
  static deserializeBinaryFromReader(message: UpdateNotebookRequest, reader: jspb.BinaryReader): UpdateNotebookRequest;
}

export namespace UpdateNotebookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateNotebookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookResponse): UpdateNotebookResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookResponse;
  static deserializeBinaryFromReader(message: UpdateNotebookResponse, reader: jspb.BinaryReader): UpdateNotebookResponse;
}

export namespace UpdateNotebookResponse {
  export type AsObject = {
  }
}

export class GetNotebookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetNotebookRequest;

  getName(): string;
  setName(value: string): GetNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookRequest): GetNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookRequest;
  static deserializeBinaryFromReader(message: GetNotebookRequest, reader: jspb.BinaryReader): GetNotebookRequest;
}

export namespace GetNotebookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetNotebookResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook): GetNotebookResponse;
  hasItem(): boolean;
  clearItem(): GetNotebookResponse;

  getYaml(): string;
  setYaml(value: string): GetNotebookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookResponse): GetNotebookResponse.AsObject;
  static serializeBinaryToWriter(message: GetNotebookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookResponse;
  static deserializeBinaryFromReader(message: GetNotebookResponse, reader: jspb.BinaryReader): GetNotebookResponse;
}

export namespace GetNotebookResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.AsObject,
    yaml: string,
  }
}

export class DeleteNotebookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteNotebookRequest;

  getName(): string;
  setName(value: string): DeleteNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookRequest): DeleteNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookRequest;
  static deserializeBinaryFromReader(message: DeleteNotebookRequest, reader: jspb.BinaryReader): DeleteNotebookRequest;
}

export namespace DeleteNotebookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteNotebookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookResponse): DeleteNotebookResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookResponse;
  static deserializeBinaryFromReader(message: DeleteNotebookResponse, reader: jspb.BinaryReader): DeleteNotebookResponse;
}

export namespace DeleteNotebookResponse {
  export type AsObject = {
  }
}

