import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';


export class RecordModelRequest extends jspb.Message {
  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): RecordModelRequest;
  hasModel(): boolean;
  clearModel(): RecordModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordModelRequest): RecordModelRequest.AsObject;
  static serializeBinaryToWriter(message: RecordModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordModelRequest;
  static deserializeBinaryFromReader(message: RecordModelRequest, reader: jspb.BinaryReader): RecordModelRequest;
}

export namespace RecordModelRequest {
  export type AsObject = {
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class RecordModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordModelResponse): RecordModelResponse.AsObject;
  static serializeBinaryToWriter(message: RecordModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordModelResponse;
  static deserializeBinaryFromReader(message: RecordModelResponse, reader: jspb.BinaryReader): RecordModelResponse;
}

export namespace RecordModelResponse {
  export type AsObject = {
  }
}

export class RecordStudyRequest extends jspb.Message {
  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): RecordStudyRequest;
  hasStudy(): boolean;
  clearStudy(): RecordStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordStudyRequest): RecordStudyRequest.AsObject;
  static serializeBinaryToWriter(message: RecordStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordStudyRequest;
  static deserializeBinaryFromReader(message: RecordStudyRequest, reader: jspb.BinaryReader): RecordStudyRequest;
}

export namespace RecordStudyRequest {
  export type AsObject = {
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
  }
}

export class RecordStudyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordStudyResponse): RecordStudyResponse.AsObject;
  static serializeBinaryToWriter(message: RecordStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordStudyResponse;
  static deserializeBinaryFromReader(message: RecordStudyResponse, reader: jspb.BinaryReader): RecordStudyResponse;
}

export namespace RecordStudyResponse {
  export type AsObject = {
  }
}

export class RecordDatasetRequest extends jspb.Message {
  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): RecordDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): RecordDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDatasetRequest): RecordDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDatasetRequest;
  static deserializeBinaryFromReader(message: RecordDatasetRequest, reader: jspb.BinaryReader): RecordDatasetRequest;
}

export namespace RecordDatasetRequest {
  export type AsObject = {
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class RecordDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDatasetResponse): RecordDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: RecordDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDatasetResponse;
  static deserializeBinaryFromReader(message: RecordDatasetResponse, reader: jspb.BinaryReader): RecordDatasetResponse;
}

export namespace RecordDatasetResponse {
  export type AsObject = {
  }
}

export class RecordPredictionPipelineRequest extends jspb.Message {
  getPrediction(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline | undefined;
  setPrediction(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline): RecordPredictionPipelineRequest;
  hasPrediction(): boolean;
  clearPrediction(): RecordPredictionPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPredictionPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPredictionPipelineRequest): RecordPredictionPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RecordPredictionPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPredictionPipelineRequest;
  static deserializeBinaryFromReader(message: RecordPredictionPipelineRequest, reader: jspb.BinaryReader): RecordPredictionPipelineRequest;
}

export namespace RecordPredictionPipelineRequest {
  export type AsObject = {
    prediction?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline.AsObject,
  }
}

export class RecordPredictionPipelineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPredictionPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPredictionPipelineResponse): RecordPredictionPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: RecordPredictionPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPredictionPipelineResponse;
  static deserializeBinaryFromReader(message: RecordPredictionPipelineResponse, reader: jspb.BinaryReader): RecordPredictionPipelineResponse;
}

export namespace RecordPredictionPipelineResponse {
  export type AsObject = {
  }
}

export class RecordPredictorRequest extends jspb.Message {
  getPredictor(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setPredictor(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): RecordPredictorRequest;
  hasPredictor(): boolean;
  clearPredictor(): RecordPredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPredictorRequest): RecordPredictorRequest.AsObject;
  static serializeBinaryToWriter(message: RecordPredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPredictorRequest;
  static deserializeBinaryFromReader(message: RecordPredictorRequest, reader: jspb.BinaryReader): RecordPredictorRequest;
}

export namespace RecordPredictorRequest {
  export type AsObject = {
    predictor?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
  }
}

export class RecordPredictorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPredictorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPredictorResponse): RecordPredictorResponse.AsObject;
  static serializeBinaryToWriter(message: RecordPredictorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPredictorResponse;
  static deserializeBinaryFromReader(message: RecordPredictorResponse, reader: jspb.BinaryReader): RecordPredictorResponse;
}

export namespace RecordPredictorResponse {
  export type AsObject = {
  }
}

export class RecordDataProductRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): RecordDataProductRequest;
  hasProduct(): boolean;
  clearProduct(): RecordDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataProductRequest): RecordDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataProductRequest;
  static deserializeBinaryFromReader(message: RecordDataProductRequest, reader: jspb.BinaryReader): RecordDataProductRequest;
}

export namespace RecordDataProductRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
  }
}

export class RecordDataProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataProductResponse): RecordDataProductResponse.AsObject;
  static serializeBinaryToWriter(message: RecordDataProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataProductResponse;
  static deserializeBinaryFromReader(message: RecordDataProductResponse, reader: jspb.BinaryReader): RecordDataProductResponse;
}

export namespace RecordDataProductResponse {
  export type AsObject = {
  }
}

export class RecordDataProductVersionRequest extends jspb.Message {
  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): RecordDataProductVersionRequest;
  hasVersion(): boolean;
  clearVersion(): RecordDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataProductVersionRequest): RecordDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataProductVersionRequest;
  static deserializeBinaryFromReader(message: RecordDataProductVersionRequest, reader: jspb.BinaryReader): RecordDataProductVersionRequest;
}

export namespace RecordDataProductVersionRequest {
  export type AsObject = {
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
  }
}

export class RecordDataProductVersionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataProductVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataProductVersionResponse): RecordDataProductVersionResponse.AsObject;
  static serializeBinaryToWriter(message: RecordDataProductVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataProductVersionResponse;
  static deserializeBinaryFromReader(message: RecordDataProductVersionResponse, reader: jspb.BinaryReader): RecordDataProductVersionResponse;
}

export namespace RecordDataProductVersionResponse {
  export type AsObject = {
  }
}

export class RecordAccountRequest extends jspb.Message {
  getAccount(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setAccount(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account): RecordAccountRequest;
  hasAccount(): boolean;
  clearAccount(): RecordAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordAccountRequest): RecordAccountRequest.AsObject;
  static serializeBinaryToWriter(message: RecordAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordAccountRequest;
  static deserializeBinaryFromReader(message: RecordAccountRequest, reader: jspb.BinaryReader): RecordAccountRequest;
}

export namespace RecordAccountRequest {
  export type AsObject = {
    account?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
  }
}

export class RecordAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordAccountResponse): RecordAccountResponse.AsObject;
  static serializeBinaryToWriter(message: RecordAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordAccountResponse;
  static deserializeBinaryFromReader(message: RecordAccountResponse, reader: jspb.BinaryReader): RecordAccountResponse;
}

export namespace RecordAccountResponse {
  export type AsObject = {
  }
}

export class RecordForecastResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordForecastResponse): RecordForecastResponse.AsObject;
  static serializeBinaryToWriter(message: RecordForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordForecastResponse;
  static deserializeBinaryFromReader(message: RecordForecastResponse, reader: jspb.BinaryReader): RecordForecastResponse;
}

export namespace RecordForecastResponse {
  export type AsObject = {
  }
}

export class DeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
  }
}

