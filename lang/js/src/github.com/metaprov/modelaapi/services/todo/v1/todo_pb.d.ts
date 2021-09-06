import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListTodosRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListTodosRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListTodosRequest;

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
    labelsMap: Array<[string, string]>,
  }
}

export class ListTodosResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.TodoList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.TodoList): ListTodosResponse;
  hasItems(): boolean;
  clearItems(): ListTodosResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTodosResponse): ListTodosResponse.AsObject;
  static serializeBinaryToWriter(message: ListTodosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTodosResponse;
  static deserializeBinaryFromReader(message: ListTodosResponse, reader: jspb.BinaryReader): ListTodosResponse;
}

export namespace ListTodosResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.TodoList.AsObject,
  }
}

export class TodoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
  static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoResponse;
  static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
  export type AsObject = {
  }
}

export class CreateTodoRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo): CreateTodoRequest;
  hasItem(): boolean;
  clearItem(): CreateTodoRequest;

  getPassword(): string;
  setPassword(value: string): CreateTodoRequest;

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
    password: string,
  }
}

export class CreateTodoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoResponse): CreateTodoResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoResponse;
  static deserializeBinaryFromReader(message: CreateTodoResponse, reader: jspb.BinaryReader): CreateTodoResponse;
}

export namespace CreateTodoResponse {
  export type AsObject = {
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

export class UpdateTodoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTodoResponse): UpdateTodoResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTodoResponse;
  static deserializeBinaryFromReader(message: UpdateTodoResponse, reader: jspb.BinaryReader): UpdateTodoResponse;
}

export namespace UpdateTodoResponse {
  export type AsObject = {
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

export class GetTodoResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo): GetTodoResponse;
  hasItem(): boolean;
  clearItem(): GetTodoResponse;

  getYaml(): string;
  setYaml(value: string): GetTodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoResponse): GetTodoResponse.AsObject;
  static serializeBinaryToWriter(message: GetTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoResponse;
  static deserializeBinaryFromReader(message: GetTodoResponse, reader: jspb.BinaryReader): GetTodoResponse;
}

export namespace GetTodoResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.AsObject,
    yaml: string,
  }
}

export class GetTodoNamespacesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTodoNamespacesRequest;

  getName(): string;
  setName(value: string): GetTodoNamespacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoNamespacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoNamespacesRequest): GetTodoNamespacesRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodoNamespacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoNamespacesRequest;
  static deserializeBinaryFromReader(message: GetTodoNamespacesRequest, reader: jspb.BinaryReader): GetTodoNamespacesRequest;
}

export namespace GetTodoNamespacesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetTodoNamespacesResponse extends jspb.Message {
  getNamespacesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>;
  setNamespacesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo>): GetTodoNamespacesResponse;
  clearNamespacesList(): GetTodoNamespacesResponse;
  addNamespaces(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoNamespacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoNamespacesResponse): GetTodoNamespacesResponse.AsObject;
  static serializeBinaryToWriter(message: GetTodoNamespacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoNamespacesResponse;
  static deserializeBinaryFromReader(message: GetTodoNamespacesResponse, reader: jspb.BinaryReader): GetTodoNamespacesResponse;
}

export namespace GetTodoNamespacesResponse {
  export type AsObject = {
    namespacesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.NamespaceInfo.AsObject>,
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

export class DeleteTodoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoResponse): DeleteTodoResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoResponse;
  static deserializeBinaryFromReader(message: DeleteTodoResponse, reader: jspb.BinaryReader): DeleteTodoResponse;
}

export namespace DeleteTodoResponse {
  export type AsObject = {
  }
}

export class TodoCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoCreateResponse): TodoCreateResponse.AsObject;
  static serializeBinaryToWriter(message: TodoCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoCreateResponse;
  static deserializeBinaryFromReader(message: TodoCreateResponse, reader: jspb.BinaryReader): TodoCreateResponse;
}

export namespace TodoCreateResponse {
  export type AsObject = {
  }
}

export class TodoGetByNameRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): TodoGetByNameRequest;

  getName(): string;
  setName(value: string): TodoGetByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoGetByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoGetByNameRequest): TodoGetByNameRequest.AsObject;
  static serializeBinaryToWriter(message: TodoGetByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoGetByNameRequest;
  static deserializeBinaryFromReader(message: TodoGetByNameRequest, reader: jspb.BinaryReader): TodoGetByNameRequest;
}

export namespace TodoGetByNameRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class TodoLogoutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): TodoLogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoLogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoLogoutRequest): TodoLogoutRequest.AsObject;
  static serializeBinaryToWriter(message: TodoLogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoLogoutRequest;
  static deserializeBinaryFromReader(message: TodoLogoutRequest, reader: jspb.BinaryReader): TodoLogoutRequest;
}

export namespace TodoLogoutRequest {
  export type AsObject = {
    token: string,
  }
}

