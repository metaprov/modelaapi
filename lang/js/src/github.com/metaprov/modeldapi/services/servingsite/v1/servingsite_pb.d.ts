import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class ListServingSitesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListServingSitesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListServingSitesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingSitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingSitesRequest): ListServingSitesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServingSitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingSitesRequest;
  static deserializeBinaryFromReader(message: ListServingSitesRequest, reader: jspb.BinaryReader): ListServingSitesRequest;
}

export namespace ListServingSitesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListServingSitesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): ListServingSitesResponse;
  hasItems(): boolean;
  clearItems(): ListServingSitesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingSitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingSitesResponse): ListServingSitesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServingSitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingSitesResponse;
  static deserializeBinaryFromReader(message: ListServingSitesResponse, reader: jspb.BinaryReader): ListServingSitesResponse;
}

export namespace ListServingSitesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class CreateServingSiteRequest extends jspb.Message {
  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): CreateServingSiteRequest;
  hasSpec(): boolean;
  clearSpec(): CreateServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServingSiteRequest): CreateServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServingSiteRequest;
  static deserializeBinaryFromReader(message: CreateServingSiteRequest, reader: jspb.BinaryReader): CreateServingSiteRequest;
}

export namespace CreateServingSiteRequest {
  export type AsObject = {
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class CreateServingSiteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServingSiteResponse): CreateServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: CreateServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServingSiteResponse;
  static deserializeBinaryFromReader(message: CreateServingSiteResponse, reader: jspb.BinaryReader): CreateServingSiteResponse;
}

export namespace CreateServingSiteResponse {
  export type AsObject = {
  }
}

export class UpdateServingSiteRequest extends jspb.Message {
  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): UpdateServingSiteRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServingSiteRequest): UpdateServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServingSiteRequest;
  static deserializeBinaryFromReader(message: UpdateServingSiteRequest, reader: jspb.BinaryReader): UpdateServingSiteRequest;
}

export namespace UpdateServingSiteRequest {
  export type AsObject = {
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class UpdateServingSiteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServingSiteResponse): UpdateServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServingSiteResponse;
  static deserializeBinaryFromReader(message: UpdateServingSiteResponse, reader: jspb.BinaryReader): UpdateServingSiteResponse;
}

export namespace UpdateServingSiteResponse {
  export type AsObject = {
  }
}

export class GetServingSiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetServingSiteRequest;

  getName(): string;
  setName(value: string): GetServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServingSiteRequest): GetServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: GetServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServingSiteRequest;
  static deserializeBinaryFromReader(message: GetServingSiteRequest, reader: jspb.BinaryReader): GetServingSiteRequest;
}

export namespace GetServingSiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetServingSiteResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): GetServingSiteResponse;
  hasItem(): boolean;
  clearItem(): GetServingSiteResponse;

  getYaml(): string;
  setYaml(value: string): GetServingSiteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServingSiteResponse): GetServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: GetServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServingSiteResponse;
  static deserializeBinaryFromReader(message: GetServingSiteResponse, reader: jspb.BinaryReader): GetServingSiteResponse;
}

export namespace GetServingSiteResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
    yaml: string,
  }
}

export class DeleteServingSiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteServingSiteRequest;

  getName(): string;
  setName(value: string): DeleteServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServingSiteRequest): DeleteServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServingSiteRequest;
  static deserializeBinaryFromReader(message: DeleteServingSiteRequest, reader: jspb.BinaryReader): DeleteServingSiteRequest;
}

export namespace DeleteServingSiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteServingSiteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServingSiteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServingSiteResponse): DeleteServingSiteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteServingSiteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServingSiteResponse;
  static deserializeBinaryFromReader(message: DeleteServingSiteResponse, reader: jspb.BinaryReader): DeleteServingSiteResponse;
}

export namespace DeleteServingSiteResponse {
  export type AsObject = {
  }
}

