import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class VirtualVolumeQuery extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): VirtualVolumeQuery;

  getName(): string;
  setName(value: string): VirtualVolumeQuery;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): VirtualVolumeQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeQuery): VirtualVolumeQuery.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeQuery;
  static deserializeBinaryFromReader(message: VirtualVolumeQuery, reader: jspb.BinaryReader): VirtualVolumeQuery;
}

export namespace VirtualVolumeQuery {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class VirtualVolumeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeResponse): VirtualVolumeResponse.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeResponse;
  static deserializeBinaryFromReader(message: VirtualVolumeResponse, reader: jspb.BinaryReader): VirtualVolumeResponse;
}

export namespace VirtualVolumeResponse {
  export type AsObject = {
  }
}

export class VirtualVolumeCreateRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): VirtualVolumeCreateRequest;

  getName(): string;
  setName(value: string): VirtualVolumeCreateRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): VirtualVolumeCreateRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeSpec): VirtualVolumeCreateRequest;
  hasSpec(): boolean;
  clearSpec(): VirtualVolumeCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeCreateRequest): VirtualVolumeCreateRequest.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeCreateRequest;
  static deserializeBinaryFromReader(message: VirtualVolumeCreateRequest, reader: jspb.BinaryReader): VirtualVolumeCreateRequest;
}

export namespace VirtualVolumeCreateRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeSpec.AsObject,
  }
}

export class VirtualVolumeUpdateRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): VirtualVolumeUpdateRequest;

  getName(): string;
  setName(value: string): VirtualVolumeUpdateRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): VirtualVolumeUpdateRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeSpec): VirtualVolumeUpdateRequest;
  hasSpec(): boolean;
  clearSpec(): VirtualVolumeUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeUpdateRequest): VirtualVolumeUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeUpdateRequest;
  static deserializeBinaryFromReader(message: VirtualVolumeUpdateRequest, reader: jspb.BinaryReader): VirtualVolumeUpdateRequest;
}

export namespace VirtualVolumeUpdateRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolumeSpec.AsObject,
  }
}

export class VirtualVolumeGetResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume): VirtualVolumeGetResponse;
  hasItem(): boolean;
  clearItem(): VirtualVolumeGetResponse;

  getYaml(): string;
  setYaml(value: string): VirtualVolumeGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualVolumeGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualVolumeGetResponse): VirtualVolumeGetResponse.AsObject;
  static serializeBinaryToWriter(message: VirtualVolumeGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualVolumeGetResponse;
  static deserializeBinaryFromReader(message: VirtualVolumeGetResponse, reader: jspb.BinaryReader): VirtualVolumeGetResponse;
}

export namespace VirtualVolumeGetResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject,
    yaml: string,
  }
}

