import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ModeldBlob extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ModeldBlob;

  getName(): string;
  setName(value: string): ModeldBlob;

  getKind(): string;
  setKind(value: string): ModeldBlob;

  getBlob(): string;
  setBlob(value: string): ModeldBlob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeldBlob.AsObject;
  static toObject(includeInstance: boolean, msg: ModeldBlob): ModeldBlob.AsObject;
  static serializeBinaryToWriter(message: ModeldBlob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeldBlob;
  static deserializeBinaryFromReader(message: ModeldBlob, reader: jspb.BinaryReader): ModeldBlob;
}

export namespace ModeldBlob {
  export type AsObject = {
    namespace: string,
    name: string,
    kind: string,
    blob: string,
  }
}

export class RecordObjectRequest extends jspb.Message {
  getItem(): ModeldBlob | undefined;
  setItem(value?: ModeldBlob): RecordObjectRequest;
  hasItem(): boolean;
  clearItem(): RecordObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordObjectRequest): RecordObjectRequest.AsObject;
  static serializeBinaryToWriter(message: RecordObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordObjectRequest;
  static deserializeBinaryFromReader(message: RecordObjectRequest, reader: jspb.BinaryReader): RecordObjectRequest;
}

export namespace RecordObjectRequest {
  export type AsObject = {
    item?: ModeldBlob.AsObject,
  }
}

export class GetObjectRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetObjectRequest;

  getName(): string;
  setName(value: string): GetObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectRequest): GetObjectRequest.AsObject;
  static serializeBinaryToWriter(message: GetObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectRequest;
  static deserializeBinaryFromReader(message: GetObjectRequest, reader: jspb.BinaryReader): GetObjectRequest;
}

export namespace GetObjectRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetObjectResponse extends jspb.Message {
  getItem(): ModeldBlob | undefined;
  setItem(value?: ModeldBlob): GetObjectResponse;
  hasItem(): boolean;
  clearItem(): GetObjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectResponse): GetObjectResponse.AsObject;
  static serializeBinaryToWriter(message: GetObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectResponse;
  static deserializeBinaryFromReader(message: GetObjectResponse, reader: jspb.BinaryReader): GetObjectResponse;
}

export namespace GetObjectResponse {
  export type AsObject = {
    item?: ModeldBlob.AsObject,
  }
}

export class ListObjectRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListObjectRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectRequest): ListObjectRequest.AsObject;
  static serializeBinaryToWriter(message: ListObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectRequest;
  static deserializeBinaryFromReader(message: ListObjectRequest, reader: jspb.BinaryReader): ListObjectRequest;
}

export namespace ListObjectRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListObjectResponse extends jspb.Message {
  getItemsList(): Array<ModeldBlob>;
  setItemsList(value: Array<ModeldBlob>): ListObjectResponse;
  clearItemsList(): ListObjectResponse;
  addItems(value?: ModeldBlob, index?: number): ModeldBlob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListObjectResponse): ListObjectResponse.AsObject;
  static serializeBinaryToWriter(message: ListObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListObjectResponse;
  static deserializeBinaryFromReader(message: ListObjectResponse, reader: jspb.BinaryReader): ListObjectResponse;
}

export namespace ListObjectResponse {
  export type AsObject = {
    itemsList: Array<ModeldBlob.AsObject>,
  }
}

export class DeleteObjectRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteObjectRequest;

  getName(): string;
  setName(value: string): DeleteObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectRequest): DeleteObjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectRequest;
  static deserializeBinaryFromReader(message: DeleteObjectRequest, reader: jspb.BinaryReader): DeleteObjectRequest;
}

export namespace DeleteObjectRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDatasetRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetRequest): ListDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetRequest;
  static deserializeBinaryFromReader(message: ListDatasetRequest, reader: jspb.BinaryReader): ListDatasetRequest;
}

export namespace ListDatasetRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListDatasetResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>): ListDatasetResponse;
  clearItemsList(): ListDatasetResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetResponse): ListDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetResponse;
  static deserializeBinaryFromReader(message: ListDatasetResponse, reader: jspb.BinaryReader): ListDatasetResponse;
}

export namespace ListDatasetResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject>,
  }
}

export class ListFeaturePipelineRunRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineRunRequest): ListFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: ListFeaturePipelineRunRequest, reader: jspb.BinaryReader): ListFeaturePipelineRunRequest;
}

export namespace ListFeaturePipelineRunRequest {
  export type AsObject = {
  }
}

export class ListFeaturePipelineRunResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>): ListFeaturePipelineRunResponse;
  clearItemsList(): ListFeaturePipelineRunResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineRunResponse): ListFeaturePipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineRunResponse;
  static deserializeBinaryFromReader(message: ListFeaturePipelineRunResponse, reader: jspb.BinaryReader): ListFeaturePipelineRunResponse;
}

export namespace ListFeaturePipelineRunResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject>,
  }
}

export class ListLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabelingPipelineRunRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineRunRequest): ListLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: ListLabelingPipelineRunRequest, reader: jspb.BinaryReader): ListLabelingPipelineRunRequest;
}

export namespace ListLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListLabelingPipelineRunResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>): ListLabelingPipelineRunResponse;
  clearItemsList(): ListLabelingPipelineRunResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineRunResponse): ListLabelingPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineRunResponse;
  static deserializeBinaryFromReader(message: ListLabelingPipelineRunResponse, reader: jspb.BinaryReader): ListLabelingPipelineRunResponse;
}

export namespace ListLabelingPipelineRunResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.AsObject>,
  }
}

export class ListRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRecipeRunRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunRequest): ListRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunRequest;
  static deserializeBinaryFromReader(message: ListRecipeRunRequest, reader: jspb.BinaryReader): ListRecipeRunRequest;
}

export namespace ListRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListRecipeRunResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>): ListRecipeRunResponse;
  clearItemsList(): ListRecipeRunResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunResponse): ListRecipeRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunResponse;
  static deserializeBinaryFromReader(message: ListRecipeRunResponse, reader: jspb.BinaryReader): ListRecipeRunResponse;
}

export namespace ListRecipeRunResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject>,
  }
}

export class ListReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListReportRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportRequest): ListReportRequest.AsObject;
  static serializeBinaryToWriter(message: ListReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportRequest;
  static deserializeBinaryFromReader(message: ListReportRequest, reader: jspb.BinaryReader): ListReportRequest;
}

export namespace ListReportRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListReportResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>): ListReportResponse;
  clearItemsList(): ListReportResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportResponse): ListReportResponse.AsObject;
  static serializeBinaryToWriter(message: ListReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportResponse;
  static deserializeBinaryFromReader(message: ListReportResponse, reader: jspb.BinaryReader): ListReportResponse;
}

export namespace ListReportResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject>,
  }
}

export class ListModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelRequest): ListModelRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelRequest;
  static deserializeBinaryFromReader(message: ListModelRequest, reader: jspb.BinaryReader): ListModelRequest;
}

export namespace ListModelRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListModelResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>): ListModelResponse;
  clearItemsList(): ListModelResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelResponse): ListModelResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelResponse;
  static deserializeBinaryFromReader(message: ListModelResponse, reader: jspb.BinaryReader): ListModelResponse;
}

export namespace ListModelResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
  }
}

export class ListStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListStudyRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudyRequest): ListStudyRequest.AsObject;
  static serializeBinaryToWriter(message: ListStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudyRequest;
  static deserializeBinaryFromReader(message: ListStudyRequest, reader: jspb.BinaryReader): ListStudyRequest;
}

export namespace ListStudyRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListStudyResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>): ListStudyResponse;
  clearItemsList(): ListStudyResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudyResponse): ListStudyResponse.AsObject;
  static serializeBinaryToWriter(message: ListStudyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudyResponse;
  static deserializeBinaryFromReader(message: ListStudyResponse, reader: jspb.BinaryReader): ListStudyResponse;
}

export namespace ListStudyResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject>,
  }
}

export class ListPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictionRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionRequest): ListPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionRequest;
  static deserializeBinaryFromReader(message: ListPredictionRequest, reader: jspb.BinaryReader): ListPredictionRequest;
}

export namespace ListPredictionRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListPredictionResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>): ListPredictionResponse;
  clearItemsList(): ListPredictionResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, index?: number): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionResponse): ListPredictionResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionResponse;
  static deserializeBinaryFromReader(message: ListPredictionResponse, reader: jspb.BinaryReader): ListPredictionResponse;
}

export namespace ListPredictionResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject>,
  }
}

export class ListModelAutoBuilderRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelAutoBuilderRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListModelAutoBuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelAutoBuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelAutoBuilderRequest): ListModelAutoBuilderRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelAutoBuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelAutoBuilderRequest;
  static deserializeBinaryFromReader(message: ListModelAutoBuilderRequest, reader: jspb.BinaryReader): ListModelAutoBuilderRequest;
}

export namespace ListModelAutoBuilderRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListModelAutoBuilderResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>): ListModelAutoBuilderResponse;
  clearItemsList(): ListModelAutoBuilderResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelAutoBuilderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelAutoBuilderResponse): ListModelAutoBuilderResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelAutoBuilderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelAutoBuilderResponse;
  static deserializeBinaryFromReader(message: ListModelAutoBuilderResponse, reader: jspb.BinaryReader): ListModelAutoBuilderResponse;
}

export namespace ListModelAutoBuilderResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject>,
  }
}

export class ListModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelPipelineRunRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelineRunRequest): ListModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: ListModelPipelineRunRequest, reader: jspb.BinaryReader): ListModelPipelineRunRequest;
}

export namespace ListModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListModelPipelineRunResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>): ListModelPipelineRunResponse;
  clearItemsList(): ListModelPipelineRunResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelineRunResponse): ListModelPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelineRunResponse;
  static deserializeBinaryFromReader(message: ListModelPipelineRunResponse, reader: jspb.BinaryReader): ListModelPipelineRunResponse;
}

export namespace ListModelPipelineRunResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.AsObject>,
  }
}

export class ListNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotebookRunRequest;

  getSelectorMap(): jspb.Map<string, string>;
  clearSelectorMap(): ListNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunRequest): ListNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunRequest;
  static deserializeBinaryFromReader(message: ListNotebookRunRequest, reader: jspb.BinaryReader): ListNotebookRunRequest;
}

export namespace ListNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    selectorMap: Array<[string, string]>,
  }
}

export class ListNotebookRunResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>): ListNotebookRunResponse;
  clearItemsList(): ListNotebookRunResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunResponse): ListNotebookRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunResponse;
  static deserializeBinaryFromReader(message: ListNotebookRunResponse, reader: jspb.BinaryReader): ListNotebookRunResponse;
}

export namespace ListNotebookRunResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject>,
  }
}

