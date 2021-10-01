import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListDataPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataPipelinesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDataPipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataPipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesRequest): ListDataPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesRequest;
  static deserializeBinaryFromReader(message: ListDataPipelinesRequest, reader: jspb.BinaryReader): ListDataPipelinesRequest;
}

export namespace ListDataPipelinesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataPipelinesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineList): ListDataPipelinesResponse;
  hasItems(): boolean;
  clearItems(): ListDataPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesResponse): ListDataPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesResponse;
  static deserializeBinaryFromReader(message: ListDataPipelinesResponse, reader: jspb.BinaryReader): ListDataPipelinesResponse;
}

export namespace ListDataPipelinesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineList.AsObject,
  }
}

export class CreateDataPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): CreateDataPipelineRequest;
  hasItem(): boolean;
  clearItem(): CreateDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineRequest): CreateDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineRequest;
  static deserializeBinaryFromReader(message: CreateDataPipelineRequest, reader: jspb.BinaryReader): CreateDataPipelineRequest;
}

export namespace CreateDataPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class CreateDataPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineResponse): CreateDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineResponse;
  static deserializeBinaryFromReader(message: CreateDataPipelineResponse, reader: jspb.BinaryReader): CreateDataPipelineResponse;
}

export namespace CreateDataPipelineResponse {
  export type AsObject = {
  }
}

export class UpdateDataPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): UpdateDataPipelineRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineRequest): UpdateDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateDataPipelineRequest, reader: jspb.BinaryReader): UpdateDataPipelineRequest;
}

export namespace UpdateDataPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class UpdateDataPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineResponse): UpdateDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineResponse;
  static deserializeBinaryFromReader(message: UpdateDataPipelineResponse, reader: jspb.BinaryReader): UpdateDataPipelineResponse;
}

export namespace UpdateDataPipelineResponse {
  export type AsObject = {
  }
}

export class GetDataPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataPipelineRequest;

  getName(): string;
  setName(value: string): GetDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineRequest): GetDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineRequest;
  static deserializeBinaryFromReader(message: GetDataPipelineRequest, reader: jspb.BinaryReader): GetDataPipelineRequest;
}

export namespace GetDataPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetDataPipelineResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): GetDataPipelineResponse;
  hasItem(): boolean;
  clearItem(): GetDataPipelineResponse;

  getYaml(): string;
  setYaml(value: string): GetDataPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineResponse): GetDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: GetDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineResponse;
  static deserializeBinaryFromReader(message: GetDataPipelineResponse, reader: jspb.BinaryReader): GetDataPipelineResponse;
}

export namespace GetDataPipelineResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
    yaml: string,
  }
}

export class RunDataPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): RunDataPipelineRequest;

  getName(): string;
  setName(value: string): RunDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunDataPipelineRequest): RunDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RunDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunDataPipelineRequest;
  static deserializeBinaryFromReader(message: RunDataPipelineRequest, reader: jspb.BinaryReader): RunDataPipelineRequest;
}

export namespace RunDataPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class RunDataPipelineResponse extends jspb.Message {
  getPipeline(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setPipeline(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): RunDataPipelineResponse;
  hasPipeline(): boolean;
  clearPipeline(): RunDataPipelineResponse;

  getYaml(): string;
  setYaml(value: string): RunDataPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunDataPipelineResponse): RunDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: RunDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunDataPipelineResponse;
  static deserializeBinaryFromReader(message: RunDataPipelineResponse, reader: jspb.BinaryReader): RunDataPipelineResponse;
}

export namespace RunDataPipelineResponse {
  export type AsObject = {
    pipeline?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
    yaml: string,
  }
}

export class DeleteDataPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataPipelineRequest;

  getName(): string;
  setName(value: string): DeleteDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineRequest): DeleteDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteDataPipelineRequest, reader: jspb.BinaryReader): DeleteDataPipelineRequest;
}

export namespace DeleteDataPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteDataPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineResponse): DeleteDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineResponse;
  static deserializeBinaryFromReader(message: DeleteDataPipelineResponse, reader: jspb.BinaryReader): DeleteDataPipelineResponse;
}

export namespace DeleteDataPipelineResponse {
  export type AsObject = {
  }
}

