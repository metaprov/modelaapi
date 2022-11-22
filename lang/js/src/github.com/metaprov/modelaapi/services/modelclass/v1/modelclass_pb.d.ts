import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class GetModelClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelClassRequest;

  getName(): string;
  setName(value: string): GetModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelClassRequest): GetModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelClassRequest;
  static deserializeBinaryFromReader(message: GetModelClassRequest, reader: jspb.BinaryReader): GetModelClassRequest;
}

export namespace GetModelClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetModelClassResponse extends jspb.Message {
  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): GetModelClassResponse;
  hasModelclass(): boolean;
  clearModelclass(): GetModelClassResponse;

  getYaml(): string;
  setYaml(value: string): GetModelClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelClassResponse): GetModelClassResponse.AsObject;
  static serializeBinaryToWriter(message: GetModelClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelClassResponse;
  static deserializeBinaryFromReader(message: GetModelClassResponse, reader: jspb.BinaryReader): GetModelClassResponse;
}

export namespace GetModelClassResponse {
  export type AsObject = {
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    yaml: string,
  }
}

export class ListModelClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelClassRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelClassRequest): ListModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelClassRequest;
  static deserializeBinaryFromReader(message: ListModelClassRequest, reader: jspb.BinaryReader): ListModelClassRequest;
}

export namespace ListModelClassRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListModelClassResponse extends jspb.Message {
  getModelclasses(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassList | undefined;
  setModelclasses(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassList): ListModelClassResponse;
  hasModelclasses(): boolean;
  clearModelclasses(): ListModelClassResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelClassResponse): ListModelClassResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelClassResponse;
  static deserializeBinaryFromReader(message: ListModelClassResponse, reader: jspb.BinaryReader): ListModelClassResponse;
}

export namespace ListModelClassResponse {
  export type AsObject = {
    modelclasses?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassList.AsObject,
    nextPageToken: string,
  }
}

export class CreateModelClassRequest extends jspb.Message {
  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): CreateModelClassRequest;
  hasModelclass(): boolean;
  clearModelclass(): CreateModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelClassRequest): CreateModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelClassRequest;
  static deserializeBinaryFromReader(message: CreateModelClassRequest, reader: jspb.BinaryReader): CreateModelClassRequest;
}

export namespace CreateModelClassRequest {
  export type AsObject = {
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
  }
}

export class CreateModelClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelClassResponse): CreateModelClassResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelClassResponse;
  static deserializeBinaryFromReader(message: CreateModelClassResponse, reader: jspb.BinaryReader): CreateModelClassResponse;
}

export namespace CreateModelClassResponse {
  export type AsObject = {
  }
}

export class UpdateModelClassRequest extends jspb.Message {
  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): UpdateModelClassRequest;
  hasModelclass(): boolean;
  clearModelclass(): UpdateModelClassRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateModelClassRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelClassRequest): UpdateModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelClassRequest;
  static deserializeBinaryFromReader(message: UpdateModelClassRequest, reader: jspb.BinaryReader): UpdateModelClassRequest;
}

export namespace UpdateModelClassRequest {
  export type AsObject = {
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateModelClassProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateModelClassProfileRequest;

  getName(): string;
  setName(value: string): CreateModelClassProfileRequest;

  getModelclassesList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelclassesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): CreateModelClassProfileRequest;
  clearModelclassesList(): CreateModelClassProfileRequest;
  addModelclasses(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelClassProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelClassProfileRequest): CreateModelClassProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelClassProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelClassProfileRequest;
  static deserializeBinaryFromReader(message: CreateModelClassProfileRequest, reader: jspb.BinaryReader): CreateModelClassProfileRequest;
}

export namespace CreateModelClassProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    modelclassesList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class CreateModelClassProfileResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateModelClassProfileResponse;

  getName(): string;
  setName(value: string): CreateModelClassProfileResponse;

  getUri(): string;
  setUri(value: string): CreateModelClassProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelClassProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelClassProfileResponse): CreateModelClassProfileResponse.AsObject;
  static serializeBinaryToWriter(message: CreateModelClassProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelClassProfileResponse;
  static deserializeBinaryFromReader(message: CreateModelClassProfileResponse, reader: jspb.BinaryReader): CreateModelClassProfileResponse;
}

export namespace CreateModelClassProfileResponse {
  export type AsObject = {
    namespace: string,
    name: string,
    uri: string,
  }
}

export class GetModelClassProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelClassProfileRequest;

  getName(): string;
  setName(value: string): GetModelClassProfileRequest;

  getModels(): number;
  setModels(value: number): GetModelClassProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelClassProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelClassProfileRequest): GetModelClassProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelClassProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelClassProfileRequest;
  static deserializeBinaryFromReader(message: GetModelClassProfileRequest, reader: jspb.BinaryReader): GetModelClassProfileRequest;
}

export namespace GetModelClassProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    models: number,
  }
}

export class DeleteModelClassRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelClassRequest;

  getName(): string;
  setName(value: string): DeleteModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelClassRequest): DeleteModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelClassRequest;
  static deserializeBinaryFromReader(message: DeleteModelClassRequest, reader: jspb.BinaryReader): DeleteModelClassRequest;
}

export namespace DeleteModelClassRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteModelClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelClassResponse): DeleteModelClassResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelClassResponse;
  static deserializeBinaryFromReader(message: DeleteModelClassResponse, reader: jspb.BinaryReader): DeleteModelClassResponse;
}

export namespace DeleteModelClassResponse {
  export type AsObject = {
  }
}

export class UpdateModelClassResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelClassResponse): UpdateModelClassResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateModelClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelClassResponse;
  static deserializeBinaryFromReader(message: UpdateModelClassResponse, reader: jspb.BinaryReader): UpdateModelClassResponse;
}

export namespace UpdateModelClassResponse {
  export type AsObject = {
  }
}

export class ModelClassTrainNowRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModelClassTrainNowRequest;

  getName(): string;
  setName(value: string): ModelClassTrainNowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassTrainNowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassTrainNowRequest): ModelClassTrainNowRequest.AsObject;
  static serializeBinaryToWriter(message: ModelClassTrainNowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassTrainNowRequest;
  static deserializeBinaryFromReader(message: ModelClassTrainNowRequest, reader: jspb.BinaryReader): ModelClassTrainNowRequest;
}

export namespace ModelClassTrainNowRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ModelClassTrainNowResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassTrainNowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassTrainNowResponse): ModelClassTrainNowResponse.AsObject;
  static serializeBinaryToWriter(message: ModelClassTrainNowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassTrainNowResponse;
  static deserializeBinaryFromReader(message: ModelClassTrainNowResponse, reader: jspb.BinaryReader): ModelClassTrainNowResponse;
}

export namespace ModelClassTrainNowResponse {
  export type AsObject = {
  }
}

export class ModelClassPredictNowRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModelClassPredictNowRequest;

  getName(): string;
  setName(value: string): ModelClassPredictNowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassPredictNowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassPredictNowRequest): ModelClassPredictNowRequest.AsObject;
  static serializeBinaryToWriter(message: ModelClassPredictNowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassPredictNowRequest;
  static deserializeBinaryFromReader(message: ModelClassPredictNowRequest, reader: jspb.BinaryReader): ModelClassPredictNowRequest;
}

export namespace ModelClassPredictNowRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ModelClassPredictNowResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelClassPredictNowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModelClassPredictNowResponse): ModelClassPredictNowResponse.AsObject;
  static serializeBinaryToWriter(message: ModelClassPredictNowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelClassPredictNowResponse;
  static deserializeBinaryFromReader(message: ModelClassPredictNowResponse, reader: jspb.BinaryReader): ModelClassPredictNowResponse;
}

export namespace ModelClassPredictNowResponse {
  export type AsObject = {
  }
}

