import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListModelPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelPipelinesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelPipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelPipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelPipelinesRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListModelPipelinesRequest;

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
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListModelPipelinesResponse extends jspb.Message {
  getModelpipelines(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineList | undefined;
  setModelpipelines(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineList): ListModelPipelinesResponse;
  hasModelpipelines(): boolean;
  clearModelpipelines(): ListModelPipelinesResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelinesResponse): ListModelPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelinesResponse;
  static deserializeBinaryFromReader(message: ListModelPipelinesResponse, reader: jspb.BinaryReader): ListModelPipelinesResponse;
}

export namespace ListModelPipelinesResponse {
  export type AsObject = {
    modelpipelines?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineList.AsObject,
    nextPageToken: string,
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
  getModelpipeline(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setModelpipeline(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): CreateModelPipelineRequest;
  hasModelpipeline(): boolean;
  clearModelpipeline(): CreateModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineRequest): CreateModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineRequest;
  static deserializeBinaryFromReader(message: CreateModelPipelineRequest, reader: jspb.BinaryReader): CreateModelPipelineRequest;
}

export namespace CreateModelPipelineRequest {
  export type AsObject = {
    modelpipeline?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
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
  getModelpipeline(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setModelpipeline(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): UpdateModelPipelineRequest;
  hasModelpipeline(): boolean;
  clearModelpipeline(): UpdateModelPipelineRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateModelPipelineRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineRequest): UpdateModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateModelPipelineRequest, reader: jspb.BinaryReader): UpdateModelPipelineRequest;
}

export namespace UpdateModelPipelineRequest {
  export type AsObject = {
    modelpipeline?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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
  getModelpipeline(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setModelpipeline(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): GetModelPipelineResponse;
  hasModelpipeline(): boolean;
  clearModelpipeline(): GetModelPipelineResponse;

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
    modelpipeline?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
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
  getModelpipeline(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setModelpipeline(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): RunModelPipelineRequest;
  hasModelpipeline(): boolean;
  clearModelpipeline(): RunModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunModelPipelineRequest): RunModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RunModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunModelPipelineRequest;
  static deserializeBinaryFromReader(message: RunModelPipelineRequest, reader: jspb.BinaryReader): RunModelPipelineRequest;
}

export namespace RunModelPipelineRequest {
  export type AsObject = {
    modelpipeline?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
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

export class PauseModelPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelPipelineResponse): PauseModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: PauseModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelPipelineResponse;
  static deserializeBinaryFromReader(message: PauseModelPipelineResponse, reader: jspb.BinaryReader): PauseModelPipelineResponse;
}

export namespace PauseModelPipelineResponse {
  export type AsObject = {
  }
}

export class PauseModelPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseModelPipelineRequest;

  getName(): string;
  setName(value: string): PauseModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelPipelineRequest): PauseModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: PauseModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelPipelineRequest;
  static deserializeBinaryFromReader(message: PauseModelPipelineRequest, reader: jspb.BinaryReader): PauseModelPipelineRequest;
}

export namespace PauseModelPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeModelPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelPipelineResponse): ResumeModelPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeModelPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelPipelineResponse;
  static deserializeBinaryFromReader(message: ResumeModelPipelineResponse, reader: jspb.BinaryReader): ResumeModelPipelineResponse;
}

export namespace ResumeModelPipelineResponse {
  export type AsObject = {
  }
}

export class ResumeModelPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeModelPipelineRequest;

  getName(): string;
  setName(value: string): ResumeModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelPipelineRequest): ResumeModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelPipelineRequest;
  static deserializeBinaryFromReader(message: ResumeModelPipelineRequest, reader: jspb.BinaryReader): ResumeModelPipelineRequest;
}

export namespace ResumeModelPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

