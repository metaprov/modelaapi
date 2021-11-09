import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListWebRequestRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListWebRequestRunsRequest;

  getName(): string;
  setName(value: string): ListWebRequestRunsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListWebRequestRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestRunsRequest): ListWebRequestRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestRunsRequest;
  static deserializeBinaryFromReader(message: ListWebRequestRunsRequest, reader: jspb.BinaryReader): ListWebRequestRunsRequest;
}

export namespace ListWebRequestRunsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListWebRequestRunsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRunList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRunList): ListWebRequestRunsResponse;
  hasItems(): boolean;
  clearItems(): ListWebRequestRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestRunsResponse): ListWebRequestRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestRunsResponse;
  static deserializeBinaryFromReader(message: ListWebRequestRunsResponse, reader: jspb.BinaryReader): ListWebRequestRunsResponse;
}

export namespace ListWebRequestRunsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRunList.AsObject,
  }
}

export class CreateWebRequestRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebRequestRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebRequestRunResponse): CreateWebRequestRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebRequestRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebRequestRunResponse;
  static deserializeBinaryFromReader(message: CreateWebRequestRunResponse, reader: jspb.BinaryReader): CreateWebRequestRunResponse;
}

export namespace CreateWebRequestRunResponse {
  export type AsObject = {
  }
}

export class CreateWebRequestRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun): CreateWebRequestRunRequest;
  hasItem(): boolean;
  clearItem(): CreateWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebRequestRunRequest): CreateWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebRequestRunRequest;
  static deserializeBinaryFromReader(message: CreateWebRequestRunRequest, reader: jspb.BinaryReader): CreateWebRequestRunRequest;
}

export namespace CreateWebRequestRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.AsObject,
  }
}

export class UpdateWebRequestRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun): UpdateWebRequestRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebRequestRunRequest): UpdateWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebRequestRunRequest;
  static deserializeBinaryFromReader(message: UpdateWebRequestRunRequest, reader: jspb.BinaryReader): UpdateWebRequestRunRequest;
}

export namespace UpdateWebRequestRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.AsObject,
  }
}

export class UpdateWebRequestRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebRequestRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebRequestRunResponse): UpdateWebRequestRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWebRequestRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebRequestRunResponse;
  static deserializeBinaryFromReader(message: UpdateWebRequestRunResponse, reader: jspb.BinaryReader): UpdateWebRequestRunResponse;
}

export namespace UpdateWebRequestRunResponse {
  export type AsObject = {
  }
}

export class GetWebRequestRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetWebRequestRunRequest;

  getName(): string;
  setName(value: string): GetWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebRequestRunRequest): GetWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebRequestRunRequest;
  static deserializeBinaryFromReader(message: GetWebRequestRunRequest, reader: jspb.BinaryReader): GetWebRequestRunRequest;
}

export namespace GetWebRequestRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetWebRequestRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun): GetWebRequestRunResponse;
  hasItem(): boolean;
  clearItem(): GetWebRequestRunResponse;

  getYaml(): string;
  setYaml(value: string): GetWebRequestRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebRequestRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebRequestRunResponse): GetWebRequestRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetWebRequestRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebRequestRunResponse;
  static deserializeBinaryFromReader(message: GetWebRequestRunResponse, reader: jspb.BinaryReader): GetWebRequestRunResponse;
}

export namespace GetWebRequestRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.AsObject,
    yaml: string,
  }
}

export class DeleteWebRequestRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteWebRequestRunRequest;

  getName(): string;
  setName(value: string): DeleteWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebRequestRunRequest): DeleteWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebRequestRunRequest;
  static deserializeBinaryFromReader(message: DeleteWebRequestRunRequest, reader: jspb.BinaryReader): DeleteWebRequestRunRequest;
}

export namespace DeleteWebRequestRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteWebRequestRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebRequestRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebRequestRunResponse): DeleteWebRequestRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebRequestRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebRequestRunResponse;
  static deserializeBinaryFromReader(message: DeleteWebRequestRunResponse, reader: jspb.BinaryReader): DeleteWebRequestRunResponse;
}

export namespace DeleteWebRequestRunResponse {
  export type AsObject = {
  }
}

export class RunWebRequestRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun): RunWebRequestRunRequest;
  hasItem(): boolean;
  clearItem(): RunWebRequestRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunWebRequestRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunWebRequestRunRequest): RunWebRequestRunRequest.AsObject;
  static serializeBinaryToWriter(message: RunWebRequestRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunWebRequestRunRequest;
  static deserializeBinaryFromReader(message: RunWebRequestRunRequest, reader: jspb.BinaryReader): RunWebRequestRunRequest;
}

export namespace RunWebRequestRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestRun.AsObject,
  }
}

export class RunWebRequestRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunWebRequestRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunWebRequestRunResponse): RunWebRequestRunResponse.AsObject;
  static serializeBinaryToWriter(message: RunWebRequestRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunWebRequestRunResponse;
  static deserializeBinaryFromReader(message: RunWebRequestRunResponse, reader: jspb.BinaryReader): RunWebRequestRunResponse;
}

export namespace RunWebRequestRunResponse {
  export type AsObject = {
  }
}

