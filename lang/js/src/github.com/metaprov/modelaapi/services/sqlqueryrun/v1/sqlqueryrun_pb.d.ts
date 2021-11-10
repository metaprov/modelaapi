import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListSqlQueryRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListSqlQueryRunsRequest;

  getName(): string;
  setName(value: string): ListSqlQueryRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListSqlQueryRunsRequest;

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
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListSqlQueryRunsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRunList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRunList): ListSqlQueryRunsResponse;
  hasItems(): boolean;
  clearItems(): ListSqlQueryRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSqlQueryRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSqlQueryRunsResponse): ListSqlQueryRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSqlQueryRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSqlQueryRunsResponse;
  static deserializeBinaryFromReader(message: ListSqlQueryRunsResponse, reader: jspb.BinaryReader): ListSqlQueryRunsResponse;
}

export namespace ListSqlQueryRunsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRunList.AsObject,
  }
}

export class CreateSqlQueryRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSqlQueryRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSqlQueryRunResponse): CreateSqlQueryRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSqlQueryRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSqlQueryRunResponse;
  static deserializeBinaryFromReader(message: CreateSqlQueryRunResponse, reader: jspb.BinaryReader): CreateSqlQueryRunResponse;
}

export namespace CreateSqlQueryRunResponse {
  export type AsObject = {
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

export class UpdateSqlQueryRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSqlQueryRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSqlQueryRunResponse): UpdateSqlQueryRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSqlQueryRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSqlQueryRunResponse;
  static deserializeBinaryFromReader(message: UpdateSqlQueryRunResponse, reader: jspb.BinaryReader): UpdateSqlQueryRunResponse;
}

export namespace UpdateSqlQueryRunResponse {
  export type AsObject = {
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

export class GetSqlQueryRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun): GetSqlQueryRunResponse;
  hasItem(): boolean;
  clearItem(): GetSqlQueryRunResponse;

  getYaml(): string;
  setYaml(value: string): GetSqlQueryRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSqlQueryRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSqlQueryRunResponse): GetSqlQueryRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetSqlQueryRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSqlQueryRunResponse;
  static deserializeBinaryFromReader(message: GetSqlQueryRunResponse, reader: jspb.BinaryReader): GetSqlQueryRunResponse;
}

export namespace GetSqlQueryRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.AsObject,
    yaml: string,
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

export class DeleteSqlQueryRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSqlQueryRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSqlQueryRunResponse): DeleteSqlQueryRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSqlQueryRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSqlQueryRunResponse;
  static deserializeBinaryFromReader(message: DeleteSqlQueryRunResponse, reader: jspb.BinaryReader): DeleteSqlQueryRunResponse;
}

export namespace DeleteSqlQueryRunResponse {
  export type AsObject = {
  }
}

export class RunSqlQueryRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun): RunSqlQueryRunRequest;
  hasItem(): boolean;
  clearItem(): RunSqlQueryRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunSqlQueryRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunSqlQueryRunRequest): RunSqlQueryRunRequest.AsObject;
  static serializeBinaryToWriter(message: RunSqlQueryRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunSqlQueryRunRequest;
  static deserializeBinaryFromReader(message: RunSqlQueryRunRequest, reader: jspb.BinaryReader): RunSqlQueryRunRequest;
}

export namespace RunSqlQueryRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.SqlQueryRun.AsObject,
  }
}

export class RunSqlQueryRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunSqlQueryRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunSqlQueryRunResponse): RunSqlQueryRunResponse.AsObject;
  static serializeBinaryToWriter(message: RunSqlQueryRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunSqlQueryRunResponse;
  static deserializeBinaryFromReader(message: RunSqlQueryRunResponse, reader: jspb.BinaryReader): RunSqlQueryRunResponse;
}

export namespace RunSqlQueryRunResponse {
  export type AsObject = {
  }
}

