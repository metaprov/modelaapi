import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class DataBlock extends jspb.Message {
  getName(): string;
  setName(value: string): DataBlock;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): DataBlock;

  getMd5Hash(): string;
  setMd5Hash(value: string): DataBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataBlock.AsObject;
  static toObject(includeInstance: boolean, msg: DataBlock): DataBlock.AsObject;
  static serializeBinaryToWriter(message: DataBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataBlock;
  static deserializeBinaryFromReader(message: DataBlock, reader: jspb.BinaryReader): DataBlock;
}

export namespace DataBlock {
  export type AsObject = {
    name: string,
    data: Uint8Array | string,
    md5Hash: string,
  }
}

