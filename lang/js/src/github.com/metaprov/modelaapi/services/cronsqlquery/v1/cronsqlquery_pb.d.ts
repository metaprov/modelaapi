import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListCronSqlQuerysRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronSqlQuerysRequest;

  getName(): string;
  setName(value: string): ListCronSqlQuerysRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCronSqlQuerysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronSqlQuerysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronSqlQuerysRequest): ListCronSqlQuerysRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronSqlQuerysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronSqlQuerysRequest;
  static deserializeBinaryFromReader(message: ListCronSqlQuerysRequest, reader: jspb.BinaryReader): ListCronSqlQuerysRequest;
}

export namespace ListCronSqlQuerysRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListCronSqlQuerysResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQueryList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQueryList): ListCronSqlQuerysResponse;
  hasItems(): boolean;
  clearItems(): ListCronSqlQuerysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronSqlQuerysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronSqlQuerysResponse): ListCronSqlQuerysResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronSqlQuerysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronSqlQuerysResponse;
  static deserializeBinaryFromReader(message: ListCronSqlQuerysResponse, reader: jspb.BinaryReader): ListCronSqlQuerysResponse;
}

export namespace ListCronSqlQuerysResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQueryList.AsObject,
  }
}

export class CreateCronSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronSqlQueryResponse): CreateCronSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCronSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronSqlQueryResponse;
  static deserializeBinaryFromReader(message: CreateCronSqlQueryResponse, reader: jspb.BinaryReader): CreateCronSqlQueryResponse;
}

export namespace CreateCronSqlQueryResponse {
  export type AsObject = {
  }
}

export class CreateCronSqlQueryRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery): CreateCronSqlQueryRequest;
  hasItem(): boolean;
  clearItem(): CreateCronSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronSqlQueryRequest): CreateCronSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronSqlQueryRequest;
  static deserializeBinaryFromReader(message: CreateCronSqlQueryRequest, reader: jspb.BinaryReader): CreateCronSqlQueryRequest;
}

export namespace CreateCronSqlQueryRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery.AsObject,
  }
}

export class UpdateCronSqlQueryRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery): UpdateCronSqlQueryRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronSqlQueryRequest): UpdateCronSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronSqlQueryRequest;
  static deserializeBinaryFromReader(message: UpdateCronSqlQueryRequest, reader: jspb.BinaryReader): UpdateCronSqlQueryRequest;
}

export namespace UpdateCronSqlQueryRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery.AsObject,
  }
}

export class UpdateCronSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronSqlQueryResponse): UpdateCronSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCronSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronSqlQueryResponse;
  static deserializeBinaryFromReader(message: UpdateCronSqlQueryResponse, reader: jspb.BinaryReader): UpdateCronSqlQueryResponse;
}

export namespace UpdateCronSqlQueryResponse {
  export type AsObject = {
  }
}

export class GetCronSqlQueryRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCronSqlQueryRequest;

  getName(): string;
  setName(value: string): GetCronSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronSqlQueryRequest): GetCronSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronSqlQueryRequest;
  static deserializeBinaryFromReader(message: GetCronSqlQueryRequest, reader: jspb.BinaryReader): GetCronSqlQueryRequest;
}

export namespace GetCronSqlQueryRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCronSqlQueryResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery): GetCronSqlQueryResponse;
  hasItem(): boolean;
  clearItem(): GetCronSqlQueryResponse;

  getYaml(): string;
  setYaml(value: string): GetCronSqlQueryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronSqlQueryResponse): GetCronSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: GetCronSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronSqlQueryResponse;
  static deserializeBinaryFromReader(message: GetCronSqlQueryResponse, reader: jspb.BinaryReader): GetCronSqlQueryResponse;
}

export namespace GetCronSqlQueryResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery.AsObject,
    yaml: string,
  }
}

export class DeleteCronSqlQueryRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCronSqlQueryRequest;

  getName(): string;
  setName(value: string): DeleteCronSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronSqlQueryRequest): DeleteCronSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronSqlQueryRequest;
  static deserializeBinaryFromReader(message: DeleteCronSqlQueryRequest, reader: jspb.BinaryReader): DeleteCronSqlQueryRequest;
}

export namespace DeleteCronSqlQueryRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteCronSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronSqlQueryResponse): DeleteCronSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCronSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronSqlQueryResponse;
  static deserializeBinaryFromReader(message: DeleteCronSqlQueryResponse, reader: jspb.BinaryReader): DeleteCronSqlQueryResponse;
}

export namespace DeleteCronSqlQueryResponse {
  export type AsObject = {
  }
}

export class PauseCronSqlQueryRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseCronSqlQueryRequest;

  getName(): string;
  setName(value: string): PauseCronSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronSqlQueryRequest): PauseCronSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: PauseCronSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronSqlQueryRequest;
  static deserializeBinaryFromReader(message: PauseCronSqlQueryRequest, reader: jspb.BinaryReader): PauseCronSqlQueryRequest;
}

export namespace PauseCronSqlQueryRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseCronSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronSqlQueryResponse): PauseCronSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: PauseCronSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronSqlQueryResponse;
  static deserializeBinaryFromReader(message: PauseCronSqlQueryResponse, reader: jspb.BinaryReader): PauseCronSqlQueryResponse;
}

export namespace PauseCronSqlQueryResponse {
  export type AsObject = {
  }
}

export class ResumeCronSqlQueryRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeCronSqlQueryRequest;

  getName(): string;
  setName(value: string): ResumeCronSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronSqlQueryRequest): ResumeCronSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeCronSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronSqlQueryRequest;
  static deserializeBinaryFromReader(message: ResumeCronSqlQueryRequest, reader: jspb.BinaryReader): ResumeCronSqlQueryRequest;
}

export namespace ResumeCronSqlQueryRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeCronSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronSqlQueryResponse): ResumeCronSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeCronSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronSqlQueryResponse;
  static deserializeBinaryFromReader(message: ResumeCronSqlQueryResponse, reader: jspb.BinaryReader): ResumeCronSqlQueryResponse;
}

export namespace ResumeCronSqlQueryResponse {
  export type AsObject = {
  }
}

export class RunCronSqlQueryRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery): RunCronSqlQueryRequest;
  hasItem(): boolean;
  clearItem(): RunCronSqlQueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronSqlQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronSqlQueryRequest): RunCronSqlQueryRequest.AsObject;
  static serializeBinaryToWriter(message: RunCronSqlQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronSqlQueryRequest;
  static deserializeBinaryFromReader(message: RunCronSqlQueryRequest, reader: jspb.BinaryReader): RunCronSqlQueryRequest;
}

export namespace RunCronSqlQueryRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronSqlQuery.AsObject,
  }
}

export class RunCronSqlQueryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronSqlQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronSqlQueryResponse): RunCronSqlQueryResponse.AsObject;
  static serializeBinaryToWriter(message: RunCronSqlQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronSqlQueryResponse;
  static deserializeBinaryFromReader(message: RunCronSqlQueryResponse, reader: jspb.BinaryReader): RunCronSqlQueryResponse;
}

export namespace RunCronSqlQueryResponse {
  export type AsObject = {
  }
}

