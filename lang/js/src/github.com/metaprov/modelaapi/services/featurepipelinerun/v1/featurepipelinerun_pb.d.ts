import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListFeaturePipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturePipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListFeaturePipelineRunRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeaturePipelineRunRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeaturePipelineRunRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineRunRequest): ListFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: ListFeaturePipelineRunRequest, reader: jspb.BinaryReader): ListFeaturePipelineRunRequest;
}

export namespace ListFeaturePipelineRunRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListFeaturePipelineRunResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRunList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRunList): ListFeaturePipelineRunResponse;
  hasItems(): boolean;
  clearItems(): ListFeaturePipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineRunResponse): ListFeaturePipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineRunResponse;
  static deserializeBinaryFromReader(message: ListFeaturePipelineRunResponse, reader: jspb.BinaryReader): ListFeaturePipelineRunResponse;
}

export namespace ListFeaturePipelineRunResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRunList.AsObject,
  }
}

export class CreateFeaturePipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun): CreateFeaturePipelineRunRequest;
  hasItem(): boolean;
  clearItem(): CreateFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturePipelineRunRequest): CreateFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateFeaturePipelineRunRequest, reader: jspb.BinaryReader): CreateFeaturePipelineRunRequest;
}

export namespace CreateFeaturePipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject,
  }
}

export class CreateFeaturePipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturePipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturePipelineRunResponse): CreateFeaturePipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturePipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturePipelineRunResponse;
  static deserializeBinaryFromReader(message: CreateFeaturePipelineRunResponse, reader: jspb.BinaryReader): CreateFeaturePipelineRunResponse;
}

export namespace CreateFeaturePipelineRunResponse {
  export type AsObject = {
  }
}

export class UpdateFeaturePipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun): UpdateFeaturePipelineRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturePipelineRunRequest): UpdateFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateFeaturePipelineRunRequest, reader: jspb.BinaryReader): UpdateFeaturePipelineRunRequest;
}

export namespace UpdateFeaturePipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject,
  }
}

export class UpdateFeaturePipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturePipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturePipelineRunResponse): UpdateFeaturePipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturePipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturePipelineRunResponse;
  static deserializeBinaryFromReader(message: UpdateFeaturePipelineRunResponse, reader: jspb.BinaryReader): UpdateFeaturePipelineRunResponse;
}

export namespace UpdateFeaturePipelineRunResponse {
  export type AsObject = {
  }
}

export class GetFeaturePipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeaturePipelineRunRequest;

  getName(): string;
  setName(value: string): GetFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturePipelineRunRequest): GetFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: GetFeaturePipelineRunRequest, reader: jspb.BinaryReader): GetFeaturePipelineRunRequest;
}

export namespace GetFeaturePipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetFeaturePipelineRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun): GetFeaturePipelineRunResponse;
  hasItem(): boolean;
  clearItem(): GetFeaturePipelineRunResponse;

  getYaml(): string;
  setYaml(value: string): GetFeaturePipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturePipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturePipelineRunResponse): GetFeaturePipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeaturePipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturePipelineRunResponse;
  static deserializeBinaryFromReader(message: GetFeaturePipelineRunResponse, reader: jspb.BinaryReader): GetFeaturePipelineRunResponse;
}

export namespace GetFeaturePipelineRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject,
    yaml: string,
  }
}

export class DeleteFeaturePipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeaturePipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturePipelineRunRequest): DeleteFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteFeaturePipelineRunRequest, reader: jspb.BinaryReader): DeleteFeaturePipelineRunRequest;
}

export namespace DeleteFeaturePipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteFeaturePipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturePipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturePipelineRunResponse): DeleteFeaturePipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturePipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturePipelineRunResponse;
  static deserializeBinaryFromReader(message: DeleteFeaturePipelineRunResponse, reader: jspb.BinaryReader): DeleteFeaturePipelineRunResponse;
}

export namespace DeleteFeaturePipelineRunResponse {
  export type AsObject = {
  }
}

