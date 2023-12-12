import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/llm/v1alpha1/generated_pb';


export class RefreshRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): RefreshRequest;

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
    tenant: string,
    product?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    knowledgebase?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.KnowledgeBase.AsObject,
  }
}

export class DocumentStatusUpdate extends jspb.Message {
  getDelete(): boolean;
  setDelete(value: boolean): DocumentStatusUpdate;

  getError(): string;
  setError(value: string): DocumentStatusUpdate;

  getStatus(): github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.DocumentStatus | undefined;
  setStatus(value?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.DocumentStatus): DocumentStatusUpdate;
  hasStatus(): boolean;
  clearStatus(): DocumentStatusUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentStatusUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentStatusUpdate): DocumentStatusUpdate.AsObject;
  static serializeBinaryToWriter(message: DocumentStatusUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentStatusUpdate;
  static deserializeBinaryFromReader(message: DocumentStatusUpdate, reader: jspb.BinaryReader): DocumentStatusUpdate;
}

export namespace DocumentStatusUpdate {
  export type AsObject = {
    pb_delete: boolean,
    error: string,
    status?: github_com_metaprov_modelaapi_pkg_apis_llm_v1alpha1_generated_pb.DocumentStatus.AsObject,
  }
}

export class RefreshResponse extends jspb.Message {
  getStatusesList(): Array<DocumentStatusUpdate>;
  setStatusesList(value: Array<DocumentStatusUpdate>): RefreshResponse;
  clearStatusesList(): RefreshResponse;
  addStatuses(value?: DocumentStatusUpdate, index?: number): DocumentStatusUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshResponse): RefreshResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshResponse;
  static deserializeBinaryFromReader(message: RefreshResponse, reader: jspb.BinaryReader): RefreshResponse;
}

export namespace RefreshResponse {
  export type AsObject = {
    statusesList: Array<DocumentStatusUpdate.AsObject>,
  }
}

export class ShutdownRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownRequest): ShutdownRequest.AsObject;
  static serializeBinaryToWriter(message: ShutdownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownRequest;
  static deserializeBinaryFromReader(message: ShutdownRequest, reader: jspb.BinaryReader): ShutdownRequest;
}

export namespace ShutdownRequest {
  export type AsObject = {
  }
}

export class ShutdownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownResponse): ShutdownResponse.AsObject;
  static serializeBinaryToWriter(message: ShutdownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownResponse;
  static deserializeBinaryFromReader(message: ShutdownResponse, reader: jspb.BinaryReader): ShutdownResponse;
}

export namespace ShutdownResponse {
  export type AsObject = {
  }
}

