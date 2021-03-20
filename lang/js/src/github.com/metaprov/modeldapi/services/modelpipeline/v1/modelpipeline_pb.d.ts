import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListModelPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelPipelinesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelinesRequest): ListModelPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelinesRequest;
  static deserializeBinaryFromReader(message: ListModelPipelinesRequest, reader: jspb.BinaryReader): ListModelPipelinesRequest;
}

export namespace ListModelPipelinesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListModelPipelinesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineList): ListModelPipelinesResponse;
  hasItems(): boolean;
  clearItems(): ListModelPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelinesResponse): ListModelPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelinesResponse;
  static deserializeBinaryFromReader(message: ListModelPipelinesResponse, reader: jspb.BinaryReader): ListModelPipelinesResponse;
}

export namespace ListModelPipelinesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineList.AsObject,
  }
}

export class ModelPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineResponse): ModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineResponse;
  static deserializeBinaryFromReader(message: ModelPipelineResponse, reader: jspb.BinaryReader): ModelPipelineResponse;
}

export namespace ModelPipelineResponse {
  export type AsObject = {
  }
}

export class CreateModelPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): CreateModelPipelineRequest;
  hasItem(): boolean;
  clearItem(): CreateModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineRequest): CreateModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineRequest;
  static deserializeBinaryFromReader(message: CreateModelPipelineRequest, reader: jspb.BinaryReader): CreateModelPipelineRequest;
}

export namespace CreateModelPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
  }
}

export class CreateModelPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineResponse): CreateModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineResponse;
  static deserializeBinaryFromReader(message: CreateModelPipelineResponse, reader: jspb.BinaryReader): CreateModelPipelineResponse;
}

export namespace CreateModelPipelineResponse {
  export type AsObject = {
  }
}

export class UpdateModelPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): UpdateModelPipelineRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineRequest): UpdateModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateModelPipelineRequest, reader: jspb.BinaryReader): UpdateModelPipelineRequest;
}

export namespace UpdateModelPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
  }
}

export class UpdateModelPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineResponse): UpdateModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineResponse;
  static deserializeBinaryFromReader(message: UpdateModelPipelineResponse, reader: jspb.BinaryReader): UpdateModelPipelineResponse;
}

export namespace UpdateModelPipelineResponse {
  export type AsObject = {
  }
}

export class GetModelPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelPipelineRequest;

  getName(): string;
  setName(value: string): GetModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelPipelineRequest): GetModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelPipelineRequest;
  static deserializeBinaryFromReader(message: GetModelPipelineRequest, reader: jspb.BinaryReader): GetModelPipelineRequest;
}

export namespace GetModelPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelPipelineResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): GetModelPipelineResponse;
  hasItem(): boolean;
  clearItem(): GetModelPipelineResponse;

  getYaml(): string;
  setYaml(value: string): GetModelPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelPipelineResponse): GetModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelPipelineResponse;
  static deserializeBinaryFromReader(message: GetModelPipelineResponse, reader: jspb.BinaryReader): GetModelPipelineResponse;
}

export namespace GetModelPipelineResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
    yaml: string,
  }
}

export class DeleteModelPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelPipelineRequest;

  getName(): string;
  setName(value: string): DeleteModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelPipelineRequest): DeleteModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteModelPipelineRequest, reader: jspb.BinaryReader): DeleteModelPipelineRequest;
}

export namespace DeleteModelPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelPipelineResponse): DeleteModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelPipelineResponse;
  static deserializeBinaryFromReader(message: DeleteModelPipelineResponse, reader: jspb.BinaryReader): DeleteModelPipelineResponse;
}

export namespace DeleteModelPipelineResponse {
  export type AsObject = {
  }
}

export class RunModelPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): RunModelPipelineRequest;
  hasItem(): boolean;
  clearItem(): RunModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunModelPipelineRequest): RunModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RunModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunModelPipelineRequest;
  static deserializeBinaryFromReader(message: RunModelPipelineRequest, reader: jspb.BinaryReader): RunModelPipelineRequest;
}

export namespace RunModelPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
  }
}

export class RunModelPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunModelPipelineResponse): RunModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: RunModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunModelPipelineResponse;
  static deserializeBinaryFromReader(message: RunModelPipelineResponse, reader: jspb.BinaryReader): RunModelPipelineResponse;
}

export namespace RunModelPipelineResponse {
  export type AsObject = {
  }
}

