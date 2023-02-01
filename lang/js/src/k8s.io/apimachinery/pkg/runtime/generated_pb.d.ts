import * as jspb from 'google-protobuf'



export class RawExtension extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): RawExtension;
  hasRaw(): boolean;
  clearRaw(): RawExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawExtension.AsObject;
  static toObject(includeInstance: boolean, msg: RawExtension): RawExtension.AsObject;
  static serializeBinaryToWriter(message: RawExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawExtension;
  static deserializeBinaryFromReader(message: RawExtension, reader: jspb.BinaryReader): RawExtension;
}

export namespace RawExtension {
  export type AsObject = {
    raw?: Uint8Array | string,
  }
}

export class TypeMeta extends jspb.Message {
  getApiversion(): string;
  setApiversion(value: string): TypeMeta;
  hasApiversion(): boolean;
  clearApiversion(): TypeMeta;

  getKind(): string;
  setKind(value: string): TypeMeta;
  hasKind(): boolean;
  clearKind(): TypeMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeMeta.AsObject;
  static toObject(includeInstance: boolean, msg: TypeMeta): TypeMeta.AsObject;
  static serializeBinaryToWriter(message: TypeMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeMeta;
  static deserializeBinaryFromReader(message: TypeMeta, reader: jspb.BinaryReader): TypeMeta;
}

export namespace TypeMeta {
  export type AsObject = {
    apiversion?: string,
    kind?: string,
  }
}

export class Unknown extends jspb.Message {
  getTypemeta(): TypeMeta | undefined;
  setTypemeta(value?: TypeMeta): Unknown;
  hasTypemeta(): boolean;
  clearTypemeta(): Unknown;

  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): Unknown;
  hasRaw(): boolean;
  clearRaw(): Unknown;

  getContentencoding(): string;
  setContentencoding(value: string): Unknown;
  hasContentencoding(): boolean;
  clearContentencoding(): Unknown;

  getContenttype(): string;
  setContenttype(value: string): Unknown;
  hasContenttype(): boolean;
  clearContenttype(): Unknown;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Unknown.AsObject;
  static toObject(includeInstance: boolean, msg: Unknown): Unknown.AsObject;
  static serializeBinaryToWriter(message: Unknown, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Unknown;
  static deserializeBinaryFromReader(message: Unknown, reader: jspb.BinaryReader): Unknown;
}

export namespace Unknown {
  export type AsObject = {
    typemeta?: TypeMeta.AsObject,
    raw?: Uint8Array | string,
    contentencoding?: string,
    contenttype?: string,
  }
}

