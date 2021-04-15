import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class ShutdownRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownRequest): ShutdownRequest.AsObject;
  static serializeBinaryToWriter(message: ShutdownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownRequest;
  static deserializeBinaryFromReader(message: ShutdownRequest, reader: jspb.BinaryReader): ShutdownRequest;
}

export namespace ShutdownRequest {
  export type AsObject = {
  }
}

export class ShutdownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownResponse): ShutdownResponse.AsObject;
  static serializeBinaryToWriter(message: ShutdownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownResponse;
  static deserializeBinaryFromReader(message: ShutdownResponse, reader: jspb.BinaryReader): ShutdownResponse;
}

export namespace ShutdownResponse {
  export type AsObject = {
  }
}

export class VirtualBucketExistRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): VirtualBucketExistRequest;
  hasBucket(): boolean;
  clearBucket(): VirtualBucketExistRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): VirtualBucketExistRequest;
  hasConnection(): boolean;
  clearConnection(): VirtualBucketExistRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): VirtualBucketExistRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucketExistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucketExistRequest): VirtualBucketExistRequest.AsObject;
  static serializeBinaryToWriter(message: VirtualBucketExistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucketExistRequest;
  static deserializeBinaryFromReader(message: VirtualBucketExistRequest, reader: jspb.BinaryReader): VirtualBucketExistRequest;
}

export namespace VirtualBucketExistRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class VirtualBucketExistResponse extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): VirtualBucketExistResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualBucketExistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VirtualBucketExistResponse): VirtualBucketExistResponse.AsObject;
  static serializeBinaryToWriter(message: VirtualBucketExistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VirtualBucketExistResponse;
  static deserializeBinaryFromReader(message: VirtualBucketExistResponse, reader: jspb.BinaryReader): VirtualBucketExistResponse;
}

export namespace VirtualBucketExistResponse {
  export type AsObject = {
    exist: boolean,
  }
}

export class KeyExistInVirtualBucketRequest extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): KeyExistInVirtualBucketRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): KeyExistInVirtualBucketRequest;
  hasBucket(): boolean;
  clearBucket(): KeyExistInVirtualBucketRequest;

  getKey(): string;
  setKey(value: string): KeyExistInVirtualBucketRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): KeyExistInVirtualBucketRequest;
  hasConnection(): boolean;
  clearConnection(): KeyExistInVirtualBucketRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): KeyExistInVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyExistInVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyExistInVirtualBucketRequest): KeyExistInVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: KeyExistInVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyExistInVirtualBucketRequest;
  static deserializeBinaryFromReader(message: KeyExistInVirtualBucketRequest, reader: jspb.BinaryReader): KeyExistInVirtualBucketRequest;
}

export namespace KeyExistInVirtualBucketRequest {
  export type AsObject = {
    region: string,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    key: string,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class KeyExistInVirtualBucketResponse extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): KeyExistInVirtualBucketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyExistInVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyExistInVirtualBucketResponse): KeyExistInVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: KeyExistInVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyExistInVirtualBucketResponse;
  static deserializeBinaryFromReader(message: KeyExistInVirtualBucketResponse, reader: jspb.BinaryReader): KeyExistInVirtualBucketResponse;
}

export namespace KeyExistInVirtualBucketResponse {
  export type AsObject = {
    exist: boolean,
  }
}

export class CloudVirtualBucketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloudVirtualBucketResponse): CloudVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: CloudVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudVirtualBucketResponse;
  static deserializeBinaryFromReader(message: CloudVirtualBucketResponse, reader: jspb.BinaryReader): CloudVirtualBucketResponse;
}

export namespace CloudVirtualBucketResponse {
  export type AsObject = {
  }
}

export class FileDownloadRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): FileDownloadRequest;

  getPath(): string;
  setPath(value: string): FileDownloadRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): FileDownloadRequest;
  hasBucket(): boolean;
  clearBucket(): FileDownloadRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): FileDownloadRequest;
  hasConnection(): boolean;
  clearConnection(): FileDownloadRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): FileDownloadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDownloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileDownloadRequest): FileDownloadRequest.AsObject;
  static serializeBinaryToWriter(message: FileDownloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDownloadRequest;
  static deserializeBinaryFromReader(message: FileDownloadRequest, reader: jspb.BinaryReader): FileDownloadRequest;
}

export namespace FileDownloadRequest {
  export type AsObject = {
    key: string,
    path: string,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class FileDownloadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDownloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileDownloadResponse): FileDownloadResponse.AsObject;
  static serializeBinaryToWriter(message: FileDownloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDownloadResponse;
  static deserializeBinaryFromReader(message: FileDownloadResponse, reader: jspb.BinaryReader): FileDownloadResponse;
}

export namespace FileDownloadResponse {
  export type AsObject = {
  }
}

export class FileUploadRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): FileUploadRequest;

  getPath(): string;
  setPath(value: string): FileUploadRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): FileUploadRequest;
  hasBucket(): boolean;
  clearBucket(): FileUploadRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): FileUploadRequest;
  hasConnection(): boolean;
  clearConnection(): FileUploadRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): FileUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileUploadRequest): FileUploadRequest.AsObject;
  static serializeBinaryToWriter(message: FileUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUploadRequest;
  static deserializeBinaryFromReader(message: FileUploadRequest, reader: jspb.BinaryReader): FileUploadRequest;
}

export namespace FileUploadRequest {
  export type AsObject = {
    key: string,
    path: string,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
  }
}

export class FileUploadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileUploadResponse): FileUploadResponse.AsObject;
  static serializeBinaryToWriter(message: FileUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUploadResponse;
  static deserializeBinaryFromReader(message: FileUploadResponse, reader: jspb.BinaryReader): FileUploadResponse;
}

export namespace FileUploadResponse {
  export type AsObject = {
  }
}

export class CreateVirtualBucketRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateVirtualBucketRequest;
  hasBucket(): boolean;
  clearBucket(): CreateVirtualBucketRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateVirtualBucketRequest;
  hasConnection(): boolean;
  clearConnection(): CreateVirtualBucketRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): CreateVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualBucketRequest): CreateVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualBucketRequest;
  static deserializeBinaryFromReader(message: CreateVirtualBucketRequest, reader: jspb.BinaryReader): CreateVirtualBucketRequest;
}

export namespace CreateVirtualBucketRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
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

