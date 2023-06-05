import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class DownloadLogFileRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): DownloadLogFileRequest;

  getNamespace(): string;
  setNamespace(value: string): DownloadLogFileRequest;

  getBucket(): string;
  setBucket(value: string): DownloadLogFileRequest;

  getPath(): string;
  setPath(value: string): DownloadLogFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadLogFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadLogFileRequest): DownloadLogFileRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadLogFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadLogFileRequest;
  static deserializeBinaryFromReader(message: DownloadLogFileRequest, reader: jspb.BinaryReader): DownloadLogFileRequest;
}

export namespace DownloadLogFileRequest {
  export type AsObject = {
    tenant: string,
    namespace: string,
    bucket: string,
    path: string,
  }
}

export class DownloadLogFileResponse extends jspb.Message {
  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): DownloadLogFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadLogFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadLogFileResponse): DownloadLogFileResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadLogFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadLogFileResponse;
  static deserializeBinaryFromReader(message: DownloadLogFileResponse, reader: jspb.BinaryReader): DownloadLogFileResponse;
}

export namespace DownloadLogFileResponse {
  export type AsObject = {
    result: Uint8Array | string,
  }
}

export class BackupDatabaseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): BackupDatabaseRequest;

  getBucket(): string;
  setBucket(value: string): BackupDatabaseRequest;

  getPath(): string;
  setPath(value: string): BackupDatabaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupDatabaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackupDatabaseRequest): BackupDatabaseRequest.AsObject;
  static serializeBinaryToWriter(message: BackupDatabaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupDatabaseRequest;
  static deserializeBinaryFromReader(message: BackupDatabaseRequest, reader: jspb.BinaryReader): BackupDatabaseRequest;
}

export namespace BackupDatabaseRequest {
  export type AsObject = {
    namespace: string,
    bucket: string,
    path: string,
  }
}

export class BackupDatabaseResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): BackupDatabaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupDatabaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BackupDatabaseResponse): BackupDatabaseResponse.AsObject;
  static serializeBinaryToWriter(message: BackupDatabaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupDatabaseResponse;
  static deserializeBinaryFromReader(message: BackupDatabaseResponse, reader: jspb.BinaryReader): BackupDatabaseResponse;
}

export namespace BackupDatabaseResponse {
  export type AsObject = {
    path: string,
  }
}

export class BackupEtcdRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): BackupEtcdRequest;

  getBucket(): string;
  setBucket(value: string): BackupEtcdRequest;

  getPath(): string;
  setPath(value: string): BackupEtcdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupEtcdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackupEtcdRequest): BackupEtcdRequest.AsObject;
  static serializeBinaryToWriter(message: BackupEtcdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupEtcdRequest;
  static deserializeBinaryFromReader(message: BackupEtcdRequest, reader: jspb.BinaryReader): BackupEtcdRequest;
}

export namespace BackupEtcdRequest {
  export type AsObject = {
    namespace: string,
    bucket: string,
    path: string,
  }
}

export class BackupEtcdResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): BackupEtcdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupEtcdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BackupEtcdResponse): BackupEtcdResponse.AsObject;
  static serializeBinaryToWriter(message: BackupEtcdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupEtcdResponse;
  static deserializeBinaryFromReader(message: BackupEtcdResponse, reader: jspb.BinaryReader): BackupEtcdResponse;
}

export namespace BackupEtcdResponse {
  export type AsObject = {
    path: string,
  }
}

