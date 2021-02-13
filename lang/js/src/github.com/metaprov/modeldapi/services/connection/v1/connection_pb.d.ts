import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class ListConnectionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListConnectionsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListConnectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsRequest): ListConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsRequest;
  static deserializeBinaryFromReader(message: ListConnectionsRequest, reader: jspb.BinaryReader): ListConnectionsRequest;
}

export namespace ListConnectionsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListConnectionsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionList): ListConnectionsResponse;
  hasItems(): boolean;
  clearItems(): ListConnectionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsResponse): ListConnectionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsResponse;
  static deserializeBinaryFromReader(message: ListConnectionsResponse, reader: jspb.BinaryReader): ListConnectionsResponse;
}

export namespace ListConnectionsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionList.AsObject,
  }
}

export class CreateConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateConnectionRequest;

  getName(): string;
  setName(value: string): CreateConnectionRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateConnectionRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec): CreateConnectionRequest;
  hasSpec(): boolean;
  clearSpec(): CreateConnectionRequest;

  getSecretMap(): jspb.Map<string, string>;
  clearSecretMap(): CreateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
  static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.AsObject,
    secretMap: Array<[string, string]>,
  }
}

export class CreateConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionResponse): CreateConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionResponse;
  static deserializeBinaryFromReader(message: CreateConnectionResponse, reader: jspb.BinaryReader): CreateConnectionResponse;
}

export namespace CreateConnectionResponse {
  export type AsObject = {
  }
}

export class UpdateConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateConnectionRequest;

  getName(): string;
  setName(value: string): UpdateConnectionRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateConnectionRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec): UpdateConnectionRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateConnectionRequest;

  getSecretMap(): jspb.Map<string, string>;
  clearSecretMap(): UpdateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
  static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.AsObject,
    secretMap: Array<[string, string]>,
  }
}

export class UpdateConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionResponse): UpdateConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionResponse;
  static deserializeBinaryFromReader(message: UpdateConnectionResponse, reader: jspb.BinaryReader): UpdateConnectionResponse;
}

export namespace UpdateConnectionResponse {
  export type AsObject = {
  }
}

export class GetConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetConnectionRequest;

  getName(): string;
  setName(value: string): GetConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
  static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetConnectionResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): GetConnectionResponse;
  hasItem(): boolean;
  clearItem(): GetConnectionResponse;

  getYaml(): string;
  setYaml(value: string): GetConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionResponse): GetConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: GetConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionResponse;
  static deserializeBinaryFromReader(message: GetConnectionResponse, reader: jspb.BinaryReader): GetConnectionResponse;
}

export namespace GetConnectionResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    yaml: string,
  }
}

export class DeleteConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteConnectionRequest;

  getName(): string;
  setName(value: string): DeleteConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionResponse): DeleteConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionResponse;
  static deserializeBinaryFromReader(message: DeleteConnectionResponse, reader: jspb.BinaryReader): DeleteConnectionResponse;
}

export namespace DeleteConnectionResponse {
  export type AsObject = {
  }
}

