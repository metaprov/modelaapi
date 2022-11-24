import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListModelClassRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelClassRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelClassRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelClassRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelClassRunsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListModelClassRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelClassRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelClassRunsRequest): ListModelClassRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelClassRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelClassRunsRequest;
  static deserializeBinaryFromReader(message: ListModelClassRunsRequest, reader: jspb.BinaryReader): ListModelClassRunsRequest;
}

export namespace ListModelClassRunsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListModelClassRunsResponse extends jspb.Message {
  getModelclassruns(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRunList | undefined;
  setModelclassruns(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRunList): ListModelClassRunsResponse;
  hasModelclassruns(): boolean;
  clearModelclassruns(): ListModelClassRunsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelClassRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelClassRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelClassRunsResponse): ListModelClassRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelClassRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelClassRunsResponse;
  static deserializeBinaryFromReader(message: ListModelClassRunsResponse, reader: jspb.BinaryReader): ListModelClassRunsResponse;
}

export namespace ListModelClassRunsResponse {
  export type AsObject = {
    modelclassruns?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRunList.AsObject,
    nextPageToken: string,
  }
}

export class ModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassRunResponse): ModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: ModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassRunResponse;
  static deserializeBinaryFromReader(message: ModelClassRunResponse, reader: jspb.BinaryReader): ModelClassRunResponse;
}

export namespace ModelClassRunResponse {
  export type AsObject = {
  }
}

export class CreateModelClassRunRequest extends jspb.Message {
  getModelclassrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun | undefined;
  setModelclassrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun): CreateModelClassRunRequest;
  hasModelclassrun(): boolean;
  clearModelclassrun(): CreateModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelClassRunRequest): CreateModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelClassRunRequest;
  static deserializeBinaryFromReader(message: CreateModelClassRunRequest, reader: jspb.BinaryReader): CreateModelClassRunRequest;
}

export namespace CreateModelClassRunRequest {
  export type AsObject = {
    modelclassrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.AsObject,
  }
}

export class CreateModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelClassRunResponse): CreateModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelClassRunResponse;
  static deserializeBinaryFromReader(message: CreateModelClassRunResponse, reader: jspb.BinaryReader): CreateModelClassRunResponse;
}

export namespace CreateModelClassRunResponse {
  export type AsObject = {
  }
}

export class UpdateModelClassRunRequest extends jspb.Message {
  getModelclassrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun | undefined;
  setModelclassrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun): UpdateModelClassRunRequest;
  hasModelclassrun(): boolean;
  clearModelclassrun(): UpdateModelClassRunRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateModelClassRunRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelClassRunRequest): UpdateModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelClassRunRequest;
  static deserializeBinaryFromReader(message: UpdateModelClassRunRequest, reader: jspb.BinaryReader): UpdateModelClassRunRequest;
}

export namespace UpdateModelClassRunRequest {
  export type AsObject = {
    modelclassrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelClassRunResponse): UpdateModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelClassRunResponse;
  static deserializeBinaryFromReader(message: UpdateModelClassRunResponse, reader: jspb.BinaryReader): UpdateModelClassRunResponse;
}

export namespace UpdateModelClassRunResponse {
  export type AsObject = {
  }
}

export class GetModelClassRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelClassRunRequest;

  getName(): string;
  setName(value: string): GetModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelClassRunRequest): GetModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelClassRunRequest;
  static deserializeBinaryFromReader(message: GetModelClassRunRequest, reader: jspb.BinaryReader): GetModelClassRunRequest;
}

export namespace GetModelClassRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelClassRunResponse extends jspb.Message {
  getModelclassrun(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun | undefined;
  setModelclassrun(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun): GetModelClassRunResponse;
  hasModelclassrun(): boolean;
  clearModelclassrun(): GetModelClassRunResponse;

  getYaml(): string;
  setYaml(value: string): GetModelClassRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelClassRunResponse): GetModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelClassRunResponse;
  static deserializeBinaryFromReader(message: GetModelClassRunResponse, reader: jspb.BinaryReader): GetModelClassRunResponse;
}

export namespace GetModelClassRunResponse {
  export type AsObject = {
    modelclassrun?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.AsObject,
    yaml: string,
  }
}

export class DeleteModelClassRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelClassRunRequest;

  getName(): string;
  setName(value: string): DeleteModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelClassRunRequest): DeleteModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelClassRunRequest;
  static deserializeBinaryFromReader(message: DeleteModelClassRunRequest, reader: jspb.BinaryReader): DeleteModelClassRunRequest;
}

export namespace DeleteModelClassRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelClassRunResponse): DeleteModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelClassRunResponse;
  static deserializeBinaryFromReader(message: DeleteModelClassRunResponse, reader: jspb.BinaryReader): DeleteModelClassRunResponse;
}

export namespace DeleteModelClassRunResponse {
  export type AsObject = {
  }
}

export class ApproveModelClassRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ApproveModelClassRunRequest;

  getName(): string;
  setName(value: string): ApproveModelClassRunRequest;

  getStage(): string;
  setStage(value: string): ApproveModelClassRunRequest;

  getAccount(): string;
  setAccount(value: string): ApproveModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveModelClassRunRequest): ApproveModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: ApproveModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveModelClassRunRequest;
  static deserializeBinaryFromReader(message: ApproveModelClassRunRequest, reader: jspb.BinaryReader): ApproveModelClassRunRequest;
}

export namespace ApproveModelClassRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    stage: string,
    account: string,
  }
}

export class ApproveModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveModelClassRunResponse): ApproveModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: ApproveModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveModelClassRunResponse;
  static deserializeBinaryFromReader(message: ApproveModelClassRunResponse, reader: jspb.BinaryReader): ApproveModelClassRunResponse;
}

export namespace ApproveModelClassRunResponse {
  export type AsObject = {
  }
}

export class DenyModelClassRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DenyModelClassRunRequest;

  getName(): string;
  setName(value: string): DenyModelClassRunRequest;

  getStage(): string;
  setStage(value: string): DenyModelClassRunRequest;

  getAccount(): string;
  setAccount(value: string): DenyModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenyModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DenyModelClassRunRequest): DenyModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: DenyModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenyModelClassRunRequest;
  static deserializeBinaryFromReader(message: DenyModelClassRunRequest, reader: jspb.BinaryReader): DenyModelClassRunRequest;
}

export namespace DenyModelClassRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    stage: string,
    account: string,
  }
}

export class DenyModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenyModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DenyModelClassRunResponse): DenyModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: DenyModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenyModelClassRunResponse;
  static deserializeBinaryFromReader(message: DenyModelClassRunResponse, reader: jspb.BinaryReader): DenyModelClassRunResponse;
}

export namespace DenyModelClassRunResponse {
  export type AsObject = {
  }
}

export class PauseModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelClassRunResponse): PauseModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: PauseModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelClassRunResponse;
  static deserializeBinaryFromReader(message: PauseModelClassRunResponse, reader: jspb.BinaryReader): PauseModelClassRunResponse;
}

export namespace PauseModelClassRunResponse {
  export type AsObject = {
  }
}

export class PauseModelClassRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseModelClassRunRequest;

  getName(): string;
  setName(value: string): PauseModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseModelClassRunRequest): PauseModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: PauseModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseModelClassRunRequest;
  static deserializeBinaryFromReader(message: PauseModelClassRunRequest, reader: jspb.BinaryReader): PauseModelClassRunRequest;
}

export namespace PauseModelClassRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelClassRunResponse): ResumeModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelClassRunResponse;
  static deserializeBinaryFromReader(message: ResumeModelClassRunResponse, reader: jspb.BinaryReader): ResumeModelClassRunResponse;
}

export namespace ResumeModelClassRunResponse {
  export type AsObject = {
  }
}

export class ResumeModelClassRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeModelClassRunRequest;

  getName(): string;
  setName(value: string): ResumeModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeModelClassRunRequest): ResumeModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeModelClassRunRequest;
  static deserializeBinaryFromReader(message: ResumeModelClassRunRequest, reader: jspb.BinaryReader): ResumeModelClassRunRequest;
}

export namespace ResumeModelClassRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class AbortModelClassRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortModelClassRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbortModelClassRunResponse): AbortModelClassRunResponse.AsObject;
  static serializeBinaryToWriter(message: AbortModelClassRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortModelClassRunResponse;
  static deserializeBinaryFromReader(message: AbortModelClassRunResponse, reader: jspb.BinaryReader): AbortModelClassRunResponse;
}

export namespace AbortModelClassRunResponse {
  export type AsObject = {
  }
}

export class AbortModelClassRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): AbortModelClassRunRequest;

  getName(): string;
  setName(value: string): AbortModelClassRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbortModelClassRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbortModelClassRunRequest): AbortModelClassRunRequest.AsObject;
  static serializeBinaryToWriter(message: AbortModelClassRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbortModelClassRunRequest;
  static deserializeBinaryFromReader(message: AbortModelClassRunRequest, reader: jspb.BinaryReader): AbortModelClassRunRequest;
}

export namespace AbortModelClassRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

