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
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun): CreateModelPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): CreateModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineRunRequest): CreateModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateModelPipelineRunRequest, reader: jspb.BinaryReader): CreateModelPipelineRunRequest;
}

export namespace CreateModelPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.AsObject,
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
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun): UpdateModelPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineRunRequest): UpdateModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateModelPipelineRunRequest, reader: jspb.BinaryReader): UpdateModelPipelineRunRequest;
}

export namespace UpdateModelPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.AsObject,
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

export class ApproveModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ApproveModelPipelineRunRequest;

  getName(): string;
  setName(value: string): ApproveModelPipelineRunRequest;

  getStage(): string;
  setStage(value: string): ApproveModelPipelineRunRequest;

  getAccount(): string;
  setAccount(value: string): ApproveModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveModelPipelineRunRequest): ApproveModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ApproveModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: ApproveModelPipelineRunRequest, reader: jspb.BinaryReader): ApproveModelPipelineRunRequest;
}

export namespace ApproveModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    stage: string,
    account: string,
  }
}

export class ApproveModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveModelPipelineRunResponse): ApproveModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ApproveModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: ApproveModelPipelineRunResponse, reader: jspb.BinaryReader): ApproveModelPipelineRunResponse;
}

export namespace ApproveModelPipelineRunResponse {
  export type AsObject = {
  }
}

export class DenyModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DenyModelPipelineRunRequest;

  getName(): string;
  setName(value: string): DenyModelPipelineRunRequest;

  getStage(): string;
  setStage(value: string): DenyModelPipelineRunRequest;

  getAccount(): string;
  setAccount(value: string): DenyModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenyModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DenyModelPipelineRunRequest): DenyModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DenyModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenyModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: DenyModelPipelineRunRequest, reader: jspb.BinaryReader): DenyModelPipelineRunRequest;
}

export namespace DenyModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    stage: string,
    account: string,
  }
}

export class DenyModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenyModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DenyModelPipelineRunResponse): DenyModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: DenyModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenyModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: DenyModelPipelineRunResponse, reader: jspb.BinaryReader): DenyModelPipelineRunResponse;
}

export namespace DenyModelPipelineRunResponse {
  export type AsObject = {
  }
}

export class PauseModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelPipelineRunResponse): PauseModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: PauseModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: PauseModelPipelineRunResponse, reader: jspb.BinaryReader): PauseModelPipelineRunResponse;
}

export namespace PauseModelPipelineRunResponse {
  export type AsObject = {
  }
}

export class PauseModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseModelPipelineRunRequest;

  getName(): string;
  setName(value: string): PauseModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelPipelineRunRequest): PauseModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: PauseModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: PauseModelPipelineRunRequest, reader: jspb.BinaryReader): PauseModelPipelineRunRequest;
}

export namespace PauseModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeModelPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelPipelineRunResponse): ResumeModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: ResumeModelPipelineRunResponse, reader: jspb.BinaryReader): ResumeModelPipelineRunResponse;
}

export namespace ResumeModelPipelineRunResponse {
  export type AsObject = {
  }
}

export class ResumeModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeModelPipelineRunRequest;

  getName(): string;
  setName(value: string): ResumeModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelPipelineRunRequest): ResumeModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: ResumeModelPipelineRunRequest, reader: jspb.BinaryReader): ResumeModelPipelineRunRequest;
}

export namespace ResumeModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

