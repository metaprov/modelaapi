import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListCronReportsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronReportsRequest;

  getName(): string;
  setName(value: string): ListCronReportsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCronReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronReportsRequest): ListCronReportsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronReportsRequest;
  static deserializeBinaryFromReader(message: ListCronReportsRequest, reader: jspb.BinaryReader): ListCronReportsRequest;
}

export namespace ListCronReportsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListCronReportsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReportList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReportList): ListCronReportsResponse;
  hasItems(): boolean;
  clearItems(): ListCronReportsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronReportsResponse): ListCronReportsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronReportsResponse;
  static deserializeBinaryFromReader(message: ListCronReportsResponse, reader: jspb.BinaryReader): ListCronReportsResponse;
}

export namespace ListCronReportsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReportList.AsObject,
  }
}

export class CreateCronReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronReportResponse): CreateCronReportResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCronReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronReportResponse;
  static deserializeBinaryFromReader(message: CreateCronReportResponse, reader: jspb.BinaryReader): CreateCronReportResponse;
}

export namespace CreateCronReportResponse {
  export type AsObject = {
  }
}

export class CreateCronReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport): CreateCronReportRequest;
  hasItem(): boolean;
  clearItem(): CreateCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronReportRequest): CreateCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronReportRequest;
  static deserializeBinaryFromReader(message: CreateCronReportRequest, reader: jspb.BinaryReader): CreateCronReportRequest;
}

export namespace CreateCronReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.AsObject,
  }
}

export class UpdateCronReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport): UpdateCronReportRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronReportRequest): UpdateCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronReportRequest;
  static deserializeBinaryFromReader(message: UpdateCronReportRequest, reader: jspb.BinaryReader): UpdateCronReportRequest;
}

export namespace UpdateCronReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.AsObject,
  }
}

export class UpdateCronReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronReportResponse): UpdateCronReportResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCronReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronReportResponse;
  static deserializeBinaryFromReader(message: UpdateCronReportResponse, reader: jspb.BinaryReader): UpdateCronReportResponse;
}

export namespace UpdateCronReportResponse {
  export type AsObject = {
  }
}

export class GetCronReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCronReportRequest;

  getName(): string;
  setName(value: string): GetCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronReportRequest): GetCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronReportRequest;
  static deserializeBinaryFromReader(message: GetCronReportRequest, reader: jspb.BinaryReader): GetCronReportRequest;
}

export namespace GetCronReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCronReportResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport): GetCronReportResponse;
  hasItem(): boolean;
  clearItem(): GetCronReportResponse;

  getYaml(): string;
  setYaml(value: string): GetCronReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronReportResponse): GetCronReportResponse.AsObject;
  static serializeBinaryToWriter(message: GetCronReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronReportResponse;
  static deserializeBinaryFromReader(message: GetCronReportResponse, reader: jspb.BinaryReader): GetCronReportResponse;
}

export namespace GetCronReportResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.AsObject,
    yaml: string,
  }
}

export class DeleteCronReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCronReportRequest;

  getName(): string;
  setName(value: string): DeleteCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronReportRequest): DeleteCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronReportRequest;
  static deserializeBinaryFromReader(message: DeleteCronReportRequest, reader: jspb.BinaryReader): DeleteCronReportRequest;
}

export namespace DeleteCronReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteCronReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronReportResponse): DeleteCronReportResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCronReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronReportResponse;
  static deserializeBinaryFromReader(message: DeleteCronReportResponse, reader: jspb.BinaryReader): DeleteCronReportResponse;
}

export namespace DeleteCronReportResponse {
  export type AsObject = {
  }
}

export class PauseCronReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseCronReportRequest;

  getName(): string;
  setName(value: string): PauseCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronReportRequest): PauseCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: PauseCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronReportRequest;
  static deserializeBinaryFromReader(message: PauseCronReportRequest, reader: jspb.BinaryReader): PauseCronReportRequest;
}

export namespace PauseCronReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseCronReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseCronReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseCronReportResponse): PauseCronReportResponse.AsObject;
  static serializeBinaryToWriter(message: PauseCronReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseCronReportResponse;
  static deserializeBinaryFromReader(message: PauseCronReportResponse, reader: jspb.BinaryReader): PauseCronReportResponse;
}

export namespace PauseCronReportResponse {
  export type AsObject = {
  }
}

export class ResumeCronReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeCronReportRequest;

  getName(): string;
  setName(value: string): ResumeCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronReportRequest): ResumeCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronReportRequest;
  static deserializeBinaryFromReader(message: ResumeCronReportRequest, reader: jspb.BinaryReader): ResumeCronReportRequest;
}

export namespace ResumeCronReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeCronReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCronReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCronReportResponse): ResumeCronReportResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeCronReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCronReportResponse;
  static deserializeBinaryFromReader(message: ResumeCronReportResponse, reader: jspb.BinaryReader): ResumeCronReportResponse;
}

export namespace ResumeCronReportResponse {
  export type AsObject = {
  }
}

export class RunCronReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport): RunCronReportRequest;
  hasItem(): boolean;
  clearItem(): RunCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronReportRequest): RunCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: RunCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronReportRequest;
  static deserializeBinaryFromReader(message: RunCronReportRequest, reader: jspb.BinaryReader): RunCronReportRequest;
}

export namespace RunCronReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.AsObject,
  }
}

export class RunCronReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCronReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunCronReportResponse): RunCronReportResponse.AsObject;
  static serializeBinaryToWriter(message: RunCronReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCronReportResponse;
  static deserializeBinaryFromReader(message: RunCronReportResponse, reader: jspb.BinaryReader): RunCronReportResponse;
}

export namespace RunCronReportResponse {
  export type AsObject = {
  }
}

