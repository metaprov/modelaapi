import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../k8s.io/api/core/v1/generated_pb';


export class PredictionsIngestRequest extends jspb.Message {
  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): PredictionsIngestRequest;
  hasDataset(): boolean;
  clearDataset(): PredictionsIngestRequest;

  getKey(): string;
  setKey(value: string): PredictionsIngestRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): PredictionsIngestRequest;
  hasConnection(): boolean;
  clearConnection(): PredictionsIngestRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): PredictionsIngestRequest;
  hasSecret(): boolean;
  clearSecret(): PredictionsIngestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionsIngestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionsIngestRequest): PredictionsIngestRequest.AsObject;
  static serializeBinaryToWriter(message: PredictionsIngestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionsIngestRequest;
  static deserializeBinaryFromReader(message: PredictionsIngestRequest, reader: jspb.BinaryReader): PredictionsIngestRequest;
}

export namespace PredictionsIngestRequest {
  export type AsObject = {
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    key: string,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class PredictionIngestResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionIngestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionIngestResponse): PredictionIngestResponse.AsObject;
  static serializeBinaryToWriter(message: PredictionIngestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionIngestResponse;
  static deserializeBinaryFromReader(message: PredictionIngestResponse, reader: jspb.BinaryReader): PredictionIngestResponse;
}

export namespace PredictionIngestResponse {
  export type AsObject = {
  }
}

