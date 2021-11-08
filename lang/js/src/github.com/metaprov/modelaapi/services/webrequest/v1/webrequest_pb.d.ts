import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListWebRequestsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListWebRequestsRequest;

  getName(): string;
  setName(value: string): ListWebRequestsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListWebRequestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestsRequest): ListWebRequestsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestsRequest;
  static deserializeBinaryFromReader(message: ListWebRequestsRequest, reader: jspb.BinaryReader): ListWebRequestsRequest;
}

export namespace ListWebRequestsRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListWebRequestsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestList): ListWebRequestsResponse;
  hasItems(): boolean;
  clearItems(): ListWebRequestsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebRequestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebRequestsResponse): ListWebRequestsResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebRequestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebRequestsResponse;
  static deserializeBinaryFromReader(message: ListWebRequestsResponse, reader: jspb.BinaryReader): ListWebRequestsResponse;
}

export namespace ListWebRequestsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequestList.AsObject,
  }
}

export class CreateWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebRequestResponse): CreateWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebRequestResponse;
  static deserializeBinaryFromReader(message: CreateWebRequestResponse, reader: jspb.BinaryReader): CreateWebRequestResponse;
}

export namespace CreateWebRequestResponse {
  export type AsObject = {
  }
}

export class CreateWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest): CreateWebRequestRequest;
  hasItem(): boolean;
  clearItem(): CreateWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebRequestRequest): CreateWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebRequestRequest;
  static deserializeBinaryFromReader(message: CreateWebRequestRequest, reader: jspb.BinaryReader): CreateWebRequestRequest;
}

export namespace CreateWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.AsObject,
  }
}

export class UpdateWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest): UpdateWebRequestRequest;
  hasItem(): boolean;
  clearItem(): UpdateWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebRequestRequest): UpdateWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebRequestRequest;
  static deserializeBinaryFromReader(message: UpdateWebRequestRequest, reader: jspb.BinaryReader): UpdateWebRequestRequest;
}

export namespace UpdateWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.AsObject,
  }
}

export class UpdateWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebRequestResponse): UpdateWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebRequestResponse;
  static deserializeBinaryFromReader(message: UpdateWebRequestResponse, reader: jspb.BinaryReader): UpdateWebRequestResponse;
}

export namespace UpdateWebRequestResponse {
  export type AsObject = {
  }
}

export class GetWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetWebRequestRequest;

  getName(): string;
  setName(value: string): GetWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebRequestRequest): GetWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebRequestRequest;
  static deserializeBinaryFromReader(message: GetWebRequestRequest, reader: jspb.BinaryReader): GetWebRequestRequest;
}

export namespace GetWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetWebRequestResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest): GetWebRequestResponse;
  hasItem(): boolean;
  clearItem(): GetWebRequestResponse;

  getYaml(): string;
  setYaml(value: string): GetWebRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebRequestResponse): GetWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: GetWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebRequestResponse;
  static deserializeBinaryFromReader(message: GetWebRequestResponse, reader: jspb.BinaryReader): GetWebRequestResponse;
}

export namespace GetWebRequestResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.AsObject,
    yaml: string,
  }
}

export class DeleteWebRequestRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteWebRequestRequest;

  getName(): string;
  setName(value: string): DeleteWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebRequestRequest): DeleteWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebRequestRequest;
  static deserializeBinaryFromReader(message: DeleteWebRequestRequest, reader: jspb.BinaryReader): DeleteWebRequestRequest;
}

export namespace DeleteWebRequestRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebRequestResponse): DeleteWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebRequestResponse;
  static deserializeBinaryFromReader(message: DeleteWebRequestResponse, reader: jspb.BinaryReader): DeleteWebRequestResponse;
}

export namespace DeleteWebRequestResponse {
  export type AsObject = {
  }
}

export class RunWebRequestRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest): RunWebRequestRequest;
  hasItem(): boolean;
  clearItem(): RunWebRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunWebRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunWebRequestRequest): RunWebRequestRequest.AsObject;
  static serializeBinaryToWriter(message: RunWebRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunWebRequestRequest;
  static deserializeBinaryFromReader(message: RunWebRequestRequest, reader: jspb.BinaryReader): RunWebRequestRequest;
}

export namespace RunWebRequestRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.WebRequest.AsObject,
  }
}

export class RunWebRequestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunWebRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunWebRequestResponse): RunWebRequestResponse.AsObject;
  static serializeBinaryToWriter(message: RunWebRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunWebRequestResponse;
  static deserializeBinaryFromReader(message: RunWebRequestResponse, reader: jspb.BinaryReader): RunWebRequestResponse;
}

export namespace RunWebRequestResponse {
  export type AsObject = {
  }
}

