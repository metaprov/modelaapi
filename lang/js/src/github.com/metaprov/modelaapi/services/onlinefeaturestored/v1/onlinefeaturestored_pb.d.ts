import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';


export class Value extends jspb.Message {
  getInt64(): number;
  setInt64(value: number): Value;

  getDouble(): number;
  setDouble(value: number): Value;

  getString(): string;
  setString(value: string): Value;

  getBool(): boolean;
  setBool(value: boolean): Value;

  getUnixMilli(): number;
  setUnixMilli(value: number): Value;

  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): Value;

  getValueCase(): Value.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    int64: number,
    pb_double: number,
    string: string,
    bool: boolean,
    unixMilli: number,
    bytes: Uint8Array | string,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    INT64 = 1,
    DOUBLE = 2,
    STRING = 3,
    BOOL = 4,
    UNIX_MILLI = 5,
    BYTES = 6,
  }
}

export class OnlineGetRequest extends jspb.Message {
  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): OnlineGetRequest;
  hasModelclass(): boolean;
  clearModelclass(): OnlineGetRequest;

  getKey(): string;
  setKey(value: string): OnlineGetRequest;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): OnlineGetRequest;
  clearFeaturesList(): OnlineGetRequest;
  addFeatures(value: string, index?: number): OnlineGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineGetRequest): OnlineGetRequest.AsObject;
  static serializeBinaryToWriter(message: OnlineGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineGetRequest;
  static deserializeBinaryFromReader(message: OnlineGetRequest, reader: jspb.BinaryReader): OnlineGetRequest;
}

export namespace OnlineGetRequest {
  export type AsObject = {
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    key: string,
    featuresList: Array<string>,
  }
}

export class OnlineGetResponse extends jspb.Message {
  getRowMap(): jspb.Map<string, Value>;
  clearRowMap(): OnlineGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineGetResponse): OnlineGetResponse.AsObject;
  static serializeBinaryToWriter(message: OnlineGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineGetResponse;
  static deserializeBinaryFromReader(message: OnlineGetResponse, reader: jspb.BinaryReader): OnlineGetResponse;
}

export namespace OnlineGetResponse {
  export type AsObject = {
    rowMap: Array<[string, Value.AsObject]>,
  }
}

export class OnlineMultiGetRequest extends jspb.Message {
  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): OnlineMultiGetRequest;
  hasModelclass(): boolean;
  clearModelclass(): OnlineMultiGetRequest;

  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): OnlineMultiGetRequest;
  clearKeyList(): OnlineMultiGetRequest;
  addKey(value: string, index?: number): OnlineMultiGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineMultiGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineMultiGetRequest): OnlineMultiGetRequest.AsObject;
  static serializeBinaryToWriter(message: OnlineMultiGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineMultiGetRequest;
  static deserializeBinaryFromReader(message: OnlineMultiGetRequest, reader: jspb.BinaryReader): OnlineMultiGetRequest;
}

export namespace OnlineMultiGetRequest {
  export type AsObject = {
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    keyList: Array<string>,
  }
}

export class OnlineMultiGetResponse extends jspb.Message {
  getResultMap(): jspb.Map<string, Row>;
  clearResultMap(): OnlineMultiGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineMultiGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineMultiGetResponse): OnlineMultiGetResponse.AsObject;
  static serializeBinaryToWriter(message: OnlineMultiGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineMultiGetResponse;
  static deserializeBinaryFromReader(message: OnlineMultiGetResponse, reader: jspb.BinaryReader): OnlineMultiGetResponse;
}

export namespace OnlineMultiGetResponse {
  export type AsObject = {
    resultMap: Array<[string, Row.AsObject]>,
  }
}

export class ImportRequest extends jspb.Message {
  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): ImportRequest;
  hasModelclass(): boolean;
  clearModelclass(): ImportRequest;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation): ImportRequest;
  hasLocation(): boolean;
  clearLocation(): ImportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportRequest): ImportRequest.AsObject;
  static serializeBinaryToWriter(message: ImportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportRequest;
  static deserializeBinaryFromReader(message: ImportRequest, reader: jspb.BinaryReader): ImportRequest;
}

export namespace ImportRequest {
  export type AsObject = {
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class ImportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportResponse): ImportResponse.AsObject;
  static serializeBinaryToWriter(message: ImportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportResponse;
  static deserializeBinaryFromReader(message: ImportResponse, reader: jspb.BinaryReader): ImportResponse;
}

export namespace ImportResponse {
  export type AsObject = {
  }
}

export class Row extends jspb.Message {
  getKey(): string;
  setKey(value: string): Row;

  getDataMap(): jspb.Map<string, Value>;
  clearDataMap(): Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Row.AsObject;
  static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
  static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Row;
  static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
  export type AsObject = {
    key: string,
    dataMap: Array<[string, Value.AsObject]>,
  }
}

export class PushRequest extends jspb.Message {
  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): PushRequest;
  hasModelclass(): boolean;
  clearModelclass(): PushRequest;

  getRowsList(): Array<Row>;
  setRowsList(value: Array<Row>): PushRequest;
  clearRowsList(): PushRequest;
  addRows(value?: Row, index?: number): Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PushRequest): PushRequest.AsObject;
  static serializeBinaryToWriter(message: PushRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushRequest;
  static deserializeBinaryFromReader(message: PushRequest, reader: jspb.BinaryReader): PushRequest;
}

export namespace PushRequest {
  export type AsObject = {
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    rowsList: Array<Row.AsObject>,
  }
}

export class PushResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PushResponse): PushResponse.AsObject;
  static serializeBinaryToWriter(message: PushResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushResponse;
  static deserializeBinaryFromReader(message: PushResponse, reader: jspb.BinaryReader): PushResponse;
}

export namespace PushResponse {
  export type AsObject = {
  }
}

