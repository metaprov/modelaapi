import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';


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
  getAlgorithms(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList | undefined;
  setAlgorithms(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList): ListAlgorithmsResponse;
  hasAlgorithms(): boolean;
  clearAlgorithms(): ListAlgorithmsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlgorithmsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlgorithmsResponse): ListAlgorithmsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAlgorithmsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlgorithmsResponse;
  static deserializeBinaryFromReader(message: ListAlgorithmsResponse, reader: jspb.BinaryReader): ListAlgorithmsResponse;
}

export namespace ListAlgorithmsResponse {
  export type AsObject = {
    algorithms?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AlgorithmList.AsObject,
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
  getAlgorithm(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm | undefined;
  setAlgorithm(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm): GetAlgorithmResponse;
  hasAlgorithm(): boolean;
  clearAlgorithm(): GetAlgorithmResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlgorithmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlgorithmResponse): GetAlgorithmResponse.AsObject;
  static serializeBinaryToWriter(message: GetAlgorithmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlgorithmResponse;
  static deserializeBinaryFromReader(message: GetAlgorithmResponse, reader: jspb.BinaryReader): GetAlgorithmResponse;
}

export namespace GetAlgorithmResponse {
  export type AsObject = {
    algorithm?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.AsObject,
  }
}

export class ListManagedimagesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListManagedimagesRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListManagedimagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListManagedimagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListManagedimagesRequest): ListManagedimagesRequest.AsObject;
  static serializeBinaryToWriter(message: ListManagedimagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListManagedimagesRequest;
  static deserializeBinaryFromReader(message: ListManagedimagesRequest, reader: jspb.BinaryReader): ListManagedimagesRequest;
}

export namespace ListManagedimagesRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListManagedimagesResponse extends jspb.Message {
  getManagedimages(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList | undefined;
  setManagedimages(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList): ListManagedimagesResponse;
  hasManagedimages(): boolean;
  clearManagedimages(): ListManagedimagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListManagedimagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListManagedimagesResponse): ListManagedimagesResponse.AsObject;
  static serializeBinaryToWriter(message: ListManagedimagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListManagedimagesResponse;
  static deserializeBinaryFromReader(message: ListManagedimagesResponse, reader: jspb.BinaryReader): ListManagedimagesResponse;
}

export namespace ListManagedimagesResponse {
  export type AsObject = {
    managedimages?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImageList.AsObject,
  }
}

export class GetManagedimageRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetManagedimageRequest;

  getName(): string;
  setName(value: string): GetManagedimageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetManagedimageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetManagedimageRequest): GetManagedimageRequest.AsObject;
  static serializeBinaryToWriter(message: GetManagedimageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetManagedimageRequest;
  static deserializeBinaryFromReader(message: GetManagedimageRequest, reader: jspb.BinaryReader): GetManagedimageRequest;
}

export namespace GetManagedimageRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetManagedimageResponse extends jspb.Message {
  getManageditem(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage | undefined;
  setManageditem(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage): GetManagedimageResponse;
  hasManageditem(): boolean;
  clearManageditem(): GetManagedimageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetManagedimageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetManagedimageResponse): GetManagedimageResponse.AsObject;
  static serializeBinaryToWriter(message: GetManagedimageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetManagedimageResponse;
  static deserializeBinaryFromReader(message: GetManagedimageResponse, reader: jspb.BinaryReader): GetManagedimageResponse;
}

export namespace GetManagedimageResponse {
  export type AsObject = {
    manageditem?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ManagedImage.AsObject,
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
  getMlframeworks(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList | undefined;
  setMlframeworks(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList): ListMLFrameworksResponse;
  hasMlframeworks(): boolean;
  clearMlframeworks(): ListMLFrameworksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMLFrameworksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMLFrameworksResponse): ListMLFrameworksResponse.AsObject;
  static serializeBinaryToWriter(message: ListMLFrameworksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMLFrameworksResponse;
  static deserializeBinaryFromReader(message: ListMLFrameworksResponse, reader: jspb.BinaryReader): ListMLFrameworksResponse;
}

export namespace ListMLFrameworksResponse {
  export type AsObject = {
    mlframeworks?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFrameworkList.AsObject,
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
  getMlframework(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework | undefined;
  setMlframework(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework): GetMLFrameworkResponse;
  hasMlframework(): boolean;
  clearMlframework(): GetMLFrameworkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMLFrameworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMLFrameworkResponse): GetMLFrameworkResponse.AsObject;
  static serializeBinaryToWriter(message: GetMLFrameworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMLFrameworkResponse;
  static deserializeBinaryFromReader(message: GetMLFrameworkResponse, reader: jspb.BinaryReader): GetMLFrameworkResponse;
}

export namespace GetMLFrameworkResponse {
  export type AsObject = {
    mlframework?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.MLFramework.AsObject,
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
  getClouds(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList | undefined;
  setClouds(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList): ListCloudsResponse;
  hasClouds(): boolean;
  clearClouds(): ListCloudsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCloudsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCloudsResponse): ListCloudsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCloudsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCloudsResponse;
  static deserializeBinaryFromReader(message: ListCloudsResponse, reader: jspb.BinaryReader): ListCloudsResponse;
}

export namespace ListCloudsResponse {
  export type AsObject = {
    clouds?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.CloudList.AsObject,
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
  getCloud(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud | undefined;
  setCloud(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud): GetCloudResponse;
  hasCloud(): boolean;
  clearCloud(): GetCloudResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCloudResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCloudResponse): GetCloudResponse.AsObject;
  static serializeBinaryToWriter(message: GetCloudResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCloudResponse;
  static deserializeBinaryFromReader(message: GetCloudResponse, reader: jspb.BinaryReader): GetCloudResponse;
}

export namespace GetCloudResponse {
  export type AsObject = {
    cloud?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Cloud.AsObject,
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
  getPublicdatasets(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList | undefined;
  setPublicdatasets(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList): ListPublicDatasetsResponse;
  hasPublicdatasets(): boolean;
  clearPublicdatasets(): ListPublicDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicDatasetsResponse): ListPublicDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPublicDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicDatasetsResponse;
  static deserializeBinaryFromReader(message: ListPublicDatasetsResponse, reader: jspb.BinaryReader): ListPublicDatasetsResponse;
}

export namespace ListPublicDatasetsResponse {
  export type AsObject = {
    publicdatasets?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDatasetList.AsObject,
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
  getPublicdataset(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset | undefined;
  setPublicdataset(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset): GetPublicDatasetResponse;
  hasPublicdataset(): boolean;
  clearPublicdataset(): GetPublicDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicDatasetResponse): GetPublicDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GetPublicDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicDatasetResponse;
  static deserializeBinaryFromReader(message: GetPublicDatasetResponse, reader: jspb.BinaryReader): GetPublicDatasetResponse;
}

export namespace GetPublicDatasetResponse {
  export type AsObject = {
    publicdataset?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PublicDataset.AsObject,
  }
}

export class DownloadPublicDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadPublicDatasetRequest;

  getName(): string;
  setName(value: string): DownloadPublicDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPublicDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPublicDatasetRequest): DownloadPublicDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadPublicDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPublicDatasetRequest;
  static deserializeBinaryFromReader(message: DownloadPublicDatasetRequest, reader: jspb.BinaryReader): DownloadPublicDatasetRequest;
}

export namespace DownloadPublicDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DownloadPublicDatasetResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadPublicDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadPublicDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadPublicDatasetResponse): DownloadPublicDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadPublicDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadPublicDatasetResponse;
  static deserializeBinaryFromReader(message: DownloadPublicDatasetResponse, reader: jspb.BinaryReader): DownloadPublicDatasetResponse;
}

export namespace DownloadPublicDatasetResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class PreviewPublicDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): PreviewPublicDatasetRequest;

  getName(): string;
  setName(value: string): PreviewPublicDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewPublicDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewPublicDatasetRequest): PreviewPublicDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: PreviewPublicDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewPublicDatasetRequest;
  static deserializeBinaryFromReader(message: PreviewPublicDatasetRequest, reader: jspb.BinaryReader): PreviewPublicDatasetRequest;
}

export namespace PreviewPublicDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class PreviewPublicDatasetResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): PreviewPublicDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewPublicDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewPublicDatasetResponse): PreviewPublicDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: PreviewPublicDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewPublicDatasetResponse;
  static deserializeBinaryFromReader(message: PreviewPublicDatasetResponse, reader: jspb.BinaryReader): PreviewPublicDatasetResponse;
}

export namespace PreviewPublicDatasetResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class ApplyPublicDatasetCRRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ApplyPublicDatasetCRRequest;

  getName(): string;
  setName(value: string): ApplyPublicDatasetCRRequest;

  getCrname(): string;
  setCrname(value: string): ApplyPublicDatasetCRRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPublicDatasetCRRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPublicDatasetCRRequest): ApplyPublicDatasetCRRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyPublicDatasetCRRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPublicDatasetCRRequest;
  static deserializeBinaryFromReader(message: ApplyPublicDatasetCRRequest, reader: jspb.BinaryReader): ApplyPublicDatasetCRRequest;
}

export namespace ApplyPublicDatasetCRRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    crname: string,
  }
}

export class ApplyPublicDatasetCRResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): ApplyPublicDatasetCRResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPublicDatasetCRResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPublicDatasetCRResponse): ApplyPublicDatasetCRResponse.AsObject;
  static serializeBinaryToWriter(message: ApplyPublicDatasetCRResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPublicDatasetCRResponse;
  static deserializeBinaryFromReader(message: ApplyPublicDatasetCRResponse, reader: jspb.BinaryReader): ApplyPublicDatasetCRResponse;
}

export namespace ApplyPublicDatasetCRResponse {
  export type AsObject = {
    raw: Uint8Array | string,
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
  getPretrainedmodels(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList | undefined;
  setPretrainedmodels(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList): ListPretrainedModelsResponse;
  hasPretrainedmodels(): boolean;
  clearPretrainedmodels(): ListPretrainedModelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPretrainedModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPretrainedModelsResponse): ListPretrainedModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPretrainedModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPretrainedModelsResponse;
  static deserializeBinaryFromReader(message: ListPretrainedModelsResponse, reader: jspb.BinaryReader): ListPretrainedModelsResponse;
}

export namespace ListPretrainedModelsResponse {
  export type AsObject = {
    pretrainedmodels?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModelList.AsObject,
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
  getPretrainedmodel(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel | undefined;
  setPretrainedmodel(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel): GetPretrainedModelResponse;
  hasPretrainedmodel(): boolean;
  clearPretrainedmodel(): GetPretrainedModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPretrainedModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPretrainedModelResponse): GetPretrainedModelResponse.AsObject;
  static serializeBinaryToWriter(message: GetPretrainedModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPretrainedModelResponse;
  static deserializeBinaryFromReader(message: GetPretrainedModelResponse, reader: jspb.BinaryReader): GetPretrainedModelResponse;
}

export namespace GetPretrainedModelResponse {
  export type AsObject = {
    pretrainedmodel?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PretrainedModel.AsObject,
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
  getWorkloads(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList | undefined;
  setWorkloads(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList): ListWorkloadClassesResponse;
  hasWorkloads(): boolean;
  clearWorkloads(): ListWorkloadClassesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkloadClassesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkloadClassesResponse): ListWorkloadClassesResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkloadClassesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkloadClassesResponse;
  static deserializeBinaryFromReader(message: ListWorkloadClassesResponse, reader: jspb.BinaryReader): ListWorkloadClassesResponse;
}

export namespace ListWorkloadClassesResponse {
  export type AsObject = {
    workloads?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClassList.AsObject,
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
  getWorkload(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass | undefined;
  setWorkload(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass): GetWorkloadClassResponse;
  hasWorkload(): boolean;
  clearWorkload(): GetWorkloadClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkloadClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkloadClassResponse): GetWorkloadClassResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorkloadClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkloadClassResponse;
  static deserializeBinaryFromReader(message: GetWorkloadClassResponse, reader: jspb.BinaryReader): GetWorkloadClassResponse;
}

export namespace GetWorkloadClassResponse {
  export type AsObject = {
    workload?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkloadClass.AsObject,
  }
}

