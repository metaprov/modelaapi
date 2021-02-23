import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';


export class ListReportsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListReportsRequest;

  getName(): string;
  setName(value: string): ListReportsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportsRequest): ListReportsRequest.AsObject;
  static serializeBinaryToWriter(message: ListReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportsRequest;
  static deserializeBinaryFromReader(message: ListReportsRequest, reader: jspb.BinaryReader): ListReportsRequest;
}

export namespace ListReportsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListReportsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ReportList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ReportList): ListReportsResponse;
  hasItems(): boolean;
  clearItems(): ListReportsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportsResponse): ListReportsResponse.AsObject;
  static serializeBinaryToWriter(message: ListReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportsResponse;
  static deserializeBinaryFromReader(message: ListReportsResponse, reader: jspb.BinaryReader): ListReportsResponse;
}

export namespace ListReportsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ReportList.AsObject,
  }
}

export class CreateReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateReportRequest;
  hasItem(): boolean;
  clearItem(): CreateReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportRequest): CreateReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportRequest;
  static deserializeBinaryFromReader(message: CreateReportRequest, reader: jspb.BinaryReader): CreateReportRequest;
}

export namespace CreateReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class CreateReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportResponse): CreateReportResponse.AsObject;
  static serializeBinaryToWriter(message: CreateReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportResponse;
  static deserializeBinaryFromReader(message: CreateReportResponse, reader: jspb.BinaryReader): CreateReportResponse;
}

export namespace CreateReportResponse {
  export type AsObject = {
  }
}

export class UpdateReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): UpdateReportRequest;
  hasItem(): boolean;
  clearItem(): UpdateReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReportRequest): UpdateReportRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReportRequest;
  static deserializeBinaryFromReader(message: UpdateReportRequest, reader: jspb.BinaryReader): UpdateReportRequest;
}

export namespace UpdateReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class UpdateReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReportResponse): UpdateReportResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReportResponse;
  static deserializeBinaryFromReader(message: UpdateReportResponse, reader: jspb.BinaryReader): UpdateReportResponse;
}

export namespace UpdateReportResponse {
  export type AsObject = {
  }
}

export class GetReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetReportRequest;

  getName(): string;
  setName(value: string): GetReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportRequest): GetReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportRequest;
  static deserializeBinaryFromReader(message: GetReportRequest, reader: jspb.BinaryReader): GetReportRequest;
}

export namespace GetReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetReportResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): GetReportResponse;
  hasItem(): boolean;
  clearItem(): GetReportResponse;

  getYaml(): string;
  setYaml(value: string): GetReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportResponse): GetReportResponse.AsObject;
  static serializeBinaryToWriter(message: GetReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportResponse;
  static deserializeBinaryFromReader(message: GetReportResponse, reader: jspb.BinaryReader): GetReportResponse;
}

export namespace GetReportResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
    yaml: string,
  }
}

export class DeleteReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteReportRequest;

  getName(): string;
  setName(value: string): DeleteReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReportRequest): DeleteReportRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReportRequest;
  static deserializeBinaryFromReader(message: DeleteReportRequest, reader: jspb.BinaryReader): DeleteReportRequest;
}

export namespace DeleteReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReportResponse): DeleteReportResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReportResponse;
  static deserializeBinaryFromReader(message: DeleteReportResponse, reader: jspb.BinaryReader): DeleteReportResponse;
}

export namespace DeleteReportResponse {
  export type AsObject = {
  }
}

export class DownloadReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadReportRequest;

  getName(): string;
  setName(value: string): DownloadReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadReportRequest): DownloadReportRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadReportRequest;
  static deserializeBinaryFromReader(message: DownloadReportRequest, reader: jspb.BinaryReader): DownloadReportRequest;
}

export namespace DownloadReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadReportResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadReportResponse): DownloadReportResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadReportResponse;
  static deserializeBinaryFromReader(message: DownloadReportResponse, reader: jspb.BinaryReader): DownloadReportResponse;
}

export namespace DownloadReportResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

