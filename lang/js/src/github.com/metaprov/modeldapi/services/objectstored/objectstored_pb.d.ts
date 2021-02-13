import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class IngestResponse extends jspb.Message {
  getLivekey(): string;
  setLivekey(value: string): IngestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IngestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IngestResponse): IngestResponse.AsObject;
  static serializeBinaryToWriter(message: IngestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IngestResponse;
  static deserializeBinaryFromReader(message: IngestResponse, reader: jspb.BinaryReader): IngestResponse;
}

export namespace IngestResponse {
  export type AsObject = {
    livekey: string,
  }
}

export class ObjectResponse extends jspb.Message {
  getArchivepath(): string;
  setArchivepath(value: string): ObjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectResponse): ObjectResponse.AsObject;
  static serializeBinaryToWriter(message: ObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectResponse;
  static deserializeBinaryFromReader(message: ObjectResponse, reader: jspb.BinaryReader): ObjectResponse;
}

export namespace ObjectResponse {
  export type AsObject = {
    archivepath: string,
  }
}

export class ObjectRequest extends jspb.Message {
  getBucketname(): string;
  setBucketname(value: string): ObjectRequest;

  getBucketspec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec | undefined;
  setBucketspec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec): ObjectRequest;
  hasBucketspec(): boolean;
  clearBucketspec(): ObjectRequest;

  getCrednamespace(): string;
  setCrednamespace(value: string): ObjectRequest;

  getCredname(): string;
  setCredname(value: string): ObjectRequest;

  getConnectionspec(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec | undefined;
  setConnectionspec(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec): ObjectRequest;
  hasConnectionspec(): boolean;
  clearConnectionspec(): ObjectRequest;

  getSecretMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretMap(): ObjectRequest;

  getKey(): string;
  setKey(value: string): ObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectRequest): ObjectRequest.AsObject;
  static serializeBinaryToWriter(message: ObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectRequest;
  static deserializeBinaryFromReader(message: ObjectRequest, reader: jspb.BinaryReader): ObjectRequest;
}

export namespace ObjectRequest {
  export type AsObject = {
    bucketname: string,
    bucketspec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucketSpec.AsObject,
    crednamespace: string,
    credname: string,
    connectionspec?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ConnectionSpec.AsObject,
    secretMap: Array<[string, Uint8Array | string]>,
    key: string,
  }
}

export class ExistInVirtualBucketResponse extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): ExistInVirtualBucketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistInVirtualBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExistInVirtualBucketResponse): ExistInVirtualBucketResponse.AsObject;
  static serializeBinaryToWriter(message: ExistInVirtualBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistInVirtualBucketResponse;
  static deserializeBinaryFromReader(message: ExistInVirtualBucketResponse, reader: jspb.BinaryReader): ExistInVirtualBucketResponse;
}

export namespace ExistInVirtualBucketResponse {
  export type AsObject = {
    exist: boolean,
  }
}

