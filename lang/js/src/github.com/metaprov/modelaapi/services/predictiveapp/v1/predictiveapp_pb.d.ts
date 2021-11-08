import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListPredictiveAppsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictiveAppsRequest;

  getName(): string;
  setName(value: string): ListPredictiveAppsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPredictiveAppsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictiveAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictiveAppsRequest): ListPredictiveAppsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictiveAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictiveAppsRequest;
  static deserializeBinaryFromReader(message: ListPredictiveAppsRequest, reader: jspb.BinaryReader): ListPredictiveAppsRequest;
}

export namespace ListPredictiveAppsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListPredictiveAppsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveAppList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveAppList): ListPredictiveAppsResponse;
  hasItems(): boolean;
  clearItems(): ListPredictiveAppsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictiveAppsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictiveAppsResponse): ListPredictiveAppsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictiveAppsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictiveAppsResponse;
  static deserializeBinaryFromReader(message: ListPredictiveAppsResponse, reader: jspb.BinaryReader): ListPredictiveAppsResponse;
}

export namespace ListPredictiveAppsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveAppList.AsObject,
  }
}

export class CreatePredictiveAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictiveAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictiveAppResponse): CreatePredictiveAppResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePredictiveAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictiveAppResponse;
  static deserializeBinaryFromReader(message: CreatePredictiveAppResponse, reader: jspb.BinaryReader): CreatePredictiveAppResponse;
}

export namespace CreatePredictiveAppResponse {
  export type AsObject = {
  }
}

export class CreatePredictiveAppRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp): CreatePredictiveAppRequest;
  hasItem(): boolean;
  clearItem(): CreatePredictiveAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictiveAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictiveAppRequest): CreatePredictiveAppRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictiveAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictiveAppRequest;
  static deserializeBinaryFromReader(message: CreatePredictiveAppRequest, reader: jspb.BinaryReader): CreatePredictiveAppRequest;
}

export namespace CreatePredictiveAppRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp.AsObject,
  }
}

export class UpdatePredictiveAppRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp): UpdatePredictiveAppRequest;
  hasItem(): boolean;
  clearItem(): UpdatePredictiveAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictiveAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictiveAppRequest): UpdatePredictiveAppRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictiveAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictiveAppRequest;
  static deserializeBinaryFromReader(message: UpdatePredictiveAppRequest, reader: jspb.BinaryReader): UpdatePredictiveAppRequest;
}

export namespace UpdatePredictiveAppRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp.AsObject,
  }
}

export class UpdatePredictiveAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictiveAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictiveAppResponse): UpdatePredictiveAppResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictiveAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictiveAppResponse;
  static deserializeBinaryFromReader(message: UpdatePredictiveAppResponse, reader: jspb.BinaryReader): UpdatePredictiveAppResponse;
}

export namespace UpdatePredictiveAppResponse {
  export type AsObject = {
  }
}

export class GetPredictiveAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictiveAppRequest;

  getName(): string;
  setName(value: string): GetPredictiveAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictiveAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictiveAppRequest): GetPredictiveAppRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictiveAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictiveAppRequest;
  static deserializeBinaryFromReader(message: GetPredictiveAppRequest, reader: jspb.BinaryReader): GetPredictiveAppRequest;
}

export namespace GetPredictiveAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPredictiveAppResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp): GetPredictiveAppResponse;
  hasItem(): boolean;
  clearItem(): GetPredictiveAppResponse;

  getYaml(): string;
  setYaml(value: string): GetPredictiveAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictiveAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictiveAppResponse): GetPredictiveAppResponse.AsObject;
  static serializeBinaryToWriter(message: GetPredictiveAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictiveAppResponse;
  static deserializeBinaryFromReader(message: GetPredictiveAppResponse, reader: jspb.BinaryReader): GetPredictiveAppResponse;
}

export namespace GetPredictiveAppResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp.AsObject,
    yaml: string,
  }
}

export class DeletePredictiveAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictiveAppRequest;

  getName(): string;
  setName(value: string): DeletePredictiveAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictiveAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictiveAppRequest): DeletePredictiveAppRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictiveAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictiveAppRequest;
  static deserializeBinaryFromReader(message: DeletePredictiveAppRequest, reader: jspb.BinaryReader): DeletePredictiveAppRequest;
}

export namespace DeletePredictiveAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeletePredictiveAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictiveAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictiveAppResponse): DeletePredictiveAppResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePredictiveAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictiveAppResponse;
  static deserializeBinaryFromReader(message: DeletePredictiveAppResponse, reader: jspb.BinaryReader): DeletePredictiveAppResponse;
}

export namespace DeletePredictiveAppResponse {
  export type AsObject = {
  }
}

export class PausePredictiveAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PausePredictiveAppRequest;

  getName(): string;
  setName(value: string): PausePredictiveAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PausePredictiveAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PausePredictiveAppRequest): PausePredictiveAppRequest.AsObject;
  static serializeBinaryToWriter(message: PausePredictiveAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PausePredictiveAppRequest;
  static deserializeBinaryFromReader(message: PausePredictiveAppRequest, reader: jspb.BinaryReader): PausePredictiveAppRequest;
}

export namespace PausePredictiveAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PausePredictiveAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PausePredictiveAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PausePredictiveAppResponse): PausePredictiveAppResponse.AsObject;
  static serializeBinaryToWriter(message: PausePredictiveAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PausePredictiveAppResponse;
  static deserializeBinaryFromReader(message: PausePredictiveAppResponse, reader: jspb.BinaryReader): PausePredictiveAppResponse;
}

export namespace PausePredictiveAppResponse {
  export type AsObject = {
  }
}

export class ResumePredictiveAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumePredictiveAppRequest;

  getName(): string;
  setName(value: string): ResumePredictiveAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumePredictiveAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumePredictiveAppRequest): ResumePredictiveAppRequest.AsObject;
  static serializeBinaryToWriter(message: ResumePredictiveAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumePredictiveAppRequest;
  static deserializeBinaryFromReader(message: ResumePredictiveAppRequest, reader: jspb.BinaryReader): ResumePredictiveAppRequest;
}

export namespace ResumePredictiveAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumePredictiveAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumePredictiveAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumePredictiveAppResponse): ResumePredictiveAppResponse.AsObject;
  static serializeBinaryToWriter(message: ResumePredictiveAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumePredictiveAppResponse;
  static deserializeBinaryFromReader(message: ResumePredictiveAppResponse, reader: jspb.BinaryReader): ResumePredictiveAppResponse;
}

export namespace ResumePredictiveAppResponse {
  export type AsObject = {
  }
}

export class RunPredictiveAppRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp): RunPredictiveAppRequest;
  hasItem(): boolean;
  clearItem(): RunPredictiveAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPredictiveAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunPredictiveAppRequest): RunPredictiveAppRequest.AsObject;
  static serializeBinaryToWriter(message: RunPredictiveAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPredictiveAppRequest;
  static deserializeBinaryFromReader(message: RunPredictiveAppRequest, reader: jspb.BinaryReader): RunPredictiveAppRequest;
}

export namespace RunPredictiveAppRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictiveApp.AsObject,
  }
}

export class RunPredictiveAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPredictiveAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunPredictiveAppResponse): RunPredictiveAppResponse.AsObject;
  static serializeBinaryToWriter(message: RunPredictiveAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPredictiveAppResponse;
  static deserializeBinaryFromReader(message: RunPredictiveAppResponse, reader: jspb.BinaryReader): RunPredictiveAppResponse;
}

export namespace RunPredictiveAppResponse {
  export type AsObject = {
  }
}

