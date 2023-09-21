import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modelaapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb';


export class ListDatasetSnapshotsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDatasetSnapshotsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDatasetSnapshotsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatasetSnapshotsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatasetSnapshotsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListDatasetSnapshotsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetSnapshotsRequest): ListDatasetSnapshotsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetSnapshotsRequest;
  static deserializeBinaryFromReader(message: ListDatasetSnapshotsRequest, reader: jspb.BinaryReader): ListDatasetSnapshotsRequest;
}

export namespace ListDatasetSnapshotsRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
    pageSize: number,
    pageToken: string,
    orderBy: string,
  }
}

export class ListDatasetSnapshotsResponse extends jspb.Message {
  getDatasetsnapshots(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshotList | undefined;
  setDatasetsnapshots(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshotList): ListDatasetSnapshotsResponse;
  hasDatasetsnapshots(): boolean;
  clearDatasetsnapshots(): ListDatasetSnapshotsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatasetSnapshotsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetSnapshotsResponse): ListDatasetSnapshotsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasetSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetSnapshotsResponse;
  static deserializeBinaryFromReader(message: ListDatasetSnapshotsResponse, reader: jspb.BinaryReader): ListDatasetSnapshotsResponse;
}

export namespace ListDatasetSnapshotsResponse {
  export type AsObject = {
    datasetsnapshots?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshotList.AsObject,
    nextPageToken: string,
  }
}

export class GetDatasetSnapshotRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetSnapshotRequest;

  getName(): string;
  setName(value: string): GetDatasetSnapshotRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): GetDatasetSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetSnapshotRequest): GetDatasetSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetSnapshotRequest;
  static deserializeBinaryFromReader(message: GetDatasetSnapshotRequest, reader: jspb.BinaryReader): GetDatasetSnapshotRequest;
}

export namespace GetDatasetSnapshotRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    labelsMap: Array<[string, string]>,
  }
}

export class GetDatasetSnapshotResponse extends jspb.Message {
  getDatasetsnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setDatasetsnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): GetDatasetSnapshotResponse;
  hasDatasetsnapshot(): boolean;
  clearDatasetsnapshot(): GetDatasetSnapshotResponse;

  getYaml(): string;
  setYaml(value: string): GetDatasetSnapshotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetSnapshotResponse): GetDatasetSnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatasetSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetSnapshotResponse;
  static deserializeBinaryFromReader(message: GetDatasetSnapshotResponse, reader: jspb.BinaryReader): GetDatasetSnapshotResponse;
}

export namespace GetDatasetSnapshotResponse {
  export type AsObject = {
    datasetsnapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    yaml: string,
  }
}

export class CreateDatasetSnapshotRequest extends jspb.Message {
  getDatasetsnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setDatasetsnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): CreateDatasetSnapshotRequest;
  hasDatasetsnapshot(): boolean;
  clearDatasetsnapshot(): CreateDatasetSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetSnapshotRequest): CreateDatasetSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetSnapshotRequest;
  static deserializeBinaryFromReader(message: CreateDatasetSnapshotRequest, reader: jspb.BinaryReader): CreateDatasetSnapshotRequest;
}

export namespace CreateDatasetSnapshotRequest {
  export type AsObject = {
    datasetsnapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
  }
}

export class CreateDatasetSnapshotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetSnapshotResponse): CreateDatasetSnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetSnapshotResponse;
  static deserializeBinaryFromReader(message: CreateDatasetSnapshotResponse, reader: jspb.BinaryReader): CreateDatasetSnapshotResponse;
}

export namespace CreateDatasetSnapshotResponse {
  export type AsObject = {
  }
}

export class UpdateDatasetSnapshotRequest extends jspb.Message {
  getDatasetsnapshot(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot | undefined;
  setDatasetsnapshot(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot): UpdateDatasetSnapshotRequest;
  hasDatasetsnapshot(): boolean;
  clearDatasetsnapshot(): UpdateDatasetSnapshotRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDatasetSnapshotRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateDatasetSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetSnapshotRequest): UpdateDatasetSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetSnapshotRequest;
  static deserializeBinaryFromReader(message: UpdateDatasetSnapshotRequest, reader: jspb.BinaryReader): UpdateDatasetSnapshotRequest;
}

export namespace UpdateDatasetSnapshotRequest {
  export type AsObject = {
    datasetsnapshot?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDatasetSnapshotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetSnapshotResponse): UpdateDatasetSnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetSnapshotResponse;
  static deserializeBinaryFromReader(message: UpdateDatasetSnapshotResponse, reader: jspb.BinaryReader): UpdateDatasetSnapshotResponse;
}

export namespace UpdateDatasetSnapshotResponse {
  export type AsObject = {
  }
}

export class DeleteDatasetSnapshotRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDatasetSnapshotRequest;

  getName(): string;
  setName(value: string): DeleteDatasetSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetSnapshotRequest): DeleteDatasetSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetSnapshotRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetSnapshotRequest, reader: jspb.BinaryReader): DeleteDatasetSnapshotRequest;
}

export namespace DeleteDatasetSnapshotRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteDatasetSnapshotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetSnapshotResponse): DeleteDatasetSnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetSnapshotResponse;
  static deserializeBinaryFromReader(message: DeleteDatasetSnapshotResponse, reader: jspb.BinaryReader): DeleteDatasetSnapshotResponse;
}

export namespace DeleteDatasetSnapshotResponse {
  export type AsObject = {
  }
}

export class GetDatasetSnapshotProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetSnapshotProfileRequest;

  getName(): string;
  setName(value: string): GetDatasetSnapshotProfileRequest;

  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): GetDatasetSnapshotProfileRequest;
  clearGroupsList(): GetDatasetSnapshotProfileRequest;
  addGroups(value: string, index?: number): GetDatasetSnapshotProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetSnapshotProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetSnapshotProfileRequest): GetDatasetSnapshotProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetSnapshotProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetSnapshotProfileRequest;
  static deserializeBinaryFromReader(message: GetDatasetSnapshotProfileRequest, reader: jspb.BinaryReader): GetDatasetSnapshotProfileRequest;
}

export namespace GetDatasetSnapshotProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    groupsList: Array<string>,
  }
}

export class GetDatasetSnapshotProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile): GetDatasetSnapshotProfileResponse;
  hasProfile(): boolean;
  clearProfile(): GetDatasetSnapshotProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetSnapshotProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetSnapshotProfileResponse): GetDatasetSnapshotProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatasetSnapshotProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetSnapshotProfileResponse;
  static deserializeBinaryFromReader(message: GetDatasetSnapshotProfileResponse, reader: jspb.BinaryReader): GetDatasetSnapshotProfileResponse;
}

export namespace GetDatasetSnapshotProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
  }
}

export class CompareDatasetSnapshotsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompareDatasetSnapshotsRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): CompareDatasetSnapshotsRequest;
  clearNamesList(): CompareDatasetSnapshotsRequest;
  addNames(value: string, index?: number): CompareDatasetSnapshotsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareDatasetSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompareDatasetSnapshotsRequest): CompareDatasetSnapshotsRequest.AsObject;
  static serializeBinaryToWriter(message: CompareDatasetSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareDatasetSnapshotsRequest;
  static deserializeBinaryFromReader(message: CompareDatasetSnapshotsRequest, reader: jspb.BinaryReader): CompareDatasetSnapshotsRequest;
}

export namespace CompareDatasetSnapshotsRequest {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
  }
}

export class CompareDatasetSnapshotsResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompareDatasetSnapshotsResponse;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): CompareDatasetSnapshotsResponse;
  clearNamesList(): CompareDatasetSnapshotsResponse;
  addNames(value: string, index?: number): CompareDatasetSnapshotsResponse;

  getProfilesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>;
  setProfilesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>): CompareDatasetSnapshotsResponse;
  clearProfilesList(): CompareDatasetSnapshotsResponse;
  addProfiles(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareDatasetSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompareDatasetSnapshotsResponse): CompareDatasetSnapshotsResponse.AsObject;
  static serializeBinaryToWriter(message: CompareDatasetSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareDatasetSnapshotsResponse;
  static deserializeBinaryFromReader(message: CompareDatasetSnapshotsResponse, reader: jspb.BinaryReader): CompareDatasetSnapshotsResponse;
}

export namespace CompareDatasetSnapshotsResponse {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
    profilesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject>,
  }
}

export class DownloadDatasetSnapshotRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadDatasetSnapshotRequest;

  getName(): string;
  setName(value: string): DownloadDatasetSnapshotRequest;

  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): DownloadDatasetSnapshotRequest;
  clearGroupsList(): DownloadDatasetSnapshotRequest;
  addGroups(value: string, index?: number): DownloadDatasetSnapshotRequest;

  getConvert(): boolean;
  setConvert(value: boolean): DownloadDatasetSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadDatasetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadDatasetSnapshotRequest): DownloadDatasetSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: DownloadDatasetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadDatasetSnapshotRequest;
  static deserializeBinaryFromReader(message: DownloadDatasetSnapshotRequest, reader: jspb.BinaryReader): DownloadDatasetSnapshotRequest;
}

export namespace DownloadDatasetSnapshotRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    groupsList: Array<string>,
    convert: boolean,
  }
}

export class DownloadDatasetSnapshotResponse extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): DownloadDatasetSnapshotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadDatasetSnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadDatasetSnapshotResponse): DownloadDatasetSnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: DownloadDatasetSnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadDatasetSnapshotResponse;
  static deserializeBinaryFromReader(message: DownloadDatasetSnapshotResponse, reader: jspb.BinaryReader): DownloadDatasetSnapshotResponse;
}

export namespace DownloadDatasetSnapshotResponse {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class GetDatasetSnapshotAnomaliesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetSnapshotAnomaliesRequest;

  getName(): string;
  setName(value: string): GetDatasetSnapshotAnomaliesRequest;

  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): GetDatasetSnapshotAnomaliesRequest;
  clearGroupsList(): GetDatasetSnapshotAnomaliesRequest;
  addGroups(value: string, index?: number): GetDatasetSnapshotAnomaliesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetSnapshotAnomaliesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetSnapshotAnomaliesRequest): GetDatasetSnapshotAnomaliesRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetSnapshotAnomaliesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetSnapshotAnomaliesRequest;
  static deserializeBinaryFromReader(message: GetDatasetSnapshotAnomaliesRequest, reader: jspb.BinaryReader): GetDatasetSnapshotAnomaliesRequest;
}

export namespace GetDatasetSnapshotAnomaliesRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    groupsList: Array<string>,
  }
}

export class GetDatasetSnapshotAnomaliesResponse extends jspb.Message {
  getTable(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setTable(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): GetDatasetSnapshotAnomaliesResponse;
  hasTable(): boolean;
  clearTable(): GetDatasetSnapshotAnomaliesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetSnapshotAnomaliesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetSnapshotAnomaliesResponse): GetDatasetSnapshotAnomaliesResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatasetSnapshotAnomaliesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetSnapshotAnomaliesResponse;
  static deserializeBinaryFromReader(message: GetDatasetSnapshotAnomaliesResponse, reader: jspb.BinaryReader): GetDatasetSnapshotAnomaliesResponse;
}

export namespace GetDatasetSnapshotAnomaliesResponse {
  export type AsObject = {
    table?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

