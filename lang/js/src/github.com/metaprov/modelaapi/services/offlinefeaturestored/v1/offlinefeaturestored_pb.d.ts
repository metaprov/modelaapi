import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';


export class GenerateTrainingDatasetRequest extends jspb.Message {
  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): GenerateTrainingDatasetRequest;
  hasModel(): boolean;
  clearModel(): GenerateTrainingDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTrainingDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTrainingDatasetRequest): GenerateTrainingDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateTrainingDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTrainingDatasetRequest;
  static deserializeBinaryFromReader(message: GenerateTrainingDatasetRequest, reader: jspb.BinaryReader): GenerateTrainingDatasetRequest;
}

export namespace GenerateTrainingDatasetRequest {
  export type AsObject = {
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
  }
}

export class GenerateTrainingDatasetResponse extends jspb.Message {
  getPath(): string;
  setPath(value: string): GenerateTrainingDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTrainingDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTrainingDatasetResponse): GenerateTrainingDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateTrainingDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTrainingDatasetResponse;
  static deserializeBinaryFromReader(message: GenerateTrainingDatasetResponse, reader: jspb.BinaryReader): GenerateTrainingDatasetResponse;
}

export namespace GenerateTrainingDatasetResponse {
  export type AsObject = {
    path: string,
  }
}

export class SyncRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncRequest): SyncRequest.AsObject;
  static serializeBinaryToWriter(message: SyncRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncRequest;
  static deserializeBinaryFromReader(message: SyncRequest, reader: jspb.BinaryReader): SyncRequest;
}

export namespace SyncRequest {
  export type AsObject = {
  }
}

export class SyncResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncResponse): SyncResponse.AsObject;
  static serializeBinaryToWriter(message: SyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncResponse;
  static deserializeBinaryFromReader(message: SyncResponse, reader: jspb.BinaryReader): SyncResponse;
}

export namespace SyncResponse {
  export type AsObject = {
  }
}

