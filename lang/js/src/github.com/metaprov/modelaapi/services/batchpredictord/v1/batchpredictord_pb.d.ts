import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class BatchPredictRequest extends jspb.Message {
  getPrediction(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setPrediction(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): BatchPredictRequest;
  hasPrediction(): boolean;
  clearPrediction(): BatchPredictRequest;

  getFrombucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setFrombucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BatchPredictRequest;
  hasFrombucket(): boolean;
  clearFrombucket(): BatchPredictRequest;

  getFromconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setFromconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictRequest;
  hasFromconnection(): boolean;
  clearFromconnection(): BatchPredictRequest;

  getFromsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearFromsecretMap(): BatchPredictRequest;

  getTobucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setTobucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BatchPredictRequest;
  hasTobucket(): boolean;
  clearTobucket(): BatchPredictRequest;

  getToconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setToconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictRequest;
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
    prediction?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    frombucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    fromconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    fromsecretMap: Array<[string, Uint8Array | string]>,
    tobucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    toconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    tosecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class BatchPredictModelClassRequest extends jspb.Message {
  getPrediction(): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setPrediction(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): BatchPredictModelClassRequest;
  hasPrediction(): boolean;
  clearPrediction(): BatchPredictModelClassRequest;

  getDatasource(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): BatchPredictModelClassRequest;
  hasDatasource(): boolean;
  clearDatasource(): BatchPredictModelClassRequest;

  getModel(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model): BatchPredictModelClassRequest;
  hasModel(): boolean;
  clearModel(): BatchPredictModelClassRequest;

  getModelclass(): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass | undefined;
  setModelclass(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass): BatchPredictModelClassRequest;
  hasModelclass(): boolean;
  clearModelclass(): BatchPredictModelClassRequest;

  getEntitiesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;
  setEntitiesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity>): BatchPredictModelClassRequest;
  clearEntitiesList(): BatchPredictModelClassRequest;
  addEntities(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity;

  getGroupsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>;
  setGroupsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup>): BatchPredictModelClassRequest;
  clearGroupsList(): BatchPredictModelClassRequest;
  addGroups(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;

  getFrombucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setFrombucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BatchPredictModelClassRequest;
  hasFrombucket(): boolean;
  clearFrombucket(): BatchPredictModelClassRequest;

  getFromconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setFromconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictModelClassRequest;
  hasFromconnection(): boolean;
  clearFromconnection(): BatchPredictModelClassRequest;

  getFromsecretMap(): jspb.Map<string, Uint8Array | string>;
  clearFromsecretMap(): BatchPredictModelClassRequest;

  getTobucket(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setTobucket(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): BatchPredictModelClassRequest;
  hasTobucket(): boolean;
  clearTobucket(): BatchPredictModelClassRequest;

  getToconnection(): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setToconnection(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): BatchPredictModelClassRequest;
  hasToconnection(): boolean;
  clearToconnection(): BatchPredictModelClassRequest;

  getTosecretMap(): jspb.Map<string, Uint8Array | string>;
  clearTosecretMap(): BatchPredictModelClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictModelClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictModelClassRequest): BatchPredictModelClassRequest.AsObject;
  static serializeBinaryToWriter(message: BatchPredictModelClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictModelClassRequest;
  static deserializeBinaryFromReader(message: BatchPredictModelClassRequest, reader: jspb.BinaryReader): BatchPredictModelClassRequest;
}

export namespace BatchPredictModelClassRequest {
  export type AsObject = {
    prediction?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
    datasource?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    model?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    modelclass?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.AsObject,
    entitiesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject>,
    groupsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.AsObject>,
    frombucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    fromconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    fromsecretMap: Array<[string, Uint8Array | string]>,
    tobucket?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    toconnection?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    tosecretMap: Array<[string, Uint8Array | string]>,
  }
}

export class BatchPredictResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): BatchPredictResponse;

  getRows(): number;
  setRows(value: number): BatchPredictResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchPredictResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchPredictResponse): BatchPredictResponse.AsObject;
  static serializeBinaryToWriter(message: BatchPredictResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchPredictResponse;
  static deserializeBinaryFromReader(message: BatchPredictResponse, reader: jspb.BinaryReader): BatchPredictResponse;
}

export namespace BatchPredictResponse {
  export type AsObject = {
    key: string,
    rows: number,
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

