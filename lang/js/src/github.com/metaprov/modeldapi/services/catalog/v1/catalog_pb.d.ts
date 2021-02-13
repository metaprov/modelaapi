import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated_pb';


export class ListAlgorithmsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAlgorithmsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListAlgorithmsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlgorithmsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlgorithmsRequest): ListAlgorithmsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAlgorithmsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlgorithmsRequest;
  static deserializeBinaryFromReader(message: ListAlgorithmsRequest, reader: jspb.BinaryReader): ListAlgorithmsRequest;
}

export namespace ListAlgorithmsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListAlgorithmsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList): ListAlgorithmsResponse;
  hasItems(): boolean;
  clearItems(): ListAlgorithmsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlgorithmsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlgorithmsResponse): ListAlgorithmsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAlgorithmsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlgorithmsResponse;
  static deserializeBinaryFromReader(message: ListAlgorithmsResponse, reader: jspb.BinaryReader): ListAlgorithmsResponse;
}

export namespace ListAlgorithmsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList.AsObject,
  }
}

export class GetAlgorithmRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAlgorithmRequest;

  getName(): string;
  setName(value: string): GetAlgorithmRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlgorithmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlgorithmRequest): GetAlgorithmRequest.AsObject;
  static serializeBinaryToWriter(message: GetAlgorithmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlgorithmRequest;
  static deserializeBinaryFromReader(message: GetAlgorithmRequest, reader: jspb.BinaryReader): GetAlgorithmRequest;
}

export namespace GetAlgorithmRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetAlgorithmResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm): GetAlgorithmResponse;
  hasItem(): boolean;
  clearItem(): GetAlgorithmResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlgorithmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlgorithmResponse): GetAlgorithmResponse.AsObject;
  static serializeBinaryToWriter(message: GetAlgorithmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlgorithmResponse;
  static deserializeBinaryFromReader(message: GetAlgorithmResponse, reader: jspb.BinaryReader): GetAlgorithmResponse;
}

export namespace GetAlgorithmResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.AsObject,
  }
}

export class ListMLFrameworksRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListMLFrameworksRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListMLFrameworksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMLFrameworksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMLFrameworksRequest): ListMLFrameworksRequest.AsObject;
  static serializeBinaryToWriter(message: ListMLFrameworksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMLFrameworksRequest;
  static deserializeBinaryFromReader(message: ListMLFrameworksRequest, reader: jspb.BinaryReader): ListMLFrameworksRequest;
}

export namespace ListMLFrameworksRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListMLFrameworksResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList): ListMLFrameworksResponse;
  hasItems(): boolean;
  clearItems(): ListMLFrameworksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMLFrameworksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMLFrameworksResponse): ListMLFrameworksResponse.AsObject;
  static serializeBinaryToWriter(message: ListMLFrameworksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMLFrameworksResponse;
  static deserializeBinaryFromReader(message: ListMLFrameworksResponse, reader: jspb.BinaryReader): ListMLFrameworksResponse;
}

export namespace ListMLFrameworksResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList.AsObject,
  }
}

export class GetMLFrameworkRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetMLFrameworkRequest;

  getName(): string;
  setName(value: string): GetMLFrameworkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMLFrameworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMLFrameworkRequest): GetMLFrameworkRequest.AsObject;
  static serializeBinaryToWriter(message: GetMLFrameworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMLFrameworkRequest;
  static deserializeBinaryFromReader(message: GetMLFrameworkRequest, reader: jspb.BinaryReader): GetMLFrameworkRequest;
}

export namespace GetMLFrameworkRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetMLFrameworkResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework): GetMLFrameworkResponse;
  hasItem(): boolean;
  clearItem(): GetMLFrameworkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMLFrameworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMLFrameworkResponse): GetMLFrameworkResponse.AsObject;
  static serializeBinaryToWriter(message: GetMLFrameworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMLFrameworkResponse;
  static deserializeBinaryFromReader(message: GetMLFrameworkResponse, reader: jspb.BinaryReader): GetMLFrameworkResponse;
}

export namespace GetMLFrameworkResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework.AsObject,
  }
}

export class ListCloudsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCloudsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListCloudsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCloudsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCloudsRequest): ListCloudsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCloudsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCloudsRequest;
  static deserializeBinaryFromReader(message: ListCloudsRequest, reader: jspb.BinaryReader): ListCloudsRequest;
}

export namespace ListCloudsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListCloudsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList): ListCloudsResponse;
  hasItems(): boolean;
  clearItems(): ListCloudsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCloudsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCloudsResponse): ListCloudsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCloudsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCloudsResponse;
  static deserializeBinaryFromReader(message: ListCloudsResponse, reader: jspb.BinaryReader): ListCloudsResponse;
}

export namespace ListCloudsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList.AsObject,
  }
}

export class GetCloudRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCloudRequest;

  getName(): string;
  setName(value: string): GetCloudRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCloudRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCloudRequest): GetCloudRequest.AsObject;
  static serializeBinaryToWriter(message: GetCloudRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCloudRequest;
  static deserializeBinaryFromReader(message: GetCloudRequest, reader: jspb.BinaryReader): GetCloudRequest;
}

export namespace GetCloudRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetCloudResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud): GetCloudResponse;
  hasItem(): boolean;
  clearItem(): GetCloudResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCloudResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCloudResponse): GetCloudResponse.AsObject;
  static serializeBinaryToWriter(message: GetCloudResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCloudResponse;
  static deserializeBinaryFromReader(message: GetCloudResponse, reader: jspb.BinaryReader): GetCloudResponse;
}

export namespace GetCloudResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud.AsObject,
  }
}

export class ListPublicDatasetsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPublicDatasetsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPublicDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicDatasetsRequest): ListPublicDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPublicDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicDatasetsRequest;
  static deserializeBinaryFromReader(message: ListPublicDatasetsRequest, reader: jspb.BinaryReader): ListPublicDatasetsRequest;
}

export namespace ListPublicDatasetsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListPublicDatasetsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList): ListPublicDatasetsResponse;
  hasItems(): boolean;
  clearItems(): ListPublicDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicDatasetsResponse): ListPublicDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPublicDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicDatasetsResponse;
  static deserializeBinaryFromReader(message: ListPublicDatasetsResponse, reader: jspb.BinaryReader): ListPublicDatasetsResponse;
}

export namespace ListPublicDatasetsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList.AsObject,
  }
}

export class GetPublicDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPublicDatasetRequest;

  getName(): string;
  setName(value: string): GetPublicDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicDatasetRequest): GetPublicDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetPublicDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicDatasetRequest;
  static deserializeBinaryFromReader(message: GetPublicDatasetRequest, reader: jspb.BinaryReader): GetPublicDatasetRequest;
}

export namespace GetPublicDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPublicDatasetResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset): GetPublicDatasetResponse;
  hasItem(): boolean;
  clearItem(): GetPublicDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicDatasetResponse): GetPublicDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GetPublicDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicDatasetResponse;
  static deserializeBinaryFromReader(message: GetPublicDatasetResponse, reader: jspb.BinaryReader): GetPublicDatasetResponse;
}

export namespace GetPublicDatasetResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset.AsObject,
  }
}

export class ListPretrainedModelsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPretrainedModelsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPretrainedModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPretrainedModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPretrainedModelsRequest): ListPretrainedModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPretrainedModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPretrainedModelsRequest;
  static deserializeBinaryFromReader(message: ListPretrainedModelsRequest, reader: jspb.BinaryReader): ListPretrainedModelsRequest;
}

export namespace ListPretrainedModelsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListPretrainedModelsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList): ListPretrainedModelsResponse;
  hasItems(): boolean;
  clearItems(): ListPretrainedModelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPretrainedModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPretrainedModelsResponse): ListPretrainedModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPretrainedModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPretrainedModelsResponse;
  static deserializeBinaryFromReader(message: ListPretrainedModelsResponse, reader: jspb.BinaryReader): ListPretrainedModelsResponse;
}

export namespace ListPretrainedModelsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList.AsObject,
  }
}

export class GetPretrainedModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPretrainedModelRequest;

  getName(): string;
  setName(value: string): GetPretrainedModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPretrainedModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPretrainedModelRequest): GetPretrainedModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetPretrainedModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPretrainedModelRequest;
  static deserializeBinaryFromReader(message: GetPretrainedModelRequest, reader: jspb.BinaryReader): GetPretrainedModelRequest;
}

export namespace GetPretrainedModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetPretrainedModelResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel): GetPretrainedModelResponse;
  hasItem(): boolean;
  clearItem(): GetPretrainedModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPretrainedModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPretrainedModelResponse): GetPretrainedModelResponse.AsObject;
  static serializeBinaryToWriter(message: GetPretrainedModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPretrainedModelResponse;
  static deserializeBinaryFromReader(message: GetPretrainedModelResponse, reader: jspb.BinaryReader): GetPretrainedModelResponse;
}

export namespace GetPretrainedModelResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel.AsObject,
  }
}

export class ListWorkloadClassesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListWorkloadClassesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListWorkloadClassesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkloadClassesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkloadClassesRequest): ListWorkloadClassesRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkloadClassesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkloadClassesRequest;
  static deserializeBinaryFromReader(message: ListWorkloadClassesRequest, reader: jspb.BinaryReader): ListWorkloadClassesRequest;
}

export namespace ListWorkloadClassesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListWorkloadClassesResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList): ListWorkloadClassesResponse;
  hasItems(): boolean;
  clearItems(): ListWorkloadClassesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkloadClassesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkloadClassesResponse): ListWorkloadClassesResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkloadClassesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkloadClassesResponse;
  static deserializeBinaryFromReader(message: ListWorkloadClassesResponse, reader: jspb.BinaryReader): ListWorkloadClassesResponse;
}

export namespace ListWorkloadClassesResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList.AsObject,
  }
}

export class GetWorkloadClassRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetWorkloadClassRequest;

  getNamespace(): string;
  setNamespace(value: string): GetWorkloadClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkloadClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkloadClassRequest): GetWorkloadClassRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkloadClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkloadClassRequest;
  static deserializeBinaryFromReader(message: GetWorkloadClassRequest, reader: jspb.BinaryReader): GetWorkloadClassRequest;
}

export namespace GetWorkloadClassRequest {
  export type AsObject = {
    name: string,
    namespace: string,
  }
}

export class GetWorkloadClassResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass): GetWorkloadClassResponse;
  hasItem(): boolean;
  clearItem(): GetWorkloadClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkloadClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkloadClassResponse): GetWorkloadClassResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorkloadClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkloadClassResponse;
  static deserializeBinaryFromReader(message: GetWorkloadClassResponse, reader: jspb.BinaryReader): GetWorkloadClassResponse;
}

export namespace GetWorkloadClassResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass.AsObject,
  }
}

