import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListNotebookRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotebookRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListNotebookRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotebookRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotebookRunsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListNotebookRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunsRequest): ListNotebookRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunsRequest;
  static deserializeBinaryFromReader(message: ListNotebookRunsRequest, reader: jspb.BinaryReader): ListNotebookRunsRequest;
}

export namespace ListNotebookRunsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListNotebookRunsResponse extends jspb.Message {
  getNotebookruns(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunList | undefined;
  setNotebookruns(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunList): ListNotebookRunsResponse;
  hasNotebookruns(): boolean;
  clearNotebookruns(): ListNotebookRunsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotebookRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunsResponse): ListNotebookRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunsResponse;
  static deserializeBinaryFromReader(message: ListNotebookRunsResponse, reader: jspb.BinaryReader): ListNotebookRunsResponse;
}

export namespace ListNotebookRunsResponse {
  export type AsObject = {
    notebookruns?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRunList.AsObject,
    nextPageToken: string,
  }
}

export class NotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotebookRunResponse): NotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: NotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotebookRunResponse;
  static deserializeBinaryFromReader(message: NotebookRunResponse, reader: jspb.BinaryReader): NotebookRunResponse;
}

export namespace NotebookRunResponse {
  export type AsObject = {
  }
}

export class CreateNotebookRunRequest extends jspb.Message {
  getNotebookrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun | undefined;
  setNotebookrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun): CreateNotebookRunRequest;
  hasNotebookrun(): boolean;
  clearNotebookrun(): CreateNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookRunRequest): CreateNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookRunRequest;
  static deserializeBinaryFromReader(message: CreateNotebookRunRequest, reader: jspb.BinaryReader): CreateNotebookRunRequest;
}

export namespace CreateNotebookRunRequest {
  export type AsObject = {
    notebookrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject,
  }
}

export class CreateNotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookRunResponse): CreateNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookRunResponse;
  static deserializeBinaryFromReader(message: CreateNotebookRunResponse, reader: jspb.BinaryReader): CreateNotebookRunResponse;
}

export namespace CreateNotebookRunResponse {
  export type AsObject = {
  }
}

export class UpdateNotebookRunRequest extends jspb.Message {
  getNotebookrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun | undefined;
  setNotebookrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun): UpdateNotebookRunRequest;
  hasNotebookrun(): boolean;
  clearNotebookrun(): UpdateNotebookRunRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNotebookRunRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookRunRequest): UpdateNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookRunRequest;
  static deserializeBinaryFromReader(message: UpdateNotebookRunRequest, reader: jspb.BinaryReader): UpdateNotebookRunRequest;
}

export namespace UpdateNotebookRunRequest {
  export type AsObject = {
    notebookrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateNotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookRunResponse): UpdateNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookRunResponse;
  static deserializeBinaryFromReader(message: UpdateNotebookRunResponse, reader: jspb.BinaryReader): UpdateNotebookRunResponse;
}

export namespace UpdateNotebookRunResponse {
  export type AsObject = {
  }
}

export class GetNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetNotebookRunRequest;

  getName(): string;
  setName(value: string): GetNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookRunRequest): GetNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookRunRequest;
  static deserializeBinaryFromReader(message: GetNotebookRunRequest, reader: jspb.BinaryReader): GetNotebookRunRequest;
}

export namespace GetNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetNotebookRunResponse extends jspb.Message {
  getNotbookrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun | undefined;
  setNotbookrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun): GetNotebookRunResponse;
  hasNotbookrun(): boolean;
  clearNotbookrun(): GetNotebookRunResponse;

  getYaml(): string;
  setYaml(value: string): GetNotebookRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookRunResponse): GetNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookRunResponse;
  static deserializeBinaryFromReader(message: GetNotebookRunResponse, reader: jspb.BinaryReader): GetNotebookRunResponse;
}

export namespace GetNotebookRunResponse {
  export type AsObject = {
    notbookrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject,
    yaml: string,
  }
}

export class DeleteNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteNotebookRunRequest;

  getName(): string;
  setName(value: string): DeleteNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookRunRequest): DeleteNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookRunRequest;
  static deserializeBinaryFromReader(message: DeleteNotebookRunRequest, reader: jspb.BinaryReader): DeleteNotebookRunRequest;
}

export namespace DeleteNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteNotebookRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookRunResponse): DeleteNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookRunResponse;
  static deserializeBinaryFromReader(message: DeleteNotebookRunResponse, reader: jspb.BinaryReader): DeleteNotebookRunResponse;
}

export namespace DeleteNotebookRunResponse {
  export type AsObject = {
  }
}

