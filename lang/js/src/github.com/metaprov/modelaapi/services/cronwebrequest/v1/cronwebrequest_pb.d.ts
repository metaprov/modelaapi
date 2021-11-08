import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListCronWebRequestsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronWebRequestsRequest;

  getName(): string;
  setName(value: string): ListCronWebRequestsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCronWebRequestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronWebRequestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronWebRequestsRequest): ListCronWebRequestsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronWebRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronWebRequestsRequest;
  static deserializeBinaryFromReader(message: ListCronWebRequestsRequest, reader: jspb.BinaryReader): ListCronWebRequestsRequest;
}

export namespace ListCronWebRequestsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListCronWebRequestsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequestList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequestList): ListCronWebRequestsResponse;
  hasItems(): boolean;
  clearItems(): ListCronWebRequestsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronWebRequestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronWebRequestsResponse): ListCronWebRequestsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronWebRequestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronWebRequestsResponse;
  static deserializeBinaryFromReader(message: ListCronWebRequestsResponse, reader: jspb.BinaryReader): ListCronWebRequestsResponse;
}

export namespace ListCronWebRequestsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequestList.AsObject,
  }
}

export class CreateCronWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronWebRequestResponse): CreateCronWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCronWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronWebRequestResponse;
  static deserializeBinaryFromReader(message: CreateCronWebRequestResponse, reader: jspb.BinaryReader): CreateCronWebRequestResponse;
}

export namespace CreateCronWebRequestResponse {
  export type AsObject = {
  }
}

export class CreateCronWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest): CreateCronWebRequestRequest;
  hasItem(): boolean;
  clearItem(): CreateCronWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronWebRequestRequest): CreateCronWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronWebRequestRequest;
  static deserializeBinaryFromReader(message: CreateCronWebRequestRequest, reader: jspb.BinaryReader): CreateCronWebRequestRequest;
}

export namespace CreateCronWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest.AsObject,
  }
}

export class UpdateCronWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest): UpdateCronWebRequestRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronWebRequestRequest): UpdateCronWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronWebRequestRequest;
  static deserializeBinaryFromReader(message: UpdateCronWebRequestRequest, reader: jspb.BinaryReader): UpdateCronWebRequestRequest;
}

export namespace UpdateCronWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest.AsObject,
  }
}

export class UpdateCronWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronWebRequestResponse): UpdateCronWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCronWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronWebRequestResponse;
  static deserializeBinaryFromReader(message: UpdateCronWebRequestResponse, reader: jspb.BinaryReader): UpdateCronWebRequestResponse;
}

export namespace UpdateCronWebRequestResponse {
  export type AsObject = {
  }
}

export class GetCronWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCronWebRequestRequest;

  getName(): string;
  setName(value: string): GetCronWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronWebRequestRequest): GetCronWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronWebRequestRequest;
  static deserializeBinaryFromReader(message: GetCronWebRequestRequest, reader: jspb.BinaryReader): GetCronWebRequestRequest;
}

export namespace GetCronWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCronWebRequestResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest): GetCronWebRequestResponse;
  hasItem(): boolean;
  clearItem(): GetCronWebRequestResponse;

  getYaml(): string;
  setYaml(value: string): GetCronWebRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronWebRequestResponse): GetCronWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: GetCronWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronWebRequestResponse;
  static deserializeBinaryFromReader(message: GetCronWebRequestResponse, reader: jspb.BinaryReader): GetCronWebRequestResponse;
}

export namespace GetCronWebRequestResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest.AsObject,
    yaml: string,
  }
}

export class DeleteCronWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCronWebRequestRequest;

  getName(): string;
  setName(value: string): DeleteCronWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronWebRequestRequest): DeleteCronWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronWebRequestRequest;
  static deserializeBinaryFromReader(message: DeleteCronWebRequestRequest, reader: jspb.BinaryReader): DeleteCronWebRequestRequest;
}

export namespace DeleteCronWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteCronWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronWebRequestResponse): DeleteCronWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCronWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronWebRequestResponse;
  static deserializeBinaryFromReader(message: DeleteCronWebRequestResponse, reader: jspb.BinaryReader): DeleteCronWebRequestResponse;
}

export namespace DeleteCronWebRequestResponse {
  export type AsObject = {
  }
}

export class PauseCronWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseCronWebRequestRequest;

  getName(): string;
  setName(value: string): PauseCronWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronWebRequestRequest): PauseCronWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: PauseCronWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronWebRequestRequest;
  static deserializeBinaryFromReader(message: PauseCronWebRequestRequest, reader: jspb.BinaryReader): PauseCronWebRequestRequest;
}

export namespace PauseCronWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseCronWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronWebRequestResponse): PauseCronWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: PauseCronWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronWebRequestResponse;
  static deserializeBinaryFromReader(message: PauseCronWebRequestResponse, reader: jspb.BinaryReader): PauseCronWebRequestResponse;
}

export namespace PauseCronWebRequestResponse {
  export type AsObject = {
  }
}

export class ResumeCronWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeCronWebRequestRequest;

  getName(): string;
  setName(value: string): ResumeCronWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronWebRequestRequest): ResumeCronWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeCronWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronWebRequestRequest;
  static deserializeBinaryFromReader(message: ResumeCronWebRequestRequest, reader: jspb.BinaryReader): ResumeCronWebRequestRequest;
}

export namespace ResumeCronWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeCronWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronWebRequestResponse): ResumeCronWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeCronWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronWebRequestResponse;
  static deserializeBinaryFromReader(message: ResumeCronWebRequestResponse, reader: jspb.BinaryReader): ResumeCronWebRequestResponse;
}

export namespace ResumeCronWebRequestResponse {
  export type AsObject = {
  }
}

export class RunCronWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest): RunCronWebRequestRequest;
  hasItem(): boolean;
  clearItem(): RunCronWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronWebRequestRequest): RunCronWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: RunCronWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronWebRequestRequest;
  static deserializeBinaryFromReader(message: RunCronWebRequestRequest, reader: jspb.BinaryReader): RunCronWebRequestRequest;
}

export namespace RunCronWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronWebRequest.AsObject,
  }
}

export class RunCronWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronWebRequestResponse): RunCronWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: RunCronWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronWebRequestResponse;
  static deserializeBinaryFromReader(message: RunCronWebRequestResponse, reader: jspb.BinaryReader): RunCronWebRequestResponse;
}

export namespace RunCronWebRequestResponse {
  export type AsObject = {
  }
}

