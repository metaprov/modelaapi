import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListModelCompilerRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelCompilerRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelCompilerRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelCompilerRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelCompilerRunsRequest): ListModelCompilerRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelCompilerRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelCompilerRunsRequest;
  static deserializeBinaryFromReader(message: ListModelCompilerRunsRequest, reader: jspb.BinaryReader): ListModelCompilerRunsRequest;
}

export namespace ListModelCompilerRunsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListModelCompilerRunsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRunList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRunList): ListModelCompilerRunsResponse;
  hasItems(): boolean;
  clearItems(): ListModelCompilerRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelCompilerRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelCompilerRunsResponse): ListModelCompilerRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelCompilerRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelCompilerRunsResponse;
  static deserializeBinaryFromReader(message: ListModelCompilerRunsResponse, reader: jspb.BinaryReader): ListModelCompilerRunsResponse;
}

export namespace ListModelCompilerRunsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRunList.AsObject,
  }
}

export class ModelCompilerRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelCompilerRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelCompilerRunResponse): ModelCompilerRunResponse.AsObject;
  static serializeBinaryToWriter(message: ModelCompilerRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelCompilerRunResponse;
  static deserializeBinaryFromReader(message: ModelCompilerRunResponse, reader: jspb.BinaryReader): ModelCompilerRunResponse;
}

export namespace ModelCompilerRunResponse {
  export type AsObject = {
  }
}

export class CreateModelCompilerRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun): CreateModelCompilerRunRequest;
  hasItem(): boolean;
  clearItem(): CreateModelCompilerRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelCompilerRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelCompilerRunRequest): CreateModelCompilerRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelCompilerRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelCompilerRunRequest;
  static deserializeBinaryFromReader(message: CreateModelCompilerRunRequest, reader: jspb.BinaryReader): CreateModelCompilerRunRequest;
}

export namespace CreateModelCompilerRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun.AsObject,
  }
}

export class CreateModelCompilerRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelCompilerRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelCompilerRunResponse): CreateModelCompilerRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelCompilerRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelCompilerRunResponse;
  static deserializeBinaryFromReader(message: CreateModelCompilerRunResponse, reader: jspb.BinaryReader): CreateModelCompilerRunResponse;
}

export namespace CreateModelCompilerRunResponse {
  export type AsObject = {
  }
}

export class UpdateModelCompilerRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun): UpdateModelCompilerRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelCompilerRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelCompilerRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelCompilerRunRequest): UpdateModelCompilerRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelCompilerRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelCompilerRunRequest;
  static deserializeBinaryFromReader(message: UpdateModelCompilerRunRequest, reader: jspb.BinaryReader): UpdateModelCompilerRunRequest;
}

export namespace UpdateModelCompilerRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun.AsObject,
  }
}

export class UpdateModelCompilerRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelCompilerRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelCompilerRunResponse): UpdateModelCompilerRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelCompilerRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelCompilerRunResponse;
  static deserializeBinaryFromReader(message: UpdateModelCompilerRunResponse, reader: jspb.BinaryReader): UpdateModelCompilerRunResponse;
}

export namespace UpdateModelCompilerRunResponse {
  export type AsObject = {
  }
}

export class GetModelCompilerRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelCompilerRunRequest;

  getName(): string;
  setName(value: string): GetModelCompilerRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelCompilerRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelCompilerRunRequest): GetModelCompilerRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelCompilerRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelCompilerRunRequest;
  static deserializeBinaryFromReader(message: GetModelCompilerRunRequest, reader: jspb.BinaryReader): GetModelCompilerRunRequest;
}

export namespace GetModelCompilerRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelCompilerRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun): GetModelCompilerRunResponse;
  hasItem(): boolean;
  clearItem(): GetModelCompilerRunResponse;

  getYaml(): string;
  setYaml(value: string): GetModelCompilerRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelCompilerRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelCompilerRunResponse): GetModelCompilerRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelCompilerRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelCompilerRunResponse;
  static deserializeBinaryFromReader(message: GetModelCompilerRunResponse, reader: jspb.BinaryReader): GetModelCompilerRunResponse;
}

export namespace GetModelCompilerRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelCompilerRun.AsObject,
    yaml: string,
  }
}

export class DeleteModelCompilerRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelCompilerRunRequest;

  getName(): string;
  setName(value: string): DeleteModelCompilerRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelCompilerRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelCompilerRunRequest): DeleteModelCompilerRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelCompilerRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelCompilerRunRequest;
  static deserializeBinaryFromReader(message: DeleteModelCompilerRunRequest, reader: jspb.BinaryReader): DeleteModelCompilerRunRequest;
}

export namespace DeleteModelCompilerRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelCompilerRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelCompilerRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelCompilerRunResponse): DeleteModelCompilerRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelCompilerRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelCompilerRunResponse;
  static deserializeBinaryFromReader(message: DeleteModelCompilerRunResponse, reader: jspb.BinaryReader): DeleteModelCompilerRunResponse;
}

export namespace DeleteModelCompilerRunResponse {
  export type AsObject = {
  }
}

