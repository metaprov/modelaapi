import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb';


export class ListRunBooksRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRunBooksRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListRunBooksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRunBooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRunBooksRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListRunBooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRunBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRunBooksRequest): ListRunBooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListRunBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRunBooksRequest;
  static deserializeBinaryFromReader(message: ListRunBooksRequest, reader: jspb.BinaryReader): ListRunBooksRequest;
}

export namespace ListRunBooksRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListRunBooksResponse extends jspb.Message {
  getRunbooks(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBookList | undefined;
  setRunbooks(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBookList): ListRunBooksResponse;
  hasRunbooks(): boolean;
  clearRunbooks(): ListRunBooksResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRunBooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRunBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRunBooksResponse): ListRunBooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListRunBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRunBooksResponse;
  static deserializeBinaryFromReader(message: ListRunBooksResponse, reader: jspb.BinaryReader): ListRunBooksResponse;
}

export namespace ListRunBooksResponse {
  export type AsObject = {
    runbooks?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBookList.AsObject,
    nextPageToken: string,
  }
}

export class CreateRunBookRequest extends jspb.Message {
  getRunbook(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setRunbook(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): CreateRunBookRequest;
  hasRunbook(): boolean;
  clearRunbook(): CreateRunBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRunBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRunBookRequest): CreateRunBookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRunBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRunBookRequest;
  static deserializeBinaryFromReader(message: CreateRunBookRequest, reader: jspb.BinaryReader): CreateRunBookRequest;
}

export namespace CreateRunBookRequest {
  export type AsObject = {
    runbook?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
  }
}

export class CreateRunBookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRunBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRunBookResponse): CreateRunBookResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRunBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRunBookResponse;
  static deserializeBinaryFromReader(message: CreateRunBookResponse, reader: jspb.BinaryReader): CreateRunBookResponse;
}

export namespace CreateRunBookResponse {
  export type AsObject = {
  }
}

export class UpdateRunBookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): UpdateRunBookRequest;
  hasItem(): boolean;
  clearItem(): UpdateRunBookRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateRunBookRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateRunBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRunBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRunBookRequest): UpdateRunBookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRunBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRunBookRequest;
  static deserializeBinaryFromReader(message: UpdateRunBookRequest, reader: jspb.BinaryReader): UpdateRunBookRequest;
}

export namespace UpdateRunBookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateRunBookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRunBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRunBookResponse): UpdateRunBookResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRunBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRunBookResponse;
  static deserializeBinaryFromReader(message: UpdateRunBookResponse, reader: jspb.BinaryReader): UpdateRunBookResponse;
}

export namespace UpdateRunBookResponse {
  export type AsObject = {
  }
}

export class GetRunBookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRunBookRequest;

  getName(): string;
  setName(value: string): GetRunBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRunBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRunBookRequest): GetRunBookRequest.AsObject;
  static serializeBinaryToWriter(message: GetRunBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRunBookRequest;
  static deserializeBinaryFromReader(message: GetRunBookRequest, reader: jspb.BinaryReader): GetRunBookRequest;
}

export namespace GetRunBookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetRunBookResponse extends jspb.Message {
  getRunbook(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setRunbook(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): GetRunBookResponse;
  hasRunbook(): boolean;
  clearRunbook(): GetRunBookResponse;

  getYaml(): string;
  setYaml(value: string): GetRunBookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRunBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRunBookResponse): GetRunBookResponse.AsObject;
  static serializeBinaryToWriter(message: GetRunBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRunBookResponse;
  static deserializeBinaryFromReader(message: GetRunBookResponse, reader: jspb.BinaryReader): GetRunBookResponse;
}

export namespace GetRunBookResponse {
  export type AsObject = {
    runbook?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
    yaml: string,
  }
}

export class DeleteRunBookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRunBookRequest;

  getName(): string;
  setName(value: string): DeleteRunBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRunBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRunBookRequest): DeleteRunBookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRunBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRunBookRequest;
  static deserializeBinaryFromReader(message: DeleteRunBookRequest, reader: jspb.BinaryReader): DeleteRunBookRequest;
}

export namespace DeleteRunBookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteRunBookResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRunBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRunBookResponse): DeleteRunBookResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRunBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRunBookResponse;
  static deserializeBinaryFromReader(message: DeleteRunBookResponse, reader: jspb.BinaryReader): DeleteRunBookResponse;
}

export namespace DeleteRunBookResponse {
  export type AsObject = {
  }
}

