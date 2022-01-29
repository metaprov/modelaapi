import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';
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
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): GetDatasetResponse;
  hasItem(): boolean;
  clearItem(): GetDatasetResponse;

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
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    yaml: string,
  }
}

export class CreateDatasetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetRequest;
  hasItem(): boolean;
  clearItem(): CreateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
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
  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): UpdateDatasetRequest;
  hasItem(): boolean;
  clearItem(): UpdateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetRequest): UpdateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetRequest;
  static deserializeBinaryFromReader(message: UpdateDatasetRequest, reader: jspb.BinaryReader): UpdateDatasetRequest;
}

export namespace UpdateDatasetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
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

export class UploadChunkRequest extends jspb.Message {
  getFname(): string;
  setFname(value: string): UploadChunkRequest;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): UploadChunkRequest;

  getIndex(): number;
  setIndex(value: number): UploadChunkRequest;

  getLast(): boolean;
  setLast(value: boolean): UploadChunkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadChunkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadChunkRequest): UploadChunkRequest.AsObject;
  static serializeBinaryToWriter(message: UploadChunkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadChunkRequest;
  static deserializeBinaryFromReader(message: UploadChunkRequest, reader: jspb.BinaryReader): UploadChunkRequest;
}

export namespace UploadChunkRequest {
  export type AsObject = {
    fname: string,
    content: Uint8Array | string,
    index: number,
    last: boolean,
  }
}

export class UploadChunkResponse extends jspb.Message {
  getFname(): string;
  setFname(value: string): UploadChunkResponse;

  getOk(): boolean;
  setOk(value: boolean): UploadChunkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadChunkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadChunkResponse): UploadChunkResponse.AsObject;
  static serializeBinaryToWriter(message: UploadChunkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadChunkResponse;
  static deserializeBinaryFromReader(message: UploadChunkResponse, reader: jspb.BinaryReader): UploadChunkResponse;
}

export namespace UploadChunkResponse {
  export type AsObject = {
    fname: string,
    ok: boolean,
  }
}

export class CreateDatasetProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateDatasetProfileRequest;

  getName(): string;
  setName(value: string): CreateDatasetProfileRequest;

  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetProfileRequest;
  hasItem(): boolean;
  clearItem(): CreateDatasetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetProfileRequest): CreateDatasetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetProfileRequest;
  static deserializeBinaryFromReader(message: CreateDatasetProfileRequest, reader: jspb.BinaryReader): CreateDatasetProfileRequest;
}

export namespace CreateDatasetProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class CreateDatasetProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): CreateDatasetProfileResponse;

  getProfile(): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile): CreateDatasetProfileResponse;
  hasProfile(): boolean;
  clearProfile(): CreateDatasetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetProfileResponse): CreateDatasetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetProfileResponse;
  static deserializeBinaryFromReader(message: CreateDatasetProfileResponse, reader: jspb.BinaryReader): CreateDatasetProfileResponse;
}

export namespace CreateDatasetProfileResponse {
  export type AsObject = {
    uri: string,
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
  }
}

export class CreateColumnProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CreateColumnProfileRequest;

  getName(): string;
  setName(value: string): CreateColumnProfileRequest;

  getCol(): string;
  setCol(value: string): CreateColumnProfileRequest;

  getItem(): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateColumnProfileRequest;
  hasItem(): boolean;
  clearItem(): CreateColumnProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateColumnProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateColumnProfileRequest): CreateColumnProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateColumnProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateColumnProfileRequest;
  static deserializeBinaryFromReader(message: CreateColumnProfileRequest, reader: jspb.BinaryReader): CreateColumnProfileRequest;
}

export namespace CreateColumnProfileRequest {
  export type AsObject = {
    namespace: string,
    name: string,
    col: string,
    item?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class CreateColumnProfileResponse extends jspb.Message {
  getName(): string;
  setName(value: string): CreateColumnProfileResponse;

  getPlot(): github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot | undefined;
  setPlot(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot): CreateColumnProfileResponse;
  hasPlot(): boolean;
  clearPlot(): CreateColumnProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateColumnProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateColumnProfileResponse): CreateColumnProfileResponse.AsObject;
  static serializeBinaryToWriter(message: CreateColumnProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateColumnProfileResponse;
  static deserializeBinaryFromReader(message: CreateColumnProfileResponse, reader: jspb.BinaryReader): CreateColumnProfileResponse;
}

export namespace CreateColumnProfileResponse {
  export type AsObject = {
    name: string,
    plot?: github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot.AsObject,
  }
}

export class GetDatasetProfileRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetProfileRequest;

  getName(): string;
  setName(value: string): GetDatasetProfileRequest;

  getUri(): string;
  setUri(value: string): GetDatasetProfileRequest;

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
    name: string,
    uri: string,
  }
}

export class GetDatasetProfileResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetProfileResponse;

  getName(): string;
  setName(value: string): GetDatasetProfileResponse;

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
    namespace: string,
    name: string,
    profile?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject,
  }
}

export class CompareDatasetsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompareDatasetsRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): CompareDatasetsRequest;
  clearNamesList(): CompareDatasetsRequest;
  addNames(value: string, index?: number): CompareDatasetsRequest;

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
    namesList: Array<string>,
  }
}

export class CompareDatasetsResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): CompareDatasetsResponse;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): CompareDatasetsResponse;
  clearNamesList(): CompareDatasetsResponse;
  addNames(value: string, index?: number): CompareDatasetsResponse;

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
    namespace: string,
    namesList: Array<string>,
    profilesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject>,
  }
}

export class GenerateDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GenerateDatasetRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): GenerateDatasetRequest;
  clearNamesList(): GenerateDatasetRequest;
  addNames(value: string, index?: number): GenerateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDatasetRequest): GenerateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDatasetRequest;
  static deserializeBinaryFromReader(message: GenerateDatasetRequest, reader: jspb.BinaryReader): GenerateDatasetRequest;
}

export namespace GenerateDatasetRequest {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
  }
}

export class GenerateDatasetResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GenerateDatasetResponse;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): GenerateDatasetResponse;
  clearNamesList(): GenerateDatasetResponse;
  addNames(value: string, index?: number): GenerateDatasetResponse;

  getProfilesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>;
  setProfilesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>): GenerateDatasetResponse;
  clearProfilesList(): GenerateDatasetResponse;
  addProfiles(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateDatasetResponse): GenerateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateDatasetResponse;
  static deserializeBinaryFromReader(message: GenerateDatasetResponse, reader: jspb.BinaryReader): GenerateDatasetResponse;
}

export namespace GenerateDatasetResponse {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
    profilesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject>,
  }
}

export class ValidateDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ValidateDatasetRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): ValidateDatasetRequest;
  clearNamesList(): ValidateDatasetRequest;
  addNames(value: string, index?: number): ValidateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateDatasetRequest): ValidateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateDatasetRequest;
  static deserializeBinaryFromReader(message: ValidateDatasetRequest, reader: jspb.BinaryReader): ValidateDatasetRequest;
}

export namespace ValidateDatasetRequest {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
  }
}

export class ValidateDatasetResponse extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ValidateDatasetResponse;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): ValidateDatasetResponse;
  clearNamesList(): ValidateDatasetResponse;
  addNames(value: string, index?: number): ValidateDatasetResponse;

  getProfilesList(): Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>;
  setProfilesList(value: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile>): ValidateDatasetResponse;
  clearProfilesList(): ValidateDatasetResponse;
  addProfiles(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, index?: number): github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateDatasetResponse): ValidateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateDatasetResponse;
  static deserializeBinaryFromReader(message: ValidateDatasetResponse, reader: jspb.BinaryReader): ValidateDatasetResponse;
}

export namespace ValidateDatasetResponse {
  export type AsObject = {
    namespace: string,
    namesList: Array<string>,
    profilesList: Array<github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.AsObject>,
  }
}

export class DownloadDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DownloadDatasetRequest;

  getName(): string;
  setName(value: string): DownloadDatasetRequest;

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
    name: string,
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

export class GetDatabasesRequest extends jspb.Message {
  getConnectionnamespace(): string;
  setConnectionnamespace(value: string): GetDatabasesRequest;

  getConnectionname(): string;
  setConnectionname(value: string): GetDatabasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabasesRequest): GetDatabasesRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatabasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabasesRequest;
  static deserializeBinaryFromReader(message: GetDatabasesRequest, reader: jspb.BinaryReader): GetDatabasesRequest;
}

export namespace GetDatabasesRequest {
  export type AsObject = {
    connectionnamespace: string,
    connectionname: string,
  }
}

export class GetDatabasesResponse extends jspb.Message {
  getDatabasesList(): Array<string>;
  setDatabasesList(value: Array<string>): GetDatabasesResponse;
  clearDatabasesList(): GetDatabasesResponse;
  addDatabases(value: string, index?: number): GetDatabasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatabasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatabasesResponse): GetDatabasesResponse.AsObject;
  static serializeBinaryToWriter(message: GetDatabasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatabasesResponse;
  static deserializeBinaryFromReader(message: GetDatabasesResponse, reader: jspb.BinaryReader): GetDatabasesResponse;
}

export namespace GetDatabasesResponse {
  export type AsObject = {
    databasesList: Array<string>,
  }
}

export class GetTablesRequest extends jspb.Message {
  getConnectionnamespace(): string;
  setConnectionnamespace(value: string): GetTablesRequest;

  getConnectionname(): string;
  setConnectionname(value: string): GetTablesRequest;

  getDatabasename(): string;
  setDatabasename(value: string): GetTablesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTablesRequest): GetTablesRequest.AsObject;
  static serializeBinaryToWriter(message: GetTablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTablesRequest;
  static deserializeBinaryFromReader(message: GetTablesRequest, reader: jspb.BinaryReader): GetTablesRequest;
}

export namespace GetTablesRequest {
  export type AsObject = {
    connectionnamespace: string,
    connectionname: string,
    databasename: string,
  }
}

export class GetTablesResponse extends jspb.Message {
  getTablesList(): Array<string>;
  setTablesList(value: Array<string>): GetTablesResponse;
  clearTablesList(): GetTablesResponse;
  addTables(value: string, index?: number): GetTablesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTablesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTablesResponse): GetTablesResponse.AsObject;
  static serializeBinaryToWriter(message: GetTablesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTablesResponse;
  static deserializeBinaryFromReader(message: GetTablesResponse, reader: jspb.BinaryReader): GetTablesResponse;
}

export namespace GetTablesResponse {
  export type AsObject = {
    tablesList: Array<string>,
  }
}

export class ExecuteSqlRequest extends jspb.Message {
  getConnectionnamespace(): string;
  setConnectionnamespace(value: string): ExecuteSqlRequest;

  getConnectionname(): string;
  setConnectionname(value: string): ExecuteSqlRequest;

  getDatabasename(): string;
  setDatabasename(value: string): ExecuteSqlRequest;

  getSql(): string;
  setSql(value: string): ExecuteSqlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlRequest): ExecuteSqlRequest.AsObject;
  static serializeBinaryToWriter(message: ExecuteSqlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlRequest;
  static deserializeBinaryFromReader(message: ExecuteSqlRequest, reader: jspb.BinaryReader): ExecuteSqlRequest;
}

export namespace ExecuteSqlRequest {
  export type AsObject = {
    connectionnamespace: string,
    connectionname: string,
    databasename: string,
    sql: string,
  }
}

export class ExecuteSqlResponse extends jspb.Message {
  getTableview(): github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView | undefined;
  setTableview(value?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView): ExecuteSqlResponse;
  hasTableview(): boolean;
  clearTableview(): ExecuteSqlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlResponse): ExecuteSqlResponse.AsObject;
  static serializeBinaryToWriter(message: ExecuteSqlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlResponse;
  static deserializeBinaryFromReader(message: ExecuteSqlResponse, reader: jspb.BinaryReader): ExecuteSqlResponse;
}

export namespace ExecuteSqlResponse {
  export type AsObject = {
    tableview?: github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

export class SnapshotRequest extends jspb.Message {
  getConnectionnamespace(): string;
  setConnectionnamespace(value: string): SnapshotRequest;

  getConnectionname(): string;
  setConnectionname(value: string): SnapshotRequest;

  getDatabasename(): string;
  setDatabasename(value: string): SnapshotRequest;

  getSql(): string;
  setSql(value: string): SnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotRequest): SnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: SnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotRequest;
  static deserializeBinaryFromReader(message: SnapshotRequest, reader: jspb.BinaryReader): SnapshotRequest;
}

export namespace SnapshotRequest {
  export type AsObject = {
    connectionnamespace: string,
    connectionname: string,
    databasename: string,
    sql: string,
  }
}

export class SnapshotResponse extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): SnapshotResponse;

  getPath(): string;
  setPath(value: string): SnapshotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotResponse): SnapshotResponse.AsObject;
  static serializeBinaryToWriter(message: SnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotResponse;
  static deserializeBinaryFromReader(message: SnapshotResponse, reader: jspb.BinaryReader): SnapshotResponse;
}

export namespace SnapshotResponse {
  export type AsObject = {
    bucket: string,
    path: string,
  }
}

