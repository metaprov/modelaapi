import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';


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

export class BucketExistRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BucketExistRequest;
  hasBucket(): boolean;
  clearBucket(): BucketExistRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketExistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BucketExistRequest): BucketExistRequest.AsObject;
  static serializeBinaryToWriter(message: BucketExistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketExistRequest;
  static deserializeBinaryFromReader(message: BucketExistRequest, reader: jspb.BinaryReader): BucketExistRequest;
}

export namespace BucketExistRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class BucketExistResponse extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): BucketExistResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BucketExistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BucketExistResponse): BucketExistResponse.AsObject;
  static serializeBinaryToWriter(message: BucketExistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BucketExistResponse;
  static deserializeBinaryFromReader(message: BucketExistResponse, reader: jspb.BinaryReader): BucketExistResponse;
}

export namespace BucketExistResponse {
  export type AsObject = {
    exist: boolean,
  }
}

export class ExistsInBucketRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): ExistsInBucketRequest;
  hasBucket(): boolean;
  clearBucket(): ExistsInBucketRequest;

  getKey(): string;
  setKey(value: string): ExistsInBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsInBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsInBucketRequest): ExistsInBucketRequest.AsObject;
  static serializeBinaryToWriter(message: ExistsInBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsInBucketRequest;
  static deserializeBinaryFromReader(message: ExistsInBucketRequest, reader: jspb.BinaryReader): ExistsInBucketRequest;
}

export namespace ExistsInBucketRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    key: string,
  }
}

export class ExistsInBucketResponse extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): ExistsInBucketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsInBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsInBucketResponse): ExistsInBucketResponse.AsObject;
  static serializeBinaryToWriter(message: ExistsInBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsInBucketResponse;
  static deserializeBinaryFromReader(message: ExistsInBucketResponse, reader: jspb.BinaryReader): ExistsInBucketResponse;
}

export namespace ExistsInBucketResponse {
  export type AsObject = {
    exist: boolean,
  }
}

export class DeleteRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DeleteRequest;
  hasBucket(): boolean;
  clearBucket(): DeleteRequest;

  getKey(): string;
  setKey(value: string): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    key: string,
  }
}

export class DeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
  }
}

export class FileDownloadRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): FileDownloadRequest;

  getPath(): string;
  setPath(value: string): FileDownloadRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): FileDownloadRequest;
  hasBucket(): boolean;
  clearBucket(): FileDownloadRequest;

  getTenant(): string;
  setTenant(value: string): FileDownloadRequest;

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
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    tenant: string,
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

export class ListObjectsRequest extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): ListObjectsRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): ListObjectsRequest;
  hasBucket(): boolean;
  clearBucket(): ListObjectsRequest;

  getTenant(): string;
  setTenant(value: string): ListObjectsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectsRequest): ListObjectsRequest.AsObject;
  static serializeBinaryToWriter(message: ListObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectsRequest;
  static deserializeBinaryFromReader(message: ListObjectsRequest, reader: jspb.BinaryReader): ListObjectsRequest;
}

export namespace ListObjectsRequest {
  export type AsObject = {
    prefix: string,
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    tenant: string,
  }
}

export class ListObjectsResponse extends jspb.Message {
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): ListObjectsResponse;
  clearKeysList(): ListObjectsResponse;
  addKeys(value: string, index?: number): ListObjectsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectsResponse): ListObjectsResponse.AsObject;
  static serializeBinaryToWriter(message: ListObjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectsResponse;
  static deserializeBinaryFromReader(message: ListObjectsResponse, reader: jspb.BinaryReader): ListObjectsResponse;
}

export namespace ListObjectsResponse {
  export type AsObject = {
    keysList: Array<string>,
  }
}

export class FileUploadRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): FileUploadRequest;

  getPath(): string;
  setPath(value: string): FileUploadRequest;

  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): FileUploadRequest;
  hasBucket(): boolean;
  clearBucket(): FileUploadRequest;

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
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
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

export class CreateBucketRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateBucketRequest;
  hasBucket(): boolean;
  clearBucket(): CreateBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketRequest): CreateBucketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketRequest;
  static deserializeBinaryFromReader(message: CreateBucketRequest, reader: jspb.BinaryReader): CreateBucketRequest;
}

export namespace CreateBucketRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class CreateBucketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketResponse): CreateBucketResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketResponse;
  static deserializeBinaryFromReader(message: CreateBucketResponse, reader: jspb.BinaryReader): CreateBucketResponse;
}

export namespace CreateBucketResponse {
  export type AsObject = {
  }
}

