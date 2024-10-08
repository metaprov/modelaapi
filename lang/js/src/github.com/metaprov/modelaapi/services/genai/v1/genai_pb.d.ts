import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/genai/v1alpha1/generated_pb';


export class RefreshRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): RefreshRequest;

  getKnowledgebase(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.KnowledgeBase | undefined;
  setKnowledgebase(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.KnowledgeBase): RefreshRequest;
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
    knowledgebase?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.KnowledgeBase.AsObject,
  }
}

export class DocumentStatusUpdate extends jspb.Message {
  getDelete(): boolean;
  setDelete(value: boolean): DocumentStatusUpdate;

  getName(): string;
  setName(value: string): DocumentStatusUpdate;

  getError(): string;
  setError(value: string): DocumentStatusUpdate;

  getStatus(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.DocumentStatus | undefined;
  setStatus(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.DocumentStatus): DocumentStatusUpdate;
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
    name: string,
    error: string,
    status?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.DocumentStatus.AsObject,
  }
}

export class IndexStatusUpdate extends jspb.Message {
  getDelete(): boolean;
  setDelete(value: boolean): IndexStatusUpdate;

  getName(): string;
  setName(value: string): IndexStatusUpdate;

  getDocuments(): number;
  setDocuments(value: number): IndexStatusUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexStatusUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: IndexStatusUpdate): IndexStatusUpdate.AsObject;
  static serializeBinaryToWriter(message: IndexStatusUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexStatusUpdate;
  static deserializeBinaryFromReader(message: IndexStatusUpdate, reader: jspb.BinaryReader): IndexStatusUpdate;
}

export namespace IndexStatusUpdate {
  export type AsObject = {
    pb_delete: boolean,
    name: string,
    documents: number,
  }
}

export class RefreshResponse extends jspb.Message {
  getDocumentStatusesList(): Array<DocumentStatusUpdate>;
  setDocumentStatusesList(value: Array<DocumentStatusUpdate>): RefreshResponse;
  clearDocumentStatusesList(): RefreshResponse;
  addDocumentStatuses(value?: DocumentStatusUpdate, index?: number): DocumentStatusUpdate;

  getIndexStatusesList(): Array<IndexStatusUpdate>;
  setIndexStatusesList(value: Array<IndexStatusUpdate>): RefreshResponse;
  clearIndexStatusesList(): RefreshResponse;
  addIndexStatuses(value?: IndexStatusUpdate, index?: number): IndexStatusUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshResponse): RefreshResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshResponse;
  static deserializeBinaryFromReader(message: RefreshResponse, reader: jspb.BinaryReader): RefreshResponse;
}

export namespace RefreshResponse {
  export type AsObject = {
    documentStatusesList: Array<DocumentStatusUpdate.AsObject>,
    indexStatusesList: Array<IndexStatusUpdate.AsObject>,
  }
}

export class TeardownRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): TeardownRequest;

  getKnowledgebase(): github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.KnowledgeBase | undefined;
  setKnowledgebase(value?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.KnowledgeBase): TeardownRequest;
  hasKnowledgebase(): boolean;
  clearKnowledgebase(): TeardownRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeardownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeardownRequest): TeardownRequest.AsObject;
  static serializeBinaryToWriter(message: TeardownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeardownRequest;
  static deserializeBinaryFromReader(message: TeardownRequest, reader: jspb.BinaryReader): TeardownRequest;
}

export namespace TeardownRequest {
  export type AsObject = {
    tenant: string,
    knowledgebase?: github_com_metaprov_modelaapi_pkg_apis_genai_v1alpha1_generated_pb.KnowledgeBase.AsObject,
  }
}

export class TeardownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeardownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeardownResponse): TeardownResponse.AsObject;
  static serializeBinaryToWriter(message: TeardownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeardownResponse;
  static deserializeBinaryFromReader(message: TeardownResponse, reader: jspb.BinaryReader): TeardownResponse;
}

export namespace TeardownResponse {
  export type AsObject = {
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

