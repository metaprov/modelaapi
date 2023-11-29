import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class Location extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): Location;

  getDataproduct(): string;
  setDataproduct(value: string): Location;

  getResourcekind(): string;
  setResourcekind(value: string): Location;

  getResourcename(): string;
  setResourcename(value: string): Location;

  getFilename(): string;
  setFilename(value: string): Location;

  getBucket(): string;
  setBucket(value: string): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    tenant: string,
    dataproduct: string,
    resourcekind: string,
    resourcename: string,
    filename: string,
    bucket: string,
  }
}

export class InitiateUploadRequest extends jspb.Message {
  getSize(): number;
  setSize(value: number): InitiateUploadRequest;

  getLocation(): Location | undefined;
  setLocation(value?: Location): InitiateUploadRequest;
  hasLocation(): boolean;
  clearLocation(): InitiateUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateUploadRequest): InitiateUploadRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateUploadRequest;
  static deserializeBinaryFromReader(message: InitiateUploadRequest, reader: jspb.BinaryReader): InitiateUploadRequest;
}

export namespace InitiateUploadRequest {
  export type AsObject = {
    size: number,
    location?: Location.AsObject,
  }
}

export class InitiateUploadResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): InitiateUploadResponse;

  getChunksize(): number;
  setChunksize(value: number): InitiateUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateUploadResponse): InitiateUploadResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateUploadResponse;
  static deserializeBinaryFromReader(message: InitiateUploadResponse, reader: jspb.BinaryReader): InitiateUploadResponse;
}

export namespace InitiateUploadResponse {
  export type AsObject = {
    token: string,
    chunksize: number,
  }
}

export class UploadRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UploadRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): UploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
  static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadRequest;
  static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
  export type AsObject = {
    token: string,
    data: Uint8Array | string,
  }
}

export class UploadResponse extends jspb.Message {
  getComplete(): boolean;
  setComplete(value: boolean): UploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadResponse): UploadResponse.AsObject;
  static serializeBinaryToWriter(message: UploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadResponse;
  static deserializeBinaryFromReader(message: UploadResponse, reader: jspb.BinaryReader): UploadResponse;
}

export namespace UploadResponse {
  export type AsObject = {
    complete: boolean,
  }
}

