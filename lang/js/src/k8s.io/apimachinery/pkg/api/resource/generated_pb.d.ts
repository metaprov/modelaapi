import * as jspb from 'google-protobuf'



export class Quantity extends jspb.Message {
  getString(): string;
  setString(value: string): Quantity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quantity.AsObject;
  static toObject(includeInstance: boolean, msg: Quantity): Quantity.AsObject;
  static serializeBinaryToWriter(message: Quantity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quantity;
  static deserializeBinaryFromReader(message: Quantity, reader: jspb.BinaryReader): Quantity;
}

export namespace Quantity {
  export type AsObject = {
    string: string,
  }
}

export class QuantityValue extends jspb.Message {
  getString(): string;
  setString(value: string): QuantityValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityValue.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityValue): QuantityValue.AsObject;
  static serializeBinaryToWriter(message: QuantityValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityValue;
  static deserializeBinaryFromReader(message: QuantityValue, reader: jspb.BinaryReader): QuantityValue;
}

export namespace QuantityValue {
  export type AsObject = {
    string: string,
  }
}

