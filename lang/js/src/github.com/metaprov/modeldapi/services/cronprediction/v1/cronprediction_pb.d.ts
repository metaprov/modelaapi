import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListCronPredictionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronPredictionsRequest;

  getName(): string;
  setName(value: string): ListCronPredictionsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCronPredictionsRequest;

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
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListCronPredictionsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPredictionList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPredictionList): ListCronPredictionsResponse;
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
    items?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPredictionList.AsObject,
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
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): CreateCronPredictionRequest;
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
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
  }
}

export class UpdateCronPredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): UpdateCronPredictionRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronPredictionRequest): UpdateCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronPredictionRequest;
  static deserializeBinaryFromReader(message: UpdateCronPredictionRequest, reader: jspb.BinaryReader): UpdateCronPredictionRequest;
}

export namespace UpdateCronPredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
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
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): GetCronPredictionResponse;
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
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
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

export class RunPredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): RunPredictionRequest;
  hasItem(): boolean;
  clearItem(): RunPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunPredictionRequest): RunPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: RunPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPredictionRequest;
  static deserializeBinaryFromReader(message: RunPredictionRequest, reader: jspb.BinaryReader): RunPredictionRequest;
}

export namespace RunPredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
  }
}

export class RunPredictionResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): RunPredictionResponse;
  hasItem(): boolean;
  clearItem(): RunPredictionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunPredictionResponse): RunPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: RunPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPredictionResponse;
  static deserializeBinaryFromReader(message: RunPredictionResponse, reader: jspb.BinaryReader): RunPredictionResponse;
}

export namespace RunPredictionResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
  }
}

