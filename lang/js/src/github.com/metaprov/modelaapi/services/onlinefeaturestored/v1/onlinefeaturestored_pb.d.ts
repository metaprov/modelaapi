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
  getNamespace(): string;
  setNamespace(value: string): OnlineGetRequest;

  getRowsList(): Array<GetRow>;
  setRowsList(value: Array<GetRow>): OnlineGetRequest;
  clearRowsList(): OnlineGetRequest;
  addRows(value?: GetRow, index?: number): GetRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineGetRequest): OnlineGetRequest.AsObject;
  static serializeBinaryToWriter(message: OnlineGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineGetRequest;
  static deserializeBinaryFromReader(message: OnlineGetRequest, reader: jspb.BinaryReader): OnlineGetRequest;
}

export namespace OnlineGetRequest {
  export type AsObject = {
    namespace: string,
    rowsList: Array<GetRow.AsObject>,
  }
}

export class FGFields extends jspb.Message {
  getKey(): string;
  setKey(value: string): FGFields;

  getKeyvalue(): string;
  setKeyvalue(value: string): FGFields;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): FGFields;
  clearFeaturesList(): FGFields;
  addFeatures(value: string, index?: number): FGFields;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FGFields.AsObject;
  static toObject(includeInstance: boolean, msg: FGFields): FGFields.AsObject;
  static serializeBinaryToWriter(message: FGFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FGFields;
  static deserializeBinaryFromReader(message: FGFields, reader: jspb.BinaryReader): FGFields;
}

export namespace FGFields {
  export type AsObject = {
    key: string,
    keyvalue: string,
    featuresList: Array<string>,
  }
}

export class GetRow extends jspb.Message {
  getGroupsList(): Array<FGFields>;
  setGroupsList(value: Array<FGFields>): GetRow;
  clearGroupsList(): GetRow;
  addGroups(value?: FGFields, index?: number): FGFields;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRow.AsObject;
  static toObject(includeInstance: boolean, msg: GetRow): GetRow.AsObject;
  static serializeBinaryToWriter(message: GetRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRow;
  static deserializeBinaryFromReader(message: GetRow, reader: jspb.BinaryReader): GetRow;
}

export namespace GetRow {
  export type AsObject = {
    groupsList: Array<FGFields.AsObject>,
  }
}

export class GetRowResult extends jspb.Message {
  getKeyname(): string;
  setKeyname(value: string): GetRowResult;

  getKey(): string;
  setKey(value: string): GetRowResult;

  getValuesMap(): jspb.Map<string, Value>;
  clearValuesMap(): GetRowResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRowResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetRowResult): GetRowResult.AsObject;
  static serializeBinaryToWriter(message: GetRowResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRowResult;
  static deserializeBinaryFromReader(message: GetRowResult, reader: jspb.BinaryReader): GetRowResult;
}

export namespace GetRowResult {
  export type AsObject = {
    keyname: string,
    key: string,
    valuesMap: Array<[string, Value.AsObject]>,
  }
}

export class OnlineGetResponse extends jspb.Message {
  getRowsList(): Array<GetRowResult>;
  setRowsList(value: Array<GetRowResult>): OnlineGetResponse;
  clearRowsList(): OnlineGetResponse;
  addRows(value?: GetRowResult, index?: number): GetRowResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineGetResponse): OnlineGetResponse.AsObject;
  static serializeBinaryToWriter(message: OnlineGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineGetResponse;
  static deserializeBinaryFromReader(message: OnlineGetResponse, reader: jspb.BinaryReader): OnlineGetResponse;
}

export namespace OnlineGetResponse {
  export type AsObject = {
    rowsList: Array<GetRowResult.AsObject>,
  }
}

export class Row extends jspb.Message {
  getKeyname(): string;
  setKeyname(value: string): Row;

  getKey(): string;
  setKey(value: string): Row;

  getField(): string;
  setField(value: string): Row;

  getValue(): Value | undefined;
  setValue(value?: Value): Row;
  hasValue(): boolean;
  clearValue(): Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Row.AsObject;
  static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
  static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Row;
  static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
  export type AsObject = {
    keyname: string,
    key: string,
    field: string,
    value?: Value.AsObject,
  }
}

export class PushRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PushRequest;

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
    namespace: string,
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

