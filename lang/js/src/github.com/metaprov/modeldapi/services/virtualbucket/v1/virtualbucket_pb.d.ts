import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class ListVirtualBucketsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListVirtualBucketsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListVirtualBucketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualBucketsRequest): ListVirtualBucketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualBucketsRequest;
  static deserializeBinaryFromReader(message: ListVirtualBucketsRequest, reader: jspb.BinaryReader): ListVirtualBucketsRequest;
}

export namespace ListVirtualBucketsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListVirtualBucketsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketList): ListVirtualBucketsResponse;
  hasItems(): boolean;
  clearItems(): ListVirtualBucketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualBucketsResponse): ListVirtualBucketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualBucketsResponse;
  static deserializeBinaryFromReader(message: ListVirtualBucketsResponse, reader: jspb.BinaryReader): ListVirtualBucketsResponse;
}

export namespace ListVirtualBucketsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketList.AsObject,
  }
}

export class CreateVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateVirtualBucketRequest;

  getName(): string;
  setName(value: string): CreateVirtualBucketRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): CreateVirtualBucketRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec): CreateVirtualBucketRequest;
  hasSpec(): boolean;
  clearSpec(): CreateVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualBucketRequest): CreateVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualBucketRequest;
  static deserializeBinaryFromReader(message: CreateVirtualBucketRequest, reader: jspb.BinaryReader): CreateVirtualBucketRequest;
}

export namespace CreateVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec.AsObject,
  }
}

export class CreateVirtualBucketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualBucketResponse): CreateVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualBucketResponse;
  static deserializeBinaryFromReader(message: CreateVirtualBucketResponse, reader: jspb.BinaryReader): CreateVirtualBucketResponse;
}

export namespace CreateVirtualBucketResponse {
  export type AsObject = {
  }
}

export class UpdateVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): UpdateVirtualBucketRequest;

  getName(): string;
  setName(value: string): UpdateVirtualBucketRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): UpdateVirtualBucketRequest;

  getSpec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec): UpdateVirtualBucketRequest;
  hasSpec(): boolean;
  clearSpec(): UpdateVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualBucketRequest): UpdateVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualBucketRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualBucketRequest, reader: jspb.BinaryReader): UpdateVirtualBucketRequest;
}

export namespace UpdateVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
    spec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec.AsObject,
  }
}

export class UpdateVirtualBucketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualBucketResponse): UpdateVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualBucketResponse;
  static deserializeBinaryFromReader(message: UpdateVirtualBucketResponse, reader: jspb.BinaryReader): UpdateVirtualBucketResponse;
}

export namespace UpdateVirtualBucketResponse {
  export type AsObject = {
  }
}

export class GetVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualBucketRequest;

  getName(): string;
  setName(value: string): GetVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualBucketRequest): GetVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualBucketRequest;
  static deserializeBinaryFromReader(message: GetVirtualBucketRequest, reader: jspb.BinaryReader): GetVirtualBucketRequest;
}

export namespace GetVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetVirtualBucketResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): GetVirtualBucketResponse;
  hasItem(): boolean;
  clearItem(): GetVirtualBucketResponse;

  getYaml(): string;
  setYaml(value: string): GetVirtualBucketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualBucketResponse): GetVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: GetVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualBucketResponse;
  static deserializeBinaryFromReader(message: GetVirtualBucketResponse, reader: jspb.BinaryReader): GetVirtualBucketResponse;
}

export namespace GetVirtualBucketResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    yaml: string,
  }
}

export class DeleteVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteVirtualBucketRequest;

  getName(): string;
  setName(value: string): DeleteVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualBucketRequest): DeleteVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualBucketRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualBucketRequest, reader: jspb.BinaryReader): DeleteVirtualBucketRequest;
}

export namespace DeleteVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteVirtualBucketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualBucketResponse): DeleteVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualBucketResponse;
  static deserializeBinaryFromReader(message: DeleteVirtualBucketResponse, reader: jspb.BinaryReader): DeleteVirtualBucketResponse;
}

export namespace DeleteVirtualBucketResponse {
  export type AsObject = {
  }
}

