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

