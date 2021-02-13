import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListModelPipelineRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelPipelineRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelPipelineRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelineRunsRequest): ListModelPipelineRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListModelPipelineRunsRequest, reader: jspb.BinaryReader): ListModelPipelineRunsRequest;
}

export namespace ListModelPipelineRunsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListModelPipelineRunsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunList): ListModelPipelineRunsResponse;
  hasItems(): boolean;
  clearItems(): ListModelPipelineRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelineRunsResponse): ListModelPipelineRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListModelPipelineRunsResponse, reader: jspb.BinaryReader): ListModelPipelineRunsResponse;
}

export namespace ListModelPipelineRunsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunList.AsObject,
  }
}

export class ModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPipelineRunResponse): ModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: ModelPipelineRunResponse, reader: jspb.BinaryReader): ModelPipelineRunResponse;
}

export namespace ModelPipelineRunResponse {
  export type AsObject = {
  }
}

export class CreateModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateModelPipelineRunRequest;

  getName(): string;
  setName(value: string): CreateModelPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateModelPipelineRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunSpec): CreateModelPipelineRunRequest;
  hasSpec(): boolean;
  clearSpec(): CreateModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineRunRequest): CreateModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateModelPipelineRunRequest, reader: jspb.BinaryReader): CreateModelPipelineRunRequest;
}

export namespace CreateModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunSpec.AsObject,
  }
}

export class CreateModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineRunResponse): CreateModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: CreateModelPipelineRunResponse, reader: jspb.BinaryReader): CreateModelPipelineRunResponse;
}

export namespace CreateModelPipelineRunResponse {
  export type AsObject = {
  }
}

export class UpdateModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateModelPipelineRunRequest;

  getName(): string;
  setName(value: string): UpdateModelPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateModelPipelineRunRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunSpec): UpdateModelPipelineRunRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineRunRequest): UpdateModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateModelPipelineRunRequest, reader: jspb.BinaryReader): UpdateModelPipelineRunRequest;
}

export namespace UpdateModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRunSpec.AsObject,
  }
}

export class UpdateModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineRunResponse): UpdateModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: UpdateModelPipelineRunResponse, reader: jspb.BinaryReader): UpdateModelPipelineRunResponse;
}

export namespace UpdateModelPipelineRunResponse {
  export type AsObject = {
  }
}

export class GetModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelPipelineRunRequest;

  getName(): string;
  setName(value: string): GetModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelPipelineRunRequest): GetModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: GetModelPipelineRunRequest, reader: jspb.BinaryReader): GetModelPipelineRunRequest;
}

export namespace GetModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelPipelineRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun): GetModelPipelineRunResponse;
  hasItem(): boolean;
  clearItem(): GetModelPipelineRunResponse;

  getYaml(): string;
  setYaml(value: string): GetModelPipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelPipelineRunResponse): GetModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: GetModelPipelineRunResponse, reader: jspb.BinaryReader): GetModelPipelineRunResponse;
}

export namespace GetModelPipelineRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.AsObject,
    yaml: string,
  }
}

export class DeleteModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelPipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelPipelineRunRequest): DeleteModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteModelPipelineRunRequest, reader: jspb.BinaryReader): DeleteModelPipelineRunRequest;
}

export namespace DeleteModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelPipelineRunResponse): DeleteModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: DeleteModelPipelineRunResponse, reader: jspb.BinaryReader): DeleteModelPipelineRunResponse;
}

export namespace DeleteModelPipelineRunResponse {
  export type AsObject = {
  }
}

