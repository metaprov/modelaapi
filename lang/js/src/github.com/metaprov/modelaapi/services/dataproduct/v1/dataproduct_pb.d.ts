import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb';


export class ListDataProductsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataProductsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDataProductsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataProductsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataProductsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListDataProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductsRequest): ListDataProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductsRequest;
  static deserializeBinaryFromReader(message: ListDataProductsRequest, reader: jspb.BinaryReader): ListDataProductsRequest;
}

export namespace ListDataProductsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListDataProductsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductList | undefined;
  setItems(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductList): ListDataProductsResponse;
  hasItems(): boolean;
  clearItems(): ListDataProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductsResponse): ListDataProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductsResponse;
  static deserializeBinaryFromReader(message: ListDataProductsResponse, reader: jspb.BinaryReader): ListDataProductsResponse;
}

export namespace ListDataProductsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductList.AsObject,
  }
}

export class CreateDataProductRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateDataProductRequest;
  hasItem(): boolean;
  clearItem(): CreateDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataProductRequest): CreateDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataProductRequest;
  static deserializeBinaryFromReader(message: CreateDataProductRequest, reader: jspb.BinaryReader): CreateDataProductRequest;
}

export namespace CreateDataProductRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
  }
}

export class CreateDataProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataProductResponse): CreateDataProductResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDataProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataProductResponse;
  static deserializeBinaryFromReader(message: CreateDataProductResponse, reader: jspb.BinaryReader): CreateDataProductResponse;
}

export namespace CreateDataProductResponse {
  export type AsObject = {
  }
}

export class UpdateDataProductRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): UpdateDataProductRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataProductRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDataProductRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataProductRequest): UpdateDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataProductRequest;
  static deserializeBinaryFromReader(message: UpdateDataProductRequest, reader: jspb.BinaryReader): UpdateDataProductRequest;
}

export namespace UpdateDataProductRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDataProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataProductResponse): UpdateDataProductResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDataProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataProductResponse;
  static deserializeBinaryFromReader(message: UpdateDataProductResponse, reader: jspb.BinaryReader): UpdateDataProductResponse;
}

export namespace UpdateDataProductResponse {
  export type AsObject = {
  }
}

export class GetDataProductRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataProductRequest;

  getName(): string;
  setName(value: string): GetDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataProductRequest): GetDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataProductRequest;
  static deserializeBinaryFromReader(message: GetDataProductRequest, reader: jspb.BinaryReader): GetDataProductRequest;
}

export namespace GetDataProductRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetDataProductResponse extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): GetDataProductResponse;
  hasItem(): boolean;
  clearItem(): GetDataProductResponse;

  getAlertsList(): Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;
  setAlertsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>): GetDataProductResponse;
  clearAlertsList(): GetDataProductResponse;
  addAlerts(value?: github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert, index?: number): github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert;

  getDatasetsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;
  setDatasetsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>): GetDataProductResponse;
  clearDatasetsList(): GetDataProductResponse;
  addDatasets(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;

  getStudiesList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>;
  setStudiesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study>): GetDataProductResponse;
  clearStudiesList(): GetDataProductResponse;
  addStudies(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;

  getModelsList(): Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model>): GetDataProductResponse;
  clearModelsList(): GetDataProductResponse;
  addModels(value?: github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getPredictorsList(): Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;
  setPredictorsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>): GetDataProductResponse;
  clearPredictorsList(): GetDataProductResponse;
  addPredictors(value?: github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor, index?: number): github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor;

  getYaml(): string;
  setYaml(value: string): GetDataProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataProductResponse): GetDataProductResponse.AsObject;
  static serializeBinaryToWriter(message: GetDataProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataProductResponse;
  static deserializeBinaryFromReader(message: GetDataProductResponse, reader: jspb.BinaryReader): GetDataProductResponse;
}

export namespace GetDataProductResponse {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    alertsList: Array<github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject>,
    datasetsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject>,
    studiesList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject>,
    modelsList: Array<github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    predictorsList: Array<github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject>,
    yaml: string,
  }
}

export class DeleteDataProductRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataProductRequest;

  getName(): string;
  setName(value: string): DeleteDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataProductRequest): DeleteDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataProductRequest;
  static deserializeBinaryFromReader(message: DeleteDataProductRequest, reader: jspb.BinaryReader): DeleteDataProductRequest;
}

export namespace DeleteDataProductRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteDataProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataProductResponse): DeleteDataProductResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDataProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataProductResponse;
  static deserializeBinaryFromReader(message: DeleteDataProductResponse, reader: jspb.BinaryReader): DeleteDataProductResponse;
}

export namespace DeleteDataProductResponse {
  export type AsObject = {
  }
}

