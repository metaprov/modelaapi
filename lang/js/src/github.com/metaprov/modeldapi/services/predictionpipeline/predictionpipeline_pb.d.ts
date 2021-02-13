import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListPredictionPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictionPipelinesRequest;

  getName(): string;
  setName(value: string): ListPredictionPipelinesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPredictionPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionPipelinesRequest): ListPredictionPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictionPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionPipelinesRequest;
  static deserializeBinaryFromReader(message: ListPredictionPipelinesRequest, reader: jspb.BinaryReader): ListPredictionPipelinesRequest;
}

export namespace ListPredictionPipelinesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListPredictionPipelinesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineList): ListPredictionPipelinesResponse;
  hasItems(): boolean;
  clearItems(): ListPredictionPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionPipelinesResponse): ListPredictionPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictionPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionPipelinesResponse;
  static deserializeBinaryFromReader(message: ListPredictionPipelinesResponse, reader: jspb.BinaryReader): ListPredictionPipelinesResponse;
}

export namespace ListPredictionPipelinesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineList.AsObject,
  }
}

export class CreatePredictionPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionPipelineResponse): CreatePredictionPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionPipelineResponse;
  static deserializeBinaryFromReader(message: CreatePredictionPipelineResponse, reader: jspb.BinaryReader): CreatePredictionPipelineResponse;
}

export namespace CreatePredictionPipelineResponse {
  export type AsObject = {
  }
}

export class CreatePredictionPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreatePredictionPipelineRequest;

  getName(): string;
  setName(value: string): CreatePredictionPipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreatePredictionPipelineRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineSpec): CreatePredictionPipelineRequest;
  hasSpec(): boolean;
  clearSpec(): CreatePredictionPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionPipelineRequest): CreatePredictionPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionPipelineRequest;
  static deserializeBinaryFromReader(message: CreatePredictionPipelineRequest, reader: jspb.BinaryReader): CreatePredictionPipelineRequest;
}

export namespace CreatePredictionPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineSpec.AsObject,
  }
}

export class UpdatePredictionPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdatePredictionPipelineRequest;

  getName(): string;
  setName(value: string): UpdatePredictionPipelineRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdatePredictionPipelineRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineSpec): UpdatePredictionPipelineRequest;
  hasSpec(): boolean;
  clearSpec(): UpdatePredictionPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionPipelineRequest): UpdatePredictionPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionPipelineRequest;
  static deserializeBinaryFromReader(message: UpdatePredictionPipelineRequest, reader: jspb.BinaryReader): UpdatePredictionPipelineRequest;
}

export namespace UpdatePredictionPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineSpec.AsObject,
  }
}

export class UpdatePredictionPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionPipelineResponse): UpdatePredictionPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionPipelineResponse;
  static deserializeBinaryFromReader(message: UpdatePredictionPipelineResponse, reader: jspb.BinaryReader): UpdatePredictionPipelineResponse;
}

export namespace UpdatePredictionPipelineResponse {
  export type AsObject = {
  }
}

export class GetPredictionPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictionPipelineRequest;

  getName(): string;
  setName(value: string): GetPredictionPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionPipelineRequest): GetPredictionPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictionPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionPipelineRequest;
  static deserializeBinaryFromReader(message: GetPredictionPipelineRequest, reader: jspb.BinaryReader): GetPredictionPipelineRequest;
}

export namespace GetPredictionPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPredictionPipelineResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline): GetPredictionPipelineResponse;
  hasItem(): boolean;
  clearItem(): GetPredictionPipelineResponse;

  getYaml(): string;
  setYaml(value: string): GetPredictionPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionPipelineResponse): GetPredictionPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: GetPredictionPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionPipelineResponse;
  static deserializeBinaryFromReader(message: GetPredictionPipelineResponse, reader: jspb.BinaryReader): GetPredictionPipelineResponse;
}

export namespace GetPredictionPipelineResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline.AsObject,
    yaml: string,
  }
}

export class DeletePredictionPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictionPipelineRequest;

  getName(): string;
  setName(value: string): DeletePredictionPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionPipelineRequest): DeletePredictionPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionPipelineRequest;
  static deserializeBinaryFromReader(message: DeletePredictionPipelineRequest, reader: jspb.BinaryReader): DeletePredictionPipelineRequest;
}

export namespace DeletePredictionPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeletePredictionPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionPipelineResponse): DeletePredictionPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionPipelineResponse;
  static deserializeBinaryFromReader(message: DeletePredictionPipelineResponse, reader: jspb.BinaryReader): DeletePredictionPipelineResponse;
}

export namespace DeletePredictionPipelineResponse {
  export type AsObject = {
  }
}

export class DownloadPredictionPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadPredictionPipelineRequest;

  getName(): string;
  setName(value: string): DownloadPredictionPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionPipelineRequest): DownloadPredictionPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionPipelineRequest;
  static deserializeBinaryFromReader(message: DownloadPredictionPipelineRequest, reader: jspb.BinaryReader): DownloadPredictionPipelineRequest;
}

export namespace DownloadPredictionPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadPredictionPipelineResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadPredictionPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPredictionPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPredictionPipelineResponse): DownloadPredictionPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadPredictionPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPredictionPipelineResponse;
  static deserializeBinaryFromReader(message: DownloadPredictionPipelineResponse, reader: jspb.BinaryReader): DownloadPredictionPipelineResponse;
}

export namespace DownloadPredictionPipelineResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

