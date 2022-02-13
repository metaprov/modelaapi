import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListDataAppsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataAppsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDataAppsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataAppsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataAppsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListDataAppsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataAppsRequest): ListDataAppsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataAppsRequest;
  static deserializeBinaryFromReader(message: ListDataAppsRequest, reader: jspb.BinaryReader): ListDataAppsRequest;
}

export namespace ListDataAppsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListDataAppsResponse extends jspb.Message {
  getDataapps(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataAppList | undefined;
  setDataapps(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataAppList): ListDataAppsResponse;
  hasDataapps(): boolean;
  clearDataapps(): ListDataAppsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataAppsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataAppsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataAppsResponse): ListDataAppsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataAppsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataAppsResponse;
  static deserializeBinaryFromReader(message: ListDataAppsResponse, reader: jspb.BinaryReader): ListDataAppsResponse;
}

export namespace ListDataAppsResponse {
  export type AsObject = {
    dataapps?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataAppList.AsObject,
    nextPageToken: string,
  }
}

export class CreateDataAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataAppResponse): CreateDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataAppResponse;
  static deserializeBinaryFromReader(message: CreateDataAppResponse, reader: jspb.BinaryReader): CreateDataAppResponse;
}

export namespace CreateDataAppResponse {
  export type AsObject = {
  }
}

export class CreateDataAppRequest extends jspb.Message {
  getDataapp(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp | undefined;
  setDataapp(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp): CreateDataAppRequest;
  hasDataapp(): boolean;
  clearDataapp(): CreateDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataAppRequest): CreateDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataAppRequest;
  static deserializeBinaryFromReader(message: CreateDataAppRequest, reader: jspb.BinaryReader): CreateDataAppRequest;
}

export namespace CreateDataAppRequest {
  export type AsObject = {
    dataapp?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject,
  }
}

export class UpdateDataAppRequest extends jspb.Message {
  getDataapp(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp | undefined;
  setDataapp(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp): UpdateDataAppRequest;
  hasDataapp(): boolean;
  clearDataapp(): UpdateDataAppRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDataAppRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataAppRequest): UpdateDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataAppRequest;
  static deserializeBinaryFromReader(message: UpdateDataAppRequest, reader: jspb.BinaryReader): UpdateDataAppRequest;
}

export namespace UpdateDataAppRequest {
  export type AsObject = {
    dataapp?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDataAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataAppResponse): UpdateDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataAppResponse;
  static deserializeBinaryFromReader(message: UpdateDataAppResponse, reader: jspb.BinaryReader): UpdateDataAppResponse;
}

export namespace UpdateDataAppResponse {
  export type AsObject = {
  }
}

export class GetDataAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataAppRequest;

  getName(): string;
  setName(value: string): GetDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataAppRequest): GetDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataAppRequest;
  static deserializeBinaryFromReader(message: GetDataAppRequest, reader: jspb.BinaryReader): GetDataAppRequest;
}

export namespace GetDataAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetDataAppResponse extends jspb.Message {
  getDataapp(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp | undefined;
  setDataapp(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp): GetDataAppResponse;
  hasDataapp(): boolean;
  clearDataapp(): GetDataAppResponse;

  getYaml(): string;
  setYaml(value: string): GetDataAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataAppResponse): GetDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: GetDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataAppResponse;
  static deserializeBinaryFromReader(message: GetDataAppResponse, reader: jspb.BinaryReader): GetDataAppResponse;
}

export namespace GetDataAppResponse {
  export type AsObject = {
    dataapp?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject,
    yaml: string,
  }
}

export class DeleteDataAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataAppRequest;

  getName(): string;
  setName(value: string): DeleteDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataAppRequest): DeleteDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataAppRequest;
  static deserializeBinaryFromReader(message: DeleteDataAppRequest, reader: jspb.BinaryReader): DeleteDataAppRequest;
}

export namespace DeleteDataAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteDataAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataAppResponse): DeleteDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataAppResponse;
  static deserializeBinaryFromReader(message: DeleteDataAppResponse, reader: jspb.BinaryReader): DeleteDataAppResponse;
}

export namespace DeleteDataAppResponse {
  export type AsObject = {
  }
}

export class PauseDataAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PauseDataAppRequest;

  getName(): string;
  setName(value: string): PauseDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseDataAppRequest): PauseDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: PauseDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseDataAppRequest;
  static deserializeBinaryFromReader(message: PauseDataAppRequest, reader: jspb.BinaryReader): PauseDataAppRequest;
}

export namespace PauseDataAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PauseDataAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseDataAppResponse): PauseDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: PauseDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseDataAppResponse;
  static deserializeBinaryFromReader(message: PauseDataAppResponse, reader: jspb.BinaryReader): PauseDataAppResponse;
}

export namespace PauseDataAppResponse {
  export type AsObject = {
  }
}

export class ResumeDataAppRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ResumeDataAppRequest;

  getName(): string;
  setName(value: string): ResumeDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeDataAppRequest): ResumeDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeDataAppRequest;
  static deserializeBinaryFromReader(message: ResumeDataAppRequest, reader: jspb.BinaryReader): ResumeDataAppRequest;
}

export namespace ResumeDataAppRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ResumeDataAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeDataAppResponse): ResumeDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: ResumeDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeDataAppResponse;
  static deserializeBinaryFromReader(message: ResumeDataAppResponse, reader: jspb.BinaryReader): ResumeDataAppResponse;
}

export namespace ResumeDataAppResponse {
  export type AsObject = {
  }
}

export class RunDataAppRequest extends jspb.Message {
  getDataapp(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp | undefined;
  setDataapp(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp): RunDataAppRequest;
  hasDataapp(): boolean;
  clearDataapp(): RunDataAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunDataAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunDataAppRequest): RunDataAppRequest.AsObject;
  static serializeBinaryToWriter(message: RunDataAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunDataAppRequest;
  static deserializeBinaryFromReader(message: RunDataAppRequest, reader: jspb.BinaryReader): RunDataAppRequest;
}

export namespace RunDataAppRequest {
  export type AsObject = {
    dataapp?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.AsObject,
  }
}

export class RunDataAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunDataAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunDataAppResponse): RunDataAppResponse.AsObject;
  static serializeBinaryToWriter(message: RunDataAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunDataAppResponse;
  static deserializeBinaryFromReader(message: RunDataAppResponse, reader: jspb.BinaryReader): RunDataAppResponse;
}

export namespace RunDataAppResponse {
  export type AsObject = {
  }
}

