import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListApiCallsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListApiCallsRequest;

  getName(): string;
  setName(value: string): ListApiCallsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListApiCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiCallsRequest): ListApiCallsRequest.AsObject;
  static serializeBinaryToWriter(message: ListApiCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiCallsRequest;
  static deserializeBinaryFromReader(message: ListApiCallsRequest, reader: jspb.BinaryReader): ListApiCallsRequest;
}

export namespace ListApiCallsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListApiCallsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCallList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCallList): ListApiCallsResponse;
  hasItems(): boolean;
  clearItems(): ListApiCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiCallsResponse): ListApiCallsResponse.AsObject;
  static serializeBinaryToWriter(message: ListApiCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiCallsResponse;
  static deserializeBinaryFromReader(message: ListApiCallsResponse, reader: jspb.BinaryReader): ListApiCallsResponse;
}

export namespace ListApiCallsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCallList.AsObject,
  }
}

export class CreateApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiCallResponse): CreateApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: CreateApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiCallResponse;
  static deserializeBinaryFromReader(message: CreateApiCallResponse, reader: jspb.BinaryReader): CreateApiCallResponse;
}

export namespace CreateApiCallResponse {
  export type AsObject = {
  }
}

export class CreateApiCallRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall): CreateApiCallRequest;
  hasItem(): boolean;
  clearItem(): CreateApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiCallRequest): CreateApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiCallRequest;
  static deserializeBinaryFromReader(message: CreateApiCallRequest, reader: jspb.BinaryReader): CreateApiCallRequest;
}

export namespace CreateApiCallRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall.AsObject,
  }
}

export class UpdateApiCallRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall): UpdateApiCallRequest;
  hasItem(): boolean;
  clearItem(): UpdateApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApiCallRequest): UpdateApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApiCallRequest;
  static deserializeBinaryFromReader(message: UpdateApiCallRequest, reader: jspb.BinaryReader): UpdateApiCallRequest;
}

export namespace UpdateApiCallRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall.AsObject,
  }
}

export class UpdateApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApiCallResponse): UpdateApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApiCallResponse;
  static deserializeBinaryFromReader(message: UpdateApiCallResponse, reader: jspb.BinaryReader): UpdateApiCallResponse;
}

export namespace UpdateApiCallResponse {
  export type AsObject = {
  }
}

export class GetApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetApiCallRequest;

  getName(): string;
  setName(value: string): GetApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiCallRequest): GetApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: GetApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiCallRequest;
  static deserializeBinaryFromReader(message: GetApiCallRequest, reader: jspb.BinaryReader): GetApiCallRequest;
}

export namespace GetApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetApiCallResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall): GetApiCallResponse;
  hasItem(): boolean;
  clearItem(): GetApiCallResponse;

  getYaml(): string;
  setYaml(value: string): GetApiCallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiCallResponse): GetApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: GetApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiCallResponse;
  static deserializeBinaryFromReader(message: GetApiCallResponse, reader: jspb.BinaryReader): GetApiCallResponse;
}

export namespace GetApiCallResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall.AsObject,
    yaml: string,
  }
}

export class DeleteApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteApiCallRequest;

  getName(): string;
  setName(value: string): DeleteApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiCallRequest): DeleteApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiCallRequest;
  static deserializeBinaryFromReader(message: DeleteApiCallRequest, reader: jspb.BinaryReader): DeleteApiCallRequest;
}

export namespace DeleteApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiCallResponse): DeleteApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiCallResponse;
  static deserializeBinaryFromReader(message: DeleteApiCallResponse, reader: jspb.BinaryReader): DeleteApiCallResponse;
}

export namespace DeleteApiCallResponse {
  export type AsObject = {
  }
}

export class PauseApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseApiCallRequest;

  getName(): string;
  setName(value: string): PauseApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseApiCallRequest): PauseApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: PauseApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseApiCallRequest;
  static deserializeBinaryFromReader(message: PauseApiCallRequest, reader: jspb.BinaryReader): PauseApiCallRequest;
}

export namespace PauseApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseApiCallResponse): PauseApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: PauseApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseApiCallResponse;
  static deserializeBinaryFromReader(message: PauseApiCallResponse, reader: jspb.BinaryReader): PauseApiCallResponse;
}

export namespace PauseApiCallResponse {
  export type AsObject = {
  }
}

export class ResumeApiCallRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeApiCallRequest;

  getName(): string;
  setName(value: string): ResumeApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeApiCallRequest): ResumeApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeApiCallRequest;
  static deserializeBinaryFromReader(message: ResumeApiCallRequest, reader: jspb.BinaryReader): ResumeApiCallRequest;
}

export namespace ResumeApiCallRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeApiCallResponse): ResumeApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeApiCallResponse;
  static deserializeBinaryFromReader(message: ResumeApiCallResponse, reader: jspb.BinaryReader): ResumeApiCallResponse;
}

export namespace ResumeApiCallResponse {
  export type AsObject = {
  }
}

export class RunApiCallRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall): RunApiCallRequest;
  hasItem(): boolean;
  clearItem(): RunApiCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunApiCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunApiCallRequest): RunApiCallRequest.AsObject;
  static serializeBinaryToWriter(message: RunApiCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunApiCallRequest;
  static deserializeBinaryFromReader(message: RunApiCallRequest, reader: jspb.BinaryReader): RunApiCallRequest;
}

export namespace RunApiCallRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.ApiCall.AsObject,
  }
}

export class RunApiCallResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunApiCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunApiCallResponse): RunApiCallResponse.AsObject;
  static serializeBinaryToWriter(message: RunApiCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunApiCallResponse;
  static deserializeBinaryFromReader(message: RunApiCallResponse, reader: jspb.BinaryReader): RunApiCallResponse;
}

export namespace RunApiCallResponse {
  export type AsObject = {
  }
}

