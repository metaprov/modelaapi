import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListSqlQueriesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListSqlQueriesRequest;

  getName(): string;
  setName(value: string): ListSqlQueriesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListSqlQueriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSqlQueriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSqlQueriesRequest): ListSqlQueriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListSqlQueriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSqlQueriesRequest;
  static deserializeBinaryFromReader(message: ListSqlQueriesRequest, reader: jspb.BinaryReader): ListSqlQueriesRequest;
}

export namespace ListSqlQueriesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListSqlQueriesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryList): ListSqlQueriesResponse;
  hasItems(): boolean;
  clearItems(): ListSqlQueriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSqlQueriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSqlQueriesResponse): ListSqlQueriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListSqlQueriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSqlQueriesResponse;
  static deserializeBinaryFromReader(message: ListSqlQueriesResponse, reader: jspb.BinaryReader): ListSqlQueriesResponse;
}

export namespace ListSqlQueriesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryList.AsObject,
  }
}

export class CreateSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSqlQueryResponse): CreateSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSqlQueryResponse;
  static deserializeBinaryFromReader(message: CreateSqlQueryResponse, reader: jspb.BinaryReader): CreateSqlQueryResponse;
}

export namespace CreateSqlQueryResponse {
  export type AsObject = {
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

export class UpdateSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSqlQueryResponse): UpdateSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSqlQueryResponse;
  static deserializeBinaryFromReader(message: UpdateSqlQueryResponse, reader: jspb.BinaryReader): UpdateSqlQueryResponse;
}

export namespace UpdateSqlQueryResponse {
  export type AsObject = {
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

export class GetSqlQueryResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery): GetSqlQueryResponse;
  hasItem(): boolean;
  clearItem(): GetSqlQueryResponse;

  getYaml(): string;
  setYaml(value: string): GetSqlQueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSqlQueryResponse): GetSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: GetSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSqlQueryResponse;
  static deserializeBinaryFromReader(message: GetSqlQueryResponse, reader: jspb.BinaryReader): GetSqlQueryResponse;
}

export namespace GetSqlQueryResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.AsObject,
    yaml: string,
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

export class DeleteSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSqlQueryResponse): DeleteSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSqlQueryResponse;
  static deserializeBinaryFromReader(message: DeleteSqlQueryResponse, reader: jspb.BinaryReader): DeleteSqlQueryResponse;
}

export namespace DeleteSqlQueryResponse {
  export type AsObject = {
  }
}

export class RunSqlQueryRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery): RunSqlQueryRequest;
  hasItem(): boolean;
  clearItem(): RunSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunSqlQueryRequest): RunSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: RunSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunSqlQueryRequest;
  static deserializeBinaryFromReader(message: RunSqlQueryRequest, reader: jspb.BinaryReader): RunSqlQueryRequest;
}

export namespace RunSqlQueryRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQuery.AsObject,
  }
}

export class RunSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunSqlQueryResponse): RunSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: RunSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunSqlQueryResponse;
  static deserializeBinaryFromReader(message: RunSqlQueryResponse, reader: jspb.BinaryReader): RunSqlQueryResponse;
}

export namespace RunSqlQueryResponse {
  export type AsObject = {
  }
}

