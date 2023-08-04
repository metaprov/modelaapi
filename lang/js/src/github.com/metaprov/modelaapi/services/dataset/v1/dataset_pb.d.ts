import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListDatasetsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDatasetsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDatasetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatasetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatasetsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListDatasetsResponse extends jspb.Message {
  getDatasets(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList | undefined;
  setDatasets(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList): ListDatasetsResponse;
  hasDatasets(): boolean;
  clearDatasets(): ListDatasetsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsResponse): ListDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsResponse;
  static deserializeBinaryFromReader(message: ListDatasetsResponse, reader: jspb.BinaryReader): ListDatasetsResponse;
}

export namespace ListDatasetsResponse {
  export type AsObject = {
    datasets?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetList.AsObject,
    nextPageToken: string,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetRequest;

  getName(): string;
  setName(value: string): GetDatasetRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
  static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class GetDatasetResponse extends jspb.Message {
  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): GetDatasetResponse;
  hasDataset(): boolean;
  clearDataset(): GetDatasetResponse;

  getYaml(): string;
  setYaml(value: string): GetDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetResponse): GetDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetResponse;
  static deserializeBinaryFromReader(message: GetDatasetResponse, reader: jspb.BinaryReader): GetDatasetResponse;
}

export namespace GetDatasetResponse {
  export type AsObject = {
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    yaml: string,
  }
}

export class CreateDatasetRequest extends jspb.Message {
  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): CreateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class CreateDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetResponse): CreateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetResponse;
  static deserializeBinaryFromReader(message: CreateDatasetResponse, reader: jspb.BinaryReader): CreateDatasetResponse;
}

export namespace CreateDatasetResponse {
  export type AsObject = {
  }
}

export class UpdateDatasetRequest extends jspb.Message {
  getDataset(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): UpdateDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): UpdateDatasetRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDatasetRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetRequest): UpdateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetRequest;
  static deserializeBinaryFromReader(message: UpdateDatasetRequest, reader: jspb.BinaryReader): UpdateDatasetRequest;
}

export namespace UpdateDatasetRequest {
  export type AsObject = {
    dataset?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetResponse): UpdateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetResponse;
  static deserializeBinaryFromReader(message: UpdateDatasetResponse, reader: jspb.BinaryReader): UpdateDatasetResponse;
}

export namespace UpdateDatasetResponse {
  export type AsObject = {
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDatasetRequest;

  getName(): string;
  setName(value: string): DeleteDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetResponse): DeleteDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetResponse;
  static deserializeBinaryFromReader(message: DeleteDatasetResponse, reader: jspb.BinaryReader): DeleteDatasetResponse;
}

export namespace DeleteDatasetResponse {
  export type AsObject = {
  }
}

export class GetDatasetProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetProfileRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference): GetDatasetProfileRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): GetDatasetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetProfileRequest): GetDatasetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetProfileRequest;
  static deserializeBinaryFromReader(message: GetDatasetProfileRequest, reader: jspb.BinaryReader): GetDatasetProfileRequest;
}

export namespace GetDatasetProfileRequest {
  export type AsObject = {
    namespace: string,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference.AsObject,
  }
}

export class GetDatasetProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile): GetDatasetProfileResponse;
  hasProfile(): boolean;
  clearProfile(): GetDatasetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetProfileResponse): GetDatasetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatasetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetProfileResponse;
  static deserializeBinaryFromReader(message: GetDatasetProfileResponse, reader: jspb.BinaryReader): GetDatasetProfileResponse;
}

export namespace GetDatasetProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
  }
}

export class DownloadDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadDatasetRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference): DownloadDatasetRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): DownloadDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadDatasetRequest): DownloadDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadDatasetRequest;
  static deserializeBinaryFromReader(message: DownloadDatasetRequest, reader: jspb.BinaryReader): DownloadDatasetRequest;
}

export namespace DownloadDatasetRequest {
  export type AsObject = {
    namespace: string,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference.AsObject,
  }
}

export class DownloadDatasetResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadDatasetResponse): DownloadDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadDatasetResponse;
  static deserializeBinaryFromReader(message: DownloadDatasetResponse, reader: jspb.BinaryReader): DownloadDatasetResponse;
}

export namespace DownloadDatasetResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class GetDatasetAnomaliesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetAnomaliesRequest;

  getSnapshot(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference | undefined;
  setSnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference): GetDatasetAnomaliesRequest;
  hasSnapshot(): boolean;
  clearSnapshot(): GetDatasetAnomaliesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetAnomaliesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetAnomaliesRequest): GetDatasetAnomaliesRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetAnomaliesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetAnomaliesRequest;
  static deserializeBinaryFromReader(message: GetDatasetAnomaliesRequest, reader: jspb.BinaryReader): GetDatasetAnomaliesRequest;
}

export namespace GetDatasetAnomaliesRequest {
  export type AsObject = {
    namespace: string,
    snapshot?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference.AsObject,
  }
}

export class GetDatasetAnomaliesResponse extends jspb.Message {
  getTable(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setTable(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): GetDatasetAnomaliesResponse;
  hasTable(): boolean;
  clearTable(): GetDatasetAnomaliesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetAnomaliesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetAnomaliesResponse): GetDatasetAnomaliesResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatasetAnomaliesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetAnomaliesResponse;
  static deserializeBinaryFromReader(message: GetDatasetAnomaliesResponse, reader: jspb.BinaryReader): GetDatasetAnomaliesResponse;
}

export namespace GetDatasetAnomaliesResponse {
  export type AsObject = {
    table?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

export class CompareDatasetsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompareDatasetsRequest;

  getSnapshotsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference>;
  setSnapshotsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference>): CompareDatasetsRequest;
  clearSnapshotsList(): CompareDatasetsRequest;
  addSnapshots(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompareDatasetsRequest): CompareDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: CompareDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareDatasetsRequest;
  static deserializeBinaryFromReader(message: CompareDatasetsRequest, reader: jspb.BinaryReader): CompareDatasetsRequest;
}

export namespace CompareDatasetsRequest {
  export type AsObject = {
    namespace: string,
    snapshotsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.SnapshotReference.AsObject>,
  }
}

export class CompareDatasetsResponse extends jspb.Message {
  getProfilesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>;
  setProfilesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>): CompareDatasetsResponse;
  clearProfilesList(): CompareDatasetsResponse;
  addProfiles(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompareDatasetsResponse): CompareDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: CompareDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareDatasetsResponse;
  static deserializeBinaryFromReader(message: CompareDatasetsResponse, reader: jspb.BinaryReader): CompareDatasetsResponse;
}

export namespace CompareDatasetsResponse {
  export type AsObject = {
    profilesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject>,
  }
}

