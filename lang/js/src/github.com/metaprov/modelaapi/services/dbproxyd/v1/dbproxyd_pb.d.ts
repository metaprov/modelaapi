import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ListAccountsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAccountsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAccountsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountsRequest): ListAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountsRequest;
  static deserializeBinaryFromReader(message: ListAccountsRequest, reader: jspb.BinaryReader): ListAccountsRequest;
}

export namespace ListAccountsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAccountsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account>): ListAccountsResponse;
  clearItemsList(): ListAccountsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountsResponse): ListAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountsResponse;
  static deserializeBinaryFromReader(message: ListAccountsResponse, reader: jspb.BinaryReader): ListAccountsResponse;
}

export namespace ListAccountsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject>,
    nextPageToken: string,
  }
}

export class GetAccountRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAccountRequest;

  getName(): string;
  setName(value: string): GetAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateAccountRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account): CreateAccountRequest;
  hasItem(): boolean;
  clearItem(): CreateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
  }
}

export class UpdateAccountRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account): UpdateAccountRequest;
  hasItem(): boolean;
  clearItem(): UpdateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
  static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
  }
}

export class DeleteAccountRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAccountRequest;

  getName(): string;
  setName(value: string): DeleteAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
  static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListAlertsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAlertsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAlertsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAlertsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertsRequest): ListAlertsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAlertsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertsRequest;
  static deserializeBinaryFromReader(message: ListAlertsRequest, reader: jspb.BinaryReader): ListAlertsRequest;
}

export namespace ListAlertsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAlertsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>): ListAlertsResponse;
  clearItemsList(): ListAlertsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAlertsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertsResponse): ListAlertsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAlertsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertsResponse;
  static deserializeBinaryFromReader(message: ListAlertsResponse, reader: jspb.BinaryReader): ListAlertsResponse;
}

export namespace ListAlertsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject>,
    nextPageToken: string,
  }
}

export class GetAlertRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAlertRequest;

  getName(): string;
  setName(value: string): GetAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlertRequest): GetAlertRequest.AsObject;
  static serializeBinaryToWriter(message: GetAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlertRequest;
  static deserializeBinaryFromReader(message: GetAlertRequest, reader: jspb.BinaryReader): GetAlertRequest;
}

export namespace GetAlertRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateAlertRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): CreateAlertRequest;
  hasItem(): boolean;
  clearItem(): CreateAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlertRequest): CreateAlertRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlertRequest;
  static deserializeBinaryFromReader(message: CreateAlertRequest, reader: jspb.BinaryReader): CreateAlertRequest;
}

export namespace CreateAlertRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
  }
}

export class UpdateAlertRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): UpdateAlertRequest;
  hasItem(): boolean;
  clearItem(): UpdateAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAlertRequest): UpdateAlertRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAlertRequest;
  static deserializeBinaryFromReader(message: UpdateAlertRequest, reader: jspb.BinaryReader): UpdateAlertRequest;
}

export namespace UpdateAlertRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
  }
}

export class DeleteAlertRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAlertRequest;

  getName(): string;
  setName(value: string): DeleteAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlertRequest): DeleteAlertRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlertRequest;
  static deserializeBinaryFromReader(message: DeleteAlertRequest, reader: jspb.BinaryReader): DeleteAlertRequest;
}

export namespace DeleteAlertRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListAttachmentsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAttachmentsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAttachmentsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAttachmentsRequest;

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
    pageSize: number,
    pageToken: string,
  }
}

export class ListAttachmentsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment>): ListAttachmentsResponse;
  clearItemsList(): ListAttachmentsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment;

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
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.AsObject>,
    nextPageToken: string,
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

export class CreateAttachmentRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment): CreateAttachmentRequest;
  hasItem(): boolean;
  clearItem(): CreateAttachmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAttachmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAttachmentRequest): CreateAttachmentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAttachmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAttachmentRequest;
  static deserializeBinaryFromReader(message: CreateAttachmentRequest, reader: jspb.BinaryReader): CreateAttachmentRequest;
}

export namespace CreateAttachmentRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.AsObject,
  }
}

export class UpdateAttachmentRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment): UpdateAttachmentRequest;
  hasItem(): boolean;
  clearItem(): UpdateAttachmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAttachmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAttachmentRequest): UpdateAttachmentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAttachmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAttachmentRequest;
  static deserializeBinaryFromReader(message: UpdateAttachmentRequest, reader: jspb.BinaryReader): UpdateAttachmentRequest;
}

export namespace UpdateAttachmentRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.AsObject,
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

export class ListTodosRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListTodosRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTodosRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTodosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTodosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTodosRequest): ListTodosRequest.AsObject;
  static serializeBinaryToWriter(message: ListTodosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTodosRequest;
  static deserializeBinaryFromReader(message: ListTodosRequest, reader: jspb.BinaryReader): ListTodosRequest;
}

export namespace ListTodosRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTodosResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo>): ListTodosResponse;
  clearItemsList(): ListTodosResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo, index?: number): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTodosResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTodosResponse): ListTodosResponse.AsObject;
  static serializeBinaryToWriter(message: ListTodosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTodosResponse;
  static deserializeBinaryFromReader(message: ListTodosResponse, reader: jspb.BinaryReader): ListTodosResponse;
}

export namespace ListTodosResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.AsObject>,
    nextPageToken: string,
  }
}

export class GetTodoRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTodoRequest;

  getName(): string;
  setName(value: string): GetTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoRequest): GetTodoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoRequest;
  static deserializeBinaryFromReader(message: GetTodoRequest, reader: jspb.BinaryReader): GetTodoRequest;
}

export namespace GetTodoRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateTodoRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo): CreateTodoRequest;
  hasItem(): boolean;
  clearItem(): CreateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
  static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.AsObject,
  }
}

export class UpdateTodoRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo): UpdateTodoRequest;
  hasItem(): boolean;
  clearItem(): UpdateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTodoRequest): UpdateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest;
  static deserializeBinaryFromReader(message: UpdateTodoRequest, reader: jspb.BinaryReader): UpdateTodoRequest;
}

export namespace UpdateTodoRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.AsObject,
  }
}

export class DeleteTodoRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteTodoRequest;

  getName(): string;
  setName(value: string): DeleteTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
  static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListMeetingsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListMeetingsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListMeetingsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListMeetingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMeetingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMeetingsRequest): ListMeetingsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMeetingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMeetingsRequest;
  static deserializeBinaryFromReader(message: ListMeetingsRequest, reader: jspb.BinaryReader): ListMeetingsRequest;
}

export namespace ListMeetingsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListMeetingsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting>): ListMeetingsResponse;
  clearItemsList(): ListMeetingsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting, index?: number): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListMeetingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMeetingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMeetingsResponse): ListMeetingsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMeetingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMeetingsResponse;
  static deserializeBinaryFromReader(message: ListMeetingsResponse, reader: jspb.BinaryReader): ListMeetingsResponse;
}

export namespace ListMeetingsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.AsObject>,
    nextPageToken: string,
  }
}

export class GetMeetingRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetMeetingRequest;

  getName(): string;
  setName(value: string): GetMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeetingRequest): GetMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: GetMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeetingRequest;
  static deserializeBinaryFromReader(message: GetMeetingRequest, reader: jspb.BinaryReader): GetMeetingRequest;
}

export namespace GetMeetingRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateMeetingRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting): CreateMeetingRequest;
  hasItem(): boolean;
  clearItem(): CreateMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMeetingRequest): CreateMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMeetingRequest;
  static deserializeBinaryFromReader(message: CreateMeetingRequest, reader: jspb.BinaryReader): CreateMeetingRequest;
}

export namespace CreateMeetingRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.AsObject,
  }
}

export class UpdateMeetingRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting): UpdateMeetingRequest;
  hasItem(): boolean;
  clearItem(): UpdateMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeetingRequest): UpdateMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeetingRequest;
  static deserializeBinaryFromReader(message: UpdateMeetingRequest, reader: jspb.BinaryReader): UpdateMeetingRequest;
}

export namespace UpdateMeetingRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Meeting.AsObject,
  }
}

export class DeleteMeetingRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteMeetingRequest;

  getName(): string;
  setName(value: string): DeleteMeetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMeetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMeetingRequest): DeleteMeetingRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMeetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMeetingRequest;
  static deserializeBinaryFromReader(message: DeleteMeetingRequest, reader: jspb.BinaryReader): DeleteMeetingRequest;
}

export namespace DeleteMeetingRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListCommitsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCommitsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCommitsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCommitsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommitsRequest): ListCommitsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCommitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommitsRequest;
  static deserializeBinaryFromReader(message: ListCommitsRequest, reader: jspb.BinaryReader): ListCommitsRequest;
}

export namespace ListCommitsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCommitsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>): ListCommitsResponse;
  clearItemsList(): ListCommitsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCommitsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommitsResponse): ListCommitsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCommitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommitsResponse;
  static deserializeBinaryFromReader(message: ListCommitsResponse, reader: jspb.BinaryReader): ListCommitsResponse;
}

export namespace ListCommitsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject>,
    nextPageToken: string,
  }
}

export class GetCommitRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCommitRequest;

  getName(): string;
  setName(value: string): GetCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommitRequest): GetCommitRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommitRequest;
  static deserializeBinaryFromReader(message: GetCommitRequest, reader: jspb.BinaryReader): GetCommitRequest;
}

export namespace GetCommitRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateCommitRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit): CreateCommitRequest;
  hasItem(): boolean;
  clearItem(): CreateCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommitRequest): CreateCommitRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommitRequest;
  static deserializeBinaryFromReader(message: CreateCommitRequest, reader: jspb.BinaryReader): CreateCommitRequest;
}

export namespace CreateCommitRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject,
  }
}

export class UpdateCommitRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit): UpdateCommitRequest;
  hasItem(): boolean;
  clearItem(): UpdateCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommitRequest): UpdateCommitRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommitRequest;
  static deserializeBinaryFromReader(message: UpdateCommitRequest, reader: jspb.BinaryReader): UpdateCommitRequest;
}

export namespace UpdateCommitRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject,
  }
}

export class DeleteCommitRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCommitRequest;

  getName(): string;
  setName(value: string): DeleteCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommitRequest): DeleteCommitRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommitRequest;
  static deserializeBinaryFromReader(message: DeleteCommitRequest, reader: jspb.BinaryReader): DeleteCommitRequest;
}

export namespace DeleteCommitRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListApiTokensRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListApiTokensRequest;

  getPageSize(): number;
  setPageSize(value: number): ListApiTokensRequest;

  getPageToken(): string;
  setPageToken(value: string): ListApiTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiTokensRequest): ListApiTokensRequest.AsObject;
  static serializeBinaryToWriter(message: ListApiTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiTokensRequest;
  static deserializeBinaryFromReader(message: ListApiTokensRequest, reader: jspb.BinaryReader): ListApiTokensRequest;
}

export namespace ListApiTokensRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListApiTokensResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>): ListApiTokensResponse;
  clearItemsList(): ListApiTokensResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListApiTokensResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiTokensResponse): ListApiTokensResponse.AsObject;
  static serializeBinaryToWriter(message: ListApiTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiTokensResponse;
  static deserializeBinaryFromReader(message: ListApiTokensResponse, reader: jspb.BinaryReader): ListApiTokensResponse;
}

export namespace ListApiTokensResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject>,
    nextPageToken: string,
  }
}

export class GetApiTokenRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetApiTokenRequest;

  getName(): string;
  setName(value: string): GetApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiTokenRequest): GetApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiTokenRequest;
  static deserializeBinaryFromReader(message: GetApiTokenRequest, reader: jspb.BinaryReader): GetApiTokenRequest;
}

export namespace GetApiTokenRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateApiTokenRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken): CreateApiTokenRequest;
  hasItem(): boolean;
  clearItem(): CreateApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiTokenRequest): CreateApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiTokenRequest;
  static deserializeBinaryFromReader(message: CreateApiTokenRequest, reader: jspb.BinaryReader): CreateApiTokenRequest;
}

export namespace CreateApiTokenRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject,
  }
}

export class UpdateApiTokenRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken): UpdateApiTokenRequest;
  hasItem(): boolean;
  clearItem(): UpdateApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApiTokenRequest): UpdateApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApiTokenRequest;
  static deserializeBinaryFromReader(message: UpdateApiTokenRequest, reader: jspb.BinaryReader): UpdateApiTokenRequest;
}

export namespace UpdateApiTokenRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject,
  }
}

export class DeleteApiTokenRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteApiTokenRequest;

  getName(): string;
  setName(value: string): DeleteApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiTokenRequest): DeleteApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiTokenRequest;
  static deserializeBinaryFromReader(message: DeleteApiTokenRequest, reader: jspb.BinaryReader): DeleteApiTokenRequest;
}

export namespace DeleteApiTokenRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListConnectionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListConnectionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListConnectionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListConnectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsRequest): ListConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsRequest;
  static deserializeBinaryFromReader(message: ListConnectionsRequest, reader: jspb.BinaryReader): ListConnectionsRequest;
}

export namespace ListConnectionsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListConnectionsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>): ListConnectionsResponse;
  clearItemsList(): ListConnectionsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListConnectionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsResponse): ListConnectionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsResponse;
  static deserializeBinaryFromReader(message: ListConnectionsResponse, reader: jspb.BinaryReader): ListConnectionsResponse;
}

export namespace ListConnectionsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject>,
    nextPageToken: string,
  }
}

export class GetConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetConnectionRequest;

  getName(): string;
  setName(value: string): GetConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
  static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateConnectionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateConnectionRequest;
  hasItem(): boolean;
  clearItem(): CreateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
  static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class UpdateConnectionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): UpdateConnectionRequest;
  hasItem(): boolean;
  clearItem(): UpdateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
  static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class DeleteConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteConnectionRequest;

  getName(): string;
  setName(value: string): DeleteConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListLabsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLabsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLabsRequest;

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
    pageSize: number,
    pageToken: string,
  }
}

export class ListLabsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>): ListLabsResponse;
  clearItemsList(): ListLabsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab;

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
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject>,
    nextPageToken: string,
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

export class CreateLabRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): CreateLabRequest;
  hasItem(): boolean;
  clearItem(): CreateLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabRequest): CreateLabRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabRequest;
  static deserializeBinaryFromReader(message: CreateLabRequest, reader: jspb.BinaryReader): CreateLabRequest;
}

export namespace CreateLabRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
  }
}

export class UpdateLabRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): UpdateLabRequest;
  hasItem(): boolean;
  clearItem(): UpdateLabRequest;

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

export class ListLicensesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLicensesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLicensesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLicensesRequest;

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
    pageSize: number,
    pageToken: string,
  }
}

export class ListLicensesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License>): ListLicensesResponse;
  clearItemsList(): ListLicensesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLicensesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLicensesResponse): ListLicensesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLicensesResponse;
  static deserializeBinaryFromReader(message: ListLicensesResponse, reader: jspb.BinaryReader): ListLicensesResponse;
}

export namespace ListLicensesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject>,
    nextPageToken: string,
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

export class UpdateLicenseRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License): UpdateLicenseRequest;
  hasItem(): boolean;
  clearItem(): UpdateLicenseRequest;

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

export class ListNotifiersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotifiersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotifiersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotifiersRequest;

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
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotifiersResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>): ListNotifiersResponse;
  clearItemsList(): ListNotifiersResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier;

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
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject>,
    nextPageToken: string,
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

export class CreateNotifierRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): CreateNotifierRequest;
  hasItem(): boolean;
  clearItem(): CreateNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotifierRequest): CreateNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotifierRequest;
  static deserializeBinaryFromReader(message: CreateNotifierRequest, reader: jspb.BinaryReader): CreateNotifierRequest;
}

export namespace CreateNotifierRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
  }
}

export class UpdateNotifierRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): UpdateNotifierRequest;
  hasItem(): boolean;
  clearItem(): UpdateNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotifierRequest): UpdateNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotifierRequest;
  static deserializeBinaryFromReader(message: UpdateNotifierRequest, reader: jspb.BinaryReader): UpdateNotifierRequest;
}

export namespace UpdateNotifierRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
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

export class ListServingsitesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListServingsitesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListServingsitesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListServingsitesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingsitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingsitesRequest): ListServingsitesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServingsitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingsitesRequest;
  static deserializeBinaryFromReader(message: ListServingsitesRequest, reader: jspb.BinaryReader): ListServingsitesRequest;
}

export namespace ListServingsitesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListServingsitesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>): ListServingsitesResponse;
  clearItemsList(): ListServingsitesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServingsitesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingsitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingsitesResponse): ListServingsitesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServingsitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingsitesResponse;
  static deserializeBinaryFromReader(message: ListServingsitesResponse, reader: jspb.BinaryReader): ListServingsitesResponse;
}

export namespace ListServingsitesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject>,
    nextPageToken: string,
  }
}

export class GetServingsiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetServingsiteRequest;

  getName(): string;
  setName(value: string): GetServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServingsiteRequest): GetServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: GetServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServingsiteRequest;
  static deserializeBinaryFromReader(message: GetServingsiteRequest, reader: jspb.BinaryReader): GetServingsiteRequest;
}

export namespace GetServingsiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateServingsiteRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): CreateServingsiteRequest;
  hasItem(): boolean;
  clearItem(): CreateServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServingsiteRequest): CreateServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServingsiteRequest;
  static deserializeBinaryFromReader(message: CreateServingsiteRequest, reader: jspb.BinaryReader): CreateServingsiteRequest;
}

export namespace CreateServingsiteRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class UpdateServingsiteRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): UpdateServingsiteRequest;
  hasItem(): boolean;
  clearItem(): UpdateServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServingsiteRequest): UpdateServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServingsiteRequest;
  static deserializeBinaryFromReader(message: UpdateServingsiteRequest, reader: jspb.BinaryReader): UpdateServingsiteRequest;
}

export namespace UpdateServingsiteRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class DeleteServingsiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteServingsiteRequest;

  getName(): string;
  setName(value: string): DeleteServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServingsiteRequest): DeleteServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServingsiteRequest;
  static deserializeBinaryFromReader(message: DeleteServingsiteRequest, reader: jspb.BinaryReader): DeleteServingsiteRequest;
}

export namespace DeleteServingsiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListTenantsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListTenantsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTenantsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTenantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTenantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTenantsRequest): ListTenantsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTenantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTenantsRequest;
  static deserializeBinaryFromReader(message: ListTenantsRequest, reader: jspb.BinaryReader): ListTenantsRequest;
}

export namespace ListTenantsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTenantsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>): ListTenantsResponse;
  clearItemsList(): ListTenantsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTenantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTenantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTenantsResponse): ListTenantsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTenantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTenantsResponse;
  static deserializeBinaryFromReader(message: ListTenantsResponse, reader: jspb.BinaryReader): ListTenantsResponse;
}

export namespace ListTenantsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject>,
    nextPageToken: string,
  }
}

export class GetTenantRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTenantRequest;

  getName(): string;
  setName(value: string): GetTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTenantRequest): GetTenantRequest.AsObject;
  static serializeBinaryToWriter(message: GetTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTenantRequest;
  static deserializeBinaryFromReader(message: GetTenantRequest, reader: jspb.BinaryReader): GetTenantRequest;
}

export namespace GetTenantRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateTenantRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant): CreateTenantRequest;
  hasItem(): boolean;
  clearItem(): CreateTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTenantRequest): CreateTenantRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTenantRequest;
  static deserializeBinaryFromReader(message: CreateTenantRequest, reader: jspb.BinaryReader): CreateTenantRequest;
}

export namespace CreateTenantRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject,
  }
}

export class UpdateTenantRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant): UpdateTenantRequest;
  hasItem(): boolean;
  clearItem(): UpdateTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTenantRequest): UpdateTenantRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTenantRequest;
  static deserializeBinaryFromReader(message: UpdateTenantRequest, reader: jspb.BinaryReader): UpdateTenantRequest;
}

export namespace UpdateTenantRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject,
  }
}

export class DeleteTenantRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteTenantRequest;

  getName(): string;
  setName(value: string): DeleteTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTenantRequest): DeleteTenantRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTenantRequest;
  static deserializeBinaryFromReader(message: DeleteTenantRequest, reader: jspb.BinaryReader): DeleteTenantRequest;
}

export namespace DeleteTenantRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListVirtualBucketsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListVirtualBucketsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVirtualBucketsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListVirtualBucketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualBucketsRequest): ListVirtualBucketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualBucketsRequest;
  static deserializeBinaryFromReader(message: ListVirtualBucketsRequest, reader: jspb.BinaryReader): ListVirtualBucketsRequest;
}

export namespace ListVirtualBucketsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListVirtualBucketsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>): ListVirtualBucketsResponse;
  clearItemsList(): ListVirtualBucketsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListVirtualBucketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualBucketsResponse): ListVirtualBucketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualBucketsResponse;
  static deserializeBinaryFromReader(message: ListVirtualBucketsResponse, reader: jspb.BinaryReader): ListVirtualBucketsResponse;
}

export namespace ListVirtualBucketsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject>,
    nextPageToken: string,
  }
}

export class GetVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualBucketRequest;

  getName(): string;
  setName(value: string): GetVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualBucketRequest): GetVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualBucketRequest;
  static deserializeBinaryFromReader(message: GetVirtualBucketRequest, reader: jspb.BinaryReader): GetVirtualBucketRequest;
}

export namespace GetVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateVirtualBucketRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateVirtualBucketRequest;
  hasItem(): boolean;
  clearItem(): CreateVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualBucketRequest): CreateVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualBucketRequest;
  static deserializeBinaryFromReader(message: CreateVirtualBucketRequest, reader: jspb.BinaryReader): CreateVirtualBucketRequest;
}

export namespace CreateVirtualBucketRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class UpdateVirtualBucketRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): UpdateVirtualBucketRequest;
  hasItem(): boolean;
  clearItem(): UpdateVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualBucketRequest): UpdateVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualBucketRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualBucketRequest, reader: jspb.BinaryReader): UpdateVirtualBucketRequest;
}

export namespace UpdateVirtualBucketRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class DeleteVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteVirtualBucketRequest;

  getName(): string;
  setName(value: string): DeleteVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualBucketRequest): DeleteVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualBucketRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualBucketRequest, reader: jspb.BinaryReader): DeleteVirtualBucketRequest;
}

export namespace DeleteVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataPipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataPipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesRequest): ListDataPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesRequest;
  static deserializeBinaryFromReader(message: ListDataPipelinesRequest, reader: jspb.BinaryReader): ListDataPipelinesRequest;
}

export namespace ListDataPipelinesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataPipelinesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>): ListDataPipelinesResponse;
  clearItemsList(): ListDataPipelinesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesResponse): ListDataPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesResponse;
  static deserializeBinaryFromReader(message: ListDataPipelinesResponse, reader: jspb.BinaryReader): ListDataPipelinesResponse;
}

export namespace ListDataPipelinesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataPipelineRequest;

  getName(): string;
  setName(value: string): GetDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineRequest): GetDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineRequest;
  static deserializeBinaryFromReader(message: GetDataPipelineRequest, reader: jspb.BinaryReader): GetDataPipelineRequest;
}

export namespace GetDataPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): CreateDataPipelineRequest;
  hasItem(): boolean;
  clearItem(): CreateDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineRequest): CreateDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineRequest;
  static deserializeBinaryFromReader(message: CreateDataPipelineRequest, reader: jspb.BinaryReader): CreateDataPipelineRequest;
}

export namespace CreateDataPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class UpdateDataPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): UpdateDataPipelineRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineRequest): UpdateDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateDataPipelineRequest, reader: jspb.BinaryReader): UpdateDataPipelineRequest;
}

export namespace UpdateDataPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class DeleteDataPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataPipelineRequest;

  getName(): string;
  setName(value: string): DeleteDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineRequest): DeleteDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteDataPipelineRequest, reader: jspb.BinaryReader): DeleteDataPipelineRequest;
}

export namespace DeleteDataPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataPipelineRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataPipelineRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataPipelineRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataPipelineRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunsRequest): ListDataPipelineRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListDataPipelineRunsRequest, reader: jspb.BinaryReader): ListDataPipelineRunsRequest;
}

export namespace ListDataPipelineRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataPipelineRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>): ListDataPipelineRunsResponse;
  clearItemsList(): ListDataPipelineRunsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataPipelineRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunsResponse): ListDataPipelineRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListDataPipelineRunsResponse, reader: jspb.BinaryReader): ListDataPipelineRunsResponse;
}

export namespace ListDataPipelineRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataPipelineRunRequest;

  getName(): string;
  setName(value: string): GetDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineRunRequest): GetDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: GetDataPipelineRunRequest, reader: jspb.BinaryReader): GetDataPipelineRunRequest;
}

export namespace GetDataPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun): CreateDataPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): CreateDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineRunRequest): CreateDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateDataPipelineRunRequest, reader: jspb.BinaryReader): CreateDataPipelineRunRequest;
}

export namespace CreateDataPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject,
  }
}

export class UpdateDataPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun): UpdateDataPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineRunRequest): UpdateDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateDataPipelineRunRequest, reader: jspb.BinaryReader): UpdateDataPipelineRunRequest;
}

export namespace UpdateDataPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject,
  }
}

export class DeleteDataPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataPipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineRunRequest): DeleteDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteDataPipelineRunRequest, reader: jspb.BinaryReader): DeleteDataPipelineRunRequest;
}

export namespace DeleteDataPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataProductsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataProductsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataProductsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductsRequest): ListDataProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductsRequest;
  static deserializeBinaryFromReader(message: ListDataProductsRequest, reader: jspb.BinaryReader): ListDataProductsRequest;
}

export namespace ListDataProductsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataProductsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>): ListDataProductsResponse;
  clearItemsList(): ListDataProductsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductsResponse): ListDataProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductsResponse;
  static deserializeBinaryFromReader(message: ListDataProductsResponse, reader: jspb.BinaryReader): ListDataProductsResponse;
}

export namespace ListDataProductsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataProductRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataProductRequest;

  getName(): string;
  setName(value: string): GetDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataProductRequest): GetDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataProductRequest;
  static deserializeBinaryFromReader(message: GetDataProductRequest, reader: jspb.BinaryReader): GetDataProductRequest;
}

export namespace GetDataProductRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataProductRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateDataProductRequest;
  hasItem(): boolean;
  clearItem(): CreateDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataProductRequest): CreateDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataProductRequest;
  static deserializeBinaryFromReader(message: CreateDataProductRequest, reader: jspb.BinaryReader): CreateDataProductRequest;
}

export namespace CreateDataProductRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
  }
}

export class UpdateDataProductRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): UpdateDataProductRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataProductRequest): UpdateDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataProductRequest;
  static deserializeBinaryFromReader(message: UpdateDataProductRequest, reader: jspb.BinaryReader): UpdateDataProductRequest;
}

export namespace UpdateDataProductRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
  }
}

export class DeleteDataProductRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataProductRequest;

  getName(): string;
  setName(value: string): DeleteDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataProductRequest): DeleteDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataProductRequest;
  static deserializeBinaryFromReader(message: DeleteDataProductRequest, reader: jspb.BinaryReader): DeleteDataProductRequest;
}

export namespace DeleteDataProductRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataProductVersionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataProductVersionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataProductVersionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataProductVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductVersionsRequest): ListDataProductVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataProductVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductVersionsRequest;
  static deserializeBinaryFromReader(message: ListDataProductVersionsRequest, reader: jspb.BinaryReader): ListDataProductVersionsRequest;
}

export namespace ListDataProductVersionsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataProductVersionsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>): ListDataProductVersionsResponse;
  clearItemsList(): ListDataProductVersionsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataProductVersionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductVersionsResponse): ListDataProductVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataProductVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductVersionsResponse;
  static deserializeBinaryFromReader(message: ListDataProductVersionsResponse, reader: jspb.BinaryReader): ListDataProductVersionsResponse;
}

export namespace ListDataProductVersionsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataProductVersionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataProductVersionRequest;

  getName(): string;
  setName(value: string): GetDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataProductVersionRequest): GetDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataProductVersionRequest;
  static deserializeBinaryFromReader(message: GetDataProductVersionRequest, reader: jspb.BinaryReader): GetDataProductVersionRequest;
}

export namespace GetDataProductVersionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataProductVersionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateDataProductVersionRequest;
  hasItem(): boolean;
  clearItem(): CreateDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataProductVersionRequest): CreateDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataProductVersionRequest;
  static deserializeBinaryFromReader(message: CreateDataProductVersionRequest, reader: jspb.BinaryReader): CreateDataProductVersionRequest;
}

export namespace CreateDataProductVersionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
  }
}

export class UpdateDataProductVersionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): UpdateDataProductVersionRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataProductVersionRequest): UpdateDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataProductVersionRequest;
  static deserializeBinaryFromReader(message: UpdateDataProductVersionRequest, reader: jspb.BinaryReader): UpdateDataProductVersionRequest;
}

export namespace UpdateDataProductVersionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
  }
}

export class DeleteDataProductVersionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataProductVersionRequest;

  getName(): string;
  setName(value: string): DeleteDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataProductVersionRequest): DeleteDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataProductVersionRequest;
  static deserializeBinaryFromReader(message: DeleteDataProductVersionRequest, reader: jspb.BinaryReader): DeleteDataProductVersionRequest;
}

export namespace DeleteDataProductVersionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDatasetsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDatasetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatasetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasetsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>): ListDatasetsResponse;
  clearItemsList(): ListDatasetsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsResponse): ListDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsResponse;
  static deserializeBinaryFromReader(message: ListDatasetsResponse, reader: jspb.BinaryReader): ListDatasetsResponse;
}

export namespace ListDatasetsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject>,
    nextPageToken: string,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetRequest;

  getName(): string;
  setName(value: string): GetDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
  static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDatasetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetRequest;
  hasItem(): boolean;
  clearItem(): CreateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class UpdateDatasetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): UpdateDatasetRequest;
  hasItem(): boolean;
  clearItem(): UpdateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetRequest): UpdateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetRequest;
  static deserializeBinaryFromReader(message: UpdateDatasetRequest, reader: jspb.BinaryReader): UpdateDatasetRequest;
}

export namespace UpdateDatasetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDatasetRequest;

  getName(): string;
  setName(value: string): DeleteDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDatasourcesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDatasourcesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatasourcesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatasourcesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasourcesRequest): ListDatasourcesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasourcesRequest;
  static deserializeBinaryFromReader(message: ListDatasourcesRequest, reader: jspb.BinaryReader): ListDatasourcesRequest;
}

export namespace ListDatasourcesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasourcesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>): ListDatasourcesResponse;
  clearItemsList(): ListDatasourcesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatasourcesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasourcesResponse): ListDatasourcesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasourcesResponse;
  static deserializeBinaryFromReader(message: ListDatasourcesResponse, reader: jspb.BinaryReader): ListDatasourcesResponse;
}

export namespace ListDatasourcesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject>,
    nextPageToken: string,
  }
}

export class GetDatasourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasourceRequest;

  getName(): string;
  setName(value: string): GetDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasourceRequest): GetDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasourceRequest;
  static deserializeBinaryFromReader(message: GetDatasourceRequest, reader: jspb.BinaryReader): GetDatasourceRequest;
}

export namespace GetDatasourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDatasourceRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateDatasourceRequest;
  hasItem(): boolean;
  clearItem(): CreateDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasourceRequest): CreateDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasourceRequest;
  static deserializeBinaryFromReader(message: CreateDatasourceRequest, reader: jspb.BinaryReader): CreateDatasourceRequest;
}

export namespace CreateDatasourceRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
  }
}

export class UpdateDatasourceRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): UpdateDatasourceRequest;
  hasItem(): boolean;
  clearItem(): UpdateDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasourceRequest): UpdateDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasourceRequest;
  static deserializeBinaryFromReader(message: UpdateDatasourceRequest, reader: jspb.BinaryReader): UpdateDatasourceRequest;
}

export namespace UpdateDatasourceRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
  }
}

export class DeleteDatasourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDatasourceRequest;

  getName(): string;
  setName(value: string): DeleteDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasourceRequest): DeleteDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasourceRequest;
  static deserializeBinaryFromReader(message: DeleteDatasourceRequest, reader: jspb.BinaryReader): DeleteDatasourceRequest;
}

export namespace DeleteDatasourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListEntitiesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListEntitiesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListEntitiesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListEntitiesRequest;

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
    pageSize: number,
    pageToken: string,
  }
}

export class ListEntitiesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>): ListEntitiesResponse;
  clearItemsList(): ListEntitiesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity;

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
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject>,
    nextPageToken: string,
  }
}

export class GetEntityRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetEntityRequest;

  getName(): string;
  setName(value: string): GetEntityRequest;

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
  }
}

export class CreateEntityRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity): CreateEntityRequest;
  hasItem(): boolean;
  clearItem(): CreateEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntityRequest): CreateEntityRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntityRequest;
  static deserializeBinaryFromReader(message: CreateEntityRequest, reader: jspb.BinaryReader): CreateEntityRequest;
}

export namespace CreateEntityRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
  }
}

export class UpdateEntityRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity): UpdateEntityRequest;
  hasItem(): boolean;
  clearItem(): UpdateEntityRequest;

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

export class ListModelClassesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelClassesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelClassesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelClassesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelClassesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelClassesRequest): ListModelClassesRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelClassesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelClassesRequest;
  static deserializeBinaryFromReader(message: ListModelClassesRequest, reader: jspb.BinaryReader): ListModelClassesRequest;
}

export namespace ListModelClassesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelClassesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass>): ListModelClassesResponse;
  clearItemsList(): ListModelClassesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelClassesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelClassesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelClassesResponse): ListModelClassesResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelClassesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelClassesResponse;
  static deserializeBinaryFromReader(message: ListModelClassesResponse, reader: jspb.BinaryReader): ListModelClassesResponse;
}

export namespace ListModelClassesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject>,
    nextPageToken: string,
  }
}

export class GetModelClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelClassRequest;

  getName(): string;
  setName(value: string): GetModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelClassRequest): GetModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelClassRequest;
  static deserializeBinaryFromReader(message: GetModelClassRequest, reader: jspb.BinaryReader): GetModelClassRequest;
}

export namespace GetModelClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateModelClassRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): CreateModelClassRequest;
  hasItem(): boolean;
  clearItem(): CreateModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelClassRequest): CreateModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelClassRequest;
  static deserializeBinaryFromReader(message: CreateModelClassRequest, reader: jspb.BinaryReader): CreateModelClassRequest;
}

export namespace CreateModelClassRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
  }
}

export class UpdateModelClassRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): UpdateModelClassRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelClassRequest): UpdateModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelClassRequest;
  static deserializeBinaryFromReader(message: UpdateModelClassRequest, reader: jspb.BinaryReader): UpdateModelClassRequest;
}

export namespace UpdateModelClassRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
  }
}

export class DeleteModelClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelClassRequest;

  getName(): string;
  setName(value: string): DeleteModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelClassRequest): DeleteModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelClassRequest;
  static deserializeBinaryFromReader(message: DeleteModelClassRequest, reader: jspb.BinaryReader): DeleteModelClassRequest;
}

export namespace DeleteModelClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListFeatureHistogramsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeatureHistogramsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeatureHistogramsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeatureHistogramsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureHistogramsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureHistogramsRequest): ListFeatureHistogramsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeatureHistogramsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureHistogramsRequest;
  static deserializeBinaryFromReader(message: ListFeatureHistogramsRequest, reader: jspb.BinaryReader): ListFeatureHistogramsRequest;
}

export namespace ListFeatureHistogramsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFeatureHistogramsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram>): ListFeatureHistogramsResponse;
  clearItemsList(): ListFeatureHistogramsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeatureHistogramsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeatureHistogramsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeatureHistogramsResponse): ListFeatureHistogramsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeatureHistogramsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeatureHistogramsResponse;
  static deserializeBinaryFromReader(message: ListFeatureHistogramsResponse, reader: jspb.BinaryReader): ListFeatureHistogramsResponse;
}

export namespace ListFeatureHistogramsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject>,
    nextPageToken: string,
  }
}

export class GetFeatureHistogramRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeatureHistogramRequest;

  getName(): string;
  setName(value: string): GetFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureHistogramRequest): GetFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: GetFeatureHistogramRequest, reader: jspb.BinaryReader): GetFeatureHistogramRequest;
}

export namespace GetFeatureHistogramRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateFeatureHistogramRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): CreateFeatureHistogramRequest;
  hasItem(): boolean;
  clearItem(): CreateFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureHistogramRequest): CreateFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: CreateFeatureHistogramRequest, reader: jspb.BinaryReader): CreateFeatureHistogramRequest;
}

export namespace CreateFeatureHistogramRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
  }
}

export class UpdateFeatureHistogramRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram): UpdateFeatureHistogramRequest;
  hasItem(): boolean;
  clearItem(): UpdateFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureHistogramRequest): UpdateFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureHistogramRequest, reader: jspb.BinaryReader): UpdateFeatureHistogramRequest;
}

export namespace UpdateFeatureHistogramRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.AsObject,
  }
}

export class DeleteFeatureHistogramRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeatureHistogramRequest;

  getName(): string;
  setName(value: string): DeleteFeatureHistogramRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureHistogramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureHistogramRequest): DeleteFeatureHistogramRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureHistogramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureHistogramRequest;
  static deserializeBinaryFromReader(message: DeleteFeatureHistogramRequest, reader: jspb.BinaryReader): DeleteFeatureHistogramRequest;
}

export namespace DeleteFeatureHistogramRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListFeatureGroupRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeatureGroupRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeatureGroupRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeatureGroupRequest;

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
    pageSize: number,
    pageToken: string,
  }
}

export class ListFeatureGroupResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>): ListFeatureGroupResponse;
  clearItemsList(): ListFeatureGroupResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;

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
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject>,
    nextPageToken: string,
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

export class CreateFeatureGroupRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): CreateFeatureGroupRequest;
  hasItem(): boolean;
  clearItem(): CreateFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureGroupRequest): CreateFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureGroupRequest;
  static deserializeBinaryFromReader(message: CreateFeatureGroupRequest, reader: jspb.BinaryReader): CreateFeatureGroupRequest;
}

export namespace CreateFeatureGroupRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
  }
}

export class UpdateFeatureGroupRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup): UpdateFeatureGroupRequest;
  hasItem(): boolean;
  clearItem(): UpdateFeatureGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureGroupRequest): UpdateFeatureGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureGroupRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureGroupRequest, reader: jspb.BinaryReader): UpdateFeatureGroupRequest;
}

export namespace UpdateFeatureGroupRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject,
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

export class ListRecipesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRecipesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRecipesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRecipesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesRequest): ListRecipesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesRequest;
  static deserializeBinaryFromReader(message: ListRecipesRequest, reader: jspb.BinaryReader): ListRecipesRequest;
}

export namespace ListRecipesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListRecipesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>): ListRecipesResponse;
  clearItemsList(): ListRecipesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRecipesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesResponse): ListRecipesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesResponse;
  static deserializeBinaryFromReader(message: ListRecipesResponse, reader: jspb.BinaryReader): ListRecipesResponse;
}

export namespace ListRecipesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject>,
    nextPageToken: string,
  }
}

export class GetRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRecipeRequest;

  getName(): string;
  setName(value: string): GetRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRequest): GetRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRequest;
  static deserializeBinaryFromReader(message: GetRecipeRequest, reader: jspb.BinaryReader): GetRecipeRequest;
}

export namespace GetRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateRecipeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): CreateRecipeRequest;
  hasItem(): boolean;
  clearItem(): CreateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRequest): CreateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRequest, reader: jspb.BinaryReader): CreateRecipeRequest;
}

export namespace CreateRecipeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class UpdateRecipeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): UpdateRecipeRequest;
  hasItem(): boolean;
  clearItem(): UpdateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRequest): UpdateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRequest, reader: jspb.BinaryReader): UpdateRecipeRequest;
}

export namespace UpdateRecipeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class DeleteRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRecipeRequest;

  getName(): string;
  setName(value: string): DeleteRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRequest): DeleteRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRequest, reader: jspb.BinaryReader): DeleteRecipeRequest;
}

export namespace DeleteRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListRecipeRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRecipeRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRecipeRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRecipeRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunsRequest): ListRecipeRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunsRequest;
  static deserializeBinaryFromReader(message: ListRecipeRunsRequest, reader: jspb.BinaryReader): ListRecipeRunsRequest;
}

export namespace ListRecipeRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListRecipeRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>): ListRecipeRunsResponse;
  clearItemsList(): ListRecipeRunsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRecipeRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunsResponse): ListRecipeRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunsResponse;
  static deserializeBinaryFromReader(message: ListRecipeRunsResponse, reader: jspb.BinaryReader): ListRecipeRunsResponse;
}

export namespace ListRecipeRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRecipeRunRequest;

  getName(): string;
  setName(value: string): GetRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRunRequest): GetRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRunRequest;
  static deserializeBinaryFromReader(message: GetRecipeRunRequest, reader: jspb.BinaryReader): GetRecipeRunRequest;
}

export namespace GetRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateRecipeRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): CreateRecipeRunRequest;
  hasItem(): boolean;
  clearItem(): CreateRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRunRequest): CreateRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRunRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRunRequest, reader: jspb.BinaryReader): CreateRecipeRunRequest;
}

export namespace CreateRecipeRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
  }
}

export class UpdateRecipeRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): UpdateRecipeRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRunRequest): UpdateRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRunRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRunRequest, reader: jspb.BinaryReader): UpdateRecipeRunRequest;
}

export namespace UpdateRecipeRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
  }
}

export class DeleteRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRecipeRunRequest;

  getName(): string;
  setName(value: string): DeleteRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRunRequest): DeleteRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRunRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRunRequest, reader: jspb.BinaryReader): DeleteRecipeRunRequest;
}

export namespace DeleteRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListModelsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): ListModelsResponse;
  clearItemsList(): ListModelsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    nextPageToken: string,
  }
}

export class GetModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelRequest;

  getName(): string;
  setName(value: string): GetModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateModelRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): CreateModelRequest;
  hasItem(): boolean;
  clearItem(): CreateModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class UpdateModelRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): UpdateModelRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelRequest): UpdateModelRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelRequest;
  static deserializeBinaryFromReader(message: UpdateModelRequest, reader: jspb.BinaryReader): UpdateModelRequest;
}

export namespace UpdateModelRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelRequest;

  getName(): string;
  setName(value: string): DeleteModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListReportsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListReportsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListReportsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportsRequest): ListReportsRequest.AsObject;
  static serializeBinaryToWriter(message: ListReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportsRequest;
  static deserializeBinaryFromReader(message: ListReportsRequest, reader: jspb.BinaryReader): ListReportsRequest;
}

export namespace ListReportsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListReportsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report>): ListReportsResponse;
  clearItemsList(): ListReportsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListReportsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportsResponse): ListReportsResponse.AsObject;
  static serializeBinaryToWriter(message: ListReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportsResponse;
  static deserializeBinaryFromReader(message: ListReportsResponse, reader: jspb.BinaryReader): ListReportsResponse;
}

export namespace ListReportsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject>,
    nextPageToken: string,
  }
}

export class GetReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetReportRequest;

  getName(): string;
  setName(value: string): GetReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportRequest): GetReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportRequest;
  static deserializeBinaryFromReader(message: GetReportRequest, reader: jspb.BinaryReader): GetReportRequest;
}

export namespace GetReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateReportRequest;
  hasItem(): boolean;
  clearItem(): CreateReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportRequest): CreateReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportRequest;
  static deserializeBinaryFromReader(message: CreateReportRequest, reader: jspb.BinaryReader): CreateReportRequest;
}

export namespace CreateReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class UpdateReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report): UpdateReportRequest;
  hasItem(): boolean;
  clearItem(): UpdateReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReportRequest): UpdateReportRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReportRequest;
  static deserializeBinaryFromReader(message: UpdateReportRequest, reader: jspb.BinaryReader): UpdateReportRequest;
}

export namespace UpdateReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class DeleteReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteReportRequest;

  getName(): string;
  setName(value: string): DeleteReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReportRequest): DeleteReportRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReportRequest;
  static deserializeBinaryFromReader(message: DeleteReportRequest, reader: jspb.BinaryReader): DeleteReportRequest;
}

export namespace DeleteReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListStudiesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListStudiesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListStudiesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListStudiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudiesRequest): ListStudiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListStudiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudiesRequest;
  static deserializeBinaryFromReader(message: ListStudiesRequest, reader: jspb.BinaryReader): ListStudiesRequest;
}

export namespace ListStudiesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListStudiesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>): ListStudiesResponse;
  clearItemsList(): ListStudiesResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListStudiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudiesResponse): ListStudiesResponse.AsObject;
  static serializeBinaryToWriter(message: ListStudiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudiesResponse;
  static deserializeBinaryFromReader(message: ListStudiesResponse, reader: jspb.BinaryReader): ListStudiesResponse;
}

export namespace ListStudiesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject>,
    nextPageToken: string,
  }
}

export class GetStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetStudyRequest;

  getName(): string;
  setName(value: string): GetStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRequest): GetStudyRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRequest;
  static deserializeBinaryFromReader(message: GetStudyRequest, reader: jspb.BinaryReader): GetStudyRequest;
}

export namespace GetStudyRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateStudyRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateStudyRequest;
  hasItem(): boolean;
  clearItem(): CreateStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyRequest): CreateStudyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyRequest;
  static deserializeBinaryFromReader(message: CreateStudyRequest, reader: jspb.BinaryReader): CreateStudyRequest;
}

export namespace CreateStudyRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
  }
}

export class UpdateStudyRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study): UpdateStudyRequest;
  hasItem(): boolean;
  clearItem(): UpdateStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudyRequest): UpdateStudyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudyRequest;
  static deserializeBinaryFromReader(message: UpdateStudyRequest, reader: jspb.BinaryReader): UpdateStudyRequest;
}

export namespace UpdateStudyRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
  }
}

export class DeleteStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteStudyRequest;

  getName(): string;
  setName(value: string): DeleteStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStudyRequest): DeleteStudyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStudyRequest;
  static deserializeBinaryFromReader(message: DeleteStudyRequest, reader: jspb.BinaryReader): DeleteStudyRequest;
}

export namespace DeleteStudyRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListPredictionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPredictionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPredictionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionsRequest): ListPredictionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionsRequest;
  static deserializeBinaryFromReader(message: ListPredictionsRequest, reader: jspb.BinaryReader): ListPredictionsRequest;
}

export namespace ListPredictionsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPredictionsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>): ListPredictionsResponse;
  clearItemsList(): ListPredictionsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, index?: number): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPredictionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionsResponse): ListPredictionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionsResponse;
  static deserializeBinaryFromReader(message: ListPredictionsResponse, reader: jspb.BinaryReader): ListPredictionsResponse;
}

export namespace ListPredictionsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject>,
    nextPageToken: string,
  }
}

export class GetPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictionRequest;

  getName(): string;
  setName(value: string): GetPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionRequest): GetPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionRequest;
  static deserializeBinaryFromReader(message: GetPredictionRequest, reader: jspb.BinaryReader): GetPredictionRequest;
}

export namespace GetPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreatePredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): CreatePredictionRequest;
  hasItem(): boolean;
  clearItem(): CreatePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionRequest): CreatePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionRequest;
  static deserializeBinaryFromReader(message: CreatePredictionRequest, reader: jspb.BinaryReader): CreatePredictionRequest;
}

export namespace CreatePredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
  }
}

export class UpdatePredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): UpdatePredictionRequest;
  hasItem(): boolean;
  clearItem(): UpdatePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionRequest): UpdatePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionRequest;
  static deserializeBinaryFromReader(message: UpdatePredictionRequest, reader: jspb.BinaryReader): UpdatePredictionRequest;
}

export namespace UpdatePredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
  }
}

export class DeletePredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictionRequest;

  getName(): string;
  setName(value: string): DeletePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionRequest): DeletePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionRequest;
  static deserializeBinaryFromReader(message: DeletePredictionRequest, reader: jspb.BinaryReader): DeletePredictionRequest;
}

export namespace DeletePredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListPredictorsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictorsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPredictorsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPredictorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictorsRequest): ListPredictorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictorsRequest;
  static deserializeBinaryFromReader(message: ListPredictorsRequest, reader: jspb.BinaryReader): ListPredictorsRequest;
}

export namespace ListPredictorsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPredictorsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>): ListPredictorsResponse;
  clearItemsList(): ListPredictorsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor, index?: number): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPredictorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictorsResponse): ListPredictorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictorsResponse;
  static deserializeBinaryFromReader(message: ListPredictorsResponse, reader: jspb.BinaryReader): ListPredictorsResponse;
}

export namespace ListPredictorsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject>,
    nextPageToken: string,
  }
}

export class GetPredictorRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictorRequest;

  getName(): string;
  setName(value: string): GetPredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictorRequest): GetPredictorRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictorRequest;
  static deserializeBinaryFromReader(message: GetPredictorRequest, reader: jspb.BinaryReader): GetPredictorRequest;
}

export namespace GetPredictorRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreatePredictorRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): CreatePredictorRequest;
  hasItem(): boolean;
  clearItem(): CreatePredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictorRequest): CreatePredictorRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictorRequest;
  static deserializeBinaryFromReader(message: CreatePredictorRequest, reader: jspb.BinaryReader): CreatePredictorRequest;
}

export namespace CreatePredictorRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
  }
}

export class UpdatePredictorRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): UpdatePredictorRequest;
  hasItem(): boolean;
  clearItem(): UpdatePredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictorRequest): UpdatePredictorRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictorRequest;
  static deserializeBinaryFromReader(message: UpdatePredictorRequest, reader: jspb.BinaryReader): UpdatePredictorRequest;
}

export namespace UpdatePredictorRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
  }
}

export class DeletePredictorRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictorRequest;

  getName(): string;
  setName(value: string): DeletePredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictorRequest): DeletePredictorRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictorRequest;
  static deserializeBinaryFromReader(message: DeletePredictorRequest, reader: jspb.BinaryReader): DeletePredictorRequest;
}

export namespace DeletePredictorRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListReviewsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListReviewsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListReviewsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListReviewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewsRequest): ListReviewsRequest.AsObject;
  static serializeBinaryToWriter(message: ListReviewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewsRequest;
  static deserializeBinaryFromReader(message: ListReviewsRequest, reader: jspb.BinaryReader): ListReviewsRequest;
}

export namespace ListReviewsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListReviewsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review>): ListReviewsResponse;
  clearItemsList(): ListReviewsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review, index?: number): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListReviewsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewsResponse): ListReviewsResponse.AsObject;
  static serializeBinaryToWriter(message: ListReviewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewsResponse;
  static deserializeBinaryFromReader(message: ListReviewsResponse, reader: jspb.BinaryReader): ListReviewsResponse;
}

export namespace ListReviewsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.AsObject>,
    nextPageToken: string,
  }
}

export class GetReviewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetReviewRequest;

  getName(): string;
  setName(value: string): GetReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReviewRequest): GetReviewRequest.AsObject;
  static serializeBinaryToWriter(message: GetReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReviewRequest;
  static deserializeBinaryFromReader(message: GetReviewRequest, reader: jspb.BinaryReader): GetReviewRequest;
}

export namespace GetReviewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateReviewRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review): CreateReviewRequest;
  hasItem(): boolean;
  clearItem(): CreateReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReviewRequest): CreateReviewRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReviewRequest;
  static deserializeBinaryFromReader(message: CreateReviewRequest, reader: jspb.BinaryReader): CreateReviewRequest;
}

export namespace CreateReviewRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.AsObject,
  }
}

export class UpdateReviewRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review): UpdateReviewRequest;
  hasItem(): boolean;
  clearItem(): UpdateReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReviewRequest): UpdateReviewRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReviewRequest;
  static deserializeBinaryFromReader(message: UpdateReviewRequest, reader: jspb.BinaryReader): UpdateReviewRequest;
}

export namespace UpdateReviewRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Review.AsObject,
  }
}

export class DeleteReviewRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteReviewRequest;

  getName(): string;
  setName(value: string): DeleteReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReviewRequest): DeleteReviewRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReviewRequest;
  static deserializeBinaryFromReader(message: DeleteReviewRequest, reader: jspb.BinaryReader): DeleteReviewRequest;
}

export namespace DeleteReviewRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListPostMortemsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPostMortemsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPostMortemsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPostMortemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostMortemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostMortemsRequest): ListPostMortemsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPostMortemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostMortemsRequest;
  static deserializeBinaryFromReader(message: ListPostMortemsRequest, reader: jspb.BinaryReader): ListPostMortemsRequest;
}

export namespace ListPostMortemsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPostMortemsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>): ListPostMortemsResponse;
  clearItemsList(): ListPostMortemsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem, index?: number): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPostMortemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostMortemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostMortemsResponse): ListPostMortemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPostMortemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostMortemsResponse;
  static deserializeBinaryFromReader(message: ListPostMortemsResponse, reader: jspb.BinaryReader): ListPostMortemsResponse;
}

export namespace ListPostMortemsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject>,
    nextPageToken: string,
  }
}

export class GetPostMortemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPostMortemRequest;

  getName(): string;
  setName(value: string): GetPostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostMortemRequest): GetPostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: GetPostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostMortemRequest;
  static deserializeBinaryFromReader(message: GetPostMortemRequest, reader: jspb.BinaryReader): GetPostMortemRequest;
}

export namespace GetPostMortemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreatePostMortemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): CreatePostMortemRequest;
  hasItem(): boolean;
  clearItem(): CreatePostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostMortemRequest): CreatePostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostMortemRequest;
  static deserializeBinaryFromReader(message: CreatePostMortemRequest, reader: jspb.BinaryReader): CreatePostMortemRequest;
}

export namespace CreatePostMortemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
  }
}

export class UpdatePostMortemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): UpdatePostMortemRequest;
  hasItem(): boolean;
  clearItem(): UpdatePostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostMortemRequest): UpdatePostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostMortemRequest;
  static deserializeBinaryFromReader(message: UpdatePostMortemRequest, reader: jspb.BinaryReader): UpdatePostMortemRequest;
}

export namespace UpdatePostMortemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
  }
}

export class DeletePostMortemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePostMortemRequest;

  getName(): string;
  setName(value: string): DeletePostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostMortemRequest): DeletePostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostMortemRequest;
  static deserializeBinaryFromReader(message: DeletePostMortemRequest, reader: jspb.BinaryReader): DeletePostMortemRequest;
}

export namespace DeletePostMortemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListRunbooksRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRunbooksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRunbooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRunbooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRunbooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRunbooksRequest): ListRunbooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListRunbooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRunbooksRequest;
  static deserializeBinaryFromReader(message: ListRunbooksRequest, reader: jspb.BinaryReader): ListRunbooksRequest;
}

export namespace ListRunbooksRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListRunbooksResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>): ListRunbooksResponse;
  clearItemsList(): ListRunbooksResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook, index?: number): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRunbooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRunbooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRunbooksResponse): ListRunbooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListRunbooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRunbooksResponse;
  static deserializeBinaryFromReader(message: ListRunbooksResponse, reader: jspb.BinaryReader): ListRunbooksResponse;
}

export namespace ListRunbooksResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject>,
    nextPageToken: string,
  }
}

export class GetRunbookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRunbookRequest;

  getName(): string;
  setName(value: string): GetRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRunbookRequest): GetRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: GetRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRunbookRequest;
  static deserializeBinaryFromReader(message: GetRunbookRequest, reader: jspb.BinaryReader): GetRunbookRequest;
}

export namespace GetRunbookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateRunbookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): CreateRunbookRequest;
  hasItem(): boolean;
  clearItem(): CreateRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRunbookRequest): CreateRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRunbookRequest;
  static deserializeBinaryFromReader(message: CreateRunbookRequest, reader: jspb.BinaryReader): CreateRunbookRequest;
}

export namespace CreateRunbookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
  }
}

export class UpdateRunbookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): UpdateRunbookRequest;
  hasItem(): boolean;
  clearItem(): UpdateRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRunbookRequest): UpdateRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRunbookRequest;
  static deserializeBinaryFromReader(message: UpdateRunbookRequest, reader: jspb.BinaryReader): UpdateRunbookRequest;
}

export namespace UpdateRunbookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
  }
}

export class DeleteRunbookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRunbookRequest;

  getName(): string;
  setName(value: string): DeleteRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRunbookRequest): DeleteRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRunbookRequest;
  static deserializeBinaryFromReader(message: DeleteRunbookRequest, reader: jspb.BinaryReader): DeleteRunbookRequest;
}

export namespace DeleteRunbookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListSqlQuerysRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListSqlQuerysRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSqlQuerysRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSqlQuerysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSqlQuerysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSqlQuerysRequest): ListSqlQuerysRequest.AsObject;
  static serializeBinaryToWriter(message: ListSqlQuerysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSqlQuerysRequest;
  static deserializeBinaryFromReader(message: ListSqlQuerysRequest, reader: jspb.BinaryReader): ListSqlQuerysRequest;
}

export namespace ListSqlQuerysRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSqlQuerysResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery>): ListSqlQuerysResponse;
  clearItemsList(): ListSqlQuerysResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSqlQuerysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSqlQuerysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSqlQuerysResponse): ListSqlQuerysResponse.AsObject;
  static serializeBinaryToWriter(message: ListSqlQuerysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSqlQuerysResponse;
  static deserializeBinaryFromReader(message: ListSqlQuerysResponse, reader: jspb.BinaryReader): ListSqlQuerysResponse;
}

export namespace ListSqlQuerysResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.AsObject>,
    nextPageToken: string,
  }
}

export class GetSqlQueryRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetSqlQueryRequest;

  getName(): string;
  setName(value: string): GetSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSqlQueryRequest): GetSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: GetSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSqlQueryRequest;
  static deserializeBinaryFromReader(message: GetSqlQueryRequest, reader: jspb.BinaryReader): GetSqlQueryRequest;
}

export namespace GetSqlQueryRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateSqlQueryRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery): CreateSqlQueryRequest;
  hasItem(): boolean;
  clearItem(): CreateSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSqlQueryRequest): CreateSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSqlQueryRequest;
  static deserializeBinaryFromReader(message: CreateSqlQueryRequest, reader: jspb.BinaryReader): CreateSqlQueryRequest;
}

export namespace CreateSqlQueryRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.AsObject,
  }
}

export class UpdateSqlQueryRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery): UpdateSqlQueryRequest;
  hasItem(): boolean;
  clearItem(): UpdateSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSqlQueryRequest): UpdateSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSqlQueryRequest;
  static deserializeBinaryFromReader(message: UpdateSqlQueryRequest, reader: jspb.BinaryReader): UpdateSqlQueryRequest;
}

export namespace UpdateSqlQueryRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.AsObject,
  }
}

export class DeleteSqlQueryRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteSqlQueryRequest;

  getName(): string;
  setName(value: string): DeleteSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSqlQueryRequest): DeleteSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSqlQueryRequest;
  static deserializeBinaryFromReader(message: DeleteSqlQueryRequest, reader: jspb.BinaryReader): DeleteSqlQueryRequest;
}

export namespace DeleteSqlQueryRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListSqlQueryRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListSqlQueryRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSqlQueryRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSqlQueryRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSqlQueryRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSqlQueryRunsRequest): ListSqlQueryRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSqlQueryRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSqlQueryRunsRequest;
  static deserializeBinaryFromReader(message: ListSqlQueryRunsRequest, reader: jspb.BinaryReader): ListSqlQueryRunsRequest;
}

export namespace ListSqlQueryRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSqlQueryRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun>): ListSqlQueryRunsResponse;
  clearItemsList(): ListSqlQueryRunsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSqlQueryRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSqlQueryRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSqlQueryRunsResponse): ListSqlQueryRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSqlQueryRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSqlQueryRunsResponse;
  static deserializeBinaryFromReader(message: ListSqlQueryRunsResponse, reader: jspb.BinaryReader): ListSqlQueryRunsResponse;
}

export namespace ListSqlQueryRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetSqlQueryRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetSqlQueryRunRequest;

  getName(): string;
  setName(value: string): GetSqlQueryRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSqlQueryRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSqlQueryRunRequest): GetSqlQueryRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetSqlQueryRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSqlQueryRunRequest;
  static deserializeBinaryFromReader(message: GetSqlQueryRunRequest, reader: jspb.BinaryReader): GetSqlQueryRunRequest;
}

export namespace GetSqlQueryRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateSqlQueryRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun): CreateSqlQueryRunRequest;
  hasItem(): boolean;
  clearItem(): CreateSqlQueryRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSqlQueryRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSqlQueryRunRequest): CreateSqlQueryRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSqlQueryRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSqlQueryRunRequest;
  static deserializeBinaryFromReader(message: CreateSqlQueryRunRequest, reader: jspb.BinaryReader): CreateSqlQueryRunRequest;
}

export namespace CreateSqlQueryRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.AsObject,
  }
}

export class UpdateSqlQueryRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun): UpdateSqlQueryRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateSqlQueryRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSqlQueryRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSqlQueryRunRequest): UpdateSqlQueryRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSqlQueryRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSqlQueryRunRequest;
  static deserializeBinaryFromReader(message: UpdateSqlQueryRunRequest, reader: jspb.BinaryReader): UpdateSqlQueryRunRequest;
}

export namespace UpdateSqlQueryRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.AsObject,
  }
}

export class DeleteSqlQueryRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteSqlQueryRunRequest;

  getName(): string;
  setName(value: string): DeleteSqlQueryRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSqlQueryRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSqlQueryRunRequest): DeleteSqlQueryRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSqlQueryRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSqlQueryRunRequest;
  static deserializeBinaryFromReader(message: DeleteSqlQueryRunRequest, reader: jspb.BinaryReader): DeleteSqlQueryRunRequest;
}

export namespace DeleteSqlQueryRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListWebRequestsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListWebRequestsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListWebRequestsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListWebRequestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestsRequest): ListWebRequestsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestsRequest;
  static deserializeBinaryFromReader(message: ListWebRequestsRequest, reader: jspb.BinaryReader): ListWebRequestsRequest;
}

export namespace ListWebRequestsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListWebRequestsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest>): ListWebRequestsResponse;
  clearItemsList(): ListWebRequestsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListWebRequestsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestsResponse): ListWebRequestsResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestsResponse;
  static deserializeBinaryFromReader(message: ListWebRequestsResponse, reader: jspb.BinaryReader): ListWebRequestsResponse;
}

export namespace ListWebRequestsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.AsObject>,
    nextPageToken: string,
  }
}

export class GetWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetWebRequestRequest;

  getName(): string;
  setName(value: string): GetWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebRequestRequest): GetWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebRequestRequest;
  static deserializeBinaryFromReader(message: GetWebRequestRequest, reader: jspb.BinaryReader): GetWebRequestRequest;
}

export namespace GetWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest): CreateWebRequestRequest;
  hasItem(): boolean;
  clearItem(): CreateWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebRequestRequest): CreateWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebRequestRequest;
  static deserializeBinaryFromReader(message: CreateWebRequestRequest, reader: jspb.BinaryReader): CreateWebRequestRequest;
}

export namespace CreateWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.AsObject,
  }
}

export class UpdateWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest): UpdateWebRequestRequest;
  hasItem(): boolean;
  clearItem(): UpdateWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebRequestRequest): UpdateWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebRequestRequest;
  static deserializeBinaryFromReader(message: UpdateWebRequestRequest, reader: jspb.BinaryReader): UpdateWebRequestRequest;
}

export namespace UpdateWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.AsObject,
  }
}

export class DeleteWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteWebRequestRequest;

  getName(): string;
  setName(value: string): DeleteWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebRequestRequest): DeleteWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebRequestRequest;
  static deserializeBinaryFromReader(message: DeleteWebRequestRequest, reader: jspb.BinaryReader): DeleteWebRequestRequest;
}

export namespace DeleteWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListWebRequestRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListWebRequestRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListWebRequestRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListWebRequestRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestRunsRequest): ListWebRequestRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestRunsRequest;
  static deserializeBinaryFromReader(message: ListWebRequestRunsRequest, reader: jspb.BinaryReader): ListWebRequestRunsRequest;
}

export namespace ListWebRequestRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListWebRequestRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun>): ListWebRequestRunsResponse;
  clearItemsList(): ListWebRequestRunsResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListWebRequestRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestRunsResponse): ListWebRequestRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestRunsResponse;
  static deserializeBinaryFromReader(message: ListWebRequestRunsResponse, reader: jspb.BinaryReader): ListWebRequestRunsResponse;
}

export namespace ListWebRequestRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetWebRequestRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetWebRequestRunRequest;

  getName(): string;
  setName(value: string): GetWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebRequestRunRequest): GetWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebRequestRunRequest;
  static deserializeBinaryFromReader(message: GetWebRequestRunRequest, reader: jspb.BinaryReader): GetWebRequestRunRequest;
}

export namespace GetWebRequestRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateWebRequestRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun): CreateWebRequestRunRequest;
  hasItem(): boolean;
  clearItem(): CreateWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebRequestRunRequest): CreateWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebRequestRunRequest;
  static deserializeBinaryFromReader(message: CreateWebRequestRunRequest, reader: jspb.BinaryReader): CreateWebRequestRunRequest;
}

export namespace CreateWebRequestRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.AsObject,
  }
}

export class UpdateWebRequestRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun): UpdateWebRequestRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebRequestRunRequest): UpdateWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebRequestRunRequest;
  static deserializeBinaryFromReader(message: UpdateWebRequestRunRequest, reader: jspb.BinaryReader): UpdateWebRequestRunRequest;
}

export namespace UpdateWebRequestRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.AsObject,
  }
}

export class DeleteWebRequestRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteWebRequestRunRequest;

  getName(): string;
  setName(value: string): DeleteWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebRequestRunRequest): DeleteWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebRequestRunRequest;
  static deserializeBinaryFromReader(message: DeleteWebRequestRunRequest, reader: jspb.BinaryReader): DeleteWebRequestRunRequest;
}

export namespace DeleteWebRequestRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataAppRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataAppRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataAppRequest): ListDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataAppRequest;
  static deserializeBinaryFromReader(message: ListDataAppRequest, reader: jspb.BinaryReader): ListDataAppRequest;
}

export namespace ListDataAppRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataAppResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>;
  setItemsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp>): ListDataAppResponse;
  clearItemsList(): ListDataAppResponse;
  addItems(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp, index?: number): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataAppResponse): ListDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataAppResponse;
  static deserializeBinaryFromReader(message: ListDataAppResponse, reader: jspb.BinaryReader): ListDataAppResponse;
}

export namespace ListDataAppResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataAppRequest;

  getName(): string;
  setName(value: string): GetDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataAppRequest): GetDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataAppRequest;
  static deserializeBinaryFromReader(message: GetDataAppRequest, reader: jspb.BinaryReader): GetDataAppRequest;
}

export namespace GetDataAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataAppRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp): CreateDataAppRequest;
  hasItem(): boolean;
  clearItem(): CreateDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataAppRequest): CreateDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataAppRequest;
  static deserializeBinaryFromReader(message: CreateDataAppRequest, reader: jspb.BinaryReader): CreateDataAppRequest;
}

export namespace CreateDataAppRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject,
  }
}

export class UpdateDataAppRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp): UpdateDataAppRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataAppRequest): UpdateDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataAppRequest;
  static deserializeBinaryFromReader(message: UpdateDataAppRequest, reader: jspb.BinaryReader): UpdateDataAppRequest;
}

export namespace UpdateDataAppRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject,
  }
}

export class DeleteDataAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataAppRequest;

  getName(): string;
  setName(value: string): DeleteDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataAppRequest): DeleteDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataAppRequest;
  static deserializeBinaryFromReader(message: DeleteDataAppRequest, reader: jspb.BinaryReader): DeleteDataAppRequest;
}

export namespace DeleteDataAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

