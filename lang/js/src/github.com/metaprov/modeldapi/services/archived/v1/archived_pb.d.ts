import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class RecordAccountRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account): RecordAccountRequest;
  hasItem(): boolean;
  clearItem(): RecordAccountRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordAccountRequest): RecordAccountRequest.AsObject;
  static serializeBinaryToWriter(message: RecordAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordAccountRequest;
  static deserializeBinaryFromReader(message: RecordAccountRequest, reader: jspb.BinaryReader): RecordAccountRequest;
}

export namespace RecordAccountRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
    pb_delete: boolean,
  }
}

export class RecordConnectionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): RecordConnectionRequest;
  hasItem(): boolean;
  clearItem(): RecordConnectionRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordConnectionRequest): RecordConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: RecordConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordConnectionRequest;
  static deserializeBinaryFromReader(message: RecordConnectionRequest, reader: jspb.BinaryReader): RecordConnectionRequest;
}

export namespace RecordConnectionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    pb_delete: boolean,
  }
}

export class RecordLabRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): RecordLabRequest;
  hasItem(): boolean;
  clearItem(): RecordLabRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordLabRequest): RecordLabRequest.AsObject;
  static serializeBinaryToWriter(message: RecordLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordLabRequest;
  static deserializeBinaryFromReader(message: RecordLabRequest, reader: jspb.BinaryReader): RecordLabRequest;
}

export namespace RecordLabRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
    pb_delete: boolean,
  }
}

export class RecordTenantRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant): RecordTenantRequest;
  hasItem(): boolean;
  clearItem(): RecordTenantRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordTenantRequest): RecordTenantRequest.AsObject;
  static serializeBinaryToWriter(message: RecordTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordTenantRequest;
  static deserializeBinaryFromReader(message: RecordTenantRequest, reader: jspb.BinaryReader): RecordTenantRequest;
}

export namespace RecordTenantRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject,
    pb_delete: boolean,
  }
}

export class RecordServingSiteRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): RecordServingSiteRequest;
  hasItem(): boolean;
  clearItem(): RecordServingSiteRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordServingSiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordServingSiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordServingSiteRequest): RecordServingSiteRequest.AsObject;
  static serializeBinaryToWriter(message: RecordServingSiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordServingSiteRequest;
  static deserializeBinaryFromReader(message: RecordServingSiteRequest, reader: jspb.BinaryReader): RecordServingSiteRequest;
}

export namespace RecordServingSiteRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
    pb_delete: boolean,
  }
}

export class RecordLicenseRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License): RecordLicenseRequest;
  hasItem(): boolean;
  clearItem(): RecordLicenseRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordLicenseRequest): RecordLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: RecordLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordLicenseRequest;
  static deserializeBinaryFromReader(message: RecordLicenseRequest, reader: jspb.BinaryReader): RecordLicenseRequest;
}

export namespace RecordLicenseRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject,
    pb_delete: boolean,
  }
}

export class RecordNotifierRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): RecordNotifierRequest;
  hasItem(): boolean;
  clearItem(): RecordNotifierRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordNotifierRequest): RecordNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: RecordNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordNotifierRequest;
  static deserializeBinaryFromReader(message: RecordNotifierRequest, reader: jspb.BinaryReader): RecordNotifierRequest;
}

export namespace RecordNotifierRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
    pb_delete: boolean,
  }
}

export class RecordVirtualBucketRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): RecordVirtualBucketRequest;
  hasItem(): boolean;
  clearItem(): RecordVirtualBucketRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordVirtualBucketRequest): RecordVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: RecordVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordVirtualBucketRequest;
  static deserializeBinaryFromReader(message: RecordVirtualBucketRequest, reader: jspb.BinaryReader): RecordVirtualBucketRequest;
}

export namespace RecordVirtualBucketRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    pb_delete: boolean,
  }
}

export class RecordVirtualClusterRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster): RecordVirtualClusterRequest;
  hasItem(): boolean;
  clearItem(): RecordVirtualClusterRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordVirtualClusterRequest): RecordVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: RecordVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordVirtualClusterRequest;
  static deserializeBinaryFromReader(message: RecordVirtualClusterRequest, reader: jspb.BinaryReader): RecordVirtualClusterRequest;
}

export namespace RecordVirtualClusterRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.AsObject,
    pb_delete: boolean,
  }
}

export class RecordVirtualVolumeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume): RecordVirtualVolumeRequest;
  hasItem(): boolean;
  clearItem(): RecordVirtualVolumeRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordVirtualVolumeRequest): RecordVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: RecordVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: RecordVirtualVolumeRequest, reader: jspb.BinaryReader): RecordVirtualVolumeRequest;
}

export namespace RecordVirtualVolumeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject,
    pb_delete: boolean,
  }
}

export class RecordDataPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): RecordDataPipelineRequest;
  hasItem(): boolean;
  clearItem(): RecordDataPipelineRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataPipelineRequest): RecordDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataPipelineRequest;
  static deserializeBinaryFromReader(message: RecordDataPipelineRequest, reader: jspb.BinaryReader): RecordDataPipelineRequest;
}

export namespace RecordDataPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
    pb_delete: boolean,
  }
}

export class RecordDataPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun): RecordDataPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): RecordDataPipelineRunRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataPipelineRunRequest): RecordDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: RecordDataPipelineRunRequest, reader: jspb.BinaryReader): RecordDataPipelineRunRequest;
}

export namespace RecordDataPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject,
    pb_delete: boolean,
  }
}

export class RecordDataProductRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): RecordDataProductRequest;
  hasItem(): boolean;
  clearItem(): RecordDataProductRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataProductRequest): RecordDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataProductRequest;
  static deserializeBinaryFromReader(message: RecordDataProductRequest, reader: jspb.BinaryReader): RecordDataProductRequest;
}

export namespace RecordDataProductRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    pb_delete: boolean,
  }
}

export class RecordDataProductVersionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): RecordDataProductVersionRequest;
  hasItem(): boolean;
  clearItem(): RecordDataProductVersionRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataProductVersionRequest): RecordDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataProductVersionRequest;
  static deserializeBinaryFromReader(message: RecordDataProductVersionRequest, reader: jspb.BinaryReader): RecordDataProductVersionRequest;
}

export namespace RecordDataProductVersionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    pb_delete: boolean,
  }
}

export class RecordDatasetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): RecordDatasetRequest;
  hasItem(): boolean;
  clearItem(): RecordDatasetRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDatasetRequest): RecordDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDatasetRequest;
  static deserializeBinaryFromReader(message: RecordDatasetRequest, reader: jspb.BinaryReader): RecordDatasetRequest;
}

export namespace RecordDatasetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    pb_delete: boolean,
  }
}

export class RecordDataSourceRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): RecordDataSourceRequest;
  hasItem(): boolean;
  clearItem(): RecordDataSourceRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordDataSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordDataSourceRequest): RecordDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: RecordDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordDataSourceRequest;
  static deserializeBinaryFromReader(message: RecordDataSourceRequest, reader: jspb.BinaryReader): RecordDataSourceRequest;
}

export namespace RecordDataSourceRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    pb_delete: boolean,
  }
}

export class RecordEntityRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity): RecordEntityRequest;
  hasItem(): boolean;
  clearItem(): RecordEntityRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordEntityRequest): RecordEntityRequest.AsObject;
  static serializeBinaryToWriter(message: RecordEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordEntityRequest;
  static deserializeBinaryFromReader(message: RecordEntityRequest, reader: jspb.BinaryReader): RecordEntityRequest;
}

export namespace RecordEntityRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
    pb_delete: boolean,
  }
}

export class RecordFeaturesetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset): RecordFeaturesetRequest;
  hasItem(): boolean;
  clearItem(): RecordFeaturesetRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordFeaturesetRequest): RecordFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: RecordFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordFeaturesetRequest;
  static deserializeBinaryFromReader(message: RecordFeaturesetRequest, reader: jspb.BinaryReader): RecordFeaturesetRequest;
}

export namespace RecordFeaturesetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.AsObject,
    pb_delete: boolean,
  }
}

export class RecordFeatureRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature): RecordFeatureRequest;
  hasItem(): boolean;
  clearItem(): RecordFeatureRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordFeatureRequest): RecordFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: RecordFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordFeatureRequest;
  static deserializeBinaryFromReader(message: RecordFeatureRequest, reader: jspb.BinaryReader): RecordFeatureRequest;
}

export namespace RecordFeatureRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.AsObject,
    pb_delete: boolean,
  }
}

export class RecordFeaturePipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline): RecordFeaturePipelineRequest;
  hasItem(): boolean;
  clearItem(): RecordFeaturePipelineRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordFeaturePipelineRequest): RecordFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RecordFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: RecordFeaturePipelineRequest, reader: jspb.BinaryReader): RecordFeaturePipelineRequest;
}

export namespace RecordFeaturePipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.AsObject,
    pb_delete: boolean,
  }
}

export class RecordFeaturePipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun): RecordFeaturePipelineRunRequest;
  hasItem(): boolean;
  clearItem(): RecordFeaturePipelineRunRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordFeaturePipelineRunRequest): RecordFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: RecordFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: RecordFeaturePipelineRunRequest, reader: jspb.BinaryReader): RecordFeaturePipelineRunRequest;
}

export namespace RecordFeaturePipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject,
    pb_delete: boolean,
  }
}

export class RecordLabelingPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline): RecordLabelingPipelineRequest;
  hasItem(): boolean;
  clearItem(): RecordLabelingPipelineRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordLabelingPipelineRequest): RecordLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RecordLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: RecordLabelingPipelineRequest, reader: jspb.BinaryReader): RecordLabelingPipelineRequest;
}

export namespace RecordLabelingPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.AsObject,
    pb_delete: boolean,
  }
}

export class RecordLabelingPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun): RecordLabelingPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): RecordLabelingPipelineRunRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordLabelingPipelineRunRequest): RecordLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: RecordLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: RecordLabelingPipelineRunRequest, reader: jspb.BinaryReader): RecordLabelingPipelineRunRequest;
}

export namespace RecordLabelingPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.AsObject,
    pb_delete: boolean,
  }
}

export class RecordRecipeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): RecordRecipeRequest;
  hasItem(): boolean;
  clearItem(): RecordRecipeRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordRecipeRequest): RecordRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: RecordRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordRecipeRequest;
  static deserializeBinaryFromReader(message: RecordRecipeRequest, reader: jspb.BinaryReader): RecordRecipeRequest;
}

export namespace RecordRecipeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
    pb_delete: boolean,
  }
}

export class RecordRecipeRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): RecordRecipeRunRequest;
  hasItem(): boolean;
  clearItem(): RecordRecipeRunRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordRecipeRunRequest): RecordRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: RecordRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordRecipeRunRequest;
  static deserializeBinaryFromReader(message: RecordRecipeRunRequest, reader: jspb.BinaryReader): RecordRecipeRunRequest;
}

export namespace RecordRecipeRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
    pb_delete: boolean,
  }
}

export class RecordModelAutoBuilderRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder): RecordModelAutoBuilderRequest;
  hasItem(): boolean;
  clearItem(): RecordModelAutoBuilderRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordModelAutoBuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordModelAutoBuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordModelAutoBuilderRequest): RecordModelAutoBuilderRequest.AsObject;
  static serializeBinaryToWriter(message: RecordModelAutoBuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordModelAutoBuilderRequest;
  static deserializeBinaryFromReader(message: RecordModelAutoBuilderRequest, reader: jspb.BinaryReader): RecordModelAutoBuilderRequest;
}

export namespace RecordModelAutoBuilderRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject,
    pb_delete: boolean,
  }
}

export class RecordModelRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): RecordModelRequest;
  hasItem(): boolean;
  clearItem(): RecordModelRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordModelRequest): RecordModelRequest.AsObject;
  static serializeBinaryToWriter(message: RecordModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordModelRequest;
  static deserializeBinaryFromReader(message: RecordModelRequest, reader: jspb.BinaryReader): RecordModelRequest;
}

export namespace RecordModelRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    pb_delete: boolean,
  }
}

export class RecordModelPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): RecordModelPipelineRequest;
  hasItem(): boolean;
  clearItem(): RecordModelPipelineRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordModelPipelineRequest): RecordModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RecordModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordModelPipelineRequest;
  static deserializeBinaryFromReader(message: RecordModelPipelineRequest, reader: jspb.BinaryReader): RecordModelPipelineRequest;
}

export namespace RecordModelPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
    pb_delete: boolean,
  }
}

export class RecordNotebookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook): RecordNotebookRequest;
  hasItem(): boolean;
  clearItem(): RecordNotebookRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordNotebookRequest): RecordNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: RecordNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordNotebookRequest;
  static deserializeBinaryFromReader(message: RecordNotebookRequest, reader: jspb.BinaryReader): RecordNotebookRequest;
}

export namespace RecordNotebookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.AsObject,
    pb_delete: boolean,
  }
}

export class RecordNotebookRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun): RecordNotebookRunRequest;
  hasItem(): boolean;
  clearItem(): RecordNotebookRunRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordNotebookRunRequest): RecordNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: RecordNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordNotebookRunRequest;
  static deserializeBinaryFromReader(message: RecordNotebookRunRequest, reader: jspb.BinaryReader): RecordNotebookRunRequest;
}

export namespace RecordNotebookRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject,
    pb_delete: boolean,
  }
}

export class RecordReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): RecordReportRequest;
  hasItem(): boolean;
  clearItem(): RecordReportRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordReportRequest): RecordReportRequest.AsObject;
  static serializeBinaryToWriter(message: RecordReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordReportRequest;
  static deserializeBinaryFromReader(message: RecordReportRequest, reader: jspb.BinaryReader): RecordReportRequest;
}

export namespace RecordReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
    pb_delete: boolean,
  }
}

export class RecordStudyRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): RecordStudyRequest;
  hasItem(): boolean;
  clearItem(): RecordStudyRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordStudyRequest): RecordStudyRequest.AsObject;
  static serializeBinaryToWriter(message: RecordStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordStudyRequest;
  static deserializeBinaryFromReader(message: RecordStudyRequest, reader: jspb.BinaryReader): RecordStudyRequest;
}

export namespace RecordStudyRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    pb_delete: boolean,
  }
}

export class RecordCurtainRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain): RecordCurtainRequest;
  hasItem(): boolean;
  clearItem(): RecordCurtainRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordCurtainRequest): RecordCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: RecordCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordCurtainRequest;
  static deserializeBinaryFromReader(message: RecordCurtainRequest, reader: jspb.BinaryReader): RecordCurtainRequest;
}

export namespace RecordCurtainRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.AsObject,
    pb_delete: boolean,
  }
}

export class RecordPredictorRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): RecordPredictorRequest;
  hasItem(): boolean;
  clearItem(): RecordPredictorRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordPredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPredictorRequest): RecordPredictorRequest.AsObject;
  static serializeBinaryToWriter(message: RecordPredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPredictorRequest;
  static deserializeBinaryFromReader(message: RecordPredictorRequest, reader: jspb.BinaryReader): RecordPredictorRequest;
}

export namespace RecordPredictorRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
    pb_delete: boolean,
  }
}

export class RecordPredictionPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline): RecordPredictionPipelineRequest;
  hasItem(): boolean;
  clearItem(): RecordPredictionPipelineRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordPredictionPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPredictionPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPredictionPipelineRequest): RecordPredictionPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: RecordPredictionPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPredictionPipelineRequest;
  static deserializeBinaryFromReader(message: RecordPredictionPipelineRequest, reader: jspb.BinaryReader): RecordPredictionPipelineRequest;
}

export namespace RecordPredictionPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline.AsObject,
    pb_delete: boolean,
  }
}

export class RecordPredictionPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun): RecordPredictionPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): RecordPredictionPipelineRunRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordPredictionPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPredictionPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPredictionPipelineRunRequest): RecordPredictionPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: RecordPredictionPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPredictionPipelineRunRequest;
  static deserializeBinaryFromReader(message: RecordPredictionPipelineRunRequest, reader: jspb.BinaryReader): RecordPredictionPipelineRunRequest;
}

export namespace RecordPredictionPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun.AsObject,
    pb_delete: boolean,
  }
}

export class RecordConversationRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation): RecordConversationRequest;
  hasItem(): boolean;
  clearItem(): RecordConversationRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordConversationRequest): RecordConversationRequest.AsObject;
  static serializeBinaryToWriter(message: RecordConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordConversationRequest;
  static deserializeBinaryFromReader(message: RecordConversationRequest, reader: jspb.BinaryReader): RecordConversationRequest;
}

export namespace RecordConversationRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject,
    pb_delete: boolean,
  }
}

export class RecordPostmortemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): RecordPostmortemRequest;
  hasItem(): boolean;
  clearItem(): RecordPostmortemRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordPostmortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPostmortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPostmortemRequest): RecordPostmortemRequest.AsObject;
  static serializeBinaryToWriter(message: RecordPostmortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPostmortemRequest;
  static deserializeBinaryFromReader(message: RecordPostmortemRequest, reader: jspb.BinaryReader): RecordPostmortemRequest;
}

export namespace RecordPostmortemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
    pb_delete: boolean,
  }
}

export class RecordRunbookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): RecordRunbookRequest;
  hasItem(): boolean;
  clearItem(): RecordRunbookRequest;

  getDelete(): boolean;
  setDelete(value: boolean): RecordRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordRunbookRequest): RecordRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: RecordRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordRunbookRequest;
  static deserializeBinaryFromReader(message: RecordRunbookRequest, reader: jspb.BinaryReader): RecordRunbookRequest;
}

export namespace RecordRunbookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
    pb_delete: boolean,
  }
}

