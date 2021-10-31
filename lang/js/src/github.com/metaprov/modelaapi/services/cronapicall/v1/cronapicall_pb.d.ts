import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListCronApiCallsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronApiCallsRequest;

  getName(): string;
  setName(value: string): ListCronApiCallsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCronApiCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronApiCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronApiCallsRequest): ListCronApiCallsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronApiCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronApiCallsRequest;
  static deserializeBinaryFromReader(message: ListCronApiCallsRequest, reader: jspb.BinaryReader): ListCronApiCallsRequest;
}

export namespace ListCronApiCallsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListCronApiCallsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCallList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCallList): ListCronApiCallsResponse;
  hasItems(): boolean;
  clearItems(): ListCronApiCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronApiCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronApiCallsResponse): ListCronApiCallsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronApiCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronApiCallsResponse;
  static deserializeBinaryFromReader(message: ListCronApiCallsResponse, reader: jspb.BinaryReader): ListCronApiCallsResponse;
}

export namespace ListCronApiCallsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCallList.AsObject,
  }
}

export class CreateCronApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronApiCallResponse): CreateCronApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCronApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronApiCallResponse;
  static deserializeBinaryFromReader(message: CreateCronApiCallResponse, reader: jspb.BinaryReader): CreateCronApiCallResponse;
}

export namespace CreateCronApiCallResponse {
  export type AsObject = {
  }
}

export class CreateCronApiCallRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall): CreateCronApiCallRequest;
  hasItem(): boolean;
  clearItem(): CreateCronApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronApiCallRequest): CreateCronApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronApiCallRequest;
  static deserializeBinaryFromReader(message: CreateCronApiCallRequest, reader: jspb.BinaryReader): CreateCronApiCallRequest;
}

export namespace CreateCronApiCallRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall.AsObject,
  }
}

export class UpdateCronApiCallRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall): UpdateCronApiCallRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronApiCallRequest): UpdateCronApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronApiCallRequest;
  static deserializeBinaryFromReader(message: UpdateCronApiCallRequest, reader: jspb.BinaryReader): UpdateCronApiCallRequest;
}

export namespace UpdateCronApiCallRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall.AsObject,
  }
}

export class UpdateCronApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronApiCallResponse): UpdateCronApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCronApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronApiCallResponse;
  static deserializeBinaryFromReader(message: UpdateCronApiCallResponse, reader: jspb.BinaryReader): UpdateCronApiCallResponse;
}

export namespace UpdateCronApiCallResponse {
  export type AsObject = {
  }
}

export class GetCronApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCronApiCallRequest;

  getName(): string;
  setName(value: string): GetCronApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronApiCallRequest): GetCronApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronApiCallRequest;
  static deserializeBinaryFromReader(message: GetCronApiCallRequest, reader: jspb.BinaryReader): GetCronApiCallRequest;
}

export namespace GetCronApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCronApiCallResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall): GetCronApiCallResponse;
  hasItem(): boolean;
  clearItem(): GetCronApiCallResponse;

  getYaml(): string;
  setYaml(value: string): GetCronApiCallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronApiCallResponse): GetCronApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: GetCronApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronApiCallResponse;
  static deserializeBinaryFromReader(message: GetCronApiCallResponse, reader: jspb.BinaryReader): GetCronApiCallResponse;
}

export namespace GetCronApiCallResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall.AsObject,
    yaml: string,
  }
}

export class DeleteCronApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCronApiCallRequest;

  getName(): string;
  setName(value: string): DeleteCronApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronApiCallRequest): DeleteCronApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronApiCallRequest;
  static deserializeBinaryFromReader(message: DeleteCronApiCallRequest, reader: jspb.BinaryReader): DeleteCronApiCallRequest;
}

export namespace DeleteCronApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteCronApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronApiCallResponse): DeleteCronApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCronApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronApiCallResponse;
  static deserializeBinaryFromReader(message: DeleteCronApiCallResponse, reader: jspb.BinaryReader): DeleteCronApiCallResponse;
}

export namespace DeleteCronApiCallResponse {
  export type AsObject = {
  }
}

export class PauseCronApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseCronApiCallRequest;

  getName(): string;
  setName(value: string): PauseCronApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronApiCallRequest): PauseCronApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: PauseCronApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronApiCallRequest;
  static deserializeBinaryFromReader(message: PauseCronApiCallRequest, reader: jspb.BinaryReader): PauseCronApiCallRequest;
}

export namespace PauseCronApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseCronApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronApiCallResponse): PauseCronApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: PauseCronApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronApiCallResponse;
  static deserializeBinaryFromReader(message: PauseCronApiCallResponse, reader: jspb.BinaryReader): PauseCronApiCallResponse;
}

export namespace PauseCronApiCallResponse {
  export type AsObject = {
  }
}

export class ResumeCronApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeCronApiCallRequest;

  getName(): string;
  setName(value: string): ResumeCronApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronApiCallRequest): ResumeCronApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeCronApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronApiCallRequest;
  static deserializeBinaryFromReader(message: ResumeCronApiCallRequest, reader: jspb.BinaryReader): ResumeCronApiCallRequest;
}

export namespace ResumeCronApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeCronApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronApiCallResponse): ResumeCronApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeCronApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronApiCallResponse;
  static deserializeBinaryFromReader(message: ResumeCronApiCallResponse, reader: jspb.BinaryReader): ResumeCronApiCallResponse;
}

export namespace ResumeCronApiCallResponse {
  export type AsObject = {
  }
}

export class RunCronApiCallRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall): RunCronApiCallRequest;
  hasItem(): boolean;
  clearItem(): RunCronApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronApiCallRequest): RunCronApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: RunCronApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronApiCallRequest;
  static deserializeBinaryFromReader(message: RunCronApiCallRequest, reader: jspb.BinaryReader): RunCronApiCallRequest;
}

export namespace RunCronApiCallRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CronApiCall.AsObject,
  }
}

export class RunCronApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronApiCallResponse): RunCronApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: RunCronApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronApiCallResponse;
  static deserializeBinaryFromReader(message: RunCronApiCallResponse, reader: jspb.BinaryReader): RunCronApiCallResponse;
}

export namespace RunCronApiCallResponse {
  export type AsObject = {
  }
}

