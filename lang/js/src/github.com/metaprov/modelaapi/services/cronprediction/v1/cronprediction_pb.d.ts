import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListCronPredictionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronPredictionsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCronPredictionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCronPredictionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCronPredictionsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListCronPredictionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronPredictionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronPredictionsRequest): ListCronPredictionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronPredictionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronPredictionsRequest;
  static deserializeBinaryFromReader(message: ListCronPredictionsRequest, reader: jspb.BinaryReader): ListCronPredictionsRequest;
}

export namespace ListCronPredictionsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListCronPredictionsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPredictionList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPredictionList): ListCronPredictionsResponse;
  hasItems(): boolean;
  clearItems(): ListCronPredictionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronPredictionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronPredictionsResponse): ListCronPredictionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronPredictionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronPredictionsResponse;
  static deserializeBinaryFromReader(message: ListCronPredictionsResponse, reader: jspb.BinaryReader): ListCronPredictionsResponse;
}

export namespace ListCronPredictionsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPredictionList.AsObject,
  }
}

export class CreateCronPredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronPredictionResponse): CreateCronPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCronPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronPredictionResponse;
  static deserializeBinaryFromReader(message: CreateCronPredictionResponse, reader: jspb.BinaryReader): CreateCronPredictionResponse;
}

export namespace CreateCronPredictionResponse {
  export type AsObject = {
  }
}

export class CreateCronPredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): CreateCronPredictionRequest;
  hasItem(): boolean;
  clearItem(): CreateCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronPredictionRequest): CreateCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronPredictionRequest;
  static deserializeBinaryFromReader(message: CreateCronPredictionRequest, reader: jspb.BinaryReader): CreateCronPredictionRequest;
}

export namespace CreateCronPredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
  }
}

export class UpdateCronPredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): UpdateCronPredictionRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronPredictionRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCronPredictionRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronPredictionRequest): UpdateCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronPredictionRequest;
  static deserializeBinaryFromReader(message: UpdateCronPredictionRequest, reader: jspb.BinaryReader): UpdateCronPredictionRequest;
}

export namespace UpdateCronPredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCronPredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronPredictionResponse): UpdateCronPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCronPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronPredictionResponse;
  static deserializeBinaryFromReader(message: UpdateCronPredictionResponse, reader: jspb.BinaryReader): UpdateCronPredictionResponse;
}

export namespace UpdateCronPredictionResponse {
  export type AsObject = {
  }
}

export class GetCronPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCronPredictionRequest;

  getName(): string;
  setName(value: string): GetCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronPredictionRequest): GetCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronPredictionRequest;
  static deserializeBinaryFromReader(message: GetCronPredictionRequest, reader: jspb.BinaryReader): GetCronPredictionRequest;
}

export namespace GetCronPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCronPredictionResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): GetCronPredictionResponse;
  hasItem(): boolean;
  clearItem(): GetCronPredictionResponse;

  getYaml(): string;
  setYaml(value: string): GetCronPredictionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronPredictionResponse): GetCronPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: GetCronPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronPredictionResponse;
  static deserializeBinaryFromReader(message: GetCronPredictionResponse, reader: jspb.BinaryReader): GetCronPredictionResponse;
}

export namespace GetCronPredictionResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
    yaml: string,
  }
}

export class DeleteCronPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCronPredictionRequest;

  getName(): string;
  setName(value: string): DeleteCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronPredictionRequest): DeleteCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronPredictionRequest;
  static deserializeBinaryFromReader(message: DeleteCronPredictionRequest, reader: jspb.BinaryReader): DeleteCronPredictionRequest;
}

export namespace DeleteCronPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteCronPredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronPredictionResponse): DeleteCronPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCronPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronPredictionResponse;
  static deserializeBinaryFromReader(message: DeleteCronPredictionResponse, reader: jspb.BinaryReader): DeleteCronPredictionResponse;
}

export namespace DeleteCronPredictionResponse {
  export type AsObject = {
  }
}

export class PauseCronPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseCronPredictionRequest;

  getName(): string;
  setName(value: string): PauseCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronPredictionRequest): PauseCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: PauseCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronPredictionRequest;
  static deserializeBinaryFromReader(message: PauseCronPredictionRequest, reader: jspb.BinaryReader): PauseCronPredictionRequest;
}

export namespace PauseCronPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseCronPredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronPredictionResponse): PauseCronPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: PauseCronPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronPredictionResponse;
  static deserializeBinaryFromReader(message: PauseCronPredictionResponse, reader: jspb.BinaryReader): PauseCronPredictionResponse;
}

export namespace PauseCronPredictionResponse {
  export type AsObject = {
  }
}

export class ResumeCronPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeCronPredictionRequest;

  getName(): string;
  setName(value: string): ResumeCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronPredictionRequest): ResumeCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronPredictionRequest;
  static deserializeBinaryFromReader(message: ResumeCronPredictionRequest, reader: jspb.BinaryReader): ResumeCronPredictionRequest;
}

export namespace ResumeCronPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeCronPredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronPredictionResponse): ResumeCronPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeCronPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronPredictionResponse;
  static deserializeBinaryFromReader(message: ResumeCronPredictionResponse, reader: jspb.BinaryReader): ResumeCronPredictionResponse;
}

export namespace ResumeCronPredictionResponse {
  export type AsObject = {
  }
}

export class RunCronPredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): RunCronPredictionRequest;
  hasItem(): boolean;
  clearItem(): RunCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronPredictionRequest): RunCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: RunCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronPredictionRequest;
  static deserializeBinaryFromReader(message: RunCronPredictionRequest, reader: jspb.BinaryReader): RunCronPredictionRequest;
}

export namespace RunCronPredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
  }
}

export class RunCronPredictionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronPredictionResponse): RunCronPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: RunCronPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronPredictionResponse;
  static deserializeBinaryFromReader(message: RunCronPredictionResponse, reader: jspb.BinaryReader): RunCronPredictionResponse;
}

export namespace RunCronPredictionResponse {
  export type AsObject = {
  }
}

