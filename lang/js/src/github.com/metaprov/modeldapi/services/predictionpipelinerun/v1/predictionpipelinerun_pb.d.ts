import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListPredictionPipelineRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictionPipelineRunsRequest;

  getName(): string;
  setName(value: string): ListPredictionPipelineRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPredictionPipelineRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionPipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionPipelineRunsRequest): ListPredictionPipelineRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictionPipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionPipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListPredictionPipelineRunsRequest, reader: jspb.BinaryReader): ListPredictionPipelineRunsRequest;
}

export namespace ListPredictionPipelineRunsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListPredictionPipelineRunsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunList): ListPredictionPipelineRunsResponse;
  hasItems(): boolean;
  clearItems(): ListPredictionPipelineRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionPipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionPipelineRunsResponse): ListPredictionPipelineRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictionPipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionPipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListPredictionPipelineRunsResponse, reader: jspb.BinaryReader): ListPredictionPipelineRunsResponse;
}

export namespace ListPredictionPipelineRunsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunList.AsObject,
  }
}

export class CreatePredictionPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionPipelineRunResponse): CreatePredictionPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionPipelineRunResponse;
  static deserializeBinaryFromReader(message: CreatePredictionPipelineRunResponse, reader: jspb.BinaryReader): CreatePredictionPipelineRunResponse;
}

export namespace CreatePredictionPipelineRunResponse {
  export type AsObject = {
  }
}

export class CreatePredictionPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreatePredictionPipelineRunRequest;

  getName(): string;
  setName(value: string): CreatePredictionPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreatePredictionPipelineRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunSpec): CreatePredictionPipelineRunRequest;
  hasSpec(): boolean;
  clearSpec(): CreatePredictionPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionPipelineRunRequest): CreatePredictionPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreatePredictionPipelineRunRequest, reader: jspb.BinaryReader): CreatePredictionPipelineRunRequest;
}

export namespace CreatePredictionPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunSpec.AsObject,
  }
}

export class UpdatePredictionPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdatePredictionPipelineRunRequest;

  getName(): string;
  setName(value: string): UpdatePredictionPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdatePredictionPipelineRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunSpec): UpdatePredictionPipelineRunRequest;
  hasSpec(): boolean;
  clearSpec(): UpdatePredictionPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionPipelineRunRequest): UpdatePredictionPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdatePredictionPipelineRunRequest, reader: jspb.BinaryReader): UpdatePredictionPipelineRunRequest;
}

export namespace UpdatePredictionPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRunSpec.AsObject,
  }
}

export class UpdatePredictionPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionPipelineRunResponse): UpdatePredictionPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionPipelineRunResponse;
  static deserializeBinaryFromReader(message: UpdatePredictionPipelineRunResponse, reader: jspb.BinaryReader): UpdatePredictionPipelineRunResponse;
}

export namespace UpdatePredictionPipelineRunResponse {
  export type AsObject = {
  }
}

export class GetPredictionPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictionPipelineRunRequest;

  getName(): string;
  setName(value: string): GetPredictionPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionPipelineRunRequest): GetPredictionPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictionPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionPipelineRunRequest;
  static deserializeBinaryFromReader(message: GetPredictionPipelineRunRequest, reader: jspb.BinaryReader): GetPredictionPipelineRunRequest;
}

export namespace GetPredictionPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPredictionPipelineRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun): GetPredictionPipelineRunResponse;
  hasItem(): boolean;
  clearItem(): GetPredictionPipelineRunResponse;

  getYaml(): string;
  setYaml(value: string): GetPredictionPipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionPipelineRunResponse): GetPredictionPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetPredictionPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionPipelineRunResponse;
  static deserializeBinaryFromReader(message: GetPredictionPipelineRunResponse, reader: jspb.BinaryReader): GetPredictionPipelineRunResponse;
}

export namespace GetPredictionPipelineRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun.AsObject,
    yaml: string,
  }
}

export class DeletePredictionPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictionPipelineRunRequest;

  getName(): string;
  setName(value: string): DeletePredictionPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionPipelineRunRequest): DeletePredictionPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionPipelineRunRequest;
  static deserializeBinaryFromReader(message: DeletePredictionPipelineRunRequest, reader: jspb.BinaryReader): DeletePredictionPipelineRunRequest;
}

export namespace DeletePredictionPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeletePredictionPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionPipelineRunResponse): DeletePredictionPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionPipelineRunResponse;
  static deserializeBinaryFromReader(message: DeletePredictionPipelineRunResponse, reader: jspb.BinaryReader): DeletePredictionPipelineRunResponse;
}

export namespace DeletePredictionPipelineRunResponse {
  export type AsObject = {
  }
}

export class DownloadPredictionPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadPredictionPipelineRunRequest;

  getName(): string;
  setName(value: string): DownloadPredictionPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionPipelineRunRequest): DownloadPredictionPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionPipelineRunRequest;
  static deserializeBinaryFromReader(message: DownloadPredictionPipelineRunRequest, reader: jspb.BinaryReader): DownloadPredictionPipelineRunRequest;
}

export namespace DownloadPredictionPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadPredictionPipelineRunResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadPredictionPipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionPipelineRunResponse): DownloadPredictionPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionPipelineRunResponse;
  static deserializeBinaryFromReader(message: DownloadPredictionPipelineRunResponse, reader: jspb.BinaryReader): DownloadPredictionPipelineRunResponse;
}

export namespace DownloadPredictionPipelineRunResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

