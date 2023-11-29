import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/llm/v1alpha1/generated_pb';


export class RefreshRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): RefreshRequest;
  hasProduct(): boolean;
  clearProduct(): RefreshRequest;

  getKnowledgebase(): github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase | undefined;
  setKnowledgebase(value?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase): RefreshRequest;
  hasKnowledgebase(): boolean;
  clearKnowledgebase(): RefreshRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshRequest): RefreshRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshRequest;
  static deserializeBinaryFromReader(message: RefreshRequest, reader: jspb.BinaryReader): RefreshRequest;
}

export namespace RefreshRequest {
  export type AsObject = {
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    knowledgebase?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase.AsObject,
  }
}

export class RefreshResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshResponse): RefreshResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshResponse;
  static deserializeBinaryFromReader(message: RefreshResponse, reader: jspb.BinaryReader): RefreshResponse;
}

export namespace RefreshResponse {
  export type AsObject = {
  }
}

