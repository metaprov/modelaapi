import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';


export class BatchPredictRequest extends jspb.Message {
  getPrediction(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setPrediction(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): BatchPredictRequest;
  hasPrediction(): boolean;
  clearPrediction(): BatchPredictRequest;

  getFrombucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setFrombucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BatchPredictRequest;
  hasFrombucket(): boolean;
  clearFrombucket(): BatchPredictRequest;

  getFromconnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setFromconnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictRequest;
  hasFromconnection(): boolean;
  clearFromconnection(): BatchPredictRequest;

  getFromsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearFromsecretMap(): BatchPredictRequest;

  getTargetbucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setTargetbucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BatchPredictRequest;
  hasTargetbucket(): boolean;
  clearTargetbucket(): BatchPredictRequest;

  getToconnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setToconnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictRequest;
  hasToconnection(): boolean;
  clearToconnection(): BatchPredictRequest;

  getTosecretMap(): jspb.Map<string, Uint8Array | string>;
  clearTosecretMap(): BatchPredictRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictRequest): BatchPredictRequest.AsObject;
  static serializeBinaryToWriter(message: BatchPredictRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictRequest;
  static deserializeBinaryFromReader(message: BatchPredictRequest, reader: jspb.BinaryReader): BatchPredictRequest;
}

export namespace BatchPredictRequest {
  export type AsObject = {
    prediction?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    frombucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    fromconnection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    fromsecretMap: Array<[string, Uint8Array | string]>,
    targetbucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    toconnection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    tosecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class BatchPredictResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictResponse): BatchPredictResponse.AsObject;
  static serializeBinaryToWriter(message: BatchPredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictResponse;
  static deserializeBinaryFromReader(message: BatchPredictResponse, reader: jspb.BinaryReader): BatchPredictResponse;
}

export namespace BatchPredictResponse {
  export type AsObject = {
  }
}

